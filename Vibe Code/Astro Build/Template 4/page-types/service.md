# Service Page — Writing Guidelines

This doc is the authoritative structural spec for service pages on every site in the network. Each site runs **9 service category pages**, one per entry in `services.categories[]`.

Cross-references: `brand-voice-guide.md` (voice), `seo-foundations.md` (cross-cutting SEO), `content-quality-rules.md` (hard constraints), `master-sheet-spec.md` (per-site data), `page-types/suburb.md` (suburb page spec — shares structural conventions), `orchestrator-architecture/research/suburb-research.spec.md` (research field meanings).

## 1. Job-to-be-done

Capture commercial search traffic for "[service] [suburb]" query clusters. Service is the primary topic; suburb is secondary context. Each site runs 9 service pages, each targeting a single service category for the site's primary suburb plus the adjoining-suburb cluster.

## 2. Search intent

Commercial. Often urgent. The user wants this specific service done on their property. They are comparing options on licensed/insured status, response time (especially for emergency services), pricing transparency, and expertise with this service specifically.

For **emergency-intent services** (`intent: "emergency"`) the user wants this fixed today. For **planned-intent services** (`intent: "planned"`) the user is researching providers. For **mixed-intent services** (`intent: "mixed"`) both paths apply and the page should serve both.

## 3. The 9 service category pages

Every site builds exactly these 9 service pages from `services.categories[]`:

| ID | Name | URL | `isEmergency` | `intent` |
|---|---|---|---|---|
| `general-plumbing` | General Plumbing | `/general-plumbing/` | false | planned |
| `emergency` | Emergency Plumbing | `/emergency-plumbing/` | true | emergency |
| `blocked-drains` | Blocked Drains | `/blocked-drains/` | true | emergency |
| `hot-water` | Hot Water | `/hot-water/` | true | mixed |
| `gas-fitting` | Gas Fitting | `/gas-fitting/` | true | mixed |
| `pipe-relining` | Pipe Relining | `/pipe-relining/` | false | planned |
| `leak-detection` | Leak Detection | `/leak-detection/` | true | mixed |
| `taps-toilets` | Taps & Toilets | `/taps-toilets/` | false | planned |
| `burst-pipes` | Burst Pipes | `/burst-pipes/` | true | emergency |

The `isEmergency` flag controls whether the page includes the emergency USP placement and dedicated emergency section. The `intent` enum controls FAQ patterns, CTA framing, and emergency-cluster keyword targeting.

## 4. Target queries

**Primary cluster — service + suburb:**
- [service] [suburb] (e.g. "blocked drains Happy Valley")
- [suburb] [service]
- [service] in [suburb]
- [service] plumber [suburb]
- [service] repair [suburb]

**Secondary cluster — service variants (only when `isEmergency = true`):**
- 24 hour [service] [suburb]
- emergency [service] [suburb]
- same day [service] [suburb]

**Tertiary (capture in body + FAQs):**
- [service] cost
- how long does [service] take
- [service] vs [alternative service]
- when to call a [service] plumber

## 5. Word count

**1,200 to 1,500 words total.** Shorter than suburb pages because the local context is lighter — the service is the topic, not the area. This overrides the service-page floor in `seo-foundations.md`.

Section-level counts (strict):

| Section | Count |
|---|---|
| H1 + intro | 35 words exactly |
| USP hero block per USP | 6 word heading max + 10-12 word description |
| Section 6.4 Trusted Specialists intro | 50 word paragraph |
| Section 6.10 Why Choose intro | 50 word paragraph |
| Every other H2 intro | 35 words, ending with colon |
| H3 headings | 4 words max |
| H3 content blocks | 30 words exactly, single flowing sentence |
| Dot-point sections (expanded format) | bold heading 6 words max + 25-35 word explanation |
| Why Choose section | exactly 4 H3s, 30 words each |
| Areas We Service paragraph | 25 words exactly |
| Final CTA | 12-15 word title + 30-word paragraph |
| FAQs | H2 + 25-35w intro + 6 × (H3 question + 30-35w answer) |

