---
title: "From VPC Peering to Transit Gateway: Untangling a Nine-VPC Mesh"
date: 2026-06-04
draft: false
tags: ["aws", "networking", "transit-gateway"]
categories: ["infrastructure"]
description: "Why our VPC peering mesh had to die, how a three-Transit-Gateway hub-and-spoke replaced it, and the lessons that only show up in production."
---

VPC peering is one of those AWS features that works great right up until the day it
quietly becomes your biggest operational liability. Nobody decides to build a peering
mesh — you just approve one peering connection at a time until you wake up with one.

Our estate is 26 AWS accounts across US commercial, EU, and GovCloud. The mesh that
mattered connected nine VPCs across seven of those accounts and three regions. The math
on full-mesh peering is brutal: nine VPCs means up to 36 peering connections, each with
its own pair of route table entries, each managed in a different account, each one a
place for drift to hide.

## The symptom that forced the issue

Peering's defining constraint is that it is **non-transitive**. VPC A can talk to VPC B,
and B can talk to C, but A cannot reach C through B — ever. AWS will not forward that
traffic, no matter what your route tables imply.

For most stateless web traffic you can live with that. Where it bit us was identity:
**Kerberos and gMSA-based workloads running on ECS Fargate**. Windows containers using
group Managed Service Accounts need a clean path to domain controllers, and when a task
landed in a VPC whose only route to the DCs was "through" another VPC, authentication
failed in ways that looked nothing like a networking problem. The app teams saw
credential errors. The actual root cause was a routing topology decision made years
earlier. Those are the worst kinds of failures — the distance between symptom and cause
is enormous.

That was the forcing function. We ran a formal migration assessment across the nine VPCs
and designed the replacement.

## The design: three hubs, scoped routes

We landed on a **three-Transit-Gateway hub-and-spoke** — one TGW per region. Every VPC
gets exactly one attachment to its regional hub. Connectivity stops being a mesh of
point-to-point agreements and becomes a routing policy you administer in one place.

The piece that makes TGW more than "peering with extra steps" is **scoped route tables**.
A Transit Gateway can hold multiple route tables, and you choose which attachments
associate with which table. That turns the hub into a segmentation tool: production
attachments see production routes; lower environments see theirs; nothing is reachable
by accident. Reachability becomes something you grant deliberately instead of something
you inherit from topology.

Our datacenter connectivity hangs off the same hubs with **DC-specific static routes**,
so hybrid traffic follows the same policy model as everything else.

And because nothing in our shop exists unless it's in Git, the whole thing is Terraform:

```hcl
resource "aws_ec2_transit_gateway" "hub" {
  description                     = "regional hub - us-east-1"
  default_route_table_association = "disable"  # no accidental any-to-any
  default_route_table_propagation = "disable"
  tags                            = { ManagedBy = "terraform" }
}

resource "aws_ec2_transit_gateway_vpc_attachment" "app" {
  transit_gateway_id = aws_ec2_transit_gateway.hub.id
  vpc_id             = var.vpc_id
  subnet_ids         = var.tgw_subnet_ids
}
```

Disabling the default route table association is the line I'd underline. The default
behavior — every attachment propagating into one shared table — silently rebuilds the
any-to-any mesh you were trying to escape.

## What only production teaches you

**Inter-region TGW peering does not propagate routes.** Within a region, attachments can
propagate routes dynamically. Across a TGW peering connection, every route is static —
you write it, you own it. Plan for that operationally; it isn't in the diagram you drew
on the whiteboard.

**The cost model inverts.** Peering itself costs nothing; you pay only data transfer.
Transit Gateway bills per attachment-hour *and* per gigabyte processed. We accepted the
trade gladly — predictable spend for an operating model humans can reason about — but
model it before finance discovers it for you.

**Migrate one VPC at a time.** TGW and peering can coexist, so each VPC moved on its own
change window: attach, shift routes, verify, then tear the old peerings down. Boring,
reviewable pull requests. No big-bang cutover.

**Find your transitive dependencies before they find you.** Our Kerberos failure was a
transitive-routing assumption nobody had written down. Trace your identity, DNS, and
monitoring paths first — they're always the hidden ones.

The mesh is gone now. New VPCs get one attachment, one route-table association, one pull
request. Nobody approves peering connections anymore, and nobody debugs authentication
errors that are secretly routing errors. That's the whole goal: infrastructure boring
enough to ignore.

*If you're staring down your own peering mesh and wondering whether the migration is
worth it, I'd genuinely enjoy comparing notes.*
