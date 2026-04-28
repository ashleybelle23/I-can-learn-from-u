# I Can Learn From You — MVP

A living community web app built on the belief that every person carries wisdom worth sharing. Inspired by the emotional feeling of ODESZA's "Line of Sight" — the humbling recognition that people around you see things you've never seen, and have lived through things you haven't.

---

## What was built

### Pages (9 routes, 31 static pages)

| Route | Description |
|---|---|
| `/` | Home — hero, pillar entry points, featured content, community preview, giveback banner |
| `/podcast` | Episode listing with featured episode |
| `/podcast/[slug]` | Episode detail — player, guest bio, related community post |
| `/community` | Community feed with urgency sorting, emergency panel, post form |
| `/community/[id]` | Post detail — full post, replies, reply form, crisis resources |
| `/store` | Product listing with featured items and giveback section |
| `/store/[slug]` | Product detail — cultural context, origin, community impact |
| `/trust` | Trust levels, badges, how-to-earn guide, community leaderboard |
| `/about` | Brand origin story, beliefs, get involved |
| `/resources` | Crisis hotlines, support resources by category, community guidelines, report form |

### Core features

**Podcast**
- Episode card + featured episode card components
- Audio player placeholder (UI only — wire up to your podcast host)
- Guest bio, themes/tags, related community discussion link
- Episode detail page with sidebar of related episodes

**Community Support**
- 5 mock posts across all urgency levels and categories
- Urgency-sorted feed (high urgency posts pinned to top)
- Post detail with replies, upvotes, helpful markers
- Reply form with community care guidelines
- `EmergencyPanel` component on high-urgency posts with crisis resources (988, Crisis Text Line, NAMI, etc.)
- Post creation form with category + urgency selection
- Clear peer support disclaimer (not medical/crisis service)
- Report button on posts and replies

**Trust + Reputation System**
- 5 trust levels: Listener → Contributor → Guide → Trusted Guide → Community Steward
- 8 community badges (4 rarity tiers)
- Points system with human descriptions of what earns trust (and what doesn't)
- Community leaderboard with user profiles
- "What we don't reward" section — designed to discourage shallow gamification

**Store**
- 10 curated products across 7 categories (Sound, Movement, Meditation, Ritual, Books, Rest, Home)
- Each product includes: cultural context, origin, community impact note
- "Community Giveback" section explaining how proceeds are routed back
- Product detail page with related products

### Visual design
- Deep indigo / midnight blue base (`#0f0b1e`, `#1e1640`, `#2d1b69`)
- Warm gold accents (`#d4a843`, `#f0c040`)
- Soft lavender secondary (`#9b8ec4`, `#c4b8e0`)
- Cream/parchment text (`#f5f0e8`)
- Radial gradient hero with light bloom effects
- Custom scrollbar, text selection highlight in gold
- Fully responsive — mobile nav with hamburger menu

---

## How to run locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# Build for production
npm run build
npm run start
```

---

## What is mocked

Everything is currently mock data. No backend, auth, payments, or real content exists yet.

| File | Contents |
|---|---|
| `lib/mock/podcasts.ts` | 6 podcast episodes with full metadata |
| `lib/mock/community.ts` | 5 community posts with replies, across 5 categories |
| `lib/mock/users.ts` | 5 users at different trust levels with badges |
| `lib/mock/products.ts` | 10 store products with cultural context and pricing |
| `lib/mock/trust.ts` | 5 trust level configs + 5 emergency resources |

Product images are placeholder icons. To add real images, place them in `/public/products/[slug].jpg` and update `ProductCard.tsx` and the product detail page to use `next/image`.

---

## Suggested next steps

### Immediate (MVP hardening)

- [ ] **Authentication** — Add user auth (Clerk, Auth.js, or Supabase Auth). Users need profiles, trust levels stored, and session context.
- [ ] **Database** — Replace mock data with a real database (Postgres via Supabase or PlanetScale, Prisma ORM). Tables: users, posts, replies, upvotes, badges, products, orders.
- [ ] **Real images** — Add product and podcast episode images to `/public/`. Use `next/image` for optimization.
- [ ] **Podcast audio** — Replace `audioUrl: '#'` with real CDN links, or embed from Spotify/Apple Podcasts/Buzzsprout.

### Core product

- [ ] **Community upvotes/saves** — Wire the upvote and save buttons to real state (optimistic updates + API).
- [ ] **Post creation** — Connect `PostForm` to an API route and database insert.
- [ ] **Trust point system** — Implement server-side point tracking triggered by community actions.
- [ ] **Badge awarding** — Automated badge logic (e.g., award "Deep Listener" after 10 helpful votes).
- [ ] **Moderation** — Implement report queue, mod dashboard, and auto-hide thresholds.

### Store

- [ ] **Payments** — Integrate Stripe for checkout. Products table with inventory tracking.
- [ ] **Giveback accounting** — Track which % of each sale goes to which community fund. Publish impact reports.
- [ ] **Real product images** — Source and load actual product photography.

### Safety

- [ ] **Moderation pipeline** — Human review queue for reported content.
- [ ] **Crisis detection** — Flag posts containing crisis keywords for elevated review and automatic emergency resource display.
- [ ] **Trusted responder verification** — Process for vetting users as peer support guides (beyond point accumulation alone).

### Growth

- [ ] **Email notifications** — Notify post authors when they receive replies.
- [ ] **Podcast RSS feed** — Expose `/api/podcast/rss` for Apple/Spotify submission.
- [ ] **SEO / OG images** — Dynamic OpenGraph images for each podcast episode and community discussion.
- [ ] **Search** — Full-text search across posts, episodes, and products.
- [ ] **Community categories filter** — Client-side filter on the community feed by category.

---

## Tech stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Fonts:** Geist (via `next/font`)
- **Routing:** File-system based (App Router, `generateStaticParams` for dynamic routes)
- **Data:** 100% mock — no API calls, no database

---

*Built with care. Every person carries wisdom worth sharing.*
