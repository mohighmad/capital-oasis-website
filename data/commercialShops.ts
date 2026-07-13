import type { Bilingual } from "./content";

export type CommercialShopGroupId =
  | "commercial-shops-hero"
  | "commercial-botella-gift-shop"
  | "commercial-display-shelving"
  | "commercial-shops-previous-works";

export type CommercialShopGalleryItem = {
  id: string;
  src: string;
  alt: Bilingual;
  title: Bilingual;
  caption: Bilingual;
  groupId: CommercialShopGroupId;
  groupLabel: Bilingual;
  objectFit: "cover" | "contain";
  objectPosition: string;
};

export type CommercialShopEditorialSection = {
  id: Exclude<
    CommercialShopGroupId,
    "commercial-shops-hero" | "commercial-shops-previous-works"
  >;
  eyebrow: Bilingual;
  title: Bilingual;
  text: Bilingual;
  benefits: Bilingual[];
  serviceTags: Bilingual[];
  ctaLabel: Bilingual;
  items: CommercialShopGalleryItem[];
};

export type CommercialShopVideoCard = {
  badge: Bilingual;
  title: Bilingual;
  description: Bilingual;
};

const previousWorksBase =
  "/images/capital-oasis/website-photos/commercial-shops/previous-works";

const groups = {
  hero: {
    en: "Commercial shop fit-out",
    ar: "ديكورات المحلات التجارية",
  },
  display: {
    en: "Display Units & Shelving",
    ar: "وحدات العرض والرفوف",
  },
  botella: {
    en: "Botella Gift Shop",
    ar: "محل الهدايا بوتيلا",
  },
  previousWorks: {
    en: "Commercial Shops Previous Works",
    ar: "سوابق أعمال ديكورات المحلات",
  },
} satisfies Record<string, Bilingual>;

function previousWorkItem(
  id: string,
  fileName: string,
  groupId: CommercialShopGroupId,
  groupLabel: Bilingual,
  title: Bilingual,
  caption: Bilingual,
  objectPosition = "center",
): CommercialShopGalleryItem {
  return {
    id,
    src: `${previousWorksBase}/${fileName}`,
    alt: title,
    title,
    caption,
    groupId,
    groupLabel,
    objectFit: "cover",
    objectPosition,
  };
}

function publicPhotoItem(
  id: string,
  src: string,
  groupId: CommercialShopGroupId,
  groupLabel: Bilingual,
  title: Bilingual,
  caption: Bilingual,
  objectPosition = "center",
): CommercialShopGalleryItem {
  return {
    id,
    src,
    alt: title,
    title,
    caption,
    groupId,
    groupLabel,
    objectFit: "cover",
    objectPosition,
  };
}

const aljaziraSuperSectionTitle = {
  en: "Aljazira Super Market",
  ar: "الجزيره سوبر ماركت",
} satisfies Bilingual;

const botellaGiftShopSectionTitle = {
  en: "Botella Gift Shop",
  ar: "محل الهدايا بوتيلا",
} satisfies Bilingual;

