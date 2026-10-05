# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: recruiters and hiring managers.** They usually arrive with the link already in hand (from LinkedIn, an email, or a referral) and are deciding whether Levent is worth a conversation. They scan fast, often on mobile, and want role, seniority, track record, and a way to get the CV or make contact.

**Secondary: the professional network.** Peers, referrals, and people who searched "Levent Kurtis". They want a clear, credible picture of who he is and what he does.

**Future: freelance clients.** Not targeted yet. Levent may use the site for freelance work one day, so nothing should lock it into a pure job-seeker framing.

## Product Purpose

A personal CV website for Levent Kurtis, a Data & AI lead at Accenture in Copenhagen. It exists to:

1. Turn recruiter and hiring-manager visits into conversations, through a CV download or direct contact.
2. Own his name in search and in AI answers (Google, ChatGPT, Perplexity), so that his site is the source used to describe him.

Success means a visitor understands his role, seniority, and strengths within seconds, and acting on that takes one step.

## Positioning

A Data & AI leader who works where data, people, and delivery meet. He combines hands-on technical work (SQL, Python, Databricks, data migration and quality) with a digital business background (MSc, Copenhagen Business School) and team leadership. He bridges technical teams and executive stakeholders, and both sides of that are backed by his record.

## Operating Context

- Visitors mostly come from LinkedIn, email signatures, and referrals, not discovery search. Link previews (Open Graph) and mobile load speed matter.
- The CV PDF (`public/levent_kurtis_cv.pdf`) is the main artifact recruiters forward internally.
- Contact goes through email (levkurtis@gmail.com) and LinkedIn (linkedin.com/in/leventkurtis).
- Content is mirrored for AI crawlers in `public/llms.txt`, and for structured data in `components/StructuredData.tsx`. Keep these in sync with the page.

## Capabilities and Constraints

- Next.js 14 App Router with a static export, Tailwind v4, hosted on Vercel at leventkurtis.com. Uses Vercel Analytics (no cookies).
- **A single page with no sub-pages or blog.** The "Personal Life Hub" idea in `ROADMAP.md` (photography, projects, goals) is shelved for now.
- Sections: Hero, About, Experience, Skills, Certifications, Education, Contact/Footer.
- Performance is a standing constraint. The SEO plan targets mobile LCP under 2.5 s, and the hero portrait is the LCP element, preloaded as AVIF.
- `design/redesign` is the current design branch under evaluation. `main` is production.

## Brand Commitments

- Name: Levent Kurtis. Headline positioning: "Data & AI Leader". The on-page positioning line is "Data & AI Lead at Accenture".
- **Title rules.** The official Accenture title is Senior Business Architecture Analyst. It understates his actual scope, because promotions are held back for financial reasons. Lead with role and scope, never presenting a project role as the corporate title. "Data Migration Stream Lead" is his current project role (energy sector ERP migration, from 06/2026). The official title appears in Experience and in the structured data, so background checks match. Keep it consistent with his LinkedIn headline.
- Voice: confident and understated, with a bold, ambitious edge. Precise and senior, no buzzwords or hype. Lets the record speak while signalling where he is heading, not only where he has been.
- Written in English. A Danish version is a possible future idea, not a commitment.

## Evidence on Hand

- Full career history, education, skills, certifications, and languages are in the components and in `public/llms.txt`.
- CV PDF: `public/levent_kurtis_cv.pdf`.
- Portrait photos: `public/photo-*.{jpg,avif}`.
- Japan photography: `public/photography-portfolio/japan`. This is personal, and not part of the current scope.
- **There are no testimonials, client logos, metrics, or case studies.** Do not fabricate quotes, outcomes, client names, or numbers.

## Product Principles

1. **Recruiter first.** Every decision is judged by whether a hiring manager on a phone grasps who Levent is and can act within seconds.
2. **The record is the proof.** Make real roles, scope, and progression legible. Never pad them with invented claims.
3. **Understated confidence, forward ambition.** Present seniority calmly, and leave room for the next step, whether that is a leadership role or freelance work later.
4. **One page, fast.** Depth comes from structure, not more pages. Performance and crawlability are features.
5. **One source of truth.** Page copy, the CV PDF, `llms.txt`, and structured data tell the same story.

## Accessibility & Inclusion

No product-specific requirement has been set beyond solid WCAG AA practice. Existing work respects `prefers-reduced-motion`; for example, the intro animation is skipped.
