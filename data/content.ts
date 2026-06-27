export type Language = "en" | "ar";
export type Bilingual = { en: string; ar: string };

export const company = {
  name: { en: "Capital Oasis", ar: "كابيتال واسي" },
  legalName: {
    en: "Capital Oasis Woodworking Company",
    ar: "كابيتال واسي",
  },
  trust: {
    en: "Approved by NHC for Supply & Installation Works",
    ar: "معتمدون لدى NHC لأعمال التوريد والتركيب",
  },
  phone: "0549971514",
  phoneDisplay: "+966 54 997 1514",
  phoneHref: "tel:+966549971514",
  additionalPhone: "+966 57 373 9669",
  additionalPhoneHref: "tel:+966573739669",
  whatsapp: "https://wa.me/966549971514",
  website: "capitaloasisgroup.com",
  websiteDisplay: "capitaloasisgroup.com",
  location: {
    en: "Riyadh, Al Sulay, Abdullah Bin Abdulhaq Al Ansari Street",
    ar: "الرياض - السلي - شارع عبدالله بن عبدالحق الأنصاري",
  },
};

export const officialScope = {
  en: "Doors and furniture manufacturing and supply, commercial shop decorations, exhibition decor, and event solutions",
  ar: "تصنيع وتوريد الأبواب والأثاث وديكورات المحلات التجارية وديكورات المعارض والفعاليات المختلفة",
};

export const doorOffer = {
  title: {
    en: "Special offers on WPC & PVC doors",
    ar: "عروض خاصة على أبواب WPC وPVC",
  },
  price: {
    en: "Prices starting from SAR 799 for quantity orders",
    ar: "أسعار تبدأ من 799 ريال للكميات",
  },
  conditions: [
    {
      en: "For orders above 10 doors",
      ar: "للطلبات التي تزيد عن 10 أبواب",
    },
    {
      en: "Supply and installation included depending on offer details",
      ar: "يشمل التوريد والتركيب حسب تفاصيل العرض",
    },
  ],
  warranty: {
    en: "Up to 25-year warranty on selected products depending on product type and offer.",
    ar: "ضمان يصل إلى 25 سنة على منتجات مختارة حسب نوع المنتج والعرض.",
  },
};

export const navItems = [
  { href: "#home", label: { en: "Home", ar: "الرئيسية" } },
  { href: "#services", label: { en: "Services", ar: "خدماتنا" } },
  { href: "#doors", label: { en: "Doors", ar: "الأبواب" } },
  { href: "#furniture", label: { en: "Furniture", ar: "الأثاث" } },
  { href: "#events", label: { en: "Exhibition Decor & Events", ar: "ديكورات معارض وفعاليات" } },
  { href: "#gallery", label: { en: "Gallery", ar: "أعمالنا" } },
  { href: "#why-us", label: { en: "Why Us", ar: "لماذا نحن" } },
  { href: "#contact", label: { en: "Contact", ar: "تواصل معنا" } },
];

export const copy = {
  hero: {
    eyebrow: {
      en: "Premium hotel furniture and project delivery",
      ar: "أثاث فندقي راقٍ وتنفيذ موثوق للمشاريع",
    },
    title: {
      en: "Capital Oasis for Doors, Furniture, Commercial Decorations, Exhibition Decor, and Events",
      ar: "كابيتال واسي لتصنيع وتوريد الأبواب والأثاث وديكورات المحلات التجارية وديكورات المعارض والفعاليات المختلفة",
    },
    text: {
      en: "Professional solutions for manufacturing and supplying doors and furniture, commercial shop decorations, exhibition decor, and event setups with premium quality and reliable execution.",
      ar: "حلول احترافية في تصنيع وتوريد الأبواب والأثاث وديكورات المحلات التجارية وديكورات المعارض والفعاليات المختلفة بجودة عالية وتنفيذ موثوق.",
    },
    primary: { en: "WhatsApp", ar: "تواصل واتساب" },
    secondary: { en: "View Our Work", ar: "شاهد أعمالنا" },
    badges: [
      { en: "NHC Approved", ar: "معتمدون لدى NHC" },
      { en: "Supply & Installation", ar: "توريد وتركيب" },
      { en: "Custom Manufacturing", ar: "تصنيع حسب الطلب" },
      {
        en: "Residential & Commercial Projects",
        ar: "خدمة المشاريع السكنية والتجارية",
      },
    ],
  },
  trustStrip: {
    title: {
      en: "Approved by NHC for Supply & Installation Works",
      ar: "معتمدون لدى NHC لأعمال التوريد والتركيب",
    },
    text: {
      en: "We work to professional standards in doors, furniture, exhibition decor, and event execution for residential and commercial projects.",
      ar: "نعمل وفق معايير احترافية في تنفيذ أعمال الأبواب والأثاث وديكورات المعارض والفعاليات للمشاريع السكنية والتجارية.",
    },
  },
  services: {
    eyebrow: { en: "What we do", ar: "ماذا نقدم" },
    title: {
      en: "Professional solutions for spaces, projects, and occasions.",
      ar: "حلول احترافية للمساحات والمشاريع والمناسبات.",
    },
    text: {
      en: officialScope.en,
      ar: officialScope.ar,
    },
  },
  why: {
    eyebrow: { en: "Why Capital Oasis", ar: "لماذا كابيتال واسي" },
    title: {
      en: "Confidence, built into every detail.",
      ar: "ثقة نصنعها في كل تفصيل.",
    },
  },
  process: {
    eyebrow: { en: "How we work", ar: "كيف نعمل" },
    title: {
      en: "Clear from first idea to final handover.",
      ar: "وضوح من الفكرة الأولى حتى التسليم.",
    },
  },
  gallery: {
    eyebrow: { en: "Selected work", ar: "مختارات من أعمالنا" },
    title: {
      en: "Materials, moments, and meticulous finishes.",
      ar: "خامات ولحظات وتشطيبات متقنة.",
    },
  },
  contact: {
    eyebrow: { en: "Start a conversation", ar: "لنبدأ الحديث" },
    title: { en: "Have a space in mind?", ar: "هل لديكم مشروع جديد؟" },
    text: {
      en: "Tell us what you are planning. We will help shape the right scope, materials, and next steps.",
      ar: "شاركونا ما تخططون له، وسنساعدكم في تحديد النطاق والخامات والخطوات المناسبة.",
    },
    cta: { en: "Discuss your project", ar: "ناقش مشروعك معنا" },
  },
};
