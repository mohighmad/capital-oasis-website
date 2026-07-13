import type { Bilingual } from "@/data/content";
import {
  commercialAljaziraSuperUpdatedItems,
  commercialShopsPreviousWorksItems,
} from "@/data/commercialShops";
import { designs } from "@/data/designs";
import {
  doorPreviousWorksItems,
  doorSubcategories,
  heroDoorDesignItems,
} from "@/data/doors";
import { dressingRoomAllItems } from "@/data/dressingRooms";
import {
  eventCaseModules,
  eventsEditorialSections,
  eventsHeroItems,
  type EventsGalleryItem,
} from "@/data/events";
import {
  kitchenEditorialSections,
  kitchenHeroItems,
  kitchenShowcaseItems,
} from "@/data/kitchens";

export type LocalizedText = Bilingual | string;

export type UnifiedHeroMediaItem = {
  alt: LocalizedText;
  caption: LocalizedText;
  groupId: string;
  groupLabel: LocalizedText;
  id: string;
  objectFit: "contain" | "cover";
  objectPosition: string;
  src: string;
  title: LocalizedText;
};

type RouteMediaSource = {
  alt: Bilingual;
  caption: Bilingual;
  id: string;
  objectFit?: "contain" | "cover";
  objectPosition?: string;
  src: string;
  title: Bilingual;
};

const heroLabels = {
  commercial: { ar: "مشهد تجاري مختار", en: "Selected Commercial Scene" },
  doors: { ar: "أنظمة أبواب مختارة", en: "Selected Door Systems" },
  dressing: { ar: "رؤية تخزين راقية", en: "Refined Storage Perspective" },
  events: { ar: "اتجاه فعالية مختار", en: "Selected Event Direction" },
  contact: { ar: "بداية المشروع", en: "Project Brief" },
  homepage: { ar: "مشهد مختار من أعمالنا", en: "Selected Project Scene" },
  kitchens: { ar: "اتجاه مطبخ مختار", en: "Selected Kitchen Direction" },
  otherServices: { ar: "تفصيلة مشروع", en: "Project Detail" },
} as const;

function toUnifiedHeroMediaItem(
  item: RouteMediaSource,
  groupId: string,
  groupLabel: LocalizedText,
): UnifiedHeroMediaItem {
  return {
    alt: item.alt,
    caption: item.caption,
    groupId,
    groupLabel,
    id: item.id,
    objectFit: item.objectFit ?? "cover",
    objectPosition: item.objectPosition ?? "center",
    src: item.src,
    title: item.title,
  };
}

function pickDoorDirection(sectionId: "wood" | "pvc" | "wpc", index: number) {
  const section = doorSubcategories.find((item) => item.id === sectionId);

  if (!section) {
    throw new Error(`Missing door section: ${sectionId}`);
  }

  const galleryItem = section.directionGallery[index];

  if (!galleryItem) {
    throw new Error(`Missing ${sectionId} direction item at index ${index}`);
  }

  return galleryItem;
}

function pickKitchenEditorial(sectionId: string, index: number) {
  const section = kitchenEditorialSections.find((item) => item.id === sectionId);

  if (!section) {
    throw new Error(`Missing kitchen section: ${sectionId}`);
  }

  const galleryItem = section.items[index];

  if (!galleryItem) {
    throw new Error(`Missing kitchen media in ${sectionId} at index ${index}`);
  }

  return galleryItem;
}

function pickEventsSection(sectionId: string, index: number) {
  const section = eventsEditorialSections.find((item) => item.id === sectionId);

  if (!section) {
    throw new Error(`Missing events section: ${sectionId}`);
  }

  const galleryItem = section.items[index];

  if (!galleryItem) {
    throw new Error(`Missing event media in ${sectionId} at index ${index}`);
  }

  return galleryItem;
}

function pickEventCaseImage(caseId: string, index: number): EventsGalleryItem {
  const eventCase = eventCaseModules.find((item) => item.id === caseId);

  if (!eventCase) {
    throw new Error(`Missing event case: ${caseId}`);
  }

  const galleryItem = eventCase.images[index];

  if (!galleryItem) {
    throw new Error(`Missing event case media in ${caseId} at index ${index}`);
  }

  return galleryItem;
}

function uniqueHeroMediaItems(items: UnifiedHeroMediaItem[]) {
  const seen = new Set<string>();

  return items.filter((item) => {
    if (seen.has(item.src)) {
      return false;
    }

    seen.add(item.src);
    return true;
  });
}

