# Financing Page — Writing Guidelines

This doc covers the `/about/financing/` page on every site in the network. The Financing page explains the Humm interest-free payment option for larger plumbing jobs.

Cross-references: `brand-voice-guide.md`, `seo-foundations.md`, `content-quality-rules.md`, `page-types/about.md` (parent).

## 1. Job-to-be-done

Convert customers who are deferring larger jobs (hot water replacement, pipe relining, full renovation plumbing) due to upfront cost. The Humm financing option removes the affordability barrier, especially in emergency contexts.

This page is **factual not promotional**. Humm is a third-party finance product. The business does not lend or assess credit — Humm does. The page must be clear about that relationship to avoid misleading customers and to keep the business out of unlicensed credit territory.

## 2. Search intent

Mid-funnel, decision-stage. The customer has researched the service, sees the cost, and is now exploring payment options. May also arrive via direct nav from the about page or from a search like `[site name] financing` or `plumber finance [primary suburb]`.

## 3. Target queries

**Primary:**
- [site name] financing
- plumber financing [primary suburb]
- Humm plumber [primary suburb]
- pay later plumber [primary suburb]

**Secondary:**
- interest free plumber [primary suburb]
- afterpay plumber [primary suburb] (Afterpay is not used — this query lands here as a relevant alternative)
- plumber payment plan [primary suburb]

## 4. Word count

**400 to 600 words total.** Focused on clarity over depth.

Section-level counts:

| Section | Count | Approx words |
|---|---|---|
| H1 + intro | 35 words exactly | 35 |
| 5.3 How it works (paragraph + bullets) | 60-80 + 4-5 bullets | 80-120 |
| 5.4 What can be financed (4-5 bullets) | 4-5 × 8-12w | 40-60 |
| 5.5 Why Humm (4-5 bullets) | 4-5 × 8-12w | 40-60 |
| 5.6 How to apply (3 numbered steps) | 3 × 20-30w | 60-90 |
| 5.7 The fine print (disclaimer paragraph) | 30-50 | 30-50 |
| 5.8 Related guarantees (2 box hub) | 35w intro + 2 × 30w | 95 |
| 5.9 Service Areas | 30w + bullet list | 50-70 |
| 5.10 Final CTA | 12-15w title + 30w para | 45 |
| **Total** | | **~480-620** |

## 5. Section structure (in order)

### 5.1 H1

**Pattern:** `Plumbing Finance Options with Humm` or `Spread the Cost of Your [Primary Suburb] Plumbing Job`

Single phrase H1, no separators. Title tag may keep pipes for SERP readability.
**Variant:** `Spread the Cost of Your [Primary Suburb] Plumbing Job`

### 5.2 H1 intro (35 words exactly)

Must include:
- Site name from `site.siteName`
- Primary suburb (1 mention)
- Reference to Humm as the third-party provider
- Reference to interest-free plans

**Example:** `Plumber Happy Valley offers interest-free finance through Humm for customers across Happy Valley. Spread the cost of larger plumbing jobs into manageable instalments. Approval is fast, and you deal directly with Humm.`

### 5.3 How It Works (H2 + 60-80 word paragraph + 4-5 bullets)

H2 heading: 12-15 words
**Pattern:** `How Humm Finance Works for [Primary Suburb] Plumbing Jobs`

60-80 word paragraph explaining the relationship: the business completes the work, Humm handles the finance, the customer repays Humm directly.

Followed by 4-5 compact bullets (8-15 words each) summarising the key points:

```
- Spread the cost into interest-free instalments
- Choose from small or large purchase plans depending on the job
- Fast online approval, often in minutes
- No upfront deposit required
- You deal directly with Humm for repayments, not us
```

### 5.4 What Can Be Financed (H2 + 4-5 bullets)

H2 heading: 12-15 words
**Pattern:** `What You Can Finance Through Humm`

4-5 compact bullets (8-12 words each). Drawn from the customer's existing site and `services.categories[]`.

```
- Hot water system replacements and installations
- Pipe relining and major drain repairs
- Burst pipe and major emergency plumbing work
- Gas fitting and gas appliance installations
- Full renovation and bathroom plumbing packages
```