## 6. Section structure (in order)

### 6.1 H1

**Standard pattern:** `[Service] in [Suburb]` or `[Suburb] [Service] Plumber`

Examples:
- `Blocked Drains in Happy Valley`
- `Hot Water Systems in Happy Valley`
- `Licensed Pipe Relining in Happy Valley`

**Emergency-intent pattern** (`isEmergency = true`): weave 24/7 / Emergency into the single phrase
- `24/7 Blocked Drains in Happy Valley`
- `Emergency Burst Pipe Repair in Happy Valley`

H1 contains the primary keyword (service + suburb) once, naturally, in a single clean phrase. **No separators in the H1.** No pipes, no en-dashes, no em-dashes. Title tag in frontmatter may keep pipes for SERP readability.

### 6.2 H1 intro (35 words exactly)

Must include:
- Primary keyword (service + suburb)
- Site name from `site.siteName`
- One specific value claim drawn from `trustSignals[]` or `guarantees` (e.g. "Lifetime Labour Warranty", "Fixed Upfront Pricing", "licensed")
- For emergency-intent services: 24/7 / emergency / urgent reference

### 6.3 USP Hero Block (4 USPs)

Same format as suburb pages (see `suburb.md` Section 5.3). Pulls 4 values from `trustSignals[]`.

**This section has no H2 heading above it.** It is a visual hero strip placed directly below the H1 intro — the template renders the 4 cards inline. Do not write an introductory H2 like "Why Choose Us" or similar.

**Selection rule:**
- For `isEmergency = true` services: at least one of the 4 USPs must reference emergency response / 24/7 / Within-the-Hour Response
- For `isEmergency = false` services: no emergency USP required. Prioritise Lifetime Labour Warranty / Fixed Upfront Pricing / licensed / family-owned instead

Each USP: 6 word heading max + **10-12 word description**. Keep descriptions punchy and scannable.

### 6.4 Intro H2 + 50-word paragraph

H2 heading: 6-10 words, distinct from H1. Single phrase, no separators.

**Pattern:** `Trusted [Service] Specialists in [Suburb]`

Examples:
- `Trusted Blocked Drain Specialists in Happy Valley`
- `Hot Water System Experts Across Happy Valley`

**Paragraph: 50 words.** Sits between the H2 and the next section. Establishes credentials specific to this service:
- Years operating (`business.yearsOperating`) where relevant
- Licence (`business.licence`)
- One specific trust signal or guarantee
- The USP angle (Same-Day Response, Lifetime Labour Warranty, Fixed Upfront Pricing, etc.) woven into the prose, not bolted onto the H2

### 6.5 Service Breakdown / Sub-services (H2 + 4-8 H3s)

The bulky depth section. Covers sub-services or aspects of the main service category, pulled from the category's `items[]` array in `services.categories[]`.

H2 heading: 35 words ending with colon
**Pattern:** `Our [Service] Services in [Suburb]:` or `Complete [Service] Solutions Across [Suburb]:`

4-8 H3s. Each:
- H3 heading: 4 words max (sub-service name from `items[]`)
- Block: 30 words, single flowing sentence
- Mentions suburb naturally (but not in every block — vary)

**Example for Blocked Drains:**

```
### CCTV Drain Inspections
Our team uses HD CCTV cameras to identify the exact location and cause of blockages across Happy Valley, allowing targeted repairs without unnecessary excavation.

### High-Pressure Jetting
We clear stubborn blockages using high-pressure water jetting, cutting through grease, tree roots, and debris to restore full flow in residential and commercial drains.

### Tree Root Removal
Tree roots cause the majority of blockages in older Happy Valley properties. We remove intrusions and recommend pipe relining to prevent regrowth.

### Drain Replacement
Where pipes are too damaged for clearing or relining, we replace them with modern PVC, restoring reliable drainage to homes across the area.
```

