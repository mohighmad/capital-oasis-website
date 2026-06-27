import type { Bilingual } from "./content";
import { assets } from "./assets";

export type HomepageCategory = {
  id: string;
  title: Bilingual;
  description: Bilingual;
  image: string;
  alt: Bilingual;
  href: string;
  objectPosition?: string;
};

export const homepageCategories: HomepageCategory[] = [
  {
    id: "doors",
    title: { ar: "الأبواب", en: "Doors" },
    description: {
      ar: "أبواب خشبية وWPC وPVC مع التوريد والتركيب للمشاريع السكنية والتجارية.",
      en: "Internal, WPC, and PVC doors supplied and installed for residential and commercial projects.",
    },
    image: assets.doors.projects[6],
    alt: {
      ar: "أبواب خشبية منفذة بتشطيب خشبي",
      en: "Completed wooden doors with a wood finish",
    },
    href: "#doors",
  },
  {
    id: "kitchens",
    title: { ar: "المطابخ", en: "Kitchens" },
    description: {
      ar: "مطابخ خشبية مخصصة بتوزيع عملي وتشطيبات مناسبة للاستخدام اليومي.",
      en: "Custom wooden kitchens with practical layouts and durable everyday finishes.",
    },
    image: assets.decor.projects[5],
    alt: {
      ar: "مطبخ خشبي مخصص منفذ بخزائن وتشطيبات رخامية",
      en: "Completed custom wooden kitchen with marble-look finishes",
    },
    href: "#furniture",
  },
  {
    id: "dressing-rooms",
    title: { ar: "غرف الملابس", en: "Dressing Rooms" },
    description: {
      ar: "تصاميم حسب المساحة مع تقسيمات تخزين ذكية وتشطيبات عصرية.",
      en: "Made-to-measure designs with smart storage planning and contemporary finishes.",
    },
    image: assets.furniture.dressingRooms[1],
    alt: {
      ar: "تصميم غرفة ملابس عصرية بخزائن مخصصة",
      en: "Contemporary dressing room design with custom wardrobes",
    },
    href: "#furniture",
  },
  {
    id: "tv-units",
    title: { ar: "وحدات التلفزيون", en: "TV Units" },
    description: {
      ar: "وحدات تلفزيون وتكسيات جدارية تجمع بين الشكل الأنيق والاستخدام العملي.",
      en: "TV units and media walls combining elegant styling with practical storage.",
    },
    image: assets.furniture.tvUnits[2],
    alt: {
      ar: "تصميم وحدة تلفزيون عصرية بتكسيات خشبية",
      en: "Modern TV unit design with wooden wall cladding",
    },
    href: "#furniture",
  },
  {
    id: "commercial-decorations",
    title: { ar: "ديكورات المحلات", en: "Commercial Decorations" },
    description: {
      ar: "كاونترات ووحدات عرض وتجهيزات داخلية تعكس هوية النشاط التجاري.",
      en: "Counters, display units, and interior fit-outs shaped around the business identity.",
    },
    image: assets.commercial.decorations[1],
    alt: {
      ar: "ديكور محل تجاري منفذ بوحدات عرض مخصصة",
      en: "Completed commercial shop with custom display units",
    },
    href: "#commercial",
  },
  {
    id: "event-setup",
    title: { ar: "ديكورات معارض وفعاليات", en: "Exhibition Decor & Events" },
    description: {
      ar: "خلفيات وديكور وإضاءة وتجهيز مساحات تناسب هوية المناسبة.",
      en: "Backdrops, decoration, lighting, and space preparation tailored to the occasion.",
    },
    image: assets.events.images[3],
    alt: {
      ar: "خلفية فعالية مضاءة بألواح ديكور هندسية",
      en: "Illuminated event backdrop with geometric decorative panels",
    },
    href: "#events",
  },
  {
    id: "wall-cladding-decor",
    title: { ar: "الأثاث السكني والفندقي", en: "Residential & Hotel Furniture" },
    description: {
      ar: "تصميم وتصنيع أثاث سكني وفندقي بجودة عالية وتفاصيل مخصصة.",
      en: "Custom residential and hotel furniture crafted with premium quality.",
    },
    image: assets.furniture.custom[2],
    alt: {
      ar: "خزائن وأثاث سكني مخصص بتكسيات خشبية وتشطيب راقٍ",
      en: "Custom residential furniture and wardrobe with wood cladding and a refined finish",
    },
    href: "#furniture",
  },
];