const aljaziraSuperSectionItems = [
  {
    id: "commercial-aljazira-super-01",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-shops-decor-003.jpg",
    title: {
      en: "Aljazira Super display detail 01",
      ar: "تفاصيل عرض الجزيره سوبر ماركت 01",
    },
    caption: {
      en: "A view from the Aljazira Super fit-out showing how display units support product clarity in the commercial space.",
      ar: "لقطة من تجهيز الجزيره سوبر ماركت توضح كيف تخدم وحدات العرض وضوح المنتجات داخل المساحة التجارية.",
    },
  },
  {
    id: "commercial-aljazira-super-02",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-shops-decor-004.jpg",
    title: {
      en: "Aljazira Super shelving detail 02",
      ar: "رفوف وتنظيم داخل الجزيره سوبر ماركت 02",
    },
    caption: {
      en: "Shelving and display rhythm arranged to keep the retail floor easy to read and easy to move through.",
      ar: "تنظيم للرفوف وإيقاع العرض يحافظ على سهولة قراءة المساحة وسهولة الحركة داخلها.",
    },
  },
  {
    id: "commercial-aljazira-super-03",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-shops-decor-005.jpg",
    title: {
      en: "Aljazira Super counter detail 03",
      ar: "كونترات وتجهيزات الجزيره سوبر ماركت 03",
    },
    caption: {
      en: "Counter and service-point details that support reception and daily retail use inside Aljazira Super.",
      ar: "تفاصيل الكونترات ونقاط الخدمة التي تدعم الاستقبال والاستخدام التجاري اليومي داخل الجزيره سوبر ماركت.",
    },
  },
  {
    id: "commercial-aljazira-super-04",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-shops-decor-006.jpg",
    title: {
      en: "Aljazira Super finish detail 04",
      ar: "تفاصيل تشطيب الجزيره سوبر ماركت 04",
    },
    caption: {
      en: "A commercial finishing view that helps the project keep a clean and organized retail presence.",
      ar: "لقطة من التشطيبات التجارية التي تمنح المشروع حضوراً بصرياً نظيفاً ومنظماً.",
    },
  },
  {
    id: "commercial-aljazira-super-05",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-shops-decor-007.jpg",
    title: {
      en: "Aljazira Super circulation detail 05",
      ar: "تنظيم الحركة داخل الجزيره سوبر ماركت 05",
    },
    caption: {
      en: "A view that highlights how the display layout supports circulation and product access through the shop.",
      ar: "لقطة تبرز كيف يدعم توزيع العرض حركة العملاء والوصول إلى المنتجات داخل المحل.",
    },
  },
  {
    id: "commercial-aljazira-super-06",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-shops-decor-008.jpg",
    title: {
      en: "Aljazira Super display detail 06",
      ar: "تفاصيل عرض الجزيره سوبر ماركت 06",
    },
    caption: {
      en: "Display composition within Aljazira Super that balances product visibility with a steady retail rhythm.",
      ar: "تكوين عرض داخل الجزيره سوبر ماركت يوازن بين وضوح المنتج وإيقاع العرض داخل المساحة التجارية.",
    },
  },
  {
    id: "commercial-aljazira-super-07",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-shops-decor-009.jpg",
    title: {
      en: "Aljazira Super shelving detail 07",
      ar: "رفوف وتنظيم داخل الجزيره سوبر ماركت 07",
    },
    caption: {
      en: "Shelving and merchandising details that help the products stay visible without crowding the route.",
      ar: "تفاصيل رفوف وعرض تساعد على بقاء المنتجات واضحة من دون ازدحام داخل المسار.",
    },
  },
  {
    id: "commercial-aljazira-super-08",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-shops-decor-010.jpg",
    title: {
      en: "Aljazira Super counter detail 08",
      ar: "كونترات وتجهيزات الجزيره سوبر ماركت 08",
    },
    caption: {
      en: "Commercial counter details that support clearer service points and daily retail operation.",
      ar: "تفاصيل كونترات تجارية تدعم وضوح نقاط الخدمة والتشغيل اليومي داخل المحل.",
    },
  },
  {
    id: "commercial-aljazira-super-09",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-shops-decor-011.jpg",
    title: {
      en: "Aljazira Super finish detail 09",
      ar: "تفاصيل تشطيب الجزيره سوبر ماركت 09",
    },
    caption: {
      en: "A finishing view that shows how material tone and execution strengthen the commercial presentation.",
      ar: "لقطة من التشطيبات توضح كيف تدعم الخامات والتنفيذ حضور النشاط التجاري داخل المساحة.",
    },
  },
  {
    id: "commercial-aljazira-super-10",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-jazira-super-001.jpeg",
    title: {
      en: "Aljazira Super display detail 10",
      ar: "تفاصيل عرض الجزيره سوبر ماركت 10",
    },
    caption: {
      en: "An additional Aljazira Super view showing product presentation and shelf coordination across the store.",
      ar: "لقطة إضافية من الجزيره سوبر ماركت توضح تقديم المنتجات وتنسيق الرفوف داخل المحل.",
    },
  },
  {
    id: "commercial-aljazira-super-11",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-jazira-super-002.jpeg",
    title: {
      en: "Aljazira Super shelving detail 11",
      ar: "رفوف وتنظيم داخل الجزيره سوبر ماركت 11",
    },
    caption: {
      en: "Shelving and layout choices arranged to keep the commercial floor organized and readable.",
      ar: "اختيارات الرفوف وتوزيعها تساعد على إبقاء المساحة التجارية منظمة وواضحة.",
    },
  },
  {
    id: "commercial-aljazira-super-12",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-jazira-super-003.jpeg",
    title: {
      en: "Aljazira Super counter detail 12",
      ar: "كونترات وتجهيزات الجزيره سوبر ماركت 12",
    },
    caption: {
      en: "A service and counter view that supports reception clarity and product handling inside the space.",
      ar: "لقطة للكونترات والخدمة تدعم وضوح الاستقبال والتعامل مع المنتجات داخل المساحة.",
    },
  },
  {
    id: "commercial-aljazira-super-13",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-jazira-super-004.jpeg",
    title: {
      en: "Aljazira Super finish detail 13",
      ar: "تفاصيل تشطيب الجزيره سوبر ماركت 13",
    },
    caption: {
      en: "A finishing detail that helps the project keep a clean and consistent commercial presence.",
      ar: "تفاصيل تشطيب تساعد المشروع على الحفاظ على حضور تجاري نظيف ومتناسق.",
    },
  },
  {
    id: "commercial-aljazira-super-14",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-jazira-super-005.jpeg",
    title: {
      en: "Aljazira Super circulation detail 14",
      ar: "تنظيم الحركة داخل الجزيره سوبر ماركت 14",
    },
    caption: {
      en: "A view that highlights the circulation path between display units and daily shopping movement.",
      ar: "لقطة تبرز مسار الحركة بين وحدات العرض وحركة التسوق اليومية داخل المحل.",
    },
  },
  {
    id: "commercial-aljazira-super-15",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-jazira-super-010.jpeg",
    title: {
      en: "Aljazira Super circulation detail 15",
      ar: "تنظيم الحركة داخل الجزيره سوبر ماركت 15",
    },
    caption: {
      en: "A circulation view that highlights product presentation and retail organization inside Aljazira Super.",
      ar: "لقطة لمسار الحركة وتقديم المنتجات والتنظيم التجاري داخل الجزيره سوبر ماركت.",
    },
  },
  {
    id: "commercial-aljazira-super-16",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-jazira-super-011.jpeg",
    title: {
      en: "Aljazira Super display detail 16",
      ar: "تفاصيل عرض الجزيره سوبر ماركت 16",
    },
    caption: {
      en: "A product-display detail from Aljazira Super that keeps the commercial floor easy to scan and navigate.",
      ar: "تفاصيل عرض من الجزيره سوبر ماركت تحافظ على سهولة قراءة المساحة والتنقل داخلها.",
    },
  },
  {
    id: "commercial-aljazira-super-17",
    src: "/images/capital-oasis/website-photos/commercial-shops/commercial-jazira-super-012.jpeg",
    title: {
      en: "Aljazira Super shelving detail 17",
      ar: "رفوف وتنظيم داخل الجزيره سوبر ماركت 17",
    },
    caption: {
      en: "Shelving and display details that support orderly presentation across the store experience.",
      ar: "تفاصيل رفوف وعرض تدعم تقديم المنتجات بصورة مرتبة على امتداد تجربة التسوق.",
    },
  },
  {
    id: "commercial-aljazira-super-18",
    src: "/images/capital-oasis/website-photos/commercial-shops/aljazira-super/aljazira-super-022.jpeg",
    title: {
      en: "Aljazira Super fit-out detail 18",
      ar: "تفاصيل تجهيز الجزيره سوبر ماركت 18",
    },
    caption: {
      en: "An added source image from the Aljazira Super project showing more of the retail fit-out and display organization.",
      ar: "صورة مضافة من مصدر مشروع الجزيره سوبر ماركت توضح جانباً إضافياً من التجهيز التجاري وتنظيم العرض.",
    },
  },
].map((item) =>
  publicPhotoItem(
    item.id,
    item.src,
    "commercial-display-shelving",
    aljaziraSuperSectionTitle,
    item.title,
    item.caption,
  ),
);