function pickDesign(id: string) {
  const design = designs.find((item) => item.id === id);

  if (!design) {
    throw new Error(`Missing design media: ${id}`);
  }

  return design;
}

function designToUnifiedHeroMediaItem(
  id: string,
  groupId: string,
  groupLabel: LocalizedText,
): UnifiedHeroMediaItem {
  const design = pickDesign(id);

  return {
    alt: { ar: design.altAr, en: design.altEn },
    caption: { ar: design.altAr, en: design.altEn },
    groupId,
    groupLabel,
    id: design.id,
    objectFit: "cover",
    objectPosition: "center",
    src: design.src,
    title: { ar: design.titleAr, en: design.titleEn },
  };
}

const marahibCommercialHeroMediaSources: RouteMediaSource[] = [
  {
    id: "commercial-marahib-tuwaiq-01",
    src: "/images/capital-oasis/website-photos/events/marahib-tuwaiq/marahib-tuwaiq-image-001.jpg",
    alt: { ar: "تجهيزات مراحب طويق", en: "Marahib Tuwaiq setup" },
    caption: { ar: "واجهة رئيسية توضح حضور الهوية والإضاءة في مشروع مراحب طويق", en: "A main frontage showing identity and lighting presence for Marahib Tuwaiq" },
    title: { ar: "واجهة مراحب طويق", en: "Marahib Tuwaiq frontage" },
  },
  {
    id: "commercial-marahib-tuwaiq-02",
    src: "/images/capital-oasis/website-photos/events/marahib-tuwaiq/marahib-tuwaiq-image-002-rotated-left-20260713.jpg",
    alt: { ar: "مسارات مراحب طويق", en: "Marahib Tuwaiq walkways" },
    caption: { ar: "تفاصيل مسار تساعد على تنظيم الحركة وقراءة التجربة من لحظة الوصول", en: "Walkway details that organize movement and clarify the arrival experience" },
    title: { ar: "مسارات مراحب طويق", en: "Marahib Tuwaiq walkways" },
  },
  {
    id: "commercial-marahib-tuwaiq-03",
    src: "/images/capital-oasis/website-photos/events/marahib-tuwaiq/marahib-tuwaiq-image-003.jpg",
    alt: { ar: "إضاءة مراحب طويق", en: "Marahib Tuwaiq lighting" },
    caption: { ar: "عنصر إضاءة وعرض يعزز حضور المشروع داخل المساحة التجارية", en: "A lighting and display element strengthening the project presence" },
    title: { ar: "إضاءة وعرض", en: "Lighting and display" },
  },
  {
    id: "commercial-marahib-tuwaiq-04",
    src: "/images/capital-oasis/website-photos/events/marahib-tuwaiq/marahib-tuwaiq-image-004.jpg",
    alt: { ar: "عنصر هوية مراحب طويق", en: "Marahib Tuwaiq identity element" },
    caption: { ar: "تفصيلة مضيئة تمنح المشروع حضوراً واضحاً داخل التجربة", en: "An illuminated detail giving the project a clearer branded presence" },
    title: { ar: "عنصر هوية مضيء", en: "Illuminated identity element" },
  },
  {
    id: "commercial-marahib-tuwaiq-05",
    src: "/images/capital-oasis/website-photos/events/marahib-tuwaiq/marahib-tuwaiq-image-005.jpg",
    alt: { ar: "تفصيل ليلي من مراحب طويق", en: "Marahib Tuwaiq night detail" },
    caption: { ar: "لقطة ليلية تبرز علاقة الإضاءة بالواجهة وحركة الزوار", en: "An evening view showing how lighting supports frontage and customer flow" },
    title: { ar: "حضور ليلي منظم", en: "Organized evening presence" },
  },
];

