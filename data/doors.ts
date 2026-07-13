import type { Bilingual } from "./content";

export type DoorMaterialId = "wood" | "pvc" | "wpc";

export type DoorImageGroupId =
  | "hero-doors-design"
  | "wood-directions"
  | "pvc-directions"
  | "wpc-directions"
  | "doors-previous-works"
  | "doors-process";

export type DoorImageUsageType =
  | "design"
  | "offers"
  | "previous-works"
  | "process";

export type DoorImageProcessingSource =
  | "processed"
  | "css-frame-only"
  | "price-cleaned"
  | "original-public";

export type DoorGalleryItem = {
  id: string;
  src: string;
  alt: Bilingual;
  title: Bilingual;
  caption: Bilingual;
  groupId: DoorImageGroupId;
  usageType: DoorImageUsageType;
  processingSource: DoorImageProcessingSource;
  objectFit: "cover" | "contain";
  objectPosition: string;
  sourcePath: string;
  originalSrc?: string;
  cropDecision?: string;
};

export type DoorSubcategory = {
  id: DoorMaterialId;
  anchorId: string;
  navLabel: Bilingual;
  title: Bilingual;
  cardSummary: Bilingual;
  summary: Bilingual;
  description: Bilingual;
  benefits: Bilingual[];
  bestFor: Bilingual[];
  servicePoints: Bilingual[];
  directionGallery: DoorGalleryItem[];
  visualLabel: Bilingual;
  ctaLabel: Bilingual;
};

export type DoorComparisonRow = {
  label: Bilingual;
  wood: Bilingual;
  pvc: Bilingual;
  wpc: Bilingual;
};

export type DoorProcessStep = {
  title: Bilingual;
  text: Bilingual;
};

function doorImage(input: DoorGalleryItem): DoorGalleryItem {
  return input;
}

export const doorsPageContent = {
  hero: {
    eyebrow: {
      en: "Door systems with a composed architectural finish",
      ar: "أنظمة أبواب تمنح المشروع حضوراً معمارياً متزناً",
    },
    title: {
      en: "Door systems shaped around the space, the finish, and the way it is used.",
      ar: "أنظمة أبواب تتشكل حول المساحة والتشطيب وطريقة الاستخدام",
    },
    text: {
      en: "Wood, PVC, and WPC options selected around daily use, visual character, supply, and installation.",
      ar: "خيارات خشبية وPVC وWPC تُختار حول الاستخدام اليومي والحضور البصري والتوريد والتركيب.",
    },
    primaryCta: {
      en: "Shape Your Door Package",
      ar: "شكّل باقة الأبواب لمشروعك",
    },
    secondaryCta: {
      en: "Compare the Door Options",
      ar: "قارن خيارات الأبواب",
    },
    trustNotes: [
      {
        en: "Door type selection",
        ar: "اختيار النوع",
      },
      {
        en: "Supply and installation",
        ar: "توريد وتركيب",
      },
      {
        en: "Frames, locks, and accessories",
        ar: "إطارات وأقفال وإكسسوارات",
      },
    ],
  },
  materials: {
    eyebrow: {
      en: "Door Types",
      ar: "أنواع الأبواب",
    },
    title: {
      en: "Choose the door type that fits the space and daily rhythm",
      ar: "اختر نوع الباب الذي ينسجم مع المساحة وروتين الاستخدام",
    },
    text: {
      en: "Compare the three options to narrow the material, finish, and installation direction before requesting a quote.",
      ar: "قارن الخيارات الثلاثة لتحديد الخامة والتشطيب واتجاه التوريد والتركيب قبل طلب عرض السعر.",
    },
  },
  previousWorks: {
    eyebrow: {
      en: "Executed Door Works",
      ar: "أعمال أبواب منفذة",
    },
    title: {
      en: "Selected Door Works",
      ar: "نماذج مختارة من أعمال الأبواب",
    },
    text: {
      en: "A focused selection of door work showing finish quality, proportion, and installation detail.",
      ar: "مجموعة مركزة من أعمال الأبواب توضح جودة التشطيب والنسب ودقة التركيب.",
    },
    label: {
      en: "Selected executed door works that show finish quality and installation details.",
      ar: "نماذج من أعمال أبواب منفذة بتشطيبات هادئة وتفاصيل تركيب دقيقة.",
    },
  },
  comparison: {
    eyebrow: {
      en: "Quick comparison",
      ar: "مقارنة سريعة",
    },
    title: {
      en: "A simple way to narrow the choice",
      ar: "طريقة بسيطة لاختيار الأنسب",
    },
    text: {
      en: "The right door type depends on the space, moisture exposure, daily use, and finish choice.",
      ar: "يعتمد اختيار النوع على المساحة والتعرض للرطوبة وطبيعة الاستخدام والتشطيب المناسب.",
    },
  },
  process: {
    eyebrow: {
      en: "Execution Stages",
      ar: "مراحل التنفيذ",
    },
    title: {
      en: "From site measurements to final handover",
      ar: "من رفع المقاسات حتى التسليم النهائي",
    },
    text: {
      en: "Capital Oasis manages measurements, door selection, preparation, installation, and final review as one coordinated door package.",
      ar: "تدير كابيتال واسي المقاسات وتحديد الباب المناسب والتجهيز والتركيب والمراجعة النهائية ضمن باقة أبواب متكاملة.",
    },
  },
  videos: {
    eyebrow: {
      en: "From Workshop to Installation",
      ar: "من التصنيع إلى التركيب",
    },
    title: {
      en: "See the finish from preparation to installation",
      ar: "شاهد التشطيب من التجهيز حتى التركيب",
    },
    text: {
      en: "Watch selected moments from door preparation, manufacturing, and installed works to better understand finish quality before requesting your quote.",
      ar: "شاهد جانبًا من مراحل تجهيز وتصنيع الأبواب، ثم معاينة الأعمال المنفذة بعد التركيب، لتكوين صورة أوضح عن مستوى التشطيب قبل طلبك.",
    },
    trustPoints: [
      {
        en: "Prepared to match project measurements",
        ar: "تصنيع وتجهيز حسب المقاسات",
      },
      {
        en: "Supplied and installed with detail-focused execution",
        ar: "توريد وتركيب باهتمام بالتفاصيل",
      },
      {
        en: "Finished for daily residential and commercial use",
        ar: "تشطيبات مناسبة للاستخدام اليومي",
      },
    ],
    featuredLabel: {
      en: "Featured process film",
      ar: "المشهد الرئيسي",
    },
    secondaryLabel: {
      en: "Installed result",
      ar: "النتيجة بعد التنفيذ",
    },
  },
  cta: {
    eyebrow: {
      en: "Start Your Door Brief",
      ar: "ابدأ موجز مشروع الأبواب",
    },
    title: {
      en: "Share the measurements, quantity, and door direction you prefer.",
      ar: "شاركنا المقاسات والكمية واتجاه الأبواب الأقرب لمشروعك.",
    },
    text: {
      en: "We help you define a door package suited to homes, villas, offices, and commercial projects.",
      ar: "نساعدك في تحديد باقة أبواب مناسبة للمنازل والفلل والمكاتب والمشاريع التجارية.",
    },
    nhcBadge: {
      en: "Approved for Supply & Installation with NHC",
      ar: "معتمد للتوريد والتركيب لدى NHC",
    },
  },
} as const;

