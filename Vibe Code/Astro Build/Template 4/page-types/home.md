# Home Page — Writing Guidelines

This doc is the authoritative structural spec for the home page on every site in the network. The home page sits at the root domain and is the single highest-traffic page on each site.

Cross-references: `brand-voice-guide.md` (voice), `seo-foundations.md` (cross-cutting SEO), `content-quality-rules.md` (hard constraints), `master-sheet-spec.md` (per-site data), `page-types/suburb.md` (suburb spec — shares Local Context conventions), `page-types/service.md` (service spec).

## 1. Job-to-be-done

The home page is the site's primary surface. It does four jobs simultaneously:

1. **Rank for the highest-value keyword** — "plumber [primary suburb]" — since it sits at the root domain
2. **Act as the primary suburb's location page** with full local relevance content
3. **Serve as the services hub** linking to all 9 service pages
4. **Serve as the suburb cluster hub** linking to all 5-8 adjoining suburb pages from `site.adjoiningSuburbs[]`

Because it does the most jobs, it is the longest page on the site and gets the heaviest internal linking density.

## 2. Search intent

Local-commercial, often emergency-tinged. The user typed the brand's #1 target keyword — "plumber [primary suburb]" — and is comparing options. Decision points: licensed, response time, pricing transparency, local credibility, real reviews, and how this business compares to alternatives.

## 3. Target queries

**Primary cluster — general plumbing in primary suburb:**
- plumber [primary suburb]
- [primary suburb] plumber
- plumbers in [primary suburb]
- local plumber [primary suburb]
- best plumber [primary suburb]

**Secondary cluster — emergency:**
- emergency plumber [primary suburb]
- 24 hour plumber [primary suburb]
- 24/7 plumber [primary suburb]
- after hours plumber [primary suburb]
- urgent plumber [primary suburb]

**Brand:**
- [site name]
- [site name] [suburb]
- [site name] reviews
- [site name] phone

**Tertiary:**
- plumber near me (when user in primary suburb or adjoining)
- licensed plumber [primary suburb]
- [primary suburb] plumbing services

The home page is the only page on the site that targets the exact primary keyword. Every other page targets variants.

## 4. Word count

**1,800 to 2,200 words total.** Longest page type on the site — longer than suburb pages because it carries the brand introduction, the full 9-service hub, the comparison table, the credentials block, and full local content on top. This overrides the home-page floor in `seo-foundations.md`.

Section-level counts (strict):

| Section | Count | Approx words |
|---|---|---|
| H1 + intro | 35 words exactly | 35 |
| USP hero block (4 USPs) | 4 × (6-word heading + 10-12 word description) | 60-80 |
| 5.4 Welcome / About (single short brand intro) | 60-90 word paragraph | 60-90 |
| 5.5 Services hub (50w intro + 9 H3 box hub) | 50w intro + 9 × 30w | 320 |
| 5.6 Local Context | 200-250 | 200-250 |
| 5.7 Emergency Plumbing (6 compact items + wrap) | 6 × ~6w + 30w wrap | 65-70 |
| 5.8 Our Process (4 H3s) | 35w intro + 4 × 30w | 155 |
| 5.9 Why Locals Choose (50w intro + 4 H3s) | 50w intro + 4 × 30w | 170 |
| 5.10 Comparison table (intro + 5-8 row table) | 35w intro + table cells | 80-120 |
| 5.11 Safety & Compliance (4 H3s) | 35w intro + 4 × 30w | 155 |
| 5.12 Credentials (30w intro + compact dot points) | 30w intro + 5-8 short items | 70-100 |
| 5.13 Testimonials (omitted unless verified) | 0 currently | 0 |
| 5.14 Service Areas (intro + bullet list) | 30w + bulleted suburb links | 50-70 |
| 5.15 Final CTA | 12-15w title + 30w para | 45 |
| 5.16 FAQs (H2 + body intro + 6 H3 Q/A pairs) | H2 + 25-35w intro + 6 × (H3 Q + 30-35w A) | 220-260 |
| **Total** | | **~1,750-2,150** |

This count assumes testimonials are omitted (no verified data in site-config) and the Welcome/About section uses the tightened single-paragraph format (Section 5.4). When testimonials are added in future, the page sits at the upper end of the range.

## 5. Section structure (in order)

