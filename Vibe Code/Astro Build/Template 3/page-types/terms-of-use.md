# Terms of Use Page — Template Spec

This doc covers the `/terms-of-use/` page on every site in the network. **Like the privacy policy, this is a template-control spec, not a Writer subagent brief.** The Writer does not generate legal copy. The template injects per-site values into a single master terms document that is identical across all 100 sites.

Cross-references: `privacy-policy.md` (sister legal page), `brand-voice-guide.md`, `seo-foundations.md`, `content-quality-rules.md`, `page-types/financing.md` (Humm disclosure — referenced for third-party purchases), `page-types/lifetime-labour-warranty.md` (warranty terms — cross-link).

---


## 1. Job-to-be-done

Establish the legal framework for using the website. Limit liability for content on the site (within the bounds the Australian Consumer Law allows — note that ACL prohibits broad exclusion of consumer guarantees). Set governing law as South Australia. Reduce exposure from disputes about content accuracy, third-party links, and user-submitted information through the contact form.

The page is a legal document, not a marketing surface.

## 2. Search intent

Direct nav only. No SEO targeting.

## 3. Target queries

None.

## 4. Word count

**~1,000-1,400 words.** Length is whatever the legally accurate disclosures require.

## 5. Per-site variable fields (template injects these)

The template renders the same terms across all 100 sites, with these fields varying per site:

| Field | Source |
|---|---|
| Site name | `site.siteName` |
| Site URL | `site.domain` |
| Business identity | "Plumber [Suburb]" operating under the parent business |
| ABN | `business.abn` (constant: `52 668 135 886`) |
| Licence | `business.licence` (constant: `Lic. #333997`) |
| Contact phone | `site.trackingPhone` |
| Last updated date | `[YYYY-MM-DD]` placeholder, set at template build time |

## 6. Page structure (in order)

### 6.1 H1

**Pattern:** `Terms of Use` (single phrase H1, no separators). Title tag may keep pipes for SERP readability.

### 6.2 Last updated line

Single line directly under the H1.

```
These Terms of Use were last updated on [YYYY-MM-DD].
```

### 6.3 Introduction (1-2 paragraphs)

Plain language preamble. Identifies the operator and confirms that using the website constitutes agreement to the terms.