export const commercialAljaziraSuperUpdatedItems = [
  "/images/capital-oasis/website-photos/commercial-shops/aljazira-super/aljazira-super-arranged-20260712-01.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/aljazira-super/aljazira-super-arranged-20260712-02.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/aljazira-super/aljazira-super-arranged-20260712-03.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/aljazira-super/aljazira-super-arranged-20260712-04.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/aljazira-super/aljazira-super-arranged-20260712-05.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/aljazira-super/aljazira-super-arranged-20260712-06.jpg",
  "/images/capital-oasis/website-photos/commercial-shops/aljazira-super/aljazira-super-arranged-20260712-07.jpg",
  "/images/capital-oasis/website-photos/commercial-shops/aljazira-super/aljazira-super-arranged-20260712-08.jpg",
  "/images/capital-oasis/website-photos/commercial-shops/aljazira-super/aljazira-super-arranged-20260712-09.jpg",
  "/images/capital-oasis/website-photos/commercial-shops/aljazira-super/aljazira-super-arranged-20260712-10.jpg",
  "/images/capital-oasis/website-photos/commercial-shops/aljazira-super/aljazira-super-arranged-20260712-11.jpg",
].map((src, index) =>
  publicPhotoItem(
    `commercial-aljazira-super-updated-${String(index + 1).padStart(2, "0")}`,
    src,
    "commercial-display-shelving",
    aljaziraSuperSectionTitle,
    [
      { en: "Central display counter with glass cases", ar: "كاونتر عرض مركزي بواجهات زجاجية" },
      { en: "Display island aligned with the retail path", ar: "جزيرة عرض منظمة ضمن مسار التسوق" },
      { en: "Corner counter with open shelving", ar: "كاونتر زاوية مع رفوف مفتوحة" },
      { en: "Glass-front display zone", ar: "منطقة عرض بواجهات زجاجية" },
      { en: "Retail island with an illuminated base", ar: "جزيرة عرض بقاعدة مضاءة" },
      { en: "Entry-facing service kiosk", ar: "كشك خدمة مواجه للمدخل" },
      { en: "Compact timber service kiosk", ar: "كشك خدمة مدمج بتشطيب خشبي" },
      { en: "Organized wall display zone", ar: "منطقة عرض جدارية منظمة" },
      { en: "Long wall shelving with base storage", ar: "رفوف جدارية ممتدة مع تخزين سفلي" },
      { en: "Open shelving run for product display", ar: "امتداد رفوف مفتوحة لعرض المنتجات" },
      { en: "Retail display wall with service counter", ar: "جدار عرض تجاري مع كاونتر خدمة" },
    ][index],
    {
      en: "A selected Aljazira Super Market view showing how display, shelving, service, and circulation work together.",
      ar: "لقطة مختارة من الجزيره سوبر ماركت توضح تكامل العرض والرفوف والخدمة وحركة التسوق داخل المساحة.",
    },
  ),
);

