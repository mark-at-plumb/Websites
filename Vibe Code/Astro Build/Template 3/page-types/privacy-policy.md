# Privacy Policy Page — Template Spec

This doc covers the `/privacy-policy/` page on every site in the network. **Unlike every other page-type doc, this is a template-control spec, not a Writer subagent brief.** The Writer does not generate legal copy. The template injects per-site values into a single master policy that is identical across all 100 sites.

Cross-references: `brand-voice-guide.md`, `seo-foundations.md`, `content-quality-rules.md`, `page-types/terms-of-use.md` (sister legal page), `page-types/financing.md` (Humm disclosure).


---

## 1. Job-to-be-done

Comply with the Australian Privacy Act 1988 and APP-13 (which requires a clearly available privacy policy). Set expectations for visitors about what data is collected and why. Reduce legal exposure from inaccurate or missing disclosures.

The page is a legal document, not a marketing surface. Conversion is not a goal.

## 2. Search intent

Direct nav only. No SEO targeting. The page exists because it is legally required, not because users search for it.

## 3. Target queries

None. The page is `noindex`-eligible (but should remain indexable to demonstrate transparency).

## 4. Word count

**~1,200-1,600 words.** Length is whatever the legally accurate disclosures require, not a content target.

## 5. The third-party services this network actually uses

Per the operator's confirmation, the network uses these services that touch user data:

| Service | Purpose | Data collected | Place of processing |
|---|---|---|---|
| Cloudflare | Hosting / CDN / DDoS protection | IP address, browser info, request metadata | United States, with global edge presence |
| Google Analytics 4 | Web analytics | Cookies, usage data, IP (anonymised), device info | United States |
| Google Tag Manager | Tag deployment | Indirect — depends on what tags are loaded | United States |
| WildJar (or equivalent call tracker) | Phone call attribution | Phone number (when calling), call recordings (if enabled), call metadata | Australia |
| Humm (third-party, linked out) | Finance for plumbing jobs (not embedded — link only) | None on this site; Humm collects directly when user applies | Australia |
| Contact form submission | Lead capture | Name, phone, email, suburb, service, message | Per business's chosen lead system (e.g. Mailchimp, CRM) |

**No other third-party services touch user data on the microsites.** Specifically excluded (do not list as third parties even though the boilerplate competitor policy does):
- Facebook / Meta pixel, custom audiences, remarketing
- Bing Ads
- Mouseflow / Hotjar / Microsoft Clarity (heatmaps)
- Mailchimp newsletter (unless the business runs one — confirm before adding)
- AdRoll, Criteo, OneSignal, Cloudinary, Font Awesome, Mailchimp
- Facebook Messenger Customer Chat
- iOS / Android push notifications

If any of these are added in future, the policy must be updated before they go live.

## 6. Per-site variable fields (template injects these)

The template renders the same policy across all 100 sites, with these fields varying per site:

| Field | Source |
|---|---|
| Site name | `site.siteName` |
| Site URL | `site.domain` |
| Business name | "Plumber [Suburb]" (per `site.siteName`) — operating under the parent business identity |
| ABN | `business.abn` (constant: `52 668 135 886`) |
| Licence | `business.licence` (constant: `Lic. #333997`) |
| Contact phone | `site.trackingPhone` |
| Contact email | Currently not stored in site-config — confirm with business before publishing |
| Last updated date | `[YYYY-MM-DD]` placeholder, set at template build time |

## 7. Page structure (in order)

### 7.1 H1

**Pattern:** `Privacy Policy` (single phrase H1, no separators). Title tag may keep pipes for SERP readability.

### 7.2 Last updated line

Single line directly under the H1.

```
This Privacy Policy was last updated on [YYYY-MM-DD].
```

### 7.3 Introduction (1-2 paragraphs)

Plain language preamble. Identifies the operator, the website, and the customer's rights under the Privacy Act.

