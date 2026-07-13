import type { Bilingual } from "./content";

export type KitchenGroupId =
  | "kitchens-hero"
  | "kitchen-systems"
  | "kitchen-materials-finishes"
  | "kitchen-storage-solutions"
  | "kitchen-options-showcase";

export type KitchenGalleryItem = {
  id: string;
  src: string;
  alt: Bilingual;
  title: Bilingual;
  caption: Bilingual;
  groupId: KitchenGroupId;
  groupLabel: Bilingual;
  objectFit: "cover" | "contain";
  objectPosition: string;
};

export type KitchenEditorialSection = {
  id: Exclude<KitchenGroupId, "kitchens-hero" | "kitchen-options-showcase">;
  eyebrow: Bilingual;
  title: Bilingual;
  text: Bilingual;
  benefits: Bilingual[];
  ctaLabel: Bilingual;
  items: KitchenGalleryItem[];
};

const designBase = "/images/capital-oasis/website-photos/kitchens/design";
const externalBase =
  "/images/capital-oasis/website-photos/kitchens/external-selection";

const groups = {
  hero: {
    en: "Kitchen systems",
    ar: "أنظمة المطابخ",
  },
  systems: {
    en: "Kitchen Systems",
    ar: "أنظمة المطابخ",
  },
  materials: {
    en: "Materials & Finishes",
    ar: "الخامات والتشطيبات",
  },
  storage: {
    en: "Storage Solutions",
    ar: "حلول التخزين",
  },
  showcase: {
    en: "Kitchen Options",
    ar: "اختيارات المطابخ",
  },
} satisfies Record<string, Bilingual>;

function kitchenItem(
  basePath: string,
  id: string,
  fileName: string,
  groupId: KitchenGroupId,
  groupLabel: Bilingual,
  title: Bilingual,
  caption: Bilingual,
  objectPosition = "center",
): KitchenGalleryItem {
  return {
    id,
    src: `${basePath}/${fileName}`,
    alt: title,
    title,
    caption,
    groupId,
    groupLabel,
    objectFit: "cover",
    objectPosition,
  };
}

function designKitchenItem(
  id: string,
  fileName: string,
  groupId: KitchenGroupId,
  groupLabel: Bilingual,
  title: Bilingual,
  caption: Bilingual,
  objectPosition = "center",
) {
  return kitchenItem(
    designBase,
    id,
    fileName,
    groupId,
    groupLabel,
    title,
    caption,
    objectPosition,
  );
}

function externalKitchenItem(
  id: string,
  fileName: string,
  groupId: KitchenGroupId,
  groupLabel: Bilingual,
  title: Bilingual,
  caption: Bilingual,
  objectPosition = "center",
) {
  return kitchenItem(
    externalBase,
    id,
    fileName,
    groupId,
    groupLabel,
    title,
    caption,
    objectPosition,
  );
}

export const kitchenHeroItems = [
  externalKitchenItem(
    "kitchen-hero-warm-timber",
    "kitchen-options-02.webp",
    "kitchens-hero",
    groups.hero,
    {
      en: "Warm timber kitchen hero",
      ar: "مطبخ بخشب دافئ بطابع رئيسي",
    },
    {
      en: "A spacious warm-timber direction that gives the Kitchens route a premium villa mood without turning it into a project claim.",
      ar: "اتجاه خشبي دافئ وواسع يمنح صفحة المطابخ حضوراً راقياً بطابع فيلا حديثة من دون تحويلها إلى ادعاء مشروع منفذ.",
    },
    "center 54%",
  ),
  externalKitchenItem(
    "kitchen-hero-island-system",
    "kitchen-systems-02.webp",
    "kitchens-hero",
    groups.hero,
    {
      en: "Island system with walnut cabinetry",
      ar: "نظام جزيرة بخزائن خشبية",
    },
    {
      en: "Island planning, cabinetry rhythm, and a practical family-ready work zone.",
      ar: "تخطيط جزيرة وإيقاع خزائن ومنطقة عمل عملية تناسب الاستخدام العائلي اليومي.",
    },
    "center 48%",
  ),
  externalKitchenItem(
    "kitchen-hero-ivory-wood-option",
    "kitchen-options-03.webp",
    "kitchens-hero",
    groups.hero,
    {
      en: "Ivory and wood kitchen option",
      ar: "مطبخ يجمع العاجي والخشب",
    },
    {
      en: "Ivory and walnut kitchen with soft stone tones.",
      ar: "مطبخ بخامات عاجية وخشب الجوز ولمسات حجرية هادئة.",
    },
    "center 50%",
  ),
];

