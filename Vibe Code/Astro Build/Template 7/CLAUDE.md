# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

Template 7 is a **pre-scaffold workspace** — no Astro project has been initialized yet. The directory contains source imagery and a Drawbridge annotation file (`bridge.md`) for UI task processing.

## Asset Library

Two image collections are available for use when building the site:

- `Electrical Images/` — electrician service photos (residential, commercial, solar, switchboard, emergency)
- `Plumbing Images/` — plumbing service photos (residential, emergency, hot water, kitchen)

These are `.webp` and `.jpg.webp` format, ready for use in `public/` or `src/assets/` once a project is scaffolded.

## Drawbridge UI Annotation Workflow (`/bridge`)

`bridge.md` defines the `/bridge` skill for processing visual UI annotation tasks from the Drawbridge Chrome extension. Task files live in `.moat/`:

- `.moat/moat-tasks-detail.json` — machine-readable task list with CSS selectors and status
- `.moat/moat-tasks.md` — human-readable checklist
- `.moat/screenshots/` — screenshot context per annotation

**Task status lifecycle (never skip steps):**
```
"to do" → "doing" → "done"
```
Always update to `"doing"` in the JSON *before* implementing, then update to `"done"` and tick the `.md` checkbox after.

## Starting a New Astro Project Here

When scaffolding Template 7, follow the conventions established in sibling templates (Template 5, Template 3, Template 2) in the parent `Astro Build/` directory. Use Astro 5 with component-based pages and Tailwind CSS.

Typical scaffold command:
```bash
npm create astro@latest . -- --template minimal --typescript strict
npx astro add tailwind
```

Common dev commands (once scaffolded):
```bash
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview production build
```