### 5.5 Why Customers Choose Humm (H2 + 4-5 bullets)

H2 heading: 12-15 words
**Pattern:** `Why [Primary Suburb] Customers Choose Humm`

4-5 compact bullets (8-12 words each):

```
- No upfront deposit required
- Interest-free plans available
- Fast, simple online approval process
- Flexible repayment terms to suit your budget
- Trusted by thousands of Australians
```

### 5.6 How to Apply (H2 + 3 numbered steps)

H2 heading: 12-15 words
**Pattern:** `How to Apply for Humm Finance`

3 numbered steps, 20-30 words each. Plain-spoken, no jargon.

```
1. Call Plumber Happy Valley on [site.trackingPhone] to book an assessment. Our technician will walk through the job, the cost, and the financing option on site.

2. Apply with Humm online or via their app. Choose a small or large purchase plan based on the job size. Approval typically takes minutes.

3. Once approved, we book in the work. You repay Humm directly per your chosen plan. We get on with the job.
```

### 5.7 The Fine Print (H2 + 30-50 word disclaimer paragraph)

H2 heading: 12-15 words
**Pattern:** `Important to Know`

30-50 word disclaimer paragraph. This is **non-negotiable** for legal clarity. Cannot be omitted or softened.

```
All finance is provided by Humm. Credit eligibility criteria, fees, and terms and conditions apply. Plumber Happy Valley does not issue or manage the finance agreement. For full Humm terms, visit humm.com.au or speak with their team directly.
```

### 5.8 Related Guarantees (H2 + 2 box hub)

H2 heading: 12-15 words
**Pattern:** `Our Other Guarantees`

**Layout:** 2-box grid.

1. **Service Guarantee** → `/about/service-guarantee/`
   - 30-word block.

2. **Lifetime Labour Warranty** → `/about/lifetime-labour-warranty/`
   - 30-word block.

### 5.9 Service Areas (H2 + 30-word paragraph + bullet list)

Same format as `about.md` Section 5.7.

### 5.10 Final CTA (H2 + 30-word paragraph)

H2 heading: 12-15 words
**Pattern:** `Get the Job Done Now, Pay Later — Call [Primary Suburb]'s Local Plumber`

Paragraph: 30 words. Must include:
- Phone from `site.trackingPhone`
- Reference to Humm finance availability
- Reference to 24/7 or Lifetime Labour Warranty as a secondary trust signal

## 6. Schema requirements

- **Plumber LocalBusiness** with full schema
- **BreadcrumbList:** Home > About > Financing

No `Offer` schema for the financing (the financing is provided by Humm, not the business — schema-claiming the offer would misrepresent the relationship).

## 7. Internal linking

- **Up:** About page and Home — via breadcrumb
- **Across:** Service Guarantee and Lifetime Labour Warranty — Section 5.8
- **Across to suburbs:** all `site.adjoiningSuburbs[]` (Service Areas)
- **Down:** Contact page (1 link, final CTA)
- **Outbound (allowed exception):** humm.com.au — single link in the disclaimer paragraph (Section 5.7), `target="_blank" rel="noopener"`. This is the only outbound link on a non-service trust page; it's allowed because it serves the customer and meets legal clarity standards.

**Critical:** zero cross-linking between sites in the 100-microsite network.

## 8. CTA placement

Phone CTA: minimum 2, maximum 3 times on this page:

1. Sticky mobile header
2. End of Section 5.6 (implicit via step 1 phone number)
3. Final CTA section

## 9. Page-specific SEO

| Element | Requirement |
|---|---|
| URL | `/about/financing/` |
| Title tag | `Plumbing Finance \| Humm \| [Site Name]` (60 chars max) |
| Primary keyword | Title, H1, meta description, first 100 words |
| Primary suburb mentions in body | 2-4 |
| Adjoining suburbs | Listed in Service Areas |
| Humm mentions | 4-6 (clarity about the third-party relationship) |
| Disclaimer present | Section 5.7 is non-negotiable |

## 10. Anti-patterns (NEVER on the financing page)