### 5.1 H1

**Pattern:** `24/7 Emergency Plumber in [Primary Suburb]`
**Variant:** `Licensed Local Plumber in [Primary Suburb]`

H1 contains the primary keyword (plumber + suburb) in a single clean phrase. **No separators (no pipes, no en-dashes, no em-dashes) in the H1.** Use natural prose — the suburb appears once, the keyword appears once, the angle is woven in. Title tags (the frontmatter `title` field) can keep pipes for SERP readability since they are meta only, never visible on page.

### 5.2 H1 intro (35 words exactly)

Must include:
- Primary keyword (plumber + primary suburb)
- Emergency reference (24/7, emergency, urgent, or after-hours)
- Site name from `site.siteName`
- **4 adjoining suburbs named and linked in the first sentence** (matches the rule in `suburb.md` Section 5.2 — heavy local cluster signal + immediate internal linking)
- Strong value claim from `trustSignals[]` or `guarantees`

**Example:** `Plumber Happy Valley is your local 24/7 plumber for Happy Valley, [Aberfoyle Park](/plumber-aberfoyle-park/), [Reynella](/plumber-reynella/), [Flagstaff Hill](/plumber-flagstaff-hill/), and [Chandlers Hill](/plumber-chandlers-hill/), backed by our Lifetime Labour Warranty.`

The 4 linked suburbs are drawn from `site.adjoiningSuburbs[]` (first 4 entries — the master sheet lists them in proximity order).

### 5.3 USP Hero Block (4 USPs)

Same format as suburb/service pages. Pulls 4 values from `trustSignals[]`. At least one USP must reference emergency response, 24/7, or Within-the-Hour Response.

**This section has no H2 heading above it.** It is a visual hero strip placed directly below the H1 intro — the template renders the 4 cards inline. Do not write an introductory H2 like "Why [Suburb] Calls Us First" or similar. The cards speak for themselves.

Each USP: 6 word heading max + **10-12 word description** + icon (template handles). Keep descriptions punchy and scannable — they are hero cards, not paragraphs.

**Default hero set:**
1. 24/7 Emergency Service
2. Lifetime Labour Warranty
3. Fixed Upfront Pricing
4. Local, Family-Owned

### 5.4 Welcome / About Section (H2 + short brand-intro paragraph)

**Unique to the home page.** Sub-suburb and service pages assume the user already knows the brand. The home page does a short brand introduction here — kept tight because the USP block above already covers trust signals, the Services hub follows directly, and the Why Choose section later (5.9) covers the same ground in deeper treatment.

H2 heading: 6-10 words. Single phrase, no separators.
**Pattern:** `[Primary Suburb]'s Trusted Local Plumbers`

**Format:** ONE paragraph of 60-90 words. No expanded dot points (those are redundant against the USP block and the Why Choose section).

