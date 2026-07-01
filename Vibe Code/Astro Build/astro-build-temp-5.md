---
description: Reference skill for the Astro 5 / Tailwind CSS v4 trade site pattern used in Template 5 (aptecplumbing.com.au rebuild). Use this when building or extending similar trade/service business sites.
---

# Astro Build — Template 5 Reference

This skill captures the design system, component patterns, and implementation decisions from the Template 5 trade site build. Reference it when building new pages, adding sections, or troubleshooting.

---

## Tech Stack

- **Astro 5** (v7+) — static site, `.astro` pages and components
- **Tailwind CSS v4** via `@tailwindcss/vite` Vite plugin (no `tailwind.config.js`)
- **Dev server**: `astro dev --background` (per CLAUDE.md)
- **Default port**: 4322

---

## Brand Tokens (CSS custom properties)

Defined in `src/layouts/Direction1Layout.astro` `<style is:global>`:

```css
--color-brand-primary:   #156ECE;   /* blue */
--color-brand-secondary: #0B2847;   /* dark navy */
--color-brand-accent:    #FF7A1B;   /* orange */
--color-brand-bg:        #FFFFFF;
--color-brand-surface:   #F4F7FB;
--color-brand-text:      #0F1B2D;
--color-brand-muted:     #5B6B7C;
```

In Tailwind use: `bg-brand-primary`, `text-brand-accent`, `border-brand-secondary/10`, etc.

---

## Global CSS Classes (Direction1Layout.astro)

### Scroll reveal
```css
.reveal { opacity: 0; transform: translateY(28px); transition: ... }
.reveal.is-in { opacity: 1; transform: none; }
```
Add `.reveal` to any element you want to animate in on scroll.

### Hero animations
- `.hero-stagger` — wraps hero text column; children stagger in via `heroUp` keyframe
- `.hero-img` — wraps hero image; slides up with scale

### Parallelogram buttons
```css
/* Solid / filled buttons (orange CTA) — clip-path approach */
.skew-btn {
  clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
  border-radius: 2px !important;
}

/* Outline / border buttons — transform approach so border lines show fully */
.skew-border-btn { transform: skewX(-10deg); border-radius: 2px !important; }
.skew-border-btn > .btn-inner {
  display: inline-flex; align-items: center; justify-content: center;
  transform: skewX(10deg);
}
```

**Usage:**
```html
<!-- Orange filled CTA -->
<a href="tel:..." class="skew-btn inline-flex items-center gap-2.5 bg-brand-accent px-7 py-3.5 ...">
  <svg>...</svg> Call Now
</a>

<!-- Outline secondary button -->
<a href="/contact" class="skew-border-btn inline-flex items-center justify-center border-2 border-white/25 bg-white/10 px-7 py-3.5 ...">
  <span class="btn-inner">Book Online</span>
</a>
```

### Slanted images
```css
.skew-img {
  clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
  border-radius: 0 !important;
}
```
Use on hero image wrappers and feature image wrappers (NOT on service card grids — those use plain `overflow-hidden`).

---

## Page Layout

All pages use `Direction1Layout.astro`:
```astro
---
import Direction1Layout from '../layouts/Direction1Layout.astro';
---
<Direction1Layout title="Page Title — Aptec Plumbing" description="...">
  <div id="top">
    <!-- sections go here -->
  </div>
</Direction1Layout>
```

---

## Hero Section Pattern (dark gradient, matches all inner pages)

