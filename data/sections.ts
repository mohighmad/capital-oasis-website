import type { Bilingual } from "./content";

export type SectionSubcategory = {
  id: string;
  title: Bilingual;
};

export type SiteSection = {
  id:
    | "doors"
    | "dressing-rooms"
    | "kitchens"
    | "commercial-shops"
    | "events"
    | "other-services";
  href: string;
  title: Bilingual;
  shortDescription: Bilingual;
  categoryType: "core-product" | "interior-solution" | "fit-out" | "event-solution" | "support-service";
  ctaLabel: Bilingual;
  subcategories?: SectionSubcategory[];
  seoIntent: Bilingual;
  priority: number;
};

export const siteSections: SiteSection[] = [
  {
    id: "doors",
    href: "/doors",
    title: { ar: "الأبواب", en: "Doors" },
    shortDescription: {
      ar: "حلول أبواب داخلية وخارجية مع مسارات تنفيذ مخصصة للمشاريع السكنية والتجارية.",
      en: "Interior and exterior door solutions prepared for residential and commercial project delivery.",
    },
    categoryType: "core-product",
    ctaLabel: { ar: "استكشف القسم", en: "Explore Section" },
    subcategories: [
      { id: "wpc", title: { ar: "WPC", en: "WPC" } },
      { id: "pvc", title: { ar: "PVC", en: "PVC" } },
      { id: "wood", title: { ar: "Wood", en: "Wood" } },
    ],
    seoIntent: {
      ar: "أبواب WPC وPVC وخشب في الرياض",
      en: "WPC, PVC, and wood doors in Riyadh",
    },
    priority: 1,
  },
  {
    id: "dressing-rooms",
    href: "/dressing-rooms",
    title: { ar: "غرف الملابس", en: "Dressing Rooms" },
    shortDescription: {
      ar: "تصميمات تخزين عملية بتفاصيل راقية تناسب المساحات السكنية الخاصة.",
      en: "Refined storage-led layouts designed for private residential spaces.",
    },
    categoryType: "interior-solution",
    ctaLabel: { ar: "استكشف القسم", en: "Explore Section" },
    seoIntent: {
      ar: "غرف ملابس مخصصة في الرياض",
      en: "Custom dressing rooms in Riyadh",
    },
    priority: 2,
  },
  {
    id: "kitchens",
    href: "/kitchens",
    title: { ar: "المطابخ", en: "Kitchens" },
    shortDescription: {
      ar: "مطابخ مخصصة تجمع بين الاستخدام العملي والتفاصيل الخشبية النظيفة.",
      en: "Custom kitchens balancing practical planning with clean premium joinery.",
    },
    categoryType: "interior-solution",
    ctaLabel: { ar: "استكشف القسم", en: "Explore Section" },
    seoIntent: {
      ar: "مطابخ مخصصة في الرياض",
      en: "Custom kitchens in Riyadh",
    },
    priority: 3,
  },
  {
    id: "commercial-shops",
    href: "/commercial-shops",
    title: { ar: "ديكورات المحلات التجارية", en: "Commercial Shops" },
    shortDescription: {
      ar: "تهيئة مساحات تجارية ووحدات عرض تدعم هوية النشاط بشكل منظم وواضح.",
      en: "Retail fit-out and display environments shaped around the business identity.",
    },
    categoryType: "fit-out",
    ctaLabel: { ar: "استكشف القسم", en: "Explore Section" },
    seoIntent: {
      ar: "ديكورات وتجهيزات محلات تجارية في الرياض",
      en: "Commercial shop fit-out in Riyadh",
    },
    priority: 4,
  },
  {
    id: "events",
    href: "/events",
    title: { ar: "حفلات وفعاليات ومعارض", en: "Events, Exhibitions & Celebrations" },
    shortDescription: {
      ar: "مسارات تنظيم وتجهيز للمناسبات والفعاليات والمعارض بهوية تنفيذية متماسكة.",
      en: "Execution-ready event, exhibition, and celebration setups with a cohesive presentation direction.",
    },
    categoryType: "event-solution",
    ctaLabel: { ar: "استكشف القسم", en: "Explore Section" },
    seoIntent: {
      ar: "تجهيز فعاليات ومعارض واحتفالات في الرياض",
      en: "Events, exhibitions, and celebrations in Riyadh",
    },
    priority: 5,
  },
  {
    id: "other-services",
    href: "/other-services",
    title: { ar: "خدمات أخرى", en: "Other Services" },
    shortDescription: {
      ar: "مساحة مخصصة للخدمات المساندة والحلول الخاصة التي لا تندرج تحت الأقسام الرئيسية.",
      en: "A focused route for supporting services and special requests outside the main sections.",
    },
    categoryType: "support-service",
    ctaLabel: { ar: "استكشف القسم", en: "Explore Section" },
    seoIntent: {
      ar: "خدمات تنفيذ وتفصيل إضافية في الرياض",
      en: "Additional project services in Riyadh",
    },
    priority: 6,
  },
];

export const orderedSiteSections = [...siteSections].sort(
  (left, right) => left.priority - right.priority,
);

export const primaryNavItems = [
  { href: "/", label: { ar: "الرئيسية", en: "Home" } },
  ...orderedSiteSections.map((section) => ({
    href: section.href,
    label: section.title,
  })),
  { href: "/#contact", label: { ar: "تواصل معنا", en: "Contact" } },
];

export function getSectionById(sectionId: SiteSection["id"]) {
  const section = siteSections.find((entry) => entry.id === sectionId);

  if (!section) {
    throw new Error(`Unknown section id: ${sectionId}`);
  }

  return section;
}
