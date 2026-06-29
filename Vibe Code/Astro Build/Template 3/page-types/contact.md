# Contact Page — Writing Guidelines

This doc covers the `/contact/` page on every site in the network. The Contact page is a conversion utility — phone-first, form-second, short and direct.

Cross-references: `brand-voice-guide.md`, `seo-foundations.md`, `content-quality-rules.md`, `page-types/about.md` (sister trust page).

## 1. Job-to-be-done

Convert visitors into phone calls and form submissions. The contact page is utility, not content — it exists to remove friction between "I want a plumber" and "I have one booked".

Phone is the primary action. Form is the fallback for customers who do not want to call (after-hours research, comparison shopping, or accessibility preference).

## 2. Search intent

Conversion-stage. The user has decided to engage and is looking for the way to do it. They may arrive from:
- A "Contact" nav link
- A direct search like `[site name] phone`, `[site name] contact`
- The final CTA of any other page on the site

## 3. Target queries

**Primary:**
- [site name] contact
- [site name] phone
- [site name] [primary suburb] contact
- plumber [primary suburb] contact

The contact page is not an acquisition surface. SEO is secondary to the conversion job.

## 4. Word count

**250 to 450 words total.** Short, focused, scannable. The page is mostly utility elements (phone block, form, business details) rather than body copy.

Section-level counts:

| Section | Count | Approx words |
|---|---|---|
| H1 + intro | 35 words exactly | 35 |
| 5.3 Phone block (call to action) | 30-40 | 30-40 |
| 5.4 Contact form (template renders) | 0 (template handles labels and helper text) | 0 |
| 5.5 Business Details | 6 short lines, 5-15 words each | 50-80 |
| 5.6 Areas Serviced (intro + bullet list) | 25w intro + bulleted suburb links | 50-70 |
| 5.7 Hours | 4-6 short lines, 5-10 words each | 30-50 |
| 5.8 What Happens Next (3 numbered steps) | 3 × 15-25w | 45-75 |
| **Total** | | **~240-350** |

## 5. Section structure (in order)

### 5.1 H1

**Pattern:** `Contact [Site Name]` or `Get in Touch with Your [Primary Suburb] Plumber`

Single phrase, no separators in H1. Title tag may keep pipes for SERP readability.
**Variant:** `Get in Touch with [Site Name]`

### 5.2 H1 intro (35 words exactly)

Must include:
- Site name from `site.siteName`
- Primary suburb (1 mention)
- Phone-first framing (call us / call now / get in touch)
- 24/7 emergency reference per `business.hours`

**Example:** `Need a plumber in Happy Valley? Call Plumber Happy Valley on [site.trackingPhone] for 24/7 emergency response, Fixed Upfront Pricing, and a Lifetime Labour Warranty on every job. Or send us a message below.`

### 5.3 Phone Block (primary CTA)

**Layout:** rendered by the template as a prominent phone CTA card. Sits directly below the H1 intro. Largest visual element on the page.

**Content:**
- Phone number from `site.trackingPhone`, displayed in click-to-call format on mobile and prominent format on desktop
- Headline: `Call Now | 24/7 Emergency Response` (or similar)
- Supporting line (30-40 words): plain text emphasising why phone is the fastest path

**Example supporting line:**
`We answer the phone 24 hours a day, every day of the year. Speak to our team directly and book a same-day appointment where availability allows, or get an emergency callout on the way.`

### 5.4 Contact Form (template renders)

**Layout:** standard contact form, fallback to phone. Template handles all field labels, validation, and submission logic.

**Required form fields:**
- Name (required)
- Phone (required)
- Email (optional — customer choice)
- Suburb (dropdown of `site.suburb` + all `site.adjoiningSuburbs[]`, or free-text)
- Service needed (dropdown from `services.categories[].name`)
- Urgency (radio: "Emergency — within 24 hours" / "Soon — this week" / "Planned — quote only")
- Message (free-text, optional)

**Helper text on the form (template-rendered, no body copy needed):**
- "Fastest response: call us on [site.trackingPhone]"
- "Form messages: answered during business hours within 1 business day"

**Submit destination:** form goes to the business's lead-capture system (per site-config setup — not specified in this doc).

The form has no body-copy content written by the Writer subagent. It is a template-controlled element.

### 5.5 Business Details (H2 + 6 short detail lines)

H2 heading: 12-15 words
**Pattern:** `Plumber [Primary Suburb] Business Details` or `[Site Name] Business Details`

6 short detail lines (5-15 words each). Compact, scannable. Each line pulls a specific fact from site-config.

```
- **Business name:** Plumber Happy Valley (per `site.siteName`)
- **Phone:** [site.trackingPhone] (24/7 emergency response)
- **Hours:** 24/7 emergency availability (per `business.hours`)
- **Licence:** Lic. #333997 (Master Plumber South Australia, per `business.licence` + `business.licenceAuthority`)
- **ABN:** 52 668 135 886 (per `business.abn`)
- **Servicing:** [site.serviceArea]
```