export const woodMaterialGallery: DoorGalleryItem[] = [
  doorImage({
    id: "wood-residential-direction",
    src: "/images/capital-oasis/website-photos/doors/design/brand-visual-residential-door-01.jpeg",
    alt: {
      en: "Warm residential wood door design reference",
      ar: "تصميم باب خشبي دافئ للمنازل",
    },
    title: {
      en: "Warm Residential Tone",
      ar: "طابع سكني دافئ",
    },
    caption: {
      en: "A warm wood option for villas, bedrooms, and refined interior spaces.",
      ar: "خيار خشبي دافئ مناسب للفلل وغرف النوم والمساحات الداخلية الراقية.",
    },
    groupId: "wood-directions",
    usageType: "design",
    processingSource: "css-frame-only",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath:
      "/images/capital-oasis/ads-non-priced/brand-visual-residential-door-01.jpeg",
  }),
  doorImage({
    id: "wood-package-coordination",
    src: "/images/capital-oasis/website-photos/doors/design/brand-visual-door-components-01.png",
    alt: {
      en: "Door panel, frame, and lock selection reference",
      ar: "اختيار لوح الباب والإطار والقفل",
    },
    title: {
      en: "Frame and Hardware Planning",
      ar: "تخطيط الإطار والإكسسوارات",
    },
    caption: {
      en: "Useful for aligning the panel, frame, lock, and handle as one package.",
      ar: "مفيد لتنسيق الضلفة والإطار والقفل والمقبض ضمن باقة واحدة.",
    },
    groupId: "wood-directions",
    usageType: "design",
    processingSource: "css-frame-only",
    objectFit: "contain",
    objectPosition: "center",
    sourcePath:
      "/images/capital-oasis/ads-non-priced/brand-visual-door-components-01.png",
  }),
  doorImage({
    id: "wood-statement-style",
    src: "/images/capital-oasis/website-photos/doors/design/brand-visual-door-style-01.jpeg",
    alt: {
      en: "Decorative door style reference with a stronger design presence",
      ar: "مرجع لتصميم باب زخرفي بحضور بصري أقوى",
    },
    title: {
      en: "Decorative Entrance Style",
      ar: "مدخل زخرفي",
    },
    caption: {
      en: "A stronger design statement for clients who want the door to lead the room.",
      ar: "خيار أوضح للعملاء الذين يريدون للباب حضوراً قيادياً داخل المساحة.",
    },
    groupId: "wood-directions",
    usageType: "design",
    processingSource: "css-frame-only",
    objectFit: "contain",
    objectPosition: "center",
    sourcePath:
      "/images/capital-oasis/ads-non-priced/brand-visual-door-style-01.jpeg",
  }),
];

export const pvcMaterialGallery: DoorGalleryItem[] = [
  doorImage({
    id: "pvc-waterproof-reference",
    src: "/images/capital-oasis/website-photos/doors/design/brand-visual-waterproof-doors-01.jpeg",
    alt: {
      en: "PVC moisture-resistant door type reference with clean panel styles",
      ar: "نوع PVC مقاوم للرطوبة مع أشكال ألواح نظيفة",
    },
    title: {
      en: "Moisture-Ready PVC",
      ar: "PVC مناسب للرطوبة",
    },
    caption: {
      en: "Suitable for bathrooms, service areas, and spaces that need easier upkeep.",
      ar: "مناسب للحمامات والمناطق الخدمية والمساحات التي تحتاج عناية أسهل.",
    },
    groupId: "pvc-directions",
    usageType: "design",
    processingSource: "css-frame-only",
    objectFit: "contain",
    objectPosition: "center",
    sourcePath:
      "/images/capital-oasis/ads-non-priced/brand-visual-waterproof-doors-01.jpeg",
  }),
  doorImage({
    id: "pvc-finish-options-reference",
    src: "/images/capital-oasis/website-photos/doors/design/brand-visual-wpc-pvc-doors-01.png",
    alt: {
      en: "PVC and WPC door finish options with hardware and color samples",
      ar: "خيارات تشطيب أبواب PVC وWPC مع عينات ألوان وإكسسوارات",
    },
    title: {
      en: "Finish and Color Selection",
      ar: "اختيار التشطيب واللون",
    },
    caption: {
      en: "Helps compare colors, locks, and finishing choices before supply.",
      ar: "يساعد على مقارنة الألوان والأقفال وطبيعة التشطيب قبل التوريد.",
    },
    groupId: "pvc-directions",
    usageType: "design",
    processingSource: "css-frame-only",
    objectFit: "contain",
    objectPosition: "center",
    sourcePath:
      "/images/capital-oasis/ads-non-priced/brand-visual-wpc-pvc-doors-01.png",
  }),
  doorImage({
    id: "pvc-package-planning",
    src: "/images/capital-oasis/website-photos/doors/design/brand-visual-door-components-01.png",
    alt: {
      en: "PVC door package reference with frame, panel, and lock components",
      ar: "باقة باب PVC مع الإطار واللوح والقفل",
    },
    title: {
      en: "Complete PVC Package",
      ar: "باقة PVC متكاملة",
    },
    caption: {
      en: "A clean planning reference for the frame, leaf, hardware, and installation.",
      ar: "مرجع واضح لتخطيط الإطار والضلفة والإكسسوارات والتركيب.",
    },
    groupId: "pvc-directions",
    usageType: "design",
    processingSource: "css-frame-only",
    objectFit: "contain",
    objectPosition: "center",
    sourcePath:
      "/images/capital-oasis/ads-non-priced/brand-visual-door-components-01.png",
  }),
];

