# About Page — Writing Guidelines

This doc covers the `/about/` page on every site in the network. The About page tells the brand story, builds trust through credentials, and serves as the parent for three child pages: `/about/service-guarantee/`, `/about/lifetime-labour-warranty/`, and `/about/financing/`.

Cross-references: `brand-voice-guide.md` (voice — especially Section 2 founding story and elevator pitch), `seo-foundations.md` (cross-cutting SEO), `content-quality-rules.md` (hard constraints), `page-types/home.md` (Section 5.4 Welcome/About — about page expands on that summary).

## 1. Job-to-be-done

Tell the brand story in depth. Build trust. Convert "researching the business" visitors. The about page is where customers who have already landed on the home or a service page go to verify "is this a real, credible business?" before booking.

## 2. Search intent

Brand and trust-driven. The user has already discovered the business and wants to vet it. They may have typed `[site name] about`, `[site name] reviews`, or simply clicked the About link from the main nav. Decision points: how long the business has been operating, who runs it, what licences/credentials they hold, what their values are, what guarantees they back.

## 3. Target queries

**Primary:**
- about [site name]
- [site name] [suburb]
- who is [site name]
- [site name] reviews

**Secondary:**
- licensed plumber [primary suburb]
- family-owned plumber [primary suburb]
- local plumber [primary suburb]

The about page is not optimised to rank for "plumber [suburb]" — that's the home page's job. The about page captures branded and trust-led searches.

## 4. Word count

**600 to 800 words total.** Long enough to tell the story and lay out credentials; short enough that it does not compete with the home page for primary keyword attention.

Section-level counts:

| Section | Count | Approx words |
|---|---|---|
| H1 + intro | 35 words exactly | 35 |
| 5.3 Our Story (paragraph form) | 150-200 | 150-200 |
| 5.4 Our Standards (4 expanded dot points) | 4 × 25-35w | 100-140 |
| 5.5 Credentials list (compact) | 12-15w heading + 5-8 short items | 50-80 |
| 5.6 Our Guarantees Hub (3 boxes linking to child pages) | 35w intro + 3 × 30w | 125 |
| 5.7 Service Areas (intro + bullet list) | 30w + bulleted links | 50-70 |
| 5.8 Final CTA | 12-15w title + 30w para | 45 |
| **Total** | | **~600-800** |

No FAQs on the about page — the brand-voice content and credentials section carry that load. The home page and suburb pages handle FAQ schema duty.

## 5. Section structure (in order)

### 5.1 H1

**Pattern:** `About [Site Name]` or `About Your Local [Primary Suburb] Plumber`

Single phrase, no separators. Title tag in frontmatter may keep pipes for SERP readability.
**Variant:** `Meet the Team Behind [Site Name]`

H1 mentions the primary suburb naturally. Brand-led, not keyword-stuffed.

### 5.2 H1 intro (35 words exactly)