Each line is bold-labelled. No expanded explanations — the page is a quick-reference card here, not a content section.

### 5.6 Areas Serviced (H2 + 25-word paragraph + bullet list)

H2 heading: 12-15 words
**Pattern:** `Areas Plumber [Primary Suburb] Services`

25-word intro paragraph + bullet list of all `site.adjoiningSuburbs[]` (5 to 8 suburbs). Each adjoining suburb is a link to its own page at `/plumber-[suburb-slug]/`.

```
We service Happy Valley and the surrounding southern Adelaide suburbs. Click any suburb below to learn more about our service in that area:

- Aberfoyle Park → /plumber-aberfoyle-park/
- Reynella → /plumber-reynella/
- Flagstaff Hill → /plumber-flagstaff-hill/
- Chandlers Hill → /plumber-chandlers-hill/
- Trott Park → /plumber-trott-park/
- Old Reynella → /plumber-old-reynella/
- Morphett Vale → /plumber-morphett-vale/
```

### 5.7 Hours (H2 + 4-6 short lines)

H2 heading: 12-15 words
**Pattern:** `When You Can Reach Plumber [Primary Suburb]`

Short structured lines summarising availability. Pulls from `business.hours`. The shared config only stores "24/7 emergency availability", so the page leads with that and soft-mentions general bookings without inventing specific business-hour windows.

```
- **24/7 emergency:** Burst pipes, gas leaks, major leaks, and urgent jobs — any hour, any day
- **General bookings:** Phone or form during business hours, on-site appointments scheduled to suit you
- **Weekends and public holidays:** Emergency response available
- **Phone response:** Real humans, not a call centre, at any hour
```

No specific business-hour windows (e.g. "Mon-Fri 7am-5pm") because they are not in site-config. Per `content-quality-rules.md` Part A, anything not in site-config is omitted.

### 5.8 What Happens Next (H2 + 3 numbered steps)

H2 heading: 12-15 words
**Pattern:** `What Happens After You Call`

3 numbered steps, 15-25 words each. Sets expectations and reduces friction for first-time callers.

```
1. We answer the phone. A real person on our team picks up, day or night, and listens to what is going on.

2. We give you a window. For emergencies, that is within the hour where availability allows. For planned jobs, we book a time that suits.

3. We arrive, quote, and get on with it. Fixed Upfront Pricing before any work starts. Lifetime Labour Warranty on every job.
```

## 6. Schema requirements

- **Plumber LocalBusiness** with full schema (template lifts from site-config — same as every page)
- **ContactPage** schema type
- **BreadcrumbList:** Home > Contact

The form itself does not get schema. The phone, business details, and hours are all already in the LocalBusiness schema.

## 7. Internal linking

- **Up:** Home page (1 link, breadcrumb)
- **Across to suburbs:** all `site.adjoiningSuburbs[]` (Section 5.6)
- **Across to about:** the contact page is reached from About and other pages, but the contact page itself does not need to link back to About in body copy (nav handles it)

**Critical:** zero cross-linking between sites in the 100-microsite network. Per `seo-foundations.md` Part C4.

## 8. CTA placement

Phone CTA: minimum 2, maximum 3 times on this page:

1. Sticky mobile header (template handles)
2. Phone Block (Section 5.3) — the primary CTA, largest visual element on the page
3. Business Details line 2 (`Phone:` line) — repeats the number for scanners

The form is the secondary CTA. No standalone "final CTA" section — the phone block above the fold does that job.

## 9. Page-specific SEO

| Element | Requirement |
|---|---|
| URL | `/contact/` |
| Title tag | `Contact [Site Name] \| Plumber in [Primary Suburb]` (60 chars max) |
| Primary keyword | Title, H1, meta description, first 100 words |
| Primary suburb mentions in body | 2-4 |
| Adjoining suburbs | Listed in Areas Serviced section |
| Phone present above the fold | Mandatory — page-defining requirement |
| ABN and licence visible | Mandatory — per `brand-voice-guide.md` transparency rule |

## 10. Anti-patterns (NEVER on the contact page)

