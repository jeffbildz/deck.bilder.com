# Install — Terminal Status theme + GitOps

This bundle drops straight into your `jeffbildz/deck.bilder.com` repo. Everything here
mirrors your existing Hugo layout, so it's mostly copy-in-place.

## What's in here
```
config.toml                         → replaces your root config.toml
content/about.md                    → your About page (edit freely)
content/post/…                      → starter blog post
themes/terminal-status/             → the new dark theme (drop in alongside your old one)
static/CNAME                        → keeps jeffbilder.com attached on every deploy
.github/workflows/deploy.yml        → the GitOps pipeline (auto build + deploy)
.gitignore                          → stops committing the built /public folder
```

## Steps

1. **Copy the files in.** Merge this folder into your repo root. Your existing
   `/content`, `/images`, and `me.jpg` stay as they are.

2. **Point Hugo at the new theme.** Already done in the included `config.toml`
   (`theme = "terminal-status"`). If you keep your own config instead, just change that
   one line. The new theme takes over the entire site on the next build.

3. **Your photo.** Move `me.jpg` into `static/me.jpg` so Hugo always publishes it
   (it's used for link/social previews). `git mv me.jpg static/me.jpg`.

4. **Turn on GitOps.** In GitHub: **Settings → Pages → Build and deployment →
   Source = GitHub Actions**. Commit and push — the workflow builds Hugo and deploys.
   Watch it run under the **Actions** tab.

5. **Stop committing builds.** The `.gitignore` excludes `/public`. If `public/` is
   already tracked, untrack it once: `git rm -r --cached public && git commit -m "stop tracking build output"`.

6. **(Optional) Drop the old theme submodule.** Once you're happy:
   ```
   git submodule deinit -f themes/<old-theme>
   git rm -f themes/<old-theme>
   ```

## Run it locally first (recommended)
```
hugo server -D        # http://localhost:1313  — live preview as you edit
```

## Writing a post
Create `content/post/my-title.md`:
```
---
title: "My Post Title"
date: 2026-06-03
draft: false
tags: ["gitops", "aws"]
categories: ["infrastructure"]
description: "One-line summary for SEO + social cards."
---

Your markdown here. Code blocks are syntax-highlighted automatically.
```
Push it. The pipeline builds and deploys; it shows up on the homepage feed and under its tags.

## Customizing
- **Identity, roles, social links, status line** → all in `config.toml` under `[params]`.
- **Capabilities / tech stack copy** → `themes/terminal-status/layouts/index.html`
  (clearly marked sections — edit the text directly).
- **Colors / fonts** → CSS variables at the top of
  `themes/terminal-status/static/css/main.css`.

> Heads up on the host: the pipeline targets **GitHub Pages**. If you discover you're on
> Netlify/Vercel/Cloudflare instead, ping me and I'll swap in the equivalent deploy config.
