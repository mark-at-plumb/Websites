# Service Guarantee Page — Writing Guidelines

This doc covers the `/about/service-guarantee/` page on every site in the network. The Service Guarantee page sets out the promises the business makes on every job — the standard of service the customer can expect.

Cross-references: `brand-voice-guide.md`, `seo-foundations.md`, `content-quality-rules.md`, `page-types/about.md` (parent page).

## 1. Job-to-be-done

Document the standard of service the business promises on every job. Build conversion confidence pre-booking. Reduce abandonment from "I don't know if these guys are reliable" hesitation.

This is **separate from** the Lifetime Labour Warranty (`/about/lifetime-labour-warranty/`). The Service Guarantee covers *how the job is performed* — turning up on time, clean work, licensed team, transparent pricing. The Warranty covers *what happens if something fails after the job*. Both pages exist because they answer different customer questions.

## 2. Search intent

Trust-driven, mid-funnel. The customer is researching whether to book. They have likely seen the home or a service page and are validating the business before committing. They may also arrive via direct nav from the about page or from a search like `[site name] guarantee` or `[site name] service guarantee`.

## 3. Target queries

**Primary:**
- [site name] service guarantee
- [site name] guarantee
- [primary suburb] plumber service guarantee

**Secondary:**
- on time plumber [primary suburb]
- upfront pricing plumber [primary suburb]
- reliable plumber [primary suburb]

This is a conversion support page, not a primary acquisition page. SEO is secondary to the trust-building job.

## 4. Word count

**400 to 600 words total.** Tight, focused, scannable.

Section-level counts:

| Section | Count | Approx words |
|---|---|---|
| H1 + intro | 35 words exactly | 35 |
| 5.3 The promises (5 expanded dot points) | 5 × 25-35w | 125-175 |
| 5.4 Why we offer it (paragraph) | 60-80 | 60-80 |
| 5.5 What this means for you (3-4 short bullets) | 3-4 × 10-15w | 40-60 |
| 5.6 Related guarantees (2 box hub) | 35w intro + 2 × 30w | 95 |
| 5.7 Service Areas (intro + bullet list) | 30w + bulleted links | 50-70 |
| 5.8 Final CTA | 12-15w title + 30w para | 45 |
| **Total** | | **~450-560** |

## 5. Section structure (in order)

### 5.1 H1

**Pattern:** `Our Service Guarantee` or `The [Site Name] Service Guarantee`

Single phrase H1, no separators. Title tag may keep pipes for SERP readability.
**Variant:** `The [Site Name] Service Guarantee`

### 5.2 H1 intro (35 words exactly)

Must include:
- Site name from `site.siteName`
- Primary suburb (1 mention)
- One promise framing line (e.g. "five things we guarantee on every job")
- Reference to Lic. #333997 or family-owned

**Example:** `Every job Plumber Happy Valley takes on across Happy Valley comes with our service guarantee. Five promises that hold us to a standard most plumbers will not, backed by Lic. #333997.`

### 5.3 The Promises (H2 + 5 expanded dot points)

The core content of the page. Five promises the business makes on every job. Drawn from `trustSignals[]`, `guarantees.pricing`, `guarantees.response`, `brand-voice-guide.md` personality pillars, and the source content from the customer's existing site.

H2 heading: 12-15 words
**Pattern:** `What We Guarantee on Every [Primary Suburb] Job`

5 expanded dot points (bold heading + 25-35w explanation each):

```
**On time, every time**
[25-35w — reliability is the founding promise of the business. If we say we will be there at 9am, we are there at 9am. If we are running late, we call.]

**Fully licensed, experienced technicians**
[25-35w — every job is performed by a licensed Adelaide plumber. Lic. #333997. Fully insured. Per `business.licence` and `compliance.insured`.]

**Clean, courteous, and professional service**
[25-35w — we treat your home with the same respect we would give our own. Drop sheets, clean up after the job, no mess left behind.]

**Fixed Upfront Pricing, no surprises**
[25-35w — quoted before any work starts. From `guarantees.pricing`. No hourly rates, no bill shock when the invoice arrives.]

**500+ 5-star reputation across Adelaide**
[25-35w — backed by over 500 5-star reviews from Adelaide homeowners. Per `trustSignals[]`. Family-owned, locally run, accountable.]
```

Each dot point traces to site-config. Per `content-quality-rules.md` Part A, no fabricated promises.

### 5.4 Why We Offer It (H2 + 60-80 word paragraph)

H2 heading: 12-15 words
**Pattern:** `Why We Stand Behind Every Job`

60-80 word paragraph explaining the *reason* the service guarantee exists. Draws from `brand-voice-guide.md` Section 2 (founding story) — built after seeing tradies let customers down. The guarantee is the answer to that.

**Tone:** plainspoken, confident, brief. Not a sales pitch.

### 5.5 What This Means for You (H2 + 3-4 compact bullets)

H2 heading: 12-15 words
**Pattern:** `What This Means for Your [Primary Suburb] Home`

3-4 compact bullets (10-15 words each, no expanded explanations). The customer-facing translation of the promises above.

```
- Your day is not wrecked by a no-show
- You know the price before any work starts
- Your home is cleaner when we leave than when we arrived
- Every job stands behind our licence, our insurance, and our name
```

### 5.6 Related Guarantees (H2 + 2 box hub)

Cross-links to the other trust pages.

H2 heading: 12-15 words
**Pattern:** `The Other Guarantees That Back Every Job`

**Layout:** 2-box grid.

1. **Lifetime Labour Warranty** → `/about/lifetime-labour-warranty/`
   - 30-word block: covers workmanship faults at no cost. Cross-link.