export const kitchenEditorialSections: KitchenEditorialSection[] = [
  {
    id: "kitchen-systems",
    eyebrow: {
      en: "Kitchen systems matched to the space",
      ar: "أنظمة مطابخ تناسب المساحة",
    },
    title: groups.systems,
    text: {
      en: "Compare full kitchen systems according to room width, island need, cabinet rhythm, and the daily movement you want the space to support.",
      ar: "قارن بين أنظمة المطابخ الكاملة بحسب عرض المساحة ووجود الجزيرة وإيقاع الخزائن وطريقة الحركة اليومية التي تريدها داخل المطبخ.",
    },
    benefits: [
      { en: "Layout matched to room dimensions", ar: "توزيع يناسب مقاسات المساحة" },
      { en: "Clear work zones for daily use", ar: "مناطق عمل واضحة للاستخدام اليومي" },
      { en: "Island and cabinetry balance", ar: "توازن بين الجزيرة والخزائن" },
      { en: "Supply and installation consultation", ar: "استشارة للتوريد والتركيب" },
    ],
    ctaLabel: {
      en: "Discuss the right kitchen system",
      ar: "ناقش معنا نظام المطبخ المناسب",
    },
    items: [
      externalKitchenItem(
        "kitchen-system-01",
        "kitchen-systems-01.webp",
        "kitchen-systems",
        groups.systems,
        {
          en: "Warm linear kitchen with calm lighting",
          ar: "مطبخ خطي دافئ بإضاءة هادئة",
        },
        {
          en: "Suitable for clients comparing calm wall systems with clean preparation space and lighter upper fronts.",
          ar: "مناسب لمن يقارن بين الأنظمة الجدارية الهادئة ومساحة التحضير النظيفة والواجهات العلوية الأخف.",
        },
        "center 46%",
      ),
      externalKitchenItem(
        "kitchen-system-02",
        "kitchen-systems-02.webp",
        "kitchen-systems",
        groups.systems,
        {
          en: "Island system with walnut cabinetry",
          ar: "نظام جزيرة بخزائن خشبية",
        },
        {
          en: "A direction that helps discuss island use, preparation flow, and storage around the main work zone.",
          ar: "اتجاه يساعد على مناقشة استخدام الجزيرة ومسار التحضير والتخزين حول منطقة العمل الرئيسية.",
        },
      ),
      externalKitchenItem(
        "kitchen-system-03",
        "kitchen-systems-03.webp",
        "kitchen-systems",
        groups.systems,
        {
          en: "Spacious family kitchen layout",
          ar: "توزيع مطبخ عائلي واسع",
        },
        {
          en: "Useful for wider rooms that need open circulation, central prep space, and balanced tall cabinetry.",
          ar: "مفيد للمساحات الأوسع التي تحتاج حركة مفتوحة ومنطقة تحضير مركزية وتوزيع متوازن للخزائن العالية.",
        },
      ),
      externalKitchenItem(
        "kitchen-system-04",
        "kitchen-systems-04.webp",
        "kitchen-systems",
        groups.systems,
        {
          en: "Evening kitchen with integrated counters",
          ar: "مطبخ مسائي بكاونترات مدمجة",
        },
        {
          en: "A sleek arrangement for clients who prefer deeper contrast, hidden appliances, and a calmer hospitality mood.",
          ar: "ترتيب أنيق لمن يفضل التباين الأعمق ودمج الأجهزة وطابع ضيافة أكثر هدوءًا.",
        },
        "center 44%",
      ),
      externalKitchenItem(
        "kitchen-system-05",
        "kitchen-systems-05.webp",
        "kitchen-systems",
        groups.systems,
        {
          en: "Bright kitchen with central island",
          ar: "مطبخ مضيء بجزيرة مركزية",
        },
        {
          en: "Helps compare brighter cabinetry with island seating and a softer everyday family atmosphere.",
          ar: "يساعد على مقارنة الخزائن الأفتح مع جلسة الجزيرة وأجواء يومية عائلية أكثر نعومة.",
        },
      ),
      externalKitchenItem(
        "kitchen-system-06",
        "kitchen-systems-06.webp",
        "kitchen-systems",
        groups.systems,
        {
          en: "Open kitchen with white island rhythm",
          ar: "مطبخ مفتوح بإيقاع جزيرة أبيض",
        },
        {
          en: "A practical option for discussing open plans, visual lightness, and easy movement around the island.",
          ar: "خيار عملي لمناقشة المساحات المفتوحة والخفة البصرية وسهولة الحركة حول الجزيرة.",
        },
      ),
    ],
  },
  {
    id: "kitchen-materials-finishes",
    eyebrow: {
      en: "Materials suited to daily use",
      ar: "الخامة المناسبة للاستخدام اليومي",
    },
    title: groups.materials,
    text: {
      en: "Walnut tones, ivory fronts, stone surfaces, bronze accents, and quieter lighting details all change how the kitchen feels through daily use.",
      ar: "درجات الخشب والواجهات العاجية والأسطح الحجرية واللمسات البرونزية والإضاءة الهادئة كلها تغيّر إحساس المطبخ خلال الاستخدام اليومي.",
    },
    benefits: [
      { en: "Warm wood and walnut directions", ar: "اتجاهات خشبية ودافئة" },
      { en: "Ivory tones that keep the space lighter", ar: "درجات عاجية تمنح المساحة خفة" },
      { en: "Stone surfaces with a refined look", ar: "أسطح حجرية بطابع راق" },
      { en: "Lighting and metal accents that complete the mood", ar: "إضاءة ولمسات معدنية تكمل الطابع" },
    ],
    ctaLabel: {
      en: "Choose materials and finishes",
      ar: "اختر الخامة والتشطيب المناسب",
    },
    items: [
      externalKitchenItem(
        "kitchen-finish-01",
        "kitchen-finishes-01.webp",
        "kitchen-materials-finishes",
        groups.materials,
        {
          en: "Warm lighting with minimalist fronts",
          ar: "إضاءة دافئة مع واجهات هادئة",
        },
        {
          en: "Useful for comparing softer upper fronts with warm strip lighting and quieter wall finishes.",
          ar: "مفيد لمقارنة الواجهات العلوية الهادئة مع الإضاءة الخطية الدافئة وتشطيبات الجدار الأخف.",
        },
        "center 48%",
      ),
      externalKitchenItem(
        "kitchen-finish-02",
        "kitchen-finishes-02.webp",
        "kitchen-materials-finishes",
        groups.materials,
        {
          en: "Wood cabinetry with marble contrast",
          ar: "خزائن خشبية مع تباين رخامي",
        },
        {
          en: "A balanced finish direction for clients who want walnut warmth with a sharper stone backdrop.",
          ar: "اتجاه متوازن لمن يريد دفء الخشب مع خلفية حجرية أكثر حضورًا.",
        },
      ),
      externalKitchenItem(
        "kitchen-finish-03",
        "kitchen-finishes-03.webp",
        "kitchen-materials-finishes",
        groups.materials,
        {
          en: "Granite and brass sink detail",
          ar: "تفصيل جرانيت مع خلاط نحاسي",
        },
        {
          en: "A close look at countertop tone, sink finish, and the small metal details that elevate the kitchen mood.",
          ar: "نظرة قريبة على لون السطح وتشطيب الحوض واللمسات المعدنية الصغيرة التي ترفع إحساس المطبخ.",
        },
      ),
      externalKitchenItem(
        "kitchen-finish-04",
        "kitchen-finishes-04.webp",
        "kitchen-materials-finishes",
        groups.materials,
        {
          en: "Dark marble backsplash statement",
          ar: "خلفية رخام داكنة بطابع واضح",
        },
        {
          en: "Suitable for clients exploring bolder stone, sharper contrast, and a more dramatic contemporary finish.",
          ar: "مناسب لمن يستكشف الحجر الأجرأ والتباين الأوضح والتشطيب العصري الأكثر قوة.",
        },
      ),
      externalKitchenItem(
        "kitchen-finish-05",
        "kitchen-finishes-05.webp",
        "kitchen-materials-finishes",
        groups.materials,
        {
          en: "Marble texture and matte fixture",
          ar: "ملمس رخامي مع خلاط مطفي",
        },
        {
          en: "Helps compare surface texture, faucet finish, and how calmer details affect the premium feel.",
          ar: "يساعد على مقارنة ملمس السطح وتشطيب الخلاط وكيف تؤثر التفاصيل الهادئة على الإحساس الراقي.",
        },
      ),
      externalKitchenItem(
        "kitchen-finish-06",
        "kitchen-finishes-06.webp",
        "kitchen-materials-finishes",
        groups.materials,
        {
          en: "Quiet ivory and stone composition",
          ar: "تكوين حجري هادئ بواجهات عاجية",
        },
        {
          en: "A softer finish direction for clients who want ivory cabinetry with restrained marble movement.",
          ar: "اتجاه أنعم لمن يريد واجهات عاجية مع حركة رخامية هادئة وغير صاخبة.",
        },
        "center 46%",
      ),
    ],
  },
  {
    id: "kitchen-storage-solutions",
    eyebrow: {
      en: "Smart storage choices",
      ar: "حلول تخزين ذكية",
    },
    title: groups.storage,
    text: {
      en: "Kitchen storage works best when drawers, tall cabinets, preparation space, and appliance zones support movement instead of interrupting it.",
      ar: "يعمل تخزين المطبخ بشكل أفضل عندما تخدم الأدراج والخزائن العالية ومساحات التحضير ومواقع الأجهزة حركة الاستخدام بدلًا من تعطيلها.",
    },
    benefits: [
      { en: "Cabinets and drawers that support daily routine", ar: "خزائن وأدراج تخدم الروتين اليومي" },
      { en: "Preparation space kept clear", ar: "مساحات تحضير أوضح وأكثر هدوءًا" },
      { en: "Balanced tall-unit and appliance placement", ar: "توزيع متوازن للوحدات العالية والأجهزة" },
      { en: "Details that help movement and access", ar: "تفاصيل تخدم الحركة وسهولة الوصول" },
    ],
    ctaLabel: {
      en: "Plan the storage logic",
      ar: "خطط معنا منطق التخزين",
    },
    items: [
      externalKitchenItem(
        "kitchen-storage-01",
        "kitchen-storage-01.webp",
        "kitchen-storage-solutions",
        groups.storage,
        {
          en: "Drawer organization for daily tools",
          ar: "تنظيم أدراج لأدوات الاستخدام اليومي",
        },
        {
          en: "A direct example of how drawer planning can keep essentials close without crowding the worktop.",
          ar: "مثال مباشر على كيف يحافظ تخطيط الأدراج على قرب الأدوات الأساسية دون ازدحام سطح العمل.",
        },
      ),
      externalKitchenItem(
        "kitchen-storage-02",
        "kitchen-storage-02.webp",
        "kitchen-storage-solutions",
        groups.storage,
        {
          en: "Tall cabinetry with display balance",
          ar: "خزائن عالية بتوازن عرض أنيق",
        },
        {
          en: "Useful for discussing tall units, concealed storage, and how vertical rhythm shapes the kitchen wall.",
          ar: "مفيد لمناقشة الوحدات العالية والتخزين المخفي وكيف يصنع الإيقاع الرأسي شكل الجدار الرئيسي للمطبخ.",
        },
      ),
      externalKitchenItem(
        "kitchen-storage-03",
        "kitchen-storage-03.webp",
        "kitchen-storage-solutions",
        groups.storage,
        {
          en: "Compact layout with skyline view",
          ar: "توزيع مدمج مع إطلالة مفتوحة",
        },
        {
          en: "A compact arrangement that still preserves prep flow, upper storage, and easy access around the sink.",
          ar: "ترتيب مدمج يحافظ رغم ذلك على مسار التحضير والتخزين العلوي وسهولة الوصول حول الحوض.",
        },
      ),
      externalKitchenItem(
        "kitchen-storage-04",
        "kitchen-storage-04.webp",
        "kitchen-storage-solutions",
        groups.storage,
        {
          en: "Built-in appliance wall with storage",
          ar: "جدار أجهزة مدمج مع تخزين منظم",
        },
        {
          en: "Suitable for projects that need appliance stacking, tall cabinets, and uninterrupted countertop use.",
          ar: "مناسب للمشاريع التي تحتاج دمج الأجهزة رأسيًا وخزائن عالية مع الحفاظ على سطح عمل متصل.",
        },
      ),
      externalKitchenItem(
        "kitchen-storage-05",
        "kitchen-storage-05.webp",
        "kitchen-storage-solutions",
        groups.storage,
        {
          en: "Minimal work zone with full-height storage",
          ar: "منطقة عمل هادئة مع تخزين بارتفاع كامل",
        },
        {
          en: "Helps compare clean sight lines, appliance placement, and storage that stays close to the prep zone.",
          ar: "يساعد على مقارنة هدوء المشهد البصري مع أماكن الأجهزة والتخزين القريب من منطقة التحضير.",
        },
      ),
      externalKitchenItem(
        "kitchen-storage-06",
        "kitchen-storage-06.webp",
        "kitchen-storage-solutions",
        groups.storage,
        {
          en: "Minimalist island and upper storage rhythm",
          ar: "إيقاع جزيرة وتخزين علوي بطابع بسيط",
        },
        {
          en: "A practical option for clients who want minimal lines without losing enough daily storage capacity.",
          ar: "خيار عملي لمن يريد خطوطًا بسيطة من دون خسارة سعة التخزين اليومية الكافية.",
        },
      ),
    ],
  },
];