export const wpcMaterialGallery: DoorGalleryItem[] = [
  doorImage({
    id: "wpc-warranty-reference",
    src: "/images/capital-oasis/website-photos/doors/design/brand-visual-door-warranty-01.jpeg",
    alt: {
      en: "WPC door type reference with a durable molded panel style",
      ar: "نوع WPC بباب متين وتصميم لوح بارز",
    },
    title: {
      en: "Durable Daily-Use Type",
      ar: "نوع متين للاستخدام اليومي",
    },
    caption: {
      en: "A practical option for repeated use with a warmer visual finish.",
      ar: "خيار عملي للاستخدام المتكرر مع تشطيب بصري أكثر دفئاً.",
    },
    groupId: "wpc-directions",
    usageType: "design",
    processingSource: "css-frame-only",
    objectFit: "contain",
    objectPosition: "center",
    sourcePath:
      "/images/capital-oasis/ads-non-priced/brand-visual-door-warranty-01.jpeg",
  }),
  doorImage({
    id: "wpc-style-reference",
    src: "/images/capital-oasis/website-photos/doors/design/brand-visual-door-style-01.jpeg",
    alt: {
      en: "Modern decorative door style reference for WPC doors",
      ar: "تصميم زخرفي عصري لأبواب WPC",
    },
    title: {
      en: "Modern WPC Style",
      ar: "تصميم WPC عصري",
    },
    caption: {
      en: "Suitable when the client wants a decorative face with practical performance.",
      ar: "مناسب عندما يريد العميل واجهة زخرفية مع أداء عملي.",
    },
    groupId: "wpc-directions",
    usageType: "design",
    processingSource: "css-frame-only",
    objectFit: "contain",
    objectPosition: "center",
    sourcePath:
      "/images/capital-oasis/ads-non-priced/brand-visual-door-style-01.jpeg",
  }),
  doorImage({
    id: "wpc-finish-options-reference",
    src: "/images/capital-oasis/website-photos/doors/design/brand-visual-wpc-pvc-doors-01.png",
    alt: {
      en: "WPC and PVC finish selection reference with door samples",
      ar: "اختيار تشطيبات WPC وPVC مع عينات أبواب",
    },
    title: {
      en: "Finish Selection",
      ar: "اختيار التشطيب",
    },
    caption: {
      en: "A quick way to compare finish options before confirming quantity and installation.",
      ar: "طريقة سريعة لمقارنة خيارات التشطيب قبل اعتماد الكمية والتركيب.",
    },
    groupId: "wpc-directions",
    usageType: "design",
    processingSource: "css-frame-only",
    objectFit: "contain",
    objectPosition: "center",
    sourcePath:
      "/images/capital-oasis/ads-non-priced/brand-visual-wpc-pvc-doors-01.png",
  }),
];

export const heroDoorDesignItems: DoorGalleryItem[] = [
  doorImage({
    id: "hero-door-saudi-villa-wood",
    src: "/images/capital-oasis/website-photos/doors/external-selection/wood-saudi-doors-03.webp",
    alt: {
      en: "Premium wood villa door with warm vertical slat detailing",
      ar: "باب خشبي راقٍ للفلل بتفاصيل رأسية دافئة",
    },
    groupId: "hero-doors-design",
    title: {
      en: "Premium Villa Wood",
      ar: "باب خشبي راقٍ للفلل",
    },
    caption: {
      en: "A warm lead image for clients comparing premium wood doors for villas and refined modern interiors.",
      ar: "لقطة رئيسية دافئة لمن يقارنون الأبواب الخشبية الراقية المناسبة للفلل والمساحات الحديثة.",
    },
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/wood-saudi-doors-03.webp",
  }),
  doorImage({
    id: "hero-door-saudi-pvc-choice",
    src: "/images/capital-oasis/website-photos/doors/external-selection/pvc-saudi-doors-01.webp",
    alt: {
      en: "Clean white practical door for daily-use interiors and offices",
      ar: "باب أبيض عملي ونظيف للمساحات اليومية والمكاتب",
    },
    groupId: "hero-doors-design",
    title: {
      en: "Clean PVC Direction",
      ar: "اتجاه PVC عملي",
    },
    caption: {
      en: "Practical office, service, and daily-use door selections in a bright setting.",
      ar: "أبواب عملية مضيئة مناسبة للمكاتب والمساحات الخدمية والاستخدام اليومي.",
    },
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/pvc-saudi-doors-01.webp",
  }),
  doorImage({
    id: "hero-door-saudi-wpc-business",
    src: "/images/capital-oasis/website-photos/doors/external-selection/wpc-saudi-doors-05.webp",
    alt: {
      en: "Modern composite-style business door with a warm wood-look finish",
      ar: "باب بطابع WPC حديث بتشطيب دافئ يناسب المكاتب والمداخل التجارية",
    },
    groupId: "hero-doors-design",
    title: {
      en: "Modern WPC Direction",
      ar: "اتجاه WPC حديث",
    },
    caption: {
      en: "Modern WPC/composite doors suited to offices, shops, and refined entry points.",
      ar: "أبواب WPC حديثة أنيقة مناسبة للمكاتب والمحلات والمداخل الراقية.",
    },
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/wpc-saudi-doors-05.webp",
  }),
];

