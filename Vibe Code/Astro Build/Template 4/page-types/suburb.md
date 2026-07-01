# Suburb Page — Writing Guidelines

This doc is the authoritative structural spec for suburb pages on every site in the network. The primary suburb page (the home page of each microsite) and every adjoining-suburb page on that site follow this structure.

Cross-references: `brand-voice-guide.md` (voice), `seo-foundations.md` (cross-cutting SEO), `content-quality-rules.md` (hard constraints), `master-sheet-spec.md` (per-site data), `orchestrator-architecture/research/suburb-research.spec.md` (research field meanings).

## 1. Job-to-be-done

Capture local-commercial search traffic for both "plumber [suburb]" and "emergency plumber [suburb]" query clusters across the primary suburb (home page) and 5 to 8 adjoining-suburb pages. Build local relevance signals that out-perform network competitors who use find-replace content.

## 2. Search intent

Local-commercial. The user wants a plumber now or soon, in their specific suburb. They are comparing options on licensed/insured status, response time (especially emergency), pricing transparency, and local knowledge. Search may be urgent (burst pipe right now) or considered (planning a hot water replacement).

## 3. Target queries

**Primary cluster — general plumbing:**
- plumber [suburb]
- [suburb] plumber
- plumbers in [suburb]
- local plumber [suburb]
- best plumber [suburb]

**Secondary cluster — emergency plumbing:**
- emergency plumber [suburb]
- 24 hour plumber [suburb]
- 24/7 plumber [suburb]
- after hours plumber [suburb]
- urgent plumber [suburb]
- same day plumber [suburb]

**Tertiary (capture in body + FAQs):**
- blocked drain plumber [suburb]
- hot water plumber [suburb]
- gas plumber [suburb]
- plumber near me (when user is in [suburb])

Both primary and secondary clusters get explicit treatment in the page structure (H1, USP block, dedicated emergency section, FAQs).

## 4. Word count

**1,500 to 1,800 words total.** The longest page type on the site, intentionally — network competitors ship 400 to 800 word suburb pages, and depth is how you out-rank them. This overrides the suburb-page floor in `seo-foundations.md`.

Section-level counts (strict):

| Section | Count |
|---|---|
| H1 + intro | 35 words exactly |
| USP hero block per USP | 6 word heading max + 10-12 word description |
| Section 5.4 Trusted Intro | 50 word paragraph |
| Section 5.5 Services intro | 50 word paragraph (then 9 × 30w H3 boxes) |
| Section 5.7 Emergency intro | 50 word paragraph (then dot points + 30w wrap) |
| Section 5.10 Why Choose intro | 50 word paragraph |
| Every other H2 intro | 35 words, ending with colon |
| H3 headings | 4 words max |
| H3 content blocks | 30 words exactly, single flowing sentence |
| Dot-point sections (expanded format) | bold heading 6 words max + 25-35 word explanation |
| Dot-point sections (compact format, emergency list) | 3-6 word items, no explanation |
| Why Choose section | exactly 4 H3s, 30 words each |
| Service Areas paragraph | 30 words exactly |
| Final CTA | 12-15 word title + 30-word paragraph |
| FAQs | H2 + 25-35w intro + 6 × (H3 question + 30-35w answer) |

Less than 1,500 words = matched competitor length. More than 1,800 = padding. The QA Reviewer fails either.

## 5. Section structure (in order)

### 5.1 H1
**Pattern:** `24/7 Emergency Plumber in [Suburb]`

H1 is a single phrase. No separators (no pipes, no en-dashes, no em-dashes). Title tag in frontmatter may keep pipes for SERP readability.
**Variant:** `[Suburb] Plumber & Emergency Plumbing Services`

H1 contains both primary keyword clusters (general + emergency). Never stuffed. If the Astro template has a separate hero subtitle slot, use the cleaner pattern:

- H1: `Plumber in [Suburb]`
- Subtitle: `Licensed local plumbers, 24/7 emergency response`

### 5.2 H1 intro (35 words exactly)

Must include:
- Primary keyword (plumber + suburb)
- Emergency reference (24/7, emergency, urgent, or after-hours)
- Site name from `site.siteName`
- Target suburb (1 mention)
- **4 adjoining suburbs named in the first sentence**, each linked to its own page on this same site (`/plumber-[suburb-slug]/`) for cluster signal and immediate internal-link density

