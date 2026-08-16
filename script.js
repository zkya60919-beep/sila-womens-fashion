/* ============================================================
   SILA — Premium Women's Fashion
   Vanilla JS: i18n · Theme · Reviews · UI · SEO helpers
   Shared across all SILA pages (data-page aware).
   ============================================================ */
(function () {
  "use strict";

  /* ------------------------------------------------------------
     1. IMAGE CONFIGURATION — single source of truth for every
        image rendered by JS. Replace any URL here to swap imagery.
     ------------------------------------------------------------ */
  const images = {
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
    tiktok: "https://www.tiktok.com/@sill_womens_fashion?_r=1&_t=ZS-92lfD122CHI",
    whatsapp: "https://wa.me/201023681114"
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
     5. PER-PAGE META (title / description keys per data-page)
     ------------------------------------------------------------ */
  const PAGE_META = {
    home: { title: "meta.title", desc: "meta.desc" },
    collections: { title: "page.collections.title", desc: "page.collections.desc" },
    dresses: { title: "page.dresses.title", desc: "page.dresses.desc" },
    "womens-clothing": { title: "page.wc.title", desc: "page.wc.desc" },
    scarves: { title: "page.scarves.title", desc: "page.scarves.desc" },
    "new-collection": { title: "page.newCollection.title", desc: "page.newCollection.desc" },
    about: { title: "page.about.title", desc: "page.about.desc" },
    contact: { title: "page.contact.title", desc: "page.contact.desc" },
    faq: { title: "page.faq.title", desc: "page.faq.desc" },
    error: { title: "page.error.title", desc: "page.error.desc" }
  };

  /* ------------------------------------------------------------
     6. TRANSLATIONS
     ------------------------------------------------------------ */
  const translations = {
    ar: {
      "meta.title": "SILA | أزياء وملابس حريمي عصرية وأنيقة في مصر",
      "meta.desc": "اكتشفي SILA للأزياء والملابس النسائية. تشكيلة أنيقة وعصرية من الفساتين والأطقم والشالات وغيرها، مع تجربة تسوق مميزة.",

      "common.theme": "تبديل المظهر", "common.close": "إغلاق", "common.instagram": "انستجرام",
      "common.viewCollection": "تصفحي التشكيلة", "common.viewAll": "تصفحي الكل", "common.backHome": "العودة إلى SILA",

      "nav.home": "الرئيسية", "nav.about": "عن SILA", "nav.reviews": "آراء العميلات", "nav.contact": "تواصلي معنا",
      "nav.collections": "التشكيلات", "nav.faq": "الأسئلة الشائعة",

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
      "footer.linksTitle": "روابط سريعة", "footer.categoriesTitle": "التصنيفات", "footer.contactTitle": "تواصلي معنا",
      "footer.devBy": "من تطوير", "footer.devOf": "· التابع لشركة Technikos",
      "footer.devPhone": "رقم الشركة المصممة للموقع:",
      "footer.instagram": "راسلينا على انستجرام", "footer.facebook": "صفحة الفيسبوك", "footer.tiktok": "تيك توك", "footer.storePhone": "رقم المحل",
      "footer.hours": "متاحون يوميًا · 10 صباحًا – 11 مساءً",
      "footer.rights": "© 2026 SILA. جميع الحقوق محفوظة.",
      "footer.made": "صُنع بحب وأناقة ✦",

      "explore.kicker": "تشكيلاتنا", "explore.title": "اكتشفي تشكيلات SILA",
      "explore.desc": "من الفساتين إلى الشالات والقطع الجديدة — تشكيلات مختارة بعناية لتناسب إطلالتك.",
      "explore.card.collections": "كل التشكيلات",
      "explore.card.collectionsDesc": "تصفحي كل فئات وأزياء SILA في مكان واحد.",
      "explore.card.dresses": "فساتين حريمي",
      "explore.card.dressesDesc": "فساتين أنيقة تناسب إطلالاتك اليومية والمناسبات.",
      "explore.card.wc": "ملابس نسائية",
      "explore.card.wcDesc": "ملابس وأطقم نسائية عصرية لكل موسم.",
      "explore.card.scarves": "شالات وحجاب",
      "explore.card.scarvesDesc": "شالات وقطع حجاب مختارة بعناية.",
      "explore.card.new": "المجموعة الجديدة",
      "explore.card.newDesc": "اكتشفي أحدث إطلالات الموسم أولاً بأول.",

      "crumb.home": "الرئيسية",

      "related.title": "تشكيلات ذات صلة",
      "page.cta.title": "تحتاجين مساعدة في الاختيار؟",
      "page.cta.desc": "تواصلي مع SILA عبر واتساب أو انستجرام وسنساعدك في اختيار القطعة المثالية.",

      "page.collections.title": "تشكيلات SILA | أزياء وملابس نسائية في مصر",
      "page.collections.desc": "اكتشفي تشكيلات SILA من الأزياء والملابس النسائية — فساتين، ملابس نسائية، شالات وإطلالات جديدة، مختارة بعناية لذوقك.",
      "page.collections.h1": "اكتشفي تشكيلات SILA",
      "page.collections.lead": "كل تشكيلة من تشكيلات SILA تُنسق حول فكرة واحدة: مساعدتك في العثور على ملابس نسائية عصرية وأنيقة تشبهكِ.",
      "page.collections.p1": "منذ إطلاقها، تقدم SILA تشكيلات أزياء نسائية تجمع بين الأناقة العصرية والخامة الجيدة، لتكون كل قطعة إضافة حقيقية لإطلالتك.",
      "page.collections.p2": "تصفحي الفئات التالية للوصول إلى الفساتين، الملابس النسائية، الشالات والمجموعة الجديدة، ولا تترددي في التواصل معنا لأي استفسار.",

      "page.dresses.title": "فساتين حريمي في مصر | SILA",
      "page.dresses.desc": "اكتشفي فساتين SILA النسائية — تصاميم عصرية وأنيقة تناسب الإطلالات اليومية والمناسبات الخاصة.",
      "page.dresses.h1": "فساتين حريمي",
      "page.dresses.lead": "تشكيلة الفساتين النسائية من SILA مصممة لتمنحك إطلالة أنيقة تجمع بين الراحة والجمال.",
      "page.dresses.p1": "نسقي فستانك مع الشالات والإكسسوارات من SILA لإطلالة متكاملة تناسب مناسباتك المختلفة.",
      "page.dresses.p2": "كل قطعة من تشكيلة SILA تُختار بعناية لتناسب ذوقك وتمنحك ثقة تنعكس على إطلالتك.",
      "page.dresses.cap1": "فستان نسائي أنيق من تشكيلة SILA",
      "page.dresses.cap2": "إطلالة فستان عصرية تليق بالمناسبات",
      "page.dresses.cap3": "فستان نسائي بتصميم مريح وأنيق",
      "page.dresses.cap4": "نسقي فستانك مع شالات SILA",

      "page.wc.title": "ملابس نسائية عصرية في مصر | SILA",
      "page.wc.desc": "اكتشفي تشكيلة SILA من الملابس النسائية العصرية — أطقم وإطلالات أنيقة مختارة بعناية لكل موسم.",
      "page.wc.h1": "ملابس نسائية عصرية",
      "page.wc.lead": "تشكيلة SILA من الملابس النسائية تجمع بين القطع العملية والتصميمات الأنيقة، لتناسب إطلالاتك اليومية وأوقاتك الخاصة.",
      "page.wc.p1": "من الملابس الحريمي العصرية إلى الأطقم الأنيقة، تقدم SILA قطعًا تساعدك على بناء إطلالة متكاملة وأنيقة.",
      "page.wc.p2": "تابعي تشكيلاتنا باستمرار لاكتشاف أحدث الموديلات والإطلالات، وتواصلي معنا لأي استفسار حول المقاسات أو التنسيق.",
      "page.wc.cap1": "إطلالة نسائية عصرية من SILA",
      "page.wc.cap2": "أطقم نسائية أنيقة من تشكيلة SILA",
      "page.wc.cap3": "ملابس نسائية عصرية تناسب إطلالتك اليومية",

      "page.scarves.title": "شالات وحجاب نسائي | SILA",
      "page.scarves.desc": "اكتشفي شالات SILA النسائية وقطع الحجاب المختارة بعناية لتمنحك إطلالة راقية ومتكاملة.",
      "page.scarves.h1": "شالات وحجاب نسائي",
      "page.scarves.lead": "الشالات وقطع الحجاب جزء أساسي من هوية SILA، وتُختار بعناية لتناسب مختلف الأذواق والإطلالات.",
      "page.scarves.p1": "نقدم شالات نسائية بتصميمات وألوان تمنحك لمسة أنيقة على إطلالتك اليومية والمناسبات.",
      "page.scarves.p2": "اكتشفي تشكيلتنا المتجددة من الشالات وقطع الحجاب، وتواصلي معنا لمزيد من التفاصيل والصور.",
      "page.scarves.cap1": "شال نسائي أنيق من SILA",
      "page.scarves.cap2": "إطلالة حجاب نسائي راقية",
      "page.scarves.cap3": "شالات نسائية بتصميمات عصرية",

      "page.newCollection.title": "المجموعة الجديدة | SILA",
      "page.newCollection.desc": "اكتشفي أحدث مجموعة من SILA — قطع أزياء نسائية جديدة بتصميمات عصرية تواكب الموسم.",
      "page.newCollection.h1": "أحدث مجموعة من SILA",
      "page.newCollection.lead": "في كل موسم، نختار لك مجموعة جديدة من القطع العصرية التي تمنحك إطلالة مختلفة وأنيقة.",
      "page.newCollection.p1": "المجموعة الجديدة تعكس روح الموسم — ألوان، قصات وتصميمات تواكب أحدث اتجاهات الأزياء النسائية.",
      "page.newCollection.p2": "تابعي صفحاتنا على وسائل التواصل أولاً بأول للاطلاع على القطع الجديدة قبل الجميع.",
      "page.newCollection.cap1": "إطلالة جديدة من مجموعة SILA",
      "page.newCollection.cap2": "قطع عصرية من المجموعة الجديدة",
      "page.newCollection.cap3": "أحدث موديلات SILA للموسم",

      "page.about.title": "عن SILA | أزياء وملابس نسائية",
      "page.about.desc": "تعرفي على قصة SILA — علامة أزياء نسائية تقدم ملابس عصرية وأنيقة مختارة بعناية في مصر.",
      "page.about.h1": "عن SILA",
      "page.about.lead": "SILA علامة أزياء نسائية بدأت من شغف بالأناقة، وتقدم ملابس عصرية مختارة بعناية لكل امرأة.",
      "page.about.p1": "نؤمن أن الأناقة ليست مجرد ما ترتدينه، بل الطريقة التي تشعرين بها. لذلك نختار كل قطعة بعناية لتمنحك إطلالة راقية تشبهك.",
      "page.about.p2": "نهتم بتجربتك من أول تواصل — بدءًا من مساعدتك في اختيار المقاس المناسب وحتى استلامك للقطعة التي اخترتها.",
      "page.about.p3": "تابعينا على انستجرام وفيسبوك وتيك توك لاكتشاف أحدث تشكيلاتنا وإطلالاتنا.",

      "page.contact.title": "تواصلي مع SILA | أزياء نسائية في مصر",
      "page.contact.desc": "تواصلي مع SILA عبر واتساب أو انستجرام أو فيسبوك أو تيك توك، وسنكون سعداء بخدمتك.",
      "page.contact.h1": "تواصلي مع SILA",
      "page.contact.lead": "يسعدنا التواصل معك — أرسلي لنا طلباتك أو استفساراتك عبر أي من القنوات التالية وسنرد عليك في أقرب وقت.",
      "page.contact.phoneTitle": "الهاتف وواتساب",
      "page.contact.socialTitle": "تابعينا وراسلينا",
      "page.contact.hoursTitle": "أوقات التواصل",
      "page.contact.hoursValue": "متاحون يوميًا · 10 صباحًا – 11 مساءً (بتوقيت مصر)",
      "page.contact.storePhone": "رقم المحل:",
      "page.contact.instagram": "انستجرام", "page.contact.facebook": "فيسبوك", "page.contact.tiktok": "تيك توك",
      "page.contact.orderNote": "أرسلي لنا طلبك أو استفسارك مباشرة عبر واتساب، وسنوافيك بكل التفاصيل والصور.",
      "page.contact.socialNote": "تابعينا على وسائل التواصل لمشاهدة أحدث القطع والإطلالات أولاً بأول.",

      "page.faq.title": "الأسئلة الشائعة | SILA",
      "page.faq.desc": "إجابات عن الأسئلة الشائعة حول SILA — أنواع الملابس النسائية، التواصل، الطلب ومتابعة التشكيلات.",
      "page.faq.h1": "الأسئلة الشائعة",
      "page.faq.lead": "جمعنا لك إجابات عن أكثر الأسئلة شيوعًا حول SILA. إن لم تجدي إجابتك، تواصلي معنا وسنكون سعداء بمساعدتك.",

      "faq.q1": "ما أنواع الملابس النسائية التي تقدمها SILA؟",
      "faq.a1": "تقدم SILA تشكيلة مختارة من الأزياء النسائية — فساتين حريمي، ملابس وأطقم نسائية، شالات وقطع حجاب، بالإضافة إلى المجموعة الجديدة كل موسم.",
      "faq.q2": "هل تقدم SILA ملابس نسائية عصرية؟",
      "faq.a2": "نعم، تركز تشكيلات SILA على الملابس النسائية العصرية والأنيقة، مع متابعة أحدث الاتجاهات في عالم الأزياء.",
      "faq.q3": "كيف يمكنني التواصل مع SILA؟",
      "faq.a3": "يمكنك التواصل معنا عبر واتساب على الرقم 010 23681114، أو عبر رسائل انستجرام، فيسبوك وتيك توك.",
      "faq.q4": "أين يمكنني متابعة أحدث تشكيلات SILA؟",
      "faq.a4": "تابعي حسابنا على انستجرام @sila_scarf.96 وصفحتنا على فيسبوك وحسابنا على تيك توك @sill_womens_fashion لمشاهدة أحدث القطع والإطلالات أولاً بأول.",
      "faq.q5": "هل يوجد محل فعلي لـ SILA؟",
      "faq.a5": "SILA حاليًا علامة أزياء نسائية تعمل عبر الإنترنت — يمكنك الطلب مباشرة عبر واتساب. سيتم الإعلان عن أي محل فعلي على هذه الصفحة فور توفره.",
      "faq.q6": "هل يمكنني طلب مقاس محدد؟",
      "faq.a6": "نعم، عند التواصل معنا عبر واتساب أخبرينا بالمقاس المطلوب وسنؤكد لك توافره قبل الطلب لضمان أفضل مقاس يناسبك.",

      "page.error.title": "الصفحة غير موجودة | SILA",
      "page.error.desc": "عذرًا، الصفحة التي تبحثين عنها غير موجودة.",
      "page.error.h1": "عذرًا، الصفحة التي تبحثين عنها غير موجودة.",
      "page.error.cta": "العودة إلى SILA",

      "alt.hero": "SILA — أناقة نسائية عصرية",
      "alt.editorial": "إطلالة نسائية أنيقة بالأبيض والأسود",
      "alt.about": "بوتيك SILA للأزياء النسائية",
      "alt.cta": "SILA للأناقة النسائية",
      "alt.explore.collections": "تشكيلات SILA من الأزياء النسائية",
      "alt.explore.dresses": "فستان نسائي أنيق من تشكيلة SILA",
      "alt.explore.wc": "ملابس نسائية عصرية من SILA",
      "alt.explore.scarves": "شال نسائي من SILA",
      "alt.explore.new": "المجموعة الجديدة من SILA للموسم",

      "seo.collections.title": "اكتشفي تشكيلات SILA للأزياء والملابس النسائية في مصر",
      "seo.collections.p1": "تقدم SILA أفضل ما في الأزياء النسائية في مصر، مع تشكيلات منسّقة بعناية تتراوح من الفساتين الأنيقة إلى الملابس النسائية العصرية والشالات وأحدث الإصدارات الموسمية. كل تشكيلة صُممت لمساعدتك على التعبير عن أسلوبك الشخصي بثقة ورقية.",
      "seo.collections.p2": "سواء كنت تبحثين عن فستان مميز لمناسبة خاصة، أو ملابس يومية متعددة الاستخدام، أو الشال المثالي لإكمال إطلالتك، فإن SILA يضم ما يناسب كل لحظة. يختار فريقنا كل قطعة لجودة قماشها وقصتها المميزة وأناقتها العصرية.",
      "seo.collections.p3": "تصفحي مجموعتنا الكاملة من التشكيلات للعثور على إطلالتك المفضلة القادمة. من <a href=\"../dresses/\">فساتيننا</a> المميزة إلى <a href=\"../scarves/\">شالاتنا وقطع الحجاب</a> الراقية، كل تشكيلة من SILA مصممة للمرأة المصرية العصرية. تابعي إصدارات <a href=\"../new-collection/\">المجموعة الجديدة</a> عبر انستجرام وواتساب.",

      "seo.dresses.title": "تشكيلة فساتين SILA النسائية في مصر",
      "seo.dresses.p1": "تشكيلة فساتين SILA النسائية هي جوهر علامتنا التجارية، وتقدم تصاميم أنيقة تجمع بين الأناقة العصرية والراحة. من الفساتين الطويلة المتدفقة إلى القصات المتوسطة المفصلة، كل قطعة مختارة لتبرز جمال المرأة في مختلف المناسبات في مصر.",
      "seo.dresses.p2": "تصنع فساتيننا من أقمشة فاخرة مختارة لنعومتها ومتانتها، مما يضمن شعورك بالجمال كما تبدين. سواء كنت تبحثين عن إطلالة أنيقة لحفل زفاف، أو فستان أنيق لليوم، أو إطلالة محتشمة للمساء، تشكيلة فساتين SILA تغطي جميع احتياجاتك.",
      "seo.dresses.p3": "نسقي فستانك المفضل مع <a href=\"../scarves/\">شال SILA</a> لإطلالة متكاملة وأنيقة. تصفحي <a href=\"../collections/\">تشكيلاتنا</a> الكاملة أو زوري <a href=\"../new-collection/\">المجموعة الجديدة</a> لاكتشاف أحدث الإضافات لنطاق فساتيننا.",

      "seo.wc.title": "ملابس وأطقم SILA النسائية في مصر",
      "seo.wc.p1": "تشكيلة الملابس النسائية من SILA مصممة للمرأة المصرية العصرية التي تقدر الأناقة والراحة معًا. تتضمن مجموعتنا قمصانًا أنيقة وأطقمًا منسقة وبنطلونات أنيقة وقطع طبقات متعددة الاستخدام يمكنك خلطها ومطابقتها لإنشاء إطلالتك المثالية.",
      "seo.wc.p2": "كل قطعة في خط الملابس النسائية لدينا مختارة بعناية لجودة مادتها وتصميمها المعاصر وقصتها المميزة. سواء كنت تستعدين للعمل أو مناسبة عادية أو تجمع خاص، تقدم SILA ملابس تتحرك مع نمط حياتك.",
      "seo.wc.p3": "أكملي إطلالتك مع <a href=\"../scarves/\">شال SILA</a> أو استرشدي بـ <a href=\"../dresses/\">فساتيننا</a> لمزيد من الإلهام. تصفعي <a href=\"../new-collection/\">المجموعة الجديدة</a> بانتظام لأحدث القطع الموسمية.",

      "seo.scarves.title": "تشكيلة شالات وحجاب SILA النسائية",
      "seo.scarves.p1": "الشالات وقطع الحجاب هي جوهر هوية SILA. تتميز مجموعتنا بتصاميم أنيقة بألوان وأقمشة متنوعة، من الشالات الفاخرة بملمس الحرير إلى قطع الحجاب الناعمة المريحة التي تنساب بجمال في ارتداء اليومية.",
      "seo.scarves.p2": "كل شال من SILA مختار ليتناسب مع تشكيلاتنا الأوسع من الأزياء، مما يسهّل التنسيق مع <a href=\"../dresses/\">فساتيننا</a> و<a href=\"../womens-clothing/\">ملابسنا النسائية</a>. سواء فضلتِ الألوان المحايدة أو الألوان الجريئة، تضيف شالاتنا لمسة راقية إلى أي إطلالة.",
      "seo.scarves.p3": "اكتشفي أحدث إضافاتنا لنطاق الشالات والحجاب في <a href=\"../new-collection/\">المجموعة الجديدة</a>. للحصول على نصائح عن التنسيق أو لرؤية الألوان والتصاميم المتاحة، تواصلي مع SILA عبر واتساب أو تابعينا على انستجرام للحصول على إلهام يومي.",

      "seo.new.title": "مجموعة SILA الجديدة للموسم 2026",
      "seo.new.p1": "مجموعة SILA الجديدة لعام 2026 تجلب طاقة جديدة إلى الأزياء النسائية في مصر. في كل موسم، يختار فريقنا مجموعة مختارة من أحدث الاتجاهات، من الألوان والقصات العصرية إلى القطع المتعددة الاستخدام التي تجدّد خزانتك بالكامل.",
      "seo.new.p2": "تتضمن إصداراتنا الجديدة نسخًا محدثة من <a href=\"../dresses/\">فساتيننا</a> الأكثر مبيعًا، و<a href=\"../womens-clothing/\">ملابس نسائية</a> معاصرة، و<a href=\"../scarves/\">شالات وقطع حجاب</a> مصنوعة بعناية. كل عنصر مختار لتلبي معايير SILA من الجودة والراحة والأناقة.",
      "seo.new.p3": "كوني أول من يكتشف كل إصدار جديد بتتابعين SILA على انستجرام وتيك توك وفيسبوك. يمكنك أيضًا مراسلتنا على واتساب للاستفسار عن الإصدارات القادمة أو المقاسات المتاحة أو لطلب قطعة من المجموعة الجديدة.",

      "seo.about.title": "قصة SILA — علامة أزياء نسائية في مصر",
      "seo.about.p1": "تأسست SILA برؤية واضحة: تقديم أفضل الأزياء العصرية والأنيقة للمرأة المصرية. من <a href=\"../dresses/\">فساتيننا</a> المنسّقة بعناية إلى <a href=\"../scarves/\">شالاتنا</a> الراقية، تعكس كل قطعة التزامنا بالجودة والأسلوب.",
      "seo.about.p2": "نؤمن أن الأناقة الحقيقية تكمن في التفاصيل — ملمس القماش الفاخر، ودقة القصّ المميز، والثقة التي تأتي من ارتداء شيء يناسبك تمامًا. لهذا السبب نختار كل عنصر في <a href=\"../collections/\">تشكيلاتنا</a> يدويًا، من الأasics الأساسية إلى أحدث إصداراتنا الموسمية.",
      "seo.about.p3": "SILA ليست مجرد علامة تجارية للأزياء، إنها مجتمع من النساء اللواتي يقدّرن الجودة والأناقة والأسلوب الأصيل. زوري <a href=\"../contact/\">صفحة التواصل</a> أو تابعينا على وسائل التواصل الاجتماعي للانضمام إلى عائلة SILA.",

      "seo.contact.title": "تواصلي مع SILA للأزياء النسائية",
      "seo.contact.p1": "سواء كان لديك سؤال حول <a href=\"../dresses/\">فساتيننا</a> أو تحتاجين مساعدة في اختيار المقاس المناسب من نطاق <a href=\"../womens-clothing/\">ملابسنا النسائية</a> أو تريدين معرفة المزيد عن <a href=\"../scarves/\">شالاتنا وقطع الحجاب</a>، فريق SILA هنا لمساعدتك.",
      "seo.contact.p2": "متاحون يوميًا من الساعة 10 صباحًا حتى 11 مساءً بتوقيت مصر عبر واتساب وانستجرام وفيسبوك وتيك توك. تواصلي معنا للحصول على نصائح أنيقة مخصصة أو الاستفسارات حول الطلبات أو إرشادات المقاسات أو أي أسئلة أخرى حول تشكيلاتنا.",
      "seo.contact.p3": "رضاكِ أولويتنا. من لحظة أول تواصلكِ معنا إلى لحظة وصول طلبكِ، نلتزم بتوفير تجربة تسوق سلسة وممتعة. تصفعي <a href=\"../faq/\">صفحة الأسئلة الشائعة</a> للحصول على إجابات سريعة أو زوري <a href=\"../about/\">صفحة عن SILA</a> لمعرفة المزيد.",

      "seo.faq.title": "كل ما تحتاجين معرفته عن SILA",
      "seo.faq.p1": "SILA هي علامة أزياء نسائية مقرها مصر، وتقدم مجموعة متجددة باستمرار من الفساتين الأنيقة والملابس النسائية العصرية والشالات وقطع الحجاب. تُحدّث تشكيلاتنا كل موسم لتقدم لكِ أحدث الاتجاهات مع الحفاظ على الجودة والأناقة التي تحدد SILA.",
      "seo.faq.p2": "التسوق مع SILA سهل — تصفعي <a href=\"../collections/\">تشكيلاتنا</a> واختاري القطع التي تحبينها وتواصلي معنا عبر واتساب لتأكيد طلبكِ. نقدم نصائح مقاس مخصصة وصورًا تفصيلية لمساعدتك على اتخاذ أفضل قرار من راحة منزلكِ.",
      "seo.faq.p3": "هل لديك سؤال غير مغطى هنا؟ زوري <a href=\"../contact/\">صفحة التواصل</a> للتواصل معنا مباشرة. تابعي SILA على انستجرام وفيسبوك وتيك توك للحصول على إلهام أنيق يومي وأحدث الإصدارات ومحتوى حصري من الكواليس."
    },

    en: {
      "meta.title": "SILA | Modern Women's Fashion & Clothing in Egypt",
      "meta.desc": "Discover SILA women's fashion in Egypt, featuring elegant dresses, outfits, scarves and carefully selected styles for every look.",

      "common.theme": "Toggle theme", "common.close": "Close", "common.instagram": "Instagram",
      "common.viewCollection": "View Collection", "common.viewAll": "View All", "common.backHome": "Back to SILA",

      "nav.home": "Home", "nav.about": "About", "nav.reviews": "Reviews", "nav.contact": "Contact",
      "nav.collections": "Collections", "nav.faq": "FAQ",

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
      "footer.linksTitle": "Quick Links", "footer.categoriesTitle": "Categories", "footer.contactTitle": "Get In Touch",
      "footer.devBy": "Developed by", "footer.devOf": "· affiliated with Technikos",
      "footer.devPhone": "Site design company phone:",
      "footer.instagram": "Message us on Instagram", "footer.facebook": "Facebook Page", "footer.tiktok": "TikTok", "footer.storePhone": "Store phone",
      "footer.hours": "Available daily · 10 AM – 11 PM",
      "footer.rights": "© 2026 SILA. All Rights Reserved.",
      "footer.made": "Crafted with elegance ✦",

      "explore.kicker": "Explore", "explore.title": "Explore SILA Collections",
      "explore.desc": "From dresses to scarves and brand-new pieces — carefully curated collections for every look.",
      "explore.card.collections": "All Collections",
      "explore.card.collectionsDesc": "Browse every SILA category in one place.",
      "explore.card.dresses": "Dresses",
      "explore.card.dressesDesc": "Elegant dresses for daily looks and special occasions.",
      "explore.card.wc": "Women's Clothing",
      "explore.card.wcDesc": "Modern women's clothing and outfits for every season.",
      "explore.card.scarves": "Scarves & Hijab",
      "explore.card.scarvesDesc": "Shawls and hijab pieces chosen with care.",
      "explore.card.new": "New Collection",
      "explore.card.newDesc": "Discover the newest season's looks first.",

      "crumb.home": "Home",

      "related.title": "Related Collections",
      "page.cta.title": "Need help choosing?",
      "page.cta.desc": "Contact SILA on WhatsApp or Instagram and we'll help you find the perfect piece.",

      "page.collections.title": "SILA Collections | Women's Fashion in Egypt",
      "page.collections.desc": "Explore SILA's women's fashion collections — dresses, women's clothing, scarves and new season looks, carefully curated.",
      "page.collections.h1": "Explore SILA Collections",
      "page.collections.lead": "Every SILA collection is curated around one idea: helping you find elegant, modern women's fashion that feels like you.",
      "page.collections.p1": "Since its launch, SILA has offered women's fashion collections that combine modern elegance and quality fabrics, so every piece is a real addition to your look.",
      "page.collections.p2": "Browse the categories below to reach dresses, women's clothing, scarves and the new collection, and feel free to contact us with any question.",

      "page.dresses.title": "Women's Dresses in Egypt | SILA",
      "page.dresses.desc": "Discover SILA's women's dresses — elegant, modern styles for daily looks and special occasions.",
      "page.dresses.h1": "Women's Dresses",
      "page.dresses.lead": "The SILA dress collection is designed to give you an elegant look that combines comfort and beauty.",
      "page.dresses.p1": "Style your dress with scarves and accessories from SILA for a complete look for any occasion.",
      "page.dresses.p2": "Every piece in the SILA collection is chosen with care to suit your taste and give you the confidence that shows in your look.",
      "page.dresses.cap1": "Elegant women's dress from the SILA collection",
      "page.dresses.cap2": "A modern dress look for special occasions",
      "page.dresses.cap3": "A comfortable and elegant women's dress",
      "page.dresses.cap4": "Style your dress with SILA scarves",

      "page.wc.title": "Modern Women's Clothing in Egypt | SILA",
      "page.wc.desc": "Discover SILA's modern women's clothing collection — elegant outfits and pieces carefully selected for every season.",
      "page.wc.h1": "Modern Women's Clothing",
      "page.wc.lead": "The SILA women's clothing collection combines practical pieces with elegant designs for everyday looks and special moments.",
      "page.wc.p1": "From modern women's clothing to elegant outfits, SILA offers pieces that help you build a complete and stylish look.",
      "page.wc.p2": "Follow our collections to discover the latest models and looks, and contact us for any question about sizes or styling.",
      "page.wc.cap1": "A modern women's look from SILA",
      "page.wc.cap2": "Elegant women's outfits from the SILA collection",
      "page.wc.cap3": "Modern women's clothing for your daily look",

      "page.scarves.title": "Women's Scarves & Hijab | SILA",
      "page.scarves.desc": "Discover SILA's women's scarves and hijab pieces, carefully selected for an elegant, complete look.",
      "page.scarves.h1": "Women's Scarves & Hijab",
      "page.scarves.lead": "Scarves and hijab pieces are part of SILA's identity, carefully chosen to suit different tastes and looks.",
      "page.scarves.p1": "We offer women's scarves in designs and colors that add an elegant touch to your daily look and special occasions.",
      "page.scarves.p2": "Discover our updated collection of scarves and hijab pieces, and contact us for more details and photos.",
      "page.scarves.cap1": "Elegant women's scarf from SILA",
      "page.scarves.cap2": "A refined women's hijab look",
      "page.scarves.cap3": "Women's scarves with modern designs",

      "page.newCollection.title": "New Collection | SILA",
      "page.newCollection.desc": "Discover the newest SILA collection — new women's fashion pieces with modern designs that follow the season.",
      "page.newCollection.h1": "SILA New Collection",
      "page.newCollection.lead": "Every season we curate a new collection of modern pieces that give you a different, elegant look.",
      "page.newCollection.p1": "The new collection reflects the spirit of the season — colors, cuts and designs that follow the latest women's fashion trends.",
      "page.newCollection.p2": "Follow our social pages to see the new pieces first.",
      "page.newCollection.cap1": "A new look from the SILA collection",
      "page.newCollection.cap2": "Modern pieces from the new collection",
      "page.newCollection.cap3": "The latest SILA models for the season",

      "page.about.title": "About SILA | Women's Fashion Brand",
      "page.about.desc": "Learn the SILA story — a women's fashion brand offering modern, elegant clothing carefully selected in Egypt.",
      "page.about.h1": "About SILA",
      "page.about.lead": "SILA is a women's fashion brand born from a passion for elegance, offering modern clothing carefully selected for every woman.",
      "page.about.p1": "We believe elegance is not just what you wear — it's how you feel. That's why we choose every piece with care so it gives you a refined look that feels like you.",
      "page.about.p2": "We care about your experience from the very first message — from helping you choose the right size to receiving the piece you selected.",
      "page.about.p3": "Follow us on Instagram, Facebook and TikTok to discover our latest collections and looks.",

      "page.contact.title": "Contact SILA | Women's Fashion in Egypt",
      "page.contact.desc": "Contact SILA via WhatsApp, Instagram, Facebook or TikTok — we'd love to help.",
      "page.contact.h1": "Contact SILA",
      "page.contact.lead": "We'd love to hear from you — send us your orders or questions through any of the channels below and we'll get back to you soon.",
      "page.contact.phoneTitle": "Phone & WhatsApp",
      "page.contact.socialTitle": "Follow & Message",
      "page.contact.hoursTitle": "Availability",
      "page.contact.hoursValue": "Available daily · 10 AM – 11 PM (Egypt time)",
      "page.contact.storePhone": "Store phone:",
      "page.contact.instagram": "Instagram", "page.contact.facebook": "Facebook", "page.contact.tiktok": "TikTok",
      "page.contact.orderNote": "Send us your order or question directly on WhatsApp and we'll share all the details and photos.",
      "page.contact.socialNote": "Follow us on social media to see the newest pieces and looks first.",

      "page.faq.title": "FAQ | SILA",
      "page.faq.desc": "Answers to common questions about SILA — types of women's clothing, contact, ordering and following collections.",
      "page.faq.h1": "Frequently Asked Questions",
      "page.faq.lead": "We've gathered answers to the most common questions about SILA. If you can't find your answer, contact us and we'll be happy to help.",

      "faq.q1": "What types of women's clothing does SILA offer?",
      "faq.a1": "SILA offers a curated selection of women's fashion — dresses, women's clothing and outfits, scarves and hijab pieces, plus a new collection every season.",
      "faq.q2": "Does SILA offer modern women's clothing?",
      "faq.a2": "Yes, SILA collections focus on modern and elegant women's clothing, keeping up with the latest trends in fashion.",
      "faq.q3": "How can I contact SILA?",
      "faq.a3": "You can reach us on WhatsApp at 010 23681114, or via Instagram, Facebook and TikTok messages.",
      "faq.q4": "Where can I follow the latest SILA collections?",
      "faq.a4": "Follow our Instagram @sila_scarf.96, our Facebook page and our TikTok @sill_womens_fashion to see the newest pieces and looks first.",
      "faq.q5": "Does SILA have a physical store?",
      "faq.a5": "SILA is currently an online women's fashion brand — you can order directly on WhatsApp. Any physical store will be announced here as soon as it's available.",
      "faq.q6": "Can I order a specific size?",
      "faq.a6": "Yes — when you contact us on WhatsApp, tell us the size you need and we'll confirm availability before ordering to make sure it's the right fit for you.",

      "page.error.title": "Page Not Found | SILA",
      "page.error.desc": "Sorry, we couldn't find that page.",
      "page.error.h1": "Sorry, we couldn't find that page.",
      "page.error.cta": "Back to SILA",

      "alt.hero": "SILA — elegant women's fashion editorial",
      "alt.editorial": "Black and white women's fashion editorial",
      "alt.about": "SILA women's fashion boutique",
      "alt.cta": "SILA women's elegance",
      "alt.explore.collections": "SILA women's fashion collections",
      "alt.explore.dresses": "Elegant women's dress from the SILA collection",
      "alt.explore.wc": "Modern women's clothing from SILA",
      "alt.explore.scarves": "Women's scarf from SILA",
      "alt.explore.new": "New SILA collection for the season",

      "seo.collections.title": "Discover SILA Women's Fashion Collections in Egypt",
      "seo.collections.p1": "SILA brings together the best of women's fashion in Egypt, offering carefully curated collections that range from elegant dresses to modern women's clothing, scarves and new season arrivals. Each collection is designed to help you express your personal style with confidence and grace.",
      "seo.collections.p2": "Whether you are looking for a statement dress for a special occasion, versatile everyday clothing, or the perfect scarf to complete your outfit, SILA has something for every moment. Our team selects each piece for its quality fabric, flattering cut and timeless elegance.",
      "seo.collections.p3": "Explore our full range of collections to find your next favorite look. From our signature <a href=\"../dresses/\">dresses</a> to our refined <a href=\"../scarves/\">scarves and hijab</a> pieces, every SILA collection is crafted with the modern Egyptian woman in mind. Stay updated with our <a href=\"../new-collection/\">new collection</a> releases by following us on Instagram and WhatsApp.",

      "seo.dresses.title": "SILA Women's Dresses Collection in Egypt",
      "seo.dresses.p1": "SILA's women's dresses collection is the heart of our brand, offering elegant designs that blend modern style with comfortable fits. From flowing maxi dresses to tailored midi styles, each piece is selected to flatter real women and real occasions across Egypt.",
      "seo.dresses.p2": "Our dresses are crafted from premium fabrics chosen for their softness and durability, ensuring you feel as good as you look. Whether you need a graceful outfit for a wedding, a chic day dress, or a modest evening look, SILA's dress collection has you covered.",
      "seo.dresses.p3": "Pair your favorite dress with a <a href=\"../scarves/\">SILA scarf</a> for a complete, polished look. Browse our full <a href=\"../collections/\">collections</a> or visit our <a href=\"../new-collection/\">new collection</a> to discover the latest additions to our dress range.",

      "seo.wc.title": "SILA Women's Clothing & Outfits in Egypt",
      "seo.wc.p1": "SILA's women's clothing collection is designed for the modern Egyptian woman who values both elegance and comfort. Our range includes stylish tops, coordinated sets, elegant pants, and versatile layering pieces that you can mix and match to create your perfect look.",
      "seo.wc.p2": "Every piece in our women's clothing line is carefully selected for its quality material, contemporary design, and flattering silhouette. Whether you are dressing for the office, a casual outing, or a special gathering, SILA offers clothing that moves with your lifestyle.",
      "seo.wc.p3": "Complete your outfit with a <a href=\"../scarves/\">SILA scarf</a> or explore our <a href=\"../dresses/\">dresses</a> for more inspiration. Check our <a href=\"../new-collection/\">new collection</a> regularly for the freshest seasonal pieces.",

      "seo.scarves.title": "SILA Women's Scarves & Hijab Collection",
      "seo.scarves.p1": "Scarves and hijab pieces are at the core of SILA's identity. Our collection features elegant designs in a variety of colors and fabrics, from luxurious silk-look scarves to soft, breathable hijab pieces that drape beautifully for everyday wear.",
      "seo.scarves.p2": "Each SILA scarf is chosen to complement our broader fashion collections, making it easy to coordinate with our <a href=\"../dresses/\">dresses</a> and <a href=\"../womens-clothing/\">women's clothing</a>. Whether you prefer neutral tones or bold statement colors, our scarves add a refined finishing touch to any look.",
      "seo.scarves.p3": "Discover the latest additions to our scarf and hijab range in the <a href=\"../new-collection/\">new collection</a>. For styling advice or to see the full range of available colors and patterns, contact SILA on WhatsApp or follow us on Instagram for daily inspiration.",

      "seo.new.title": "SILA New Season Collection 2026",
      "seo.new.p1": "The SILA new collection for 2026 brings fresh energy to women's fashion in Egypt. Each season, our team curates a selection of the latest trends, from on-trend colors and silhouettes to versatile pieces that refresh your entire wardrobe.",
      "seo.new.p2": "Our new arrivals include updated versions of best-selling <a href=\"../dresses/\">dresses</a>, contemporary <a href=\"../womens-clothing/\">women's clothing</a>, and beautifully crafted <a href=\"../scarves/\">scarves and hijab</a> pieces. Every item is chosen to ensure it meets SILA's standards of quality, comfort and elegance.",
      "seo.new.p3": "Be the first to discover each new drop by following SILA on Instagram, TikTok and Facebook. You can also message us on WhatsApp to ask about upcoming releases, available sizes, or to place an order from the latest collection.",

      "seo.about.title": "The SILA Story — Women's Fashion Brand in Egypt",
      "seo.about.p1": "SILA was founded with a clear vision: to offer women in Egypt access to elegant, modern fashion that feels personal and empowering. From our carefully curated <a href=\"../dresses/\">dresses</a> to our refined <a href=\"../scarves/\">scarves</a>, every piece reflects our commitment to quality and style.",
      "seo.about.p2": "We believe that true elegance lies in the details — the feel of a premium fabric, the precision of a flattering cut, and the confidence that comes from wearing something that truly suits you. That is why we handpick every item in our <a href=\"../collections/\">collections</a>, from classic staples to our latest seasonal arrivals.",
      "seo.about.p3": "SILA is more than a fashion brand; it is a community of women who appreciate quality, elegance and authentic style. Visit our <a href=\"../contact/\">contact page</a> or follow us on social media to become part of the SILA family.",

      "seo.contact.title": "Get in Touch With SILA",
      "seo.contact.p1": "Whether you have a question about our <a href=\"../dresses/\">dresses</a>, need help choosing the right size from our <a href=\"../womens-clothing/\">women's clothing</a> range, or want to know more about our latest <a href=\"../scarves/\">scarves and hijab</a> collection, the SILA team is here to help.",
      "seo.contact.p2": "We are available daily from 10 AM to 11 PM Egypt time via WhatsApp, Instagram, Facebook and TikTok. Reach out to us for personalized styling advice, order inquiries, size guidance, or any other questions about our collections.",
      "seo.contact.p3": "Your satisfaction is our priority. From the moment you first contact us to the moment your order arrives, we are committed to providing a seamless and pleasant shopping experience. Browse our <a href=\"../faq/\">FAQ page</a> for quick answers or visit our <a href=\"../about/\">about page</a> to learn more about SILA.",

      "seo.faq.title": "Everything You Need to Know About SILA",
      "seo.faq.p1": "SILA is a women's fashion brand based in Egypt, offering an ever-growing selection of elegant dresses, modern women's clothing, scarves and hijab pieces. Our collections are updated every season to bring you the latest trends while maintaining the quality and elegance that define SILA.",
      "seo.faq.p2": "Shopping with SILA is simple — browse our <a href=\"../collections/\">collections</a>, choose the pieces you love, and contact us on WhatsApp to place your order. We offer personalized sizing advice and detailed photos to help you make the best choice from the comfort of your home.",
      "seo.faq.p3": "Have a question that is not covered here? Visit our <a href=\"../contact/\">contact page</a> to reach us directly. Follow SILA on Instagram, Facebook and TikTok for daily style inspiration, new arrivals and exclusive behind-the-scenes content."
    }
  };

  /* ------------------------------------------------------------
     7. STATE
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
     8. HELPERS
     ------------------------------------------------------------ */
  function starSvg(size) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.26L21.8 9.3l-5 4.6 1.3 6.9L12 17.8 5.9 20.8l1.3-6.9-5-4.6 6.9-1.04z"/></svg>`;
  }

  function on(sel, evt, fn) {
    const el = $(sel);
    if (el) el.addEventListener(evt, fn);
    return el;
  }

  /* ------------------------------------------------------------
     9. RENDER — static images (homepage sections)
     ------------------------------------------------------------ */
  function setStaticImages() {
    const ed = $("#editorialImg");
    if (ed) { ed.src = images.editorial; ed.alt = t("alt.editorial"); }
    const ab = $("#aboutImg");
    if (ab) { ab.src = images.about; ab.alt = t("alt.about"); }
    const cta = $("#ctaImg");
    if (cta) { cta.src = images.cta; cta.alt = t("alt.cta"); }
  }

  /* ------------------------------------------------------------
     10. RENDER — reviews
     ------------------------------------------------------------ */
  function renderReviews() {
    const grid = $("#reviewsGrid");
    if (!grid) return;
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
     11. RENDER — gallery
     ------------------------------------------------------------ */
  function renderGallery() {
    const grid = $("#galleryGrid");
    if (!grid) return;
    const igIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>`;
    grid.innerHTML = galleryItems.map((g, i) => `
      <a class="g-item" href="${SOCIAL.instagram}" target="_blank" rel="noopener noreferrer" aria-label="${isAr() ? "إطلالة SILA على انستجرام " + (i + 1) : "SILA look on Instagram " + (i + 1)}" data-reveal style="--rd:${i % 4}">
        <img src="${g.img}" alt="${isAr() ? "إطلالة SILA " + (i + 1) : "SILA look " + (i + 1)}" loading="lazy" />
        <span class="g-igicon">${igIcon}</span>
      </a>`).join("");
  }

  /* ------------------------------------------------------------
     12. ANNOUNCEMENT MARQUEE
     ------------------------------------------------------------ */
  function renderAnnouncement() {
    const track = $("#announceTrack");
    if (!track) return;
    const phrase = t("announce.phrase");
    const sep = `<span class="marquee-sep" aria-hidden="true">✦</span>`;
    const seg = (`<span>${phrase}</span>${sep}`).repeat(4);
    track.innerHTML = seg + seg;
    track.style.animation = "none";
    void track.offsetWidth;
    track.style.animation = "";
  }

  /* ------------------------------------------------------------
     13. I18N APPLY
     ------------------------------------------------------------ */
  function applyI18n() {
    html.lang = state.lang;
    html.dir = isAr() ? "rtl" : "ltr";

    $$("[data-i18n]").forEach(el => { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-raw]").forEach(el => { el.innerHTML = t(el.getAttribute("data-i18n-raw")); });
    $$("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    $$("[data-i18n-ph]").forEach(el => { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    $$("[data-i18n-alt]").forEach(el => { el.setAttribute("alt", t(el.getAttribute("data-i18n-alt"))); });
    $$("[data-marquee]").forEach(el => { el.textContent = t("marquee." + el.getAttribute("data-marquee")); });

    // Language button shows the OTHER language
    const langBtn = $("#langBtnText");
    if (langBtn) langBtn.textContent = isAr() ? "EN" : "AR";
    const mmLang = $("#mmLangText");
    if (mmLang) mmLang.textContent = isAr() ? "EN" : "AR";

    // Per-page meta (title, description, OG, Twitter, locale)
    const page = html.getAttribute("data-page") || "home";
    const meta = PAGE_META[page] || PAGE_META.home;
    document.title = t(meta.title);
    setMeta("description", t(meta.desc));
    setMeta("og:title", t(meta.title));
    setMeta("og:description", t(meta.desc));
    setMeta("twitter:title", t(meta.title));
    setMeta("twitter:description", t(meta.desc));
    setMeta("og:locale", isAr() ? "ar_EG" : "en_US");

    // Dynamic content
    setStaticImages();
    renderAnnouncement();
    renderReviews();
    renderGallery();

    // Structured data that follows the visible language
    emitBreadcrumbSchema();
    emitFaqSchema();
  }

  function setMeta(name, content) {
    const sel = `meta[name="${name}"], meta[property="${name}"]`;
    const el = document.querySelector(sel);
    if (el) el.setAttribute("content", content);
  }

  /* ------------------------------------------------------------
     13b. STRUCTURED DATA emitters (language-aware)
     ------------------------------------------------------------ */
  function getOrCreateJsonLd(id) {
    let s = document.getElementById(id);
    if (!s) {
      s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = id;
      document.head.appendChild(s);
    }
    return s;
  }

  function emitBreadcrumbSchema() {
    const container = $("#crumbs");
    if (!container) return;
    const nodes = container.querySelectorAll("a, [aria-current='page']");
    if (!nodes.length) return;
    let items = [];
    nodes.forEach((el, i) => {
      const name = el.textContent.trim();
      if (!name) return;
      if (el.tagName === "A") {
        items.push({ "@type": "ListItem", position: i + 1, name, item: new URL(el.getAttribute("href"), document.baseURI).href });
      } else {
        items.push({ "@type": "ListItem", position: i + 1, name, item: document.baseURI });
      }
    });
    if (!items.length) return;
    const script = getOrCreateJsonLd("ld-breadcrumb");
    script.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": items });
  }

  function emitFaqSchema() {
    if ((html.getAttribute("data-page") || "") !== "faq") return;
    const qas = [];
    for (let n = 1; n <= 6; n++) {
      const q = t("faq.q" + n);
      const a = t("faq.a" + n);
      if (q.indexOf("faq.q") === 0) continue;
      qas.push({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } });
    }
    if (!qas.length) return;
    const script = getOrCreateJsonLd("ld-faq");
    script.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: qas });
  }

  /* ------------------------------------------------------------
     14. THEME
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
     15. LANGUAGE
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
     16. SWIPER CAROUSELS
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
     17. REVEAL OBSERVER
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
     18. FAQ ACCORDION (faq page only)
     ------------------------------------------------------------ */
  function initFaq() {
    const items = $$(".faq-item");
    if (!items.length) return;
    items.forEach(item => {
      const btn = item.querySelector(".faq-q");
      const ans = item.querySelector(".faq-a");
      if (!btn || !ans) return;
      ans.hidden = true;
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        items.forEach(i => {
          i.classList.remove("open");
          const a = i.querySelector(".faq-a");
          const b = i.querySelector(".faq-q");
          if (a) a.hidden = true;
          if (b) b.setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("open");
          ans.hidden = false;
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ------------------------------------------------------------
     19. SCROLL SPY + NAVBAR + ACTIVE NAV
     ------------------------------------------------------------ */
  function markActiveNav() {
    const page = html.getAttribute("data-page") || "home";
    $$(".nav-link, .mm-link").forEach(a => {
      const nav = a.getAttribute("data-nav");
      if (nav) a.classList.toggle("active", nav === page);
    });
  }

  function onScroll() {
    const nav = $("#navbar");
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 12);
    const toTop = $("#toTop");
    if (toTop) toTop.classList.toggle("visible", window.scrollY > 650);

    // Section scroll-spy only applies on the homepage (has #home/#about/#reviews).
    const homeSec = document.getElementById("home");
    if (!homeSec) return;

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
     20. MOBILE MENU
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
     21. EVENTS
     ------------------------------------------------------------ */
  function bindEvents() {
    // Theme + language (both navbar & mobile menu)
    on("#themeBtn", "click", toggleTheme);
    on("#mmThemeBtn", "click", toggleTheme);
    on("#langBtn", "click", toggleLang);
    on("#mmLangBtn", "click", toggleLang);

    // Mobile menu
    on("#hamburger", "click", () => {
      const menu = $("#mobileMenu");
      if (menu && menu.classList.contains("open")) closeMenu();
      else openMenu();
    });
    on("#menuClose", "click", closeMenu);
    on("#menuOverlay", "click", closeMenu);
    $$(".mm-link").forEach(a => a.addEventListener("click", closeMenu));
    $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => {
      if ((a.getAttribute("href") || "").startsWith("#")) closeMenu();
    }));

    // Scroll
    window.addEventListener("scroll", onScroll, { passive: true });
    on("#toTop", "click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // ESC closes overlays
    document.addEventListener("keydown", e => {
      if (e.key !== "Escape") return;
      closeMenu();
    });
  }

  /* ------------------------------------------------------------
     22. LOADER
     ------------------------------------------------------------ */
  function hideLoader() {
    const loader = $("#loader");
    if (loader) loader.classList.add("done");
    body.classList.add("loaded");
    observeReveals();
  }

  /* ------------------------------------------------------------
     23. BOOT
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
    initFaq();
    bindEvents();
    markActiveNav();
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