export const pvcOfferGallery: DoorGalleryItem[] = [
  doorImage({
    id: "pvc-offer-wpc-pvc-direction",
    src: "/images/capital-oasis/website-photos/doors/offers/door-offer-03-website-offer.webp",
    alt: {
      en: "WPC and PVC door type reference with warranty and durability icons",
      ar: "مرجع أنواع أبواب WPC وPVC مع رموز الضمان والمتانة",
    },
    title: {
      en: "PVC / WPC Type Reference",
      ar: "أنواع PVC / WPC",
    },
    caption: {
      en: "A clean reference for practical, moisture-aware door type discussions.",
      ar: "مرجع مناسب لمناقشة الأنواع العملية والمناسبة للرطوبة.",
    },
    groupId: "pvc-directions",
    usageType: "offers",
    processingSource: "price-cleaned",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/offers/door-offer-03-website-offer.webp",
    originalSrc: "/images/capital-oasis/doors/offers/door-offer-03.jpg",
    cropDecision: "Promotional reference retained because prices are hidden and wording is suitable.",
  }),
  doorImage({
    id: "pvc-offer-factory-to-home",
    src: "/images/capital-oasis/website-photos/doors/offers/priced-ad-05-website-offer.webp",
    alt: {
      en: "PVC and WPC door type reference from factory to home",
      ar: "مرجع أنواع أبواب PVC وWPC من المصنع إلى المنزل",
    },
    title: {
      en: "Factory-to-Home Reference",
      ar: "مرجع من المصنع إلى المنزل",
    },
    caption: {
      en: "A consultation reference for supply and installation packages.",
      ar: "مرجع استشاري لباقات التوريد والتركيب.",
    },
    groupId: "pvc-directions",
    usageType: "offers",
    processingSource: "price-cleaned",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/offers/priced-ad-05-website-offer.webp",
    originalSrc: "/images/capital-oasis/priced-offers/priced-ad-05.png",
    cropDecision: "Price-cleaned offer visual with useful customer-facing benefit copy.",
  }),
];

export const wpcOfferGallery: DoorGalleryItem[] = [
  doorImage({
    id: "wpc-offer-warranty-direction",
    src: "/images/capital-oasis/website-photos/doors/offers/priced-ad-09-website-offer.webp",
    alt: {
      en: "WPC door type reference with warranty and durability benefits",
      ar: "مرجع نوع باب WPC مع مزايا الضمان والمتانة",
    },
    title: {
      en: "Warranty Reference",
      ar: "الضمان والمتانة",
    },
    caption: {
      en: "A WPC reference for warranty and long-life door type conversations.",
      ar: "مرجع WPC لمناقشة الضمان والنوع طويل العمر.",
    },
    groupId: "wpc-directions",
    usageType: "offers",
    processingSource: "price-cleaned",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/offers/priced-ad-09-website-offer.webp",
    originalSrc: "/images/capital-oasis/priced-offers/priced-ad-09.jpeg",
    cropDecision: "Price-cleaned WPC promotional reference with no live price shown.",
  }),
  doorImage({
    id: "wpc-offer-performance-direction",
    src: "/images/capital-oasis/website-photos/doors/offers/priced-ad-10-website-offer.webp",
    alt: {
      en: "WPC door type reference with performance and handle details",
      ar: "مرجع نوع باب WPC مع تفاصيل الأداء والمقبض",
    },
    title: {
      en: "Performance Detail Reference",
      ar: "مرجع تفاصيل الأداء",
    },
    caption: {
      en: "A reference for discussing finish, profile, handle, and frame details.",
      ar: "مرجع لمناقشة التشطيب والبروفايل والمقبض والإطار.",
    },
    groupId: "wpc-directions",
    usageType: "offers",
    processingSource: "price-cleaned",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/offers/priced-ad-10-website-offer.webp",
    originalSrc: "/images/capital-oasis/priced-offers/priced-ad-10.jpg",
    cropDecision: "Price-cleaned WPC reference retained for material-performance rail.",
  }),
];