**Example:** `Plumber Happy Valley is your local 24/7 plumber for Happy Valley, [Aberfoyle Park](/plumber-aberfoyle-park/), [Reynella](/plumber-reynella/), [Flagstaff Hill](/plumber-flagstaff-hill/), and [Chandlers Hill](/plumber-chandlers-hill/), backed by our Lifetime Labour Warranty.`

### 5.3 USP Hero Block (4 USPs)

Scannable hero strip placed immediately after the H1 intro. Pulls the top 4 trust signals from `trustSignals[]` (mapped to the four most conversion-relevant ones for hero placement).

**This section has no H2 heading above it.** It is a visual hero strip placed directly below the H1 intro — the template renders the 4 cards inline. Do not write an introductory H2 above the USP cards. The cards speak for themselves.

**Format per USP:**
- Heading: 6 words max (different from Why Choose's 4 words max)
- Description: **10-12 words**, punchy and scannable
- Icon (template handles visuals)

**Selection rule:** at least one of the 4 USPs must reference emergency/24-7/response time to reinforce the secondary keyword cluster.

**Default hero USP set (per `trustSignals[]`):**
1. 24/7 Emergency Service
2. Lifetime Labour Warranty
3. Fixed Upfront Pricing
4. Local, Family-Owned

### 5.4 Trusted Intro (H2 + 50-word paragraph)

H2 heading: 6-10 words. Single phrase, no separators.
**Pattern:** `Trusted [Suburb] Plumbers` or `Trusted Local Plumbers in [Suburb]`

**Paragraph: 50 words.** Sits between the H2 and the next section. Reinforces trust signals from site-config:
- Years operating (`business.yearsOperating`) — "a decade of Adelaide experience"
- Licence (`business.licence`) — `Lic. #333997`
- Top 2 trust signals (`trustSignals[0:2]`) — Lifetime Labour Warranty, Fixed Upfront Pricing, etc.
- Family-owned positioning

### 5.5 Our Plumbing Services (H2 + 50w intro + 9 H3s, box hub layout)

**Services hub — reordered up to sit directly under the Trusted Intro.** Suburb pages put the service grid early so visitors see what they can book before reading the longer Local Context section. All 9 service categories from `services.categories[]` appear here.

H2 heading: 6-10 words. Single phrase, no separators.
**Pattern:** `Our Plumbing Services` or `Our Plumbing Services in [Suburb]`

**Intro paragraph: 50 words.** Sits between the H2 and the box grid. Frames what the user is about to see (the 9 services) and the underlying promise (one licensed team, Fixed Upfront Pricing, Lifetime Labour Warranty). Per `content-quality-rules.md` Part B7.

**Layout:** rendered by the template as a **box grid** (3 columns × 3 rows, or similar responsive layout). Each box is a card linking to that service's page. Content remains 30-word blocks regardless of visual treatment.

**Box content per service:**
- H3 heading: 4 words max (service category name from `services.categories[].name`)
- Block: 30 words, single flowing sentence
- Mentions suburb naturally (but not in every box — at most half the boxes per `content-quality-rules.md` Part B8)
- Links once to that service's dedicated page at `/[service-slug]/`

**The 9 service boxes (in order, mirroring home page Section 5.5):**
1. General Plumbing → `/general-plumbing/`
2. Emergency Plumbing → `/emergency-plumbing/`
3. Blocked Drains → `/blocked-drains/`
4. Hot Water → `/hot-water/`
5. Gas Fitting → `/gas-fitting/`
6. Pipe Relining → `/pipe-relining/`
7. Leak Detection → `/leak-detection/`
8. Taps & Toilets → `/taps-toilets/`
9. Burst Pipes → `/burst-pipes/`

**Sentence rhythm rule:** no two consecutive H3 blocks may start with the same word or word class. Vary openings (per `content-quality-rules.md` Part B4).

### 5.6 Local Context block (H2 + 200-250 words) — *the local relevance section*

**This is the section that beats the existing networks** — every concrete claim draws from the snapshotted suburb research at `data/suburb-research.json`. Moved DOWN from its previous Section 5.5 position so the Services hub appears first.

H2 heading: 6-10 words. Single phrase, no separators.
**Pattern:** `What [Suburb] Homes Need from Their Local Plumber` or `Plumbing in [Suburb]`

Content structure (paragraph form, not lists):
1. **Opening:** suburb character — housing stock, building era, residential vs commercial mix. From `research.housing.notes` and `research.housing.eras`.
2. **Common local issues:** 2-4 plumbing problems specific to this suburb's housing and infrastructure. From `research.plumbingContext[]`.
3. **Real local references:** 2-3 streets or landmarks from `research.streets[]` or `research.landmarks[]`.
4. **Optional:** council/LGA reference from `research.council`.

**Hard rule:** if the research file lacks a field, that claim does not appear. A 200-word section with real facts beats a 250-word section with one invented detail (per `content-quality-rules.md` Part A).

### 5.7 Emergency Plumbing in [Suburb] (H2 + 50w intro + dot points + paragraph)

H2 heading: 6-10 words. Single phrase, no separators.
**Pattern:** `When Emergency Plumbing Strikes in [Suburb]` or `Emergency Plumbing in [Suburb]`

**Intro paragraph: 50 words.** Sits between the H2 and the dot points. Frames what counts as an emergency, why time matters, and the within-the-hour promise. Per `content-quality-rules.md` Part B7.

**Format:** compact dot points (no expanded explanations) followed by one 30-word wrap-up paragraph.

This single section captures every "emergency plumber [suburb]" variant in one place. The dot points keep word count manageable while signalling local urgency.

### 5.8 Common Plumbing Issues in [Suburb] (H2 + expanded dot points)

H2 heading: 35 words ending with colon
**Pattern:** `Common Plumbing Issues We Fix Across [Suburb]:`

**Format:** expanded dot points — bold heading phrase + 25-35 word explanation per item. 4-6 items total, each drawn from `research.plumbingContext[]`.

If research surfaces fewer than 4 verified local issues, supplement with generic plumbing issues — no forced local relevance. Better honest than fabricated.

### 5.9 Our Process (H2 + exactly 4 H3s)

H2 heading: 35 words ending with colon
**Pattern:** `How We Work in [Suburb]:`

Exactly 4 H3s:
1. Speak to Our Team
2. Onsite Assessment & Quote
3. Work Completed Cleanly
4. Testing & Handover

Each block: 30 words, single sentence.

### 5.10 Why Locals Choose [Site Name] (H2 + 50w intro + exactly 4 H3s)

H2 heading: 6-10 words. Single phrase, no separators.
**Pattern:** `Why [Suburb] Locals Choose Us` or `Why Locals Choose [site.siteName]`

**Intro paragraph: 50 words.** Sits between the H2 and the 4 H3 blocks. Frames the brand promise and what the 4 USPs represent. Per `content-quality-rules.md` Part B7.

Top 4 trust signals from `trustSignals[]`. **Note:** these are the same 4 used in the hero block (5.3) but now in full 30-word treatment — hero block teases, this section expands.

Each H3 heading: trust signal in 4 words max.
Each H3 block: 30 words, single sentence. Vary mentions across the 4 — suburb once, site name once, but do not stack both in every block.

### 5.11 Safety & Compliance (H2 + exactly 4 H3s)

H2 heading: 35 words ending with colon
**Pattern:** `Safe, Compliant Plumbing Work in [Suburb]:`

4 H3s covering:
1. Licensed Adelaide Plumbers
2. Fully Insured
3. AS/NZS 3500 Compliance
4. Lifetime Labour Warranty

Pull specifics from `compliance.standards[]`, `compliance.insured`, `business.licence`, `guarantees.warranty`.

Each H3 block: 30 words, single sentence.

### 5.12 Testimonials

**Currently omitted from suburb pages.** `site-config.shared.json` does not store testimonials and `content-quality-rules.md` Part A2 bans fabricating them. Until verified, real testimonials per suburb cluster are sourced and added to site-config, this section does not appear on suburb pages.

If/when testimonials are added: each entry must include verifiable customer name + initial, suburb (target suburb or one of the adjoining suburbs), and quote. A suburb page with a testimonial from a non-cluster suburb reads as network content and is blocked in QA.

### 5.13 Service Areas (H2 + 30-word paragraph + bullet list)

H2 heading: 12-15 words
**Pattern:** `Servicing [Suburb] and Surrounding Areas`

**Format:** 30-word intro paragraph followed by a bullet list of all `site.adjoiningSuburbs[]` (5 to 8 suburbs).

Bullet list links each adjoining suburb to its own page **on this same site** (e.g. `/plumber-aberfoyle-park/`). Heavy internal linking density without padding the paragraph.

### 5.14 Final CTA (H2 + 30-word paragraph)

H2 heading: 12-15 words
**Pattern:** `Need an Emergency Plumber in [Suburb]? Call Now`
**Variant:** `Need a Plumber in [Suburb]? Call [Site Name] Today`

Paragraph: 30 words. Must include:
- Phone from `site.trackingPhone`
- One specific offer/USP from `offers.newCustomerDiscount` (e.g. `$50 off first service`) or `offers.pensionerDiscount`
- 24/7 emergency emphasis (reinforces secondary cluster)

**Note:** the business does not offer a free callout. Do not write "free callout" or "$0 callout fee" — these are fabricated offers per `content-quality-rules.md` Part D4.

### 5.15 FAQs (H2 + 25-35w intro + 6 H3 Q/A pairs)

**Structure changed:** FAQ questions are now real H3 headings (not bold text). Answers are body paragraphs underneath each H3. The FAQPage schema still works — template lifts H3 + following paragraph into Q/A pairs. H3 questions give each FAQ a scrollable anchor and improve Google's PAA extraction.

H2 heading: 6-10 words. Single phrase, no separators.
**Pattern:** `Frequently Asked Questions` or `Plumber FAQs`

**Intro paragraph: 25-35 words** between the H2 and the first H3 question. Frames what the FAQs cover ("the questions we hear most often from [Suburb] homeowners"). Per `content-quality-rules.md` Part B7.

**Each Q/A pair:**
- H3 heading: the question itself (must end with `?`)
- Body paragraph below H3: 30-35 word answer, single direct sentence

Exactly 6 H3 Q/A pairs. Wrap in FAQPage schema (template handles).

**Frontmatter mirror:** the `faqs` array in YAML frontmatter still holds the Q/A pairs (template lifts these into FAQPage schema). Body markdown and frontmatter must match exactly.

**FAQ naturalness rules (apply across all page types):**
- **Brand name (`site.siteName`) appears 0 times in FAQ questions.** Real users don't type the brand name into Google. Brand name may appear in an answer, never the question.
- **At most 3 of 6 questions mention the suburb at all.** Some questions are generic plumbing questions; some are local. Variety beats stuffing.
- **Suburb appears at most once per question and once per answer**, never repeated within the same Q/A pair.
- **Real PAA test:** would a real user type this exact question into Google? If no, rewrite.

**Question mix (3 with suburb, 3 generic, 1 of the 3 generic being the local-specific Q6 with suburb):**
1. **Response time** ("How quickly can a plumber arrive in [Suburb]?") — suburb in Q
2. **Emergency hours** ("Do you offer 24/7 emergency plumbing?") — generic
3. **Pricing** ("How does plumbing pricing work?") — generic
4. **Emergency scope** ("What counts as a plumbing emergency?") — generic
5. **Service availability** ("Do you service all homes in [Suburb]?") — suburb in Q
6. **Local-specific question** drawn from `research.plumbingContext[]` — suburb in Q. Examples:
   - Older-suburb context: "Do you handle clay-pipe drainage repairs in [Suburb]?"
   - Coastal context: "Do you handle saltwater corrosion repairs in [Suburb]?"
   - Hills context: "Can you fix slope-drainage issues in [Suburb]?"
   - Newer-estate context: "Do you service builder-shortcut fittings in [Suburb]?"

Questions 2 and 4 explicitly target the emergency cluster. Question 6 is the highest-value FAQ — signals genuine local knowledge to both users and AI search engines. Always derive from `research.plumbingContext[]`. Per `seo-foundations.md` Section A14, FAQ questions must mirror real PAA queries — invented ones are blocked.

## 6. Schema requirements

Template auto-generates from site-config + suburb-research + page content. Suburb pages add (on top of global Plumber LocalBusiness):

- **Plumber LocalBusiness** with `areaServed` set from `site.serviceArea` (which already lists the suburb + adjoining suburbs)
- **FAQPage** wrapping the FAQ section
- **BreadcrumbList:** Home > [Suburb]
- **Service** (optional, one per primary service mentioned)

Writer does not output JSON-LD. Writer's job is to produce content the template can lift into schema (FAQs as Q/A pairs, business hours referenced via `business.hours`, etc.).

## 7. Internal linking

- **Up:** Home page (1 link, in trust section or breadcrumb) — only on adjoining-suburb pages, since the primary suburb page IS the home page
- **Across to services:** 5-8 service pages (each Core Services H3 links to its service page)
- **Across to other suburbs:** all `site.adjoiningSuburbs[]` (Service Areas bullet list, every suburb linked to its own page on this same site)
- **Down:** Contact page (1 link, in final CTA)
- **Down:** About page (1 link, in trust section)

**Critical: zero cross-linking between sites in the network.** Per `seo-foundations.md` Part C4, no site in the 100-microsite network ever links to another site in the network. Suburb-page links go only to pages on this same site.

**Anchor text rules:**
- Service links: use service name as anchor ("blocked drain repairs", not "click here")
- Adjoining suburb links: bare suburb name ("Aberfoyle Park", not "plumber Aberfoyle Park" — exact-match stuffing is the giveaway)

## 8. CTA placement

Phone CTA must appear minimum 3, maximum 5 times per page:

1. Sticky mobile header (template handles)
2. After USP hero block (button)
3. After Emergency Plumbing section (button)
4. Final CTA section (full card)
5. (Optional) Inline within Local Context block

The Emergency section CTA is non-negotiable — emergency searchers want to call immediately, not scroll.

## 9. Page-specific SEO

| Element | Requirement |
|---|---|
| URL slug (primary suburb / home) | `/` |
| URL slug (adjoining suburb page) | `/plumber-[suburb-slug]/` (e.g. `/plumber-aberfoyle-park/`) |
| Primary keyword (plumber + suburb) | Title, H1, meta description, URL slug, first 100 words, hero alt text |
| Emergency keyword (emergency/24-7) | H1, meta description, USP block, dedicated section, 2+ FAQs, final CTA |
| Target suburb mentions in body | 4-8 (excluding Service Areas section) |
| Adjoining suburbs in body prose | 2-3 named naturally (in addition to the full list in Service Areas) |
| Wider region | 1-2 natural mentions ("southern Adelaide", "the Adelaide Hills", etc., drawn from `research.region`) |
| Real streets/landmarks from research | Minimum 2 references |
| Local plumbing issues from research | At least one paragraph + dot-point section |

## 10. Anti-patterns (NEVER on a suburb page)

1. **Mention any non-target, non-adjoining suburb.** If the slug is `/plumber-aberfoyle-park/`, Aberfoyle Park appears, the listed adjoining suburbs (from `site.adjoiningSuburbs`) appear, nothing else.
2. **Invent local details.** No fabricated streets, landmarks, council facts, housing stock claims, or "common local issues" not in `data/suburb-research.json`.
3. **Reuse paragraphs across suburb pages on this site.** Every suburb page must have ≥60% unique sentences vs any other suburb page on the same site (per `content-quality-rules.md` Part A and `seo-foundations.md` Part A10). Find-replace does not count.
4. **Reference services not in `services.categories[]`.**
5. **Link to other sites in the 100-microsite network.** Zero cross-network linking, ever, per `seo-foundations.md` Part C4.
6. **Generic "we service all of Adelaide" closing.** Be specific to the target suburb cluster.
7. **Pad to hit 1,500+ words.** A 1,400-word page with real content beats a 1,700-word page with one invented detail.
8. **Use testimonials from suburbs outside the target cluster** (when/if testimonials are added to site-config).
9. **Open consecutive H3 blocks with the same word.** Vary sentence rhythm.
10. **Skip the emergency cluster.** If the page has no emergency mention in H1, no emergency USP in the hero block, no dedicated emergency section, and no emergency FAQs, it is missing 40% of the search opportunity.
11. **Mention air conditioning, HVAC, electrical, or any non-plumbing service.** Zero exceptions, per `content-quality-rules.md` Part C3.
12. **Offer anything not in site-config.** No "free callout", no fabricated discounts, no invented financing terms.
13. **Use em dashes.** Zero. Use commas, full stops, or new sentences. Per `brand-voice-guide.md` and `content-quality-rules.md` Part B4.
14. **Stuff the suburb name into every section.** Hard ceiling: ~12 suburb mentions across the full suburb page (excluding the dedicated Service Areas bullet list and the H1 intro). Per `seo-foundations.md` Part A12 the natural density is 4-8 per 800 words. **In multi-H3 sections (5.6 Services, 5.9 Process, 5.10 Why Choose, 5.11 Safety), at most half the H3 blocks may mention the suburb.**
15. **Straight dot-point sections with no intro.** Every dot-point block needs a 1-2 sentence intro paragraph or section lead before the bullets. A bare list under a heading reads as a content-mill template.
16. **Pipes (`|`) or other separators in H1 or H2 headings.** On-page headings are single phrases. Pipes belong in title tags (meta), never on-page. No en-dashes, no em-dashes, no middle dots in headings.
17. **Brand name in FAQ questions.** Per the FAQ naturalness rules in Section 5.15. Real users don't type the brand name. Brand may appear in answers, never in questions.

## 11. Example outline — Happy Valley

```
H1: 24/7 Emergency Plumber in Happy Valley
[35-word intro — names Happy Valley, names Plumber Happy Valley, references 24/7 and one adjoining suburb]

USP HERO STRIP
- 24/7 Emergency Service
- Lifetime Labour Warranty
- Fixed Upfront Pricing
- Local, Family-Owned

H2: Trusted Happy Valley Plumbers with Over a Decade of Adelaide Experience
[35-word paragraph — references yearsOperating, licence, top 2 trust signals]

H2: What Happy Valley Homes and Businesses Need from Their Local Plumber:
[200-250 words pulling from research.housing.notes, research.plumbingContext, research.streets, research.landmarks]

H2: Our Plumbing Services in Happy Valley:
- H3: Blocked Drains (30 words)
- H3: Hot Water (30 words)
- H3: Burst Pipes (30 words)
- H3: Gas Fitting (30 words)
- H3: Leaking Taps (30 words)
- H3: Toilet Repairs (30 words)

H2: When Emergency Plumbing Strikes in Happy Valley, We Respond Fast:
[Compact dot points + 30-word wrap-up]

H2: Common Plumbing Issues We Fix Across Happy Valley:
[4-6 expanded dot points from research.plumbingContext — ageing hot water systems, clay-pipe drainage, tree-root intrusion, slope drainage]

H2: How We Work in Happy Valley:
- H3: Speak to Our Team (30 words)
- H3: Onsite Assessment & Quote (30 words)
- H3: Work Completed Cleanly (30 words)
- H3: Testing & Handover (30 words)

H2: Why Happy Valley Locals Choose Plumber Happy Valley:
- H3: 24/7 Emergency (30 words)
- H3: Lifetime Warranty (30 words)
- H3: Upfront Pricing (30 words)
- H3: Family-Owned Local (30 words)

H2: Safe, Compliant Plumbing Work in Happy Valley:
- H3: Licensed Adelaide Plumbers (30 words)
- H3: Fully Insured (30 words)
- H3: AS/NZS 3500 Compliance (30 words)
- H3: Lifetime Labour Warranty (30 words)

H2: Servicing Happy Valley and Surrounding Areas
[30-word paragraph + bullet list linking all adjoiningSuburbs to their own pages on this site]

H2: Need an Emergency Plumber in Happy Valley? Call Now
[12-15 word title + 30-word paragraph with tracking phone + $50 off first service + 24/7]

H2: Happy Valley Plumber FAQs
1. Do you service all homes in Happy Valley?
2. How quickly can a plumber arrive in Happy Valley?
3. How does pricing work for plumbing in Happy Valley?
4. Do you offer 24/7 emergency plumbing in Happy Valley?
5. What counts as a plumbing emergency in Happy Valley?
6. Do you handle clay-pipe drainage repairs in Happy Valley?
```

## How this doc is used

- **Writer subagent (writing a suburb page):** loads `brand-voice-guide.md` + `seo-foundations.md` + `content-quality-rules.md` + this doc as system prompt. User message includes the merged `site-config.json` for the site, the snapshotted `data/suburb-research.json` and `data/adjoining-suburbs.json`, the services list, and the adjoining suburbs list.
- **QA Reviewer:** uses sections 4 (word counts), 9 (SEO requirements), and 10 (anti-patterns) as a blocking checklist. Word count violations, missing local references, non-target suburb mentions, and missing emergency cluster signals all fail QA.
- **Tom:** spot-checks against section 10 on randomly sampled output. The find-replace failure mode (anti-pattern #1) and the emergency cluster (anti-pattern #10) are the two to be paranoid about.

## Field paths referenced

These are the paths used in this doc. They match the canonical schemas:

**From the merged `site-config.json` (per `site-config.schema.json`):**
- `business.yearsOperating`
- `business.licence`
- `business.licenceAuthority`
- `business.hours`
- `services.categories[]`
- `trustSignals[]`
- `offers.newCustomerDiscount`
- `offers.pensionerDiscount`
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

**From the snapshotted suburb research (per `suburb-research.schema.json`):**
- `research.suburb`
- `research.housing.notes`
- `research.housing.eras`
- `research.plumbingContext[]` (each with `issue` and `context`)
- `research.streets[]`
- `research.landmarks[]` (each with `name` and `type`)
- `research.council`
- `research.region`
