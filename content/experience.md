---
title: "Experience"
layout: "resume"
description: "25 years building resilient, automated, and secure infrastructure — from network engineering to cloud DevOps leadership."

stats:
  - num: "25+ yrs"
    label: "in IT infrastructure & security"
  - num: "10+"
    label: "AWS accounts · US / EU / GovCloud"
  - num: "$10M"
    label: "infrastructure budget managed"
  - num: "600+"
    label: "servers across 4 datacenters"

jobs:
  - company: "Origami Risk, LLC"
    title: "IT Operations Team Lead — DevOps"
    location: "Chicago, IL"
    start: "Jul 2017"
    end: "Present"
    current: true
    highlights:
      - "Provisioned and operate <span class='num'>10+</span> AWS accounts spanning the US, EU, and GovCloud regions."
      - "Converted all infrastructure to <b>Terraform</b> IaC using custom service modules and workspaces — every change peer-reviewed in GitHub."
      - "Containerized the entire SaaS application stack with Podman, moving from stacked VMs to Amazon ECR/ECS for faster, consistent deployments."
      - "Designed a CI/CD pipeline with Ansible + TeamCity that builds and deploys service containers to ECS."
      - "Stood up the Ansible Automation Platform on an Aurora PostgreSQL RDS with RBAC for governed playbook execution."
      - "Built an event-driven pipeline producing <b>DISA STIG CAT II</b>-compliant machine images."
      - "Created a Slackbot front-end for Ansible playbooks, cutting after-hours support load for cross-functional teams."
      - "Wrote Python Lambda webhooks integrating Datadog, Sumologic, and Jira; added an AWS API Gateway for governance and rate limiting."

  - company: "5th Column LLC"
    title: "Director, Infrastructure Engineering & Operations"
    location: "Chicago, IL"
    start: "Jun 2015"
    end: "Jul 2017"
    highlights:
      - "Planned and managed a <span class='num'>$10M</span> budget, building a cost model to forecast growth against SaaS security pricing."
      - "Architected and built multiple active-active datacenters for MSSP-hosted applications (Cisco ASR/Nexus, Pure flash storage, Juju-hosted OpenStack)."
      - "Led onboarding of all MSSP clients into cloud-based OpenStack tenancy."
      - "Designed per-tenant ELK 5.x clusters that scale horizontally with resource consumption."
      - "Drove role-based automation across all tenants with Ansible and SaltStack."

  - company: "Marsh ClearSight"
    title: "ASP Infrastructure Manager"
    location: "Chicago, IL"
    start: "Apr 2010"
    end: "Jun 2015"
    highlights:
      - "Owned availability of business-critical, client-facing SaaS across <span class='num'>4 datacenters</span> and <span class='num'>600+</span> servers — 24×7×365 with financial penalties for outages."
      - "Led a team of 6 engineers across Windows, Unix, networking, security, and EMC storage."
      - "Migrated the datacenter to a cloud-based IaaS offering with CenturyLink Managed Hosting."
      - "Supported biannual SOC 1 audits and implemented CA LISA Release Automation for continuous delivery."

  - company: "Marsh ClearSight"
    title: "Senior Systems Engineer"
    location: "Chicago, IL"
    start: "Dec 2007"
    end: "Apr 2010"
    highlights:
      - "Administered VMware ESX 3.5 → 4.1 across 20 hosts and <span class='num'>500+</span> virtual machines, with automated Kickstart installs."
      - "Built a custom Nagios monitoring solution with scripted event handlers that saved the company <span class='num'>$100K+</span> versus a commercial product."
      - "Designed a PXE install menu to auto-deploy Windows / Linux / ESX systems."

earlier:
  - company: "G2 SwitchWorks"
    title: "Senior Systems Engineer"
    when: "2007"
  - company: "Cision"
    title: "Senior Systems Engineer"
    when: "2004 – 2007"
  - company: "Harmony Health Plan"
    title: "Senior Systems Engineer"
    when: "2004"
  - company: "Netrix LLC"
    title: "Senior Systems Engineer (Consulting)"
    when: "2002 – 2004"
  - company: "deCODE Genetics, Inc."
    title: "Network / Security Engineer"
    when: "1999 – 2002"

certs:
  - name: "CCNP — BCSI & BCMSN"
    org: "Cisco Systems"
    year: "2004–2007"
  - name: "CCNA Security"
    org: "Cisco Systems"
    year: "2016"
  - name: "CCNA Route / Switch"
    org: "Cisco Systems"
    year: "2016"
  - name: "Advanced Wireless LAN Field Specialist"
    org: "Cisco Systems"
    year: "2007"
  - name: "B.S. Computer Information Systems"
    org: "St. Norbert College — De Pere, WI"
    year: "1999"
---

From hand-configuring redundant Cisco networks in 1999 to automating multi-region AWS
estates today, the throughline has stayed the same: take infrastructure that's sprawling,
fragile, and manual, and turn it into something automated, observable, and secure. Below is
the path that got me here.