**Sentence rhythm rule:** no two consecutive H3 blocks may start with the same word or word class (per `content-quality-rules.md` Part B4).

### 6.6 Why It Matters (H2 + expanded dot points OR paragraph + bullets)

Establishes urgency without scare tactics by addressing the consequences of not fixing the problem. Suits expanded dot point format for emergency-intent services; works well as paragraph + bullets for planned-intent.

H2 heading: 35 words ending with colon
**Pattern:** `Why Quick [Service] Action Matters for [Suburb] Homes:` or `What Happens If You Ignore a [Problem]:` or `Why [Service] Choice Matters for [Suburb] Homes:`

**Format option A — expanded dot points** (4 items, suits emergency-intent):

```
**Property damage compounds fast**
[25-35 word explanation of what gets worse if ignored]

**Bigger repairs cost more**
[25-35 word explanation of cost escalation]

**Health and safety risks**
[25-35 word explanation of health/safety concerns specific to this service]

**Insurance complications**
[25-35 word explanation of how delays affect insurance claims]
```

**Format option B — 35-word paragraph + tight bullets** (suits planned-intent):

```
[35-word paragraph ending with colon, explaining why this decision matters for this service in this suburb]

- Energy bills can vary by 200%+ depending on system type
- System lifespan ranges from 8 to 20+ years
- Recovery rate matters for larger households
- Compliance and council approvals may apply
- Warranty terms vary significantly by brand
```

Writer picks the format that fits the service best. Format A suits services with longer consequence chains (blocked drains, burst pipes, gas leaks); format B suits services where the decision is the issue rather than the urgency (hot water installation, pipe relining, taps & toilets).

### 6.7 Emergency [Service] in [Suburb] (CONDITIONAL)

**Include this section only if the service's `isEmergency` flag is `true`.**

For `isEmergency = false` services (General Plumbing, Pipe Relining, Taps & Toilets), skip this section entirely.

H2 heading: 35 words ending with colon
**Pattern:** `When [Service] Becomes an Emergency in [Suburb]:`

Compact dot points + 30-word wrap-up paragraph:

```
- [Emergency scenario 1 specific to this service]
- [Emergency scenario 2 specific to this service]
- [Emergency scenario 3 specific to this service]
- [Emergency scenario 4 specific to this service]

[30-word paragraph: response time per `guarantees.response`, 24/7 availability per `business.hours`, what to do while waiting]
```

**Example for Blocked Drains:**

```
- Wastewater backing up into showers, sinks, or toilets
- Water overflowing onto floors from blocked floor wastes
- Sewerage smell throughout the property
- Multiple drains blocking simultaneously

Call now if any of the above are happening at your Happy Valley property. Our team responds within the hour where availability allows. Turn off water-using appliances to prevent more overflow.
```

### 6.8 Common Problems We Fix (H2 + expanded dot points)

The failure modes of this service. Expanded dot point format (bold heading + 25-35 word explanation).

H2 heading: 35 words ending with colon
**Pattern:** `Common [Service] Problems We Fix Across [Suburb]:`

4-6 items. Each is a real problem this service addresses, explained in 25-35 words.

**Local integration rule:** where `research.plumbingContext[]` in the snapshotted suburb research contains issues that map to this service, lead the section with them. This is what makes the service page feel local instead of generic. Where research has no matching entries, generic problems are fine — better honest than fabricated.

**Example for Hot Water Systems** (with research-informed leading items where applicable):

```
**Ageing storage tanks past service life**
Many original-era Happy Valley homes still run hot water systems installed during the 1970s and 1980s build-out. We assess condition and recommend replacement when repair is no longer the right call.

**No hot water at all**
A total loss of hot water usually points to a thermostat failure, tripped breaker, or pilot light issue. We diagnose and repair same-day across Happy Valley.

**Lukewarm water only**
If your water runs warm but never hot, the heating element or gas burner may be failing. We test, repair, or replace as needed.

**Hot water tank leaking**
Tank leaks usually mean the unit is past repair. We replace with a properly sized system matched to your household's hot water demand.
```

