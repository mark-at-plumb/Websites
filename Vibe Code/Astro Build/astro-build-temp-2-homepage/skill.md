---
description: Build a Trade Authority homepage using the Astro 5 Template 2 stack — split hero, trust strip, services, service areas map, orange CTA with photo, Google Maps embed, and footer.
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - Agent
---

# Astro Build Temp 2 - Homepage

Build a homepage using the "Trade Authority" Astro 5 template established in Template 2 (Direction 1). This is a local-trades homepage template for suburb-targeted micro-sites.

## Stack

- **Astro 5** — static output (`output: 'static'`, no adapter)
- **Tailwind CSS v4** — via `@tailwindcss/vite` Vite plugin (NOT `@astrojs/tailwind`)
- **React** — via `@astrojs/react`
- **Variable fonts** — self-hosted via `@fontsource-variable/*` (no Google Fonts CDN)

## Design Direction: Trade Authority

**Palette:**
- Primary: `#111827` (near-black)
- Accent: `#EA6C0A` (orange)
- Background: `#FFFFFF`
- Surface: `#F9FAFB`

**Fonts:**
- Heading: `Raleway Variable`
- Body: `Inter Variable`

**Personality:** Local · Direct · Trustworthy · Professional · Human

## Page Structure (top → bottom)

1. **Nav** — sticky dark bar, logo left, phone CTA right
2. **Hero** — split layout 58/42, dark left (text) / right (portrait photo with angled clip-path)
3. **TrustStrip** — horizontal bar of 5–6 trust badges (licensed, insured, warranty, etc.)
4. **Services** — grid of service cards with icons
5. **WhyChooseUs** — alternating image/text feature blocks
6. **Process** — numbered 3-step process section
7. **Comparison** — us vs. them table
8. **Testimonials** — star-rated review cards
9. **Credentials** — license/badge strip
10. **ServiceAreas** — suburb tag list + map image (full, uncropped: `w-full h-auto`)
11. **FinalCTA** — orange section with background photo (88% orange overlay) + headline + phone CTA
12. **Google Maps GBP embed** — full-width iframe (height 420px) between FinalCTA and Footer
13. **Footer** — 3-col: brand + services list + suburbs list; van skyline image strip above copyright

## Key Implementation Details

### astro.config.mjs
```js
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### Tailwind v4 CSS setup (src/styles/global.css)
```css
@import 'tailwindcss';
@import '@fontsource-variable/raleway';
@import '@fontsource-variable/inter';

@theme {
  --color-brand-primary:   #111827;
  --color-brand-accent:    #EA6C0A;
  --color-brand-bg:        #FFFFFF;
  --color-brand-surface:   #F9FAFB;
  --color-brand-text:      #111827;
  --color-brand-muted:     #6B7280;
  --font-heading: 'Raleway Variable', system-ui, sans-serif;
  --font-body:    'Inter Variable', system-ui, sans-serif;
}
```

### Hero — split layout with angled image
```astro
<section class="relative bg-brand-primary text-white overflow-hidden" style="min-height: clamp(520px, 90vh, 820px);">
  <div class="relative mx-auto max-w-7xl px-5 sm:px-8 h-full grid lg:grid-cols-[58fr_42fr] gap-0 items-stretch" style="min-height: inherit; padding-top: calc(var(--nav-h, 76px) + clamp(3rem,6vw,5rem)); padding-bottom: clamp(4rem,8vw,6rem);">
    <!-- LEFT: text -->
    <div class="flex flex-col justify-center pr-0 lg:pr-12 pb-8 lg:pb-0">
      <!-- eyebrow, h1, subtext, CTAs, star proof -->
    </div>
    <!-- RIGHT: photo with angled left edge -->
    <div class="hidden lg:block relative">
      <div class="absolute inset-0 overflow-hidden" style="clip-path: polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%);">
        <img src="/ab-images/[portrait-photo].webp" class="w-full h-full object-cover object-center" loading="eager" />
        <div class="absolute inset-0" style="background: linear-gradient(to right, #111827 0%, transparent 25%);"></div>
        <div class="absolute bottom-0 left-0 right-0 h-1 bg-brand-accent"></div>
      </div>
    </div>
  </div>
</section>
```

### FinalCTA — orange section with photo background
```astro
<section class="relative bg-brand-accent text-brand-primary overflow-hidden py-[clamp(4rem,9vw,8rem)]">
  <div class="pointer-events-none absolute inset-0">
    <img src="/ab-images/[fleet-or-team-photo].webp" class="w-full h-full object-cover object-center" loading="lazy" />
    <div class="absolute inset-0 bg-brand-accent/88"></div>
  </div>
  <div class="pointer-events-none absolute inset-0 opacity-[0.06]" style="background-image:radial-gradient(circle, rgba(17,24,39,.9) 1.5px, transparent 1.5px);background-size:26px 26px;"></div>
  <div class="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
    <!-- headline, phone CTA, free quote link -->
  </div>
</section>
```

### Google Maps GBP embed (in page file, between FinalCTA and Footer)
```astro
<div class="bg-brand-primary">
  <iframe
    src="https://maps.google.com/maps?cid=[YOUR_CID]&output=embed"
    width="100%"
    height="420"
    style="border:0;display:block;"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    title="[Business Name] — Google Maps"
  ></iframe>
</div>
```

### Service Areas map — show full image uncropped
```astro
<div data-reveal>
  <img src="/ab-images/[map-image].webp" alt="[Suburb] service area map" loading="lazy" class="w-full h-auto" />
</div>
```

### Scroll reveal animation (global style)
```css
@keyframes d1Rise { from { opacity:0; transform: translateY(22px); } to { opacity:1; transform:none; } }
.d1-rise { opacity:0; animation: d1Rise .7s cubic-bezier(.2,.7,.2,1) forwards; animation-delay: var(--d,0s); }
@media (prefers-reduced-motion: reduce) { .d1-rise { animation: none; opacity:1; } }
```
Add `data-reveal` to elements for scroll-triggered reveal (via IntersectionObserver in Reveal.astro).

## Dev Server

Per CLAUDE.md, always start in background mode:
```
astro dev --background
```

## Packages to install
```
npm install astro @astrojs/react @tailwindcss/vite tailwindcss
npm install @fontsource-variable/raleway @fontsource-variable/inter
```

## Notes
- Images go in `public/ab-images/` — reference as `/ab-images/filename.webp`
- Per-direction color overrides go in `<style is:global>` on `:root` in the page file
- Do NOT use `@astrojs/cloudflare` — incompatible with Astro 7; use static output only
- The map image in Service Areas must use `w-full h-auto` (not `object-cover`) to show the full image uncropped