export const commercialBotellaGiftShopItems = [
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-01.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-02.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-03.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-04.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-05.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-06.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-07.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-08.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-09.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-10.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-11.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-12.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-13.jpg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-14.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-15.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-16.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-17.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-18.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-19.jpeg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-20.jpg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-21.jpg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-22.jpg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-23.jpg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-24.jpg",
  "/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-arranged-20260712-25.jpg",
].map((src, index) =>
  publicPhotoItem(
    `commercial-botella-gift-shop-${String(index + 1).padStart(2, "0")}`,
    src,
    "commercial-botella-gift-shop",
    botellaGiftShopSectionTitle,
    [
      { en: "Front-facing display detail", ar: "تفصيلة عرض أمامية" },
      { en: "Built-in display wall", ar: "جدار عرض مدمج" },
      { en: "Service counter with a clear customer edge", ar: "كاونتر خدمة بحافة واضحة أمام العميل" },
      { en: "Retail wall with lower storage", ar: "جدار تجاري مع تخزين سفلي" },
      { en: "Open shelving for product presentation", ar: "رفوف مفتوحة لتقديم المنتجات" },
      { en: "Counter detail shaped for daily service", ar: "تفصيلة كاونتر مهيأة للخدمة اليومية" },
      { en: "Slatwall display zone", ar: "منطقة عرض بجدار شرائح" },
      { en: "Central service and display area", ar: "منطقة خدمة وعرض مركزية" },
      { en: "Compact retail display composition", ar: "تكوين عرض تجاري مدمج" },
      { en: "Wall-mounted product display", ar: "عرض منتجات مثبت على الجدار" },
      { en: "Counter and shelving coordination", ar: "تنسيق بين الكاونتر والرفوف" },
      { en: "Entrance-side display detail", ar: "تفصيلة عرض بجوار المدخل" },
      { en: "Material and finish detail", ar: "تفصيلة خامة وتشطيب" },
      { en: "Service zone with open shelving", ar: "منطقة خدمة مع رفوف مفتوحة" },
      { en: "Display wall with integrated storage", ar: "جدار عرض مع تخزين مدمج" },
      { en: "Linear shelving and counter rhythm", ar: "إيقاع خطي للرفوف والكاونتر" },
      { en: "Clear retail circulation", ar: "مسار حركة تجاري واضح" },
      { en: "Retail wall and service detail", ar: "تفصيلة جدار تجاري وخدمة" },
      { en: "Final display composition", ar: "التكوين النهائي لمنطقة العرض" },
      { en: "Freestanding kiosk with timber finish", ar: "كشك مستقل بتشطيب خشبي" },
      { en: "Long slatwall display with base storage", ar: "جدار شرائح ممتد مع تخزين سفلي" },
      { en: "Open retail wall with service counter", ar: "جدار عرض مفتوح مع كاونتر خدمة" },
      { en: "Slatwall and counter detail", ar: "تفصيلة جدار شرائح وكونتر" },
      { en: "Retail aisle with coordinated display", ar: "ممر تجاري مع عرض منسق" },
      { en: "Completed display wall and service run", ar: "جدار عرض مكتمل وامتداد خدمة" },
    ][index],
    {
      en: "A selected Botella Gift Shop view showing how display, shelving, service, and finish support a clear customer experience.",
      ar: "لقطة مختارة من محل الهدايا بوتيلا توضح كيف يخدم العرض والرفوف والخدمة والتشطيب تجربة عميل واضحة.",
    },
  ),
);

