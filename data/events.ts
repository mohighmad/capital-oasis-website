import type { Bilingual } from "./content";

export type EventsGroupId =
  | "events-hero"
  | "events-booths"
  | "events-stages-backdrops"
  | "events-celebrations"
  | "events-visitor-experience"
  | "events-case-princess-seetah"
  | "events-case-mushaf"
  | "events-case-king-salman"
  | "events-solution-directions";

export type EventsGalleryItem = {
  id: string;
  src: string;
  alt: Bilingual;
  title: Bilingual;
  caption: Bilingual;
  groupId: EventsGroupId;
  groupLabel: Bilingual;
  objectFit: "cover" | "contain";
  objectPosition: string;
};

export type EventsEditorialSection = {
  id: Exclude<EventsGroupId, "events-hero">;
  eyebrow: Bilingual;
  title: Bilingual;
  text: Bilingual;
  benefits: Bilingual[];
  serviceTags: Bilingual[];
  ctaLabel: Bilingual;
  items: EventsGalleryItem[];
};

export type EventsRouteVideo = {
  id: string;
  video: string;
  poster: string;
  alt: Bilingual;
  railTitle: Bilingual;
  railCaption: Bilingual;
  objectPosition?: string;
};

export type EventSource = {
  label: string;
  url: string;
};

export type EventsCaseModule = {
  id: string;
  eyebrow: Bilingual;
  title: Bilingual;
  context: Bilingual;
  text: Bilingual;
  factPills: Bilingual[];
  highlights: Bilingual[];
  ctaLabel: Bilingual;
  imageRailLabel: Bilingual;
  images: EventsGalleryItem[];
  videoId?: EventsRouteVideo["id"];
  sources: EventSource[];
};

export type EventsSupportSection = {
  eyebrow: Bilingual;
  title: Bilingual;
  text: Bilingual;
  factPills: Bilingual[];
  images: EventsGalleryItem[];
};

const eventsBase = "/images/capital-oasis/events";
const exhibitionsBase = "/images/capital-oasis/exhibitions-events";
const exhibitionsProcessedBase = `${exhibitionsBase}/processed`;
const curatedPostersBase =
  "/images/capital-oasis/project-videos/posters-curated-v6";
const routeVideosBase = "/videos/capital-oasis/events";
const routeVideosV8Base = `${routeVideosBase}/v8`;
const routeVideosV10Base = `${routeVideosBase}/v10`;
const readyEventsVideosBase = "/videos/capital-oasis/site-videos/events";
const eventCaseModulesBase = `${eventsBase}/case-modules`;
const websiteEventsPhotosBase = "/images/capital-oasis/website-photos/events";
const princessSeetahSiteImagesBase =
  "/images/capital-oasis/events/princess-seetah-award";
const mushafWritingCompetitionPublicBase =
  `${websiteEventsPhotosBase}/mushaf-writing-competition`;

const groups = {
  hero: {
    en: "Event and exhibition atmosphere",
    ar: "أجواء الفعاليات والمعارض",
  },
  booths: {
    en: "Booths and visitor flow",
    ar: "الأجنحة ومسار الزوار",
  },
  stages: {
    en: "Stages and backdrops",
    ar: "المنصات والخلفيات",
  },
  celebrations: {
    en: "Celebration and ceremony atmosphere",
    ar: "أجواء الاحتفالات والمراسم",
  },
  visitorFlow: {
    en: "Entrance and guest experience details",
    ar: "تفاصيل الاستقبال وتجربة الحضور",
  },
} satisfies Record<string, Bilingual>;

function eventImage(
  id: string,
  src: string,
  groupId: EventsGroupId,
  groupLabel: Bilingual,
  title: Bilingual,
  caption: Bilingual,
  objectPosition = "center",
  objectFit: "cover" | "contain" = "cover",
): EventsGalleryItem {
  return {
    id,
    src,
    alt: title,
    title,
    caption,
    groupId,
    groupLabel,
    objectFit,
    objectPosition,
  };
}

function routeVideo(
  id: string,
  video: string,
  poster: string,
  railTitle: Bilingual,
  railCaption: Bilingual,
  objectPosition = "center",
): EventsRouteVideo {
  return {
    id,
    video,
    poster,
    alt: railTitle,
    railTitle,
    railCaption,
    objectPosition,
  };
}

export const eventsHeroItems: EventsGalleryItem[] = [
  eventImage(
    "event-hero-stage",
    `${exhibitionsProcessedBase}/exhibition-event-stage-02.webp`,
    "events-hero",
    groups.hero,
    {
      en: "Event stage direction with a warmer ceremonial focus",
      ar: "اتجاه منصة يمنح الفعالية حضوراً احتفالياً دافئاً",
    },
    {
      en: "A premium stage scene that anchors the event identity from the first glance.",
      ar: "مشهد منصة راقٍ يثبت هوية الفعالية منذ النظرة الأولى.",
    },
    "center 52%",
  ),
  eventImage(
    "event-hero-celebration",
    `${eventsBase}/celebration-setup-01.jpg`,
    "events-hero",
    groups.hero,
    {
      en: "Reception setup that feels calm and welcoming",
      ar: "استقبال احتفالي بهدوء وترحيب واضح",
    },
    {
      en: "A reception direction that balances decoration, guest arrival, and first impressions.",
      ar: "اتجاه استقبال يوازن بين الديكور ولحظة وصول الضيوف والانطباع الأول.",
    },
    "center 50%",
  ),
  eventImage(
    "event-hero-entrance",
    `${eventsBase}/event-entrance-01.jpg`,
    "events-hero",
    groups.hero,
    {
      en: "Entrance moment designed around organized arrival",
      ar: "مدخل يخدم وصول الحضور بصورة منظمة",
    },
    {
      en: "An entrance composition that helps the event feel considered before guests reach the main scene.",
      ar: "تكوين مدخل يساعد الفعالية على الظهور بصورة مدروسة قبل الوصول إلى المشهد الرئيسي.",
    },
    "center 48%",
  ),
  eventImage(
    "event-hero-hall",
    `${exhibitionsProcessedBase}/exhibition-event-hall-01.webp`,
    "events-hero",
    groups.hero,
    {
      en: "Hall view with balanced visual layering",
      ar: "مشهد قاعة بتوزيع بصري متوازن",
    },
    {
      en: "A composed hall perspective that supports guest movement and the atmosphere of the venue.",
      ar: "زاوية قاعة متوازنة تدعم حركة الحضور وأجواء المكان.",
    },
    "center 52%",
  ),
];