**Required content:**
- The site name and URL
- The parent business identity (ABN 52 668 135 886, Lic. #333997)
- Statement that the operator complies with the Australian Consumer Law (ACL) and South Australian fair trading legislation
- Plain statement: "By using this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use the site."

### 6.4 Use of this website (H2 + paragraph)

Plain terms for ordinary use:

- Visitors may browse the site for personal, non-commercial purposes
- Visitors may not scrape, copy, or republish the site's content without written permission
- Visitors may not attempt to compromise the security or functionality of the site
- Visitors may not use the contact form for spam, harassment, or unlawful purposes

### 6.5 Intellectual property (H2 + paragraph)

Plain language IP statement:

- The website content, layout, images, and brand identity are owned by the operator
- The Lic. #333997, business name, and trade marks are the property of the operator
- Visitors may not reproduce, modify, or redistribute the content without written permission
- Third-party content (e.g. manufacturer logos in service descriptions) remains the property of the respective owner

### 6.6 Accuracy of information (H2 + paragraph)

Important under the ACL. Balanced language:

- The operator takes reasonable care to ensure the website information is accurate at the time of publication
- Service descriptions, pricing references, and turnaround times are indicative — actual quotes are provided in writing before any work begins
- The operator may update the website without notice
- The website does not constitute personalised plumbing advice — if you have a specific plumbing concern, call the operator on `[site.trackingPhone]`

### 6.7 No DIY advice (H2 + paragraph)

This is a plumbing-specific liability protection.

```
The information on this website is general in nature and is not intended as DIY plumbing instruction. Plumbing work is regulated in South Australia and must be performed by a licensed plumber. Attempting plumbing work yourself can cause property damage, injury, gas safety risks, or breach of compliance obligations.

If you have a plumbing issue, call [site.siteName] on [site.trackingPhone]. We will assess the issue and provide a fixed upfront quote before any work begins.
```

This section is non-negotiable and cross-references the brand voice and content-quality rules around safety claims (per `content-quality-rules.md` Part D3).

### 6.8 Third-party links and services (H2 + paragraph)

Cover the outbound links the site uses:

- The site may link to third-party websites (e.g. Humm for finance applications, manufacturer brand pages, council or government sites for compliance information)
- The operator does not control third-party websites and is not responsible for their content, accuracy, or privacy practices
- Following a third-party link is at the visitor's own risk
- For finance specifically: Humm provides the finance product. The operator does not lend or assess credit. All finance terms, eligibility, and obligations are between the visitor and Humm directly (cross-link to `/about/financing/`)

### 6.9 Warranty references (H2 + paragraph)

Refers to the Lifetime Labour Warranty without re-litigating its terms:

```
The operator offers a Lifetime Labour Warranty on workmanship performed by its licensed team. Full warranty terms, including what is covered and what is not covered, are set out at /about/lifetime-labour-warranty/. The terms in that document govern warranty claims.
```

This cross-links to `lifetime-labour-warranty.md` and avoids the risk of warranty terms being inconsistent across two pages.

### 6.10 Australian Consumer Law (H2 + paragraph)

ACL-mandatory language. The ACL prohibits broad exclusion of consumer guarantees, so this section acknowledges them rather than tries to disclaim them.

```
Nothing in these Terms of Use excludes, restricts, or modifies any consumer guarantee, right, or remedy under the Australian Consumer Law that cannot lawfully be excluded. To the extent permitted by law, the operator's liability for breach of any guarantee that cannot be excluded is limited to the supply of the services again or payment of the cost of having the services supplied again.
```

### 6.11 Limitation of liability (H2 + paragraph)

Within the bounds the ACL allows:

```
To the extent permitted by law, the operator is not liable for:
- Indirect, incidental, or consequential losses arising from use of the website
- Loss caused by inaccurate or out-of-date information on the website (the website is general guidance, not personalised advice)
- Loss caused by third-party websites or services linked from the website
- Loss caused by the visitor's failure to call the operator and obtain a quote before acting on website information

This clause does not affect the operator's obligations under any consumer guarantee that cannot lawfully be excluded.
```

### 6.12 Contact form submissions (H2 + paragraph)

Cover what happens when someone submits the contact form:

```
By submitting the contact form, you confirm that the information you provide is accurate and that you are authorised to provide it. The operator uses the information solely to respond to your enquiry, in accordance with the Privacy Policy at /privacy-policy/. The operator does not on-sell contact details to third parties.
```

### 6.13 Governing law (H2 + paragraph)

```
These Terms of Use are governed by the laws of South Australia. Any dispute arising from these terms or from use of the website is subject to the exclusive jurisdiction of the courts of South Australia.
```

### 6.14 Changes to these terms (H2 + paragraph)

```
The operator may update these Terms of Use at any time. Updates will be reflected on this page with a new "last updated" date. Continued use of the website after an update constitutes acceptance of the updated terms.
```

### 6.15 How to contact us (H2 + contact block)

Same block as the privacy policy:

```
- **Business:** [site.siteName]
- **Operating under:** Parent business identity, ABN 52 668 135 886, Lic. #333997
- **Phone:** [site.trackingPhone]
- **Website:** [site.domain]
- **Postal queries:** [requires a postal address — currently not in site-config, confirm with business before publishing]
```

## 7. Schema requirements

- **Plumber LocalBusiness** with full schema (template lifts from site-config — same as every page)
- **BreadcrumbList:** Home > Terms of Use

No specific terms-of-use schema is required.

## 8. Internal linking

- **Up:** Home page (1 link, breadcrumb)
- **Across:**
  - `/privacy-policy/` (referenced in Section 6.12)
  - `/about/financing/` (referenced in Section 6.8 for Humm disclosure)
  - `/about/lifetime-labour-warranty/` (referenced in Section 6.9 for warranty)
- **Outbound (allowed exceptions):**
  - Australian Consumer Law information (consumerlaw.gov.au or accc.gov.au) — optional, in Section 6.10
  - All outbound links: `target="_blank" rel="noopener"`

**Critical:** zero cross-linking between sites in the 100-microsite network. Per `seo-foundations.md` Part C4.

## 9. CTA placement

**None.** Terms of use is not a conversion surface. The sticky mobile phone header is the template default.

## 10. Anti-patterns (NEVER on the terms of use page)

1. **Use US-style copyright or jurisdictional language.** No "Section 101 of the United States Copyright Law", no "Privacy Shield", no "throughout the universe in perpetuity". The business is South Australian.
2. **Try to exclude consumer guarantees that the Australian Consumer Law does not permit excluding.** ACL guarantees on services (services must be supplied with due care and skill, fit for purpose, within a reasonable time) cannot be contracted out of for consumer-grade transactions. Section 6.10 acknowledges this rather than attempting to override it.
3. **Promise "your statutory rights are not affected" without actually preserving them.** Section 6.10 must do the real preservation work, not just say words.
4. **Provide DIY plumbing instruction or imply the website is a substitute for a licensed plumber.** Section 6.7 is the explicit defence — never undercut it elsewhere on the page.
5. **Restate the warranty terms.** The warranty is set out at `/about/lifetime-labour-warranty/`. Section 6.9 only refers to it. If the two pages disagree, the warranty page wins.
6. **Conflate the business's liability for plumbing work with its liability for website content.** The website is general information; the plumbing work is a separate contractual relationship with its own quotation and Lifetime Labour Warranty.
7. **Reference Humm terms without crossing to `/about/financing/`.** Humm finance is the financing page's job. The terms of use only confirms the third-party relationship.
8. **Use suburb-specific framing.** Same as the privacy policy — these are legal documents, not marketing. Only the per-site fields in Section 5 vary.
9. **Cross-link to other sites in the network.** Per `seo-foundations.md` Part C4.
10. **Embed the contact form on this page.** The contact page hosts the form.
11. **Publish without lawyer review.** This doc is a starting draft only.

## 11. Per-site rendering

The template renders this page with per-site values injected. The same canonical terms text is identical across all 100 sites — only the values in Section 5 vary. The template does not invoke the Writer subagent for this page.

## Field paths referenced

**From the merged `site-config.json`:**
- `business.abn`
- `business.licence`
- `business.licenceAuthority`
- `site.siteName`
- `site.domain`
- `site.trackingPhone`
- `transparencyFooter`

**Not currently in site-config (must be added before publishing the live terms):**
- Postal address (if the business wants postal legal queries)