### 6.9 Our Process (H2 + exactly 4 H3s)

H2 heading: 35 words ending with colon
**Pattern:** `How Our [Service] Process Works in [Suburb]:`

Exactly 4 H3s. Service-specific H3 headings are fine (e.g. "Drain Diagnosis" instead of "Initial Assessment" for blocked drains).

Default set:
1. Initial Assessment
2. Upfront Quote
3. Professional [Service]
4. Testing & Handover

Each block: 30 words, single flowing sentence.

### 6.10 Why Choose [Site Name] for [Service] (H2 + 50w intro + exactly 4 H3s)

H2 heading: 6-10 words. Single phrase, no separators.
**Pattern:** `Why Locals Choose Us for [Service]` or `Why [Suburb] Customers Choose Us`

**Intro paragraph: 50 words.** Sits between the H2 and the 4 H3 blocks. Frames why the 4 USPs matter for THIS service specifically. Per `content-quality-rules.md` Part B7.

Top 4 trust signals from `trustSignals[]` — same 4 used in the hero block (6.3) but in full 30-word treatment.

Each H3 heading: trust signal in 4 words max.
Each H3 block: 30 words, single sentence.

### 6.11 Areas We Service (H2 + 25-word paragraph)

H2 heading: 12-15 words
**Pattern:** `[Service] Across [Suburb] and Surrounding Areas`

**Format:** single 25-word paragraph with inline links to 3-4 adjoining suburbs from `site.adjoiningSuburbs[]`. No bullet list — the area is secondary context on service pages. Suburb pages get the bullet list treatment.

```
We provide [service] across Happy Valley, Aberfoyle Park, Reynella, Flagstaff Hill, and the wider southern Adelaide region, delivering licensed service backed by our Lifetime Labour Warranty.
```

Inline links in the paragraph go to:
- 3-4 adjoining suburbs from `site.adjoiningSuburbs[]`
- URL pattern: `/plumber-[suburb-slug]/`

### 6.12 Final CTA (H2 + 30-word paragraph)

H2 heading: 12-15 words

**Emergency-intent service pattern** (`isEmergency = true`):
`Need [Service] in [Suburb] Today? Call Now`

**Planned-intent service pattern** (`isEmergency = false`):
`Book Your [Service] in [Suburb] | Fixed Upfront Pricing`

Paragraph: 30 words. Must include:
- Phone from `site.trackingPhone`
- One specific offer from `offers.newCustomerDiscount` ($50 off first service), `offers.pensionerDiscount` (10% pensioner), or `guarantees.warranty.name` (Lifetime Labour Warranty)
- For emergency-intent services: 24/7 / Within-the-Hour Response emphasis
- For planned-intent services: Fixed Upfront Pricing or Lifetime Labour Warranty emphasis

**Note:** the business does not offer a free callout. Never write "free callout", "$0 callout", or "no callout fee" — these are fabricated offers per `content-quality-rules.md` Part D4.

### 6.13 FAQs (H2 + exactly 6 questions)

**Structure changed:** FAQ questions are now real H3 headings (not bold text). Answers are body paragraphs underneath each H3. The FAQPage schema still works — template lifts H3 + following paragraph into Q/A pairs. H3 questions give each FAQ a scrollable anchor and improve Google's PAA extraction.

H2 heading: 6-10 words. Single phrase, no separators.
**Pattern:** `Frequently Asked Questions` or `[Service] FAQs`

**Intro paragraph: 25-35 words** between the H2 and the first H3 question. Frames what the FAQs cover. Per `content-quality-rules.md` Part B7.

**Each Q/A pair:**
- H3 heading: the question itself (must end with `?`)
- Body paragraph below H3: 30-35 word answer, single direct sentence

Exactly 6 H3 Q/A pairs. Wrap in FAQPage schema (template handles).

