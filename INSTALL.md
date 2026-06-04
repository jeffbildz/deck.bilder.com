# Install — Terminal Status theme (hosted on Render)

Your site is hosted on **Render** (render.com): your GitHub repo is the source, and Render
automatically rebuilds and deploys on every push to master. This bundle drops into your
`jeffbildz/deck.bilder.com` repo.

## What's in here
```
config.toml                  → replaces your root config.toml
content/about.md             → your About page
content/experience.md        → the resume/timeline page
content/post/…               → blog posts (GitOps pipeline + Transit Gateway)
themes/terminal-status/      → the dark theme
static/CNAME                 → harmless on Render; safe to keep or delete
.gitignore                   → stops committing the built /public folder
```

## One-time Render setup (do this BEFORE pushing)

Log in at **render.com** (likely "Sign in with GitHub" as `jeffbildz`) → open the Static
Site connected to `deck.bilder.com`:

1. **Environment** → add variable: `HUGO_VERSION` = `0.140.2`
   *(Critical — the old site built on Hugo 0.61 from 2019; this theme needs a modern Hugo.)*
2. **Settings** → confirm: Build Command = `hugo --gc --minify` · Publish Directory = `public`

## Then deploy

1. Merge this folder into your repo root (make sure `config.toml` and
   `themes/terminal-status/static/css/main.css` actually overwrite the old ones).
2. Move your photo: `git mv me.jpg static/me.jpg`
3. Stop tracking builds: `git rm -r --cached public && git commit -m "stop tracking build output"`
   (Render builds fresh from source; committed builds are unnecessary.)
4. Remove the old theme submodule (see below), commit, push.
5. Watch the deploy in the Render dashboard → Events. Done.

### Removing the old Nix theme submodule
```
git submodule deinit -f themes/hugo-theme-nix
git rm -f themes/hugo-theme-nix
rm -rf .git/modules/themes/hugo-theme-nix
git commit -m "Remove unused hugo-theme-nix submodule"
```

## Preview locally first
```
hugo server        # http://localhost:1313 — hard-refresh (Cmd+Shift+R) if styles look stale
```

## Writing a post
Create `content/post/my-title.md` with front matter (title, date, tags, categories,
description), write markdown, push. Render rebuilds; the post appears on the homepage
feed and under its tags automatically.

## Customizing
- Identity, roles, social links, status line → `config.toml` [params]
- Career timeline / stats / certs → front matter of `content/experience.md`
- Capabilities & stack copy → `themes/terminal-status/layouts/index.html`
- Colors / fonts → CSS variables atop `themes/terminal-status/static/css/main.css`
