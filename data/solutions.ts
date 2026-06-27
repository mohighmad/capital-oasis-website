import { assets } from "./assets";
import type { Bilingual } from "./content";

export type FeaturedSolution = {
  id: string;
  title: Bilingual;
  description: Bilingual;
  features: Bilingual[];
  image: string;
  alt: Bilingual;
  href: string;
};

export type WorkCollection = {
  id: string;
  title: Bilingual;
  description: Bilingual;
  image: string;
  alt: Bilingual;
  href: string;
  objectPosition?: string;
};

export const featuredSolutions: FeaturedSolution[] = [
  {
    id: "wpc-pvc-doors",
    title: { ar: "أبواب WPC و PVC", en: "WPC & PVC Doors" },
    description: {
      ar: "حلول أبواب عملية للمنازل والمشاريع، بخيارات متينة وتشطيب احترافي.",
      en: "Practical door solutions for homes and projects with durable options and professional finishing.",
    },
    features: [
      { ar: "مقاومة للماء والرطوبة", en: "Water and moisture resistant" },
      { ar: "إطارات وأقفال وإكسسوارات", en: "Frames, locks, and accessories" },
      { ar: "توريد وتركيب احترافي", en: "Professional supply and installation" },
    ],
    image: assets.doors.projects[8],
    alt: {
      ar: "مشروع أبواب WPC وPVC من كابيتال واسي",
      en: "Capital Oasis WPC and PVC doors project",
    },
    href: "#doors",
  },
  {
    id: "custom-kitchens",
    title: { ar: "مطابخ حسب الطلب", en: "Custom Kitchens" },
    description: {
      ar: "مطابخ مصممة حسب المساحة تجمع بين التخزين الذكي وسهولة الاستخدام.",
      en: "Made-to-measure kitchens combining smart storage with comfortable everyday use.",
    },
    features: [
      { ar: "تخطيط حسب المساحة", en: "Space-specific planning" },
      { ar: "حلول تخزين عملية", en: "Practical storage solutions" },
      { ar: "خامات وتشطيبات مختارة", en: "Selected materials and finishes" },
    ],
    image: assets.decor.projects[5],
    alt: {
      ar: "مطبخ خشبي مصمم حسب الطلب",
      en: "Custom-designed wooden kitchen",
    },
    href: "#furniture",
  },
  {
    id: "dressing-rooms",
    title: { ar: "غرف ملابس", en: "Dressing Rooms" },
    description: {
      ar: "غرف ملابس بتقسيمات مدروسة وتشطيبات هادئة تناسب أسلوب المساحة.",
      en: "Dressing rooms with considered layouts and refined finishes tailored to the space.",
    },
    features: [
      { ar: "تفصيل حسب المقاسات", en: "Made to precise measurements" },
      { ar: "تقسيمات داخلية عملية", en: "Practical internal organization" },
      { ar: "استغلال ذكي للمساحة", en: "Smart space utilization" },
    ],
    image: assets.furniture.dressingRooms[0],
    alt: {
      ar: "تصميم غرفة ملابس عصرية من كابيتال واسي",
      en: "Modern Capital Oasis dressing room design",
    },
    href: "#furniture",
  },
  {
    id: "tv-units",
    title: { ar: "وحدات تلفزيون", en: "TV Units" },
    description: {
      ar: "وحدات تلفزيون وواجهات جدارية تجمع التخزين والتكسيات في تصميم متكامل.",
      en: "Integrated media walls combining storage, cladding, and a clean contemporary finish.",
    },
    features: [
      { ar: "تصميم متكامل للجدار", en: "Integrated wall design" },
      { ar: "تخزين مخفي وعملي", en: "Practical concealed storage" },
      { ar: "تكسيات وإضاءة مدمجة", en: "Cladding and integrated lighting" },
    ],
    image: assets.furniture.tvUnits[0],
    alt: {
      ar: "وحدة تلفزيون بتكسيات خشبية عصرية",
      en: "Contemporary TV unit with wooden cladding",
    },
    href: "#furniture",
  },
  {
    id: "commercial-decorations",
    title: { ar: "ديكورات محلات تجارية", en: "Commercial Shop Decorations" },
    description: {
      ar: "تجهيزات داخلية تعكس هوية النشاط وتدعم تجربة العملاء داخل المساحة.",
      en: "Interior fit-out solutions that reflect the brand and improve the customer experience.",
    },
    features: [
      { ar: "كاونترات ووحدات عرض", en: "Counters and display units" },
      { ar: "تنفيذ حسب هوية النشاط", en: "Execution aligned with brand identity" },
      { ar: "تجهيز وتركيب بالموقع", en: "On-site fit-out and installation" },
    ],
    image: assets.commercial.shops[0],
    alt: {
      ar: "تنفيذ ديكور محل تجاري من كابيتال واسي",
      en: "Capital Oasis commercial shop fit-out",
    },
    href: "#commercial",
  },
  {
    id: "event-setup",
    title: { ar: "ديكورات معارض وفعاليات", en: "Exhibition Décor & Events" },
    description: {
      ar: "تجهيز منظم للمناسبات من الخلفيات والديكور إلى الجلسات والإضاءة.",
      en: "Organized event preparation from backdrops and decor to seating and lighting.",
    },
    features: [
      { ar: "خلفيات وديكور مخصص", en: "Custom backdrops and decor" },
      { ar: "جلسات وإضاءة", en: "Seating and lighting" },
      { ar: "تجهيز متكامل للمساحة", en: "Complete space preparation" },
    ],
    image: assets.events.images[3],
    alt: {
      ar: "خلفية وتجهيز احتفال من كابيتال واسي",
      en: "Capital Oasis celebration backdrop and setup",
    },
    href: "#events",
  },
];