const otherServicesAdditionalHeroMediaSources: RouteMediaSource[] = [
  {
    id: "other-services-curved-console",
    src: "/images/capital-oasis/designs/capital-oasis-design-curved-minimalist-console.webp",
    alt: { ar: "كونسول منحني بتصميم هادئ", en: "Curved minimalist console" },
    caption: { ar: "تفصيل عملي ناعم للمداخل والزوايا", en: "A soft practical detail for entrances and corners" },
    title: { ar: "كونسول منحني", en: "Curved minimalist console" },
  },
  {
    id: "other-services-bedroom-vanity",
    src: "/images/capital-oasis/designs/capital-oasis-design-bedroom-vanity.webp",
    alt: { ar: "تسريحة غرفة نوم", en: "Bedroom vanity" },
    caption: { ar: "تكوين غرفة نوم يجمع الوظيفة والهدوء البصري", en: "A bedroom composition balancing function and visual calm" },
    title: { ar: "تسريحة غرفة نوم", en: "Bedroom vanity design" },
  },
  {
    id: "other-services-decor-bedroom-001",
    src: "/images/capital-oasis/website-photos/decor/decor-bedroom-interior-001.jpeg",
    alt: { ar: "تفصيل ديكور داخلي لغرفة نوم", en: "Bedroom interior decor detail" },
    caption: { ar: "تطبيق داخلي يوضح الخامة والتكوين والتشطيب", en: "An interior application showing material, composition, and finish" },
    title: { ar: "تفصيل ديكور داخلي", en: "Interior decor detail" },
  },
  {
    id: "other-services-decor-room-001",
    src: "/images/capital-oasis/website-photos/decor/decor-rooms-ads-001.jpg",
    alt: { ar: "تشطيب غرفة وتفاصيلها المكملة", en: "Room finish and complementary details" },
    caption: { ar: "تفاصيل مكملة تساعد على قراءة المساحة كوحدة واحدة", en: "Complementary details that help the space read as one composition" },
    title: { ar: "تشطيب غرفة", en: "Room finish" },
  },
];

const otherServicesHeroExpansionSources: RouteMediaSource[] = [
  {
    id: "other-services-tv-unit-render-01",
    src: "/images/capital-oasis/designs/design-tv-unit-render-01.webp",
    alt: { ar: "وحدة تلفزيون بتفصيل خشبي", en: "Timber TV wall unit" },
    caption: { ar: "تكوين تلفزيون يوازن التخزين والحضور البصري", en: "A TV composition balancing storage and visual presence" },
    title: { ar: "وحدة تلفزيون بتفصيل خشبي", en: "Timber TV wall unit" },
  },
  {
    id: "other-services-tv-unit-render-02",
    src: "/images/capital-oasis/designs/design-tv-unit-render-02.webp",
    alt: { ar: "وحدة تلفزيون بإضاءة خلفية", en: "Backlit TV wall unit" },
    caption: { ar: "تكامل الإضاءة والتخزين في جدار مميز متوازن", en: "Lighting and storage integrated into a balanced feature wall" },
    title: { ar: "جدار تلفزيون مضاء", en: "Backlit TV wall" },
  },
  {
    id: "other-services-decor-render-01",
    src: "/images/capital-oasis/designs/design-decor-render-01.webp",
    alt: { ar: "وحدات تخزين وديكور متكاملة", en: "Integrated storage and decor wall" },
    caption: { ar: "تكوين متكامل يقرأ التخزين والديكور كمشهد واحد", en: "An integrated composition where storage and decor read as one scene" },
    title: { ar: "تكوين تخزين متكامل", en: "Integrated storage composition" },
  },
  {
    id: "other-services-decor-render-02",
    src: "/images/capital-oasis/designs/design-decor-render-02.webp",
    alt: { ar: "كونسول وجدار ديكور للمدخل", en: "Entry console and decor wall" },
    caption: { ar: "تفصيل مدخل يجمع الهدوء والحضور المتوازن", en: "An entry detail balancing calm and presence" },
    title: { ar: "كونسول مدخل بحضور هادئ", en: "Calm entry console" },
  },
  {
    id: "other-services-decor-render-03",
    src: "/images/capital-oasis/designs/design-decor-render-03.webp",
    alt: { ar: "محطة قهوة داخلية بتخزين مدمج", en: "Integrated coffee station" },
    caption: { ar: "محطة قهوة تنظم الأجهزة والتخزين ضمن تكوين واضح", en: "A coffee station organizing appliances and storage in one clear composition" },
    title: { ar: "محطة قهوة مدمجة", en: "Integrated coffee station" },
  },
];