export const eventsEditorialSections: EventsEditorialSection[] = [
  {
    id: "events-booths",
    eyebrow: {
      en: "Booths and visitor route",
      ar: "الأجنحة ومسار الزيارة",
    },
    title: {
      en: "Booth layouts that make the entry, display, and interaction path feel clearer.",
      ar: "أجنحة عرض تجعل الدخول والعرض والتفاعل أكثر وضوحاً للزائر",
    },
    text: {
      en: "When the booth is easy to read from the front edge and the circulation path feels guided, the event appears more polished and the visitor understands the experience faster.",
      ar: "عندما يكون الجناح واضحاً من الواجهة ومسار الحركة موجهاً، تبدو الفعالية أكثر ترتيباً ويصل الزائر لفكرة التجربة بشكل أسرع.",
    },
    benefits: [
      {
        en: "Clearer entry rhythm and stronger booth read",
        ar: "إيقاع دخول أوضح وواجهة جناح أسهل قراءة",
      },
      {
        en: "Display points that keep the visitor focused",
        ar: "نقاط عرض تحافظ على تركيز الزائر",
      },
      {
        en: "Movement paths that reduce visual clutter",
        ar: "مسارات حركة تقلل الشعور بالازدحام البصري",
      },
      {
        en: "A stronger branded presence inside the hall",
        ar: "حضور هوية أقوى داخل القاعة",
      },
    ],
    serviceTags: [
      { en: "Exhibition booths", ar: "أجنحة معارض" },
      { en: "Visitor flow", ar: "مسار الزوار" },
      { en: "Display fronts", ar: "واجهات العرض" },
      { en: "Interaction points", ar: "نقاط التفاعل" },
    ],
    ctaLabel: {
      en: "Discuss the right booth direction",
      ar: "ناقش معنا اتجاه الجناح المناسب",
    },
    items: [
      eventImage(
        "events-booths-entrance-01",
        `${exhibitionsProcessedBase}/exhibition-event-entrance-01.webp`,
        "events-booths",
        groups.booths,
        {
          en: "Entrance-led booth composition",
          ar: "تكوين جناح يقود الزائر من لحظة الدخول",
        },
        {
          en: "A front composition that makes the booth feel open, directed, and ready for movement.",
          ar: "تكوين واجهة يجعل الجناح مفتوحاً وواضحاً ومهيأً للحركة.",
        },
        "center 50%",
      ),
      eventImage(
        "events-booths-entrance-02",
        `${exhibitionsProcessedBase}/exhibition-event-entrance-02.webp`,
        "events-booths",
        groups.booths,
        {
          en: "Booth edge with stronger arrival definition",
          ar: "واجهة جناح بتحديد أوضح للحضور والوصول",
        },
        {
          en: "Useful when the event needs a stronger arrival moment without visual heaviness.",
          ar: "مناسب عندما تحتاج الفعالية إلى لحظة وصول أقوى دون ثقل بصري.",
        },
        "center 50%",
      ),
      eventImage(
        "events-booths-seating-01",
        `${exhibitionsProcessedBase}/exhibition-event-seating-01.webp`,
        "events-booths",
        groups.booths,
        {
          en: "Seating integrated with the display route",
          ar: "جلسات مدمجة مع مسار العرض",
        },
        {
          en: "A layout that supports both pausing and moving through the event without losing focus.",
          ar: "توزيع يدعم التوقف والحركة داخل الفعالية دون فقدان التركيز.",
        },
        "center 54%",
      ),
      eventImage(
        "events-booths-stage-01",
        `${exhibitionsProcessedBase}/exhibition-event-stage-01.webp`,
        "events-booths",
        groups.booths,
        {
          en: "Booth scene with a clearer focal anchor",
          ar: "مشهد جناح بنقطة تركيز أوضح",
        },
        {
          en: "A focal direction that helps visitors understand where the key interaction happens.",
          ar: "اتجاه بصري يساعد الزائر على فهم مكان اللحظة الرئيسية للتفاعل.",
        },
        "center 50%",
      ),
    ],
  },
  {
    id: "events-stages-backdrops",
    eyebrow: {
      en: "Stages and backdrop composition",
      ar: "المنصات وتكوين الخلفيات",
    },
    title: {
      en: "Stage and backdrop scenes designed to match the scale of the occasion.",
      ar: "منصات وخلفيات مصممة لتناسب مستوى الحدث ومساحته",
    },
    text: {
      en: "The stage and backdrop carry the visual center of the event, so lighting rhythm, side framing, and material layering need to feel intentional rather than decorative only.",
      ar: "المنصة والخلفية تحملان المركز البصري للفعالية، لذلك يجب أن تبدو الإضاءة والإطار الجانبي وتدرج الخامات جزءاً مقصوداً من المشهد لا مجرد إضافة زخرفية.",
    },
    benefits: [
      {
        en: "A clearer focal point for the audience",
        ar: "نقطة تركيز أوضح للحضور",
      },
      {
        en: "Backdrop depth that supports photography",
        ar: "عمق خلفية يخدم التصوير",
      },
      {
        en: "Lighting rhythm that strengthens the stage",
        ar: "إيقاع إضاءة يعزز حضور المنصة",
      },
      {
        en: "A cleaner stage edge and side framing",
        ar: "حافة منصة أكثر ترتيباً وإطار جانبي أوضح",
      },
    ],
    serviceTags: [
      { en: "Stages", ar: "منصات" },
      { en: "Backdrops", ar: "خلفيات" },
      { en: "Decor details", ar: "تفاصيل ديكور" },
      { en: "Event framing", ar: "صياغة المشهد" },
    ],
    ctaLabel: {
      en: "Choose the right stage presence",
      ar: "اختر حضور المنصة المناسب",
    },
    items: [
      eventImage(
        "events-stage-backdrop-main",
        `${eventsBase}/event-backdrop-01.jpg`,
        "events-stages-backdrops",
        groups.stages,
        {
          en: "Backdrop wall with a stronger visual signature",
          ar: "خلفية رئيسية بحضور بصري أوضح",
        },
        {
          en: "A backdrop direction that gives the occasion a stronger identity inside the hall.",
          ar: "اتجاه خلفية يمنح المناسبة بصمة أقوى داخل القاعة.",
        },
        "center 50%",
      ),
      eventImage(
        "events-stage-drapery",
        `${exhibitionsProcessedBase}/exhibition-event-drapery-01.webp`,
        "events-stages-backdrops",
        groups.stages,
        {
          en: "Layered side detailing around the main scene",
          ar: "تفاصيل جانبية متعددة الطبقات حول المشهد الرئيسي",
        },
        {
          en: "Useful when the event needs softer transitions around the main platform or backdrop.",
          ar: "مناسب عندما تحتاج الفعالية إلى انتقالات أكثر هدوءاً حول المنصة أو الخلفية الرئيسية.",
        },
        "center 48%",
      ),
      eventImage(
        "events-stage-stage-02",
        `${exhibitionsProcessedBase}/exhibition-event-stage-02.webp`,
        "events-stages-backdrops",
        groups.stages,
        {
          en: "Stage scene with warmer ceremonial lighting",
          ar: "مشهد منصة بإضاءة احتفالية أدفأ",
        },
        {
          en: "A composed stage arrangement that strengthens the center of the occasion without closing the space around it.",
          ar: "ترتيب منصة يعزز مركز المناسبة دون أن يغلق المساحة المحيطة بها.",
        },
        "center 52%",
      ),
      eventImage(
        "events-stage-setup",
        `${eventsBase}/event-setup-02.jpg`,
        "events-stages-backdrops",
        groups.stages,
        {
          en: "Stage direction balanced with the venue edge",
          ar: "اتجاه منصة متوازن مع حدود القاعة",
        },
        {
          en: "A useful layout when the event needs visible stage presence while staying integrated with the hall.",
          ar: "اتجاه مناسب عندما تحتاج الفعالية إلى حضور واضح للمنصة مع بقاء المشهد منسجماً مع القاعة.",
        },
        "center 52%",
      ),
    ],
  },
  {
    id: "events-celebrations",
    eyebrow: {
      en: "Celebrations and hall atmosphere",
      ar: "الاحتفالات وأجواء القاعات",
    },
    title: {
      en: "Celebration setups that feel warm, organized, and suitable for guest-facing moments.",
      ar: "تجهيزات احتفالية تبدو دافئة ومنظمة ومناسبة للحضور والضيافة",
    },
    text: {
      en: "Some occasions need a calmer hospitality mood, a cleaner seating rhythm, and hall scenes that feel premium without becoming overly formal or visually heavy.",
      ar: "بعض المناسبات تحتاج إلى أجواء ضيافة أكثر هدوءاً، وإيقاع جلسات أوضح، ومشاهد قاعات تبدو راقية دون مبالغة أو ثقل بصري.",
    },
    benefits: [
      {
        en: "A stronger first impression at arrival",
        ar: "انطباع أول أقوى عند الوصول",
      },
      {
        en: "Hall atmosphere that feels organized and warm",
        ar: "أجواء قاعة تبدو منظمة ودافئة",
      },
      {
        en: "Decor details that support gathering and photography",
        ar: "تفاصيل ديكور تخدم التجمع والتصوير",
      },
      {
        en: "Balanced seating and reception presence",
        ar: "توازن بين الجلسات والاستقبال",
      },
    ],
    serviceTags: [
      { en: "Reception scenes", ar: "مشاهد استقبال" },
      { en: "Hall decor", ar: "ديكور القاعات" },
      { en: "Celebration layouts", ar: "توزيع احتفالي" },
      { en: "Warm atmosphere", ar: "أجواء دافئة" },
    ],
    ctaLabel: {
      en: "Share the ceremony or celebration brief",
      ar: "أرسل لنا فكرة الحفل أو المناسبة",
    },
    items: [
      eventImage(
        "events-celebration-setup",
        `${eventsBase}/celebration-setup-01.jpg`,
        "events-celebrations",
        groups.celebrations,
        {
          en: "Celebration reception with a softer mood",
          ar: "استقبال احتفالي بلمسة أكثر هدوءاً",
        },
        {
          en: "A guest-facing setup that balances welcome, decor, and visual clarity at the entrance.",
          ar: "تجهيز يستقبل الضيوف بتوازن بين الترحيب والديكور ووضوح المشهد عند المدخل.",
        },
        "center 50%",
      ),
      eventImage(
        "events-celebration-seating",
        `${eventsBase}/event-seating-01.jpg`,
        "events-celebrations",
        groups.celebrations,
        {
          en: "Seating rhythm that supports a calmer gathering",
          ar: "إيقاع جلسات يدعم التجمع بصورة أكثر هدوءاً",
        },
        {
          en: "A seating direction that helps the hall feel settled, premium, and ready for guests.",
          ar: "اتجاه جلسات يساعد القاعة على الظهور بصورة مرتبة وراقية وجاهزة للحضور.",
        },
        "center 52%",
      ),
      eventImage(
        "events-celebration-hall",
        `${exhibitionsProcessedBase}/exhibition-event-hall-01.webp`,
        "events-celebrations",
        groups.celebrations,
        {
          en: "Hall perspective with layered ceremony detailing",
          ar: "زاوية قاعة بتفاصيل احتفالية متعددة الطبقات",
        },
        {
          en: "A composed hall view that supports sightlines, lighting, and a refined atmosphere.",
          ar: "مشهد قاعة متوازن يدعم خطوط النظر والإضاءة والأجواء الراقية.",
        },
        "center 52%",
      ),
      eventImage(
        "events-celebration-setup-01",
        `${eventsBase}/event-setup-01.jpg`,
        "events-celebrations",
        groups.celebrations,
        {
          en: "Warm stage edge with a calmer room mood",
          ar: "حافة منصة دافئة بأجواء قاعة أكثر هدوءاً",
        },
        {
          en: "A useful direction when the event needs ceremonial warmth without visual overload.",
          ar: "اتجاه مناسب عندما تحتاج الفعالية إلى دفء احتفالي دون ازدحام بصري.",
        },
        "center 54%",
      ),
    ],
  },
  {
    id: "events-visitor-experience",
    eyebrow: {
      en: "Entrance and guest experience details",
      ar: "تفاصيل الاستقبال وتجربة الحضور",
    },
    title: {
      en: "Scenes that support the guest journey from the entrance to the final atmosphere.",
      ar: "مشاهد تدعم رحلة الحضور من المدخل حتى اكتمال الأجواء",
    },
    text: {
      en: "Events feel more complete when the entry moment, side framing, and movement inside the hall all work together instead of competing for attention.",
      ar: "تبدو الفعالية أكثر اكتمالاً عندما تعمل لحظة الدخول والإطار الجانبي والحركة داخل القاعة معاً بدلاً من التنافس على الانتباه.",
    },
    benefits: [
      {
        en: "A smoother guest arrival experience",
        ar: "تجربة وصول أكثر سلاسة للحضور",
      },
      {
        en: "Cleaner transitions between event zones",
        ar: "انتقالات أوضح بين مناطق الفعالية",
      },
      {
        en: "Balanced visual layering inside the venue",
        ar: "توازن بصري أفضل داخل المكان",
      },
      {
        en: "Support for wayfinding, photography, and presence",
        ar: "دعم أوضح للحركة والتصوير والحضور",
      },
    ],
    serviceTags: [
      { en: "Entrance moments", ar: "لحظات الاستقبال" },
      { en: "Wayfinding cues", ar: "إشارات الحركة" },
      { en: "Guest circulation", ar: "حركة الحضور" },
      { en: "Spatial rhythm", ar: "إيقاع المساحة" },
    ],
    ctaLabel: {
      en: "Send the venue dimensions and event timing",
      ar: "أرسل مقاسات الموقع ووقت الفعالية",
    },
    items: [
      eventImage(
        "events-experience-entrance",
        `${eventsBase}/event-entrance-01.jpg`,
        "events-visitor-experience",
        groups.visitorFlow,
        {
          en: "Entrance scene shaped around arrival",
          ar: "مشهد مدخل مصمم حول لحظة الوصول",
        },
        {
          en: "An entrance treatment that helps the event feel organized before guests reach the main area.",
          ar: "تصميم مدخل يجعل الفعالية تبدو منظمة قبل وصول الحضور إلى المساحة الرئيسية.",
        },
        "center 50%",
      ),
      eventImage(
        "events-experience-entrance-03",
        `${exhibitionsProcessedBase}/exhibition-event-entrance-03.webp`,
        "events-visitor-experience",
        groups.visitorFlow,
        {
          en: "Visitor-facing front edge with stronger visual pacing",
          ar: "واجهة زائر بإيقاع بصري أوضح",
        },
        {
          en: "Useful when the event needs the front edge to feel more intentional and memorable.",
          ar: "مناسب عندما تحتاج الفعالية إلى واجهة أكثر قصدية وسهلة التذكر.",
        },
        "center 50%",
      ),
      eventImage(
        "events-experience-seating-02",
        `${exhibitionsProcessedBase}/exhibition-event-seating-02.webp`,
        "events-visitor-experience",
        groups.visitorFlow,
        {
          en: "Additional seating rhythm for flexible guest use",
          ar: "إيقاع جلسات إضافي لاستخدام مرن للحضور",
        },
        {
          en: "A secondary seating direction that keeps the hall practical without losing polish.",
          ar: "اتجاه جلسات ثانوي يحافظ على العملية دون أن يفقد القاعة أناقتها.",
        },
        "center 50%",
      ),
      eventImage(
        "events-experience-stage-02",
        `${exhibitionsProcessedBase}/exhibition-event-stage-02.webp`,
        "events-visitor-experience",
        groups.visitorFlow,
        {
          en: "Final atmosphere anchored by the stage scene",
          ar: "أجواء نهائية ترتكز على مشهد المنصة",
        },
        {
          en: "A premium scene that ties guest movement and the central event moment together.",
          ar: "مشهد راقٍ يجمع بين حركة الحضور واللحظة الرئيسية داخل الفعالية.",
        },
        "center 50%",
      ),
    ],
  },
];