export const commercialShopsHeroItems = [
  previousWorkItem(
    "commercial-decoration-02",
    "commercial-decoration-02-website-previous-work.webp",
    "commercial-shops-hero",
    groups.hero,
    {
      en: "Retail wall system with long display rhythm",
      ar: "نظام عرض جداري بإيقاع طويل داخل المحل",
    },
    {
      en: "A spacious executed fit-out that balances wall display, lighting rhythm, and smooth customer movement.",
      ar: "تنفيذ واسع يوازن بين جدران العرض والإضاءة المنتظمة ومسار الحركة داخل المساحة التجارية.",
    },
    "center 44%",
  ),
  previousWorkItem(
    "shop-fitout-04",
    "shop-fitout-04-website-previous-work.webp",
    "commercial-shops-hero",
    groups.hero,
    {
      en: "Display island with branded counter detail",
      ar: "جزيرة عرض مع تفصيلة كاونتر واضحة",
    },
    {
      en: "An executed counter solution that supports product visibility and daily retail service.",
      ar: "حل كاونتر منفذ يدعم إبراز المنتجات وخدمة البيع اليومية داخل المحل.",
    },
    "center 46%",
  ),
  previousWorkItem(
    "commercial-decoration-01",
    "commercial-decoration-01-website-previous-work.webp",
    "commercial-shops-hero",
    groups.hero,
    {
      en: "Retail interior with calm material balance",
      ar: "تجهيز داخلي للمحل بتوازن هادئ للخامات",
    },
    {
      en: "A premium commercial interior direction with clean wall systems and measured circulation.",
      ar: "اتجاه تجاري راقٍ يجمع بين جدران العرض النظيفة ومساحات حركة مدروسة داخل المحل.",
    },
    "center 52%",
  ),
];

export const commercialShopsEditorialSections: CommercialShopEditorialSection[] =
  [
    {
      id: "commercial-display-shelving",
      eyebrow: {
        en: "A retail project with a clear commercial rhythm",
        ar: "مشروع تجاري بإيقاع عرض واضح",
      },
      title: aljaziraSuperSectionTitle,
      text: {
        en: "Selected views from the Aljazira Super Market fit-out, where display units, shelving, counters, and circulation are coordinated to keep the store easy to read and easy to move through.",
        ar: "لقطات مختارة من تجهيز الجزيره سوبر ماركت، حيث تتكامل وحدات العرض والرفوف والكونترات ومسارات الحركة لتبقى المساحة واضحة وسهلة الاستخدام.",
      },
      benefits: [
        {
          en: "Display planning that keeps products easy to read",
          ar: "تخطيط عرض يحافظ على وضوح المنتجات",
        },
        {
          en: "Shelving and counters coordinated for daily use",
          ar: "تنسيق الرفوف والكونترات بما يخدم الاستخدام اليومي",
        },
        {
          en: "A clear path through the shopping experience",
          ar: "مسار واضح خلال تجربة التسوق",
        },
        {
          en: "Finishes that keep the retail presence considered",
          ar: "تشطيبات تحافظ على حضور تجاري محسوب",
        },
      ],
      serviceTags: [
        { en: "Display systems", ar: "أنظمة عرض" },
        { en: "Retail shelving", ar: "رفوف تجارية" },
        { en: "Service counters", ar: "كاونترات خدمة" },
        { en: "Customer circulation", ar: "حركة العملاء" },
        { en: "Commercial finishes", ar: "تشطيبات تجارية" },
      ],
      ctaLabel: {
        en: "Explore the Aljazira Super Market project",
        ar: "استعرض تفاصيل الجزيره سوبر ماركت",
      },
      items: commercialAljaziraSuperUpdatedItems,
    },
  ];