const otherServicesComplementaryHeroSources: RouteMediaSource[] = [
  {
    id: "other-services-bedroom-interior-002",
    src: "/images/capital-oasis/website-photos/decor/decor-bedroom-interior-002.jpeg",
    alt: { ar: "تكوين غرفة نوم بخزائن وتشطيبات هادئة", en: "Bedroom composition with fitted storage and calm finishes" },
    caption: { ar: "تكوين داخلي يوازن بين الخزائن والإضاءة والراحة البصرية", en: "An interior composition balancing storage, lighting, and visual calm" },
    title: { ar: "تكوين غرفة نوم متكامل", en: "Complete bedroom composition" },
  },
  {
    id: "other-services-bedroom-interior-003",
    src: "/images/capital-oasis/website-photos/decor/decor-bedroom-interior-003.jpeg",
    alt: { ar: "جدار غرفة نوم بتفصيل رخامي وإضاءة داخلية", en: "Bedroom wall with marble detail and integrated lighting" },
    caption: { ar: "تفصيل جداري يضيف حضوراً هادئاً إلى تكوين غرفة النوم", en: "A feature wall detail adding quiet presence to the bedroom composition" },
    title: { ar: "جدار بتفصيل رخامي", en: "Marble feature wall" },
  },
  {
    id: "other-services-bedroom-interior-004",
    src: "/images/capital-oasis/website-photos/decor/decor-bedroom-interior-004.jpeg",
    alt: { ar: "جدار خزائن وتشطيبات داخلية لغرفة نوم", en: "Bedroom storage wall with coordinated interior finishes" },
    caption: { ar: "تخزين مدمج وتشطيبات متناسقة تكمل قراءة المساحة", en: "Integrated storage and coordinated finishes completing the space" },
    title: { ar: "جدار تخزين متناسق", en: "Coordinated storage wall" },
  },
  {
    id: "other-services-room-composition-002",
    src: "/images/capital-oasis/website-photos/decor/decor-rooms-ads-002.jpg",
    alt: { ar: "تكوين داخلي يجمع الديكور والتخزين", en: "Interior composition combining decor and storage" },
    caption: { ar: "مشهد متكامل يوضح علاقة الديكور بالتخزين والتفاصيل الخشبية", en: "A complete scene showing the relationship between decor, storage, and timber details" },
    title: { ar: "ديكور وتخزين متكامل", en: "Integrated decor and storage" },
  },
  {
    id: "other-services-room-composition-004",
    src: "/images/capital-oasis/website-photos/decor/decor-rooms-ads-004.jpg",
    alt: { ar: "وحدة تلفزيون بتكسية خشبية وإضاءة هادئة", en: "TV wall with timber finish and calm lighting" },
    caption: { ar: "تكوين تلفزيون يوازن بين التكسية الخشبية والحضور البصري", en: "A TV composition balancing timber texture and visual presence" },
    title: { ar: "جدار تلفزيون خشبي", en: "Timber TV wall" },
  },
];

const contactAdditionalHeroMediaSources: RouteMediaSource[] = [
  {
    id: "contact-door-components",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-door-components-01.png",
    alt: { ar: "تفاصيل مكونات الأبواب", en: "Door component details" },
    caption: { ar: "نبدأ من نطاق المشروع وتفاصيله العملية", en: "We begin with the project scope and practical details" },
    title: { ar: "تفاصيل المشروع", en: "Project details" },
  },
  {
    id: "contact-door-style",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-door-style-01.jpeg",
    alt: { ar: "اختيارات أسلوب الأبواب", en: "Door style options" },
    caption: { ar: "اختيارات واضحة تساعد على تحديد الاتجاه المناسب", en: "Clear options that help define the right direction" },
    title: { ar: "تحديد الاتجاه", en: "Define the direction" },
  },
  {
    id: "contact-door-unit",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-door-unit-01.png",
    alt: { ar: "حلول وحدات الأبواب", en: "Door unit solutions" },
    caption: { ar: "حلول مترابطة من الاختيار إلى التنفيذ", en: "Connected solutions from selection to delivery" },
    title: { ar: "حلول مترابطة", en: "Connected solutions" },
  },
  {
    id: "contact-door-warranty",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-door-warranty-01.jpeg",
    alt: { ar: "تفاصيل ضمان الأبواب", en: "Door warranty details" },
    caption: { ar: "نوضح نطاق العمل والخطوة التالية بوضوح", en: "We clarify the scope and the next step" },
    title: { ar: "وضوح التنفيذ", en: "Execution clarity" },
  },
  {
    id: "contact-dressing-room",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-dressing-room-01.png",
    alt: { ar: "حلول غرف الملابس", en: "Dressing room solutions" },
    caption: { ar: "تفاصيل مدروسة للمساحات التي تحتاج تنظيماً واضحاً", en: "Considered details for spaces that need clear organization" },
    title: { ar: "تنظيم المساحة", en: "Organize the space" },
  },
  {
    id: "contact-furniture-scope",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-furniture-scope-01.png",
    alt: { ar: "نطاق أعمال الأثاث", en: "Furniture project scope" },
    caption: { ar: "نحدد الأولويات قبل بدء التنفيذ", en: "We define priorities before execution begins" },
    title: { ar: "نطاق واضح", en: "A clear scope" },
  },
  {
    id: "contact-tv-unit",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-tv-unit-01.png",
    alt: { ar: "وحدات تلفزيون وديكور", en: "TV units and interior detail" },
    caption: { ar: "نحوّل الفكرة إلى مشهد متكامل", en: "We turn the idea into a complete scene" },
    title: { ar: "مشهد متكامل", en: "A complete scene" },
  },
];

