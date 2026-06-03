---
title: "Designing a GitOps Pipeline That Survives 3am"
date: 2026-05-28
draft: false
tags: ["gitops", "ci-cd", "devops"]
categories: ["infrastructure"]
description: "What I actually mean when I say git should be the single source of truth — and how to build a pipeline you trust enough to ignore."
---

The best compliment a deploy pipeline can get is silence. Nobody Slacks about it. Nobody
"just kicks off the build." It runs because someone merged a pull request, and the system
quietly makes reality match the repo.

That's the whole idea behind GitOps, and it's less about tooling than it is about a single
rule: **the desired state of your system lives in git, and a machine — not a human — is
responsible for closing the gap between git and production.**

## The 3am test

Here's the test I apply to any pipeline I build: if it breaks at 3am, can a tired on-call
engineer who didn't write it understand what happened and roll it back in under five minutes?

If the answer is "no," the pipeline is too clever. Most outages I've cleaned up weren't caused
by the change itself — they were caused by *not being able to tell what changed.* GitOps fixes
that by making every change a reviewable, revertible commit.

## What "good" looks like

A pipeline I trust has four properties:

1. **Declarative.** The repo describes the *what*, not the *how*. No imperative scripts that
   only work in the order someone remembers.
2. **Reproducible.** Pin your versions. A build from last Tuesday and a build today should
   produce identical output. Floating `latest` tags are how you get paged.
3. **Auditable.** Every deploy traces back to a commit, an author, and an approval. Your git
   log *is* your change-management record.
4. **Reversible.** Rolling back is `git revert`, not a heroic manual intervention.

## Start smaller than you think

You don't need Argo CD and a service mesh to do GitOps. This very site runs on it: push
markdown, a GitHub Actions workflow builds Hugo, and the result deploys automatically. The
whole trigger is just this:

```yaml
on:
  push:
    branches: [master]   # git is the source of truth
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: hugo --gc --minify   # build
      # ...then publish ./public
```

No manual builds, no dragging files into a folder. The principle scales from a personal blog to a
fleet of Kubernetes clusters — the blast radius changes, the discipline doesn't.

That's the thread through everything I build: make the boring path the easy path, and the
system gets safer every time someone touches it.

*More notes like this coming. If you're untangling a deploy process that nobody trusts, I'd
genuinely enjoy hearing about it.*