**Frontmatter mirror:** the `faqs` array in YAML frontmatter still holds the Q/A pairs (template lifts these into FAQPage schema). Body markdown and frontmatter must match exactly.

**FAQ naturalness rules (apply across all page types):**
- **Brand name (`site.siteName`) appears 0 times in FAQ questions.** Real users don't type the brand name into Google. Brand name may appear in an answer, never the question.
- **At most 3 of 6 questions mention the suburb at all.** Variety beats stuffing.
- **Suburb appears at most once per question and once per answer**, never repeated within the same Q/A pair.
- **Real PAA test:** would a real user type this exact question into Google? If no, rewrite.

**FAQ question patterns by service-intent:**

**For emergency-intent services (`intent: "emergency"`):**
1. "How quickly can you arrive for a [service] callout in [suburb]?" — suburb in Q
2. "Do you offer 24/7 emergency [service]?" — generic
3. "How does pricing work for [service]?" — generic
4. "What can I do while waiting for the plumber?" — generic
5. "Will after-hours [service] cost more?" — generic
6. Service-specific question drawn from `research.plumbingContext[]` where possible — usually suburb in Q

**For planned-intent services (`intent: "planned"`):**
1. "How does pricing work for [service]?" — generic
2. "How long does [service] take to complete?" — generic
3. "What warranty applies to [service]?" — generic
4. "What brands or products do you use for [service]?" — generic
5. "Do I need council approval for [service]?" (only if relevant) — generic
6. Service-specific question — usually suburb in Q

**For mixed-intent services (`intent: "mixed"`):**
Pick 2 emergency-flavoured questions and 3 planned-flavoured questions, plus the service-specific Q6. Mirrors how customers actually arrive at hot water, gas fitting, or leak detection pages — some urgent, some researching.

Question 6 is always service-specific. Where the suburb's `research.plumbingContext[]` has an issue that maps to this service, lead with that ("Do you handle clay-pipe drainage repairs in Happy Valley?" on a Blocked Drains or Pipe Relining page). Otherwise, use a service-knowledge question ("What causes most burst pipes in older homes?"). Per `seo-foundations.md` Section A14, FAQ questions must mirror real PAA queries — invented ones are blocked.

## 7. Schema requirements

Beyond the global Plumber LocalBusiness schema, service pages add:

- **Service** schema with:
  - `serviceType` = category name (from `services.categories[].name`)
  - `provider` = LocalBusiness ref
  - `areaServed` from `site.serviceArea`
  - `offers` if relevant offers exist in site-config
- **FAQPage** wrapping the FAQ section
- **BreadcrumbList:** Home > Services > [Service]

Writer does not output JSON-LD. Template generates from site-config + category definition + FAQs in this page.

## 8. Internal linking

- **Up:** Home page (1 link, in trust section or breadcrumb)
- **Up:** Services index page (1 link, in breadcrumb)
- **Across to related services:** 2-3 of the other 8 services on this site (use natural anchor text — e.g. a Blocked Drains page links to Pipe Relining and Emergency Plumbing)
- **Across to suburbs:** 3-4 of the adjoining suburbs from `site.adjoiningSuburbs[]` (inline in Areas We Service paragraph)
- **Down:** Contact page (1 link, in final CTA)

**Critical: zero cross-linking between sites in the 100-microsite network.** Per `seo-foundations.md` Part C4. Service-page links go only to pages on this same site.

**Anchor text rules:**
- Other service links: use service name as anchor ("pipe relining", "hot water repairs"), never "click here"
- Adjoining suburb links: bare suburb name ("Aberfoyle Park"), never exact-match stuffed ("plumber Aberfoyle Park")

## 9. CTA placement

Phone CTA must appear minimum 3, maximum 5 times per page:

1. Sticky mobile header (template handles)
2. After USP hero block (button)
3. After Why It Matters or Emergency section (button)
4. Final CTA section (full card)
5. (Optional) Inline within Common Problems section

