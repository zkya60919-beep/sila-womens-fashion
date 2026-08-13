/* ============================================================
   SILA — Premium Women's Fashion
   Vanilla JS: i18n · Theme · Reviews · UI
   ============================================================ */
(function () {
  "use strict";

  /* ------------------------------------------------------------
     1. IMAGE CONFIGURATION — single source of truth for every image.
        Replace any URL here to swap the whole site's imagery.
     ------------------------------------------------------------ */
  const images = {
    hero: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
    editorial: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1100&q=80",
    about: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1100&q=80",
    cta: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",

    gallery1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80",
    gallery2: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=700&q=80",
    gallery3: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=700&q=80",
    gallery4: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80",
    gallery5: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=700&q=80",
    gallery6: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=700&q=80",
    gallery7: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=700&q=80",
    gallery8: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80"
  };

  /* ------------------------------------------------------------
     2. SOCIAL LINKS (exact links provided by the client)
     ------------------------------------------------------------ */
  const SOCIAL = {
    instagram: "https://www.instagram.com/sila_scarf.96?igsh=anVldXRsYnl3MHF2&utm_source=qr",
    facebook: "https://www.facebook.com/share/1JP3XEn1RE/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@sill_womens_fashion?_r=1&_t=ZS-92lfD122CHI"
  };

  /* ------------------------------------------------------------
     3. REVIEWS DATA
     ------------------------------------------------------------ */
  const reviews = [
    {
      nameAr: "سارة م.", nameEn: "Sara M.", avatar: "S", alt: false,
      textAr: "ماشاءالله التعامل معاكم جميل والاسعار احسن من بره ربنا يزيدكم يارب وبالتوفيق 😍",
      textEn: "Ma Sha' Allah, lovely dealing with you and better prices than anywhere else. May God increase you, and best of luck 😍"
    },
    {
      nameAr: "نور ع.", nameEn: "Nour A.", avatar: "N", alt: false,
      textAr: "التعامل جميل اوي وماتريال تحفة واسعار جميلة عن اي حد حقيقي بالتوفيق والتميز ديما ♥️",
      textEn: "The service is truly great, amazing quality and better prices than anyone, honestly. Wishing you constant success and excellence ♥️"
    },
    {
      nameAr: "مريم ك.", nameEn: "Mariam K.", avatar: "M", alt: false,
      textAr: "بجد اسلوبهم وتعاملهم حلو والماتيريال تحفه اووي😍😍😍❤️",
      textEn: "Honestly their style and service is so lovely, and the material is gorgeous 😍😍😍❤️"
    },
    {
      nameAr: "هنا س.", nameEn: "Hana S.", avatar: "H", alt: true,
      textAr: "اتعاملت معاكم اون لاين بجد القائمين على العمل غاية فى الذوق والاحترام فى التعامل والمقاسات مظبوطة والخامة ممتازة.",
      textEn: "I dealt with you online and honestly the team is extremely polite and respectful, the sizing is accurate and the fabric is excellent."
    },
    {
      nameAr: "علا ي.", nameEn: "Ola Y.", avatar: "O", alt: false,
      textAr: "استلمت الاوردر والماتيريال ممتازة والتعامل محترم جدا.",
      textEn: "I received my order, the material is excellent and they dealt with me very respectfully."
    },
    {
      nameAr: "ضحى ر.", nameEn: "Duha R.", avatar: "D", alt: true,
      textAr: "شغلكم جميل اوي ومميز والمهم الخامة تحفة.",
      textEn: "Your work is so beautiful and unique, and most importantly the fabric is gorgeous."
    }
  ];

  /* ------------------------------------------------------------
     4. GALLERY DATA
     ------------------------------------------------------------ */
  const galleryItems = [
    { img: images.gallery1 },
    { img: images.gallery2 },
    { img: images.gallery3 },
    { img: images.gallery4 },
    { img: images.gallery5 },
    { img: images.gallery6 },
    { img: images.gallery7 },
    { img: images.gallery8 }
  ];

  /* ------------------------------------------------------------
     5. TRANSLATIONS
     ------------------------------------------------------------ */
  const translations = {
    ar: {
      "meta.title": "SILA | أزياء نسائية عصرية وأنيقة",
      "meta.desc": "اكتشفي عالم SILA للأزياء النسائية، تصميمات أنيقة وعصرية تناسب ذوقكِ وتمنحكِ إطلالة مميزة.",

      "common.theme": "تبديل المظهر", "common.close": "إغلاق", "common.instagram": "انستجرام",

      "nav.home": "الرئيسية", "nav.about": "عن SILA", "nav.reviews": "آراء العميلات", "nav.contact": "تواصلي معنا",

      "announce.phrase": "اكتشفي أحدث تشكيلات SILA ✨",

      "hero.eyebrow": "أزياء نسائية · موسم جديد 2026",
      "hero.title": "أناقتكِ تبدأ من <span class=\"accent\">SILA</span>",
      "hero.desc": "اكتشفي قطعًا صُممت لتمنحكِ أناقة تشبهكِ.",
      "hero.explore": "اكتشفي SILA", "hero.contactCta": "تواصلي معنا",
      "hero.statPieces": "تصميم جديد", "hero.statRating": "تقييم العميلات", "hero.statSeason": "موسم جديد",
      "hero.chipNew": "موسم جديد 2026", "hero.scroll": "اكتشفي المزيد",

      "story.tagline": "SILA — حيث تلتقي الأناقة بالثقة",
      "story.quote1": "«الأناقة هي درع الحياة اليومية.»",
      "story.quoteOwner": "— SILA",

      "marquee.elegance": "أناقة", "marquee.femininity": "أنوثة", "marquee.confidence": "ثقة",
      "marquee.quality": "جودة", "marquee.modern": "عصرية", "marquee.luxury": "فخامة",

      "edit.kicker": "إبداعية", "edit.line1": "الأناقة ليست مجرد ما ترتدينه...",
      "edit.line2": "بل الطريقة التي تشعرين بها عندما ترتدينه.",
      "edit.desc": "كل قطعة من SILA هي لمسة راقية — صُممت لتتحرك معكِ وتشعركِ بالجمال الذي تستحقينه.",

      "about.kicker": "قصتنا", "about.title": "عن SILA",
      "about.desc": "SILA هي مساحة تجمع بين الأناقة العصرية واللمسة الأنثوية، لنقدم لكِ قطعًا مختارة بعناية تناسب أسلوبكِ وتمنحكِ ثقة مختلفة.",
      "about.point1": "تشكيلات منسّقة في كل موسم",
      "about.point2": "أقمشة فاخرة ومريحة",
      "about.point3": "مقاسات تناسب كل امرأة",

      "why.kicker": "لمسة SILA المميزة", "why.title": "لماذا SILA؟",
      "why.quality": "جودة مميزة", "why.qualityDesc": "خامات مختارة بعناية.",
      "why.designs": "تصميمات أنيقة", "why.designsDesc": "تصميمات عصرية تناسب ذوقكِ.",
      "why.selected": "اختيار دقيق", "why.selectedDesc": "كل قطعة يتم اختيارها بعناية.",
      "why.experience": "تجربة مميزة", "why.experienceDesc": "نهتم بتجربتكِ من أول تواصل.",

      "rev.kicker": "آراء العميلات", "rev.title": "عميلات SILA يتحدثن عنا", "rev.customer": "عميلة SILA",

      "social.kicker": "كوني معنا", "social.title": "تابعينا", "social.desc": "تابعينا واكتشفي أحدث إطلالاتنا",

      "gallery.kicker": "انستجرام", "gallery.title": "عالم SILA", "gallery.follow": "تابعي @sila_scarf.96",

      "cta.title": "مستعدة تكتشفي إطلالتك الجديدة؟",
      "cta.desc": "أناقتكِ تستحق أن تُلاحَظ.",
      "cta.contact": "تواصلي مع SILA", "cta.follow": "تابعينا على Instagram",

      "footer.desc": "لأن أناقتكِ تستحق أن تكون مختلفة.",
      "footer.linksTitle": "روابط سريعة", "footer.contactTitle": "تواصلي معنا",
      "footer.devBy": "من تطوير", "footer.devOf": "· التابع لشركة Technikos",
      "footer.instagram": "راسلينا على انستجرام", "footer.facebook": "صفحة الفيسبوك", "footer.tiktok": "تيك توك",
      "footer.hours": "متاحون يوميًا · 10 صباحًا – 11 مساءً",
      "footer.rights": "© 2026 SILA. جميع الحقوق محفوظة.",
      "footer.made": "صُنع بحب وأناقة ✦",

      "alt.hero": "SILA — أناقة نسائية عصرية",
      "alt.editorial": "إطلالة نسائية أنيقة بالأبيض والأسود",
      "alt.about": "بوتيك SILA للأزياء النسائية",
      "alt.cta": "SILA للأناقة النسائية"
    },

    en: {
      "meta.title": "SILA | Women's Fashion & Elegant Style",
      "meta.desc": "Discover SILA women's fashion — elegant, modern pieces designed to reflect your unique style.",

      "common.theme": "Toggle theme", "common.close": "Close", "common.instagram": "Instagram",

      "nav.home": "Home", "nav.about": "About", "nav.reviews": "Reviews", "nav.contact": "Contact",

      "announce.phrase": "Discover the New SILA Collection ✨",

      "hero.eyebrow": "Women's Fashion · New Season 2026",
      "hero.title": "Your Elegance Starts With <span class=\"accent\">SILA</span>",
      "hero.desc": "Discover pieces designed to reflect your unique style.",
      "hero.explore": "Discover SILA", "hero.contactCta": "Contact Us",
      "hero.statPieces": "New Styles", "hero.statRating": "Customer Rating", "hero.statSeason": "New Season",
      "hero.chipNew": "New Season 2026", "hero.scroll": "Scroll to discover",

      "story.tagline": "SILA — where elegance meets confidence",
      "story.quote1": "“Fashion is the armour to survive everyday life.”",
      "story.quoteOwner": "— SILA",

      "marquee.elegance": "Elegance", "marquee.femininity": "Femininity", "marquee.confidence": "Confidence",
      "marquee.quality": "Quality", "marquee.modern": "Modern", "marquee.luxury": "Luxury",

      "edit.kicker": "Editorial", "edit.line1": "Elegance is not just what you wear…",
      "edit.line2": "It's how you feel when you wear it.",
      "edit.desc": "Every SILA piece is a quiet statement — designed to move with you, and feel as beautiful as it looks.",

      "about.kicker": "Our Story", "about.title": "About SILA",
      "about.desc": "SILA brings together modern elegance and feminine style, offering carefully selected pieces designed to make you feel confident and uniquely you.",
      "about.point1": "Curated collections every season",
      "about.point2": "Premium, comfortable fabrics",
      "about.point3": "Sizes made for every woman",

      "why.kicker": "The SILA Difference", "why.title": "Why SILA?",
      "why.quality": "Premium Quality", "why.qualityDesc": "Carefully chosen fabrics that feel as good as they look.",
      "why.designs": "Elegant Designs", "why.designsDesc": "Modern silhouettes that match your taste and your life.",
      "why.selected": "Carefully Selected", "why.selectedDesc": "Every piece is chosen with care, detail by detail.",
      "why.experience": "Customer Experience", "why.experienceDesc": "We care about your experience from the very first message.",

      "rev.kicker": "Testimonials", "rev.title": "What Our Customers Say", "rev.customer": "SILA Customer",

      "social.kicker": "Stay Connected", "social.title": "Follow SILA", "social.desc": "Follow SILA and discover our latest looks.",

      "gallery.kicker": "Instagram", "gallery.title": "SILA World", "gallery.follow": "Follow @sila_scarf.96",

      "cta.title": "Ready to discover your next favorite look?",
      "cta.desc": "Your elegance deserves to be noticed.",
      "cta.contact": "Contact SILA", "cta.follow": "Follow on Instagram",

      "footer.desc": "Because your style deserves to be different.",
      "footer.linksTitle": "Quick Links", "footer.contactTitle": "Get In Touch",
      "footer.devBy": "Developed by", "footer.devOf": "· affiliated with Technikos",
      "footer.instagram": "Message us on Instagram", "footer.facebook": "Facebook Page", "footer.tiktok": "TikTok",
      "footer.hours": "Available daily · 10 AM – 11 PM",
      "footer.rights": "© 2026 SILA. All Rights Reserved.",
      "footer.made": "Crafted with elegance ✦",

      "alt.hero": "SILA — elegant women's fashion editorial",
      "alt.editorial": "Black and white women's fashion editorial",
      "alt.about": "SILA women's fashion boutique",
      "alt.cta": "SILA women's elegance"
    }
  };

  /* ------------------------------------------------------------
     6. STATE
     ------------------------------------------------------------ */
  const LS = { theme: "sila-theme", lang: "sila-lang" };

  let state = { lang: "en", theme: "light" };
  const html = document.documentElement;
  const body = document.body;

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const t = (key) => (translations[state.lang] && translations[state.lang][key]) || translations.en[key] || key;
  const isAr = () => state.lang === "ar";

  let reviewSwiper = null;

  /* ------------------------------------------------------------
     7. HELPERS
     ------------------------------------------------------------ */
  function starSvg(size) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.26L21.8 9.3l-5 4.6 1.3 6.9L12 17.8 5.9 20.8l1.3-6.9-5-4.6 6.9-1.04z"/></svg>`;
  }

  /* ------------------------------------------------------------
     8. RENDER — static images
     ------------------------------------------------------------ */
  function setStaticImages() {
    $("#heroImg").src = images.hero;
    $("#editorialImg").src = images.editorial;
    $("#aboutImg").src = images.about;
    $("#ctaImg").src = images.cta;
    $("#heroImg").alt = t("alt.hero");
    $("#editorialImg").alt = t("alt.editorial");
    $("#aboutImg").alt = t("alt.about");
  }

  /* ------------------------------------------------------------
     9. RENDER — reviews
     ------------------------------------------------------------ */
  function renderReviews() {
    const grid = $("#reviewsGrid");
    grid.innerHTML = reviews.map((r, i) => {
      const name = isAr() ? r.nameAr : r.nameEn;
      return `
        <div class="swiper-slide">
          <div class="review-card" data-reveal style="--rd:${i % 3}">
            <div class="review-head">
              <span class="quote-mark"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 4v8c0 4.4 2.4 7.2 6.5 8.2l.8-2C8 17.4 7 15.6 7 13H11V4H4zm10 0v8c0 4.4 2.4 7.2 6.5 8.2l.8-2C18 17.4 17 15.6 17 13h4V4h-7z"/></svg></span>
              <span class="review-stars" aria-label="5 out of 5">${starSvg(15).repeat(5)}</span>
            </div>
            <p class="review-text">${isAr() ? r.textAr : r.textEn}</p>
            <div class="review-author">
              <span class="review-avatar${r.alt ? " alt" : ""}" aria-hidden="true">${r.avatar}</span>
              <span><strong>${name}</strong><span>${t("rev.customer")}</span></span>
            </div>
          </div>
        </div>`;
    }).join("");
  }

  /* ------------------------------------------------------------
     10. RENDER — gallery
     ------------------------------------------------------------ */
  function renderGallery() {
    const grid = $("#galleryGrid");
    const igIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>`;
    grid.innerHTML = galleryItems.map((g, i) => `
      <a class="g-item" href="${SOCIAL.instagram}" target="_blank" rel="noopener noreferrer" aria-label="${isAr() ? "إطلالة SILA على انستجرام " + (i + 1) : "SILA look on Instagram " + (i + 1)}" data-reveal style="--rd:${i % 4}">
        <img src="${g.img}" alt="${isAr() ? "إطلالة SILA " + (i + 1) : "SILA look " + (i + 1)}" loading="lazy" />
        <span class="g-igicon">${igIcon}</span>
      </a>`).join("");
  }

  /* ------------------------------------------------------------
     11. ANNOUNCEMENT MARQUEE
     ------------------------------------------------------------ */
  function renderAnnouncement() {
    const track = $("#announceTrack");
    const phrase = t("announce.phrase");
    const sep = `<span class="marquee-sep" aria-hidden="true">✦</span>`;
    const seg = (`<span>${phrase}</span>${sep}`).repeat(4);
    track.innerHTML = seg + seg;
    track.style.animation = "none";
    void track.offsetWidth;
    track.style.animation = "";
  }

  /* ------------------------------------------------------------
     12. I18N APPLY
     ------------------------------------------------------------ */
  function applyI18n() {
    html.lang = state.lang;
    html.dir = isAr() ? "rtl" : "ltr";

    $$("[data-i18n]").forEach(el => { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-raw]").forEach(el => { el.innerHTML = t(el.getAttribute("data-i18n-raw")); });
    $$("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    $$("[data-i18n-ph]").forEach(el => { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    $$("[data-marquee]").forEach(el => { el.textContent = t("marquee." + el.getAttribute("data-marquee")); });

    // Language button shows the OTHER language
    $("#langBtnText").textContent = isAr() ? "EN" : "AR";
    $("#mmLangText").textContent = isAr() ? "EN" : "AR";

    // Meta
    document.title = t("meta.title");
    setMeta("description", t("meta.desc"));
    setMeta("og:title", t("meta.title"));
    setMeta("og:description", t("meta.desc"));
    setMeta("twitter:title", t("meta.title"));
    setMeta("twitter:description", t("meta.desc"));
    setMeta("og:locale", isAr() ? "ar_EG" : "en_US");

    // Dynamic content
    setStaticImages();
    renderAnnouncement();
    renderReviews();
    renderGallery();
  }

  function setMeta(name, content) {
    const sel = `meta[name="${name}"], meta[property="${name}"]`;
    const el = document.querySelector(sel);
    if (el) el.setAttribute("content", content);
  }

  /* ------------------------------------------------------------
     13. THEME
     ------------------------------------------------------------ */
  function applyTheme() {
    html.setAttribute("data-theme", state.theme);
    const m = $('meta[name="theme-color"]');
    if (m) m.setAttribute("content", state.theme === "dark" ? "#0B0B0B" : "#FFF9FA");
  }
  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem(LS.theme, state.theme);
    applyTheme();
  }

  /* ------------------------------------------------------------
     14. LANGUAGE
     ------------------------------------------------------------ */
  function setLang(lang) {
    if (reviewSwiper) { reviewSwiper.destroy(true, true); reviewSwiper = null; }
    state.lang = lang;
    localStorage.setItem(LS.lang, lang);
    applyI18n();
    initCarousels();
    observeReveals();
  }
  function toggleLang() {
    setLang(isAr() ? "en" : "ar");
  }

  /* ------------------------------------------------------------
     15. SWIPER CAROUSELS
     ------------------------------------------------------------ */
  function initReviewSwiper() {
    const el = $(".reviews-swiper");
    if (!el) return null;
    if (!window.Swiper) {
      el.classList.add("swiper-fallback");
      return null;
    }
    el.classList.remove("swiper-fallback");
    return new window.Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 18,
      loop: true,
      speed: 700,
      dir: isAr() ? "rtl" : "ltr",
      navigation: { prevEl: "#reviewPrev", nextEl: "#reviewNext" },
      pagination: { el: el.querySelector(".swiper-pagination"), clickable: true },
      breakpoints: { 768: { slidesPerView: 2 }, 1180: { slidesPerView: 3 } }
    });
  }

  function initCarousels() {
    if (reviewSwiper) { reviewSwiper.destroy(true, true); reviewSwiper = null; }
    reviewSwiper = initReviewSwiper();
  }

  /* ------------------------------------------------------------
     16. REVEAL OBSERVER
     ------------------------------------------------------------ */
  let revealObserver = null;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      $$("[data-reveal]").forEach(el => el.classList.add("revealed"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            revealObserver.unobserve(e.target);
          }
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });
    }
    $$("[data-reveal]:not(.revealed)").forEach(el => revealObserver.observe(el));
  }

  /* ------------------------------------------------------------
     17. SCROLL SPY + NAVBAR
     ------------------------------------------------------------ */
  function onScroll() {
    const nav = $("#navbar");
    nav.classList.toggle("scrolled", window.scrollY > 12);
    $("#toTop").classList.toggle("visible", window.scrollY > 650);

    const sections = ["home", "about", "reviews"];
    const pos = window.scrollY + window.innerHeight * 0.35;
    let current = "home";
    sections.forEach(id => {
      const sec = document.getElementById(id);
      if (sec && sec.offsetTop <= pos) current = id;
    });
    $$(".nav-link").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
    $$(".mm-link").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  }

  /* ------------------------------------------------------------
     18. MOBILE MENU
     ------------------------------------------------------------ */
  function openMenu() {
    $("#mobileMenu").classList.add("open");
    $("#mobileMenu").setAttribute("aria-hidden", "false");
    $("#menuOverlay").hidden = false;
    requestAnimationFrame(() => $("#menuOverlay").classList.add("visible"));
    $("#hamburger").classList.add("active");
    $("#hamburger").setAttribute("aria-expanded", "true");
    body.classList.add("no-scroll");
  }
  function closeMenu() {
    $("#mobileMenu").classList.remove("open");
    $("#mobileMenu").setAttribute("aria-hidden", "true");
    $("#menuOverlay").classList.remove("visible");
    setTimeout(() => { $("#menuOverlay").hidden = true; }, 350);
    $("#hamburger").classList.remove("active");
    $("#hamburger").setAttribute("aria-expanded", "false");
    body.classList.remove("no-scroll");
  }

  /* ------------------------------------------------------------
     19. EVENTS
     ------------------------------------------------------------ */
  function bindEvents() {
    // Theme + language (both navbar & mobile menu)
    $("#themeBtn").addEventListener("click", toggleTheme);
    $("#mmThemeBtn").addEventListener("click", toggleTheme);
    $("#langBtn").addEventListener("click", toggleLang);
    $("#mmLangBtn").addEventListener("click", toggleLang);

    // Mobile menu
    $("#hamburger").addEventListener("click", () => {
      $("#mobileMenu").classList.contains("open") ? closeMenu() : openMenu();
    });
    $("#menuClose").addEventListener("click", closeMenu);
    $("#menuOverlay").addEventListener("click", closeMenu);
    $$(".mm-link").forEach(a => a.addEventListener("click", closeMenu));
    $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => { if (a.getAttribute("href", "").startsWith("#")) closeMenu(); }));

    // Scroll
    window.addEventListener("scroll", onScroll, { passive: true });
    $("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // ESC closes overlays
    document.addEventListener("keydown", e => {
      if (e.key !== "Escape") return;
      closeMenu();
    });
  }

  /* ------------------------------------------------------------
     20. LOADER
     ------------------------------------------------------------ */
  function hideLoader() {
    const loader = $("#loader");
    if (loader) loader.classList.add("done");
    body.classList.add("loaded");
    observeReveals();
  }

  /* ------------------------------------------------------------
     21. BOOT
     ------------------------------------------------------------ */
  function init() {
    // Theme from localStorage or OS preference
    let savedTheme = null;
    try { savedTheme = localStorage.getItem(LS.theme); } catch (e) {}
    state.theme = savedTheme === "dark" ? "dark"
      : savedTheme === "light" ? "light"
      : (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    // Language
    let savedLang = null;
    try { savedLang = localStorage.getItem(LS.lang); } catch (e) {}
    state.lang = savedLang === "ar" ? "ar"
      : savedLang === "en" ? "en"
      : ((navigator.language || "").toLowerCase().startsWith("ar") ? "ar" : "en");

    applyTheme();
    applyI18n();
    initCarousels();
    bindEvents();
    onScroll();

    // Hide loader once everything is painted (fast), fallback timer
    if (document.readyState === "complete") hideLoader();
    else window.addEventListener("load", hideLoader);
    setTimeout(hideLoader, 1600);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();