const contactHeroExpansionSources: RouteMediaSource[] = [
  {
    id: "contact-hotel-furniture",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-hotel-furniture-01.png",
    alt: { ar: "أثاث فندقي وتفاصيل تنفيذية", en: "Hotel furniture and execution details" },
    caption: { ar: "نحوّل متطلبات المشروع إلى تفاصيل تنفيذية متناسقة", en: "We turn project requirements into coordinated execution details" },
    title: { ar: "تفاصيل أثاث متناسقة", en: "Coordinated furniture details" },
  },
  {
    id: "contact-dressing-room-03",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-dressing-room-03.png",
    alt: { ar: "تخزين داخلي منظم", en: "Organized dressing-room storage" },
    caption: { ar: "معايير عملية لتنظيم المساحة وتفاصيلها", en: "Practical standards for organizing the space and its details" },
    title: { ar: "تنظيم ذكي للمساحة", en: "Smarter space planning" },
  },
  {
    id: "contact-dressing-room-04",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-dressing-room-04.png",
    alt: { ar: "تكوين غرفة ملابس معاصرة", en: "Contemporary dressing-room composition" },
    caption: { ar: "نبدأ من الاحتياج لنصل إلى تكوين واضح", en: "We begin with the need and arrive at a clear composition" },
    title: { ar: "تكوين معاصر", en: "Contemporary composition" },
  },
  {
    id: "contact-residential-door",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-residential-door-01.jpeg",
    alt: { ar: "باب منزلي بتصميم متوازن", en: "Balanced residential door design" },
    caption: { ar: "اختيار يربط الحضور البصري بالاستخدام اليومي", en: "A selection connecting visual presence with daily use" },
    title: { ar: "حضور منزلي هادئ", en: "Quiet residential presence" },
  },
  {
    id: "contact-waterproof-door",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-waterproof-doors-01.jpeg",
    alt: { ar: "تفاصيل أبواب للاستخدام المعتاد", en: "Door details designed for everyday use" },
    caption: { ar: "مواصفات تخدم الأداء والاستخدام اليومي", en: "Specifications that support performance and everyday use" },
    title: { ar: "أداء يومي موثوق", en: "Reliable everyday performance" },
  },
];