1. **Imply the business issues the finance.** Humm issues the finance. The business arranges the work. Conflating these creates unlicensed credit risk.
2. **Promise specific interest rates, repayment terms, or approval outcomes.** Humm controls these and they vary by customer. The business cannot promise specifics.
3. **Omit the disclaimer in Section 5.7.** Legal clarity is mandatory.
4. **Use the word "guaranteed approval" or anything similar.** Humm assesses credit and may decline. False guarantee = legal risk.
5. **Promote interest-free as a permanent offer.** It is "available" per `offers.finance.terms` — Humm sets the actual plan terms.
6. **Quote dollar figures the business cannot honour** (e.g. "from $50/week"). Repayments depend on the job cost and the plan Humm offers.
7. **Cross-link to other sites in the network.** Per `seo-foundations.md` Part C4.
8. **Use em dashes.** Per `brand-voice-guide.md`.
9. **Pad to hit 600+ words.** Clarity beats length on finance pages.
10. **Mention air conditioning, HVAC, electrical, or any non-plumbing service.** Per `content-quality-rules.md` Part C3.
11. **Mention competing finance providers (Afterpay, Zip, Latitude) as available options unless they're in site-config.** Humm is the only finance partner per `offers.finance.provider`.
12. **Make claims about Humm beyond what they publicly state.** Stick to "interest-free plans available", "fast approval", "no upfront deposit" — generic Humm value props, not invented specifics.
13. **Pipes (`|`) or other separators in H1 or H2 headings.** Single phrases on-page. Title tag meta only.
14. **Straight dot-point sections with no intro.** Every dot-point block needs a 1-2 sentence lead before the bullets.

## 11. Example outline — Happy Valley

```
URL: /about/financing/

H1: Plumbing Finance Options in Happy Valley | Humm

[35-word intro: Plumber Happy Valley offers interest-free finance
through Humm for customers across Happy Valley. Spread the cost
of larger plumbing jobs into manageable instalments. Approval is
fast, and you deal directly with Humm.]

H2: How Humm Finance Works for Happy Valley Plumbing Jobs
[60-80w paragraph explaining the three-party relationship]
- Spread the cost into interest-free instalments
- Choose from small or large purchase plans depending on the job
- Fast online approval, often in minutes
- No upfront deposit required
- You deal directly with Humm for repayments, not us

H2: What You Can Finance Through Humm
- Hot water system replacements and installations
- Pipe relining and major drain repairs
- Burst pipe and major emergency plumbing work
- Gas fitting and gas appliance installations
- Full renovation and bathroom plumbing packages

H2: Why Happy Valley Customers Choose Humm
- No upfront deposit required
- Interest-free plans available
- Fast, simple online approval process
- Flexible repayment terms to suit your budget
- Trusted by thousands of Australians

H2: How to Apply for Humm Finance
1. Call Plumber Happy Valley on [site.trackingPhone] to book an assessment.
2. Apply with Humm online or via their app.
3. Once approved, we book in the work. You repay Humm directly.

H2: Important to Know
[30-50w disclaimer: all finance provided by Humm, eligibility criteria
apply, Plumber Happy Valley does not issue the finance, link to humm.com.au]

H2: Our Other Guarantees
[35w intro]
[2-box grid]
### Service Guarantee           → /about/service-guarantee/         [30w]
### Lifetime Labour Warranty    → /about/lifetime-labour-warranty/  [30w]

H2: Servicing Happy Valley and Surrounding Areas
[30w + bullet list]

H2: Get the Job Done Now, Pay Later | Call Happy Valley's Local Plumber
[30w CTA: site.trackingPhone + Humm + Lifetime Labour Warranty]
```

## Field paths referenced

**From the merged `site-config.json`:**
- `business.hours`
- `trustSignals[]`
- `offers.finance.provider` (must be exactly "Humm")
- `offers.finance.terms`
- `offers.newCustomerDiscount` / `offers.pensionerDiscount`
- `services.categories[]` (for "what can be financed")
- `site.siteName` / `site.suburb` / `site.trackingPhone`
- `site.adjoiningSuburbs[]`
- `transparencyFooter`