export const woodDirectionGallery: DoorGalleryItem[] = [
  doorImage({
    id: "wood-saudi-selection-01",
    src: "/images/capital-oasis/website-photos/doors/external-selection/wood-saudi-doors-01.webp",
    alt: {
      en: "Warm framed wood door suited to villa interiors and refined home entries",
      ar: "باب خشبي بإطار دافئ مناسب للفلل والمداخل الداخلية الراقية",
    },
    title: {
      en: "Warm Villa Entry",
      ar: "مدخل خشبي دافئ",
    },
    caption: {
      en: "Useful for villa and home projects that want the door and frame to read as one warm premium package.",
      ar: "مناسب لمشاريع الفلل والمنازل التي تريد ظهور الباب والإطار كباقة خشبية راقية واحدة.",
    },
    groupId: "wood-directions",
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/wood-saudi-doors-01.webp",
  }),
  doorImage({
    id: "wood-saudi-selection-02",
    src: "/images/capital-oasis/website-photos/doors/external-selection/wood-saudi-doors-02.webp",
    alt: {
      en: "Double wood doors with a calm office-ready modern rhythm",
      ar: "بابان خشبيان بإيقاع هادئ مناسب للمكاتب والمساحات الإدارية",
    },
    title: {
      en: "Office Suite Pair",
      ar: "زوج أبواب للمكاتب",
    },
    caption: {
      en: "A strong comparison visual for executive rooms, office suites, and repeated interior wood doors.",
      ar: "مرجع قوي للغرف الإدارية والأجنحة المكتبية وتكرار الأبواب الخشبية داخل المشروع.",
    },
    groupId: "wood-directions",
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/wood-saudi-doors-02.webp",
  }),
  doorImage({
    id: "wood-saudi-selection-03",
    src: "/images/capital-oasis/website-photos/doors/external-selection/wood-saudi-doors-03.webp",
    alt: {
      en: "Tall premium wood door with vertical slat detailing for upscale villa projects",
      ar: "باب خشبي طويل بتفاصيل رأسية راقية لمشاريع الفلل الحديثة",
    },
    title: {
      en: "Vertical Slat Statement",
      ar: "حضور رأسي راقٍ",
    },
    caption: {
      en: "A premium lead option for Saudi-modern villas and entrances that want the door to feel architectural.",
      ar: "اتجاه رئيسي راقٍ للفلل السعودية الحديثة والمداخل التي تريد للباب حضوراً معمارياً واضحاً.",
    },
    groupId: "wood-directions",
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/wood-saudi-doors-03.webp",
  }),
  doorImage({
    id: "wood-saudi-selection-04",
    src: "/images/capital-oasis/website-photos/doors/external-selection/wood-saudi-doors-04.webp",
    alt: {
      en: "Slim premium wood door suited to shops, offices, and hospitality entries",
      ar: "باب خشبي أنيق مناسب للمكاتب والمحلات والمداخل الراقية",
    },
    title: {
      en: "Boutique Door Accent",
      ar: "لمسة باب راقية",
    },
    caption: {
      en: "Useful for boutique shops, office entries, and premium interiors that want a restrained warm wood tone.",
      ar: "مناسب للمحلات الراقية والمكاتب والمداخل الداخلية التي تريد درجة خشبية دافئة ومهذبة.",
    },
    groupId: "wood-directions",
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/wood-saudi-doors-04.webp",
  }),
  doorImage({
    id: "wood-saudi-selection-05",
    src: "/images/capital-oasis/website-photos/doors/external-selection/wood-saudi-doors-05.webp",
    alt: {
      en: "Rich brown double wood doors with clear hardware and hospitality-ready detail",
      ar: "بابان خشبيان بدرجة بنية غنية وتفاصيل مناسبة للمكاتب والضيافة",
    },
    title: {
      en: "Hospitality Wood Pair",
      ar: "زوج أبواب للضيافة",
    },
    caption: {
      en: "A polished option for hospitality, company corridors, and projects that want a richer double-door wood rhythm.",
      ar: "خيار أنيق للممرات الإدارية ومساحات الضيافة والمشاريع التي تريد إيقاعاً خشبياً مزدوجاً أكثر ثراءً.",
    },
    groupId: "wood-directions",
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/wood-saudi-doors-05.webp",
  }),
];

export const pvcDirectionGallery: DoorGalleryItem[] = [
  doorImage({
    id: "pvc-saudi-selection-01",
    src: "/images/capital-oasis/website-photos/doors/external-selection/pvc-saudi-doors-01.webp",
    alt: {
      en: "Clean white PVC-style door for daily-use interiors and office rooms",
      ar: "باب أبيض عملي مناسب للمساحات اليومية وغرف المكاتب",
    },
    title: {
      en: "Practical White Door",
      ar: "باب أبيض عملي",
    },
    caption: {
      en: "A neat starting point for practical office, villa service, and everyday interior door selections.",
      ar: "بداية مرتبة لخيارات الأبواب العملية المناسبة للمكاتب والمساحات الخدمية والاستخدام اليومي.",
    },
    groupId: "pvc-directions",
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/pvc-saudi-doors-01.webp",
  }),
  doorImage({
    id: "pvc-saudi-selection-02",
    src: "/images/capital-oasis/website-photos/doors/external-selection/pvc-saudi-doors-02.webp",
    alt: {
      en: "Bright open PVC-style door for clean service areas and supporting rooms",
      ar: "باب فاتح ونظيف مناسب للمناطق الخدمية والغرف المساندة",
    },
    title: {
      en: "Bright Service Entry",
      ar: "مدخل خدمي مشرق",
    },
    caption: {
      en: "Useful when the project needs a cleaner brighter door for service spaces, utility rooms, or back-office zones.",
      ar: "مناسب عندما يحتاج المشروع باباً أفتح وأنظف للمناطق الخدمية أو الغرف المساندة أو المساحات الخلفية.",
    },
    groupId: "pvc-directions",
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/pvc-saudi-doors-02.webp",
  }),
  doorImage({
    id: "pvc-saudi-selection-03",
    src: "/images/capital-oasis/website-photos/doors/external-selection/pvc-saudi-doors-03.webp",
    alt: {
      en: "White paneled door with darker hardware for everyday office and home use",
      ar: "باب أبيض بتفاصيل عملية ومقبض أوضح للمكاتب والمنازل",
    },
    title: {
      en: "Easy-Care Office Door",
      ar: "باب مكتبي سهل العناية",
    },
    caption: {
      en: "Supports hardware and finish comparison when the client wants a crisp practical daily-use door.",
      ar: "يدعم مقارنة المقبض والتشطيب عندما يريد العميل باباً عملياً نظيفاً للاستخدام اليومي.",
    },
    groupId: "pvc-directions",
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/pvc-saudi-doors-03.webp",
  }),
  doorImage({
    id: "pvc-saudi-selection-04",
    src: "/images/capital-oasis/website-photos/doors/external-selection/pvc-saudi-doors-04.webp",
    alt: {
      en: "White glazed door for bright shop, office, and service-area circulation",
      ar: "باب أبيض بتفصيلة علوية أخف يناسب المحلات والمكاتب والمساحات الخدمية",
    },
    title: {
      en: "Glazed Utility Door",
      ar: "باب عملي بفتحة أخف",
    },
    caption: {
      en: "Useful when comparing practical doors for offices, clinics, and service zones that need a lighter visual break.",
      ar: "مناسب عند مقارنة الأبواب العملية للمكاتب والعيادات والمناطق الخدمية التي تحتاج كسراً بصرياً أخف.",
    },
    groupId: "pvc-directions",
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/pvc-saudi-doors-04.webp",
  }),
  doorImage({
    id: "pvc-saudi-selection-05",
    src: "/images/capital-oasis/website-photos/doors/external-selection/pvc-saudi-doors-05.webp",
    alt: {
      en: "Double white door suited to daily-use commercial and office interiors",
      ar: "باب أبيض مزدوج مناسب للمكاتب والمساحات التجارية اليومية",
    },
    title: {
      en: "Double Daily-Use Door",
      ar: "باب مزدوج عملي",
    },
    caption: {
      en: "A fuller white option for projects that repeat practical doors through offices, back rooms, and commercial interiors.",
      ar: "خيار أوضح للمشاريع التي تكرر الأبواب العملية داخل المكاتب والغرف الخلفية والمساحات التجارية.",
    },
    groupId: "pvc-directions",
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/pvc-saudi-doors-05.webp",
  }),
];