export const kitchenShowcaseItems = [
  externalKitchenItem(
    "kitchen-option-01",
    "kitchen-options-01.webp",
    "kitchen-options-showcase",
    groups.showcase,
    {
      en: "Kitchen option with refined seating edge",
      ar: "مطبخ بلمسة جلوس راقية",
    },
    {
      en: "Good for clients comparing dining-adjacent kitchen styles with softer materials and warm lighting.",
      ar: "مناسب لمن يقارن بين المطابخ القريبة من جلسة الطعام مع خامات أنعم وإضاءة أكثر دفئًا.",
    },
  ),
  externalKitchenItem(
    "kitchen-option-02",
    "kitchen-options-02.webp",
    "kitchen-options-showcase",
    groups.showcase,
    {
      en: "Warm timber kitchen direction",
      ar: "اتجاه مطبخ بخشب دافئ",
    },
    {
      en: "A richer option for clients who prefer full timber presence with generous counters and natural light.",
      ar: "خيار أغنى لمن يفضل حضور الخشب بشكل أوضح مع أسطح واسعة وإضاءة طبيعية مريحة.",
    },
  ),
  externalKitchenItem(
    "kitchen-option-03",
    "kitchen-options-03.webp",
    "kitchen-options-showcase",
    groups.showcase,
    {
      en: "Wood and ivory kitchen option",
      ar: "مطبخ يجمع الخشب والعاجي",
    },
    {
      en: "Useful when comparing a calmer palette with slim counters, hidden handles, and lighter visual weight.",
      ar: "مفيد عند مقارنة لوحة أهدأ مع أسطح أنحف ومقابض مخفية ووزن بصري أخف.",
    },
  ),
  externalKitchenItem(
    "kitchen-option-04",
    "kitchen-options-04.webp",
    "kitchen-options-showcase",
    groups.showcase,
    {
      en: "Elegant white kitchen with layered lighting",
      ar: "مطبخ أبيض أنيق بإضاءة متعددة",
    },
    {
      en: "A polished option for clients who like brighter cabinetry with decorative pendants and clean reflective finishes.",
      ar: "خيار أنيق لمن يفضل الخزائن الأفتح مع الإضاءة المعلقة والتشطيبات النظيفة اللامعة.",
    },
  ),
  externalKitchenItem(
    "kitchen-option-05",
    "kitchen-options-05.webp",
    "kitchen-options-showcase",
    groups.showcase,
    {
      en: "Compact beige kitchen option",
      ar: "مطبخ بيج للمساحات الأهدأ",
    },
    {
      en: "Suitable for narrower spaces that need warmth, full-height cabinetry, and an easy daily work line.",
      ar: "مناسب للمساحات الأضيق التي تحتاج دفئًا وخزائن بارتفاع كامل وخط عمل يومي سهل.",
    },
    "center 44%",
  ),
  externalKitchenItem(
    "kitchen-option-06",
    "kitchen-options-06.webp",
    "kitchen-options-showcase",
    groups.showcase,
    {
      en: "Fresh white island kitchen option",
      ar: "مطبخ أبيض بجزيرة خفيفة",
    },
    {
      en: "A cleaner, brighter direction for families who want light cabinetry and a crisp open-plan kitchen mood.",
      ar: "اتجاه أنظف وأكثر إشراقًا للعائلات التي تريد خزائن فاتحة وطابع مطبخ مفتوح وخفيف.",
    },
  ),
];

