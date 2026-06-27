import type { Bilingual } from "./content";
import { assets } from "./assets";

export type Service = {
  number: string;
  title: Bilingual;
  short: Bilingual;
  description: Bilingual;
  products: Bilingual[];
  features: Bilingual[];
  image: string;
  alt: Bilingual;
};

export const services: Service[] = [
  {
    number: "01",
    title: { en: "Doors", ar: "الأبواب" },
    short: {
      en: "WPC, PVC, and wooden doors supply and installation with frames, locks, and accessories.",
      ar: "توريد وتركيب أبواب WPC وPVC والأبواب الخشبية مع الإطارات والأقفال والإكسسوارات.",
    },
    description: {
      en: "Modern and practical doors for homes and commercial projects with multiple material and color options.",
      ar: "أبواب عملية وعصرية تناسب المنازل والمشاريع التجارية، مع خيارات متعددة من الخامات والألوان.",
    },
    products: [
      { en: "WPC Doors", ar: "أبواب WPC" },
      { en: "PVC Doors", ar: "أبواب PVC" },
      { en: "Wooden Doors", ar: "أبواب خشبية" },
      { en: "Door Frames", ar: "إطارات الأبواب" },
      { en: "Door Panels", ar: "ألواح الأبواب" },
      { en: "Door Locks", ar: "أقفال الأبواب" },
      { en: "Accessories", ar: "الإكسسوارات" },
      {
        en: "Residential and commercial supply & installation",
        ar: "توريد وتركيب للمشاريع السكنية والتجارية",
      },
    ],
    features: [
      { en: "Waterproof and moisture resistant", ar: "ضد الماء والرطوبة" },
      { en: "Soundproof", ar: "عازل للصوت" },
      { en: "Anti-insects", ar: "مقاوم للحشرات" },
      { en: "Scratch resistant", ar: "مقاوم للخدوش" },
      { en: "Heat resistant", ar: "مقاوم للحرارة" },
      { en: "Durable high-quality materials", ar: "خامات عالية ومتانة طويلة" },
      { en: "Multiple colors and designs", ar: "ألوان وأشكال متعددة" },
      { en: "Professional installation", ar: "تركيب احترافي" },
    ],
    image: assets.doors.featured,
    alt: {
      en: "Capital Oasis door panel, frame, and lock solutions",
      ar: "حلول كابيتال واسي لألواح الأبواب والإطارات والأقفال",
    },
  },
  {
    number: "02",
    title: { en: "Furniture & Hotel Furniture", ar: "الأثاث السكني والفندقي" },
    short: {
      en: "Custom dressing rooms, TV units, wooden kitchens, wall cladding, and decorative hotel furniture.",
      ar: "تصميم وتصنيع غرف الملابس، وحدات التلفزيون، المطابخ الخشبية، التكسيات، والديكورات الخشبية حسب الطلب.",
    },
    description: {
      en: "Design and manufacturing of modern home and hotel furniture, including dressing rooms, TV units, wooden kitchens, shoe organizers, wall cladding, and custom furniture with premium materials and elegant finishing.",
      ar: "تصميم وتصنيع كل ما يلزم البيت السعودي من الأثاث العصري، غرف الملابس، وحدات التلفزيون، المطابخ الخشبية، منظمات الأحذية، والتكسيات الخشبية بأجود الخامات وأرقى الأذواق.",
    },
    products: [
      { en: "Dressing rooms", ar: "غرف الملابس" },
      { en: "TV units", ar: "وحدات التلفزيون" },
      { en: "Wooden kitchens", ar: "المطابخ الخشبية" },
      { en: "Wall cladding", ar: "التكسيات الخشبية" },
      { en: "Wooden decorations", ar: "الديكورات الخشبية" },
      { en: "Shoe organizers", ar: "منظمات الأحذية" },
      { en: "Custom furniture", ar: "الأثاث حسب الطلب" },
      {
        en: "Commercial and residential hotel furniture",
        ar: "أثاث فندقي وسكني",
      },
    ],
    features: [
      { en: "Made-to-measure design", ar: "تصميم حسب المقاس" },
      { en: "Premium material selection", ar: "اختيار أجود الخامات" },
      { en: "Elegant finishing", ar: "تشطيبات راقية" },
      { en: "Workshop manufacturing", ar: "تصنيع متخصص في الورشة" },
    ],
    image: assets.furniture.featured,
    alt: {
      en: "Capital Oasis custom furniture and hotel furniture",
      ar: "أعمال كابيتال واسي للأثاث السكني والفندقي والديكور المخصص",
    },
  },
  {
    number: "03",
    title: {
      en: "Commercial Shop Decorations",
      ar: "ديكورات المحلات التجارية",
    },
    short: {
      en: "Custom commercial decorations and interior furniture for stores, showrooms, cafes, and offices.",
      ar: "ديكورات خشبية وتجهيزات داخلية للمحلات التجارية والمعارض والكافيهات والمكاتب.",
    },
    description: {
      en: "We create custom commercial decorations and interior furniture for stores, showrooms, cafes, and offices, with practical designs that reflect the business identity and optimize the space.",
      ar: "ننفذ ديكورات خشبية وتجهيزات داخلية للمحلات التجارية والمعارض والكافيهات والمكاتب، بتصاميم عملية تعكس هوية النشاط وتستغل المساحة بأفضل شكل.",
    },
    products: [
      { en: "Shop decorations", ar: "ديكورات المحلات" },
      { en: "Counters and reception units", ar: "كاونترات واستقبال" },
      { en: "Display shelves and units", ar: "رفوف ووحدات عرض" },
      { en: "Wooden wall cladding", ar: "تكسيات خشبية" },
      { en: "Interior frontage elements", ar: "تجهيز واجهات داخلية" },
      { en: "Custom commercial furniture", ar: "أثاث تجاري حسب الطلب" },
      { en: "Execution based on brand identity", ar: "تنفيذ حسب هوية النشاط" },
    ],
    features: [
      { en: "Brand-led design", ar: "تصميم متوافق مع الهوية" },
      { en: "Made-to-measure fabrication", ar: "تصنيع حسب المقاس" },
      { en: "Professional installation", ar: "تركيب احترافي" },
      { en: "Commercial project execution", ar: "تنفيذ للمشاريع التجارية" },
    ],
    image: assets.commercial.featured,
    alt: {
      en: "Capital Oasis commercial interior furniture installation",
      ar: "تنفيذ كابيتال واسي للأثاث الفندقي وديكورات المحلات التجارية",
    },
  },
  {
    number: "04",
    title: {
      en: "Exhibition Decor & Events",
      ar: "ديكورات معارض وفعاليات",
    },
    short: {
      en: "Custom exhibition decor and event setups including decoration, backdrops, seating, lighting, and space preparation.",
      ar: "ديكورات معارض وفعاليات بتصاميم مخصصة تشمل الديكور والخلفيات والجلسات والإضاءة وتجهيز المساحات.",
    },
    description: {
      en: "Exhibition decor and event solutions with custom decoration, backdrops, seating, lighting, and space preparation based on the occasion.",
      ar: "ديكورات معارض وفعاليات بتصاميم مخصصة تشمل الديكور والخلفيات والجلسات والإضاءة وتجهيز المساحات حسب طبيعة المناسبة.",
    },
    products: [
      { en: "Exhibition and event decorations", ar: "ديكورات الفعاليات" },
      { en: "Exhibition decor and events", ar: "ديكورات معارض وفعاليات" },
      { en: "Custom decoration", ar: "ديكور مخصص" },
      { en: "Exhibition and event backdrops", ar: "خلفيات المناسبات" },
      { en: "Seating arrangements", ar: "تجهيز الجلسات" },
      { en: "Lighting decoration", ar: "ديكورات الإضاءة" },
      { en: "Exhibition and event furniture", ar: "أثاث الفعاليات" },
      { en: "Space preparation", ar: "تجهيز المساحات" },
    ],
    features: [
      { en: "Creative concept", ar: "تصور إبداعي" },
      { en: "Custom fabrication", ar: "تنفيذ مخصص" },
      { en: "Setup and removal", ar: "التركيب والإزالة" },
    ],
    image: assets.events.images[0],
    alt: {
      en: "Completed event stage with custom illuminated decoration",
      ar: "منصة فعالية منفذة بديكور وإضاءة مخصصة",
    },
  },
];