export const workCollections: WorkCollection[] = [
  {
    id: "door-collection",
    title: { ar: "مجموعة الأبواب", en: "Door Collection" },
    description: {
      ar: "أبواب خشبية وحلول WPC وPVC.",
      en: "Wooden doors and WPC/PVC solutions.",
    },
    image: assets.doors.projects[6],
    alt: { ar: "مجموعة مشاريع الأبواب", en: "Door project collection" },
    href: "#doors",
  },
  {
    id: "kitchen-collection",
    title: { ar: "مجموعة المطابخ", en: "Kitchen Collection" },
    description: {
      ar: "مطابخ عملية مصممة حسب المساحة.",
      en: "Practical kitchens designed around the space.",
    },
    image: assets.decor.projects[6],
    alt: { ar: "مجموعة تصاميم المطابخ", en: "Kitchen design collection" },
    href: "#furniture",
  },
  {
    id: "dressing-room-collection",
    title: { ar: "مجموعة غرف الملابس", en: "Dressing Room Collection" },
    description: {
      ar: "تقسيمات مخصصة وتشطيبات راقية.",
      en: "Custom organization and refined finishes.",
    },
    image: assets.furniture.dressingRooms[0],
    alt: { ar: "مجموعة تصاميم غرف الملابس", en: "Dressing room design collection" },
    href: "#furniture",
  },
  {
    id: "tv-unit-collection",
    title: { ar: "مجموعة وحدات التلفزيون", en: "TV Unit Collection" },
    description: {
      ar: "وحدات وتكسيات لجدران التلفزيون.",
      en: "Media units and TV wall treatments.",
    },
    image: assets.furniture.tvUnits[0],
    alt: { ar: "مجموعة وحدات التلفزيون", en: "TV unit collection" },
    href: "#furniture",
  },
  {
    id: "commercial-collection",
    title: { ar: "مجموعة ديكورات المحلات", en: "Commercial Decoration Collection" },
    description: {
      ar: "تجهيزات للمحلات والمعارض والمكاتب.",
      en: "Fit-outs for stores, showrooms, and offices.",
    },
    image: assets.commercial.decorations[1],
    alt: {
      ar: "مجموعة أعمال الديكورات التجارية",
      en: "Commercial decoration work collection",
    },
    href: "#commercial",
  },
  {
    id: "event-collection",
    title: { ar: "مجموعة ديكورات معارض وفعاليات", en: "Exhibition Décor & Events Collection" },
    description: {
      ar: "خلفيات وجلسات وتجهيزات للمناسبات.",
      en: "Backdrops, seating, and occasion setups.",
    },
    image: assets.events.images[0],
    alt: { ar: "مجموعة ديكورات معارض وفعاليات", en: "Exhibition décor and events collection" },
    href: "#events",
  },
];
