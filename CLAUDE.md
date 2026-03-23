# CLAUDE.md — Beth Glick Personal Website (bgw)

## Project Overview

Rebuild of bethglick.com from Squarespace to a self-hosted static site. The goal is a 1:1 content migration with minor design refinements (more professional, less "travel blog" banner-heavy), maintaining all text exactly as-is except for the removal of large banner taglines.

## Source Site

- **Current site:** https://www.bethglick.com/ (Squarespace)
- **Substack:** https://intointuition.substack.com/ (newsletter, "Into Intuition")

## Site Structure

| Route | Page | Notes |
|-------|------|-------|
| `/` | Home | Hero image, intro text, recent posts from Research + Organizations |
| `/about` | About | Bio, education, cities, current life |
| `/research` | Research | Article listing — all 10 articles are mirrored on Substack |
| `/research/[slug]` | Research Article | Individual article pages (10 total) |
| `/coaching` | Coaching | Personal narrative + coaching offer + email CTA |
| `/organizations` | Organizations | Consulting overview, client logos, 4 articles |
| `/organizations/[slug]` | Org Article | Individual org articles (4 total) |
| `/inspiration` | Inspiration | Travel photo gallery with locations |

## Content Migration Rules

- **Text accuracy is critical.** Do not change, edit, or paraphrase any copy.
- **Remove large banner taglines** at the top of pages:
  - Home: "Exploring expanded states of consciousness & meaning"
  - Research: "Bridges. Portals. Thresholds." and subtitle
  - Organizations: "Building equitable, healthy, and adaptive workplaces"
  - Inspiration: "Echoes, moments, sparks"
- **Keep all other text exactly as-is**, including article content, bio, coaching narrative.
- **Substack integration:** Research articles are duplicated on Substack. Include a prominent link/CTA to subscribe to the Substack newsletter. Individual articles can live on the site (for SEO/completeness) with a "Read on Substack" link.

## Design Direction

- **Tone down** the large inspirational photo banners with overlaid text
- **More professional** appearance suitable for a PhD researcher/consciousness studies scholar
- Keep some travel/inspirational photos but as supporting elements, not dominant banners
- Clean, modern, minimal design
- Good typography, readable long-form articles
- Mobile responsive

## Tech Stack

- **Static site** — no server-side rendering needed
- **Hosting:** GitHub Pages (or similar free static hosting) with custom domain (bethglick.com)
- **Lightweight tooling** — no heavy framework needed for 6 pages + ~14 articles

## Assets

### Images to Download
- Profile photo (IMG_8158.jpeg) — About page
- Hero images for each page
- Article header images (10 research + 4 org articles)
- Travel photos for Inspiration gallery (~14 photos)
- Client logos (Ignite Philanthropy, Houssian Foundation, Project OverZero, SFU, Peace and Security Funders Group, MacArthur Foundation, Oak Foundation)

### External Links
- LinkedIn: https://www.linkedin.com/in/bethglick/
- Instagram: https://www.instagram.com/bglick/
- Email: bethglick@gmail.com
- Substack: https://intointuition.substack.com/

## Research Articles (from site, all mirrored on Substack)

1. "What Conflict Is Teaching Me About Consciousness" (2025-05-14)
2. "The Telepathy Tapes and the Trap of Certainty" (2025-01-10)
3. "Why Can't I See The Jellyfish?" (2024-10-31)
4. "Trauma Doesn't Make It Less Real" (2024-07-09)
5. "Nine Months Into My PhD Journey…An Update" (2024-06-26)
6. "Spaciousness" (2023-08-10)
7. "An Unlikely Pairing: Intention + Letting Go" (2023-07-19)
8. "Intuition: Both Divine + Mundane" (2023-06-26)
9. "What is Intuition?" (2023-06-16)
10. "Intuition, A Rediscovery" (2023-05-28)

## Organization Articles (unique to site, NOT on Substack)

1. "Breaking Through" (2020-10-29)
2. "The Good Kind of Stretch" (2020-10-14)
3. "Time to Rethink Non-Profit Organizational Design" (2020-07-16)
4. "Philanthropy's Problem with Power" (2020-07-02)

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
```
