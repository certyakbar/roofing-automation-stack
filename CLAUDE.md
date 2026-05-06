# CLAUDE.md — Roofing Automation Stack

This file permanently governs all work on this repository. Read it before making any changes.

---

## Project Purpose

Roofing Automation Stack is a static SEO affiliate site that helps roofing companies compare and choose CRM, lead follow-up, missed-call automation, AI receptionist, call tracking, outbound sales, and sales automation tools.

The site earns affiliate commissions by recommending SaaS tools roofing businesses actually need.

---

## Primary Audience

- Roofing company owners
- Roofing sales managers
- Roofing marketing agencies

All content must be written for this audience. Avoid generic marketing language. Use roofing-specific context (storm restoration, residential reroof, insurance claims, canvassing, etc.) wherever relevant.

---

## Commercial Goal

1. Generate qualified organic search traffic from roofing-industry queries
2. Capture emails via a free checklist offer (the Lead Follow-Up Automation Checklist)
3. Recommend recurring SaaS tools via affiliate links
4. Earn affiliate commissions from qualified referrals

---

## Technology Stack

- **Framework:** Astro (static output)
- **Hosting:** GitHub Pages (free)
- **Repo:** Public GitHub repository
- **Deployment:** GitHub Actions (`.github/workflows/deploy.yml`)
- **Base path:** `/roofing-automation-stack` (matches GitHub Pages repo URL)
- **No backend, no database, no server-side rendering**

---

## Hard Rules — No Exceptions

### No paid dependencies
Do not add any paid API, paid service, paid plugin, paid hosting, or paid infrastructure. The only paid tools are the owner's ChatGPT and Claude Code subscriptions. Every dependency must be free and open source.

Forbidden:
- Paid email platforms (ConvertKit, Mailchimp, etc.)
- Paid databases (Supabase, PlanetScale, etc.)
- Paid analytics (beyond free tiers)
- Paid CDN or hosting beyond GitHub Pages
- Any tool with a mandatory paid plan

### No fake reviews, testimonials, or pricing
- Do not invent or fabricate testimonials
- Do not claim hands-on testing of tools unless explicitly provided by the owner
- Do not invent or guess pricing — always note that pricing should be verified with the vendor
- Do not create fake star ratings

### No spam, cloaking, doorway pages, or parasite SEO
- Every page must provide genuine, original value for roofing audiences
- Do not create thin, filler, or duplicate content
- Do not create pages designed solely to rank for keywords with no real content
- Do not use cloaking or redirect tricks
- Do not create pages that misrepresent the purpose of this site

---

## Content Standards — Every Commercial Article Must Include

1. **Affiliate Disclosure** — The `<AffiliateDisclosure />` component must appear on every page that contains affiliate links. Never remove it.
2. **Quick Answer** — A 2–3 sentence direct answer to the page's primary question, placed above the fold.
3. **Comparison Table** — At minimum one `<ComparisonTable />` for any page comparing multiple tools.
4. **Roofing-Specific Recommendation** — A concrete recommendation written for roofing companies specifically (not generic).
5. **Checklist CTA** — The `<CTABox />` component linking to the free Lead Follow-Up Automation Checklist.
6. **FAQ** — At minimum 3 questions using the `<FAQSection />` component (includes JSON-LD schema).
7. **Related Links** — The `<RelatedGuides />` component with at least 2 related internal pages.

---

## SEO Requirements — Every Page Must Include

- `title` — specific, keyword-relevant, under 60 characters where possible
- `description` — accurate meta description, 140–160 characters
- `canonicalURL` — always set, resolved against `Astro.site`
- Proper heading structure: one `<h1>` per page, followed by `<h2>` and `<h3>` in logical order
- No duplicate titles or meta descriptions across pages

---

## Layouts

| Layout | Use for |
|---|---|
| `BaseLayout` | All pages — provides header, footer, global SEO meta |
| `ArticleLayout` | In-depth guides, reviews, comparisons — includes disclosure, CTA, FAQ, related links |
| `CategoryLayout` | Category hub pages (CRM, Lead Follow-Up, etc.) |

---

## Component Reference

| Component | Purpose |
|---|---|
| `AffiliateDisclosure` | FTC-required disclosure on all affiliate pages |
| `CTABox` | Free checklist CTA — drives email capture |
| `ComparisonTable` | Tool comparison tables with roofing fit scores |
| `ToolCard` | Individual tool overview cards |
| `FAQSection` | FAQ with JSON-LD schema |
| `RelatedGuides` | Internal link grid for related pages |

---

## File Structure

```
src/
  components/   — Reusable Astro components
  layouts/      — Page layouts (Base, Article, Category)
  pages/        — All routes (Astro file-based routing)
    crm/
    lead-follow-up/
    missed-calls/
    ai-receptionists/
    call-tracking/
    outbound/
    templates/
    calculators/
    comparisons/
  content/      — Future: markdown content collections
    articles/
    comparisons/
    reviews/
    templates/
    tools/
  styles/       — Global CSS (global.css)
public/         — Static assets (robots.txt, favicon.svg)
.github/
  workflows/
    deploy.yml  — GitHub Actions: build + deploy to Pages
```

---

## Task Completion Requirement

**Every task must end with `npm run build` passing with no errors.**

Do not mark a task complete if the build fails. Fix build errors before finishing.

---

## Affiliate Link Rules

- All affiliate links must use `rel="nofollow sponsored"` and `target="_blank"`
- Never add affiliate links without a visible disclosure on the same page
- Never claim a tool is recommended based on affiliate relationship — only recommend tools that appear to provide genuine value based on available information

---

## What NOT to Do

- Do not modify `astro.config.mjs` base path or site URL without owner approval
- Do not add backend routes, API endpoints, or server-side rendering
- Do not install packages with paid tiers as a hard requirement
- Do not remove or modify the affiliate disclosure component
- Do not change the `deploy.yml` workflow without owner approval
- Do not add tracking pixels, third-party scripts, or analytics without owner approval
- Do not create placeholder pages with only "coming soon" content as permanent pages — mark them clearly and link to existing content