The paragraph covers, in natural prose:
- Family-owned and locally operated
- Licensed across South Australia (Lic. #333997, Master Plumber South Australia)
- A decade of Adelaide experience
- 500+ 5-star reviews from Adelaide homeowners

Per `content-quality-rules.md` Part A3, the review count `500+` cannot be embellished — never `600+`, never `nearly 1,000`.

**Example:**
`We are a family-owned plumbing business serving [Primary Suburb] homes, backed by a decade of hands-on work across Adelaide and Lic. #333997 with Master Plumber South Australia. Every job is completed by our licensed local team, fully insured and quoted upfront, with the same standards across 500+ 5-star reviews from Adelaide homeowners.`

### 5.5 Our Plumbing Services (H2 + 50w intro + 9 H3s, box hub layout)

**Services hub.** Placed directly below Welcome/About so users see the services grid early — strong move for service-hub intent. All 9 service categories from `services.categories[]` appear here.

H2 heading: 6-10 words. Single phrase, no separators.
**Pattern:** `Our Plumbing Services` or `Our Complete Plumbing Services in [Primary Suburb]`

**Intro paragraph: 50 words.** Sits between the H2 and the box grid. Frames what the user is about to see (the 9 services) and the underlying promise (one licensed team, Fixed Upfront Pricing, Lifetime Labour Warranty). Per `content-quality-rules.md` Part B7 every dot-point or grid section needs a 1-2 sentence lead.

**Layout:** rendered by the template as a **box grid** (3 columns × 3 rows, or similar responsive layout). Each box is a card linking to that service's page. Content remains 30-word blocks regardless of visual treatment.

**Box content per service:**
- H3 heading: 4 words max (service category name from `services.categories[].name`)
- Block: 30 words, single flowing sentence
- Mentions primary suburb naturally (but not in every box — vary)
- Link to that service's dedicated page at `/[service-slug]/`

**The 9 service boxes (in order):**
1. **General Plumbing** → `/general-plumbing/`
2. **Emergency Plumbing** → `/emergency-plumbing/`
3. **Blocked Drains** → `/blocked-drains/`
4. **Hot Water** → `/hot-water/`
5. **Gas Fitting** → `/gas-fitting/`
6. **Pipe Relining** → `/pipe-relining/`
7. **Leak Detection** → `/leak-detection/`
8. **Taps & Toilets** → `/taps-toilets/`
9. **Burst Pipes** → `/burst-pipes/`

**Sentence rhythm rule:** with 9 consecutive blocks, sentence opening variation is critical. No two adjacent boxes open with the same word or word class.

**Optional:** the template may add a 10th "tile" linking to a services index page (`/services/`) if one exists, labelled "View All Services". Not counted in the 9.

### 5.6 Local Context for [Primary Suburb] (H2 + 200-250 words)

Same structure as `suburb.md` Section 5.5 — the home page IS the primary suburb's location page, so it carries the heavy local content.

H2 heading: 35 words ending with colon
**Pattern:** `What [Primary Suburb] Homes and Businesses Need from Their Local Plumber:`

Content draws from the snapshotted suburb research at `data/suburb-research.json` (the primary suburb file, not adjoining suburbs):
1. Opening: suburb character, housing stock, building era — from `research.housing.notes` and `research.housing.eras`
2. Common local issues — 2-4 from `research.plumbingContext[]`
3. Real local references — 2-3 streets or landmarks from `research.streets[]` or `research.landmarks[]`
4. Optional: council reference from `research.council`

Hard rule per `content-quality-rules.md`: if research lacks a field, the claim does not appear.

### 5.7 Emergency Plumbing in [Primary Suburb] (H2 + 6 compact dot points + wrap-up)

Same structure as `suburb.md` Section 5.7.

H2 heading: 35 words ending with colon
**Pattern:** `When Emergency Plumbing Strikes in [Primary Suburb], We Respond Fast:`

6 compact dot points (3-6 words each, no expanded explanations) + one 30-word wrap-up paragraph.

**Default dot points:**
- Burst pipes flooding floors, walls, or ceilings
- Major leaks with no obvious source
- Blocked sewer lines backing up wastewater
- No hot water with young children or elderly residents at home
- Suspected gas leaks (immediate safety risk)
- Overflowing toilets a plunger will not fix

Wrap-up paragraph: response time per `guarantees.response`, 24/7 availability per `business.hours`, what to do while waiting (turn off mains, open windows for gas, etc.).

### 5.8 Our Process (H2 + exactly 4 H3s)

H2 heading: 35 words ending with colon
**Pattern:** `How We Work in [Primary Suburb]:`

Exactly 4 H3s:
1. Speak to Our Team
2. Onsite Assessment & Quote
3. Work Completed Cleanly
4. Testing & Handover

Each block: 30 words, single sentence.

### 5.9 Why [Primary Suburb] Locals Choose [Site Name] (H2 + 50w intro + exactly 4 H3s)

H2 heading: 6-10 words. Single phrase, no separators.
**Pattern:** `Why [Primary Suburb] Locals Choose Us` or `Why Locals Choose [site.siteName]`

**Intro paragraph: 50 words.** Sits between the H2 and the 4 H3 blocks. Frames the brand promise and what the 4 USPs represent. Per `content-quality-rules.md` Part B7.

Top 4 trust signals from `trustSignals[]` in full 30-word treatment. Same 4 used in the hero block (5.3).

Each H3 heading: trust signal in 4 words max.
Each H3 block: 30 words, single sentence.

### 5.10 How We Compare to Other Plumbers (H2 + intro + comparison table)

**The differentiator section.** Placed after Why Choose because the user has just read why we are good — now they see the contrast against alternatives.

H2 heading: 12-15 words
**Pattern:** `How We Compare to Other Plumbers in [Primary Suburb]`

**Format:** 35-word framing paragraph + markdown table with 5-8 rows.

```
Choosing a plumber matters. Here is how our service compares to what you will typically find from other plumbers across [Primary Suburb] and the wider [Region] Adelaide:

| Feature              | [Site Name]                | Typical Plumbers           |
|----------------------|----------------------------|----------------------------|
| Response time        | Within the hour, where available | Variable, often next day |
| Pricing model        | Fixed Upfront Pricing      | Hourly with surprises      |
| Workmanship warranty | Lifetime Labour Warranty   | Limited or none            |
| Emergency response   | 24/7 across [Primary Suburb] | Limited hours only       |
| Licensed & insured   | Lic. #333997, fully insured | Not always verified        |
| Local knowledge      | A decade across Adelaide   | Often outside the area     |
| Family-owned         | Yes, locally run           | Often national franchises  |
| New customer offer   | $50 off your first service | Variable or none           |
```

**Selection rules:**
- 5 to 8 rows (table gets unwieldy beyond 8)
- Every claim in the `[Site Name]` column draws from `site-config` (business, guarantees, offers, trustSignals, compliance). If a fact is not in site-config, the row does not appear.
- The `Typical Plumbers` column describes the industry baseline. **Never names specific competitors.**
- Tone is factual ("Hourly with surprises"), not snarky ("Rip-off hourly rates")

**Hard rules:**
- **Never invent values for the `[Site Name]` column** — every claim must trace to site-config
- **Never include a "callout fee" row** — the business does not offer a free callout. Per `content-quality-rules.md` Part D4, fabricated offers block the page.
- **Never reference a specific PL insurance amount** — site-config has `compliance.insured: true` but no dollar amount. Either omit the row or say "fully insured" without a fabricated figure.

### 5.11 Safety & Compliance (H2 + exactly 4 H3s)

Same as `suburb.md` Section 5.11 but with home-page-appropriate framing.

H2 heading: 35 words ending with colon
**Pattern:** `Safe, Compliant Plumbing Work in [Primary Suburb]:`

4 H3s:
1. Licensed Adelaide Plumbers
2. Fully Insured
3. AS/NZS 3500 Compliance
4. Lifetime Labour Warranty

Each H3 block: 30 words, single sentence. Pull specifics from `business.licence`, `business.licenceAuthority`, `compliance.standards[]`, `compliance.insured`, `guarantees.warranty`.

### 5.12 Our Credentials (H2 + 30w intro + compact dot points)

Scannable credentials list. Reinforces trust without padding sentence-form content.

H2 heading: 6-10 words. Single phrase, no separators.
**Pattern:** `Our Credentials and Standards`

**Intro paragraph: 30 words.** Sits between the H2 and the bullet list. One short sentence framing what these credentials mean for the customer. Per `content-quality-rules.md` Part B7.

**Format:** compact dot point list (no expanded explanations). 5-8 items max.

```
- Lic. #333997, Master Plumber South Australia
- ABN 52 668 135 886
- Fully insured (per `compliance.insured`)
- AS/NZS 3500 compliant on all work
- A decade operating across Adelaide
- Family-owned and locally led
- Lifetime Labour Warranty on all workmanship
- Fixed Upfront Pricing on every job
- 500+ 5-star reviews from Adelaide homeowners
- Humm interest-free finance available for larger jobs
```

Pick 5-8 from the list above (or other items grounded in site-config). Every item must trace to a verified field — no invented memberships, awards, or certifications. If a credential is not in site-config, it does not appear.

**Items currently not available** (do not include unless added to site-config with verified values):
- Specific industry memberships (Master Plumbers Association, etc.)
- WaterMark or similar product certifications
- Public liability dollar amount
- Specific awards

### 5.13 Testimonials / Reviews

**Currently omitted from the home page.** Per `content-quality-rules.md` Part A2, testimonials cannot be fabricated, and `site-config.shared.json` does not yet store verified testimonials.

If/when verified testimonials are added to site-config (per `caleb-brand-voice.md` Section 5 trust signals), this section returns with 3-5 quote blocks containing:
- Quote (verbatim from config)
- Customer name + initial
- Suburb (primary suburb or one of the adjoining suburbs)
- Star rating

The aggregate `500+ 5-star reviews` claim from `trustSignals[]` is referenced in other sections (Welcome, Credentials) regardless of whether individual testimonials are stored.

### 5.14 Service Areas (H2 + 30-word paragraph + bullet list)

Same format as `suburb.md` Section 5.13.

H2 heading: 12-15 words
**Pattern:** `Servicing [Primary Suburb] and Surrounding Areas`

30-word intro paragraph + bullet list of all `site.adjoiningSuburbs[]` (5 to 8 suburbs). Each adjoining suburb is a link to its own page on this same site at `/plumber-[suburb-slug]/`.

### 5.15 Final CTA (H2 + 30-word paragraph)

H2 heading: 12-15 words
**Pattern:** `Need a Plumber in [Primary Suburb]? Call [Site Name] Today`
**Emergency variant:** `Need an Emergency Plumber in [Primary Suburb]? Call Now`

Paragraph: 30 words. Must include:
- Phone from `site.trackingPhone`
- One specific offer from `offers.newCustomerDiscount` ($50 off first service), `offers.pensionerDiscount` (10% pensioner), or `guarantees.warranty.name` (Lifetime Labour Warranty)
- 24/7 emergency emphasis

**Note:** the business does not offer a free callout. Never write "free callout", "$0 callout", or "no callout fee".

### 5.16 FAQs (H2 + 25-35w intro + 6 H3 Q/A pairs)

**Structure changed:** FAQ questions are now real H3 headings (not bold text). Answers are body paragraphs underneath each H3. The FAQPage schema still works — template lifts H3 + following paragraph into Q/A pairs. H3 questions give each FAQ a scrollable anchor and improve Google's PAA extraction.

H2 heading: 6-10 words, single phrase, no separators.
**Pattern:** `Frequently Asked Questions` or `Plumber FAQs`

**Intro paragraph: 25-35 words** between the H2 and the first H3 question. Frames what the FAQs cover ("the questions we hear most often from [Primary Suburb] homeowners"). Per `content-quality-rules.md` Part B7.

**Each Q/A pair:**
- H3 heading: the question itself (must end with `?`)
- Body paragraph below H3: 30-35 word answer, single direct sentence

Exactly 6 H3 Q/A pairs. Home page FAQs are the broadest on the site — they cover the business, not just one service.

**FAQ naturalness rules (per the anti-patterns list — applies network-wide):**
- **Brand name (`site.siteName`) appears 0 times in FAQ questions.** Real users don't type the brand name into Google. Brand name may appear in an answer, never the question.
- **At most 3 of 6 questions mention the suburb at all.** Some questions are generic plumbing questions; some are local. Variety beats stuffing.
- **Suburb appears at most once per question and once per answer**, never repeated within the same Q/A pair.
- **Real PAA test:** would a real user type this exact question into Google? If no, rewrite.

**Suggested question mix (each renders as a `### Question?` H3):**
1. `### How quickly can a plumber arrive in [Primary Suburb]?`
2. `### Do you offer 24/7 emergency plumbing?`
3. `### What plumbing services do you offer?`
4. `### How does plumbing pricing work?`
5. `### Are your plumbers licensed and insured in South Australia?`
6. `### What suburbs do you service around [Primary Suburb]?`

Question 6 reinforces the suburb cluster — names the adjoining suburbs in the answer (not the question). Only Q1 and Q6 mention the primary suburb. Q5 mentions South Australia (state, not suburb). The other three are generic.

**Frontmatter mirror:** the `faqs` array in YAML frontmatter still holds the Q/A pairs (template lifts these into FAQPage schema). Body markdown and frontmatter must match exactly.

## 6. Schema requirements

The home page has the heaviest schema markup of any page on the site (canonical brand surface).

- **Plumber LocalBusiness** with full schema: business name, ABN, licence, `areaServed` from `site.serviceArea`, hours, telephone, `priceRange` if set, family-owned positioning, `aggregateRating` only if real `500+` review data is wired through site-config
- **WebSite** with `potentialAction` (sitelinks searchbox)
- **FAQPage** wrapping the FAQ section
- **BreadcrumbList** (single item — Home)
- **Service** schema, one per category in `services.categories[]` (9 total, optional but recommended for hub pages)

Template auto-generates from site-config + suburb-research + FAQs. Writer does not output JSON-LD.

## 7. Internal linking

The home page is the link hub of the site — it links to more pages than any other page.

- **Across to services:** ALL 9 service pages (one link per box in Section 5.5)
- **Across to suburb pages:** ALL `site.adjoiningSuburbs[]` (5 to 8 links in Service Areas bullet list, plus the 4 in the H1 intro)
- **Down:** Contact page (1 link, in final CTA)
- **Down:** About page (linked from Welcome section)
- **Down:** Service Guarantee and Lifetime Labour Warranty pages where they exist (linked from Credentials section)

**Critical: zero cross-linking between sites in the 100-microsite network.** Per `seo-foundations.md` Part C4. Home-page links go only to pages on this same site.

**Anchor text rules:**
- Service links: service name as anchor ("blocked drains", "hot water")
- Suburb links: bare suburb name ("Aberfoyle Park"), never exact-match stuffed
- Guarantee/policy pages: descriptive ("our Lifetime Labour Warranty", "our service guarantee")

## 8. CTA placement

Phone CTA must appear minimum 4, maximum 6 times on the home page (more than other page types — this is the conversion surface):

1. Sticky mobile header (template handles)
2. After USP hero block (button)
3. After Emergency Plumbing section (button)
4. After comparison table (button)
5. Final CTA section (full card)
6. (Optional) After Credentials section

## 9. Page-specific SEO

| Element | Requirement |
|---|---|
| URL | `/` (root domain) |
| Title tag | `Plumber [Primary Suburb] \| Get a Quote Today` (60 chars max) |
| Primary keyword | Title, H1, meta description, first 100 words, hero alt text |
| Emergency keyword | H1, meta description, USP block, dedicated section, FAQ |
| Brand keyword | Title, H1, meta description, throughout body |
| Primary suburb mentions in body | 8-12 throughout body |
| Adjoining suburbs | 4 named and linked in the H1 intro, all 5-8 named in the Service Areas bullet list |
| All 9 services | Each named in Section 5.5 services hub, each linked once |
| Real streets/landmarks | Minimum 2 references in Local Context (from research) |

## 10. Anti-patterns (NEVER on a home page)

1. **Mention any non-primary, non-adjoining suburb in the body.** Same find-replace prevention as suburb pages.
2. **Invent credentials, awards, or certifications.** Credentials section only includes verified items from site-config.
3. **Fabricate testimonials.** Section is omitted entirely if no verified testimonials exist in site-config.
4. **Name specific competitors in the comparison table.** "Typical Plumbers" column describes industry baseline only. Naming creates legal risk.
5. **Invent values in the `[Site Name]` column of the comparison table.** Every value traces to site-config. If a fact is not stored, the row does not appear.
6. **Include a "Free Callout" or "$0 Callout" row in the comparison table.** The business does not offer this. Per `content-quality-rules.md` Part D4.
7. **Reference a specific Public Liability insurance dollar amount.** `compliance.insured: true` is the verified fact. The amount is not stored — never fabricate "$20 million coverage".
8. **Embellish the review count.** `500+` is the verified figure per `trustSignals[]`. Never write `600+`, `nearly 1,000`, or any escalated number. Per `content-quality-rules.md` Part A3.
9. **Pad to hit 2,000+ words.** A 1,800-word home page with real content beats a 2,300-word page with filler.
10. **Skip the emergency cluster.** Home page must capture both primary (plumber [suburb]) and secondary (emergency plumber [suburb]) clusters.
11. **Open consecutive H3 blocks with the same word.** Especially critical in the 9-block Services section.
12. **Cross-link to other sites in the 100-microsite network.** Per `seo-foundations.md` Part C4.
13. **Use em dashes.** Zero. Per `brand-voice-guide.md` and `content-quality-rules.md` Part B4.
14. **Mention air conditioning, HVAC, electrical, or any non-plumbing service.** Per `content-quality-rules.md` Part C3.
15. **Forget the 4 adjoining-suburb links in the H1 intro.** This is the heaviest internal-link block on the page and the largest cluster signal in the network. Missing it weakens both UX and SEO.
16. **Stuff the primary suburb name into every section.** Hard ceiling: ~15 primary-suburb mentions across the full home page (excluding the dedicated Service Areas bullet list and the H1 intro). Per `seo-foundations.md` Part A12 the natural-density target is 4-8 per 800 words; on an 1,800-2,200 word home page that maxes out around 15. Suburb in every H3 block, every CTA, every USP description = keyword stuffing and an AI tell. **In multi-H3 sections (5.5 Services hub, 5.8 Process, 5.9 Why Choose, 5.11 Safety & Compliance), at most half the H3 blocks may mention the suburb.**
17. **Straight dot-point sections with no intro.** Every dot-point block, expanded or compact, must have a 1-2 sentence intro paragraph or section lead before the bullets. A bare list of bullets under a heading reads as a content-mill template. The intro frames why the bullets exist.
18. **Pipes (`|`) or other separators in H1 or H2 headings.** On-page headings are single phrases. Pipes belong in title tags (meta), never in on-page H1/H2. No en-dashes, no em-dashes, no `·` middle dots in headings either.
19. **Brand name in FAQ questions.** FAQ questions are user queries — real users don't type the brand name into Google. "How quickly can [Site Name] arrive?" is an AI tell. Real version: "How quickly can a plumber arrive in [Suburb]?" or just "How quickly can you arrive?". Brand name appears in the answer if at all, not the question. **At most 3 of 6 FAQ questions mention the suburb at all.**

## 11. Example outline — Happy Valley (primary)

```
URL: /

H1: 24/7 Emergency Plumber in Happy Valley

[35-word intro: Plumber Happy Valley is your local 24/7 plumber
for Happy Valley, [Aberfoyle Park](/plumber-aberfoyle-park/),
[Reynella](/plumber-reynella/), [Flagstaff Hill](/plumber-flagstaff-hill/),
and [Chandlers Hill](/plumber-chandlers-hill/), backed by our
Lifetime Labour Warranty.]

USP HERO BLOCK (no H2 above — visual hero strip, cards only)
- 24/7 Emergency Service
- Lifetime Labour Warranty
- Fixed Upfront Pricing
- Local, Family-Owned

H2: Happy Valley's Trusted Local Plumbers
[60-90w single paragraph covering family-owned, licensed,
decade of experience, 500+ reviews — no expanded dot points]

H2: Our Complete Range of Plumbing Services in Happy Valley:
[35w intro paragraph ending with colon]
[Rendered as 3x3 box grid]
### General Plumbing       → /general-plumbing/       [30w]
### Emergency Plumbing     → /emergency-plumbing/     [30w]
### Blocked Drains         → /blocked-drains/         [30w]
### Hot Water              → /hot-water/              [30w]
### Gas Fitting            → /gas-fitting/            [30w]
### Pipe Relining          → /pipe-relining/          [30w]
### Leak Detection         → /leak-detection/         [30w]
### Taps & Toilets         → /taps-toilets/           [30w]
### Burst Pipes            → /burst-pipes/            [30w]

H2: What Happy Valley Homes and Businesses Need from Their Local Plumber:
[200-250w from research.housing.notes, research.plumbingContext,
research.streets, research.landmarks — references clay-pipe drainage,
ageing hot water systems, slope drainage, real streets like Education Road]

H2: When Emergency Plumbing Strikes in Happy Valley, We Respond Fast:
- Burst pipes flooding floors, walls, or ceilings
- Major leaks with no obvious source
- Blocked sewer lines backing up wastewater
- No hot water with young children or elderly residents at home
- Suspected gas leaks (immediate safety risk)
- Overflowing toilets a plunger will not fix
[30-word wrap-up paragraph]

H2: How We Work in Happy Valley:
### Speak to Our Team           [30w]
### Onsite Assessment & Quote   [30w]
### Work Completed Cleanly      [30w]
### Testing & Handover          [30w]

H2: Why Happy Valley Locals Choose Plumber Happy Valley:
### 24/7 Emergency Service     [30w]
### Lifetime Labour Warranty   [30w]
### Fixed Upfront Pricing      [30w]
### Local, Family-Owned        [30w]

H2: How We Compare to Other Plumbers in Happy Valley
[35-word framing paragraph]

| Feature              | Plumber Happy Valley           | Typical Plumbers           |
|----------------------|--------------------------------|----------------------------|
| Response time        | Within the hour, where available | Variable, often next day |
| Pricing model        | Fixed Upfront Pricing          | Hourly with surprises      |
| Workmanship warranty | Lifetime Labour Warranty       | Limited or none            |
| Emergency response   | 24/7 across Happy Valley       | Limited hours only         |
| Licensed & insured   | Lic. #333997, fully insured    | Not always verified        |
| Local knowledge      | A decade across Adelaide       | Often outside the area     |
| Family-owned         | Yes, locally run               | Often national franchises  |
| New customer offer   | $50 off your first service     | Variable or none           |

H2: Safe, Compliant Plumbing Work in Happy Valley:
### Licensed Adelaide Plumbers  [30w]
### Fully Insured               [30w]
### AS/NZS 3500 Compliance      [30w]
### Lifetime Labour Warranty    [30w]

H2: Our Credentials and Standards
- Lic. #333997, Master Plumber South Australia
- ABN 52 668 135 886
- Fully insured
- AS/NZS 3500 compliant on all work
- A decade operating across Adelaide
- Family-owned and locally led
- Lifetime Labour Warranty on all workmanship
- 500+ 5-star reviews from Adelaide homeowners

[Testimonials section: omitted — no verified testimonials in site-config]

H2: Servicing Happy Valley and Surrounding Areas
[30-word intro paragraph]
- Aberfoyle Park → /plumber-aberfoyle-park/
- Reynella → /plumber-reynella/
- Flagstaff Hill → /plumber-flagstaff-hill/
- Chandlers Hill → /plumber-chandlers-hill/
- Trott Park → /plumber-trott-park/
- Old Reynella → /plumber-old-reynella/
- Morphett Vale → /plumber-morphett-vale/

H2: Need an Emergency Plumber in Happy Valley? Call Now
[30-word CTA: site.trackingPhone + $50 off first service + 24/7 emphasis]

H2: Happy Valley Plumber FAQs
Q1: How quickly can Plumber Happy Valley arrive?
Q2: Do you offer 24/7 emergency plumbing in Happy Valley?
Q3: What plumbing services does Plumber Happy Valley provide?
Q4: How does pricing work for plumbing in Happy Valley?
Q5: Are your plumbers licensed and insured in South Australia?
Q6: What suburbs does Plumber Happy Valley service around Happy Valley?
```

## How this doc is used

- **Writer subagent (writing a home page):** loads `brand-voice-guide.md` + `seo-foundations.md` + `content-quality-rules.md` + this doc as system prompt. User message includes the merged `site-config.json`, the snapshotted `data/suburb-research.json` for the primary suburb, all 9 services from `services.categories[]`, and all adjoining suburbs from `site.adjoiningSuburbs[]`.
- **QA Reviewer:** uses sections 4 (word counts), 9 (SEO requirements), and 10 (anti-patterns) as blocking checklist. Special attention to anti-patterns #4, #5, and #6 — the comparison table is the highest-risk section for fabrication.
- **Tom:** spot-checks home pages with extra care because they are the highest-traffic page. Particularly verify the comparison table accurately reflects the business's capabilities — every claim in the `[Site Name]` column must be true.

## Field paths referenced

These match the canonical schemas:

**From the merged `site-config.json`:**
- `business.yearsOperating`
- `business.licence`
- `business.licenceAuthority`
- `business.hours`
- `business.reviewCount` / `business.reviewRating`
- `services.categories[]` (all 9, each with `id`, `name`, `slug`, `description`, `isEmergency`, `intent`, `items[]`)
- `trustSignals[]`
- `offers.newCustomerDiscount`
- `offers.pensionerDiscount`
- `offers.finance.provider`
- `guarantees.warranty.name` / `.description`
- `guarantees.pricing.name` / `.description`
- `guarantees.response.name` / `.description`
- `compliance.standards[]`
- `compliance.insured`
- `site.siteName`
- `site.suburb`
- `site.trackingPhone`
- `site.adjoiningSuburbs[]`
- `site.serviceArea`
- `site.council`
- `transparencyFooter`

**From the snapshotted suburb research (per `suburb-research.schema.json`):**
- `research.suburb`
- `research.housing.notes` / `.eras`
- `research.plumbingContext[]`
- `research.streets[]`
- `research.landmarks[]`
- `research.council`
- `research.region`