For emergency-intent services (`isEmergency = true`), the post-Emergency-section CTA is non-negotiable.

## 10. Page-specific SEO

| Element | Requirement |
|---|---|
| URL slug | `/[service-slug]/` (no suburb in slug — the domain carries that). Slug pulled from `services.categories[].slug`. |
| Primary keyword ([service] + [suburb]) | Title, H1, meta description, first 100 words, hero alt text |
| Emergency keyword (if `isEmergency = true`) | H1, meta description, USP block, dedicated section, 2+ FAQs |
| Service mentions in body | 6-12 (naturally throughout, never stuffed) |
| Target suburb mentions in body | 4-8 (fewer than a suburb page — this is a service page) |
| Adjoining suburbs | 3-4 named in Areas section, each linked to its own page on this site |
| Service-specific technical terms | Naturally throughout (NLP signal of expertise) |

## 11. Anti-patterns (NEVER on a service page)

1. **Make it about the suburb, not the service.** Service pages are about the service. Suburb is context. If the page reads like a suburb page with a service mentioned, it is wrong.
2. **Force emergency content on planned-intent services.** Pipe Relining and Taps & Toilets do not need 24/7 framing. Forcing it makes the page feel manipulative.
3. **Skip emergency content on emergency-intent services.** Equally bad. A Blocked Drains or Burst Pipes page without emergency framing misses 40% of the search opportunity.
4. **Reference services not in `services.categories[]`.** The 9 categories are the network's complete plumbing scope.
5. **Mention non-target, non-adjoining suburbs in the body.** Stay within the suburb cluster.
6. **Reuse paragraphs across service pages on this site.** Each of the 9 service pages must have ≥70% unique sentences vs any other service page on the same site.
7. **Cross-link to other sites in the 100-microsite network.** Zero exceptions, per `seo-foundations.md` Part C4.
8. **Pad to hit 1,200+ words.** A 1,100-word service page with real content beats a 1,400-word page with padding.
9. **Open consecutive H3 blocks with the same word.** Vary rhythm.
10. **Recommend specific brands or manufacturers unless they are explicitly in site-config.** Per `content-quality-rules.md` D2.
11. **Provide DIY repair instructions.** Defer to professional advice. Per `content-quality-rules.md` D3.
12. **Invent statistics, time estimates, or cost figures.** If not in site-config or research, do not include.
13. **Offer a free callout, $0 callout, or any fabricated discount.** The business does not offer these. Per `content-quality-rules.md` D4.
14. **Use em dashes.** Zero. Use commas, full stops, or new sentences. Per `brand-voice-guide.md` and `content-quality-rules.md` Part B4.
15. **Mention air conditioning, HVAC, electrical, or any non-plumbing service.** Per `content-quality-rules.md` Part C3.
16. **Stuff the suburb name into every section.** Hard ceiling: ~10 suburb mentions across a 1,200-1,500 word service page (excluding the Areas We Service paragraph). Per `seo-foundations.md` Part A12. **In multi-H3 sections (6.5 sub-services, 6.9 Process, 6.10 Why Choose), at most half the H3 blocks may mention the suburb.**
17. **Straight dot-point sections with no intro.** Every dot-point block (compact emergency list, expanded common problems, etc.) needs a 1-2 sentence intro paragraph before the bullets. A bare list under a heading reads as a content-mill template.
18. **Pipes (`|`) or other separators in H1 or H2 headings.** On-page headings are single phrases. Pipes belong in title tags (meta), never on-page. No en-dashes, no em-dashes, no middle dots in headings.
19. **Brand name in FAQ questions.** Per the FAQ naturalness rules in Section 6.13. Real users don't type the brand name.

## 12. Example outline — Blocked Drains (emergency-intent)