**Required content:**
- The site name and URL
- The parent business identity (ABN 52 668 135 886, Lic. #333997)
- Confirmation that the policy applies to this website only
- A statement that the operator complies with the Australian Privacy Act 1988 and APPs

### 7.4 What data we collect (H2 + bulleted lists)

Distinguish between three collection types:

**Information you give us:**
- Name, phone number, email (when you submit the contact form)
- Suburb, service requested, urgency, message details (contact form fields)
- Any other information provided when you contact us by phone

**Information collected automatically:**
- Cookies and usage data (page views, time on page, scroll depth)
- Device information (browser, operating system, IP address, screen resolution)
- Approximate location based on IP address

**Information from third parties:**
- Call metadata from WildJar when you call the tracking number listed on this site
- Conversion data from Google Ads or other ad platforms if you arrived via a paid ad

### 7.5 How we use your data (H2 + bulleted list)

Specific purposes — no vague "to provide our services" filler.

- To respond to your contact form submission or phone call
- To book and complete plumbing work for your property
- To send Lifetime Labour Warranty service or follow-up if you become a customer
- To improve the website and understand which pages convert visitors (via Google Analytics)
- To attribute marketing channels (via WildJar call tracking and Google Tag Manager)
- To comply with legal obligations (tax records, licence reporting, etc.)

### 7.6 Who we share your data with (H2 + table or list)

The actual list from Section 5 above, presented in plain language:

```
- **Cloudflare** — hosts the website and protects it from malicious traffic
- **Google Analytics 4 and Google Tag Manager** — analyse how the website is used
- **WildJar** — tracks which marketing channel a phone call came from
- **Humm** — provides finance for larger jobs (third-party — Humm collects your data directly if you apply for finance through them, not through us)
- **Our lead-management system** — receives contact form submissions
```

For each, include place of processing (Australia or United States) and a link to their public privacy policy.

### 7.7 Cookies (H2 + paragraph)

Plain-language paragraph explaining:
- What cookies are
- That the site uses analytics and tag management cookies
- That users can disable cookies in their browser but some features may not work
- A link to the browser's cookie management instructions (generic — no need to list every browser)

### 7.8 How long we keep your data (H2 + bulleted list)

Specific retention periods:

- **Contact form submissions:** retained for 7 years (matches Australian business record-keeping obligations)
- **Customer records (booked work):** retained for 7 years
- **Analytics data:** retained per Google Analytics defaults (currently 14 months)
- **Call recordings (if any):** retained for 12 months unless required for an ongoing dispute

### 7.9 Your rights (H2 + bulleted list)

Per the Australian Privacy Principles:

- **Access:** you have the right to ask what personal data we hold about you
- **Correction:** you can ask us to correct inaccurate or out-of-date data
- **Deletion:** you can ask us to delete your data, subject to legal record-keeping requirements
- **Complaints:** you can complain to us first; if unresolved, you can contact the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au

### 7.10 Security (H2 + 1 paragraph)

Plain statement that the operator takes reasonable measures to protect data — HTTPS, secured infrastructure via Cloudflare, lead system access controls. No specific claims that could create liability if breached (e.g. "we use bank-grade encryption" is the kind of phrase to avoid).

### 7.11 Children's data (H2 + 1 paragraph)

Statement that the site is not directed at children under 16 and that data from children is not knowingly collected. If a parent learns that a child has submitted data, they can contact the operator to have it removed.

### 7.12 Changes to this policy (H2 + 1 paragraph)

Standard clause: the policy may be updated; updates will be reflected on this page with a new "last updated" date; continued use of the site constitutes acceptance of the updated policy.

### 7.13 How to contact us (H2 + contact block)

Plain contact block. Pulls from site-config:

```
- **Business:** [site.siteName]
- **Operating under:** Parent business identity, ABN 52 668 135 886, Lic. #333997
- **Phone:** [site.trackingPhone]
- **Website:** [site.domain]
- **Postal queries:** [requires a postal address — currently not in site-config, confirm with business before publishing]
```

## 8. Schema requirements

- **Plumber LocalBusiness** with full schema (template lifts from site-config — same as every page)
- **BreadcrumbList:** Home > Privacy Policy

No specific privacy-policy schema is required.

## 9. Internal linking

- **Up:** Home page (1 link, breadcrumb)
- **Outbound (allowed exceptions):**
  - Cloudflare, Google, WildJar, Humm privacy policies (one link per third-party in Section 7.6)
  - OAIC website (oaic.gov.au) in Section 7.9
  - All outbound links: `target="_blank" rel="noopener"`

**Critical:** zero cross-linking between sites in the 100-microsite network. Per `seo-foundations.md` Part C4.

## 10. CTA placement

**None.** The privacy policy is not a conversion surface. The sticky mobile phone header is the template default; no additional CTAs in body copy.

## 11. Anti-patterns (NEVER on the privacy policy page)

1. **List third-party services the site does not actually use.** This is the boilerplate-policy trap. Listing Bing Ads, Mouseflow, Mailchimp, AdRoll, OneSignal, Cloudinary, Facebook Messenger Customer Chat, etc. when none of them are deployed is a false declaration and a compliance risk under the Privacy Act and GDPR.
2. **Use US copyright or jurisdictional language** ("Section 101 of the United States Copyright Law", "Privacy Shield participant", "throughout the universe"). The business is an Australian SA-jurisdiction business.
3. **Make security claims the business cannot back up.** "Bank-grade encryption", "256-bit SSL guaranteed unbreakable", "your data is 100% secure" — these create liability and are factually unverifiable.
4. **Promise specific retention periods the business does not actually follow.** If the policy says 12 months and the business retains for 7 years, the policy is wrong. Match what actually happens.
5. **Claim GDPR compliance without verifying it.** If the business has EU visitors, GDPR may apply. The policy should describe what actually happens, not what the business wishes happened.
6. **Mention services that handle children's data, biometrics, health data, or financial credit assessment.** None apply to a plumber microsite. Their absence in the policy is itself a clarifying signal.
7. **Use suburb-specific framing.** Privacy policies are legal documents, not marketing. The same policy applies across all 100 sites. Only the site name, URL, phone, ABN, and licence vary.
8. **Cross-link to other sites in the network.** Per `seo-foundations.md` Part C4.
9. **Embed the form on this page.** The contact page hosts the form. The privacy policy is a legal disclosure document.
10. **Publish without lawyer review.** This doc is a starting draft only.

## 12. Per-site rendering

The template renders this page with per-site values injected. The same canonical policy text is identical across all 100 sites — only the values in Section 6 vary. The template does not invoke the Writer subagent for this page.

## Field paths referenced

**From the merged `site-config.json`:**
- `business.abn`
- `business.licence`
- `business.licenceAuthority`
- `site.siteName`
- `site.domain`
- `site.trackingPhone`
- `transparencyFooter` (footer renders this on every page, including this one)

**Not currently in site-config (must be added before publishing the live policy):**
- Contact email address
- Postal address (if the business wants postal privacy queries)
- Lead system destination (Mailchimp / CRM / dedicated inbox — for accurate disclosure of where contact form data goes)