```astro
<section class="relative overflow-hidden bg-brand-secondary">
  <!-- gradient overlay -->
  <div class="pointer-events-none absolute inset-0" style="background: linear-gradient(135deg, #0B2847 0%, #0d3260 40%, #156ECE 100%); opacity: 0.95;"></div>
  <!-- dot grid texture -->
  <div class="pointer-events-none absolute inset-0 opacity-[0.07]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 28px 28px;"></div>

  <div class="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
    <!-- LEFT: text column -->
    <div class="hero-stagger">
      <!-- Star rating badge -->
      <div class="inline-flex items-center gap-2 rounded-lg border border-brand-accent/40 bg-brand-accent/20 px-3.5 py-1.5 text-xs font-bold text-brand-accent">
        <svg>★</svg> 5.0 Rating · 236 Reviews
      </div>
      <!-- Heading with orange accent underline -->
      <h1 class="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
        Page headline
        <span class="relative inline-block text-brand-accent">
          accent word.
          <svg class="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" ...>
            <path d="M2 5c40-5 60 3 100-1s56-4 96 1" stroke="#FF7A1B" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </span>
      </h1>
      <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/80">Body copy.</p>
      <!-- CTA row -->
      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href="tel:..." class="skew-btn inline-flex items-center justify-center gap-2.5 bg-brand-accent px-7 py-3.5 font-bold text-white ...">Call Now</a>
        <a href="/contact" class="skew-border-btn inline-flex items-center justify-center border-2 border-white/25 bg-white/10 px-7 py-3.5 font-bold text-white ...">
          <span class="btn-inner">Book Online</span>
        </a>
      </div>
      <!-- Trust badges row -->
      <div class="mt-10 grid grid-cols-1 gap-3 border-t border-white/15 pt-8 sm:grid-cols-3">
        <!-- badge: $0 Call Out Fee / Same-Day Service / Labour Warranty -->
      </div>
    </div>
    <!-- RIGHT: image column -->
    <div class="hero-img relative">
      <div class="skew-img overflow-hidden shadow-[0_30px_70px_-25px_rgba(0,0,0,0.5)]">
        <img src="/images/Aptec-Hero-Section.webp" class="aspect-[4/5] w-full object-cover sm:aspect-[5/5]" />
      </div>
      <!-- floating badge -->
      <div class="absolute -left-3 bottom-6 flex items-center gap-3 rounded-xl bg-brand-bg p-3.5 pr-5 shadow-[0_20px_45px_-18px_rgba(0,0,0,0.5)] ring-1 ring-white/10 sm:-left-6">
        <span class="grid size-11 place-items-center skew-btn rounded-lg bg-brand-accent text-white">
          <svg>...</svg>
        </span>
        <div>
          <p class="font-heading text-sm font-extrabold text-brand-secondary">Badge title</p>
          <p class="text-xs text-brand-muted">Badge subtitle</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Hero image used across all pages:** `/images/Aptec-Hero-Section.webp`

---

## Shared Components

All live in `src/components/direction-1/`:

| Component | Purpose |
|---|---|
| `SiteHeader.astro` | Nav with desktop dropdown + mobile menu |
| `SiteFooter.astro` | Footer with links, suburbs, copyright |
| `CouponStrip.astro` | Promo coupon grid (dark navy bg) |
| `ProcessSection.astro` | "How It Works" 3-step section |
| `ServiceAreaSection.astro` | Suburb grid (dark navy, 2-col layout) |
| `Drip.astro` | Eyebrow label with orange drip icon |
| `FaqAccordion.tsx` | React accordion for FAQ |

### ProcessSection usage
```astro
import ProcessSection from '../components/direction-1/ProcessSection.astro';
// ...
<ProcessSection />
```

### ServiceAreaSection usage
```astro
import ServiceAreaSection from '../components/direction-1/ServiceAreaSection.astro';
// Custom heading optional:
<ServiceAreaSection heading="Plumbing services across southern Adelaide" />
// Default heading: "Servicing Happy Valley & southern Adelaide, 24/7"
```

### Drip usage
```astro
import Drip from '../components/direction-1/Drip.astro';
<Drip label="Our Services" />              <!-- left aligned -->
<Drip label="How It Works" align="center" /> <!-- centered -->
```

---

## CTA Banner Pattern (photo background)

Used at the bottom of every page before the footer:

```astro
<section class="relative overflow-hidden">
  <div class="absolute inset-0">
    <img src="/images/Aptec-Plumbing-1920.webp" alt="" aria-hidden="true" class="h-full w-full object-cover object-center" />
    <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(11,40,71,0.93) 0%, rgba(13,50,96,0.88) 50%, rgba(21,110,206,0.82) 100%);"></div>
  </div>
  <div class="pointer-events-none absolute inset-0 opacity-[0.06]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 28px 28px;"></div>
  <div class="relative mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
    <div class="reveal grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="text-white">
        <p class="inline-flex items-center gap-2 rounded-lg border border-brand-accent/40 bg-brand-accent/20 px-3.5 py-1.5 text-xs font-bold text-brand-accent">
          <span class="inline-block size-2 animate-pulse rounded-full bg-brand-accent"></span> We're available now
        </p>
        <h2 class="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Need a plumber?<br />Let's get it sorted.</h2>
        <p class="mt-4 max-w-lg text-base leading-relaxed text-white/75">...</p>
        <div class="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-white/85">
          {['$0 call-out (standard hours)', 'Upfront fixed pricing', 'Same-day service', 'Fully licensed #333997'].map((b) => (
            <span class="flex items-center gap-2"><svg class="text-brand-accent">✓</svg>{b}</span>
          ))}
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <a href={PHONE_HREF} class="skew-btn inline-flex items-center justify-center gap-2.5 bg-brand-accent px-7 py-4 text-lg font-extrabold text-white ...">
          <svg>📞</svg> {PHONE}
        </a>
        <a href="/contact" class="skew-border-btn inline-flex items-center justify-center border-2 border-white/30 bg-white/10 px-7 py-4 text-lg font-bold text-white ...">
          <span class="btn-inner">Book Online</span>
        </a>
      </div>
    </div>
  </div>