export const eventsRouteVideos: EventsRouteVideo[] = [
  routeVideo(
    "event-mushaf-writing-competition",
    `${readyEventsVideosBase}/mushaf-writing-competition-site-ready.mp4`,
    `${curatedPostersBase}/event-mushaf-writing-competition-poster-v6.webp`,
    {
      en: "Mushaf Writing Competition",
      ar: "تجهيزات مسابقة كتابة المصحف",
    },
    {
      en: "Short footage showing how stage presentation and display details come together for the event atmosphere.",
      ar: "لقطات قصيرة توضح كيف تتكامل المنصة وتفاصيل العرض لصناعة أجواء الفعالية.",
    },
    "center 50%",
  ),
  routeVideo(
    "event-princess-seetah-award",
    `${readyEventsVideosBase}/princess-seetah-award-site-ready-v2.mp4`,
    `${routeVideosV8Base}/event-princess-seetah-award-poster-v8.webp`,
    {
      en: "Princess Seetah Award",
      ar: "تجهيزات جائزة الأميرة صيتة",
    },
    {
      en: "A ceremony-focused film highlighting hall presence, reception atmosphere, and premium framing.",
      ar: "فيلم يركز على أجواء المراسم وحضور القاعة وتفاصيل الاستقبال بصياغة راقية.",
    },
    "center 50%",
  ),
  routeVideo(
    "event-king-salman-quran-award",
    `${readyEventsVideosBase}/king-salman-quran-competition-site-ready.mp4`,
    `${curatedPostersBase}/event-king-salman-quran-award-poster-v6.webp`,
    {
      en: "King Salman Quran Award",
      ar: "تجهيزات جائزة الملك سلمان للقرآن الكريم",
    },
    {
      en: "A formal event film showing composed hall rhythm and a more official ceremonial mood.",
      ar: "فيلم فعالية رسمية يوضح إيقاع القاعة وصياغة أجواء أكثر رسمية واتزاناً.",
    },
    "center 50%",
  ),
  routeVideo(
    "event-marahib-tuwaiq",
    `${readyEventsVideosBase}/marahib-tuwaiq-site-ready.mp4`,
    `${websiteEventsPhotosBase}/marahib-tuwaiq/marahib-tuwaiq-image-001.jpg`,
    {
      en: "Marahib Tuwaiq",
      ar: "مراحب طويق",
    },
    {
      en: "A ready project film showing the preparation, atmosphere, and visitor-facing details of the Marahib Tuwaiq event.",
      ar: "فيلم مشروع جاهز يوضح التجهيز والأجواء والتفاصيل الموجهة للزوار في مشروع مراحب طويق.",
    },
    "center 44%",
  ),
  routeVideo(
    "event-proptech",
    `${readyEventsVideosBase}/proptech-site-ready-v2.mp4`,
    `${websiteEventsPhotosBase}/events-proptech-001.jpeg`,
    {
      en: "بروبتك - PropTech",
      ar: "بروبتك - PropTech",
    },
    {
      en: "Approved footage showing the exhibition setup, display units, and visitor-facing PropTech presence.",
      ar: "لقطات معتمدة توضح تجهيز المعرض ووحدات العرض والحضور الموجه للزوار في بروبتك.",
    },
    "center 50%",
  ),
  routeVideo(
    "event-china-home-life",
    `${readyEventsVideosBase}/china-home-life-site-ready-v1.mp4`,
    `${websiteEventsPhotosBase}/china-home-life/china-home-life-image-001.jpg`,
    {
      en: "China Home Life",
      ar: "China Home Life",
    },
    {
      en: "Approved footage showing the China Home Life booth identity and exhibition setup.",
      ar: "لقطات معتمدة توضح هوية جناح China Home Life وتجهيزات المعرض.",
    },
    "center 50%",
  ),
];