```
URL: /blocked-drains/
isEmergency: true, intent: emergency

H1: Blocked Drains in Happy Valley | 24/7 Service

[35-word intro: blocked drains + Happy Valley + emergency + Plumber Happy Valley + Lifetime Labour Warranty]

USP HERO BLOCK
- 24/7 Emergency Service
- Within-the-Hour Response
- Lifetime Labour Warranty
- Fixed Upfront Pricing

H2: Trusted Blocked Drain Specialists in Happy Valley with Same-Day Response
[35-word paragraph: a decade of Adelaide experience, Lic. #333997, top trust signal]

H2: Our Blocked Drain Services in Happy Valley:
### CCTV Drain Inspections   [30w]
### High-Pressure Jetting    [30w]
### Tree Root Removal        [30w]
### Drain Replacement        [30w]
### Blocked Stormwater       [30w]

H2: Why Quick Action Matters for Blocked Drains in Happy Valley:
**Property damage compounds fast** [25-35w]
**Bigger repairs cost more**       [25-35w]
**Health and safety risks**        [25-35w]
**Insurance complications**        [25-35w]

H2: When Blocked Drains Become an Emergency in Happy Valley:
- Wastewater backing up into showers, sinks, or toilets
- Water overflowing onto floors from blocked floor wastes
- Sewerage smell throughout the property
- Multiple drains blocking simultaneously
[30-word wrap-up: response time + what to do while waiting]

H2: Common Blocked Drain Problems We Fix Across Happy Valley:
[Lead with research.plumbingContext[] entries that map to drainage]
**Clay-pipe drainage from the 1970s build-out** [25-35w]
**Tree-root intrusion in established yards**    [25-35w]
**Grease buildup in kitchen drains**            [25-35w]
**Collapsed or cracked pipework**               [25-35w]

H2: How Our Blocked Drain Process Works in Happy Valley:
### Drain Diagnosis          [30w]
### Upfront Quote            [30w]
### Professional Clearing    [30w]
### Testing & Handover       [30w]

H2: Why Happy Valley Customers Choose Plumber Happy Valley for Blocked Drains:
### 24/7 Emergency Service     [30w]
### Lifetime Labour Warranty   [30w]
### Fixed Upfront Pricing      [30w]
### Family-Owned Local         [30w]

H2: Blocked Drains Across Happy Valley and Surrounding Areas
[25-word paragraph with inline links to Aberfoyle Park, Reynella, Flagstaff Hill, and the wider southern Adelaide region]

H2: Need Blocked Drains Cleared in Happy Valley Today? Call Now
[30-word CTA: site.trackingPhone + $50 off first service + 24/7 emergency emphasis]

H2: Blocked Drain FAQs | Happy Valley Plumber
Q1: How quickly can you arrive for a blocked drain in Happy Valley?
Q2: Do you offer 24/7 emergency blocked drain service in Happy Valley?
Q3: How does pricing work for blocked drain clearing in Happy Valley?
Q4: What can I do while waiting for the plumber?
Q5: Will after-hours blocked drain clearing cost more in Happy Valley?
Q6: Do you handle clay-pipe drainage repairs in Happy Valley?  [research-driven]
```

## 13. Example outline — Hot Water (mixed-intent)

