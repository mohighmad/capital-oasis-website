import type { Bilingual } from "./content";
import { assets } from "./assets";

export type GalleryCategory =
  | "all"
  | "doors"
  | "furniture"
  | "dressing"
  | "tv"
  | "kitchens"
  | "decor"
  | "commercial"
  | "restaurants"
  | "events"
  | "offers";

export type GalleryItem = {
  id: string;
  image?: string;
  category: Exclude<GalleryCategory, "all">;
  title: Bilingual;
  alt: Bilingual;
  fit?: "cover" | "contain";
  objectPosition?: string;
  video?: string;
};

export const galleryFilters: { id: GalleryCategory; label: Bilingual }[] = [
  { id: "all", label: { en: "All", ar: "الكل" } },
  { id: "doors", label: { en: "Doors", ar: "الأبواب" } },
  { id: "furniture", label: { en: "Furniture", ar: "الأثاث" } },
  { id: "dressing", label: { en: "Dressing Rooms", ar: "غرف الملابس" } },
  { id: "tv", label: { en: "TV Units", ar: "وحدات التلفزيون" } },
  { id: "kitchens", label: { en: "Kitchens", ar: "المطابخ" } },
  { id: "decor", label: { en: "Wall Cladding & Decor", ar: "التكسيات والديكور" } },
  {
    id: "commercial",
    label: {
      en: "Commercial Shop Decorations",
      ar: "ديكورات المحلات التجارية",
    },
  },
  {
    id: "restaurants",
    label: { en: "Restaurants & Cafes", ar: "المطاعم والكافيهات" },
  },
  { id: "events", label: { en: "Events", ar: "الفعاليات" } },
  { id: "offers", label: { en: "Offers", ar: "العروض" } },
];