const caseGroups = {
  princessSeetah: {
    en: "Princess Seetah Award Setup Images",
    ar: "صور من تجهيزات جائزة الأميرة صيتة",
  },
  mushaf: {
    en: "Mushaf Writing Competition",
    ar: "مسابقة كتابة المصحف الشريف",
  },
  kingSalman: {
    en: "King Salman Quran Award",
    ar: "جائزة الملك سلمان للقرآن الكريم",
  },
  solutionDirections: {
    en: "Event support directions",
    ar: "اتجاهات دعم الفعاليات",
  },
} satisfies Record<string, Bilingual>;

export const eventCaseModules: EventsCaseModule[] = [
  {
    id: "events-case-princess-seetah",
    eyebrow: {
      en: "02 — Award Hall",
      ar: "02 — قاعة التكريم",
    },
    title: caseGroups.princessSeetah,
    context: {
      en: "A formal award setting built around social-work excellence, composed for a calm arrival and a clear ceremony moment.",
      ar: "تجهيز رسمي لجائزة التميز في العمل الاجتماعي، بصياغة هادئة للوصول ولحظة التكريم.",
    },
    text: {
      en: "The design direction keeps the hall composed, the ceremonial identity legible, and the reception path aligned with the tone of recognition described by SPA.",
      ar: "يحافظ الاتجاه التصميمي على وضوح القاعة وهوية المراسم ومسار استقبال ينسجم مع لحظة التكريم كما تصفها واس.",
    },
    factPills: [
      { en: "Social work excellence", ar: "التميز في العمل الاجتماعي" },
      { en: "Ceremony hall", ar: "قاعة مراسم" },
      { en: "Reception path", ar: "مسار استقبال" },
    ],
    highlights: [
      {
        en: "Formal staging kept clear for the award moment",
        ar: "مشهد منصة رسمي واضح للحظة التكريم",
      },
      {
        en: "Hall details balanced around guests and speakers",
        ar: "تفاصيل القاعة متوازنة حول الضيوف والمتحدثين",
      },
      {
        en: "A visitor-facing route that stays calm and premium",
        ar: "مسار حضور هادئ وراقٍ",
      },
    ],
    ctaLabel: {
      en: "Plan a formal award setting",
      ar: "خطط معنا تجهيز حفل تكريم",
    },
    imageRailLabel: caseGroups.princessSeetah,
    images: [
      eventImage(
        "events-case-princess-seetah-site-01",
        `${princessSeetahSiteImagesBase}/princess-seetah-award-site-20260712-01.jpeg`,
        "events-case-princess-seetah",
        caseGroups.princessSeetah,
        {
          en: "Princess Seetah Award stage preparation",
          ar: "تجهيز منصة جائزة الأميرة صيتة",
        },
        {
          en: "An early setup view showing the stage build and hall rhythm before guest arrival.",
          ar: "لقطة تجهيز مبكرة توضح بناء المنصة وإيقاع القاعة قبل استقبال الضيوف.",
        },
        "center 50%",
      ),
      eventImage(
        "events-case-princess-seetah-site-02",
        `${princessSeetahSiteImagesBase}/princess-seetah-award-site-20260712-02.jpeg`,
        "events-case-princess-seetah",
        caseGroups.princessSeetah,
        {
          en: "Princess Seetah Award illuminated columns",
          ar: "الأعمدة المضيئة في جائزة الأميرة صيتة",
        },
        {
          en: "Lighting details that guide visitors through a calmer premium reception path.",
          ar: "تفاصيل إضاءة تقود الضيوف عبر مسار استقبال هادئ وراقٍ.",
        },
        "center 52%",
      ),
      eventImage(
        "events-case-princess-seetah-site-03",
        `${princessSeetahSiteImagesBase}/princess-seetah-award-site-20260712-03.jpeg`,
        "events-case-princess-seetah",
        caseGroups.princessSeetah,
        {
          en: "Princess Seetah Award main stage view",
          ar: "المشهد الرئيسي لمنصة جائزة الأميرة صيتة",
        },
        {
          en: "The ceremony stage framed clearly to support the recognition moment with balanced branding.",
          ar: "المنصة الرئيسية بصياغة واضحة تدعم لحظة التكريم مع حضور بصري متوازن للهوية.",
        },
        "center 50%",
      ),
      eventImage(
        "events-case-princess-seetah-site-04",
        `${princessSeetahSiteImagesBase}/princess-seetah-award-site-20260712-04.jpeg`,
        "events-case-princess-seetah",
        caseGroups.princessSeetah,
        {
          en: "Princess Seetah Award hall preparation",
          ar: "تحضير القاعة لجائزة الأميرة صيتة",
        },
        {
          en: "A wider hall scene that completes the guest-facing atmosphere around the formal ceremony setup.",
          ar: "مشهد أوسع للقاعة يكمل أجواء الاستقبال حول التجهيز الرسمي للحفل.",
        },
        "center 49%",
      ),
      eventImage(
        "events-case-princess-seetah-site-05",
        `${princessSeetahSiteImagesBase}/princess-seetah-award-site-20260712-05.jpeg`,
        "events-case-princess-seetah",
        caseGroups.princessSeetah,
        {
          en: "Princess Seetah Award formal setup perspective",
          ar: "منظور من التجهيز الرسمي لجائزة الأميرة صيتة",
        },
        {
          en: "A further view of the formal event setup, keeping the ceremony atmosphere clear and composed.",
          ar: "لقطة إضافية من التجهيز الرسمي للفعالية تحافظ على وضوح أجواء المراسم واتزانها.",
        },
        "center 50%",
      ),
    ],
    videoId: "event-princess-seetah-award",
    sources: [
      {
        label: "Saudi Press Agency - Princess Seetah Award winners announcement",
        url: "https://www.spa.gov.sa/N2486314",
      },
      {
        label: "Saudi Press Agency - Princess Seetah Award honors winners",
        url: "https://www.spa.gov.sa/N2392508",
      },
    ],
  },
  {
    id: "events-case-mushaf",
    eyebrow: {
      en: "03 — Cultural Identity",
      ar: "03 — الهوية الثقافية",
    },
    title: caseGroups.mushaf,
    context: {
      en: "A cultural competition setting where calligraphy identity, display detail, and a more considered visitor journey work together.",
      ar: "تجهيز ثقافي تتكامل فيه هوية الخط وتفاصيل العرض ورحلة حضور أكثر تدرجاً.",
    },
    text: {
      en: "The official King Fahd Complex coverage frames it as an international competition for contemporary calligraphers. This direction translates that cultural weight into clear identity, illuminated details, and a smooth path from setup to ceremony.",
      ar: "تقدم تغطية مجمع الملك فهد الحدث بوصفه مسابقة دولية للخطاطين المعاصرين، لذلك يترجم هذا الاتجاه قيمته الثقافية إلى هوية واضحة وتفاصيل مضيئة ومسار سلس من التجهيز إلى الحفل.",
    },
    factPills: [
      { en: "International calligraphers", ar: "خطاطون دوليون" },
      { en: "Accompanying exhibition", ar: "معرض مصاحب" },
      { en: "Display details", ar: "تفاصيل العرض" },
    ],
    highlights: [
      {
        en: "Display identity built around Quranic calligraphy references",
        ar: "هوية عرض مبنية على مرجعيات الخط القرآني",
      },
      {
        en: "A quieter lighting rhythm that suits the cultural tone",
        ar: "إيقاع إضاءة أهدأ يناسب الطابع الثقافي",
      },
      {
        en: "A visitor path that moves from setup to the final scene",
        ar: "مسار زائر يتدرج من التجهيز إلى المشهد النهائي",
      },
    ],
    ctaLabel: {
      en: "Discuss a cultural event setup",
      ar: "طور معنا تجهيز فعالية ثقافية",
    },
    imageRailLabel: caseGroups.mushaf,
    images: [
      eventImage(
        "events-case-mushaf-banquet-detail",
        `${eventCaseModulesBase}/mushaf-writing-competition/mushaf-writing-competition-banquet-detail.webp`,
        "events-case-mushaf",
        caseGroups.mushaf,
        {
          en: "Mushaf Writing Competition hall detail",
          ar: "تفصيل قاعة مسابقة كتابة المصحف",
        },
        {
          en: "An early hall detail that shows seating rhythm and the ceremonial floor arrangement.",
          ar: "تفصيل مبكر يوضح إيقاع الجلسات وترتيب المشهد الاحتفالي داخل القاعة.",
        },
        "center 50%",
      ),
      eventImage(
        "events-case-mushaf-illuminated-gateway",
        `${eventCaseModulesBase}/mushaf-writing-competition/mushaf-writing-competition-illuminated-gateway.webp`,
        "events-case-mushaf",
        caseGroups.mushaf,
        {
          en: "Mushaf Writing Competition illuminated gateway",
          ar: "البوابة المضيئة في مسابقة كتابة المصحف",
        },
        {
          en: "A visitor-facing gateway scene that carries the event identity with a refined glow.",
          ar: "مشهد بوابة موجه للزوار يحمل هوية الفعالية بإضاءة راقية.",
        },
        "center 52%",
      ),
      eventImage(
        "events-case-mushaf-calligraphy-identity",
        `${eventCaseModulesBase}/mushaf-writing-competition/mushaf-writing-competition-calligraphy-identity.webp`,
        "events-case-mushaf",
        caseGroups.mushaf,
        {
          en: "Mushaf Writing Competition calligraphy identity",
          ar: "هوية الخط في مسابقة كتابة المصحف",
        },
        {
          en: "Calligraphy-led identity details that reinforce the cultural tone of the event setting.",
          ar: "تفاصيل هوية مستندة إلى الخط تعزز الطابع الثقافي لتجهيز الفعالية.",
        },
        "center 48%",
      ),
      eventImage(
        "events-case-mushaf-display-units",
        `${eventCaseModulesBase}/mushaf-writing-competition/mushaf-writing-competition-display-units.webp`,
        "events-case-mushaf",
        caseGroups.mushaf,
        {
          en: "Mushaf Writing Competition display units",
          ar: "وحدات العرض في مسابقة كتابة المصحف",
        },
        {
          en: "Display pieces and final presentation details that complete the exhibition atmosphere.",
          ar: "وحدات عرض وتفاصيل نهائية تكمل أجواء الفعالية والمعرض المصاحب.",
        },
        "center 50%",
      ),
      eventImage(
        "events-case-mushaf-raw-001",
        `${mushafWritingCompetitionPublicBase}/mushaf-writing-competition-001.jpg`,
        "events-case-mushaf",
        caseGroups.mushaf,
        {
          en: "Mushaf Writing Competition setup details",
          ar: "تجهيزات مسابقة كتابة المصحف الشريف",
        },
        {
          en: "A setup view highlighting display details and the cultural atmosphere across the competition hall.",
          ar: "لقطة من تجهيزات المسابقة تبرز تفاصيل العرض والأجواء الثقافية داخل القاعة.",
        },
        "center 50%",
      ),
      eventImage(
        "events-case-mushaf-raw-002",
        `${mushafWritingCompetitionPublicBase}/mushaf-writing-competition-002.jpg`,
        "events-case-mushaf",
        caseGroups.mushaf,
        {
          en: "Competition reception and display screens",
          ar: "شاشات وعناصر استقبال المسابقة",
        },
        {
          en: "Display screens and reception elements arranged for a clear visitor-facing experience.",
          ar: "شاشات عرض وعناصر استقبال مرتبة بما يدعم تجربة حضور واضحة داخل الفعالية.",
        },
        "center 50%",
      ),
      eventImage(
        "events-case-mushaf-raw-003",
        `${mushafWritingCompetitionPublicBase}/mushaf-writing-competition-003.jpg`,
        "events-case-mushaf",
        caseGroups.mushaf,
        {
          en: "Event-space organization details",
          ar: "تفاصيل تنظيم مساحة الحدث",
        },
        {
          en: "A setup scene that clarifies spatial organization and the path toward the main cultural display.",
          ar: "لقطة توضح تنظيم المساحة ومسار الوصول إلى عناصر العرض الرئيسية في الحدث الثقافي.",
        },
        "center 50%",
      ),
      eventImage(
        "events-case-mushaf-raw-004",
        `${mushafWritingCompetitionPublicBase}/mushaf-writing-competition-004.jpg`,
        "events-case-mushaf",
        caseGroups.mushaf,
        {
          en: "Attendance and setup view",
          ar: "لقطات من حضور وتجهيز المسابقة",
        },
        {
          en: "A wide scene showing seating rhythm, stage preparation, and the main event arrangement.",
          ar: "مشهد واسع يوضح ترتيب الجلسات وتجهيز المنصة وتكوين المسابقة داخل القاعة.",
        },
        "center 50%",
      ),
      eventImage(
        "events-case-mushaf-raw-005",
        `${mushafWritingCompetitionPublicBase}/mushaf-writing-competition-005.jpg`,
        "events-case-mushaf",
        caseGroups.mushaf,
        {
          en: "Competition display details",
          ar: "تجهيزات مسابقة كتابة المصحف الشريف",
        },
        {
          en: "An additional setup view highlighting display pieces and quieter reception-side details.",
          ar: "لقطة إضافية من التجهيزات تبرز وحدات العرض وتفاصيل الاستقبال الهادئة داخل المسابقة.",
        },
        "center 50%",
      ),
      eventImage(
        "events-case-mushaf-raw-006",
        `${mushafWritingCompetitionPublicBase}/mushaf-writing-competition-006.jpg`,
        "events-case-mushaf",
        caseGroups.mushaf,
        {
          en: "Illuminated competition gateway",
          ar: "البوابة المضيئة في مسابقة كتابة المصحف الشريف",
        },
        {
          en: "A gateway scene that frames visitor entry with illuminated cultural-event identity.",
          ar: "مشهد للبوابة يبرز لحظة الدخول وهوية الحدث الثقافي بإضاءة واضحة.",
        },
        "center 50%",
      ),
      eventImage(
        "events-case-mushaf-raw-007",
        `${mushafWritingCompetitionPublicBase}/mushaf-writing-competition-007.jpg`,
        "events-case-mushaf",
        caseGroups.mushaf,
        {
          en: "Competition hall display screens",
          ar: "شاشات العرض في قاعة المسابقة",
        },
        {
          en: "Display screens, seating, and stage-facing details that support the formal competition atmosphere.",
          ar: "شاشات عرض وجلسات وتفاصيل موجهة نحو المنصة تدعم أجواء المسابقة داخل القاعة.",
        },
        "center 50%",
      ),
      eventImage(
        "events-case-mushaf-raw-008",
        `${mushafWritingCompetitionPublicBase}/mushaf-writing-competition-008.jpg`,
        "events-case-mushaf",
        caseGroups.mushaf,
        {
          en: "Cultural-event hall preparation",
          ar: "خلفيات وتجهيزات مساحة الحدث الثقافي",
        },
        {
          en: "A hall-preparation view that adds more of the illuminated display atmosphere across the event floor.",
          ar: "لقطة من تجهيز القاعة تضيف مزيداً من أجواء العرض المضيء داخل مساحة الحدث.",
        },
        "center 50%",
      ),
    ],
    videoId: "event-mushaf-writing-competition",
    sources: [
      {
        label: "King Fahd Complex - closing ceremony of the International Mushaf Writing Competition",
        url: "https://mkm.qurancomplex.gov.sa/news-prince-attending-ceremony/",
      },
      {
        label: "King Fahd Complex - competition homepage",
        url: "https://mkm.qurancomplex.gov.sa/",
      },
    ],
  },
  {
    id: "events-case-king-salman",
    eyebrow: {
      en: "04 — Ceremonial Order",
      ar: "04 — النظام الاحتفالي",
    },
    title: caseGroups.kingSalman,
    context: {
      en: "A formal Quran-competition setting defined by a clear stage, official hall atmosphere, and disciplined guest movement.",
      ar: "تجهيز رسمي لمسابقة قرآنية يحدده وضوح المنصة وأجواء القاعة الرسمية وحركة حضور منضبطة.",
    },
    text: {
      en: "SPA presents the King Salman Award as a competition for memorization, recitation, and interpretation. The visual response stays official through balanced hall composition, a stable stage edge, and clear ceremonial order.",
      ar: "تقدم واس جائزة الملك سلمان بوصفها مسابقة للحفظ والتلاوة والتفسير، لذلك يحافظ الاتجاه البصري على رسمية القاعة وثبات المنصة وترتيب المراسم.",
    },
    factPills: [
      { en: "Memorization and recitation", ar: "الحفظ والتلاوة" },
      { en: "Official hall mood", ar: "أجواء قاعة رسمية" },
      { en: "Ceremonial order", ar: "ترتيب احتفالي" },
    ],
    highlights: [
      {
        en: "A formal stage edge suited to a Quran competition setting",
        ar: "حافة منصة رسمية تناسب مشهد المسابقة",
      },
      {
        en: "Balanced hall visuals without distracting clutter",
        ar: "مشاهد قاعة متوازنة دون تشتيت",
      },
      {
        en: "Guest-facing organization aligned with a ceremonial program",
        ar: "تنظيم موجه للضيوف منسجم مع البرنامج الاحتفالي",
      },
    ],
    ctaLabel: {
      en: "Plan a formal Quran-event setup",
      ar: "ابنِ معنا اتجاه تجهيز فعالية رسمية",
    },
    imageRailLabel: caseGroups.kingSalman,
    images: [
      eventImage(
        "events-case-king-salman-identity-wall",
        `${eventCaseModulesBase}/king-salman-quran-award/king-salman-quran-award-identity-wall.webp`,
        "events-case-king-salman",
        caseGroups.kingSalman,
        {
          en: "King Salman Quran Award identity wall",
          ar: "جدار الهوية في جائزة الملك سلمان للقرآن الكريم",
        },
        {
          en: "A formal identity scene that sets the tone for the award hall before the main ceremony moment.",
          ar: "مشهد هوية رسمي يحدد نبرة القاعة قبل لحظة الحفل الرئيسية.",
        },
        "center 50%",
      ),
      eventImage(
        "events-case-king-salman-entrance-columns",
        `${eventCaseModulesBase}/king-salman-quran-award/king-salman-quran-award-entrance-columns.webp`,
        "events-case-king-salman",
        caseGroups.kingSalman,
        {
          en: "King Salman Quran Award entrance columns",
          ar: "أعمدة المدخل في جائزة الملك سلمان للقرآن الكريم",
        },
        {
          en: "An entrance composition that guides guests into the event with disciplined ceremonial rhythm.",
          ar: "تكوين مدخل يقود الضيوف إلى الفعالية بإيقاع احتفالي منضبط.",
        },
        "center 52%",
      ),
      eventImage(
        "events-case-king-salman-stage-front",
        `${eventCaseModulesBase}/king-salman-quran-award/king-salman-quran-award-stage-front.webp`,
        "events-case-king-salman",
        caseGroups.kingSalman,
        {
          en: "King Salman Quran Award stage front",
          ar: "واجهة المنصة في جائزة الملك سلمان للقرآن الكريم",
        },
        {
          en: "A stable stage-front view that keeps the official ceremony focal point clear for the audience.",
          ar: "واجهة منصة ثابتة تبقي نقطة التركيز الرسمية واضحة أمام الحضور.",
        },
        "center 49%",
      ),
      eventImage(
        "events-case-king-salman-ceremony-signage",
        `${eventCaseModulesBase}/king-salman-quran-award/king-salman-quran-award-ceremony-signage.webp`,
        "events-case-king-salman",
        caseGroups.kingSalman,
        {
          en: "King Salman Quran Award ceremony signage",
          ar: "اللوحات التعريفية في جائزة الملك سلمان للقرآن الكريم",
        },
        {
          en: "Signage and finishing details that complete the guest-facing ceremonial order across the hall.",
          ar: "لوحات وتعليقات نهائية تكمل الترتيب الاحتفالي الموجّه للضيوف داخل القاعة.",
        },
        "center 51%",
      ),
    ],
    videoId: "event-king-salman-quran-award",
    sources: [
      {
        label: "Saudi Press Agency - winners honored in the 27th King Salman Quran competition",
        url: "https://www.spa.gov.sa/N2517873",
      },
      {
        label: "Saudi Press Agency - competition for memorization, recitation, and interpretation",
        url: "https://www.spa.gov.sa/fa/N2463126",
      },
    ],
  },
];