</section>
```

---

## Service Card Grid Pattern

Used on homepage services grid and inner page service category grids:

```astro
<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
  {services.map((s) => (
    <a href={s.href} class="reveal group overflow-hidden rounded-2xl bg-brand-bg shadow-[0_12px_35px_-24px_rgba(11,40,71,0.4)] transition-all duration-300 hover:-translate-y-1.5">
      <!-- image: object-contain, centered, light bg -->
      <div class="flex aspect-[4/3] items-center justify-center overflow-hidden bg-brand-surface p-2">
        <img src={s.img} alt={s.title} loading="lazy" class="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
      </div>
      <!-- text: centered -->
      <div class="p-5 text-center">
        <h3 class="font-heading text-base font-bold text-brand-secondary">{s.title}</h3>
        <p class="mt-1.5 text-sm leading-snug text-brand-muted">{s.desc}</p>
        <span class="mt-3 inline-flex items-center justify-center gap-1 text-sm font-bold text-brand-primary">
          Learn more →
        </span>
      </div>
    </a>
  ))}
</div>
```

---

## Site Data (`src/data/site.ts`)

```ts
export const PHONE = '(08) 8000 5050';
export const PHONE_HREF = 'tel:0880005050';
export const LICENCE = 'Lic. #333997';
export const ABN = 'ABN 52 668 135 886';
export const suburbs = ['Happy Valley', 'Reynella', 'Morphett Vale', ...];
```

---

## Key Implementation Notes

### Astro JSX `.map()` pattern
Use `if/return` inside map, not ternary with JSX blocks (Astro compiler limitation):
```jsx
{nav.map((n) => {
  if (n.children) {
    return (<div>...</div>);
  }
  return <a href={n.href}>{n.label}</a>;
})}
```

### IntersectionObserver scroll reveal
Wired in `Direction1Layout.astro` `<script is:inline>`. Just add `.reveal` class — no JS needed per-component.

### Image best practices
- Hero images: `skew-img` wrapper + `object-cover`, `aspect-[4/5]`
- Service cards: `object-contain` + `bg-brand-surface` bg + centered text
- Process steps: `object-contain` + `rounded-2xl bg-brand-bg p-3`
- Feature/content images: `skew-img` wrapper + `object-cover`

### Pages in this build
| Route | File |
|---|---|
| `/direction-1-trade-blue` | Homepage |
| `/plumbing-services` | Services index |
| `/blocked-drains` | Blocked drains inner page |
| `/service-areas` | Suburb coverage |
| `/contact` | Contact + quote form |
