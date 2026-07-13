import type { Bilingual } from "./content";

export type DressingRoomGroupId =
  | "dressing-room-hero"
  | "walk-in-dressing-rooms"
  | "glass-illuminated-wardrobes"
  | "mirrored-sliding-wardrobes"
  | "compact-storage-solutions"
  | "dressing-room-selection-models";

export type DressingRoomUsageType = "design" | "offer-reference";

export type DressingRoomGalleryItem = {
  id: string;
  src: string;
  alt: Bilingual;
  title: Bilingual;
  caption: Bilingual;
  groupId: DressingRoomGroupId;
  groupLabel: Bilingual;
  usageType: DressingRoomUsageType;
  processingNeeded: "css-frame-only";
  objectFit: "cover" | "contain";
  objectPosition: string;
};

export type DressingRoomSection = {
  id: DressingRoomGroupId;
  eyebrow: Bilingual;
  title: Bilingual;
  text: Bilingual;
  benefits: Bilingual[];
  ctaLabel: Bilingual;
  items: DressingRoomGalleryItem[];
};

const designBase = "/images/capital-oasis/website-photos/dressing-rooms/design";
const offersBase = "/images/capital-oasis/website-photos/dressing-rooms/offers";

const groups = {
  hero: {
    en: "Dressing room systems",
    ar: "أنظمة غرف الملابس",
  },
  walkIn: {
    en: "Walk-in Dressing Rooms",
    ar: "غرف ملابس مفتوحة",
  },
  glass: {
    en: "Glass & Illuminated Wardrobes",
    ar: "خزائن زجاجية بإضاءة داخلية",
  },
  mirrored: {
    en: "Mirrored & Sliding Wardrobe Systems",
    ar: "أنظمة المرايا والأبواب السحاب",
  },
  compact: {
    en: "Compact Storage Solutions",
    ar: "حلول تخزين مدمجة",
  },
  selection: {
    en: "Wardrobe Selection Models",
    ar: "نماذج اختيار غرف الملابس",
  },
} satisfies Record<string, Bilingual>;

function designItem(
  id: string,
  fileName: string,
  groupId: DressingRoomGroupId,
  groupLabel: Bilingual,
  title: Bilingual,
  caption: Bilingual,
  objectPosition = "center",
): DressingRoomGalleryItem {
  return {
    id,
    src: `${designBase}/${fileName}`,
    alt: title,
    title,
    caption,
    groupId,
    groupLabel,
    usageType: "design",
    processingNeeded: "css-frame-only",
    objectFit: "cover",
    objectPosition,
  };
}

function offerItem(
  id: string,
  fileName: string,
  title: Bilingual,
  caption: Bilingual,
  objectPosition = "center",
): DressingRoomGalleryItem {
  return {
    id,
    src: `${offersBase}/${fileName}`,
    alt: title,
    title,
    caption,
    groupId: "dressing-room-selection-models",
    groupLabel: groups.selection,
    usageType: "offer-reference",
    processingNeeded: "css-frame-only",
    objectFit: "cover",
    objectPosition,
  };
}

export const dressingRoomHeroItems = [
  designItem(
    "dressing-hero-glass-suite",
    "capital-oasis-design-glass-dressing-room.webp",
    "dressing-room-hero",
    groups.hero,
    {
      en: "Glass wardrobe system with warm lighting",
      ar: "نظام خزائن زجاجية بإضاءة داخلية دافئة",
    },
    {
      en: "A refined wardrobe system for bedrooms that need visible storage, elegant fronts, and calm luxury.",
      ar: "نظام خزائن راق لغرف النوم التي تحتاج تخزينا واضحا وواجهات أنيقة وفخامة هادئة.",
    },
  ),
  designItem(
    "dressing-hero-open-walk-in",
    "capital-oasis-design-open-walk-in-wardrobe.webp",
    "dressing-room-hero",
    groups.hero,
    {
      en: "Open walk-in wardrobe layout",
      ar: "توزيع غرفة ملابس مفتوحة",
    },
    {
      en: "Open storage zones make daily use easier while keeping the room ordered and balanced.",
      ar: "تقسيمات مفتوحة تسهل الاستخدام اليومي وتحافظ على ترتيب المساحة وتوازنها.",
    },
    "center 42%",
  ),
  designItem(
    "dressing-hero-corner-suite",
    "capital-oasis-design-corner-walk-in-wardrobe.webp",
    "dressing-room-hero",
    groups.hero,
    {
      en: "Corner wardrobe configuration",
      ar: "تكوين خزائن زاوية عملي",
    },
    {
      en: "A balanced corner configuration for spaces that need more capacity without a heavy look.",
      ar: "تكوين زاوية متوازن للمساحات التي تحتاج سعة أكبر دون ثقل بصري.",
    },
  ),
  designItem(
    "dressing-hero-illuminated",
    "capital-oasis-design-illuminated-glass-wardrobe.webp",
    "dressing-room-hero",
    groups.hero,
    {
      en: "Illuminated glass wardrobe system",
      ar: "نظام خزائن زجاجية بإضاءة مدمجة",
    },
    {
      en: "Integrated lighting supports a premium wardrobe presence and clearer daily use.",
      ar: "الإضاءة المدمجة تمنح الخزائن حضورا راقيا وتدعم وضوح الاستخدام اليومي.",
    },
  ),
];