Must include:
- Site name from `site.siteName`
- Primary suburb (1 mention)
- One trust signal from `trustSignals[]` (family-owned, decade of experience, licensed, etc.)
- Reference to the parent business identity (Lic. #333997 or ABN)

**Example:** `Plumber Happy Valley is the local, family-owned plumbing business serving Happy Valley homes with a decade of Adelaide experience, Lic. #333997, and a Lifetime Labour Warranty on every job.`

### 5.3 Our Story (H2 + 150-200 word paragraph)

H2 heading: 12-15 words
**Pattern:** `The Story Behind [Site Name]` or `Why We Started [Site Name]`

Free-text paragraph block, 150-200 words. Draws directly from `brand-voice-guide.md` Section 2 (Founding Story) and Section 4 (elevator pitch). The story is consistent across the network — the only suburb-specific element is mentioning the primary suburb 1-2 times naturally.

**Source content (from brand-voice-guide.md):**
- Family-owned, locally run
- A decade of Adelaide experience
- Built after seeing homeowners let down by tradies who showed up late, rushed jobs, left a mess
- Three rules: show up when you say, do the job properly, treat the home with respect
- Backed by the same licensed team across every site

**Tone:** plain-spoken, direct, no corporate filler (per `brand-voice-guide.md` Section 3 and `content-quality-rules.md` Part B). The story should feel like a real person talking, not a polished marketing block.

### 5.4 Our Standards (H2 + 4 expanded dot points)

H2 heading: 12-15 words
**Pattern:** `The Standards We Hold Ourselves To` or `What You Can Expect from [Site Name]`

4 expanded dot points (bold heading + 25-35w explanation each). Pulls from `brand-voice-guide.md` Section 3 personality pillars (Local, Reliable, Honest, Professional, Human) — pick the four that fit best.

**Default 4 standards:**

```
**On time, every time**
[25-35w — reliability is the founding promise. We show up when we say we will, and if we are running late, we call.]

**Fixed Upfront Pricing**
[25-35w — quoted before any work starts. No hourly rates, no surprises on the invoice. From `guarantees.pricing`.]

**Lifetime Labour Warranty**
[25-35w — every job backed by our workmanship warranty. From `guarantees.warranty`. Cross-link to `/about/lifetime-labour-warranty/`.]

**Clean, respectful service**
[25-35w — uniformed team, clean vans, your home treated with the care it deserves. Family-owned positioning.]
```

### 5.5 Our Credentials (H2 + compact dot points)

Scannable credentials list. Same content pattern as `home.md` Section 5.12.

H2 heading: 12-15 words
**Pattern:** `Our Credentials and Standards`

5-8 items, compact format (no expanded explanations):

```
- Lic. #333997, Master Plumber South Australia
- ABN 52 668 135 886
- Fully insured (per `compliance.insured`)
- AS/NZS 3500 compliant on all work
- A decade operating across Adelaide
- Family-owned and locally led
- Lifetime Labour Warranty on all workmanship
- 500+ 5-star reviews from Adelaide homeowners
- Humm interest-free finance available
```

Every item traces to site-config. No invented memberships, awards, or certifications. Per `content-quality-rules.md` Part A2 and Part A3 (review count never embellished).

### 5.6 Our Guarantees (H2 + 3 box hub)

The about page is the entry point to the three child pages. This section is a 3-box hub linking to each.

H2 heading: 35 words ending with colon
**Pattern:** `The Guarantees Behind Every [Primary Suburb] Job:`

**Layout:** rendered by the template as a 3-box grid. Each box links to one child page.

**The 3 boxes:**

1. **Service Guarantee** → `/about/service-guarantee/`
   - 30-word block: what the service guarantee promises (on time, clean, licensed, etc.)

2. **Lifetime Labour Warranty** → `/about/lifetime-labour-warranty/`
   - 30-word block: what's covered, how it works

3. **Financing** → `/about/financing/`
   - 30-word block: Humm interest-free, no deposit, spread the cost

### 5.7 Service Areas (H2 + 30-word paragraph + bullet list)

Same format as `home.md` Section 5.14.

H2 heading: 12-15 words
**Pattern:** `Servicing [Primary Suburb] and Surrounding Areas`

30-word intro paragraph + bullet list of all `site.adjoiningSuburbs[]` (5 to 8 suburbs). Each adjoining suburb is a link to `/plumber-[suburb-slug]/`.

### 5.8 Final CTA (H2 + 30-word paragraph)

H2 heading: 12-15 words
**Pattern:** `Ready to Work with [Site Name]? Get in Touch Today`

Paragraph: 30 words. Must include:
- Phone from `site.trackingPhone`
- One offer from `offers.newCustomerDiscount` ($50 off first service) or `offers.pensionerDiscount` (10% pensioner)
- Reference to 24/7 availability per `business.hours`

## 6. Schema requirements

- **Plumber LocalBusiness** with full schema (template lifts from site-config)
- **AboutPage** schema type
- **BreadcrumbList:** Home > About

Writer does not output JSON-LD. Template handles.

## 7. Internal linking

- **Up:** Home page (1 link, in breadcrumb)
- **Across:** 3 child pages (Service Guarantee, Lifetime Labour Warranty, Financing) — linked from Section 5.6 box hub
- **Across to suburbs:** all `site.adjoiningSuburbs[]` (Service Areas bullet list)
- **Down:** Contact page (1 link, in final CTA)
- **Cross-link from 5.4 Our Standards:** the Lifetime Labour Warranty dot point links to `/about/lifetime-labour-warranty/`

**Critical:** zero cross-linking between sites in the 100-microsite network. Per `seo-foundations.md` Part C4.

**Anchor text rules:**
- Child page links: page name as anchor ("our Lifetime Labour Warranty", "see our financing options")
- Suburb links: bare suburb name

## 8. CTA placement

Phone CTA must appear minimum 2, maximum 4 times on the about page (fewer than home/service/suburb because this is a trust page, not a conversion page):

1. Sticky mobile header (template handles)
2. After Our Standards section (button)
3. Final CTA section (full card)
4. (Optional) After Our Guarantees hub

## 9. Page-specific SEO

| Element | Requirement |
|---|---|
| URL | `/about/` |
| Title tag | `About [Site Name] \| Your Local [Primary Suburb] Plumber` (60 chars max) |
| Primary keyword | Title, H1, meta description, first 100 words |
| Primary suburb mentions in body | 3-5 |
| Adjoining suburbs | Listed in Service Areas section |
| Brand story | 150-200 words minimum (Section 5.3) |
| Real credentials only | Section 5.5 — every item from site-config |

## 10. Anti-patterns (NEVER on an about page)

1. **Invent founder names, dates, or events.** The brand story is generic ("a licensed Adelaide plumbing business") because no individual is named on the network per the brand voice doc. Do not invent founder names, employee names, or specific founding dates.
2. **Fabricate credentials, memberships, or awards.** Per `content-quality-rules.md` Part A2. Only items from site-config appear in Section 5.5.
3. **Embellish the review count.** `500+` is the verified figure. Per `content-quality-rules.md` Part A3.
4. **Invent specific company history milestones.** Phrases like "since 2014" or "founded after Cyclone X" — only if in site-config. Default is "a decade of Adelaide experience" per `business.yearsOperating`.
5. **Reference a Public Liability insurance dollar amount.** `compliance.insured: true` only. "Fully insured" is the verified claim — never "$20 million coverage".
6. **Mention non-target, non-adjoining suburbs in the body.**
7. **Cross-link to other sites in the 100-microsite network.** Per `seo-foundations.md` Part C4.
8. **Use em dashes.** Per `brand-voice-guide.md` and `content-quality-rules.md` Part B4.
9. **Pad to hit 800+ words.** A 650-word about page with real content beats an 850-word page with filler.
10. **Mention air conditioning, HVAC, electrical, or any non-plumbing service.** Per `content-quality-rules.md` Part C3.
11. **Include "free callout", "$0 callout", or any fabricated offer.** Per `content-quality-rules.md` Part D4.
12. **Stuff the suburb name into every section.** Hard ceiling: ~6 suburb mentions across the full about page. About pages are brand-led, not local-led.
13. **Straight dot-point sections with no intro.** Every dot-point block needs a 1-2 sentence intro paragraph before the bullets.
14. **Pipes (`|`) or other separators in H1 or H2 headings.** On-page headings are single phrases. Pipes belong in title tags (meta), never on-page.

## 11. Example outline — Happy Valley

```
URL: /about/

H1: About Plumber Happy Valley | Your Local Happy Valley Plumber

[35-word intro: Plumber Happy Valley is the local, family-owned plumbing
business serving Happy Valley homes with a decade of Adelaide experience,
Lic. #333997, and a Lifetime Labour Warranty on every job.]

H2: The Story Behind Plumber Happy Valley
[150-200w paragraph drawn from brand-voice-guide.md Section 2 founding
story — mentions Happy Valley 1-2 times, otherwise consistent across
the network. Family-owned, a decade on the tools, three simple rules,
real Adelaide team behind every site.]

H2: What You Can Expect from Plumber Happy Valley
**On time, every time**              [25-35w]
**Fixed Upfront Pricing**             [25-35w]
**Lifetime Labour Warranty**          [25-35w — links to /about/lifetime-labour-warranty/]
**Clean, respectful service**         [25-35w]

H2: Our Credentials and Standards
- Lic. #333997, Master Plumber South Australia
- ABN 52 668 135 886
- Fully insured
- AS/NZS 3500 compliant on all work
- A decade operating across Adelaide
- Family-owned and locally led
- Lifetime Labour Warranty on all workmanship
- 500+ 5-star reviews from Adelaide homeowners

H2: The Guarantees Behind Every Happy Valley Job:
[35w intro paragraph]
[3-box grid]
### Service Guarantee          → /about/service-guarantee/        [30w]
### Lifetime Labour Warranty   → /about/lifetime-labour-warranty/ [30w]
### Financing                  → /about/financing/                [30w]

H2: Servicing Happy Valley and Surrounding Areas
[30-word paragraph]
- Aberfoyle Park → /plumber-aberfoyle-park/
- Reynella → /plumber-reynella/
- Flagstaff Hill → /plumber-flagstaff-hill/
- Chandlers Hill → /plumber-chandlers-hill/
- Trott Park → /plumber-trott-park/
- Old Reynella → /plumber-old-reynella/
- Morphett Vale → /plumber-morphett-vale/

H2: Ready to Work with Plumber Happy Valley? Get in Touch Today
[30-word CTA: site.trackingPhone + $50 off first service + 24/7]
```

## How this doc is used

- **Writer subagent:** loads `brand-voice-guide.md` + `seo-foundations.md` + `content-quality-rules.md` + this doc as system prompt. User message includes the merged `site-config.json` and the snapshotted suburb research.
- **QA Reviewer:** uses sections 4 (word counts), 9 (SEO), and 10 (anti-patterns) as a blocking checklist. Special attention to anti-pattern #1 (no invented founder names — the brand has none named) and anti-pattern #4 (no invented company history).

## Field paths referenced

**From the merged `site-config.json`:**
- `business.yearsOperating`
- `business.licence`
- `business.licenceAuthority`
- `business.hours`
- `business.reviewCount` / `business.reviewRating`
- `trustSignals[]`
- `offers.newCustomerDiscount` / `offers.pensionerDiscount`
- `guarantees.warranty.name` / `.description`
- `guarantees.pricing.name` / `.description`
- `compliance.standards[]` / `compliance.insured`
- `site.siteName` / `site.suburb` / `site.trackingPhone`
- `site.adjoiningSuburbs[]`
- `transparencyFooter`