```
URL: /hot-water/
isEmergency: true, intent: mixed

H1: Hot Water Systems Happy Valley | 24/7 Service

[35-word intro: hot water + Happy Valley + Plumber Happy Valley + Lifetime Labour Warranty + 24/7]

USP HERO BLOCK
- 24/7 Emergency Service
- Lifetime Labour Warranty
- Fixed Upfront Pricing
- Local, Family-Owned

H2: Hot Water System Experts Across Happy Valley and Southern Adelaide
[35-word paragraph: a decade of Adelaide experience, Lic. #333997, top trust signal]

H2: Hot Water Systems We Repair and Install in Happy Valley:
### Hot Water Repair         [30w]
### System Replacement       [30w]
### Gas Hot Water            [30w]
### Electric Hot Water       [30w]
### Solar Hot Water          [30w]
### Heat Pump Systems        [30w]

H2: Why Hot Water Choice Matters for Happy Valley Homes:
[Format B — paragraph + bullets, suits the planned side of mixed-intent]
[35-word paragraph ending with colon]
- Energy bills can vary by 200%+ by system type
- System lifespan ranges from 8 to 20+ years
- Recovery rate matters for larger households
- Compliance and council requirements may apply
- Warranty terms vary significantly by brand

H2: When Hot Water Becomes an Emergency in Happy Valley:
[Included because isEmergency = true]
- No hot water at all, especially with young children or elderly residents at home
- Visible leaks pooling around the tank
- Strange smells, rumbling, or burning odours from the unit
- Discoloured or rusty hot water
[30-word wrap-up]

H2: Common Hot Water Problems We Fix in Happy Valley:
[Lead with research.plumbingContext[] entries that map to hot water]
**Ageing storage tanks past service life**  [25-35w]
**No hot water at all**                      [25-35w]
**Lukewarm water only**                      [25-35w]
**Hot water tank leaking**                   [25-35w]

H2: How Our Hot Water Process Works in Happy Valley:
### Site Assessment          [30w]
### System Recommendation    [30w]
### Professional Install     [30w]
### Testing & Handover       [30w]

H2: Why Happy Valley Customers Choose Plumber Happy Valley for Hot Water:
### 24/7 Emergency Service     [30w]
### Lifetime Labour Warranty   [30w]
### Fixed Upfront Pricing      [30w]
### Local, Family-Owned        [30w]

H2: Hot Water Systems Across Happy Valley and Surrounding Areas
[25-word paragraph with inline links]

H2: Need Hot Water Service in Happy Valley? Call Now
[30-word CTA: site.trackingPhone + Lifetime Labour Warranty + 24/7 + $50 off first service]

H2: Hot Water FAQs | Happy Valley Plumber
[Mixed-intent: 2 emergency-flavoured, 3 planned-flavoured, 1 service-specific]
Q1: How quickly can you respond if my hot water has failed in Happy Valley?
Q2: Do you offer 24/7 hot water emergency service in Happy Valley?
Q3: How does pricing work for hot water installation in Happy Valley?
Q4: What warranty applies to hot water installation?
Q5: Should I choose gas, electric, solar, or heat pump?
Q6: Are ageing hot water systems common in older Happy Valley homes?  [research-driven]
```

## How this doc is used

- **Writer subagent (writing a service page):** loads `brand-voice-guide.md` + `seo-foundations.md` + `content-quality-rules.md` + this doc as system prompt. User message includes the merged `site-config.json`, the snapshotted `data/suburb-research.json`, the specific service category being written (with its `isEmergency` and `intent` values), and the list of adjoining suburbs from `site.adjoiningSuburbs[]`.
- **QA Reviewer:** uses sections 5 (word counts), 10 (SEO requirements), and 11 (anti-patterns) as a blocking checklist. Special attention to anti-pattern #2 (forced emergency on planned-intent) and #3 (skipped emergency on emergency-intent).
- **Tom:** spot-checks against section 11 on randomly sampled output, particularly the emergency-classification fit.

## Field paths referenced

These match the canonical schemas:

**From the merged `site-config.json`:**
- `business.yearsOperating`
- `business.licence`
- `business.hours`
- `services.categories[]` — each with `id`, `name`, `slug`, `description`, `isEmergency`, `intent`, `items[]`
- `trustSignals[]`
- `offers.newCustomerDiscount`
- `offers.pensionerDiscount`
- `guarantees.warranty.name` / `.description`
- `guarantees.pricing.name` / `.description`
- `guarantees.response.name` / `.description`
- `compliance.standards[]`
- `site.siteName`
- `site.suburb`
- `site.trackingPhone`
- `site.adjoiningSuburbs[]`
- `site.serviceArea`

**From the snapshotted suburb research (per `suburb-research.schema.json`):**
- `research.plumbingContext[]` (each with `issue` and `context`) — used in Common Problems (6.8) and FAQ Q6
- `research.region` — used in Areas We Service phrasing