export const dressingRoomSections: DressingRoomSection[] = [
  {
    id: "walk-in-dressing-rooms",
    eyebrow: { en: "Open storage systems", ar: "أنظمة تخزين مفتوحة" },
    title: groups.walkIn,
    text: {
      en: "Walk-in dressing rooms organize hanging, folded pieces, accessories, and display shelves in a clear daily-use layout.",
      ar: "غرف الملابس المفتوحة تنظم التعليق والطي والإكسسوارات والرفوف ضمن توزيع واضح يخدم الاستخدام اليومي.",
    },
    benefits: [
      { en: "Clear zones for daily outfits", ar: "تقسيم واضح للاستخدام اليومي" },
      { en: "Flexible shelves, drawers, and hanging areas", ar: "رفوف وأدراج ومساحات تعليق مرنة" },
      { en: "Premium look for master bedrooms", ar: "مظهر راق لغرف النوم الرئيسية" },
      { en: "Planned around room measurements", ar: "اختيار التكوين حسب مقاسات الغرفة" },
    ],
    ctaLabel: { en: "Request a walk-in layout", ar: "اطلب توزيع غرفة ملابس مفتوحة" },
    items: [
      dressingRoomHeroItems[1],
      designItem(
        "walk-in-system",
        "capital-oasis-design-walk-in-wardrobe-system.webp",
        "walk-in-dressing-rooms",
        groups.walkIn,
        { en: "Full walk-in wardrobe system", ar: "نظام غرفة ملابس متكامل" },
        {
          en: "A complete storage system with organized hanging, drawers, and open display areas.",
          ar: "نظام تخزين متكامل يجمع التعليق والأدراج ومساحات العرض المفتوحة.",
        },
      ),
      designItem(
        "walk-in-render-01",
        "design-dressing-room-render-01.webp",
        "walk-in-dressing-rooms",
        groups.walkIn,
        { en: "Warm walk-in dressing-room layout", ar: "توزيع دافئ لغرفة ملابس مفتوحة" },
        {
          en: "A warm wood composition with practical circulation and generous storage capacity.",
          ar: "تكوين خشبي دافئ مع حركة مريحة وسعة تخزين واسعة.",
        },
      ),
      designItem(
        "walk-in-furniture-01",
        "dressing-room-01.jpg",
        "walk-in-dressing-rooms",
        groups.walkIn,
        { en: "Open wardrobe configuration", ar: "تكوين خزائن مفتوحة" },
        {
          en: "A useful selection model for open wardrobe organization and daily accessibility.",
          ar: "نموذج اختيار مناسب لترتيب الخزائن المفتوحة وسهولة الوصول اليومي.",
        },
        "center top",
      ),
    ],
  },
  {
    id: "glass-illuminated-wardrobes",
    eyebrow: { en: "Glass fronts and lighting", ar: "واجهات زجاج وإضاءة" },
    title: groups.glass,
    text: {
      en: "Glass wardrobes and internal lighting give the room a refined boutique character while keeping clothing and accessories visible and organized.",
      ar: "الخزائن الزجاجية والإضاءة الداخلية تمنح الغرفة طابعا راقيا مع وضوح الملابس والإكسسوارات وتنظيمها.",
    },
    benefits: [
      { en: "Elegant display with controlled visibility", ar: "عرض أنيق مع وضوح محسوب" },
      { en: "Internal lighting for a premium mood", ar: "إضاءة داخلية لإحساس فاخر" },
      { en: "Suitable for statement wardrobe walls", ar: "مناسب لجدران الخزائن البارزة" },
      { en: "Finish choices matched to the bedroom", ar: "تشطيبات مناسبة لغرف النوم" },
    ],
    ctaLabel: { en: "Plan glass wardrobes", ar: "خطط لخزائن زجاجية" },
    items: [
      dressingRoomHeroItems[0],
      dressingRoomHeroItems[3],
      dressingRoomHeroItems[2],
      designItem(
        "glass-render-02",
        "design-dressing-room-render-02.webp",
        "glass-illuminated-wardrobes",
        groups.glass,
        { en: "Illuminated wardrobe wall", ar: "جدار خزائن بإضاءة هادئة" },
        {
          en: "A refined storage system with warm lighting accents and organized display.",
          ar: "نظام تخزين راق مع لمسات إضاءة دافئة وعرض منظم.",
        },
      ),
    ],
  },
  {
    id: "mirrored-sliding-wardrobes",
    eyebrow: { en: "Mirrors and sliding fronts", ar: "مرايا وواجهات سحاب" },
    title: groups.mirrored,
    text: {
      en: "Mirrored and sliding wardrobe systems help rooms feel brighter and more spacious, especially when circulation space is limited.",
      ar: "أنظمة المرايا والأبواب السحاب تجعل الغرفة أكثر اتساعا وإشراقا، خصوصا عند محدودية مساحة الحركة.",
    },
    benefits: [
      { en: "Space-saving door movement", ar: "حركة أبواب موفرة للمساحة" },
      { en: "Mirrors add depth and light", ar: "المرايا تضيف عمقا وإضاءة" },
      { en: "Clean wardrobe fronts for modern rooms", ar: "واجهات خزائن عملية وأنيقة" },
      { en: "Works for bedrooms and dressing corners", ar: "مناسب لغرف النوم وزوايا الملابس" },
    ],
    ctaLabel: { en: "Choose mirrored wardrobes", ar: "اختر نظام خزائن بالمرايا" },
    items: [
      designItem(
        "mirrored-tall",
        "capital-oasis-design-tall-mirror-wardrobe.webp",
        "mirrored-sliding-wardrobes",
        groups.mirrored,
        { en: "Tall mirror wardrobe system", ar: "نظام خزائن مرايا طويل" },
        {
          en: "A clean vertical wardrobe system that adds light while keeping storage discreet.",
          ar: "نظام خزائن رأسي نظيف يضيف إضاءة وعمقا مع الحفاظ على هدوء التخزين.",
        },
      ),
      designItem(
        "mirrored-wardrobe-render",
        "design-wardrobe-render-01.webp",
        "mirrored-sliding-wardrobes",
        groups.mirrored,
        { en: "Modern wardrobe front", ar: "واجهة خزانة عصرية" },
        {
          en: "A calm wardrobe front for bedrooms that need a streamlined finish.",
          ar: "واجهة خزانة هادئة تناسب غرف النوم ذات التشطيب الانسيابي.",
        },
      ),
      designItem(
        "mirrored-render-03",
        "design-dressing-room-render-03.webp",
        "mirrored-sliding-wardrobes",
        groups.mirrored,
        { en: "Sliding wardrobe system", ar: "نظام أبواب خزائن سحاب" },
        {
          en: "A practical wardrobe system for easy access and balanced presentation.",
          ar: "نظام خزائن عملي للوصول السهل وإيقاع بصري متوازن.",
        },
      ),
      designItem(
        "lounge-wardrobe-alt",
        "capital-oasis-design-lounge-wardrobe-alt.webp",
        "mirrored-sliding-wardrobes",
        groups.mirrored,
        { en: "Elegant wardrobe wall", ar: "جدار خزائن أنيق" },
        {
          en: "A composed wardrobe wall for quiet luxury bedrooms.",
          ar: "جدار خزائن متزن لغرف النوم الهادئة والفاخرة.",
        },
      ),
    ],
  },
  {
    id: "compact-storage-solutions",
    eyebrow: { en: "Smart storage systems", ar: "أنظمة تخزين ذكية" },
    title: groups.compact,
    text: {
      en: "Compact wardrobe solutions bring order to smaller rooms, guest bedrooms, and private corners without sacrificing a polished look.",
      ar: "حلول التخزين المدمجة تمنح النظام للغرف الصغيرة وغرف الضيوف والزوايا الخاصة دون التنازل عن المظهر الراقي.",
    },
    benefits: [
      { en: "Useful for smaller rooms", ar: "مناسبة للمساحات الأصغر" },
      { en: "Balanced drawers, shelves, and rails", ar: "توازن بين الأدراج والرفوف والتعليق" },
      { en: "Visual calm with practical capacity", ar: "هدوء بصري مع سعة عملية" },
      { en: "Can adapt to difficult corners", ar: "قابلة للتكييف مع الزوايا الصعبة" },
    ],
    ctaLabel: { en: "Request compact storage", ar: "اطلب حل تخزين مدمج" },
    items: [
      designItem(
        "compact-single-wardrobe",
        "capital-oasis-design-single-wardrobe.webp",
        "compact-storage-solutions",
        groups.compact,
        { en: "Single wardrobe storage system", ar: "نظام خزانة مفردة عملي" },
        {
          en: "A focused wardrobe system for compact rooms and refined storage corners.",
          ar: "نظام خزانة مركز للمساحات الصغيرة وزوايا التخزين الأنيقة.",
        },
      ),
      designItem(
        "compact-render-04",
        "design-dressing-room-render-04.webp",
        "compact-storage-solutions",
        groups.compact,
        { en: "Compact dressing-room solution", ar: "حل مدمج لغرفة ملابس" },
        {
          en: "A compact storage solution that keeps the daily routine ordered without clutter.",
          ar: "حل تخزين مدمج يحافظ على تنظيم الاستخدام اليومي دون ازدحام بصري.",
        },
      ),
      designItem(
        "compact-wardrobe-render-02",
        "design-wardrobe-render-02.webp",
        "compact-storage-solutions",
        groups.compact,
        { en: "Minimal wardrobe composition", ar: "تكوين خزانة هادئ" },
        {
          en: "A minimal wardrobe composition with warm finishes and straightforward storage logic.",
          ar: "تكوين خزانة هادئ بتشطيبات دافئة ومنطق تخزين واضح.",
        },
      ),
      designItem(
        "compact-furniture-04",
        "dressing-room-04.jpg",
        "compact-storage-solutions",
        groups.compact,
        { en: "Compact wardrobe configuration", ar: "تكوين خزانة مدمجة" },
        {
          en: "A practical selection model for smaller wardrobe compositions and tidy fronts.",
          ar: "نموذج اختيار عملي لتكوينات خزائن أصغر وواجهات مرتبة.",
        },
        "center top",
      ),
    ],
  },
];