2. **Financing Options** → `/about/financing/`
   - 30-word block: spread larger jobs into interest-free Humm payments.

### 5.7 Service Areas (H2 + 30-word paragraph + bullet list)

Same format as `about.md` Section 5.7.

H2 heading: 12-15 words
**Pattern:** `Servicing [Primary Suburb] and Surrounding Areas`

30-word intro + bullet list of all `site.adjoiningSuburbs[]`, each linked to `/plumber-[suburb-slug]/`.

### 5.8 Final CTA (H2 + 30-word paragraph)

H2 heading: 12-15 words
**Pattern:** `Book Your [Primary Suburb] Plumber with Confidence`

Paragraph: 30 words. Must include:
- Phone from `site.trackingPhone`
- One offer from `offers.newCustomerDiscount` or `offers.pensionerDiscount`
- Reference to the guarantee or warranty

## 6. Schema requirements

- **Plumber LocalBusiness** with full schema (template lifts from site-config)
- **BreadcrumbList:** Home > About > Service Guarantee

The promises themselves do not get separate schema (no Offer schema unless the business actually publishes them as time-limited offers in site-config).

## 7. Internal linking

- **Up:** About page (`/about/`) — 1 link in breadcrumb
- **Up:** Home page — 1 link in breadcrumb
- **Across:** Lifetime Labour Warranty (`/about/lifetime-labour-warranty/`) and Financing (`/about/financing/`) — from Section 5.6 box hub
- **Across to suburbs:** all `site.adjoiningSuburbs[]` (Service Areas)
- **Down:** Contact page (1 link, in final CTA)

**Critical:** zero cross-linking between sites in the 100-microsite network. Per `seo-foundations.md` Part C4.

## 8. CTA placement

Phone CTA: minimum 2, maximum 3 times on this page:

1. Sticky mobile header (template handles)
2. After Section 5.5 (button)
3. Final CTA section (full card)

## 9. Page-specific SEO

| Element | Requirement |
|---|---|
| URL | `/about/service-guarantee/` |
| Title tag | `Our Service Guarantee \| [Site Name] [Primary Suburb]` (60 chars max) |
| Primary keyword | Title, H1, meta description, first 100 words |
| Primary suburb mentions in body | 2-4 |
| Adjoining suburbs | Listed in Service Areas section |

## 10. Anti-patterns (NEVER on a service guarantee page)

1. **Promise something the business cannot deliver.** Every promise must be backed by site-config (`trustSignals[]`, `guarantees`, etc.). No invented promises.
2. **Embellish the review count.** `500+` is the verified figure. Per `content-quality-rules.md` Part A3.
3. **Reference a Public Liability dollar amount.** `compliance.insured: true` is the verified claim.
4. **Offer "free callout" or "$0 callout".** The business does not offer this. Per `content-quality-rules.md` Part D4.
5. **Mention non-target, non-adjoining suburbs.**
6. **Cross-link to other sites in the network.** Per `seo-foundations.md` Part C4.
7. **Use em dashes.** Per `brand-voice-guide.md`.
8. **Pad to hit 600+ words.** A 450-word page with real content beats a 600-word page with filler.
9. **Mention air conditioning, HVAC, electrical, or any non-plumbing service.** Per `content-quality-rules.md` Part C3.
10. **Conflate Service Guarantee with Lifetime Labour Warranty.** The Service Guarantee is about how the job is performed. The Warranty is about what happens after. Two separate concepts on two separate pages.
11. **Pipes (`|`) or other separators in H1 or H2 headings.** Single phrases on-page. Title tag meta only.
12. **Straight dot-point sections with no intro.** Every dot-point block needs a 1-2 sentence lead before the bullets.

## 11. Example outline — Happy Valley

```
URL: /about/service-guarantee/

H1: Our Service Guarantee | Plumbers in Happy Valley

[35-word intro: Every job Plumber Happy Valley takes on across
Happy Valley comes with our service guarantee. Five promises that
hold us to a standard most plumbers will not, backed by Lic. #333997.]

H2: What We Guarantee on Every Happy Valley Job
**On time, every time**                              [25-35w]
**Fully licensed, experienced technicians**          [25-35w]
**Clean, courteous, and professional service**       [25-35w]
**Fixed Upfront Pricing, no surprises**              [25-35w]
**500+ 5-star reputation across Adelaide**           [25-35w]

H2: Why We Stand Behind Every Job
[60-80w paragraph drawn from brand-voice-guide.md founding story]

H2: What This Means for Your Happy Valley Home
- Your day is not wrecked by a no-show
- You know the price before any work starts
- Your home is cleaner when we leave than when we arrived
- Every job stands behind our licence, our insurance, and our name

H2: The Other Guarantees That Back Every Job
[35w intro]
[2-box grid]
### Lifetime Labour Warranty   → /about/lifetime-labour-warranty/  [30w]
### Financing Options          → /about/financing/                  [30w]

H2: Servicing Happy Valley and Surrounding Areas
[30-word paragraph + bullet list of adjoining suburbs]

H2: Book Your Happy Valley Plumber with Confidence
[30-word CTA: site.trackingPhone + $50 off first service + warranty reference]
```

## Field paths referenced

**From the merged `site-config.json`:**
- `business.licence` / `business.licenceAuthority`
- `business.hours` / `business.reviewCount` / `business.reviewRating`
- `trustSignals[]`
- `offers.newCustomerDiscount` / `offers.pensionerDiscount`
- `guarantees.pricing.name` / `.description`
- `guarantees.response.name` / `.description`
- `guarantees.warranty.name` / `.description`
- `compliance.insured`
- `site.siteName` / `site.suburb` / `site.trackingPhone`
- `site.adjoiningSuburbs[]`