export const gallery: GalleryItem[] = [
  {
    id: "doors-installed-pair",
    image: assets.doors.projects[6],
    category: "doors",
    title: { en: "Wooden Doors Project", ar: "مشروع أبواب خشبية" },
    alt: {
      en: "Pair of installed internal wood-finish doors by Capital Oasis",
      ar: "زوج أبواب خشبية بتشطيب خشبي نفذتها كابيتال واسي",
    },
  },
  {
    id: "doors-wall-finish",
    image: assets.doors.projects[7],
    category: "doors",
    title: { en: "Integrated Door Finish", ar: "باب بتشطيب متكامل" },
    alt: {
      en: "Internal door integrated with modern wall panels and lighting",
      ar: "باب داخلي مدمج مع ألواح جدارية وإضاءة عصرية",
    },
  },
  {
    id: "doors-double",
    image: assets.doors.projects[8],
    category: "doors",
    title: { en: "Double Doors Project", ar: "مشروع أبواب مزدوجة" },
    alt: {
      en: "Wide double wooden doors with dark wood finish",
      ar: "أبواب خشبية مزدوجة واسعة بتشطيب خشبي داكن",
    },
  },
  {
    id: "doors-corner",
    image: assets.doors.projects[9],
    category: "doors",
    title: { en: "Residential Door Installation", ar: "تركيب أبواب سكنية" },
    alt: {
      en: "Residential wooden doors installed around a finished corner",
      ar: "أبواب خشبية سكنية مركبة حول زاوية بتشطيب متقن",
    },
  },
  {
    id: "doors-vanity",
    image: assets.doors.projects[10],
    category: "doors",
    title: { en: "Door and Vanity Detail", ar: "تفاصيل باب ووحدة مغسلة" },
    alt: {
      en: "Wooden doors beside a custom vanity and wall finish",
      ar: "أبواب خشبية بجانب وحدة مغسلة وتفاصيل جدارية مخصصة",
    },
  },
  {
    id: "doors-video",
    image: assets.portfolioVideos.thumbnails[1],
    video: assets.portfolioVideos.files[1],
    category: "doors",
    title: { en: "Door Installation Video", ar: "فيديو تركيب أبواب" },
    alt: {
      en: "Video thumbnail showing an installed wooden door project",
      ar: "صورة مصغرة لفيديو مشروع أبواب خشبية مركبة",
    },
  },
  {
    id: "furniture-console",
    image: assets.furniture.custom[0],
    category: "furniture",
    title: { en: "Custom Console Unit", ar: "وحدة كونسول حسب الطلب" },
    alt: {
      en: "Custom console and mirror furniture concept in warm wood tones",
      ar: "تصميم وحدة كونسول ومرآة حسب الطلب بدرجات خشبية دافئة",
    },
  },
  {
    id: "furniture-entry",
    image: assets.furniture.custom[1],
    category: "furniture",
    title: { en: "Entry Storage Unit", ar: "وحدة تخزين للمدخل" },
    alt: {
      en: "Custom entry storage and shoe organizer furniture concept",
      ar: "تصميم وحدة تخزين ومنظم أحذية مخصص للمدخل",
    },
  },
  {
    id: "furniture-vanity",
    image: assets.furniture.custom[2],
    category: "furniture",
    title: { en: "Custom Vanity", ar: "تسريحة حسب الطلب" },
    alt: {
      en: "Made-to-measure vanity and drawer unit concept",
      ar: "تصميم تسريحة ووحدة أدراج مصنعة حسب المقاس",
    },
  },
  {
    id: "furniture-workshop-video",
    image: assets.portfolioVideos.thumbnails[0],
    video: assets.portfolioVideos.files[0],
    category: "furniture",
    title: { en: "Hotel Furniture Manufacturing Video", ar: "فيديو تصنيع الأثاث الفندقي" },
    alt: {
      en: "Video thumbnail showing custom hotel furniture manufacturing in the workshop",
      ar: "صورة مصغرة لفيديو تصنيع أثاث فندقي مخصص في الورشة",
    },
  },
  {
    id: "furniture-detail-video",
    image: assets.portfolioVideos.thumbnails[5],
    video: assets.portfolioVideos.files[5],
    category: "furniture",
    title: { en: "Custom Hotel Furniture Detail Video", ar: "فيديو تفاصيل أثاث فندقي" },
    alt: {
      en: "Video thumbnail showing completed custom hotel furniture and surface details",
      ar: "صورة مصغرة لفيديو تفاصيل أثاث فندقي وأسطح مخصصة منفذة",
    },
  },
  {
    id: "dressing-warm",
    image: assets.furniture.dressingRooms[0],
    category: "dressing",
    title: { en: "Dressing Room", ar: "غرفة ملابس" },
    alt: {
      en: "Dressing room concept with illuminated storage and warm wood finishing",
      ar: "تصميم غرفة ملابس بوحدات تخزين مضاءة وتشطيبات خشبية دافئة",
    },
  },
  {
    id: "dressing-blue",
    image: assets.furniture.dressingRooms[1],
    category: "dressing",
    title: { en: "Contemporary Wardrobes", ar: "خزائن ملابس عصرية" },
    alt: {
      en: "Contemporary fitted wardrobes with integrated display storage",
      ar: "خزائن ملابس عصرية مع وحدات عرض وتخزين مدمجة",
    },
  },
  {
    id: "dressing-corner",
    image: assets.furniture.dressingRooms[2],
    category: "dressing",
    title: { en: "Corner Dressing Storage", ar: "خزائن ملابس زاوية" },
    alt: {
      en: "Corner dressing-room storage concept with open shelving",
      ar: "تصميم خزائن غرفة ملابس زاوية مع رفوف مفتوحة",
    },
  },
  {
    id: "dressing-glass",
    image: assets.furniture.dressingRooms[3],
    category: "dressing",
    title: { en: "Glass-front Wardrobes", ar: "خزائن بواجهات زجاجية" },
    alt: {
      en: "Illuminated dressing-room wardrobes with glass-front doors",
      ar: "خزائن غرفة ملابس مضاءة بواجهات أبواب زجاجية",
    },
  },
  {
    id: "tv-natural",
    image: assets.furniture.tvUnits[0],
    category: "tv",
    title: { en: "TV Unit", ar: "وحدة تلفزيون" },
    alt: {
      en: "Modern TV wall with natural wood slats and floating storage",
      ar: "وحدة تلفزيون عصرية بشرائح خشبية ووحدة تخزين معلقة",
    },
  },
  {
    id: "tv-light",
    image: assets.furniture.tvUnits[1],
    category: "tv",
    title: { en: "Light Wood TV Wall", ar: "جدار تلفزيون خشبي فاتح" },
    alt: {
      en: "Light wood TV wall with integrated lighting and shelving",
      ar: "جدار تلفزيون بخشب فاتح وإضاءة ورفوف مدمجة",
    },
  },
  {
    id: "tv-framed",
    image: assets.furniture.tvUnits[2],
    category: "tv",
    title: { en: "Framed Media Wall", ar: "جدار وسائط بإطار مميز" },
    alt: {
      en: "Custom media wall with illuminated frame and display shelving",
      ar: "جدار وسائط مخصص بإطار مضاء ورفوف عرض",
    },
  },
  {
    id: "kitchen-completed-one",
    image: assets.decor.projects[5],
    category: "kitchens",
    title: { en: "Residential Kitchen", ar: "مطبخ سكني" },
    alt: {
      en: "Completed residential kitchen with custom cabinetry and marble-look surfaces",
      ar: "مطبخ سكني منفذ بخزائن مخصصة وأسطح بتأثير الرخام",
    },
  },
  {
    id: "kitchen-completed-two",
    image: assets.decor.projects[6],
    category: "kitchens",
    title: { en: "Custom Kitchen Cabinetry", ar: "خزائن مطبخ حسب الطلب" },
    alt: {
      en: "Custom kitchen cabinetry with practical upper and lower storage",
      ar: "خزائن مطبخ حسب الطلب بوحدات تخزين علوية وسفلية عملية",
    },
  },
  {
    id: "kitchen-design",
    image: assets.furniture.kitchens[0],
    category: "kitchens",
    title: { en: "Kitchen Design Concept", ar: "تصميم مطبخ مخصص" },
    alt: {
      en: "Top-view kitchen design concept showing cabinetry and work zones",
      ar: "تصميم علوي لمطبخ مخصص يوضح الخزائن ومناطق العمل",
    },
  },
  {
    id: "decor-media-wall",
    image: assets.decor.projects[2],
    category: "decor",
    title: { en: "Wooden Wall Cladding", ar: "تكسيات خشبية" },
    alt: {
      en: "Completed media wall with wood cabinetry and marble-look cladding",
      ar: "جدار تلفزيون منفذ بخزائن خشبية وتكسية بتأثير الرخام",
    },
  },
  {
    id: "decor-marble-panel",
    image: assets.decor.projects[3],
    category: "decor",
    title: { en: "Decorative Wall Panel", ar: "لوح جداري ديكوري" },
    alt: {
      en: "Decorative wall panel combining wood finish and marble-look surface",
      ar: "لوح جداري ديكوري يجمع بين الخشب وسطح بتأثير الرخام",
    },
  },
  {
    id: "decor-bedroom",
    image: assets.decor.projects[0],
    category: "decor",
    title: { en: "Bedroom Hotel Furniture", ar: "أثاث فندقي لغرفة نوم" },
    alt: {
      en: "Completed bedroom hotel furniture with integrated desk, storage, and wall panels",
      ar: "أثاث فندقي منفذ لغرفة نوم يشمل مكتباً وتخزيناً وألواحاً جدارية",
    },
  },
  {
    id: "decor-cladding-video-one",
    image: assets.portfolioVideos.thumbnails[3],
    video: assets.portfolioVideos.files[3],
    category: "decor",
    title: { en: "Wooden Wall Cladding Video", ar: "فيديو تكسيات خشبية" },
    alt: {
      en: "Video thumbnail showing completed wooden wall cladding",
      ar: "صورة مصغرة لفيديو تكسيات حوائط خشبية منفذة",
    },
  },
  {
    id: "decor-cladding-video-two",
    image: assets.portfolioVideos.thumbnails[4],
    video: assets.portfolioVideos.files[4],
    category: "decor",
    title: { en: "Interior Hotel Furniture Walkthrough", ar: "جولة في أثاث فندقي داخلي" },
    alt: {
      en: "Video thumbnail showing an interior hotel furniture and wall-detail walkthrough",
      ar: "صورة مصغرة لجولة في أثاث فندقي وتفاصيل جدارية داخلية",
    },
  },
  {
    id: "commercial-gift-shop",
    image: assets.commercial.decorations[0],
    category: "commercial",
    title: { en: "Commercial Shop Decoration", ar: "ديكور محل تجاري" },
    alt: {
      en: "Completed gift shop interior with custom display units and counters",
      ar: "ديكور محل هدايا منفذ بوحدات عرض وكاونترات مخصصة",
    },
  },
  {
    id: "commercial-gift-counter",
    image: assets.commercial.decorations[4],
    category: "commercial",
    title: { en: "Custom Reception Counter", ar: "كاونتر استقبال مخصص" },
    alt: {
      en: "Custom commercial reception counter installed in a finished shop interior",
      ar: "كاونتر استقبال تجاري مخصص داخل محل مكتمل التشطيب",
    },
  },
  {
    id: "commercial-retail-island",
    image: assets.commercial.shops[0],
    category: "commercial",
    title: { en: "Retail Display Island", ar: "جزيرة عرض تجارية" },
    alt: {
      en: "Retail display island with glass counters and custom wood detailing",
      ar: "جزيرة عرض تجارية بكاونترات زجاجية وتفاصيل خشبية مخصصة",
    },
  },
  {
    id: "commercial-display-counter",
    image: assets.commercial.shops[3],
    category: "commercial",
    title: { en: "Commercial Display Counter", ar: "كاونتر عرض تجاري" },
    alt: {
      en: "Completed commercial display counter in an active retail location",
      ar: "كاونتر عرض تجاري منفذ داخل موقع بيع بالتجزئة",
    },
  },
  {
    id: "commercial-kiosk",
    image: assets.commercial.shops[6],
    category: "commercial",
    title: { en: "Retail Kiosk Fit-out", ar: "تجهيز كشك تجاري" },
    alt: {
      en: "Freestanding retail kiosk structure with metal and wood detailing",
      ar: "هيكل كشك تجاري مستقل بتفاصيل معدنية وخشبية",
    },
  },
  {
    id: "commercial-fitout-video",
    image: assets.portfolioVideos.thumbnails[2],
    video: assets.portfolioVideos.files[2],
    category: "commercial",
    title: { en: "Commercial Fit-out Video", ar: "فيديو تجهيز محل تجاري" },
    alt: {
      en: "Video thumbnail showing a commercial retail fit-out and display structure",
      ar: "صورة مصغرة لفيديو تجهيز محل تجاري وهيكل عرض مخصص",
    },
  },
  {
    id: "restaurant-counter",
    image: assets.commercial.restaurants[1],
    category: "restaurants",
    title: { en: "Restaurant Fit-out", ar: "تجهيز مطعم" },
    alt: {
      en: "Restaurant interior fit-out with custom counters and wood partitions",
      ar: "تجهيز داخلي لمطعم بكاونترات وقواطع خشبية مخصصة",
    },
  },
  {
    id: "restaurant-service-area",
    image: assets.commercial.restaurants[3],
    category: "restaurants",
    title: { en: "Restaurant Service Counter", ar: "كاونتر خدمة مطعم" },
    alt: {
      en: "Completed restaurant service counter with practical commercial layout",
      ar: "كاونتر خدمة مطعم منفذ بتوزيع تجاري عملي",
    },
  },
  {
    id: "restaurant-partitions",
    image: assets.commercial.restaurants[5],
    category: "restaurants",
    title: { en: "Restaurant Interior Hotel Furniture", ar: "أثاث فندقي لمطعم" },
    alt: {
      en: "Restaurant interior hotel furniture including counters, dividers, and wall details",
      ar: "أثاث فندقي داخل مطعم يشمل الكاونترات والقواطع وتفاصيل الجدران",
    },
  },
  {
    id: "event-stage",
    image: assets.events.images[0],
    category: "events",
    title: { en: "Exhibition Décor & Events", ar: "ديكورات معارض وفعاليات" },
    alt: {
      en: "Completed illuminated event stage with custom decorative panels",
      ar: "منصة فعالية منفذة بإضاءة وألواح ديكور مخصصة",
    },
  },
  {
    id: "event-seating",
    image: assets.events.images[1],
    category: "events",
    title: { en: "Seating & Reception Setup", ar: "تجهيز جلسات واستقبال" },
    alt: {
      en: "Event seating and reception setup inside a decorated venue",
      ar: "تجهيز جلسات واستقبال داخل موقع فعالية مزين",
    },
  },
  {
    id: "event-celebration",
    image: assets.events.images[2],
    category: "events",
    title: { en: "Celebration Setup", ar: "تجهيز احتفال" },
    alt: {
      en: "Custom celebration reception counter with illuminated backdrop",
      ar: "كاونتر استقبال احتفال بخلفية مضاءة مخصصة",
    },
  },
  {
    id: "event-backdrop",
    image: assets.events.images[3],
    category: "events",
    title: { en: "Event Backdrop", ar: "خلفية تصوير للمناسبة" },
    alt: {
      en: "Custom illuminated event backdrop with geometric decorative panels",
      ar: "خلفية فعالية مضاءة بألواح زخرفية هندسية",
    },
  },
  {
    id: "event-entrance",
    image: assets.events.images[5],
    category: "events",
    title: { en: "Event Decoration", ar: "ديكور فعالية" },
    alt: {
      en: "Illuminated custom event entrance installed for an outdoor celebration",
      ar: "مدخل فعالية مضاء ومخصص لاحتفال خارجي",
    },
  },
  {
    id: "event-video-exhibition",
    image: assets.exhibitionsEvents.thumbnails[0],
    video: assets.exhibitionsEvents.videos[0],
    category: "events",
    title: { en: "Exhibition Décor & Events Video", ar: "فيديو ديكورات معارض وفعاليات" },
    alt: {
      en: "Video thumbnail showing a completed event and exhibition fit-out",
      ar: "صورة مصغرة لفيديو ديكورات معارض وفعاليات",
    },
  },
  {
    id: "event-video-stage",
    image: assets.exhibitionsEvents.thumbnails[1],
    video: assets.exhibitionsEvents.videos[1],
    category: "events",
    title: { en: "Celebration Setup Video", ar: "فيديو تجهيز احتفال" },
    alt: {
      en: "Video thumbnail showing event stage and celebration preparation",
      ar: "صورة مصغرة لفيديو تجهيز منصة واحتفال",
    },
  },
  {
    id: "offer-quantity-doors",
    image: assets.doors.offers[0],
    category: "offers",
    title: { en: "WPC Door Quantity Offer", ar: "عرض كميات أبواب WPC" },
    alt: {
      en: "Capital Oasis promotional offer for WPC door quantity orders",
      ar: "عرض كابيتال واسي الترويجي لطلبات كميات أبواب WPC",
    },
    fit: "contain",
  },
  {
    id: "offer-wpc-pvc",
    image: assets.doors.offers[1],
    category: "offers",
    title: { en: "WPC & PVC Door Offer", ar: "عرض أبواب WPC وPVC" },
    alt: {
      en: "Promotional offer for WPC and PVC wooden doors",
      ar: "عرض ترويجي لأبواب WPC وPVC الداخلية",
    },
    fit: "contain",
  },
  {
    id: "offer-selected-doors",
    image: assets.doors.offers[2],
    category: "offers",
    title: { en: "Selected Doors Offer", ar: "عرض أبواب مختارة" },
    alt: {
      en: "Capital Oasis selected wooden doors promotional offer",
      ar: "عرض كابيتال واسي الترويجي على أبواب خشبية مختارة",
    },
    fit: "contain",
  },
];