const contactScopeExpansionSources: RouteMediaSource[] = [
  {
    id: "contact-wpc-pvc-direction",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-wpc-pvc-doors-01.png",
    alt: { ar: "خيارات أبواب WPC وPVC", en: "WPC and PVC door options" },
    caption: { ar: "اتجاهات أبواب واضحة تساعد على تحديد الحل المناسب للمساحة", en: "Clear door directions that help define the right solution for the space" },
    title: { ar: "اتجاهات أبواب عملية", en: "Practical door directions" },
  },
  {
    id: "contact-dressing-room-direction",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-dressing-room-02.png",
    alt: { ar: "تكوينات غرفة ملابس منظمة", en: "Organized dressing-room compositions" },
    caption: { ar: "أفكار تخزين تساعد على تحويل الاحتياج إلى تكوين واضح", en: "Storage ideas that turn the brief into a clear composition" },
    title: { ar: "تخطيط غرفة الملابس", en: "Dressing-room planning" },
  },
  {
    id: "contact-tv-wall-direction-01",
    src: "/images/capital-oasis/ads-non-priced/cropped/non-priced-ad-cropped-tv-unit-01.webp",
    alt: { ar: "وحدة تلفزيون بتكوين داخلي هادئ", en: "TV unit with a calm interior composition" },
    caption: { ar: "تكوين تلفزيون يربط بين الوظيفة والحضور البصري", en: "A TV composition connecting function with visual presence" },
    title: { ar: "تكوين تلفزيون متوازن", en: "Balanced TV composition" },
  },
  {
    id: "contact-tv-wall-direction-02",
    src: "/images/capital-oasis/ads-non-priced/cropped/non-priced-ad-cropped-tv-unit-02.webp",
    alt: { ar: "جدار تلفزيون بتفاصيل خشبية وإضاءة", en: "TV wall with timber details and lighting" },
    caption: { ar: "تفاصيل جدارية تمنح المساحة وضوحاً واستقراراً بصرياً", en: "Wall details giving the space clarity and visual balance" },
    title: { ar: "تفاصيل جدارية", en: "Wall details" },
  },
  {
    id: "contact-tv-wall-direction-03",
    src: "/images/capital-oasis/ads-non-priced/cropped/non-priced-ad-cropped-tv-unit-03.webp",
    alt: { ar: "اختيارات متعددة لوحدات التلفزيون", en: "Multiple TV-unit directions" },
    caption: { ar: "اختيارات تساعد على مواءمة وحدة التلفزيون مع أسلوب المساحة", en: "Options for aligning the TV unit with the space style" },
    title: { ar: "اختيار وحدة التلفزيون", en: "Choose the TV direction" },
  },
];

const homepageContactHeroMediaSources: RouteMediaSource[] = [
  {
    id: "homepage-contact-services-scope",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-services-scope-01.png",
    alt: { ar: "نطاق خدمات كابيتال واسي", en: "Capital Oasis service scope" },
    caption: { ar: "حلول متكاملة للمساحات والمشاريع", en: "Integrated solutions for spaces and projects" },
    title: { ar: "نطاق خدمات واضح", en: "A clear service scope" },
  },
  {
    id: "homepage-contact-company-scope",
    src: "/images/capital-oasis/ads-non-priced/brand-visual-company-scope-01.png",
    alt: { ar: "نطاق أعمال كابيتال واسي", en: "Capital Oasis company scope" },
    caption: { ar: "نبدأ بفهم المشروع قبل اختيار الحل", en: "We begin by understanding the project" },
    title: { ar: "فهم المشروع", en: "Understand the project" },
  },
];

export const doorsHeroMediaPool = uniqueHeroMediaItems([
  heroDoorDesignItems[0],
  heroDoorDesignItems[2],
  heroDoorDesignItems[1],
  doorPreviousWorksItems[7],
  doorPreviousWorksItems[5],
  pickDoorDirection("wood", 0),
  pickDoorDirection("wood", 1),
  pickDoorDirection("wood", 3),
  pickDoorDirection("wood", 2),
  pickDoorDirection("wood", 4),
  pickDoorDirection("pvc", 1),
  pickDoorDirection("pvc", 2),
  pickDoorDirection("pvc", 3),
  pickDoorDirection("wpc", 0),
  pickDoorDirection("wpc", 1),
  pickDoorDirection("pvc", 4),
  pickDoorDirection("wpc", 2),
  pickDoorDirection("wpc", 3),
  doorPreviousWorksItems[0],
  doorPreviousWorksItems[1],
  doorPreviousWorksItems[2],
].map((item) => toUnifiedHeroMediaItem(item, "doors-hero", heroLabels.doors)));

export const kitchensHeroMediaPool = uniqueHeroMediaItems([
  kitchenHeroItems[0],
  kitchenHeroItems[1],
  kitchenHeroItems[2],
  kitchenShowcaseItems[0],
  kitchenShowcaseItems[4],
  pickKitchenEditorial("kitchen-systems", 0),
  pickKitchenEditorial("kitchen-systems", 2),
  pickKitchenEditorial("kitchen-systems", 3),
  pickKitchenEditorial("kitchen-systems", 4),
  pickKitchenEditorial("kitchen-systems", 5),
  pickKitchenEditorial("kitchen-materials-finishes", 1),
  pickKitchenEditorial("kitchen-materials-finishes", 5),
  pickKitchenEditorial("kitchen-materials-finishes", 0),
  pickKitchenEditorial("kitchen-materials-finishes", 2),
  pickKitchenEditorial("kitchen-storage-solutions", 1),
  kitchenShowcaseItems[3],
  kitchenShowcaseItems[5],
  pickKitchenEditorial("kitchen-materials-finishes", 3),
  pickKitchenEditorial("kitchen-materials-finishes", 4),
  pickKitchenEditorial("kitchen-storage-solutions", 0),
].map((item) =>
  toUnifiedHeroMediaItem(item, "kitchens-hero", heroLabels.kitchens),
));

