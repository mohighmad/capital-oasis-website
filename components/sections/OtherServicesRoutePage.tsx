"use client";

import Link from "next/link";
import {
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  LampFloor,
  LayoutPanelTop,
  MessageCircle,
  PanelsTopLeft,
  Phone,
  Sparkles,
} from "lucide-react";
import { useMemo, type ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { ScrollToTop } from "@/components/ScrollToTop";
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
import { otherServicesHeroMediaPool } from "@/components/sections/unifiedHeroMedia";
import { company, type Bilingual } from "@/data/content";
import { designs } from "@/data/designs";
import { SectionShell } from "./SectionShell";
import { UnifiedRouteHero } from "./UnifiedRouteHero";

type OtherServicesGalleryItem = {
  id: string;
  src: string;
  alt: Bilingual;
  title: Bilingual;
  caption: Bilingual;
  groupId: string;
  groupLabel: Bilingual;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
};

type OtherServicesScopeCard = {
  id: string;
  title: Bilingual;
  text: Bilingual;
  points: Bilingual[];
  icon: typeof PanelsTopLeft;
};

function designById(id: string) {
  const item = designs.find((entry) => entry.id === id);

  if (!item) {
    throw new Error(`Missing other-services design media: ${id}`);
  }

  return item;
}

function supportImage(
  id: string,
  groupId: string,
  groupLabel: Bilingual,
  title: Bilingual,
  caption: Bilingual,
  objectPosition = "center",
): OtherServicesGalleryItem {
  const design = designById(id);

  return {
    id,
    src: design.src,
    alt: title,
    title,
    caption,
    groupId,
    groupLabel,
    objectFit: "cover",
    objectPosition,
  };
}

function toRailItem(
  item: OtherServicesGalleryItem,
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
  item: OtherServicesGalleryItem,
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

function ActionLink({
  children,
  href = company.whatsapp,
  variant = "primary",
  external,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "soft";
  external?: boolean;
}) {
  const isExternal = external ?? href.startsWith("http");
  const classes =
    variant === "primary"
      ? "bg-[#6F5A46] text-white shadow-[0_20px_46px_-26px_rgba(90,64,45,0.72)] hover:bg-[#5C4939]"
      : "border border-[rgba(92,102,90,0.18)] bg-white/82 text-[#31403B] shadow-[0_18px_42px_-34px_rgba(49,64,59,0.26)] hover:border-[rgba(145,117,78,0.42)] hover:bg-white";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-[var(--radius-button)] px-5 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58B5A] focus-visible:ring-offset-2 ${classes}`}
    >
      {children}
    </a>
  );
}

function OtherServicesImageRail({
  items,
  groupLabel,
}: {
  items: OtherServicesGalleryItem[];
  groupLabel: string;
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
        tone="default"
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

const featureRailGroup = {
  ar: "تفاصيل خاصة حسب طبيعة المساحة",
  en: "Special details shaped around the space",
};

const supportRailGroup = {
  ar: "حلول مكملة للمداخل والزوايا العملية",
  en: "Complementary solutions for entry and practical corners",
};

const featureRailItems: OtherServicesGalleryItem[] = [
  supportImage(
    "design-backlit-marble-tv-unit",
    "other-services-featured",
    featureRailGroup,
    {
      ar: "وحدة تلفزيون بإضاءة خلفية",
      en: "Backlit TV wall unit",
    },
    {
      ar: "تكوين يربط الشاشة مع الرخام والتخزين بصورة مرتبة داخل المجلس أو غرفة المعيشة.",
      en: "A TV wall direction that ties the screen, marble finish, and storage into one ordered scene.",
    },
    "center 48%",
  ),
  supportImage(
    "design-wood-slat-tv-wall",
    "other-services-featured",
    featureRailGroup,
    {
      ar: "جدار تلفزيون بتشطيب خشبي دافئ",
      en: "Warm wood-finish TV wall",
    },
    {
      ar: "حل مناسب للمساحات التي تحتاج حضوراً هادئاً وتشطيباً متناسقاً مع بقية الفراغ.",
      en: "A calmer TV-wall direction for spaces that need warmth and coordinated finishing.",
    },
    "center 50%",
  ),
  supportImage(
    "design-luxury-console-wall-decor",
    "other-services-featured",
    featureRailGroup,
    {
      ar: "كونسول جداري يكمل المشهد الأمامي",
      en: "Decorative console for the front scene",
    },
    {
      ar: "تفصيلة مكملة للمداخل والجدران الرئيسية عندما يحتاج المشروع نقطة عرض أكثر أناقة.",
      en: "A refined supporting detail for entrances and feature walls that need a stronger front-facing moment.",
    },
    "center 50%",
  ),
  supportImage(
    "design-curved-minimalist-console",
    "other-services-featured",
    featureRailGroup,
    {
      ar: "وحدة جانبية بانسياب هادئ",
      en: "Soft curved side console",
    },
    {
      ar: "وحدة مناسبة للممرات والزوايا التي تحتاج حضوراً خفيفاً مع وظيفة عملية واضحة.",
      en: "A light side-unit direction for corners and passages that need a practical but elegant touch.",
    },
    "center 50%",
  ),
];

const supportRailItems: OtherServicesGalleryItem[] = [
  supportImage(
    "design-storage-coffee-station-unit",
    "other-services-support",
    supportRailGroup,
    {
      ar: "ركن قهوة وتخزين مدمج",
      en: "Integrated coffee and storage station",
    },
    {
      ar: "تفصيل عملي للمجالس أو المكاتب المنزلية يجمع العرض والتخزين والخدمة اليومية.",
      en: "A practical complementary unit for living spaces or home offices, combining display, storage, and daily use.",
    },
    "center 52%",
  ),
  supportImage(
    "design-glass-display-coffee-station",
    "other-services-support",
    supportRailGroup,
    {
      ar: "خزانة عرض مع ركن قهوة مضاء",
      en: "Lit glass display and coffee station",
    },
    {
      ar: "حل مناسب حين يحتاج المشروع وحدة عرض منظمة مع لمسة ضيافة واضحة.",
      en: "A good fit when the space needs a clear hospitality corner with a more organized display presence.",
    },
    "center 48%",
  ),
  supportImage(
    "design-luxury-lobby-lounge",
    "other-services-support",
    supportRailGroup,
    {
      ar: "تفاصيل لوبي واستقبال دافئة",
      en: "Warm lobby and reception detailing",
    },
    {
      ar: "مشهد يساعد على توحيد التشطيب بين الجلسات والمداخل والتفاصيل الجدارية المكملة.",
      en: "A direction that helps unify entrance, seating, and wall-detail finishing into one calm composition.",
    },
    "center 50%",
  ),
];

const interiorDecorPreviousWorksGroup = {
  ar: "سوابق أعمال الديكور الداخلي والغرف",
  en: "Interior Decor and Room Previous Works",
};

function interiorDecorPreviousWorkItem(
  id: string,
  src: string,
  title: Bilingual,
  caption: Bilingual,
): OtherServicesGalleryItem {
  return {
    id,
    src,
    alt: title,
    title,
    caption,
    groupId: "other-services-decor-previous-works",
    groupLabel: interiorDecorPreviousWorksGroup,
    objectFit: "cover",
    objectPosition: "center 50%",
  };
}

const interiorDecorPreviousWorksItems: OtherServicesGalleryItem[] = [
  ...Array.from({ length: 6 }, (_, index) => {
    const fileIndex = String(index + 1).padStart(3, "0");
    const itemNumber = String(index + 1).padStart(2, "0");

    return interiorDecorPreviousWorkItem(
      `other-services-decor-bedroom-${itemNumber}`,
      `/images/capital-oasis/website-photos/decor/decor-bedroom-interior-${fileIndex}.jpeg`,
      {
        ar: "تكوين داخلي وتشطيب لغرفة منفذة",
        en: "Interior composition and finish",
      },
      {
        ar: "مشهد يوضح الخامة والتكوين وعلاقة التشطيب الداخلي بطبيعة الغرفة.",
        en: "A view that highlights material tone, composition, and how the finish supports the room.",
      },
    );
  }),
  ...Array.from({ length: 9 }, (_, index) => {
    const fileIndex = String(index + 1).padStart(3, "0");
    const itemNumber = String(index + 7).padStart(2, "0");

    return interiorDecorPreviousWorkItem(
      `other-services-decor-rooms-${itemNumber}`,
      `/images/capital-oasis/website-photos/decor/decor-rooms-ads-${fileIndex}.jpg`,
      {
        ar: "تشطيب غرفة وتفاصيلها المكملة",
        en: "Room finish and complementary details",
      },
      {
        ar: "تفاصيل غرف وتشطيبات مكملة تساعد على قراءة الجدران والتخزين وتوزيع العناصر داخل المساحة.",
        en: "Room finishing details that help compare walls, storage rhythm, and supporting elements.",
      },
    );
  }),
];

const scopeCards: OtherServicesScopeCard[] = [
  {
    id: "tv-walls",
    title: {
      ar: "وحدات تلفزيون وجدران عرض",
      en: "TV walls and media units",
    },
    text: {
      ar: "حلول أمامية تربط الشاشة مع التخزين والتشطيب الجداري داخل المجالس وغرف المعيشة.",
      en: "Front-facing media solutions that connect the screen, storage, and wall finish inside living spaces.",
    },
    points: [
      { ar: "تشطيب متناسق مع المجلس", en: "Coordinated living-room finish" },
      { ar: "استغلال مرتب للجدار الرئيسي", en: "Ordered use of the main wall" },
      { ar: "تفاصيل إنارة أو رفوف حسب الطلب", en: "Lighting and shelving by request" },
    ],
    icon: PanelsTopLeft,
  },
  {
    id: "coffee-display",
    title: {
      ar: "أركان قهوة وخزائن عرض",
      en: "Coffee corners and display cabinets",
    },
    text: {
      ar: "وحدات مكملة تضيف وظيفة يومية واضحة للمساحة مع حضور أنيق ومباشر.",
      en: "Complementary units that add practical daily function with a direct refined presence.",
    },
    points: [
      { ar: "تخزين عملي", en: "Practical storage" },
      { ar: "عرض منظم", en: "Organized display" },
      { ar: "حل مناسب للمجالس والمكاتب", en: "Suitable for lounges and offices" },
    ],
    icon: LampFloor,
  },
  {
    id: "entry-details",
    title: {
      ar: "تفاصيل مداخل ولوبيات",
      en: "Lobby and entrance details",
    },
    text: {
      ar: "عناصر تكميلية مثل الكونسولات والتفاصيل الجدارية التي تعطي المساحة بداية أوضح وأكثر ترتيباً.",
      en: "Complementary consoles and wall details that give the space a clearer and more composed arrival moment.",
    },
    points: [
      { ar: "أول انطباع أهدأ", en: "Calmer first impression" },
      { ar: "معالجة أنيقة للفراغ الأمامي", en: "Refined front-space treatment" },
      { ar: "ربط أفضل بين المدخل والجلسة", en: "Better link between entry and seating" },
    ],
    icon: Sparkles,
  },
  {
    id: "custom-solutions",
    title: {
      ar: "حلول خاصة حسب الطلب",
      en: "Custom complementary solutions",
    },
    text: {
      ar: "عناصر لا تدخل دائماً ضمن الأقسام الرئيسية لكنها تكمل استخدام المساحة وتنسجم مع شكل المشروع.",
      en: "Special elements that do not always sit inside the main categories but complete the space and support the project finish.",
    },
    points: [
      { ar: "مساحات سكنية وتجارية", en: "Residential and commercial spaces" },
      { ar: "تفصيل حسب الاستخدام اليومي", en: "Shaped around daily use" },
      { ar: "توريد وتركيب ضمن نفس المسار", en: "Supply and installation within the same path" },
    ],
    icon: LayoutPanelTop,
  },
];

const processSteps = [
  {
    title: {
      ar: "نحدد نوع الاستخدام",
      en: "Define the use case",
    },
    text: {
      ar: "نراجع معك أين ستوضع الوحدة أو التفصيلة وما الدور المطلوب منها داخل المساحة.",
      en: "We review where the unit or detail sits and what role it needs to perform inside the space.",
    },
  },
  {
    title: {
      ar: "نراجع المساحة والتشطيب",
      en: "Review space and finish",
    },
    text: {
      ar: "نربط المقاس والخامة واللون مع بقية المشروع حتى لا تبدو الإضافة منفصلة عن الفراغ.",
      en: "We connect size, material, and color with the rest of the project so the addition feels fully integrated.",
    },
  },
  {
    title: {
      ar: "نجهز التفصيلة المناسبة",
      en: "Shape the right detail",
    },
    text: {
      ar: "نختار التكوين العملي، الرفوف أو الخزائن أو الإضاءة حسب الحاجة الفعلية للمستخدم.",
      en: "We define the practical composition, shelving, storage, or lighting according to actual use.",
    },
  },
  {
    title: {
      ar: "نرتب التوريد والتركيب",
      en: "Arrange supply and installation",
    },
    text: {
      ar: "بعد اعتماد الاتجاه المناسب نرتب التنفيذ ضمن نفس منظومة كابيتال واسي للتوريد والتركيب.",
      en: "After the direction is approved, supply and installation move through the same Capital Oasis delivery path.",
    },
  },
];

const valuePoints = [
  {
    title: {
      ar: "استغلال أفضل للمساحات الصغيرة",
      en: "Better use of compact spaces",
    },
    text: {
      ar: "تفاصيل جانبية أو وحدات مدمجة تمنح المساحة وظيفة أوضح دون ازدحام بصري.",
      en: "Side units and built-in details give the space clearer function without visual heaviness.",
    },
  },
  {
    title: {
      ar: "تشطيب منسجم مع بقية المشروع",
      en: "Finish aligned with the wider project",
    },
    text: {
      ar: "نربط الخامة واللون والتفاصيل مع الأبواب أو المطبخ أو الجلسة القائمة داخل المشروع.",
      en: "Material, tone, and detailing stay aligned with doors, kitchens, or the existing seating environment.",
    },
  },
  {
    title: {
      ar: "حلول عملية للاستخدام اليومي",
      en: "Practical daily-use solutions",
    },
    text: {
      ar: "من وحدات التلفزيون إلى أركان القهوة والتخزين، الهدف أن تكون الإضافة مفيدة فعلاً في الاستخدام.",
      en: "From TV walls to coffee corners and storage, the goal is a useful addition for real daily routines.",
    },
  },
  {
    title: {
      ar: "مرونة في الطلبات الخاصة",
      en: "Flexible custom requests",
    },
    text: {
      ar: "عندما لا يندرج الطلب تحت قسم رئيسي واضح، يبقى ممكناً تنظيمه كحل خاص داخل نفس المسار.",
      en: "When the request does not fit a main category cleanly, it can still be organized as a focused complementary solution.",
    },
  },
];

function HeroSection() {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <UnifiedRouteHero
      id="other-services-hero"
      variant="other-services"
      eyebrow={t({
        ar: "تفاصيل مكملة تمنح المشروع اكتماله",
        en: "Complementary details that complete the project",
      })}
      title={t({
        ar: "تفاصيل مكملة\nتمنح المساحة حضورها النهائي",
        en: "Complementary details that give the space its final presence.",
      })}
      body={t({
        ar: "وحدات تلفزيون وعرض وتخزين وعناصر خاصة حسب الطلب، تنسجم مع التشطيب وتخدم الاستخدام الفعلي.",
        en: "TV, display, storage, and custom pieces shaped around the finish and the way the space is used.",
      })}
      actions={
        <>
          <ActionLink>
            <MessageCircle size={18} aria-hidden="true" />
            {t({ ar: "ناقش الحل المكمل", en: "Discuss the Complementary Solution" })}
          </ActionLink>
          <Link
            href="/"
            className="inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-[var(--radius-button)] border border-[rgba(92,102,90,0.18)] bg-white/82 px-5 py-3 text-sm font-extrabold text-[#31403B] shadow-[0_18px_42px_-34px_rgba(49,64,59,0.26)] transition hover:-translate-y-0.5 hover:border-[rgba(145,117,78,0.42)] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58B5A]"
          >
            {t({ ar: "استكشف منظومة كابيتال واسي", en: "Explore Capital Oasis" })}
            <Arrow size={18} aria-hidden="true" />
          </Link>
          <ActionLink href={company.phoneHref} variant="soft" external={false}>
            <Phone size={18} aria-hidden="true" />
            {t({ ar: "اتصل بنا", en: "Call us" })}
          </ActionLink>
        </>
      }
      points={[
        { ar: "وحدات تلفزيون وجدران عرض", en: "TV walls and media units" },
        { ar: "أركان قهوة وخزائن عرض", en: "Coffee corners and display units" },
        { ar: "تفاصيل مكملة حسب الطلب", en: "Custom complementary details" },
      ]}
      mediaItems={otherServicesHeroMediaPool}
    />
  );
}

function ScopeSection() {
  const { t } = useLanguage();

  return (
    <section className="section-pad bg-[linear-gradient(180deg,#FBF8F2_0%,#F0E8DA_100%)]">
      <SectionShell className="route-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center text-[#8E7659]">
            {t({ ar: "نطاق الحلول", en: "Solution Scope" })}
          </p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#28322F]">
            {t({
              ar: "حلول تكمل المساحة وتحافظ على هوية المشروع",
              en: "Solutions that complete the space while keeping the project identity intact",
            })}
          </h2>
          <p className="mt-4 text-base leading-8 text-[#5F5447]">
            {t({
              ar: "نطاق مخصص لوحدات التلفزيون والعرض والتخزين والمداخل، بصياغة تنسجم مع التشطيب والاستخدام اليومي.",
              en: "A focused range of TV, display, storage, and entry details composed to fit the finish and daily use.",
            })}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {scopeCards.map((card) => {
            const Icon = card.icon;

            return (
              <Reveal
                key={card.id}
                className="h-full rounded-[1.65rem] border border-[rgba(92,102,90,0.12)] bg-[linear-gradient(155deg,rgba(255,251,246,0.96),rgba(238,236,228,0.94))] p-5 shadow-[0_26px_60px_-48px_rgba(64,74,69,0.22)]"
              >
                <span className="grid size-11 place-items-center rounded-2xl border border-[rgba(181,139,90,0.22)] bg-[#F1E5D3] text-[#7C664C]">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[1.28rem] font-semibold tracking-normal text-[#2B3430]">
                  {t(card.title)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5D5146]">
                  {t(card.text)}
                </p>
                <div className="mt-5 grid gap-3">
                  {card.points.map((point) => (
                    <div
                      key={point.en}
                      className="flex gap-2 rounded-[1rem] bg-white/76 px-4 py-3 text-sm font-bold leading-6 text-[#48524D]"
                    >
                      <Check
                        className="mt-1 size-4 shrink-0 text-[#8E7659]"
                        aria-hidden="true"
                      />
                      <span>{t(point)}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionShell>
    </section>
  );
}

function FeatureSection() {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";
  const Arrow = isArabic ? ArrowUpLeft : ArrowUpRight;

  return (
    <section className="section-pad bg-[linear-gradient(135deg,#EDE4D6_0%,#F8F3EB_100%)]">
      <SectionShell className="route-shell split-row grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <Reveal>
          <p className="eyebrow text-[#7C6653]">
            {t({ ar: "التفصيلة الرئيسية", en: "Featured Direction" })}
          </p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2D3532]">
            {t({
              ar: "تفاصيل مكملة تُبنى حول المساحة",
              en: "Complementary details built around the space",
            })}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5E5448] sm:text-lg">
            {t({
              ar: "ننقذ المساحات التي تحتاج وحدة مكملة أكثر من حاجتها إلى قسم مستقل. قد تكون جدار تلفزيون، كونسول أمامي، أو معالجة تخزين وعرض تضبط المشهد وتخدم الاستخدام الفعلي.",
              en: "Some spaces need a complementary unit more than a fully separate category. It may be a TV wall, an entry console, or a display and storage detail that improves both the scene and the real use of the space.",
            })}
          </p>

          <div className="mt-7 rounded-[1.55rem] border border-[rgba(92,102,90,0.14)] bg-white/78 p-5 shadow-[0_22px_56px_-42px_rgba(64,74,69,0.22)]">
            <div className="grid gap-3">
              {[
                {
                  ar: "وحدات أمامية للمجالس وغرف المعيشة",
                  en: "Front-facing units for living spaces",
                },
                {
                  ar: "حلول عرض وتخزين منسجمة مع التشطيب",
                  en: "Display and storage aligned with the finish",
                },
                {
                  ar: "تفاصيل خاصة لا تحتاج صفحة مستقلة لكنها تستحق معالجة مدروسة",
                  en: "Special details that do not need a full route but still deserve a clear treatment",
                },
              ].map((item) => (
                <div
                  key={item.en}
                  className="flex gap-2 rounded-[1rem] bg-[#F8F4EC] px-4 py-3 text-sm font-bold leading-6 text-[#4B534E]"
                >
                  <Check
                    className="mt-1 size-4 shrink-0 text-[#8E7659]"
                    aria-hidden="true"
                  />
                  <span>{t(item)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <ActionLink>
              {t({ ar: "ناقش معنا الاتجاه المناسب", en: "Discuss the right direction" })}
              <Arrow size={18} aria-hidden="true" />
            </ActionLink>
          </div>
        </Reveal>

        <Reveal delay={110} className="min-w-0">
          <div className="rounded-[1.9rem] border border-white/72 bg-white/76 p-3 shadow-[0_30px_78px_-56px_rgba(64,74,69,0.2)] sm:p-4">
            <OtherServicesImageRail
              items={featureRailItems}
              groupLabel={t(featureRailGroup)}
            />
          </div>
        </Reveal>
      </SectionShell>
    </section>
  );
}

function SupportVisualSection() {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section className="section-pad bg-[linear-gradient(135deg,#5C4A3A_0%,#7A6654_48%,#8C7356_100%)] text-white">
      <SectionShell className="route-shell split-row grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <Reveal className="min-w-0">
          <div className="rounded-[1.9rem] border border-white/12 bg-white/[0.08] p-3 shadow-[0_34px_84px_-56px_rgba(0,0,0,0.52)] sm:p-4">
            <OtherServicesImageRail
              items={supportRailItems}
              groupLabel={t(supportRailGroup)}
            />
          </div>
        </Reveal>

        <Reveal>
          <p className="eyebrow text-[#E4C693]">
            {t({ ar: "تفاصيل ترفع جودة المشهد", en: "Details that elevate the scene" })}
          </p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,2.95rem)] leading-[1.12] font-semibold tracking-normal text-white">
            {t({
              ar: "حلول مكملة للمداخل والزوايا اليومية",
              en: "Complementary solutions for entries and everyday corners",
            })}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            {t({
              ar: "بعض المساحات تحتاج ركناً منظماً للقهوة، خزانة عرض مضاءة، أو تفاصيل مدخل تربط التشطيب مع الاستقبال والجلسات. هذه العناصر لا تكون ثانوية في النتيجة النهائية، بل تكمل جودة المشروع.",
              en: "Some spaces need a better coffee corner, a lit display cabinet, or a stronger entry detail that ties together the finish and the welcoming atmosphere. These pieces are complementary, but they have a clear impact on the final result.",
            })}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { ar: "أركان القهوة", en: "Coffee corners" },
              { ar: "خزائن العرض", en: "Display cabinets" },
              { ar: "تفاصيل المداخل", en: "Entry details" },
            ].map((item) => (
              <span
                key={item.en}
                className="rounded-full border border-white/14 bg-white/[0.09] px-3 py-2 text-xs font-extrabold text-white/84"
              >
                {t(item)}
              </span>
            ))}
          </div>

          <div className="mt-7">
            <ActionLink variant="soft" href={company.phoneHref} external={false}>
              <Phone size={18} aria-hidden="true" />
              {t({ ar: "اتصل بنا لترتيب الفكرة", en: "Call to shape the idea" })}
              <Arrow size={18} aria-hidden="true" />
            </ActionLink>
          </div>
        </Reveal>
      </SectionShell>
    </section>
  );
}

function InteriorDecorPreviousWorksSection() {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section className="section-pad bg-[linear-gradient(180deg,#F6EFE5_0%,#EBDDCC_100%)]">
      <SectionShell className="route-shell split-row grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <Reveal>
          <p className="eyebrow text-[#876C57]">
            {t({ ar: "سوابق أعمال", en: "Previous Works" })}
          </p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2D3532]">
            {t(interiorDecorPreviousWorksGroup)}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5F5448] sm:text-lg">
            {t({
              ar: "نماذج من تفاصيل الديكور الداخلي والغرف، تشمل الخامات، الجدران، وحدات التخزين، والتشطيبات المكملة حسب طبيعة المساحة.",
              en: "Examples of interior decor and room detailing, including material tone, walls, storage units, and complementary finishes shaped around the space.",
            })}
          </p>

          <div className="mt-7 rounded-[1.55rem] border border-[rgba(92,102,90,0.12)] bg-white/84 p-5 shadow-[0_24px_56px_-46px_rgba(64,74,69,0.2)]">
            <div className="grid gap-3">
              {[
                {
                  ar: "تفاصيل جدارية وتشطيبات مكملة تعطي المشهد الداخلي حضورًا أوضح",
                  en: "Wall treatments and finishing details that give the interior scene a clearer presence",
                },
                {
                  ar: "حلول تخزين ووحدات عرض تساعد على تنظيم المساحة بحسب الاستخدام",
                  en: "Storage and display ideas that help organize the room around daily use",
                },
                {
                  ar: "نماذج غرف تمنح تصورًا عمليًا قبل اعتماد التكوين المناسب",
                  en: "Room examples that offer a practical reading before finalizing the right composition",
                },
              ].map((point) => (
                <div
                  key={point.en}
                  className="flex gap-2 rounded-[1rem] bg-[#F8F4EC] px-4 py-3 text-sm font-bold leading-6 text-[#4B534E]"
                >
                  <Check
                    className="mt-1 size-4 shrink-0 text-[#8E7659]"
                    aria-hidden="true"
                  />
                  <span>{t(point)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <ActionLink>
              <MessageCircle size={18} aria-hidden="true" />
              {t({ ar: "ناقش معنا موجز المساحة", en: "Discuss the Space Brief" })}
              <Arrow size={18} aria-hidden="true" />
            </ActionLink>
          </div>
        </Reveal>

        <Reveal delay={110} className="min-w-0">
          <div className="rounded-[1.9rem] border border-white/72 bg-white/78 p-3 shadow-[0_30px_78px_-56px_rgba(64,74,69,0.2)] sm:p-4">
            <OtherServicesImageRail
              items={interiorDecorPreviousWorksItems}
              groupLabel={t(interiorDecorPreviousWorksGroup)}
            />
          </div>
        </Reveal>
      </SectionShell>
    </section>
  );
}

function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section className="section-pad bg-[linear-gradient(180deg,#F7F3EA_0%,#F0E8DA_100%)]">
      <SectionShell className="route-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center text-[#7B6755]">
            {t({ ar: "كيف نساعدك", en: "How We Help" })}
          </p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2D3532]">
            {t({
              ar: "مسار واضح للحلول الخاصة والمكملة",
              en: "A clear path for complementary custom work",
            })}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.title.en}
              className="rounded-[1.55rem] border border-[rgba(92,102,90,0.12)] bg-white/84 p-5 shadow-[0_24px_56px_-46px_rgba(64,74,69,0.22)]"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#7C654F] text-sm font-extrabold text-[#F8F0E3]">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-normal text-[#2D3532]">
                {t(step.title)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5F5448]">
                {t(step.text)}
              </p>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}

function ValueSection() {
  const { t } = useLanguage();

  return (
    <section className="section-pad bg-[linear-gradient(180deg,#FAF7F1_0%,#F2EADE_100%)]">
      <SectionShell className="route-shell grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <Reveal>
          <p className="eyebrow text-[#866E5A]">
            {t({ ar: "لماذا هذه الخدمة", en: "Why This Service" })}
          </p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2D3532]">
            {t({
              ar: "قيمة عملية للعناصر التي تكمل المشروع",
              en: "Practical value for the details that complete the project",
            })}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5F5448] sm:text-lg">
            {t({
              ar: "المساحة لا تحتاج دائماً إلى عنصر رئيسي جديد، لكنها قد تحتاج تفصيلة مكملة تعالج الجدار أو الركن أو التخزين بصورة أكثر فاعلية. هنا تظهر أهمية هذا القسم.",
              en: "A space does not always need a major new category, but it often needs one complementary detail that solves the wall, the corner, or the storage rhythm more effectively.",
            })}
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {valuePoints.map((item) => (
            <Reveal
              key={item.title.en}
              className="rounded-[1.55rem] border border-[rgba(92,102,90,0.12)] bg-[linear-gradient(155deg,rgba(255,251,246,0.98),rgba(241,237,228,0.94))] p-5 shadow-[0_24px_56px_-46px_rgba(64,74,69,0.2)]"
            >
              <span className="inline-flex rounded-full border border-[rgba(181,139,90,0.24)] bg-[#F2E7D6] px-3 py-1 text-[0.72rem] font-extrabold text-[#7C654F]">
                {t({ ar: "ميزة", en: "Value" })}
              </span>
              <h3 className="mt-4 text-[1.15rem] font-semibold tracking-normal text-[#2D3532]">
                {t(item.title)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5D5146]">
                {t(item.text)}
              </p>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}

function FinalCtaSection() {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section className="section-pad bg-[linear-gradient(180deg,#EAE3D6_0%,#F5F0E8_100%)]">
      <SectionShell className="route-shell">
        <Reveal className="relative isolate overflow-hidden rounded-[2.35rem] bg-[linear-gradient(135deg,#6B5846_0%,#8A745C_46%,#A68E70_100%)] p-7 text-white shadow-[0_34px_90px_-58px_rgba(0,0,0,0.38)] sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_86%_24%,rgba(228,198,147,0.28),transparent_34%)]"
          />
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="eyebrow text-[#F0DFC5]">
                {t({ ar: "ابدأ من التفصيلة", en: "Start with the Detail" })}
              </p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-white">
                {t({
                  ar: "هل لديك تفصيلة خاصة خارج الأقسام الرئيسية؟",
                  en: "Have a custom detail outside the main categories?",
                })}
              </h2>
              <p className="mt-4 text-base leading-8 text-white/80 sm:text-lg">
                {t({
                  ar: "شاركنا نوع المساحة والاستخدام المطلوب، وسنساعدك في اختيار الحل الأقرب للمشروع مع توريد وتركيب ضمن نفس المسار المعتمد.",
                  en: "Share the space type and the intended use, and we will help define the closest solution with supply and installation through the same approved path.",
                })}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ActionLink>
                <MessageCircle size={18} aria-hidden="true" />
                {t({ ar: "اطلب عرضاً حسب الطلب", en: "Request a Custom Quote" })}
              </ActionLink>
              <ActionLink href={company.phoneHref} variant="soft" external={false}>
                <Phone size={18} aria-hidden="true" />
                {t({ ar: "اتصل بنا", en: "Call us" })}
                <Arrow size={18} aria-hidden="true" />
              </ActionLink>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </section>
  );
}

function OtherServicesRoutePageBody() {
  return (
    <div className="route-density min-h-screen bg-[#FBF7F1]">
      <Header />
      <main>
        <HeroSection />
        <ScopeSection />
        <FeatureSection />
        <SupportVisualSection />
        <ProcessSection />
        <ValueSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

export function OtherServicesRoutePage() {
  return (
    <LanguageProvider>
      <OtherServicesRoutePageBody />
    </LanguageProvider>
  );
}
