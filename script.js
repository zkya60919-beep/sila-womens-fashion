/* ============================================================
   SILA — Premium Women's Fashion
   Vanilla JS: i18n · Theme · Products · Carousels · UI
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

    dresses: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    shirts: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
    sets: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80",
    scarves: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
    hijab: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80",
    pants: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    newCollection: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",

    product1: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    product2: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
    product3: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    product4: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    product5: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    product6: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    product7: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    product8: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",

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
     3. PRODUCT DATA — edit here, everywhere updates automatically
     ------------------------------------------------------------ */
  const products = [
    {
      id: 1,
      nameAr: "فستان SILA المميز",
      nameEn: "SILA Signature Dress",
      categoryAr: "فساتين", categoryEn: "Dresses",
      price: "699 EGP", oldPrice: "949 EGP",
      rating: 4.9, reviews: 86,
      badgeAr: "جديد", badgeEn: "New",
      featured: true, bestSeller: true,
      descAr: "فستان بقصّة ملكية وخامة قطنية فاخرة، صُمم ليمنحكِ حضورًا أنيقًا في كل مناسبة.",
      descEn: "A royal-cut dress in premium cotton, designed to give you an elegant presence at any occasion.",
      image: images.product1
    },
    {
      id: 2,
      nameAr: "طقم روز الأنيق",
      nameEn: "Rose Elegant Set",
      categoryAr: "أطقم", categoryEn: "Sets",
      price: "949 EGP", oldPrice: "1199 EGP",
      rating: 4.8, reviews: 64,
      badgeAr: "جديد", badgeEn: "New",
      featured: true, bestSeller: true,
      descAr: "طقم أنثوي باللون الوردي الهادئ، يجمع بين الراحة والرقي في إطلالة واحدة متكاملة.",
      descEn: "A feminine set in soft rose tones, blending comfort and sophistication in one complete look.",
      image: images.product2
    },
    {
      id: 3,
      nameAr: "شال حرير ناعم",
      nameEn: "Soft Silk Scarf",
      categoryAr: "شالات", categoryEn: "Scarves",
      price: "249 EGP", oldPrice: "349 EGP",
      rating: 4.9, reviews: 121,
      badgeAr: "جديد", badgeEn: "New",
      featured: true, bestSeller: true,
      descAr: "شال من الحرير الناعم اللمسة، يضيف لمسة من الأناقة إلى أي إطلالة صباحية أو مسائية.",
      descEn: "A feather-light silk scarf that adds a graceful touch to any morning or evening look.",
      image: images.product3
    },
    {
      id: 4,
      nameAr: "قميص كلاسيكي",
      nameEn: "Silk Classic Shirt",
      categoryAr: "قمصان", categoryEn: "Shirts",
      price: "459 EGP", oldPrice: null,
      rating: 4.7, reviews: 48,
      badgeAr: "الأكثر مبيعًا", badgeEn: "Best Seller",
      featured: true, bestSeller: true,
      descAr: "قميص بقصّة عصرية مناسب للعمل والمناسبات اليومية، يمنحكِ حضورًا راقيًا وثقة دائمة.",
      descEn: "A contemporary-cut shirt for work and everyday occasions, giving you a refined, confident presence.",
      image: images.product4
    },
    {
      id: 5,
      nameAr: "عباية عصرية",
      nameEn: "Modern Abaya",
      categoryAr: "حجاب", categoryEn: "Hijab",
      price: "1299 EGP", oldPrice: "1599 EGP",
      rating: 5.0, reviews: 39,
      badgeAr: "جديد", badgeEn: "New",
      featured: true, bestSeller: true,
      descAr: "عباءة بتصميم عصري يمزج الاحتشام بالأناقة، بتفاصيل تجعل إطلالتك مميزة دائمًا.",
      descEn: "A contemporary abaya blending modesty with elegance, with details that make your look stand out.",
      image: images.product5
    },
    {
      id: 6,
      nameAr: "إطلالة يومية",
      nameEn: "Everyday Look Set",
      categoryAr: "بناطيل", categoryEn: "Pants",
      price: "799 EGP", oldPrice: null,
      rating: 4.8, reviews: 73,
      badgeAr: "الأكثر مبيعًا", badgeEn: "Best Seller",
      featured: true, bestSeller: true,
      descAr: "طقم يومي مريح وأنيق باللحظة نفسها، خامة مرنة تتحرك معكِ طوال اليوم.",
      descEn: "A comfortable, chic everyday set in a stretch fabric that moves with you all day long.",
      image: images.product6
    },
    {
      id: 7,
      nameAr: "فستان اللؤلؤ المسائي",
      nameEn: "Pearl Evening Dress",
      categoryAr: "فساتين", categoryEn: "Dresses",
      price: "1199 EGP", oldPrice: "1449 EGP",
      rating: 4.9, reviews: 55,
      badgeAr: "الأكثر مبيعًا", badgeEn: "Best Seller",
      featured: false, bestSeller: true,
      descAr: "فستان مسائي بتفاصيل راقية تستحقينها في ليلتك المميزة.",
      descEn: "An evening dress with refined details, made for your most special nights.",
      image: images.product7
    },
    {
      id: 8,
      nameAr: "طقم بطبقات عصرية",
      nameEn: "Minimal Layered Set",
      categoryAr: "أطقم", categoryEn: "Sets",
      price: "1099 EGP", oldPrice: "1299 EGP",
      rating: 4.8, reviews: 61,
      badgeAr: "الأكثر مبيعًا", badgeEn: "Best Seller",
      featured: false, bestSeller: true,
      descAr: "طقم مينيمال بطبقات مبتكرة لإطلالة عصرية بلا مجهود.",
      descEn: "A minimal set with clever layering for an effortlessly modern look.",
      image: images.product8
    }
  ];

  /* ------------------------------------------------------------
     4. CATEGORIES DATA
     ------------------------------------------------------------ */
  const categories = [
    { key: "dresses", badgeAr: "الأكثر طلبًا", badgeEn: "Most Loved", image: images.dresses, span: "cat-dresses" },
    { key: "shirts", badgeAr: "كلاسيك", badgeEn: "Classic", image: images.shirts, span: "cat-shirts" },
    { key: "sets", badgeAr: "إطلالة كاملة", badgeEn: "Complete Look", image: images.sets, span: "cat-sets" },
    { key: "scarves", badgeAr: "لمسة ناعمة", badgeEn: "Soft Touch", image: images.scarves, span: "cat-scarves" },
    { key: "hijab", badgeAr: "أناقة محتشمة", badgeEn: "Modest Elegance", image: images.hijab, span: "cat-hijab" },
    { key: "pants", badgeAr: "يومي", badgeEn: "Everyday", image: images.pants, span: "cat-pants" },
    { key: "newcollection", badgeAr: "2026", badgeEn: "2026", image: images.newCollection, span: "cat-newcollection cat-pink-overlay" }
  ];

  const categoryNames = {
    dresses: { ar: "فساتين", en: "Dresses" },
    shirts: { ar: "قمصان", en: "Shirts" },
    sets: { ar: "أطقم", en: "Sets" },
    scarves: { ar: "شالات", en: "Scarves" },
    hijab: { ar: "حجاب", en: "Hijab" },
    pants: { ar: "بناطيل", en: "Pants" },
    newcollection: { ar: "المجموعة الجديدة", en: "New Collection" }
  };

  /* ------------------------------------------------------------
     5. REVIEWS DATA
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
     6. GALLERY DATA
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
     7. TRANSLATIONS
     ------------------------------------------------------------ */
  const translations = {
    ar: {
      "meta.title": "SILA | أزياء نسائية عصرية وأنيقة",
      "meta.desc": "اكتشفي عالم SILA للأزياء النسائية، تصميمات أنيقة وعصرية تناسب ذوقكِ وتمنحكِ إطلالة مميزة.",

      "common.search": "ابحثي", "common.theme": "تبديل المظهر", "common.close": "إغلاق",
      "common.explore": "اكتشفي المجموعة", "common.favorite": "أضيفي إلى المفضلة", "common.instagram": "انستجرام",
      "common.favAdded": "تمت الإضافة إلى المفضلة ❤",
      "common.favRemoved": "تمت الإزالة من المفضلة",

      "product.quickView": "عرض سريع",
      "product.favAria": "أضيفي إلى المفضلة",
      "product.favAriaActive": "في المفضلة",
      "search.placeholder": "ابحثي عن قطعتك المفضلة...",
      "search.empty": "لم نجد ما تبحثين عنه.",

      "nav.home": "الرئيسية", "nav.collections": "المجموعات", "nav.newCollection": "أحدث مجموعة",
      "nav.bestSellers": "الأكثر مبيعًا", "nav.about": "عن SILA", "nav.reviews": "آراء العميلات", "nav.contact": "تواصلي معنا",

      "announce.phrase": "اكتشفي أحدث تشكيلات SILA ✨",

      "hero.eyebrow": "أزياء نسائية · موسم جديد 2026",
      "hero.title": "أناقتكِ تبدأ من <span class=\"accent\">SILA</span>",
      "hero.desc": "اكتشفي قطعًا صُممت لتمنحكِ أناقة تشبهكِ.",
      "hero.explore": "اكتشفي المجموعة", "hero.contactCta": "تواصلي معنا",
      "hero.statPieces": "تصميم جديد", "hero.statRating": "تقييم العميلات", "hero.statSeason": "موسم جديد",
      "hero.chipNew": "أحدث مجموعة", "hero.scroll": "اكتشفي المزيد",

      "story.tagline": "SILA — حيث تلتقي الأناقة بالثقة",
      "story.quote1": "«الأناقة هي درع الحياة اليومية.»",
      "story.quoteOwner": "— SILA",

      "marquee.elegance": "أناقة", "marquee.femininity": "أنوثة", "marquee.confidence": "ثقة",
      "marquee.quality": "جودة", "marquee.modern": "عصرية", "marquee.luxury": "فخامة",

      "cat.kicker": "المجموعات", "cat.title": "تسوقي حسب الفئة", "cat.sub": "كل ما تحتاجينه لإطلالة متكاملة وأنيقة.",
      "cat.dresses": "فساتين", "cat.shirts": "قمصان", "cat.sets": "أطقم", "cat.scarves": "شالات",
      "cat.hijab": "حجاب", "cat.pants": "بناطيل", "cat.newCollection": "المجموعة الجديدة",

      "coll.kicker": "أحدث ما وصل", "coll.title": "أحدث مجموعة", "coll.sub": "قطع جديدة لإطلالة مختلفة كل مرة.",

      "best.kicker": "يحبها الكثيرات", "best.title": "الأكثر مبيعًا", "best.sub": "القطع المفضلة لدى عميلاتنا.",

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
      "footer.linksTitle": "روابط سريعة", "footer.collectionsTitle": "المجموعات", "footer.contactTitle": "تواصلي معنا",
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

      "common.search": "Search", "common.theme": "Toggle theme", "common.close": "Close",
      "common.explore": "Explore Collection", "common.favorite": "Add to Favorites", "common.instagram": "Instagram",
      "common.favAdded": "Added to favorites ❤",
      "common.favRemoved": "Removed from favorites",

      "product.quickView": "Quick View",
      "product.favAria": "Add to favorites",
      "product.favAriaActive": "In favorites",
      "search.placeholder": "Search for your favorite piece...",
      "search.empty": "We couldn't find what you're looking for.",

      "nav.home": "Home", "nav.collections": "Collections", "nav.newCollection": "New Collection",
      "nav.bestSellers": "Best Sellers", "nav.about": "About", "nav.reviews": "Reviews", "nav.contact": "Contact",

      "announce.phrase": "Discover the New SILA Collection ✨",

      "hero.eyebrow": "Women's Fashion · New Season 2026",
      "hero.title": "Your Elegance Starts With <span class=\"accent\">SILA</span>",
      "hero.desc": "Discover pieces designed to reflect your unique style.",
      "hero.explore": "Explore Collection", "hero.contactCta": "Contact Us",
      "hero.statPieces": "New Styles", "hero.statRating": "Customer Rating", "hero.statSeason": "New Season",
      "hero.chipNew": "New Collection", "hero.scroll": "Scroll to discover",

      "story.tagline": "SILA — where elegance meets confidence",
      "story.quote1": "“Fashion is the armour to survive everyday life.”",
      "story.quoteOwner": "— SILA",

      "marquee.elegance": "Elegance", "marquee.femininity": "Femininity", "marquee.confidence": "Confidence",
      "marquee.quality": "Quality", "marquee.modern": "Modern", "marquee.luxury": "Luxury",

      "cat.kicker": "Collections", "cat.title": "Shop by Category", "cat.sub": "Everything you need for a complete, elegant look.",
      "cat.dresses": "Dresses", "cat.shirts": "Shirts", "cat.sets": "Sets", "cat.scarves": "Scarves",
      "cat.hijab": "Hijab", "cat.pants": "Pants", "cat.newCollection": "New Collection",

      "coll.kicker": "Latest Drop", "coll.title": "New Collection", "coll.sub": "Fresh pieces for a different look every time.",

      "best.kicker": "Loved By Many", "best.title": "Best Sellers", "best.sub": "Our customers' most loved pieces.",

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
      "footer.linksTitle": "Quick Links", "footer.collectionsTitle": "Collections", "footer.contactTitle": "Get In Touch",
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
     8. STATE
     ------------------------------------------------------------ */
  const LS = { theme: "sila-theme", lang: "sila-lang", favs: "sila-favs" };

  let state = { lang: "en", theme: "light" };
  const html = document.documentElement;
  const body = document.body;

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const t = (key) => (translations[state.lang] && translations[state.lang][key]) || translations.en[key] || key;
  const isAr = () => state.lang === "ar";

  let bestSwiper = null, reviewSwiper = null;

  /* ------------------------------------------------------------
     9. HELPERS
     ------------------------------------------------------------ */
  function starSvg(size) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.26L21.8 9.3l-5 4.6 1.3 6.9L12 17.8 5.9 20.8l1.3-6.9-5-4.6 6.9-1.04z"/></svg>`;
  }

  function stars(size = 14) {
    return `<span class="stars" aria-hidden="true">${starSvg(size).repeat(5)}</span>`;
  }

  function heartSvg() {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>`;
  }

  function eyeSvg() {
    return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`;
  }

  function arrowSvg() {
    return `<svg class="cat-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
  }

  function getFavs() {
    try { return JSON.parse(localStorage.getItem(LS.favs)) || []; } catch (e) { return []; }
  }
  function saveFavs(favs) { localStorage.setItem(LS.favs, JSON.stringify(favs)); }
  function isFav(id) { return getFavs().includes(id); }

  /* ---------- Product card markup ---------- */
  function productCardHTML(p, opts = {}) {
    const badge = p.badgeAr ? ` <span class="product-badge ${opts.altBadge ? "badge-alt" : ""}">${isAr() ? p.badgeAr : p.badgeEn}</span>` : "";
    const favActive = isFav(p.id) ? " active" : "";
    const favAria = isFav(p.id) ? t("product.favAriaActive") : t("product.favAria");
    const oldPrice = p.oldPrice ? `<s class="price-old">${p.oldPrice}</s>` : "";
    const name = isAr() ? p.nameAr : p.nameEn;
    const cat = isAr() ? p.categoryAr : p.categoryEn;

    return `
      <article class="product-card" data-id="${p.id}" data-name="${(p.nameAr + " " + p.nameEn).toLowerCase()}" data-cat="${(p.categoryAr + " " + p.categoryEn).toLowerCase()}" data-price="${p.price}"${opts.noReveal ? "" : ` data-reveal style="--rd:${p.id % 3}"`}>
        <div class="product-media">
          <img class="product-img" src="${p.image}" alt="${name}" loading="lazy" />
          ${badge}
          <button class="fav-btn${favActive}" data-fav="${p.id}" aria-label="${favAria}" aria-pressed="${isFav(p.id)}">${heartSvg()}</button>
          <button class="view-btn" data-quickview="${p.id}">${eyeSvg()}<span>${t("product.quickView")}</span></button>
        </div>
        <div class="product-info">
          <span class="product-cat">${cat}</span>
          <h3 class="product-name">${name}</h3>
          <div class="product-rate">${stars()} <span class="count">${p.rating.toFixed(1)} (${p.reviews})</span></div>
          <div class="product-price-row"><span class="price">${p.price}</span>${oldPrice}</div>
        </div>
      </article>`;
  }

  /* ------------------------------------------------------------
     10. RENDER — static images
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
     11. RENDER — categories
     ------------------------------------------------------------ */
  function renderCategories() {
    const grid = $("#categoriesGrid");
    const link = t("common.explore");
    grid.innerHTML = categories.map((c, i) => {
      const name = categoryNames[c.key];
      return `
        <a href="#new-collection" class="cat-card ${c.span}" data-reveal style="--rd:${i % 3}" aria-label="${isAr() ? name.ar : name.en}">
          <span class="cat-img"><img src="${c.image}" alt="${isAr() ? name.ar : name.en}" loading="lazy" /></span>
          <span class="cat-info">
            <span class="cat-badge">${isAr() ? c.badgeAr : c.badgeEn}</span>
            <span class="cat-name">${isAr() ? name.ar : name.en}</span>
            <span class="cat-link">${link} ${arrowSvg()}</span>
          </span>
        </a>`;
    }).join("");
  }

  /* ------------------------------------------------------------
     12. RENDER — products
     ------------------------------------------------------------ */
  function renderProducts() {
    const featured = products.filter(p => p.featured);
    $("#productGrid").innerHTML = featured.map(p => productCardHTML(p)).join("");

    const bests = products.filter(p => p.bestSeller);
    $("#bestSellersGrid").innerHTML = bests.map(p => productCardHTML(p, { altBadge: true, noReveal: true })).join("");
  }

  /* ------------------------------------------------------------
     13. RENDER — reviews
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
     14. RENDER — gallery
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
     15. ANNOUNCEMENT MARQUEE
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
     16. I18N APPLY
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
    renderCategories();
    renderProducts();
    renderReviews();
    renderGallery();

    refreshFavUI();
  }

  function setMeta(name, content) {
    const sel = `meta[name="${name}"], meta[property="${name}"]`;
    const el = document.querySelector(sel);
    if (el) el.setAttribute("content", content);
  }

  /* ------------------------------------------------------------
     17. THEME
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
     18. LANGUAGE
     ------------------------------------------------------------ */
  function setLang(lang) {
    if (bestSwiper) { bestSwiper.destroy(true, true); bestSwiper = null; }
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
     19. SWIPER CAROUSELS
     ------------------------------------------------------------ */
  function initBestSwiper() {
    const el = $(".best-swiper");
    if (!el) return null;
    if (!window.Swiper) {
      el.classList.add("swiper-fallback");
      return null;
    }
    el.classList.remove("swiper-fallback");
    return new window.Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      speed: 700,
      dir: isAr() ? "rtl" : "ltr",
      navigation: { prevEl: "#bestPrev", nextEl: "#bestNext" },
      pagination: { el: el.querySelector(".swiper-pagination"), clickable: true },
      breakpoints: {
        560: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
        1280: { slidesPerView: 4 }
      }
    });
  }

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
    if (bestSwiper) { bestSwiper.destroy(true, true); bestSwiper = null; }
    if (reviewSwiper) { reviewSwiper.destroy(true, true); reviewSwiper = null; }
    bestSwiper = initBestSwiper();
    reviewSwiper = initReviewSwiper();
  }

  /* ------------------------------------------------------------
     20. FAVORITES
     ------------------------------------------------------------ */
  function refreshFavUI() {
    $$(".fav-btn").forEach(btn => {
      const id = Number(btn.dataset.fav);
      const active = isFav(id);
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active);
      btn.setAttribute("aria-label", active ? t("product.favAriaActive") : t("product.favAria"));
    });
    const qvFav = $("#qvFav");
    if (qvFav && qvFav.dataset.favId) {
      qvFav.classList.toggle("active", isFav(Number(qvFav.dataset.favId)));
    }
  }

  function toggleFav(id) {
    let favs = getFavs();
    const idx = favs.indexOf(id);
    let added = false;
    if (idx > -1) favs.splice(idx, 1);
    else { favs.push(id); added = true; }
    saveFavs(favs);
    refreshFavUI();
    toast(added ? t("common.favAdded") : t("common.favRemoved"));
  }

  /* ------------------------------------------------------------
     21. TOAST
     ------------------------------------------------------------ */
  let toastTimer = null;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
  }

  /* ------------------------------------------------------------
     22. QUICK VIEW MODAL
     ------------------------------------------------------------ */
  function openQuickView(id) {
    const p = products.find(x => x.id === Number(id));
    if (!p) return;
    const modal = $("#quickView");
    $("#qvImage").src = p.image;
    $("#qvImage").alt = isAr() ? p.nameAr : p.nameEn;
    $("#qvCategory").textContent = isAr() ? p.categoryAr : p.categoryEn;
    $("#qvName").textContent = isAr() ? p.nameAr : p.nameEn;
    $("#qvRating").innerHTML = `${stars()} <span class="count">${p.rating.toFixed(1)} (${p.reviews})</span>`;
    $("#qvPrice").textContent = p.price;
    $("#qvDesc").textContent = isAr() ? p.descAr : p.descEn;
    $("#qvFav").dataset.favId = p.id;
    refreshFavUI();
    modal.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add("open")));
    body.classList.add("no-scroll");
    modal.querySelector(".modal-close").focus();
  }

  function closeModal() {
    const modal = $("#quickView");
    modal.classList.remove("open");
    setTimeout(() => { modal.hidden = true; body.classList.remove("no-scroll"); }, 350);
  }

  /* ------------------------------------------------------------
     23. SEARCH
     ------------------------------------------------------------ */
  function openSearch() {
    const overlay = $("#searchOverlay");
    overlay.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add("open")));
    body.classList.add("no-scroll");
    $("#searchInput").value = "";
    $("#searchResults").innerHTML = "";
    $("#searchEmpty").hidden = true;
    setTimeout(() => $("#searchInput").focus(), 80);
  }

  function closeSearch() {
    const overlay = $("#searchOverlay");
    overlay.classList.remove("open");
    setTimeout(() => { overlay.hidden = true; body.classList.remove("no-scroll"); }, 350);
  }

  function runSearch(query) {
    const q = query.trim().toLowerCase();
    const resultsBox = $("#searchResults");
    const empty = $("#searchEmpty");
    if (!q) { resultsBox.innerHTML = ""; empty.hidden = true; return; }
    const matches = products.filter(p => {
      const hay = `${p.nameAr} ${p.nameEn} ${p.categoryAr} ${p.categoryEn} ${p.price}`.toLowerCase();
      return hay.includes(q);
    });
    empty.hidden = matches.length > 0;
    resultsBox.innerHTML = matches.map(p => productCardHTML(p, { altBadge: true })).join("");
    resultsBox.querySelectorAll("[data-fav]").forEach(btn => { btn.classList.toggle("active", isFav(Number(btn.dataset.fav))); });
    observeReveals();
  }

  /* ------------------------------------------------------------
     24. REVEAL OBSERVER
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
     25. SCROLL SPY + NAVBAR
     ------------------------------------------------------------ */
  function onScroll() {
    const nav = $("#navbar");
    nav.classList.toggle("scrolled", window.scrollY > 12);
    $("#toTop").classList.toggle("visible", window.scrollY > 650);

    const sections = ["home", "categories", "new-collection", "best-sellers", "about", "reviews"];
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
     26. MOBILE MENU
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
     27. EVENTS
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

    // Search
    $("#searchBtn").addEventListener("click", openSearch);
    $("#searchClose").addEventListener("click", closeSearch);
    $("#searchOverlay").addEventListener("click", e => { if (e.target.closest(".search-box") === null && e.target !== $("#searchInput")) closeSearch(); });
    $("#searchForm").addEventListener("submit", e => e.preventDefault());
    $("#searchInput").addEventListener("input", e => runSearch(e.target.value));

    // Quick view modal
    document.addEventListener("click", e => {
      const qv = e.target.closest("[data-quickview]");
      if (qv) openQuickView(qv.dataset.quickview);
      const fav = e.target.closest("[data-fav]");
      if (fav) toggleFav(Number(fav.dataset.fav));
      if (e.target.closest("[data-close-modal]")) closeModal();
    });
    $("#qvFav").addEventListener("click", () => { const fid = $("#qvFav").dataset.favId; if (fid !== undefined && fid !== "") toggleFav(Number(fid)); });

    // ESC closes overlays
    document.addEventListener("keydown", e => {
      if (e.key !== "Escape") return;
      closeMenu();
      closeModal();
      closeSearch();
    });
  }

  /* ------------------------------------------------------------
     28. LOADER
     ------------------------------------------------------------ */
  function hideLoader() {
    const loader = $("#loader");
    if (loader) loader.classList.add("done");
    body.classList.add("loaded");
    observeReveals();
  }

  /* ------------------------------------------------------------
     29. BOOT
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