export const dressingRoomsHeroMediaPool = uniqueHeroMediaItems(
  dressingRoomAllItems.map((item) =>
    toUnifiedHeroMediaItem(item, "dressing-rooms-hero", heroLabels.dressing),
  ),
);

export const commercialShopsHeroMediaPool = uniqueHeroMediaItems([
  ...marahibCommercialHeroMediaSources,
  commercialAljaziraSuperUpdatedItems[2],
  commercialAljaziraSuperUpdatedItems[0],
  commercialAljaziraSuperUpdatedItems[1],
  commercialAljaziraSuperUpdatedItems[4],
  commercialAljaziraSuperUpdatedItems[3],
  commercialAljaziraSuperUpdatedItems[5],
  commercialAljaziraSuperUpdatedItems[6],
  commercialAljaziraSuperUpdatedItems[8],
  commercialAljaziraSuperUpdatedItems[9],
  commercialAljaziraSuperUpdatedItems[10],
  commercialShopsPreviousWorksItems[8],
  commercialShopsPreviousWorksItems[9],
  commercialShopsPreviousWorksItems[10],
  commercialShopsPreviousWorksItems[11],
  commercialShopsPreviousWorksItems[12],
].map((item) =>
  toUnifiedHeroMediaItem(item, "commercial-shops-hero", heroLabels.commercial),
));

export const eventsHeroMediaPool = uniqueHeroMediaItems([
  eventsHeroItems[0],
  eventsHeroItems[3],
  pickEventCaseImage("events-case-princess-seetah", 2),
  pickEventCaseImage("events-case-princess-seetah", 0),
  eventsHeroItems[1],
  pickEventCaseImage("events-case-princess-seetah", 4),
  pickEventCaseImage("events-case-princess-seetah", 1),
  pickEventCaseImage("events-case-princess-seetah", 3),
  eventsHeroItems[2],
  pickEventsSection("events-booths", 0),
  pickEventsSection("events-booths", 1),
  pickEventsSection("events-stages-backdrops", 0),
  pickEventsSection("events-stages-backdrops", 1),
  pickEventsSection("events-visitor-experience", 0),
  pickEventsSection("events-visitor-experience", 1),
  pickEventsSection("events-celebrations", 0),
  pickEventsSection("events-celebrations", 1),
  pickEventsSection("events-celebrations", 2),
  pickEventsSection("events-celebrations", 3),
  pickEventCaseImage("events-case-king-salman", 0),
  pickEventCaseImage("events-case-king-salman", 1),
  pickEventCaseImage("events-case-king-salman", 2),
  pickEventCaseImage("events-case-king-salman", 3),
].map((item) => toUnifiedHeroMediaItem(item, "events-hero", heroLabels.events)));

export const otherServicesHeroMediaPool = uniqueHeroMediaItems([
  designToUnifiedHeroMediaItem(
    "design-luxury-lobby-lounge",
    "other-services-hero",
    heroLabels.otherServices,
  ),
  designToUnifiedHeroMediaItem(
    "design-backlit-marble-tv-unit",
    "other-services-hero",
    heroLabels.otherServices,
  ),
  designToUnifiedHeroMediaItem(
    "design-wood-slat-tv-wall",
    "other-services-hero",
    heroLabels.otherServices,
  ),
  designToUnifiedHeroMediaItem(
    "design-storage-coffee-station-unit",
    "other-services-hero",
    heroLabels.otherServices,
  ),
  designToUnifiedHeroMediaItem(
    "design-glass-display-coffee-station",
    "other-services-hero",
    heroLabels.otherServices,
  ),
  designToUnifiedHeroMediaItem(
    "design-luxury-console-wall-decor",
    "other-services-hero",
    heroLabels.otherServices,
  ),
  ...otherServicesAdditionalHeroMediaSources.map((item) =>
    toUnifiedHeroMediaItem(item, "other-services-hero", heroLabels.otherServices),
  ),
  ...otherServicesHeroExpansionSources.map((item) =>
    toUnifiedHeroMediaItem(item, "other-services-hero", heroLabels.otherServices),
  ),
  ...otherServicesComplementaryHeroSources.map((item) =>
    toUnifiedHeroMediaItem(item, "other-services-hero", heroLabels.otherServices),
  ),
].map((item) => ({ ...item, groupId: "other-services-hero" })));