export const eventsSupportSection: EventsSupportSection = {
  eyebrow: {
    en: "Support directions around the event route",
    ar: "اتجاهات داعمة حول مسار الفعالية",
  },
  title: {
    en: "Entrances, backdrops, and reception details that complete the visitor journey.",
    ar: "مداخل وخلفيات وتفاصيل استقبال تكمل رحلة الزائر داخل الفعالية",
  },
  text: {
    en: "After the core case modules, these supporting directions show how reception, stage edge, backdrop, and waiting moments can be shaped into a smoother event rhythm.",
    ar: "بعد ملفات الحالات الرئيسية، تظهر هذه الاتجاهات الداعمة كيف يمكن صياغة الاستقبال وحافة المنصة والخلفية ولحظات الانتظار ضمن إيقاع أكثر سلاسة للفعالية.",
  },
  factPills: [
    { en: "Entrances", ar: "مداخل" },
    { en: "Backdrops", ar: "خلفيات" },
    { en: "Reception details", ar: "تفاصيل الاستقبال" },
  ],
  images: [
    eventImage(
      "events-solutions-setup-01",
      `${eventsBase}/event-setup-01.jpg`,
      "events-solution-directions",
      caseGroups.solutionDirections,
      {
        en: "Stage setup detail",
        ar: "تفصيل من تجهيز المنصة",
      },
      {
        en: "A setup moment centered on the stage edge and visitor-facing scene.",
        ar: "لحظة تجهيز تركز على حافة المنصة والمشهد الموجه للضيوف.",
      },
      "center 50%",
    ),
    eventImage(
      "events-solutions-setup-02",
      `${eventsBase}/event-setup-02.jpg`,
      "events-solution-directions",
      caseGroups.solutionDirections,
      {
        en: "Ceremony composition with lit backdrop",
        ar: "تكوين احتفالي مع خلفية مضاءة",
      },
      {
        en: "A scene that helps anchor stage and backdrop together.",
        ar: "مشهد يثبت المنصة والخلفية في بنية واحدة.",
      },
      "center 50%",
    ),
    eventImage(
      "events-solutions-celebration-01",
      `${eventsBase}/celebration-setup-01.jpg`,
      "events-solution-directions",
      caseGroups.solutionDirections,
      {
        en: "Reception scene with ceremony seating",
        ar: "مشهد استقبال مع جلسات المراسم",
      },
      {
        en: "A guest-facing view that balances tables, stage edge, and circulation.",
        ar: "مشهد موجه للضيوف يوازن بين الطاولات وحافة المنصة والحركة.",
      },
      "center 48%",
    ),
    eventImage(
      "events-solutions-backdrop-01",
      `${eventsBase}/event-backdrop-01.jpg`,
      "events-solution-directions",
      caseGroups.solutionDirections,
      {
        en: "Backdrop and display depth",
        ar: "عمق الخلفية والعرض",
      },
      {
        en: "A supporting scene for backdrop identity and layered display details.",
        ar: "مشهد داعم لهوية الخلفية وتدرج تفاصيل العرض.",
      },
      "center 50%",
    ),
    eventImage(
      "events-solutions-entrance-01",
      `${eventsBase}/event-entrance-01.jpg`,
      "events-solution-directions",
      caseGroups.solutionDirections,
      {
        en: "Entrance and welcome sequence",
        ar: "مشهد المدخل والاستقبال",
      },
      {
        en: "A front-facing entrance image that helps shape the first impression.",
        ar: "صورة مدخل أمامية تساعد على صياغة الانطباع الأول.",
      },
      "center 50%",
    ),
  ],
};