export const wpcDirectionGallery: DoorGalleryItem[] = [
  doorImage({
    id: "wpc-saudi-selection-01",
    src: "/images/capital-oasis/website-photos/doors/external-selection/wpc-saudi-doors-01.webp",
    alt: {
      en: "Clean composite-style corridor door suited to moisture-aware interiors",
      ar: "باب بطابع WPC نظيف مناسب للمساحات الداخلية المعرضة للرطوبة",
    },
    title: {
      en: "Clean Composite Corridor",
      ar: "ممر عملي بطابع WPC",
    },
    caption: {
      en: "A calm starting point for moisture-aware office corridors, service rooms, and practical interior openings.",
      ar: "بداية هادئة للممرات المكتبية والمساحات الخدمية والفتحات الداخلية التي تحتاج حلاً عملياً مناسباً للرطوبة.",
    },
    groupId: "wpc-directions",
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/wpc-saudi-doors-01.webp",
  }),
  doorImage({
    id: "wpc-saudi-selection-02",
    src: "/images/capital-oasis/website-photos/doors/external-selection/wpc-saudi-doors-02.webp",
    alt: {
      en: "Warm modern composite-style door with vertical glass detail for refined entries",
      ar: "باب حديث بطابع WPC دافئ مع تفصيلة زجاجية رأسية للمداخل الراقية",
    },
    title: {
      en: "Warm Composite Entry",
      ar: "مدخل WPC دافئ",
    },
    caption: {
      en: "Useful for villas, offices, and shop entries that want a warmer composite direction without losing practicality.",
      ar: "مناسب للفلل والمكاتب والمحلات التي تريد اتجاهاً دافئاً بطابع WPC دون فقدان العملية.",
    },
    groupId: "wpc-directions",
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/wpc-saudi-doors-02.webp",
  }),
  doorImage({
    id: "wpc-saudi-selection-03",
    src: "/images/capital-oasis/website-photos/doors/external-selection/wpc-saudi-doors-03.webp",
    alt: {
      en: "White composite-style door for clean practical corridors and utility zones",
      ar: "باب أبيض بطابع عملي مناسب للممرات النظيفة والمساحات الخدمية",
    },
    title: {
      en: "Moisture-Aware Corridor",
      ar: "ممر مناسب للرطوبة",
    },
    caption: {
      en: "A good comparison image for back-of-house circulation, bathrooms, and service-adjacent interior doors.",
      ar: "مرجع مناسب للممرات الخلفية والحمامات والفتحات الداخلية القريبة من المساحات الخدمية.",
    },
    groupId: "wpc-directions",
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/wpc-saudi-doors-03.webp",
  }),
  doorImage({
    id: "wpc-saudi-selection-04",
    src: "/images/capital-oasis/website-photos/doors/external-selection/wpc-saudi-doors-04.webp",
    alt: {
      en: "Simple composite-style white door for everyday villas, offices, and utility rooms",
      ar: "باب أبيض بطابع عملي مناسب للفلل والمكاتب والغرف اليومية",
    },
    title: {
      en: "Practical Composite Interior",
      ar: "باب داخلي عملي",
    },
    caption: {
      en: "A practical everyday option for projects comparing simple composite-style doors across repeated openings.",
      ar: "خيار عملي يومي للمشاريع التي تقارن الأبواب البسيطة بطابع WPC عبر فتحات متكررة.",
    },
    groupId: "wpc-directions",
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/wpc-saudi-doors-04.webp",
  }),
  doorImage({
    id: "wpc-saudi-selection-05",
    src: "/images/capital-oasis/website-photos/doors/external-selection/wpc-saudi-doors-05.webp",
    alt: {
      en: "Dark modern composite-style door suited to business entrances and shopfront transitions",
      ar: "باب داكن بطابع WPC حديث مناسب للمكاتب والمداخل التجارية",
    },
    title: {
      en: "Dark Business Entry",
      ar: "مدخل تجاري داكن",
    },
    caption: {
      en: "A stronger darker option for company entrances, showroom transitions, and commercial projects that want a modern composite mood.",
      ar: "خيار أقوى للمكاتب والمعارض والمشاريع التجارية التي تريد حضوراً حديثاً بطابع WPC داكن.",
    },
    groupId: "wpc-directions",
    usageType: "design",
    processingSource: "original-public",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath: "website photos/doors/external-selection/wpc-saudi-doors-05.webp",
  }),
];

