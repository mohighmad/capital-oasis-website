"use client";

import Image from "next/image";
import {
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  MessageCircle,
  Phone,
  Play,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { useMemo, useState, type ComponentProps, type ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  LanguageProvider,
  useLanguage,
} from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { ScrollToTop } from "@/components/ScrollToTop";
import { VideoModal } from "@/components/VideoModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ImageModal } from "@/components/media/ImageModal";
import {
  PremiumImageRail,
  type PremiumImageRailItem,
} from "@/components/media/PremiumImageRail";
import {
  useImageLightbox,
  type LightboxItem,
} from "@/components/media/useImageLightbox";
import { company, type Bilingual } from "@/data/content";
import {
  eventCaseModules,
  eventsPageContent,
  eventsRouteVideos,
  type EventsCaseModule,
  type EventsGalleryItem,
  type EventsRouteVideo,
} from "@/data/events";
import { SectionShell } from "./SectionShell";
import { UnifiedRouteHero } from "./UnifiedRouteHero";
import { eventsHeroMediaPool } from "./unifiedHeroMedia";

const modulesIntroContent = {
  eyebrow: {
    en: "Selected event direction",
    ar: "اتجاهات مختارة للفعاليات",
  },
  title: {
    en: "A stronger event experience, shaped from first setup to final impression.",
    ar: "تجربة فعالية أقوى، تبدأ من التجهيز وتكتمل في الانطباع الأخير.",
  },
  text: {
    en: "Booths, reception areas, stages, backdrops, and movement paths are composed as one clear, guest-facing story.",
    ar: "ننسق الأجنحة والاستقبال والمنصات والخلفيات ومسارات الحركة ضمن قصة بصرية واضحة أمام الزوار.",
  },
  checks: [
    {
      en: "A visual language built around the event identity",
      ar: "لغة بصرية مبنية حول هوية الفعالية",
    },
    {
      en: "Booths, stages, backdrops, and reception in one direction",
      ar: "أجنحة ومنصات وخلفيات واستقبال ضمن اتجاه واحد",
    },
    {
      en: "A more confident guest journey from arrival to final scene",
      ar: "رحلة حضور أكثر ثقة من الوصول حتى المشهد النهائي",
    },
  ],
};

const moduleIcons = [WandSparkles, Sparkles, WandSparkles, Sparkles] as const;

const moduleStyles = [
  {
    section:
      "bg-[linear-gradient(180deg,#F8F1E7_0%,#FFF8F0_58%,#EADDCB_100%)] text-[#35261F]",
    eyebrow: "text-[#A6794C]",
    heading: "text-[#2E221D]",
    body: "text-[#665246]",
    pill: "border-[#D9B68B]/28 bg-white/82 text-[#6A5443] shadow-[0_16px_34px_-30px_rgba(88,58,39,0.55)]",
    panel: "border-[#D3B08B]/26 bg-white/88 shadow-[0_24px_62px_-54px_rgba(88,58,39,0.45)]",
    benefit: "bg-[#FBF3E8]/92 text-[#5E4A3D] ring-1 ring-[#D3B08B]/16",
    media:
      "border-white/78 bg-white/76 shadow-[0_34px_88px_-58px_rgba(93,63,43,0.28)] backdrop-blur-sm",
    videoWrap:
      "border-[#D3B08B]/24 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(251,243,232,0.96))]",
    videoCard:
      "border-[#D7C2A6]/36 bg-[#17393B] text-white shadow-[0_28px_70px_-40px_rgba(20,60,62,0.5)]",
    videoBody: "text-white/76",
    button:
      "border border-[#D5B17C]/32 bg-white/92 text-[#214446] shadow-[0_18px_40px_-30px_rgba(20,60,62,0.74)] hover:border-[#D5B17C]/54 hover:bg-[#FFF9F2]",
    tone: "default" as const,
  },
  {
    section:
      "bg-[linear-gradient(135deg,#0C3536_0%,#153E3F_46%,#4B3A2F_100%)] text-white",
    eyebrow: "text-[#E5C18E]",
    heading: "text-white",
    body: "text-white/76",
    pill: "border-white/14 bg-white/[0.085] text-white/86 shadow-[0_18px_40px_-32px_rgba(0,0,0,0.6)]",
    panel: "border-white/14 bg-white/[0.075] shadow-[0_26px_70px_-52px_rgba(0,0,0,0.82)]",
    benefit: "bg-white/[0.075] text-white/86 ring-1 ring-white/8",
    media:
      "border-white/14 bg-white/[0.065] shadow-[0_36px_90px_-56px_rgba(0,0,0,0.92)] backdrop-blur-sm",
    videoWrap:
      "border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.04))]",
    videoCard:
      "border-white/12 bg-[rgba(4,24,24,0.78)] text-white shadow-[0_30px_84px_-46px_rgba(0,0,0,0.88)]",
    videoBody: "text-white/76",
    button:
      "border border-white/15 bg-white/[0.08] text-white shadow-[0_20px_42px_-24px_rgba(0,0,0,0.56)] hover:border-[#E5C18E]/56 hover:text-[#E5C18E]",
    tone: "dark" as const,
  },
  {
    section:
      "bg-[linear-gradient(180deg,#EADDCB_0%,#F8F1E7_58%,#FFF8F0_100%)] text-[#35261F]",
    eyebrow: "text-[#8C6544]",
    heading: "text-[#2E221D]",
    body: "text-[#655143]",
    pill: "border-[#164345]/12 bg-white/82 text-[#375452] shadow-[0_16px_34px_-30px_rgba(20,60,62,0.42)]",
    panel: "border-[#164345]/14 bg-[rgba(255,252,246,0.9)] shadow-[0_24px_62px_-54px_rgba(20,60,62,0.34)]",
    benefit: "bg-[rgba(255,248,239,0.94)] text-[#5A473A] ring-1 ring-[#164345]/8",
    media:
      "border-white/76 bg-white/74 shadow-[0_34px_88px_-58px_rgba(20,60,62,0.24)] backdrop-blur-sm",
    videoWrap:
      "border-[#164345]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(249,241,232,0.96))]",
    videoCard:
      "border-[#D7C2A6]/38 bg-[#214446] text-white shadow-[0_28px_70px_-40px_rgba(20,60,62,0.42)]",
    videoBody: "text-white/76",
    button:
      "border border-[#D5B17C]/32 bg-white/92 text-[#214446] shadow-[0_18px_40px_-30px_rgba(20,60,62,0.74)] hover:border-[#D5B17C]/54 hover:bg-[#FFF9F2]",
    tone: "default" as const,
  },
  {
    section:
      "bg-[linear-gradient(135deg,#0C3536_0%,#153E3F_52%,#4B3A2F_100%)] text-white",
    eyebrow: "text-[#E2C18C]",
    heading: "text-white",
    body: "text-white/76",
    pill: "border-white/14 bg-white/[0.085] text-white/86 shadow-[0_18px_40px_-32px_rgba(0,0,0,0.6)]",
    panel: "border-white/14 bg-white/[0.075] shadow-[0_26px_70px_-52px_rgba(0,0,0,0.82)]",
    benefit: "bg-white/[0.075] text-white/86 ring-1 ring-white/8",
    media:
      "border-white/14 bg-white/[0.065] shadow-[0_36px_90px_-56px_rgba(0,0,0,0.92)] backdrop-blur-sm",
    videoWrap:
      "border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.04))]",
    videoCard:
      "border-white/12 bg-[rgba(4,24,24,0.78)] text-white shadow-[0_30px_84px_-46px_rgba(0,0,0,0.88)]",
    videoBody: "text-white/76",
    button:
      "border border-white/15 bg-white/[0.08] text-white shadow-[0_20px_42px_-24px_rgba(0,0,0,0.56)] hover:border-[#E5C18E]/56 hover:text-[#E5C18E]",
    tone: "dark" as const,
  },
] as const;

const moduleLayouts = [
  {
    grid: "lg:grid-cols-[0.95fr_1.05fr]",
    reorderMedia: false,
    textWrapExtra: "",
    highlightStyle: "check" as const,
    cinematic: false,
  },
  {
    grid: "lg:grid-cols-[0.95fr_1.05fr]",
    reorderMedia: false,
    textWrapExtra: "",
    highlightStyle: "check" as const,
    cinematic: false,
  },
  {
    grid: "lg:grid-cols-[0.95fr_1.05fr]",
    reorderMedia: false,
    textWrapExtra: "",
    highlightStyle: "check" as const,
    cinematic: false,
  },
  {
    grid: "lg:grid-cols-[0.95fr_1.05fr]",
    reorderMedia: false,
    textWrapExtra: "",
    highlightStyle: "check" as const,
    cinematic: false,
  },
] as const;

function splitEyebrowLabel(text: string): { number: string | null; label: string } {
  const match = text.match(/^(\d{2})\s*—\s*(.+)$/);
  if (match) {
    return { number: match[1] ?? null, label: match[2] ?? text };
  }
  return { number: null, label: text };
}

const commercialMarahibStyle = {
  section:
    "bg-[linear-gradient(135deg,#0C3536_0%,#153E3F_54%,#4B3A2F_100%)] text-white",
  eyebrow: "text-[#E2C18C]",
  heading: "text-white",
  body: "text-white/76",
  pill: "border-white/12 bg-white/[0.08] text-white/84",
  panel: "border-white/12 bg-white/[0.07]",
  benefit: "bg-white/[0.07] text-white/84 ring-1 ring-white/8",
  media:
    "border-white/10 bg-white/[0.06] shadow-[0_34px_84px_-56px_rgba(0,0,0,0.92)]",
  videoWrap:
    "border-white/12 bg-[linear-gradient(135deg,rgba(12,58,58,0.98),rgba(30,66,67,0.98),rgba(100,73,56,0.96))]",
  videoCard:
    "border-white/12 bg-[rgba(4,24,24,0.78)] text-white shadow-[0_30px_84px_-46px_rgba(0,0,0,0.88)]",
  videoBody: "text-white/76",
  button:
    "border border-white/15 bg-white/[0.08] text-white shadow-[0_20px_42px_-24px_rgba(0,0,0,0.56)] hover:border-[#E2C18C]/56 hover:text-[#E2C18C]",
  tone: "dark" as const,
};

const additiveEventsSupportGroup: Bilingual = {
  en: "Support directions around the event route",
  ar: "اتجاهات داعمة حول مسار الفعالية",
};

export type EventSupportCopy = {
  eyebrow: Bilingual;
  title: Bilingual;
  verifiedInfo: Bilingual;
  commercialCopy: readonly [Bilingual, Bilingual];
  tags: readonly Bilingual[];
  benefits: readonly Bilingual[];
  cta: Bilingual;
};

function createAdditiveEventItem(
  id: string,
  src: string,
  title: Bilingual,
  caption: Bilingual,
  objectPosition = "center 50%",
): EventsGalleryItem {
  return {
    id,
    src,
    alt: title,
    title,
    caption,
    groupId: "events-solution-directions",
    groupLabel: additiveEventsSupportGroup,
    objectFit: "cover",
    objectPosition,
  };
}

const curatedSupportLabelPool: Bilingual[] = [
  { ar: "مدخل فعالية بتجهيز واضح", en: "An event entrance with organized preparation" },
  { ar: "تفاصيل عرض واستقبال", en: "Display and reception detail" },
  { ar: "خلفية منصة بتكوين منظم", en: "A stage backdrop with an organized composition" },
  { ar: "تجهيزات تعزز حضور المناسبة", en: "Setup elements that strengthen the occasion's presence" },
  { ar: "عناصر عرض مكملة للحدث", en: "Complementary display elements for the event" },
];

const curatedSupportCaptionPool: Bilingual[] = [
  {
    ar: "مشهد من تجهيزات الفعالية يبرز التكوين والحضور البصري المنظم.",
    en: "An event scene that highlights composition and an organized visual presence.",
  },
  {
    ar: "لقطة تكمل تجربة الاستقبال وتفاصيل العرض داخل المساحة.",
    en: "A view that completes the reception experience and display details inside the space.",
  },
  {
    ar: "مشهد داعم يعكس هوية المناسبة وحضورها البصري.",
    en: "A supporting scene that reflects the occasion's identity and visual presence.",
  },
];

function createCuratedAdditiveEventItem(
  id: string,
  src: string,
  poolIndex: number,
  objectPosition = "center 50%",
): EventsGalleryItem {
  const title = curatedSupportLabelPool[poolIndex % curatedSupportLabelPool.length]!;
  const caption = curatedSupportCaptionPool[poolIndex % curatedSupportCaptionPool.length]!;
  return createAdditiveEventItem(id, src, title, caption, objectPosition);
}

const additiveEventsSupportItems: EventsGalleryItem[] = [
  ...Array.from({ length: 38 }, (_, index) => {
    const fileIndex = String(index + 1).padStart(3, "0");
    const itemNumber = String(index + 1).padStart(2, "0");

    return createCuratedAdditiveEventItem(
      `events-support-additive-setup-${itemNumber}`,
      `/images/capital-oasis/website-photos/events/events-setup-${fileIndex}.jpeg`,
      index,
    );
  }),
  ...Array.from({ length: 7 }, (_, index) => {
    const fileIndex = String(index + 1).padStart(3, "0");
    const itemNumber = String(index + 39).padStart(2, "0");

    return createCuratedAdditiveEventItem(
      `events-support-additive-proptech-${itemNumber}`,
      `/images/capital-oasis/website-photos/events/events-proptech-${fileIndex}.jpeg`,
      index + 38,
    );
  }),
];

function dedupeEventsItemsBySrc(
  items: EventsGalleryItem[],
): EventsGalleryItem[] {
  const seen = new Set<string>();

  return items.filter((item) => {
    if (seen.has(item.src)) {
      return false;
    }

    seen.add(item.src);
    return true;
  });
}

function assignEventsGroupLabel(
  items: EventsGalleryItem[],
  groupLabel: Bilingual,
): EventsGalleryItem[] {
  return items.map((item) => ({
    ...item,
    groupLabel,
  }));
}

function mergeEventsItemCollectionsBySrc(
  ...collections: EventsGalleryItem[][]
): EventsGalleryItem[] {
  return dedupeEventsItemsBySrc(collections.flat());
}

const princessSeetahEventsCaseId = "events-case-princess-seetah" as const;

// Confirmed from the root-level image audit and mirror manifest:
// root stills for Marahib Tuwaiq map to events-setup-001 through events-setup-032,
// plus events-setup-038. Source duplicates collapse onto events-setup-003.
const marahibTuwaiqSupportItemSrcs = new Set(
  [
    ...Array.from({ length: 32 }, (_, index) => {
      const fileIndex = String(index + 1).padStart(3, "0");

      return `/images/capital-oasis/website-photos/events/events-setup-${fileIndex}.jpeg`;
    }),
    "/images/capital-oasis/website-photos/events/events-setup-038.jpeg",
  ],
);

export const marahibTuwaiqProjectCopy = {
  eyebrow: {
    ar: "ملف فعالية | حضور بصري",
    en: "Event profile | Visual presence",
  },
  title: {
      ar: "مراحب طويق",
      en: "Marahib Tuwaiq",
  },
  verifiedInfo: {
    ar: "لم يُعثر على سجل رسمي منشور للاسم المحدد «مراحب طويق»؛ لذلك نلتزم هنا بالمعلومات الموثقة في الصور والفيديو المورّدين فقط.",
    en: "No authoritative public record was found for the exact project name “Marahib Tuwaiq”; this presentation therefore stays limited to the supplied project images and video.",
  },
  commercialCopy: [
    {
      ar: "تجهيز بصري لمشروع مراحب طويق يقدّم الهوية من لحظة الوصول، عبر منصة رئيسية وممرات وعناصر إضاءة موزعة بوضوح.",
      en: "A visual setup for Marahib Tuwaiq that introduces the identity from arrival through a main stage, clear walkways, and considered lighting.",
    },
    {
      ar: "تُظهر الصور كيف تعمل نقاط العرض والإضاءة والحركة معاً لصناعة حضور متماسك داخل مساحة الفعالية.",
      en: "The selected views show how display points, lighting, and movement work together to create a composed event presence.",
    },
  ] as const,
  tags: [
    { ar: "هوية واضحة", en: "Clear identity" },
    { ar: "مسارات استقبال", en: "Reception flow" },
    { ar: "إضاءة وعرض", en: "Lighting and display" },
  ],
  benefits: [
    { ar: "إبراز الهوية من أول مشهد", en: "Identity that reads from the first view" },
    { ar: "تنظيم الحركة حول نقاط العرض", en: "Movement organized around display points" },
    { ar: "تفاصيل إضاءة تحافظ على حضور المساحة", en: "Lighting details that sustain the space" },
  ],
  cta: { ar: "خطط تجهيز فعالية مشابهة", en: "Plan a similar event setup" },
};

const proptechEventsSupportCopy = {
  eyebrow: {
    ar: "ملف فعالية | تقنية عقارية",
    en: "Event profile | Property technology",
  },
  title: {
    ar: "بروبتك - PropTech",
    en: "بروبتك - PropTech",
  },
  verifiedInfo: {
        ar: "يضم معرض بروبتك شركات عقارية ومنصات رقمية وشركات تقنية محلية ودولية، مع تركيز على الابتكار والتحول الرقمي في القطاع العقاري.",
    en: "According to REGA, the PropTech exhibition brings together real-estate firms, digital platforms, and local and international technology companies, with a focus on innovation and digital transformation.",
  },
  commercialCopy: [
    {
      ar: "تجمع فعاليات بروبتك بين حلول التقنية العقارية والمنصات الرقمية والجهات المتخصصة، لذلك يحتاج الجناح إلى رسالة تُفهم بسرعة وتدعم الحوار مع الزائر.",
      en: "PropTech events bring together real-estate technology, digital platforms, and sector specialists, so the stand needs a message that reads quickly and supports visitor dialogue.",
    },
    {
      ar: "يوازن هذا التجهيز بين حضور الهوية ووحدات العرض ومسار الحركة، لتصبح الفكرة التقنية أسهل في القراءة داخل الجناح.",
      en: "This setup balances identity, display units, and movement so the technology story is easier to understand inside the stand.",
    },
  ] as const,
  tags: [
    { ar: "تقنية عقارية", en: "Property technology" },
    { ar: "وحدات عرض", en: "Display units" },
    { ar: "حوار مع الزوار", en: "Visitor dialogue" },
  ],
  benefits: [
    { ar: "رسالة تقنية أوضح من أول نظرة", en: "A clearer technology message at first glance" },
    { ar: "توزيع يوازن بين العرض والحركة", en: "A layout balanced for display and movement" },
    { ar: "حضور بصري يواكب الابتكار", en: "A visual presence aligned with innovation" },
  ],
  cta: { ar: "صمّم حضورك القادم", en: "Shape your next exhibition presence" },
};

const chinaHomeLifeEventsSupportCopy = {
  eyebrow: {
    ar: "ملف معرض | تجارة وابتكار",
    en: "Exhibition profile | Trade and innovation",
  },
  title: {
    ar: "China Home Life",
    en: "China Home Life",
  },
  verifiedInfo: {
    ar: "China Home Life معرض تجاري للسلع الاستهلاكية ومخصص للزوار التجاريين، وتنظمه Swift International Exhibition Organizing.",
    en: "According to Dubai World Trade Centre, China Home Life is a trade-only consumer-goods exhibition organized by Swift International Exhibition Organizing.",
  },
  commercialCopy: [
    {
      ar: "China Home Life معرض تجاري لمنتجات المستهلك، يجمع العارضين والزوار التجاريين في تجربة عرض مباشرة داخل بيئة المعرض.",
      en: "China Home Life is a trade exhibition for consumer goods, bringing exhibitors and trade visitors together in a direct show-floor experience.",
    },
    {
      ar: "تُظهر الصور جناحاً يرتب الهوية والمنتجات ومسار التعرف عليها في مشهد واضح ومرن يخدم التواصل التجاري.",
      en: "The selected views show a booth that organizes identity, products, and discovery into a clear, flexible scene for commercial conversation.",
    },
  ] as const,
  tags: [
    { ar: "منتجات منزلية", en: "Home products" },
    { ar: "تجربة B2B", en: "B2B experience" },
    { ar: "عرض منظم", en: "Organized display" },
  ],
  benefits: [
    { ar: "تقديم المنتجات ضمن تسلسل مفهوم", en: "Products presented in an intuitive sequence" },
    { ar: "وضوح أعلى للهوية التجارية", en: "Stronger commercial identity" },
    { ar: "مساحة تدعم التفاعل التجاري", en: "A space built for commercial interaction" },
  ],
  cta: { ar: "جهّز جناحك للفرصة القادمة", en: "Prepare your next trade-show presence" },
};

const marahibTuwaiqSupplementalSupportItems: EventsGalleryItem[] = [
  createAdditiveEventItem(
    "events-marahib-tuwaiq-batch-1-01",
    "/images/capital-oasis/website-photos/events/marahib-tuwaiq/marahib-tuwaiq-image-001.jpg",
    {
      ar: "المنصة الرئيسية في مراحب طويق",
      en: "Main Marahib Tuwaiq stage",
    },
    {
      ar: "لقطة إضافية من المنصة الرئيسية توضح حضور الهوية البصرية وعناصر العرض داخل الفعالية.",
      en: "An added main-stage view that highlights the event identity and display composition.",
    },
    "center 44%",
  ),
  createAdditiveEventItem(
    "events-marahib-tuwaiq-batch-1-02",
    "/images/capital-oasis/website-photos/events/marahib-tuwaiq/marahib-tuwaiq-image-002-rotated-left-20260713.jpg",
    {
      ar: "تفاصيل ممرات وتجهيزات مراحب طويق",
      en: "Marahib Tuwaiq walkway details",
    },
    {
      ar: "لقطة من تفاصيل الممرات والعناصر الداعمة داخل مساحة مراحب طويق.",
      en: "A view across the supporting walkway and display details inside the Marahib Tuwaiq setup.",
    },
    "center 50%",
  ),
  createAdditiveEventItem(
    "events-marahib-tuwaiq-batch-1-03",
    "/images/capital-oasis/website-photos/events/marahib-tuwaiq/marahib-tuwaiq-image-003.jpg",
    {
      ar: "عنصر إضاءة وعرض من مراحب طويق",
      en: "Marahib Tuwaiq illuminated detail",
    },
    {
      ar: "تفصيل إضافي من عناصر الإضاءة والعرض المستخدمة داخل الفعالية.",
      en: "An added lighting and display detail used across the event experience.",
    },
    "center 52%",
  ),
  createAdditiveEventItem(
    "events-marahib-tuwaiq-batch-1-04",
    "/images/capital-oasis/website-photos/events/marahib-tuwaiq/marahib-tuwaiq-image-004.jpg",
    {
      ar: "عنصر هوية مضيء في مراحب طويق",
      en: "Marahib Tuwaiq identity element",
    },
    {
      ar: "وحدة مضيئة تضيف حضوراً بصرياً أوضح داخل تجهيزات مراحب طويق.",
      en: "An illuminated identity unit that adds a stronger branded presence inside the setup.",
    },
    "center 52%",
  ),
  createAdditiveEventItem(
    "events-marahib-tuwaiq-batch-1-05",
    "/images/capital-oasis/website-photos/events/marahib-tuwaiq/marahib-tuwaiq-image-005.jpg",
    {
      ar: "تفصيل ليلي من تجهيزات مراحب طويق",
      en: "Marahib Tuwaiq night detail",
    },
    {
      ar: "لقطة ليلية إضافية من تفاصيل الحضور البصري والإضاءة داخل الفعالية.",
      en: "An added evening detail that highlights the visual atmosphere and lighting inside the event.",
    },
    "center 48%",
  ),
];

const chinaHomeLifeEventsSupportItems = assignEventsGroupLabel(
  dedupeEventsItemsBySrc(
    Array.from({ length: 7 }, (_, index) => {
      const fileIndex = String(index + 2).padStart(3, "0");

      return createAdditiveEventItem(
        `events-china-home-life-${fileIndex}`,
        `/images/capital-oasis/website-photos/events/china-home-life/china-home-life-image-${fileIndex}.jpg`,
        {
          ar: "تفصيل من جناح China Home Life",
          en: "China Home Life booth composition",
        },
        {
          ar: "لقطة من تفاصيل جناح China Home Life وتجهيزات المعرض ضمن المسار البصري للفعالية.",
          en: "A still from the China Home Life booth and exhibition setup within the event visual sequence.",
        },
        index === 0 ? "right center" : "center",
      );
    }),
  ),
  chinaHomeLifeEventsSupportCopy.title,
);

export const marahibTuwaiqProjectItems = assignEventsGroupLabel(
  mergeEventsItemCollectionsBySrc(
    additiveEventsSupportItems.filter((item) =>
      marahibTuwaiqSupportItemSrcs.has(item.src),
    ),
    marahibTuwaiqSupplementalSupportItems,
  ),
  marahibTuwaiqProjectCopy.title,
);

const proptechEventsSupportItems = assignEventsGroupLabel(
  dedupeEventsItemsBySrc(
    additiveEventsSupportItems.filter((item) =>
      item.src.includes("/events-proptech-") &&
      !item.src.endsWith("/events-proptech-001.jpeg"),
    ),
  ),
  proptechEventsSupportCopy.title,
);

function EventsReveal({
  children,
  className = "",
  ...rest
}: ComponentProps<typeof Reveal>) {
  return (
    <Reveal
      className={className ? `is-visible ${className}` : "is-visible"}
      {...rest}
    >
      {children}
    </Reveal>
  );
}

function toRailItem(
  item: EventsGalleryItem,
  t: (value: Bilingual) => string,
): PremiumImageRailItem {
  return {
    id: item.id,
    src: item.src,
    alt: t(item.alt),
    title: t(item.title),
    caption: t(item.caption),
    objectFit: item.objectFit,
    objectPosition: item.objectPosition,
  };
}

function toLightboxItem(
  item: EventsGalleryItem,
  t: (value: Bilingual) => string,
): LightboxItem {
  return {
    id: item.id,
    src: item.src,
    alt: t(item.alt),
    title: t(item.title),
    caption: t(item.caption),
    groupId: item.groupId,
    groupLabel: t(item.groupLabel),
  };
}

function CtaLink({
  children,
  href = company.whatsapp,
  variant = "primary",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "soft";
}) {
  const classes =
    variant === "primary"
      ? "bg-[#7A5A43] text-white shadow-[0_20px_42px_-24px_rgba(66,43,31,0.82)] hover:bg-[#5F4330]"
      : "border border-[#D5B17C]/32 bg-white/92 text-[#214446] shadow-[0_18px_40px_-30px_rgba(20,60,62,0.74)] hover:border-[#D5B17C]/54 hover:bg-[#FFF9F2]";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-[var(--radius-button)] px-5 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5B17C] focus-visible:ring-offset-2 ${classes}`}
    >
      {children}
    </a>
  );
}

function EventImageRail({
  items,
  groupLabel,
  tone,
}: {
  items: EventsGalleryItem[];
  groupLabel: string;
  tone: "default" | "dark";
}) {
  const { t } = useLanguage();
  const railItems = useMemo(
    () => items.map((item) => toRailItem(item, t)),
    [items, t],
  );
  const modalItems = useMemo(
    () => items.map((item) => toLightboxItem(item, t)),
    [items, t],
  );
  const lightbox = useImageLightbox(modalItems);

  return (
    <>
      <PremiumImageRail
        items={railItems}
        groupLabel={groupLabel}
        showLabel={false}
        tone={tone}
        onOpen={(itemId, trigger) => {
          const index = modalItems.findIndex((item) => item.id === itemId);
          lightbox.openAtIndex(index, trigger);
        }}
      />

      <ImageModal
        activeIndex={lightbox.activeIndex}
        canGoNext={lightbox.canGoNext}
        canGoPrevious={lightbox.canGoPrevious}
        items={modalItems}
        onClose={lightbox.close}
        onNext={lightbox.goToNext}
        onPrevious={lightbox.goToPrevious}
      />
    </>
  );
}

function HeroSection() {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <UnifiedRouteHero
      id="events-hero"
      variant="events"
      eyebrow={t(eventsPageContent.hero.eyebrow)}
      title={t({
        ar: "حضور بصري يبدأ\nقبل أن تفتح الأبواب",
        en: "A considered event presence, ready before the doors open.",
      })}
      body={t({
        ar: "من المدخل إلى المسرح، ننسق كل تفصيلة لتظهر التجربة أكثر وضوحاً وثقة.",
        en: "From entrance to stage, every detail is coordinated to make the experience feel clearer and more confident.",
      })}
      actions={
        <>
          <CtaLink>
            <MessageCircle size={18} aria-hidden="true" />
            {t(eventsPageContent.hero.primaryCta)}
          </CtaLink>
          <CtaLink href="#events-modules" variant="soft">
            {t(eventsPageContent.hero.secondaryCta)}
            <Arrow size={18} aria-hidden="true" />
          </CtaLink>
        </>
      }
      points={eventsPageContent.hero.chips}
      mediaItems={eventsHeroMediaPool}
    />
  );
}

function ModulesIntroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="events-modules"
      className="relative isolate overflow-hidden border-t border-[#D8BE9D]/20 bg-[linear-gradient(180deg,#F8F1E7_0%,#EADDCB_100%)] py-[clamp(4.75rem,8vw,7.5rem)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(229,193,142,0.24),transparent_32%),radial-gradient(circle_at_86%_18%,rgba(20,60,62,0.12),transparent_30%)]"
      />
      <SectionShell className="route-shell">
        <EventsReveal className="relative isolate overflow-hidden rounded-[2.35rem] border border-[#D7C2A6]/46 bg-[linear-gradient(135deg,rgba(12,53,54,0.99),rgba(21,62,63,0.98),rgba(122,91,69,0.96))] p-6 text-white shadow-[0_36px_96px_-58px_rgba(0,0,0,0.66)] sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_86%_20%,rgba(229,193,142,0.22),transparent_34%)]"
          />
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-[#E5C18E]">
                {t(modulesIntroContent.eyebrow)}
              </p>
              <h2 className="mt-5 text-[clamp(2.05rem,4vw,3.15rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-white rtl:tracking-normal">
                {t(modulesIntroContent.title)}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78 sm:text-lg">
                {t(modulesIntroContent.text)}
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {modulesIntroContent.checks.map((check) => (
                <div
                  key={check.en}
                  className="rounded-[1.35rem] border border-white/14 bg-white/[0.075] p-4 text-sm font-bold leading-6 text-white/84 shadow-[0_18px_48px_-38px_rgba(0,0,0,0.65)]"
                >
                  <div className="flex items-start gap-2">
                    <Check
                      className="mt-1 size-4 shrink-0 text-[#E5C18E]"
                      aria-hidden="true"
                    />
                    <span>{t(check)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </EventsReveal>
      </SectionShell>
    </section>
  );
}

type EventVideoCardStyle = {
  videoWrap: string;
  videoCard: string;
  videoBody: string;
  button: string;
};

function EventVideoCard({
  video,
  style,
  onOpenVideo,
  featured = false,
}: {
  video: EventsRouteVideo;
  style: EventVideoCardStyle;
  onOpenVideo: (video: EventsRouteVideo) => void;
  featured?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <div
      className={`${featured ? "mt-0" : "mt-9 sm:mt-11"} mx-auto w-full lg:max-w-[60%] relative isolate overflow-hidden rounded-[2rem] ${
        featured ? "" : "border p-px " + style.videoWrap
      }`}
    >
      <button
        type="button"
        onClick={() => onOpenVideo(video)}
        className="group block w-full overflow-hidden rounded-[1.95rem] text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5B17C]"
        aria-label={t({
          en: `Play ${video.railTitle.en}`,
          ar: `شغل ${video.railTitle.ar}`,
        })}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-[1.95rem] bg-[#041A18]">
          <Image
            src={video.poster}
            alt={t(video.alt)}
            fill
            sizes="(max-width: 1024px) 94vw, 60vw"
            className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.035]"
            style={{ objectPosition: video.objectPosition ?? "center" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,14,14,0.12),rgba(4,14,14,0.2)_38%,rgba(4,14,14,0.92)_100%)]" />
          <div
            aria-hidden="true"
            className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(229,193,142,0.72),transparent)] sm:inset-x-10"
          />

          <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/14 bg-[rgba(4,14,14,0.56)] px-3.5 py-1.5 text-[0.68rem] font-extrabold tracking-[0.16em] text-[#E5C18E] uppercase backdrop-blur-md rtl:right-6 rtl:left-auto rtl:tracking-normal rtl:normal-case sm:top-7 sm:left-7 rtl:sm:right-7">
            {t({ en: "Featured Film", ar: "فيلم مختار" })}
          </span>

          <span className="absolute left-1/2 top-1/2 grid size-[4.5rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#E5C18E]/45 bg-[rgba(4,14,14,0.5)] text-[#E5C18E] backdrop-blur-md transition duration-500 group-hover:scale-[1.06] group-hover:border-[#E5C18E]/75 sm:size-20">
            <Play size={26} fill="currentColor" aria-hidden="true" className="translate-x-0.5" />
          </span>

          <div className="absolute inset-x-5 bottom-5 sm:inset-x-9 sm:bottom-8">
            <p className="text-[0.7rem] font-extrabold tracking-[0.16em] text-[#E5C18E] uppercase rtl:tracking-normal rtl:normal-case">
              {t({ en: "Visual sequence", ar: "التسلسل البصري" })}
            </p>
            <h3 className="mt-3 max-w-xl text-[1.45rem] font-semibold leading-[1.14] tracking-[-0.01em] text-white rtl:tracking-normal sm:text-[1.85rem]">
              {t(video.railTitle)}
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-7 text-white/78 sm:text-base">
              {t(video.railCaption)}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-white/92">
              <span className="grid size-8 place-items-center rounded-full border border-white/20 bg-white/10">
                <Play size={13} aria-hidden="true" />
              </span>
              {t({ en: "Watch in full view", ar: "شاهد الفيلم بحجم كامل" })}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}

function EventCaseModuleSection({
  module,
  index,
  styleIndex,
  video,
  onOpenVideo,
}: {
  module: EventsCaseModule;
  index: number;
  styleIndex?: number;
  video: EventsRouteVideo | null;
  onOpenVideo: (video: EventsRouteVideo) => void;
}) {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;
  const visualIndex = styleIndex ?? index;
  const Icon = moduleIcons[visualIndex] ?? Sparkles;
  const style = moduleStyles[visualIndex] ?? moduleStyles[0];
  const layout = moduleLayouts[visualIndex] ?? moduleLayouts[0];
  const { number: eyebrowNumber, label: eyebrowLabel } = splitEyebrowLabel(
    t(module.eyebrow),
  );

  const railBlock = (
    <div className={`rounded-[2.05rem] border p-3 sm:p-4 ${style.media}`}>
      <EventImageRail
        items={module.images}
        groupLabel={t(module.imageRailLabel)}
        tone={style.tone}
      />
    </div>
  );

  return (
    <section className={`relative isolate overflow-hidden border-t border-white/10 py-[clamp(4.85rem,8vw,7.85rem)] ${style.section}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_16%,rgba(229,193,142,0.16),transparent_31%),radial-gradient(circle_at_88%_12%,rgba(255,255,255,0.12),transparent_30%),linear-gradient(90deg,rgba(255,255,255,0.06),transparent_24%,transparent_76%,rgba(0,0,0,0.05))]"
      />
      <SectionShell
        className={`route-shell split-row grid gap-10 ${layout.grid} lg:items-center xl:gap-14 ${
          layout.reorderMedia ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <EventsReveal className={layout.textWrapExtra}>
          <div
            className={`inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-extrabold ${style.pill}`}
          >
            <Icon size={17} aria-hidden="true" />
            {eyebrowNumber ? (
              <span className="flex items-center gap-2.5">
                <span className="text-[0.92rem] font-black tracking-[0.02em] text-[#D5B17C]">
                  {eyebrowNumber}
                </span>
                <span aria-hidden="true" className="h-3.5 w-px bg-current opacity-30" />
                <span>{eyebrowLabel}</span>
              </span>
            ) : (
              <span>{eyebrowLabel}</span>
            )}
          </div>
          <h2
            className={`mt-5 max-w-2xl text-[clamp(2rem,4vw,3.05rem)] leading-[1.08] font-semibold tracking-[-0.02em] rtl:tracking-normal ${style.heading}`}
          >
            {t(module.title)}
          </h2>
          <p className={`mt-5 max-w-2xl text-lg leading-8 ${style.body}`}>
            {t(module.context)}
          </p>
          <p className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${style.body}`}>
            {t(module.text)}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {module.factPills.map((pill) => (
              <span
                key={pill.en}
                className={`rounded-full border px-3.5 py-2 text-xs font-extrabold ${style.pill}`}
              >
                {t(pill)}
              </span>
            ))}
          </div>

          <div
            className={`mt-7 rounded-[1.65rem] border p-4 sm:p-5 ${style.panel}`}
          >
            <div className="grid gap-3">
              {module.highlights.map((highlight) => (
                <div
                  key={highlight.en}
                  className={`flex gap-3 rounded-[1.15rem] p-3.5 text-sm font-bold leading-6 ${style.benefit}`}
                >
                  <Check
                    className="mt-1 size-4 shrink-0 text-[#D5B17C]"
                    aria-hidden="true"
                  />
                  <span>{t(highlight)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <CtaLink>
              {t(module.ctaLabel)}
              <Arrow size={18} aria-hidden="true" />
            </CtaLink>
          </div>
        </EventsReveal>

        <EventsReveal delay={110} className="min-w-0">
          {railBlock}
        </EventsReveal>
      </SectionShell>

      {video && !layout.cinematic ? (
        <SectionShell className="route-shell mt-7 lg:mt-9">
          <EventsReveal delay={150}>
            <EventVideoCard
              video={video}
              style={style}
              onOpenVideo={onOpenVideo}
            />
          </EventsReveal>
        </SectionShell>
      ) : null}
    </section>
  );
}

function combineBilingualParagraphs(paragraphs: readonly Bilingual[]): Bilingual {
  return {
    ar: paragraphs.map((paragraph) => paragraph.ar).join(" "),
    en: paragraphs.map((paragraph) => paragraph.en).join(" "),
  };
}

const additionalEventCaseModules: EventsCaseModule[] = [
  {
    id: "events-case-proptech",
    eyebrow: proptechEventsSupportCopy.eyebrow,
    title: proptechEventsSupportCopy.title,
    context: proptechEventsSupportCopy.verifiedInfo,
    text: combineBilingualParagraphs(proptechEventsSupportCopy.commercialCopy),
    factPills: [...proptechEventsSupportCopy.tags],
    highlights: [...proptechEventsSupportCopy.benefits],
    ctaLabel: proptechEventsSupportCopy.cta,
    imageRailLabel: proptechEventsSupportCopy.title,
    images: proptechEventsSupportItems,
    videoId: "event-proptech",
    sources: [],
  },
  {
    id: "events-case-china-home-life",
    eyebrow: chinaHomeLifeEventsSupportCopy.eyebrow,
    title: chinaHomeLifeEventsSupportCopy.title,
    context: chinaHomeLifeEventsSupportCopy.verifiedInfo,
    text: combineBilingualParagraphs(chinaHomeLifeEventsSupportCopy.commercialCopy),
    factPills: [...chinaHomeLifeEventsSupportCopy.tags],
    highlights: [...chinaHomeLifeEventsSupportCopy.benefits],
    ctaLabel: chinaHomeLifeEventsSupportCopy.cta,
    imageRailLabel: chinaHomeLifeEventsSupportCopy.title,
    images: chinaHomeLifeEventsSupportItems,
    videoId: "event-china-home-life",
    sources: [],
  },
];

export function EventSupportGalleryBlock({
  copy,
  items,
  video,
  onOpenVideo,
  delay = 0,
}: {
  copy: EventSupportCopy;
  items: EventsGalleryItem[];
  video: EventsRouteVideo | null;
  onOpenVideo: (video: EventsRouteVideo) => void;
  delay?: number;
}) {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <>
      <section className={`section-pad ${commercialMarahibStyle.section}`}>
        <SectionShell className="route-shell split-row grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <EventsReveal delay={delay} className="min-w-0">
            <p className={`eyebrow ${commercialMarahibStyle.eyebrow}`}>
              {t(copy.eyebrow)}
            </p>
            <h2
              className={`mt-5 max-w-2xl text-[clamp(2.1rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal ${commercialMarahibStyle.heading}`}
            >
              {t(copy.title)}
            </h2>
            <p className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${commercialMarahibStyle.body}`}>
              {t(copy.verifiedInfo)}
            </p>
            <div className="mt-5 grid max-w-2xl gap-3">
              {copy.commercialCopy.map((paragraph) => (
                <p key={paragraph.en} className={`text-base leading-8 sm:text-lg ${commercialMarahibStyle.body}`}>
                  {t(paragraph)}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {copy.tags.map((tag) => (
                <span
                  key={tag.en}
                  className={`rounded-full border px-3.5 py-2 text-xs font-extrabold ${commercialMarahibStyle.pill}`}
                >
                  {t(tag)}
                </span>
              ))}
            </div>

            <div className={`mt-7 rounded-[1.65rem] border p-4 sm:p-5 ${commercialMarahibStyle.panel}`}>
              <div className="grid gap-3">
                {copy.benefits.map((benefit) => (
                  <div
                    key={benefit.en}
                    className={`flex gap-3 rounded-[1.15rem] p-3.5 text-sm font-bold leading-6 ${commercialMarahibStyle.benefit}`}
                  >
                    <Check className="mt-1 size-4 shrink-0 text-[#E2C18C]" aria-hidden="true" />
                    <span>{t(benefit)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <CtaLink>
                {t(copy.cta)}
                <Arrow size={18} aria-hidden="true" />
              </CtaLink>
            </div>
          </EventsReveal>

          <EventsReveal delay={110} className="min-w-0">
            <div className={`rounded-[1.9rem] border p-3 sm:p-4 ${commercialMarahibStyle.media}`}>
              <EventImageRail
                items={items}
                groupLabel={t(copy.title)}
                tone={commercialMarahibStyle.tone}
              />
            </div>
          </EventsReveal>
        </SectionShell>
      </section>

      {video ? (
        <section className="section-pad bg-[linear-gradient(180deg,#F8F1E7_0%,#EADDCB_100%)]">
          <SectionShell className="route-shell">
            <EventsReveal>
              <EventVideoCard
                video={video}
                style={commercialMarahibStyle}
                onOpenVideo={onOpenVideo}
              />
            </EventsReveal>
          </SectionShell>
        </section>
      ) : null}
    </>
  );
}

export function MarahibTuwaiqProjectSection({
  video,
  onOpenVideo,
}: {
  video: EventsRouteVideo | null;
  onOpenVideo: (video: EventsRouteVideo) => void;
}) {
  return (
    <EventSupportGalleryBlock
      copy={marahibTuwaiqProjectCopy}
      items={marahibTuwaiqProjectItems}
      video={video}
      onOpenVideo={onOpenVideo}
    />
  );
}

function EventSupportSection({
  videosById,
  onOpenVideo,
}: {
  videosById: Map<string, EventsRouteVideo>;
  onOpenVideo: (video: EventsRouteVideo) => void;
}) {
  return (
    <>
      {additionalEventCaseModules.map((module, moduleIndex) => (
        <EventCaseModuleSection
          key={module.id}
          module={module}
          index={moduleIndex + eventCaseModules.length}
          styleIndex={2}
          video={module.videoId ? videosById.get(module.videoId) ?? null : null}
          onOpenVideo={onOpenVideo}
        />
      ))}
    </>
  );
}

function FinalCtaSection() {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section className="relative isolate overflow-hidden border-t border-[#D8BE9D]/20 bg-[#F8F1E7] py-[clamp(4.75rem,8vw,7.5rem)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(229,193,142,0.22),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(20,60,62,0.11),transparent_30%)]"
      />
      <SectionShell className="route-shell">
        <EventsReveal className="relative isolate overflow-hidden rounded-[2.45rem] border border-white/12 bg-[linear-gradient(135deg,#214446_0%,#355456_54%,#7A5A43_100%)] p-7 text-white shadow-[0_36px_96px_-58px_rgba(0,0,0,0.66)] sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_86%_24%,rgba(229,193,142,0.3),transparent_34%)]"
          />
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="eyebrow text-[#E5C18E]">
                {t(eventsPageContent.finalCta.eyebrow)}
              </p>
              <h2 className="mt-5 text-[clamp(2.05rem,4vw,3.15rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-white rtl:tracking-normal">
                {t(eventsPageContent.finalCta.title)}
              </h2>
              <p className="mt-4 text-base font-medium leading-8 text-white/78 sm:text-lg">
                {t(eventsPageContent.finalCta.text)}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <CtaLink>
                <MessageCircle size={18} aria-hidden="true" />
                {t(eventsPageContent.finalCta.cta)}
              </CtaLink>
              <CtaLink href={company.phoneHref} variant="soft">
                <Phone size={18} aria-hidden="true" />
                {t(eventsPageContent.finalCta.call)}
                <Arrow size={18} aria-hidden="true" />
              </CtaLink>
            </div>
          </div>
        </EventsReveal>
      </SectionShell>
    </section>
  );
}

function EventsRoutePageBody() {
  const [activeVideo, setActiveVideo] = useState<EventsRouteVideo | null>(null);
  const videosById = useMemo(
    () => new Map(eventsRouteVideos.map((video) => [video.id, video])),
    [],
  );
  const consolidatedEventCaseModules = useMemo(
    () =>
      eventCaseModules.map((module) => {
        if (module.id !== princessSeetahEventsCaseId) {
          return module;
        }

        return {
          ...module,
        };
      }),
    [],
  );

  return (
    <div className="route-density min-h-screen bg-[#FFF8F0]">
      <Header />
      <main>
        <HeroSection />
        <ModulesIntroSection />
        {consolidatedEventCaseModules.map((module, index) => (
          <EventCaseModuleSection
            key={module.id}
            module={module}
            index={index}
            video={module.videoId ? (videosById.get(module.videoId) ?? null) : null}
            onOpenVideo={setActiveVideo}
          />
        ))}
        <EventSupportSection
          videosById={videosById}
          onOpenVideo={setActiveVideo}
        />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />

      {activeVideo ? (
        <VideoModal
          video={activeVideo.video}
          title={activeVideo.railTitle}
          poster={activeVideo.poster}
          onClose={() => setActiveVideo(null)}
        />
      ) : null}
    </div>
  );
}

export function EventsRoutePage() {
  return (
    <LanguageProvider>
      <EventsRoutePageBody />
    </LanguageProvider>
  );
}
