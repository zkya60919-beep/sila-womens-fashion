# SILA — Premium Women's Fashion

A premium, elegant, fully responsive women's fashion brand website for **SILA**.
Built with pure **HTML5 + CSS3 + Vanilla JavaScript** — no frameworks, no build step.
Open `index.html` directly in any modern browser to run the site.

---

## ✨ Features

- **Premium editorial design** — luxury fashion styling, asymmetric magazine grids, black-and-white editorial sections
- **Dark / Light mode** — dedicated premium dark theme (not an inversion), saved to `localStorage`, animated switching
- **Arabic + English** — full RTL/LTR support with dynamic language switching (no refresh), saved to `localStorage`
- **Swiper carousel** — Customer Reviews (3/2/1 responsive) with side navigation arrows
- **Loading screen, scroll-reveal animations, floating social buttons, sticky glass navbar, mobile slide-in menu**
- **SEO (multi-page)** — semantic HTML, unique title/description/Open Graph/Twitter per page, canonical URLs, `robots.txt`, `sitemap.xml`, breadcrumb + FAQ + Organization structured data, one H1 per page
- **Accessibility** — focus states, aria labels, keyboard navigation, `prefers-reduced-motion` support

## 📁 Project structure

```
sila-website
├── index.html              # Homepage
├── 404.html                # Not-found page (noindex)
├── style.css               # Full design system (tokens, themes, RTL, responsive)
├── pages.css               # Subpage layouts (breadcrumbs, category grids, contact, FAQ, 404)
├── script.js               # i18n, theme, page metadata, schema, reviews carousel, gallery, UI
├── robots.txt              # Search-engine crawl rules (sila-womens-fashion.vercel.app)
├── sitemap.xml             # XML sitemap (sila-womens-fashion.vercel.app URLs)
├── README.md
├── collections/            # Collections hub
│   └── index.html
├── dresses/                # Dresses category
│   └── index.html
├── womens-clothing/        # Women's Clothing category
│   └── index.html
├── scarves/                # Scarves & Hijab category
│   └── index.html
├── new-collection/         # New Collection category
│   └── index.html
├── about/                  # About SILA
│   └── index.html
├── contact/                # Contact page
│   └── index.html
├── faq/                    # FAQ page (FAQPage schema emitted by script.js)
│   └── index.html
└── assets
    ├── brand/              # sila-icon.svg, sila-og-image.png (1200×630 OG image), sila-og-image.svg
    ├── icons/              # favicon.svg, favicon-16/32/48, apple-touch-icon, android-chrome-192/512
    └── images/             # local images go here (project uses CDN placeholders by default)
```

## 🖼 Replacing images

Every image path is defined in the **`images`** config object at the top of `script.js`.
Replace any URL there (or point to `assets/images/...`) and the whole site updates.
Reviews and gallery data live in data arrays directly below it — all documented with comments.

## 🌐 Social links

All social links are the **exact links provided by the client** and open in a new tab
(`target="_blank" rel="noopener noreferrer"`):

- Instagram — `https://www.instagram.com/sila_scarf.96`
- Facebook — `https://www.facebook.com/share/1JP3XEn1RE/`
- TikTok — `https://www.tiktok.com/@sill_womens_fashion`
- WhatsApp — `https://wa.me/201023681114` (store phone: `010 23681114`)
- Availability — daily, 10 AM – 11 PM (Egypt time)

## 🔍 SEO launch checklist

This site is already set up for white-hat SEO (multi-page, one H1 per page, unique metadata,
breadcrumb/FAQ/Organization schema, `robots.txt`, `sitemap.xml`). Before going live:

1. **Domain** — the code uses `https://sila-womens-fashion.vercel.app/` in canonicals, OG/Twitter URLs,
   `robots.txt` and `sitemap.xml`. If a real domain is added later, replace it everywhere.
2. **Search Console** — verify your domain in [Google Search Console](https://search.google.com/search-console).
   Add the site and submit `sitemap.xml`. If you need HTML file or DNS verification, place the
   verification meta tag / file here.
3. **Sitemap** — `sitemap.xml` lists every page. Re-submit it after changing the domain.
4. **robots.txt** — already allows all crawling; no edits needed unless you add a sitemap path change.
5. **Google Business Profile** — SILA is an **online-only** business. When you create/claim a GBP
   listing, use the website URL and social links above. Do **not** add a local "Store" landing page
   or `LocalBusiness` schema until a physical store exists.
6. **Analytics** — the site has **no** analytics/consent scripts. Add your own tag (GTM/GA4) if desired;
   remember to add a consent mechanism for visitors.
7. **404** — `404.html` exists (noindex) and links back to the homepage. Ensure your host serves it
   for unknown URLs (many static hosts need a config rule, e.g. `.vercel.json`/`netlify.toml`).

## 🧩 Customization cheatsheet

| What          | Where                                    |
| ------------- | ---------------------------------------- |
| Colors        | CSS custom properties in `:root` / `[data-theme="dark"]` |
| Fonts         | Google Fonts link in each page `<head>`  |
| Page meta     | `PAGE_META` in `script.js` (title/description per `data-page`) |
| Reviews       | `reviews` array in `script.js`           |
| Gallery       | `galleryItems` array in `script.js`      |
| Translations  | `translations` object in `script.js`     |
| Logo          | `assets/brand/sila-icon.svg`             |
| OG image      | `assets/brand/sila-og-image.png` (1200×630) |

## 🚀 Deployment

Static hosting: upload the folder and serve. No server or build step required.
Subpages are real folders with `index.html` (e.g. `/dresses/`), matching `sitemap.xml`.

## 📜 License

Showcase project — SILA brand assets and provided social links remain property of the brand.
