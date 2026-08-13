# SILA — Premium Women's Fashion

A premium, elegant, fully responsive women's fashion brand website for **SILA**.
Built with pure **HTML5 + CSS3 + Vanilla JavaScript** — no frameworks, no build step.
Open `index.html` directly in any modern browser to run the site.

---

## ✨ Features

- **Premium editorial design** — luxury fashion styling, asymmetric magazine grids, black-and-white editorial sections
- **Dark / Light mode** — dedicated premium dark theme (not an inversion), saved to `localStorage`, animated switching
- **Arabic + English** — full RTL/LTR support with dynamic language switching (no refresh), saved to `localStorage`
- **8 products** in a single JavaScript array — easily editable
- **Swiper carousels** — Best Sellers (4/3/2/1 responsive) and Customer Reviews
- **Quick View modal** — works in both languages and both themes
- **Favorites** — animated heart, persisted in `localStorage` (frontend showcase only)
- **Instant search overlay** — filters products by name/category using JavaScript
- **Loading screen, scroll-reveal animations, floating social buttons, sticky glass navbar, mobile slide-in menu**
- **SEO** — semantic HTML, Open Graph, Twitter Card, alt text, Organization structured data
- **Accessibility** — focus states, aria labels, keyboard navigation, `prefers-reduced-motion` support

## 📁 Project structure

```
sila-website
├── index.html          # Single-page markup
├── style.css           # Full design system (tokens, themes, RTL, responsive)
├── script.js           # i18n, theme, products, carousels, search, favorites
├── README.md
└── assets
    ├── brand/          # sila-icon.svg (replaceable with an official logo/PNG)
    ├── icons/          # favicon.svg
    └── images/         # local images go here (project uses CDN placeholders by default)
```

## 🖼 Replacing images

Every image path is defined in the **`images`** config object at the top of `script.js`.
Replace any URL there (or point to `assets/images/...`) and the whole site updates.
Products, categories, reviews and gallery data live in data arrays directly below it — all documented with comments.

## 🌐 Social links

All social links are the **exact links provided by the client** and open in a new tab
(`target="_blank" rel="noopener noreferrer"`):

- Instagram — `https://www.instagram.com/sila_scarf.96`
- Facebook — `https://www.facebook.com/share/1JP3XEn1RE/`
- TikTok — `https://www.tiktok.com/@sill_womens_fashion`

## 🧩 Customization cheatsheet

| What        | Where                                  |
| ----------- | -------------------------------------- |
| Colors      | CSS custom properties in `:root` / `[data-theme="dark"]` |
| Fonts       | Google Fonts link in `index.html` head  |
| Products    | `products` array in `script.js`         |
| Categories  | `categories` array in `script.js`       |
| Reviews     | `reviews` array in `script.js`          |
| Gallery     | `galleryItems` array in `script.js`     |
| Translations| `translations` object in `script.js`    |
| Logo        | `assets/brand/sila-icon.svg`            |

## 🚀 Deployment

Static hosting: upload the folder and serve. No server or build step required.
Update the canonical URL and search metadata in `index.html` with your real domain.

## 📜 License

Showcase project — SILA brand assets and provided social links remain property of the brand.