export const commercialShopsPreviousWorksItems = [
  previousWorkItem(
    "commercial-decoration-01-previous",
    "commercial-decoration-01-website-previous-work.webp",
    "commercial-shops-previous-works",
    groups.previousWorks,
    {
      en: "Executed retail interior with display rhythm",
      ar: "تنفيذ داخلي للمحل بإيقاع عرض منظم",
    },
    {
      en: "Executed shop fit-out with clear walls, floor circulation, and premium presentation points.",
      ar: "تنفيذ محل تجاري بجدران واضحة ومسارات حركة مريحة ونقاط عرض راقية.",
    },
    "center 54%",
  ),
  previousWorkItem(
    "commercial-decoration-02-previous",
    "commercial-decoration-02-website-previous-work.webp",
    "commercial-shops-previous-works",
    groups.previousWorks,
    {
      en: "Retail wall system with long shelving line",
      ar: "نظام عرض جداري بخط رفوف طويل",
    },
    {
      en: "A spacious executed wall direction that keeps products visible across a long customer path.",
      ar: "اتجاه عرض جداري منفذ يحافظ على وضوح المنتجات على امتداد مسار العميل داخل المحل.",
    },
    "center 45%",
  ),
  previousWorkItem(
    "commercial-decoration-03-previous",
    "commercial-decoration-03-website-previous-work.webp",
    "commercial-shops-previous-works",
    groups.previousWorks,
    {
      en: "Calm commercial wall segment",
      ar: "قطاع عرض تجاري هادئ",
    },
    {
      en: "Executed detailing that supports a calmer product rhythm inside the commercial floor.",
      ar: "تفاصيل منفذة تدعم إيقاعاً أهدأ للمنتج داخل المساحة التجارية.",
    },
  ),
  previousWorkItem(
    "commercial-decoration-04-previous",
    "commercial-decoration-04-website-previous-work.webp",
    "commercial-shops-previous-works",
    groups.previousWorks,
    {
      en: "Display wall with upper storage line",
      ar: "جدار عرض مع خط تخزين علوي",
    },
    {
      en: "A practical executed wall that combines display, storage support, and a tidy visual rhythm.",
      ar: "جدار منفذ يجمع بين العرض والتخزين المساند والإيقاع البصري المرتب داخل المحل.",
    },
  ),
  previousWorkItem(
    "commercial-decoration-05-previous",
    "commercial-decoration-05-website-previous-work.webp",
    "commercial-shops-previous-works",
    groups.previousWorks,
    {
      en: "Central retail counter element",
      ar: "عنصر كاونتر مركزي داخل المحل",
    },
    {
      en: "A freestanding retail piece that helps anchor circulation and product interaction.",
      ar: "عنصر تجاري حر يثبت حركة العميل ويعزز التفاعل مع المنتج داخل المساحة.",
    },
  ),
  previousWorkItem(
    "commercial-decoration-06-previous",
    "commercial-decoration-06-website-previous-work.webp",
    "commercial-shops-previous-works",
    groups.previousWorks,
    {
      en: "Retail interior with vertical merchandising",
      ar: "داخلية محل بعرض رأسي للمنتجات",
    },
    {
      en: "Executed fit-out that strengthens product visibility without crowding the floor.",
      ar: "تنفيذ يعزز وضوح المنتج دون تحميل أرضية المحل ازدحاماً بصرياً إضافياً.",
    },
  ),
  previousWorkItem(
    "shop-fitout-01-previous",
    "shop-fitout-01-website-previous-work.webp",
    "commercial-shops-previous-works",
    groups.previousWorks,
    {
      en: "Executed display counter with glass enclosure",
      ar: "كاونتر عرض منفذ بواجهة زجاجية",
    },
    {
      en: "An executed service counter that balances display, working space, and a clean commercial edge.",
      ar: "كاونتر خدمة منفذ يوازن بين العرض ومساحة العمل والحافة التجارية النظيفة.",
    },
    "center 48%",
  ),
  previousWorkItem(
    "shop-fitout-02-previous",
    "shop-fitout-02-website-previous-work.webp",
    "commercial-shops-previous-works",
    groups.previousWorks,
    {
      en: "Retail island with accessible open shelving",
      ar: "جزيرة عرض مع رفوف مفتوحة سهلة الوصول",
    },
    {
      en: "A practical executed island for activities that need access and display from more than one side.",
      ar: "جزيرة منفذة مناسبة للأنشطة التي تحتاج إلى العرض والوصول من أكثر من جهة داخل المحل.",
    },
    "center 46%",
  ),
  previousWorkItem(
    "shop-fitout-04-previous",
    "shop-fitout-04-website-previous-work.webp",
    "commercial-shops-previous-works",
    groups.previousWorks,
    {
      en: "Display counter with refined illuminated base",
      ar: "كاونتر عرض بقاعدة مضاءة راقية",
    },
    {
      en: "Executed retail detailing that gives the service zone more presence without clutter.",
      ar: "تفصيل منفذ يمنح منطقة الخدمة حضوراً أوضح داخل المحل دون إرباك بصري.",
    },
    "center 46%",
  ),
  previousWorkItem(
    "shop-fitout-05-previous",
    "shop-fitout-05-website-previous-work.webp",
    "commercial-shops-previous-works",
    groups.previousWorks,
    {
      en: "Counter top with stronger finish contrast",
      ar: "كاونتر بتباين تشطيب أوضح",
    },
    {
      en: "A commercial counter direction that gives the transaction area more definition and control.",
      ar: "اتجاه كاونتر تجاري يمنح منطقة البيع تحديداً أقوى وإحساساً أكثر انضباطاً.",
    },
  ),
  previousWorkItem(
    "shop-fitout-06-previous",
    "shop-fitout-06-website-previous-work.webp",
    "commercial-shops-previous-works",
    groups.previousWorks,
    {
      en: "Daily-service counter with side shelving",
      ar: "كاونتر خدمة يومية مع رفوف جانبية",
    },
    {
      en: "An executed daily-use unit prepared for stocking, service, and repeated customer interaction.",
      ar: "وحدة منفذة مهيأة للتخزين والخدمة والتعامل المتكرر مع العميل ضمن النشاط اليومي.",
    },
  ),
  previousWorkItem(
    "shop-fitout-07-previous",
    "shop-fitout-07-website-previous-work.webp",
    "commercial-shops-previous-works",
    groups.previousWorks,
    {
      en: "Open product shelving with tidy lines",
      ar: "رفوف منتج مفتوحة بخطوط مرتبة",
    },
    {
      en: "A shelving direction that keeps product access easy without sacrificing visual order.",
      ar: "اتجاه رفوف يحافظ على سهولة الوصول إلى المنتج دون خسارة النظام البصري داخل المحل.",
    },
  ),
  previousWorkItem(
    "shop-fitout-08-previous",
    "shop-fitout-08-website-previous-work.webp",
    "commercial-shops-previous-works",
    groups.previousWorks,
    {
      en: "Retail display composition with structured rhythm",
      ar: "تكوين عرض تجاري بإيقاع منظم",
    },
    {
      en: "An executed arrangement that helps products stay readable across a more active commercial floor.",
      ar: "ترتيب منفذ يساعد على بقاء المنتج مقروءاً وواضحاً حتى في المساحات التجارية الأكثر نشاطاً.",
    },
  ),
];

