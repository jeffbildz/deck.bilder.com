---
title: "Experience"
layout: "resume"
description: "DevOps and infrastructure leader with 20+ years architecting, securing, and automating SaaS platforms across AWS, GovCloud, and Azure."

stats:
  - num: "20+ yrs"
    label: "in IT infrastructure & security"
  - num: "Team of 7"
    label: "DevOps engineers led"
  - num: "10+"
    label: "AWS accounts · US / EU / GovCloud"
  - num: "$10M"
    label: "infrastructure budget managed"

jobs:
  - company: "Origami Risk, LLC"
    title: "DevOps Manager / IT Operations Team Lead"
    location: "Chicago, IL"
    start: "Jul 2017"
    end: "Present"
    current: true
    highlights:
      - "Manage a team of <span class='num'>7</span> DevOps engineers operating a multi-region SaaS platform across AWS commercial, AWS GovCloud, and Azure DevOps — owning hiring, mentorship, performance, and roadmap."
      - "Led a VPC-peering &rarr; <b>Transit Gateway</b> migration spanning 9 VPCs across 7 AWS accounts and 3 regions, designing a three-TGW hub-and-spoke architecture with scoped routing."
      - "Provisioned <span class='num'>10+</span> AWS accounts (US / EU / GovCloud) with consistent VPC, IAM, and observability baselines deployed via <b>Terraform</b>."
      - "Ran an IAM least-privilege audit across <span class='num'>14</span> environments, identifying and remediating access outliers."
      - "Migrated QA build agents from TeamCity to <b>Azure DevOps</b> on EC2 Auto Scaling Groups (up to 40) with pre-baked AMIs, hitting a one-hour SLA for Playwright sharded test execution."
      - "Standardized reusable Azure DevOps YAML pipeline templates enforcing consistent build, test, security-scan, and release stages across the engineering org."
      - "Built event-driven pipelines producing <b>DISA STIG CAT II</b>-compliant machine images with Ansible."
      - "Integrated CloudZero cost telemetry across the multi-account AWS estate using least-privilege scoped keys."
      - "Run the team on Scrum in Azure DevOps Boards and partner with Product &amp; Engineering leadership to align the quarterly DevOps roadmap to business priorities."
      - "Converted infrastructure to Terraform IaC under GitHub peer review with linting enforcement &mdash; every change version-controlled and monitored."

  - company: "5th Column LLC"
    title: "Director, Infrastructure Engineering & Operations"
    location: "Chicago, IL"
    start: "Jun 2015"
    end: "Jul 2017"
    highlights:
      - "Owned availability of multiple data centers hosting managed security solutions; planned and managed a <span class='num'>$10M</span> annual budget."
      - "Architected active-active data centers for MSSP-hosted apps (Cisco ASR/Nexus, Pure flash storage, Juju-deployed OpenStack)."
      - "Led the Skunk Works function and acted as liaison to Product/Development for SaaS security releases."
      - "Delivered Zabbix distributed monitoring and per-tenant ELK 5.x clusters that scale horizontally with client consumption."
      - "Drove role-based Ansible/SaltStack automation for consistent, secure tenant configuration."

  - company: "Marsh ClearSight"
    title: "ASP Infrastructure Manager"
    location: "Chicago, IL"
    start: "Apr 2010"
    end: "Jun 2015"
    highlights:
      - "Owned availability of business-critical, client-facing SaaS at 24&times;7&times;365 with contractual outage penalties &mdash; across <span class='num'>4 data centers</span> and <span class='num'>600+</span> servers."
      - "Managed a team of 6 engineers across Windows, Unix, networking, security, and EMC storage."
      - "Led data center migration of storage, servers, and networking to CenturyLink Managed Hosting IaaS."
      - "Implemented CA LISA Release Automation for continuous deployment and supported biannual SOC 1 audits."

  - company: "Marsh ClearSight"
    title: "Senior Systems Engineer"
    location: "Chicago, IL"
    start: "Dec 2007"
    end: "Apr 2010"
    highlights:
      - "Technical lead for data center technologies; administered VMware ESX 3.5 &rarr; 4.1 across 20 hosts and <span class='num'>500+</span> VMs."
      - "Designed a custom Nagios monitoring solution with scripted event handlers, saving the company <span class='num'>$100K+</span> versus commercial alternatives."
      - "Built PXE menu-driven automated installs for Windows, Linux, and ESX systems."

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

From hand-configuring redundant Cisco networks in 1999 to managing a team automating
multi-region AWS, GovCloud, and Azure DevOps estates today, the throughline has stayed the
same: take infrastructure that's sprawling, fragile, and manual, and turn it into something
automated, observable, and secure. Equally at home diagnosing a 2 AM production outage and
presenting architectural trade-offs to executives. Below is the path that got me here.
