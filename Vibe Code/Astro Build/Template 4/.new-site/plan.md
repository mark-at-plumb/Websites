# Your New Site Plan

## Brand Brief
Aptec Plumbing — a family-owned, 24/7 emergency plumber serving Greater Sydney. Target customer: Sydney homeowners with an urgent plumbing issue who want fast, fairly-priced, no-surprises service. Primary CTA: call 0420-507-300 / Book Online. Differentiator: $0 call-out fee, upfront pricing, 15+ years family-owned, 5.0★ (236 reviews), same-day & 24/7 emergency response. Positioning: "Clear. Fair. Simple." — trusted, transparent, local.

## Visual Direction
- Color/font constraints: **Locked (redesign — keep branding).** Colors extracted from the live site's CSS: primary blue `#156ECE`, accent orange `#FF5700`, dark navy `#1b3c5c`, body gray `#4a4a4a`, off-white `#dbdbdb`, white. Fonts: original uses proprietary "Cal Sans" + "Google Sans" — substituted with **Plus Jakarta Sans (headings) + Inter (body)**, locked across all 3 directions.
- Vibe: Trustworthy, energetic, local, clean, professional-trade

## Site Blueprint
**Homepage** (single page at launch): Header/nav (logo, services dropdown, phone, Book Online) → Hero (headline, team photo, availability badge) → Promo coupon cards (4 offers) → Testimonials → Value prop → Service grid (9 cards) → Blocked Drains / Toilet Repair / Pipe Relining feature sections → Why Choose Aptec (4 benefit cards) → 3-step Process → FAQ → Service Areas (9 Sydney regions) → Team photo strip → Final CTA → Footer (service links by category, license #147417C, ABN).

All content is ready — reusing real Aptec business info, services list, and the 36 images supplied in `/Users/markstevecapacio/Downloads/Aptec Images/` (now copied into `public/images/aptec/`).

## Concept Directions

### Direction 1: Trusted Local Authority
**Palette:** Blue #156ECE · Navy #1b3c5c · Orange #FF5700 on White #ffffff
**Fonts:** Plus Jakarta Sans + Inter
Closest to the original site's structure and rhythm — split hero, alternating feature sections, rounded cards with subtle shadows, gentle scroll-fade + hover-lift animations. The safe, faithful rebuild.

### Direction 2: Same-Day Sydney
**Palette:** Same locked palette, used with more contrast and urgency
**Fonts:** Plus Jakarta Sans + Inter
Bold, dense, full-bleed hero with a pulsing availability badge, pill-shaped CTAs, overlapping cards, a count-up stats ticker (5.0★ / 236 reviews / 24/7 / $0 call-out) and a marquee suburb ticker. Leads with urgency and availability.

### Direction 3: Clear, Fair, Simple
**Palette:** Same locked palette, used with restraint
**Fonts:** Plus Jakarta Sans + Inter
Premium-clean, generous whitespace, typographic hero, flat surfaces, consistent grid, quiet scroll-reveal animations. Sells trust through clarity rather than urgency — built around Aptec's own tagline.

## What Gets Built
- Astro 5 project with Tailwind CSS v4 + React
- 3 homepage prototypes as Astro pages, each using real Aptec content/images and the locked brand palette + fonts, each with distinct layout/animation personality
- Git repo with initial commit

## How to View Your Prototypes
After approval, run: `npm run dev`
Then open:
- localhost:4321/direction-1-trusted-local-authority
- localhost:4321/direction-2-same-day-sydney
- localhost:4321/direction-3-clear-fair-simple