export const kitchensPageContent = {
  hero: {
    eyebrow: {
      en: "Kitchen systems with a clear, practical character",
      ar: "أنظمة مطابخ عملية بحضور واضح ومدروس",
    },
    title: {
      en: "Kitchens that make the daily routine feel clearer and more considered.",
      ar: "مطابخ تجعل الاستخدام اليومي أوضح وأكثر ترتيباً وراحة",
    },
    text: {
      en: "We start with the space and the way it works, then shape the material, storage, and movement around real daily use.",
      ar: "نبدأ من المساحة وطريقة عملها، ثم ننسق الخامة والتخزين والحركة حول الاستخدام اليومي الفعلي.",
    },
    primaryCta: {
      en: "Shape Your Kitchen Direction",
      ar: "شكّل اتجاه مطبخك معنا",
    },
    secondaryCta: {
      en: "Explore the Kitchen Selection",
      ar: "استعرض اختيارات المطابخ",
    },
    chips: [
      { en: "Supply and installation consultation", ar: "استشارة للتوريد والتركيب" },
      { en: "Practical layout planning", ar: "تخطيط عملي للتوزيع" },
      { en: "Materials suited to daily use", ar: "خامات تتحمل الاستخدام اليومي" },
    ],
  },
  showcase: {
    eyebrow: {
      en: "A considered kitchen selection",
      ar: "اختيارات مطابخ مدروسة",
    },
    title: {
      en: "Compare finish, storage rhythm, and system before choosing your direction.",
      ar: "قارن التشطيب وإيقاع التخزين والنظام قبل اعتماد الاتجاه المناسب",
    },
    text: {
      en: "Review the overall mood, cabinet rhythm, material warmth, and movement logic before narrowing the final kitchen direction.",
      ar: "راجع الطابع العام وإيقاع الخزائن ودفء الخامات ومنطق الحركة قبل تضييق اتجاه المطبخ النهائي.",
    },
    checklist: [
      { en: "Walnut and ivory directions", ar: "اتجاهات خشبية وعاجية" },
      { en: "Stone surfaces and quieter contrasts", ar: "أسطح حجرية وتباينات هادئة" },
      { en: "Storage logic matched to daily routine", ar: "منطق تخزين يناسب الروتين اليومي" },
      { en: "A system shaped around the space", ar: "نظام يتشكل بحسب المساحة" },
    ],
    tip: {
      en: "Save the kitchen options you like most, then send the room dimensions and preferred finish so the conversation starts from the right direction.",
      ar: "احفظ اختيارات المطابخ الأقرب لذوقك ثم أرسل مقاسات المساحة والتشطيب المفضل لتبدأ المناقشة من الاتجاه المناسب.",
    },
    ctaLabel: {
      en: "Share the kitchen dimensions",
      ar: "شاركنا مقاسات المطبخ",
    },
  },
  finalCta: {
    eyebrow: {
      en: "Start with the space",
      ar: "ابدأ من المساحة",
    },
    title: {
      en: "Share the kitchen dimensions and preferred material; we will help shape the system that fits.",
      ar: "شاركنا مقاسات المطبخ والخامة المفضلة، ونساعدك في تشكيل النظام الأنسب.",
    },
    text: {
      en: "Whether you are comparing warmer cabinetry, lighter fronts, or clearer storage logic, we can help narrow the most suitable direction.",
      ar: "سواء كنت تقارن بين الدرجات الخشبية أو الواجهات الفاتحة أو منطق التخزين الأنسب، يمكننا مساعدتك في تضييق الاتجاه المناسب.",
    },
    cta: {
      en: "Start a Kitchen Quote",
      ar: "ابدأ طلب عرض المطبخ",
    },
    call: {
      en: "Call Us",
      ar: "اتصل بنا",
    },
  },
};