export const dressingRoomSelectionItems = [
  offerItem(
    "dressing-selection-01",
    "brand-visual-dressing-room-01.png",
    { en: "Warm dressing-room selection", ar: "اختيار دافئ لغرفة الملابس" },
    {
      en: "A clean model for selecting finish, lighting, and storage mood.",
      ar: "نموذج واضح لاختيار التشطيب والإضاءة ونظام التخزين.",
    },
  ),
  offerItem(
    "dressing-selection-02",
    "brand-visual-dressing-room-02.png",
    { en: "Organized wardrobe model", ar: "نموذج خزانة منظمة" },
    {
      en: "A useful model for calm fronts, practical capacity, and balanced detailing.",
      ar: "نموذج مناسب لواجهات هادئة وسعة عملية وتفاصيل متوازنة.",
    },
  ),
  offerItem(
    "dressing-selection-03",
    "brand-visual-dressing-room-03.png",
    { en: "Luxury wardrobe selection", ar: "اختيار خزائن فاخر" },
    {
      en: "A polished model for spaces that need elevated wardrobe presence.",
      ar: "نموذج مصقول للمساحات التي تحتاج حضور خزائن فاخر.",
    },
  ),
  offerItem(
    "dressing-selection-04",
    "brand-visual-dressing-room-04.png",
    { en: "Elegant storage composition", ar: "تكوين تخزين أنيق" },
    {
      en: "A refined model for discussing layout, finish, and lighting preferences.",
      ar: "نموذج راق لمناقشة التوزيع والتشطيب وتفضيلات الإضاءة.",
    },
  ),
];