const doorArchiveImageCount = 33;

export const doorPreviousWorksItems: DoorGalleryItem[] = Array.from(
  { length: doorArchiveImageCount },
  (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    const src = `/images/capital-oasis/website-photos/doors/previous-works/door-archive-20260712-${number}.jpeg`;
    const title = {
      en: `Executed Door Work ${number}`,
      ar: `نموذج باب منفذ ${number}`,
    };

    return doorImage({
      id: `previous-door-archive-${number}`,
      src,
      alt: title,
      title,
      caption: {
        en: "Selected image from the supplied executed-door archive.",
        ar: "صورة مختارة من أرشيف أعمال الأبواب المورّد.",
      },
      groupId: "doors-previous-works",
      usageType: "previous-works",
      processingSource: "original-public",
      objectFit: "cover",
      objectPosition: "center",
      sourcePath: src,
    });
  },
);

export const doorProcessGallery: DoorGalleryItem[] = [
  doorImage({
    id: "doors-process-installed",
    src: "/images/capital-oasis/website-photos/doors/process/pw-doors-installed-poster-v6.webp",
    alt: {
      en: "Installed door preview poster from Capital Oasis project footage",
      ar: "ملصق معاينة لباب منفذ من لقطات مشاريع كابيتال واسي",
    },
    title: {
      en: "Installed Door Preview",
      ar: "معاينة باب منفذ",
    },
    caption: {
      en: "A quick visual look at installed doors before the handover stage.",
      ar: "معاينة سريعة للأبواب المنفذة قبل مرحلة التسليم.",
    },
    groupId: "doors-process",
    usageType: "process",
    processingSource: "css-frame-only",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath:
      "/images/capital-oasis/project-videos/posters-curated-v6/pw-doors-installed-poster-v6.webp",
  }),
  doorImage({
    id: "doors-process-manufacturing",
    src: "/images/capital-oasis/website-photos/doors/process/pw-doors-manufacturing-poster-v6.webp",
    alt: {
      en: "Door manufacturing preview poster from the Capital Oasis workshop",
      ar: "ملصق معاينة لتصنيع الأبواب من ورشة كابيتال واسي",
    },
    title: {
      en: "Workshop Preparation Preview",
      ar: "معاينة تجهيز الورشة",
    },
    caption: {
      en: "A workshop-side preview that supports the supply and preparation story.",
      ar: "معاينة من الورشة تدعم قصة التجهيز والتوريد.",
    },
    groupId: "doors-process",
    usageType: "process",
    processingSource: "css-frame-only",
    objectFit: "cover",
    objectPosition: "center",
    sourcePath:
      "/images/capital-oasis/project-videos/posters-curated-v6/pw-doors-manufacturing-poster-v6.webp",
  }),
];