export const commercialShopsVideoIds = [
  "pw-commercial-shops",
  "pw-botella-store",
  "pw-commercial-restaurant",
] as const;

export const commercialShopsHeldBackVideoIds = [] as const;

export const commercialShopsVideoCards: {
  featured: CommercialShopVideoCard;
  supporting: CommercialShopVideoCard;
} = {
  featured: {
    badge: {
      en: "Aljazira Super Market project",
      ar: "مشروع الجزيره سوبر ماركت",
    },
    title: {
      en: "Aljazira Super Market fit-out",
      ar: "تجهيز الجزيره سوبر ماركت",
    },
    description: {
      en: "A commercial fit-out where display units, counters, and circulation are coordinated around the store experience.",
      ar: "تجهيز تجاري تتكامل فيه وحدات العرض والكاونترات والحركة حول تجربة المتجر.",
    },
  },
  supporting: {
    badge: {
      en: "Botella Gift Shop project",
      ar: "مشروع محل الهدايا بوتيلا",
    },
    title: {
      en: "Botella Gift Shop fit-out",
      ar: "تجهيز محل الهدايا بوتيلا",
    },
    description: {
      en: "A gift-shop fit-out with organized display details and a considered retail presence from entry to service.",
      ar: "تجهيز متجر هدايا بتفاصيل عرض منظمة وحضور تجاري محسوب من المدخل إلى منطقة الخدمة.",
    },
  },
};