export const dressingRoomAllItems = [
  ...dressingRoomHeroItems,
  ...dressingRoomSections.flatMap((section) => section.items),
  ...dressingRoomSelectionItems,
];

export const dressingRoomCopy = {
  hero: {
    eyebrow: {
      en: "Wardrobe systems with calm, considered detail",
      ar: "أنظمة خزائن تمنح المساحة هدوءاً وتفصيلاً مدروساً",
    },
    title: {
      en: "Dressing rooms that bring order, calm, and refined detail to the daily routine.",
      ar: "غرف ملابس تمنح الروتين اليومي ترتيباً وهدوءاً وتفاصيل راقية",
    },
    text: {
      en: "We help shape the layout, fronts, lighting, and finishes around the room, the storage needs, and the daily routine.",
      ar: "ننسق التوزيع والواجهات والإضاءة والتشطيبات حول المساحة واحتياج التخزين وروتين الاستخدام اليومي.",
    },
    primaryCta: { en: "Shape Your Dressing Room", ar: "شكّل غرفة الملابس" },
    secondaryCta: { en: "Explore Wardrobe Systems", ar: "استعرض أنظمة الخزائن" },
    chips: [
      { en: "Supply and installation consultation", ar: "استشارة توريد وتركيب" },
      { en: "Measured storage planning", ar: "تخطيط تخزين حسب المقاس" },
      { en: "Premium finishes for bedrooms", ar: "تشطيبات راقية لغرف النوم" },
    ],
  },
  intro: {
    eyebrow: { en: "Choose the wardrobe system", ar: "اختر نظام غرفة الملابس" },
    title: {
      en: "Four wardrobe directions for different spaces, storage needs, and daily routines.",
      ar: "أربعة اتجاهات للخزائن تلائم اختلاف المساحات واحتياج التخزين وروتين الاستخدام اليومي.",
    },
    text: {
      en: "Use the sections below to compare open systems, illuminated glass, mirrored sliding fronts, and compact storage.",
      ar: "استخدم الأقسام التالية لمقارنة الأنظمة المفتوحة والزجاج المضيء وواجهات المرايا السحاب والتخزين المدمج.",
    },
  },
  selection: {
    eyebrow: { en: "Selection guidance", ar: "توجيه الاختيار" },
    title: groups.selection,
    text: {
      en: "These models make it easier to compare finishes, internal organization, lighting, and front style.",
      ar: "تساعدك هذه النماذج على مقارنة التشطيبات والتنظيم الداخلي والإضاءة وشكل الواجهات بسهولة.",
    },
  },
  confidence: {
    eyebrow: { en: "From measurements to the right solution", ar: "من المقاسات إلى الحل المناسب" },
    title: {
      en: "A consultation-first path toward the right wardrobe decision.",
      ar: "مسار يبدأ بالاستشارة للوصول إلى نظام الخزائن الأنسب.",
    },
    text: {
      en: "Share the room dimensions, preferred finish, and daily use needs. We help narrow the options before moving into details.",
      ar: "شاركنا مقاسات الغرفة والتشطيب المفضل واحتياجك اليومي، وسنساعدك في تضييق الخيارات قبل الدخول في التفاصيل.",
    },
    points: [
      { en: "Layout matched to room measurements", ar: "توزيع يناسب مقاسات الغرفة" },
      { en: "Internal organization by daily use", ar: "تنظيم داخلي حسب الاستخدام اليومي" },
      { en: "Finish and lighting choices with a premium mood", ar: "اختيار التشطيب والإضاءة بمظهر راق" },
    ],
  },
  finalCta: {
    eyebrow: { en: "Begin the wardrobe brief", ar: "ابدأ موجز غرفة الملابس" },
    title: {
      en: "Share the space and we will help shape the wardrobe system that fits.",
      ar: "شاركنا المساحة وسنساعدك في تشكيل نظام الخزائن الأنسب.",
    },
    text: {
      en: "Whether you want a full walk-in dressing room or a compact wardrobe wall, we can guide the layout, finish, and storage choices.",
      ar: "سواء كنت تريد غرفة ملابس متكاملة أو جدار خزائن مدمج، يمكننا مساعدتك في التوزيع والتشطيب وخيارات التخزين.",
    },
    cta: { en: "Start a Wardrobe Quote", ar: "ابدأ طلب عرض الخزائن" },
    call: { en: "Calling", ar: "للاتصال" },
  },
};