export const doorSubcategories: DoorSubcategory[] = [
  {
    id: "wood",
    anchorId: "wood-doors",
    navLabel: {
      en: "Wood",
      ar: "الخشب",
    },
    title: {
      en: "Wood Doors",
      ar: "الأبواب الخشبية",
    },
    cardSummary: {
      en: "A warm premium option for villas, homes, and refined interiors.",
      ar: "خيار دافئ وراقي للفلل والمنازل والمساحات الداخلية الراقية.",
    },
    summary: {
      en: "Wood doors deliver a richer interior presence with warm tones and refined detailing.",
      ar: "تمنح الأبواب الخشبية المساحة حضوراً أدفأ وتفاصيل تشطيب أكثر رقيّاً.",
    },
    description: {
      en: "Suitable for clients who want elegant interior character, coordinated frames, and finishing details that elevate the space.",
      ar: "مناسبة للعملاء الذين يبحثون عن حضور داخلي أنيق وتناسق في الإطارات وتفاصيل تشطيب ترفع مستوى المساحة.",
    },
    benefits: [
      { en: "Warm natural character", ar: "طابع طبيعي دافئ" },
      { en: "Elegant interior presence", ar: "حضور داخلي أنيق" },
      { en: "Flexible tone selection", ar: "مرونة في اختيار الدرجة" },
    ],
    bestFor: [
      { en: "Villas and homes", ar: "الفلل والمنازل" },
      { en: "Offices and executive rooms", ar: "المكاتب والغرف الإدارية" },
      { en: "Premium commercial interiors", ar: "المساحات التجارية الراقية" },
    ],
    servicePoints: [
      { en: "Tone and veneer selection", ar: "اختيار الدرجة والقشرة" },
      { en: "Frame and leaf coordination", ar: "تناسق الإطار والضلفة" },
      { en: "Locks and accessories", ar: "الأقفال والإكسسوارات" },
    ],
    directionGallery: woodDirectionGallery,
    visualLabel: {
      en: "Wood Finishes and Tones",
      ar: "خامات وتشطيبات خشبية",
    },
    ctaLabel: {
      en: "Request Wood Doors",
      ar: "اطلب أبواب خشبية",
    },
  },
  {
    id: "pvc",
    anchorId: "pvc-doors",
    navLabel: {
      en: "PVC",
      ar: "PVC",
    },
    title: {
      en: "PVC Doors",
      ar: "أبواب PVC",
    },
    cardSummary: {
      en: "A clean practical option for spaces that need moisture suitability and easy upkeep.",
      ar: "خيار عملي ونظيف للمساحات التي تحتاج ملاءمة للرطوبة وسهولة في العناية.",
    },
    summary: {
      en: "PVC doors suit practical spaces that need a clean appearance, moisture suitability, and easier maintenance.",
      ar: "تناسب أبواب PVC المساحات العملية التي تحتاج مظهراً نظيفاً وملاءمة للرطوبة وصيانة أسهل.",
    },
    description: {
      en: "A strong fit for bathrooms, service areas, and daily-use interiors that need clean detailing and reliable supply with installation.",
      ar: "خيار مناسب للحمامات والمناطق الخدمية والمساحات اليومية التي تحتاج تشطيباً نظيفاً وتوريداً مع تركيب موثوق.",
    },
    benefits: [
      { en: "Suitable for moisture-prone areas", ar: "مناسب للمناطق المعرضة للرطوبة" },
      { en: "Easy cleaning and upkeep", ar: "سهولة في التنظيف والعناية" },
      { en: "Clean practical finish", ar: "تشطيب عملي ونظيف" },
    ],
    bestFor: [
      { en: "Bathrooms", ar: "الحمامات" },
      { en: "Service areas", ar: "المناطق الخدمية" },
      { en: "Daily residential use", ar: "الاستخدام السكني اليومي" },
    ],
    servicePoints: [
      { en: "Moisture-suitable planning", ar: "تخطيط مناسب للرطوبة" },
      { en: "Finish and lock selection", ar: "اختيار التشطيب والقفل" },
      { en: "Supply with installation", ar: "توريد مع التركيب" },
    ],
    directionGallery: pvcDirectionGallery,
    visualLabel: {
      en: "Practical Finishes for Daily Use",
      ar: "حلول عملية للمساحات اليومية",
    },
    ctaLabel: {
      en: "Request PVC Doors",
      ar: "اطلب أبواب PVC",
    },
  },
  {
    id: "wpc",
    anchorId: "wpc-doors",
    navLabel: {
      en: "WPC",
      ar: "WPC",
    },
    title: {
      en: "WPC Doors",
      ar: "أبواب WPC",
    },
    cardSummary: {
      en: "A durable wood-like option for projects that need strength and flexible finishing.",
      ar: "خيار متين بإحساس قريب من الخشب للمشاريع التي تحتاج قوة وخيارات تشطيب مرنة.",
    },
    summary: {
      en: "WPC doors combine a warmer look with durable performance and flexible finishing choices.",
      ar: "تجمع أبواب WPC بين المظهر الدافئ والأداء المتين ومرونة خيارات التشطيب.",
    },
    description: {
      en: "A suitable choice for homes, offices, and commercial openings that need repeated-use durability with a polished finish.",
      ar: "خيار مناسب للمنازل والمكاتب والفتحات التجارية التي تحتاج متانة للاستخدام المتكرر مع تشطيب أنيق.",
    },
    benefits: [
      { en: "Durable for repeated use", ar: "متانة للاستخدام المتكرر" },
      { en: "Warm wood-like appearance", ar: "مظهر دافئ قريب من الخشب" },
      { en: "Flexible finishing options", ar: "خيارات تشطيب مرنة" },
    ],
    bestFor: [
      { en: "Homes and offices", ar: "المنازل والمكاتب" },
      { en: "Commercial interiors", ar: "المساحات التجارية" },
      { en: "Frequent-use openings", ar: "الفتحات كثيرة الاستخدام" },
    ],
    servicePoints: [
      { en: "Finish selection", ar: "اختيار التشطيب" },
      { en: "Quantity planning", ar: "تخطيط الكميات" },
      { en: "Supply with installation", ar: "توريد مع التركيب" },
    ],
    directionGallery: wpcDirectionGallery,
    visualLabel: {
      en: "Wood-Look Practical Finishes",
      ar: "مظهر عملي قريب من الخشب",
    },
    ctaLabel: {
      en: "Request WPC Doors",
      ar: "اطلب أبواب WPC",
    },
  },
];

export const doorComparisonRows: DoorComparisonRow[] = [
  {
    label: { en: "Best use", ar: "أنسب استخدام" },
    wood: { en: "Premium interiors", ar: "المساحات الراقية" },
    pvc: { en: "Practical wet areas", ar: "المناطق العملية والرطبة" },
    wpc: { en: "Frequent-use spaces", ar: "المساحات كثيرة الاستخدام" },
  },
  {
    label: { en: "Visual feel", ar: "الإحساس البصري" },
    wood: { en: "Warm and natural", ar: "دافئ وطبيعي" },
    pvc: { en: "Clean and simple", ar: "نظيف وبسيط" },
    wpc: { en: "Wood-like and practical", ar: "قريب من الخشب وعملي" },
  },
  {
    label: { en: "Moisture suitability", ar: "ملاءمة الرطوبة" },
    wood: { en: "Depends on finish", ar: "حسب التشطيب" },
    pvc: { en: "Higher resistance", ar: "مقاومة أعلى" },
    wpc: { en: "Moisture-aware option", ar: "خيار مناسب للرطوبة" },
  },
];

export const doorProcessSteps: DoorProcessStep[] = [
  {
    title: { en: "Measure", ar: "رفع المقاسات" },
    text: {
      en: "Openings are checked before supply or fabrication.",
      ar: "تتم مراجعة الفتحات قبل التوريد أو التصنيع.",
    },
  },
  {
    title: { en: "Select", ar: "اختيار الباب" },
    text: {
      en: "Door type, tone, frame, locks, and accessories are aligned.",
      ar: "يتم تنسيق الباب واللون والإطار والأقفال والإكسسوارات.",
    },
  },
  {
    title: { en: "Prepare", ar: "التجهيز" },
    text: {
      en: "Door package details are prepared around the project scope.",
      ar: "تُجهز تفاصيل باقة الأبواب حسب نطاق المشروع.",
    },
  },
  {
    title: { en: "Install", ar: "التركيب" },
    text: {
      en: "Installation focuses on fit, operation, and clean finishing.",
      ar: "يركز التركيب على الملاءمة وسلاسة التشغيل ونظافة التشطيب.",
    },
  },
  {
    title: { en: "Handover", ar: "التسليم" },
    text: {
      en: "Final checks cover reveals, hardware, and door movement.",
      ar: "تشمل المراجعة النهائية الفواصل والإكسسوارات وحركة الباب.",
    },
  },
];