const contactHeroMediaPoolSource = [
  toUnifiedHeroMediaItem(
    {
      id: "contact-company-scope",
      src: "/images/capital-oasis/ads-non-priced/brand-visual-company-scope-01.png",
      alt: {
        ar: "لمحة عن نطاق أعمال كابيتال واسي",
        en: "Capital Oasis company scope",
      },
      caption: {
        ar: "نطاق أعمال واضح للمشاريع والمساحات",
        en: "A clear scope for projects and spaces",
      },
      title: {
        ar: "نبدأ من فهم المشروع",
        en: "We begin by understanding the project",
      },
    },
    "contact-hero",
    heroLabels.contact,
  ),
  toUnifiedHeroMediaItem(
    {
      id: "contact-services-scope",
      src: "/images/capital-oasis/ads-non-priced/brand-visual-services-scope-01.png",
      alt: {
        ar: "خدمات كابيتال واسي للمساحات والمشاريع",
        en: "Capital Oasis services for spaces and projects",
      },
      caption: {
        ar: "حلول مترابطة من الاختيار إلى التنفيذ",
        en: "Connected solutions from selection to delivery",
      },
      title: {
        ar: "نحدد المسار الأنسب",
        en: "We define the right path",
      },
    },
    "contact-hero",
    heroLabels.contact,
  ),
  toUnifiedHeroMediaItem(
    {
      id: "contact-decoration-scope",
      src: "/images/capital-oasis/ads-non-priced/brand-visual-decoration-01.png",
      alt: {
        ar: "تفاصيل ديكورية من أعمال كابيتال واسي",
        en: "Decorative details from Capital Oasis work",
      },
      caption: {
        ar: "تفاصيل تمنح المشروع حضوره النهائي",
        en: "Details that give the project its final presence",
      },
      title: {
        ar: "كل رسالة تبدأ بتفصيل مهم",
        en: "Every conversation starts with an important detail",
      },
    },
    "contact-hero",
    heroLabels.contact,
  ),
  ...contactAdditionalHeroMediaSources.map((item) =>
    toUnifiedHeroMediaItem(item, "contact-hero", heroLabels.contact),
  ),
  ...contactHeroExpansionSources.map((item) =>
    toUnifiedHeroMediaItem(item, "contact-hero", heroLabels.contact),
  ),
  ...contactScopeExpansionSources.map((item) =>
    toUnifiedHeroMediaItem(item, "contact-hero", heroLabels.contact),
  ),
];

export const contactHeroMediaPool = uniqueHeroMediaItems(contactHeroMediaPoolSource);

function interleaveHeroMediaPools(
  pools: readonly (readonly UnifiedHeroMediaItem[])[],
  maxItems?: number,
) {
  const combined: UnifiedHeroMediaItem[] = [];
  const maxLength = Math.max(...pools.map((pool) => pool.length));

  for (let index = 0; index < maxLength; index += 1) {
    for (const pool of pools) {
      const item = pool[index];

      if (item) {
        combined.push({ ...item, groupId: "homepage-hero" });
      }

      if (maxItems && uniqueHeroMediaItems(combined).length >= maxItems) {
        return uniqueHeroMediaItems(combined).slice(0, maxItems);
      }
    }
  }

  const uniqueItems = uniqueHeroMediaItems(combined);

  return maxItems ? uniqueItems.slice(0, maxItems) : uniqueItems;
}

export const homepageHeroMediaPool = interleaveHeroMediaPools([
  commercialShopsHeroMediaPool,
  doorsHeroMediaPool,
  kitchensHeroMediaPool,
  dressingRoomsHeroMediaPool,
  eventsHeroMediaPool,
  otherServicesHeroMediaPool,
  contactHeroMediaPool,
], 30);

export const unifiedHeroMediaPools = {
  commercialShops: commercialShopsHeroMediaPool,
  contact: contactHeroMediaPool,
  doors: doorsHeroMediaPool,
  dressingRooms: dressingRoomsHeroMediaPool,
  events: eventsHeroMediaPool,
  homepage: homepageHeroMediaPool,
  kitchens: kitchensHeroMediaPool,
  otherServices: otherServicesHeroMediaPool,
} as const;
