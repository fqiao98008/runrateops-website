# [YourBrand] — Consulting Website

Professional marketing website for a finance & operations consulting business.
Built with Next.js 16, TypeScript, Tailwind CSS v4, and shadcn/ui.
Hosted on Vercel with GitHub-integrated automatic deployments.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (base-ui) |
| Icons | lucide-react |
| SEO | Next.js native Metadata API + JSON-LD |
| Sitemap | app/sitemap.ts (built-in) |
| Hosting | Vercel |

---

## Project Structure

```
consulting-website/
├── app/
│   ├── layout.tsx          # Root layout, global SEO metadata, JSON-LD
│   ├── page.tsx            # Home page — composes all sections
│   ├── globals.css         # Global styles + brand color tokens
│   ├── sitemap.ts          # Dynamic sitemap for Google
│   └── robots.ts           # robots.txt rules
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with mobile hamburger menu
│   │   └── Footer.tsx      # Site footer
│   └── sections/
│       ├── Hero.tsx        # Hero section with CTAs
│       ├── Services.tsx    # Service offering cards
│       ├── About.tsx       # Founder bio and credentials
│       ├── Process.tsx     # 3-step "How it works"
│       ├── WhyUs.tsx       # Differentiators (dark background)
│       └── Contact.tsx     # Contact form
├── .env.local.example      # Environment variable template
└── README.md               # This file
```

---

## Local Development

1. **Clone the repo:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
   cd consulting-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your values
   ```

4. **Start the dev server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

---

## Deployment (Vercel)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project → select your repo
3. Add environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SITE_URL` = your production domain (e.g., `https://yourdomain.com`)
4. Deploy — every push to `main` will auto-deploy to production

### Custom Domain
In Vercel dashboard → Domains → Add your domain. Vercel handles SSL automatically.

---

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your production URL, e.g. `https://yourdomain.com` |
| `NEXT_PUBLIC_FORMSPREE_URL` | Formspree endpoint for contact form (see below) |

---

## Contact Form Setup

The contact form is configured to use [Formspree](https://formspree.io) (free tier: 50 submissions/month).

1. Sign up at formspree.io
2. Create a new form → copy the endpoint URL
3. Add it to `.env.local` as `NEXT_PUBLIC_FORMSPREE_URL`
4. Update `Contact.tsx` to use the env var in the fetch call (see the TODO comment)

---

## Content Updates

All content is in the section components under `components/sections/`. Look for `// TODO:` comments for placeholder values to replace:

- **Business name** — search for `[YourBrand]` across all files
- **Your name** — in `About.tsx` and `layout.tsx`
- **Email address** — in `Contact.tsx` and `Footer.tsx`
- **LinkedIn URL** — in `Contact.tsx` and `Footer.tsx`
- **Photo** — in `About.tsx` — replace the placeholder `<div>` with `<Image>` from `next/image`
- **Bio copy** — in `About.tsx`
- **Site URL** — in `.env.local` and `next-sitemap.config.js`

---

## SEO Checklist

- [x] Title and meta description set in `layout.tsx`
- [x] Open Graph and Twitter card metadata
- [x] JSON-LD structured data (ProfessionalService schema)
- [x] Sitemap at `/sitemap.xml`
- [x] robots.txt at `/robots.txt`
- [x] Semantic HTML with proper heading hierarchy
- [ ] Add your real OG image to `public/og-image.png` (1200×630px)
- [ ] Submit sitemap to Google Search Console after deploying
