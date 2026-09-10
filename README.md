# pranavvr.github.io

Personal portfolio. Plain HTML, CSS and ~50 lines of JS — no build step, no dependencies,
nothing to keep upgrading.

```
index.html        all content lives here
css/style.css     two themes via [data-theme] on <html>
js/main.js        theme toggle, scroll reveal, nav hairline
.nojekyll         tell GitHub Pages to serve files as-is
```

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Editing

Content is hand-written in `index.html` — find the section comment (`<!-- projects -->`) and edit
the markup directly.

- **New project** — copy an `<article class="card">` block and change the text and links.
- **New role** — copy an `<li class="role">` block into the `<ol class="timeline">`. The first one
  in the list automatically gets the filled accent dot.
- **Colors** — every color is a custom property at the top of `css/style.css`. Change `--accent`
  in both `:root` (dark) and `[data-theme="light"]` and the whole site follows.
- Keep the `reveal` class on anything that should fade in on scroll.

## Deploying

Pushing to `main` publishes automatically once Pages is enabled — see `DEPLOY.md`.