export const commercialShopsPageContent = {
  hero: {
    eyebrow: {
      en: "Commercial fit-out shaped around how the space performs",
      ar: "تجهيز تجاري مصمم حول أداء المساحة",
    },
    title: {
      en: "Commercial spaces with a clearer identity and a more deliberate customer journey.",
      ar: "مساحات تجارية بهوية أوضح ورحلة عميل أكثر انسيابية",
    },
    text: {
      en: "We coordinate storefronts, display units, counters, and product flow around the activity, customer journey, and everyday operation.",
      ar: "ننسق الواجهات ووحدات العرض والكاونترات وحركة المنتجات حول طبيعة النشاط ورحلة العميل ومتطلبات التشغيل اليومية.",
    },
    primaryCta: {
      en: "Shape Your Commercial Space",
      ar: "صمّم مساحتك التجارية",
    },
    secondaryCta: {
      en: "Explore Executed Projects",
      ar: "استعرض المشاريع المنفذة",
    },
    chips: [
      { en: "Display walls with retail rhythm", ar: "جدران عرض بإيقاع تجاري واضح" },
      { en: "Counters and POS zones", ar: "كاونترات ومناطق نقاط البيع" },
      { en: "Supply and installation guidance", ar: "إرشاد في التوريد والتركيب" },
    ],
  },
  previousWorks: {
    eyebrow: {
      en: "Executed commercial projects",
      ar: "أعمال تجارية منفذة",
    },
    title: groups.previousWorks,
    text: {
      en: "A focused gallery of executed shops, from display planning and customer flow to the service points that keep the space working.",
      ar: "معرض مركز لأعمال محلات منفذة، من تخطيط العرض وحركة العملاء إلى نقاط الخدمة التي تحافظ على كفاءة المساحة.",
    },
    checklist: [
      { en: "Clear shop-focused executed media", ar: "صور تنفيذ واضحة تخص المحلات" },
      { en: "Counters, walls, and shelving details", ar: "تفاصيل الكاونترات والجدران والرفوف" },
      { en: "Commercial circulation and display rhythm", ar: "إيقاع الحركة والعرض داخل المساحة" },
      { en: "Premium finishes that still feel practical", ar: "تشطيبات راقية تبقى عملية" },
    ],
  },
  video: {
    eyebrow: {
      en: "Project films from the commercial portfolio",
      ar: "أفلام من مشاريع التجهيز التجاري",
    },
    title: {
      en: "Commercial spaces where presentation and operation work as one.",
      ar: "مساحات تجارية يتكامل فيها العرض مع التشغيل",
    },
    text: {
      en: "These films show how storefronts, display units, counters, and finishes come together to support the activity and guide the customer experience.",
      ar: "توضح هذه الأفلام كيف تتكامل الواجهة ووحدات العرض والكاونترات والتشطيبات لخدمة النشاط وتوجيه تجربة العميل.",
    },
    trustPoints: [
      {
        en: "Final commercial fit-outs ready for presentation",
        ar: "تجهيزات نهائية جاهزة للعرض",
      },
      {
        en: "A clear focus on storefronts, display units, and counters",
        ar: "تركيز على الواجهة ووحدات العرض والكاونترات",
      },
      {
        en: "Finish details that support customer movement inside the space",
        ar: "تفاصيل تخدم حركة العميل داخل المساحة",
      },
    ],
  },
  cta: {
    eyebrow: {
      en: "Start with the brief, dimensions, and daily needs",
      ar: "ابدأ من المتطلبات والمقاسات وطريقة التشغيل",
    },
    title: {
      en: "Define a commercial direction that feels clear from the first conversation.",
      ar: "لنحدد اتجاهاً تجارياً واضحاً من أول محادثة",
    },
    text: {
      en: "Share the activity, dimensions, and operational priorities so the right balance of display, service, and identity can be shaped with care.",
      ar: "أرسل نوع النشاط والمقاسات وأولويات التشغيل لنصوغ التوازن المناسب بين العرض والخدمة والهوية بعناية.",
    },
    cta: {
      en: "Get a Commercial Quote",
      ar: "احصل على عرض تجاري",
    },
    call: {
      en: "Call Us",
      ar: "اتصل بنا",
    },
  },
};