export const eventsPageContent = {
  hero: {
    eyebrow: {
      en: "A considered event presence from arrival to final scene",
      ar: "حضور مدروس للفعالية من الوصول حتى المشهد الأخير",
    },
    title: {
      en: "Shape the event presence before the doors open.",
      ar: "شكّل حضور الفعالية قبل أن تفتح الأبواب",
    },
    text: {
      en: "From arrival and circulation to the stage and final frame, every element is placed to make the experience feel clear and intentional.",
      ar: "من الوصول والحركة إلى المنصة والمشهد الأخير، ننسق كل عنصر لتظهر التجربة بوضوح وثقة.",
    },
    primaryCta: {
      en: "Shape Your Event Direction",
      ar: "شكّل اتجاه فعاليتك",
    },
    secondaryCta: {
      en: "Explore the Event Selection",
      ar: "استعرض اختيارات الفعاليات",
    },
    chips: [
      { en: "Exhibition booths and stands", ar: "أجنحة وستاندات عرض" },
      { en: "Stages and backdrops", ar: "منصات وخلفيات" },
      { en: "Visitor experience and movement", ar: "تجربة الزوار ومسار الحركة" },
    ],
  },
  videoShowcase: {
    eyebrow: {
      en: "Selected moments from event preparation",
      ar: "مشاهد مختارة من تجهيزات الفعاليات",
    },
    title: {
      en: "See the event come together from setup to final scene.",
      ar: "شاهد اكتمال الفعالية من التجهيز حتى المشهد النهائي.",
    },
    text: {
      en: "A focused view of booth structure, backdrops, circulation, and finishing touches working together for a more polished guest experience.",
      ar: "نظرة مركزة على تكامل الجناح والخلفيات والحركة واللمسات النهائية لصناعة تجربة حضور أكثر أناقة.",
    },
    checks: [
      {
        en: "Ordered scenes from setup to final atmosphere",
        ar: "لقطات مرتبة من التجهيز إلى النتيجة النهائية",
      },
      {
        en: "Focus on booth presence, backdrops, and guest movement",
        ar: "تركيز على حضور الجناح والخلفيات وحركة الحضور",
      },
      {
        en: "A cleaner cinematic view of the event experience",
        ar: "عرض سينمائي أنظف لتجربة الفعالية",
      },
    ],
  },
  finalCta: {
    eyebrow: {
      en: "Start from the event type and venue size",
      ar: "ابدأ من نوع الفعالية ومساحة الموقع",
    },
    title: {
      en: "Share the event type, venue dimensions, booth or stage needs, and timeline so the right preparation direction can be shaped clearly.",
      ar: "أرسل نوع الفعالية ومقاسات الموقع واحتياجك للجناح أو المنصة أو الخلفية وموعد التسليم حتى نحدد معك اتجاه التجهيز الأنسب بوضوح.",
    },
    text: {
      en: "Whether the occasion needs a stronger visitor route, a clearer stage presence, or a calmer ceremony mood, we can help shape a route that suits the event identity.",
      ar: "سواء كانت الفعالية تحتاج إلى مسار زوار أوضح أو حضور أقوى للمنصة أو أجواء مراسم أكثر هدوءاً، يمكننا مساعدتك في صياغة اتجاه يليق بهوية الحدث.",
    },
    cta: {
      en: "Start an Event Quote",
      ar: "ابدأ طلب عرض الفعالية",
    },
    call: {
      en: "Call Us",
      ar: "اتصل بنا",
    },
  },
};