1. **Hide the phone number.** Phone is the page's reason for existing. It must be visible above the fold, in the business details, and in the sticky header.
2. **Invent business hours.** Site-config only has "24/7 emergency availability". Do not write "Mon-Fri 7am-5pm" or any specific business-hour window unless added to site-config.
3. **Add a map.** The microsites do not show a physical address (only the parent business identity via ABN and licence). A map embed pinned to a suburb the business does not have premises in would be misleading. A map of the HQ undercuts the local feel. Confirmed design call: no map.
4. **List a physical street address for the microsite.** ABN and licence are the verified identity. Per the brand voice doc Section 9, on-page positioning is "Servicing [Suburb]", not "located in [Suburb]".
5. **Invent an email address unless in site-config.** If site-config does not store a contact email, the form is the only written channel.
6. **Mention non-target, non-adjoining suburbs in the body.**
7. **Embellish response times.** "Within the hour where availability allows" is the verified phrasing (per `guarantees.response`). Do not promise "within 30 minutes" or any tighter window unless added to site-config.
8. **Cross-link to other sites in the network.** Per `seo-foundations.md` Part C4.
9. **Use em dashes.** Per `brand-voice-guide.md`.
10. **Pad to hit 450+ words.** Contact pages are short on purpose.
11. **Mention air conditioning, HVAC, electrical, or any non-plumbing service.** Per `content-quality-rules.md` Part C3.
12. **Include "free callout", "$0 callout", or any fabricated offer.** Per `content-quality-rules.md` Part D4.
13. **Use a generic stock contact form message.** "We'll get back to you soon" is hedging. Per the brand voice doc, the response is "answered during business hours within 1 business day" — confident and specific.
14. **Pipes (`|`) or other separators in H1 or H2 headings.** On-page headings are single phrases. Pipes belong in title tags (meta), never on-page.
15. **Straight dot-point sections with no intro.** Even the Business Details and Hours blocks should have a one-line lead before the bullets where they're not pure key-value pairs.

## 11. Example outline — Happy Valley

```
URL: /contact/

H1: Contact Plumber Happy Valley | Plumber in Happy Valley

[35-word intro: Need a plumber in Happy Valley? Call Plumber
Happy Valley on (08) 7123 4567 for 24/7 emergency response,
Fixed Upfront Pricing, and a Lifetime Labour Warranty on every
job. Or send us a message below.]

[PHONE BLOCK — primary CTA card]
  Call Now | 24/7 Emergency Response
  (08) 7123 4567
  [30-40w supporting line about phone being the fastest path]

[CONTACT FORM — template renders]
  Name (required)
  Phone (required)
  Email (optional)
  Suburb (dropdown: Happy Valley, Aberfoyle Park, Reynella, ...)
  Service needed (dropdown: General Plumbing, Emergency, Blocked Drains, Hot Water, Gas Fitting, Pipe Relining, Leak Detection, Taps & Toilets, Burst Pipes)
  Urgency (radio: Emergency / Soon / Planned)
  Message (free-text, optional)
  [Helper text: "Fastest response: call us on (08) 7123 4567"]
  [Helper text: "Form messages: answered during business hours within 1 business day"]

H2: Plumber Happy Valley Business Details
- **Business name:** Plumber Happy Valley
- **Phone:** (08) 7123 4567 (24/7 emergency response)
- **Hours:** 24/7 emergency availability
- **Licence:** Lic. #333997 (Master Plumber South Australia)
- **ABN:** 52 668 135 886
- **Servicing:** Happy Valley, Aberfoyle Park, Reynella, Flagstaff Hill, Chandlers Hill, Trott Park, Old Reynella, Morphett Vale, and surrounding suburbs of southern Adelaide

H2: Areas Plumber Happy Valley Services
[25-word intro paragraph]
- Aberfoyle Park → /plumber-aberfoyle-park/
- Reynella → /plumber-reynella/
- Flagstaff Hill → /plumber-flagstaff-hill/
- Chandlers Hill → /plumber-chandlers-hill/
- Trott Park → /plumber-trott-park/
- Old Reynella → /plumber-old-reynella/
- Morphett Vale → /plumber-morphett-vale/

H2: When You Can Reach Plumber Happy Valley
- **24/7 emergency:** Burst pipes, gas leaks, major leaks, urgent jobs
- **General bookings:** Phone or form, on-site appointments to suit you
- **Weekends and public holidays:** Emergency response available
- **Phone response:** Real humans, not a call centre, at any hour

H2: What Happens After You Call
1. We answer the phone. A real person on our team picks up, day or night.
2. We give you a window. Within the hour for emergencies, booked time for planned jobs.
3. We arrive, quote, and get on with it. Fixed Upfront Pricing. Lifetime Labour Warranty.
```

## How this doc is used

- **Writer subagent:** loads `brand-voice-guide.md` + `seo-foundations.md` + `content-quality-rules.md` + this doc as system prompt. User message includes the merged `site-config.json` and the snapshotted suburb research.
- **QA Reviewer:** uses sections 4 (word counts), 9 (SEO), and 10 (anti-patterns) as a blocking checklist. Special attention to anti-pattern #1 (phone visibility) and anti-pattern #2 (no invented business hours).
- **Tom:** verify the phone number on every site matches the WildJar tracking number for that site. Per-site phone mismatches break call attribution.

## Field paths referenced

**From the merged `site-config.json`:**
- `business.abn`
- `business.licence` / `business.licenceAuthority`
- `business.hours`
- `services.categories[]` (for the form's service dropdown)
- `guarantees.response.description`
- `offers.newCustomerDiscount` (referenced in CTA if used)
- `site.siteName`
- `site.suburb`
- `site.trackingPhone`
- `site.adjoiningSuburbs[]`
- `site.serviceArea`
- `transparencyFooter`
