"use client";

import {
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  MessageCircle,
  PanelsTopLeft,
  Phone,
  ReceiptText,
  Store,
} from "lucide-react";
import { useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  LanguageProvider,
  useLanguage,
} from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ImageModal } from "@/components/media/ImageModal";
import { ReadyVideoSection } from "@/components/media/ReadyVideoSection";
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
  commercialShopsEditorialSections,
  commercialBotellaGiftShopItems,
  commercialShopsPageContent,
  type CommercialShopEditorialSection,
  type CommercialShopGalleryItem,
} from "@/data/commercialShops";
import {
  eventsRouteVideos,
  type EventsRouteVideo,
} from "@/data/events";
import { SectionShell } from "./SectionShell";
import { UnifiedRouteHero } from "./UnifiedRouteHero";
import { commercialShopsHeroMediaPool } from "./unifiedHeroMedia";
import { marahibTuwaiqProjectItems } from "./EventsRoutePage";

const sectionIcons = [Store, ReceiptText, PanelsTopLeft] as const;
const editorialStyles = [
  {
    section:
      "bg-[linear-gradient(180deg,#F8F1E7_0%,#FFF8F1_100%)] text-[#2F241E]",
    eyebrow: "text-[#946C46]",
    heading: "text-[#2B1E18]",
    body: "text-[#624D3B]",
    tag: "border-[#B59068]/20 bg-white/72 text-[#5A4636]",
    panel: "border-[#B59068]/18 bg-white/82",
    item: "bg-[#FBF4EA] text-[#5E4735]",
    media:
      "border-white/72 bg-white/66 shadow-[0_30px_78px_-56px_rgba(70,42,25,0.18)]",
  },
  {
    section:
      "bg-[linear-gradient(135deg,#0C3536_0%,#153E3F_50%,#4B3A2F_100%)] text-white",
    eyebrow: "text-[#E2C18C]",
    heading: "text-white",
    body: "text-white/76",
    tag: "border-white/12 bg-white/[0.08] text-white/84",
    panel: "border-white/12 bg-white/[0.07]",
    item: "bg-white/[0.07] text-white/84",
    media:
      "border-white/10 bg-white/[0.06] shadow-[0_34px_84px_-56px_rgba(0,0,0,0.92)]",
  },
  {
    section:
      "bg-[linear-gradient(180deg,#EADDCB_0%,#F8F1E7_100%)] text-[#2F241E]",
    eyebrow: "text-[#8C6441]",
    heading: "text-[#2C211A]",
    body: "text-[#614C3B]",
    tag: "border-[#0C3A3A]/10 bg-white/78 text-[#34514E]",
    panel: "border-[#0C3A3A]/10 bg-[rgba(255,252,246,0.88)]",
    item: "bg-[rgba(255,248,239,0.92)] text-[#594739]",
    media:
      "border-white/70 bg-white/70 shadow-[0_30px_78px_-56px_rgba(12,58,58,0.16)]",
  },
] as const;

type CommercialRailItem = {
  id: string;
  src: string;
  alt: Bilingual;
  title: Bilingual;
  caption: Bilingual;
  groupId: string;
  groupLabel: Bilingual;
  objectFit: "cover" | "contain";
  objectPosition: string;
};

function toRailItem(
  item: CommercialRailItem,
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
  item: CommercialRailItem,
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

const batchCommercialGroup: Bilingual = {
  en: "Executed commercial project",
  ar: "مشروع تجاري منفذ",
};

const almasiaRestaurantViewCopy: Array<{ title: Bilingual; caption: Bilingual }> = [
  {
    title: { en: "Restaurant service counter detail", ar: "تفصيلة كاونتر خدمة في المطعم" },
    caption: { en: "A service-focused view showing the counter edge, finish, and daily-use position within the restaurant.", ar: "لقطة تركز على حافة الكاونتر وتشطيبه وموقعه المهيأ للاستخدام اليومي داخل المطعم." },
  },
  {
    title: { en: "Coordinated counter and display zone", ar: "منطقة كاونتر وعرض منسقة" },
    caption: { en: "Display and service elements arranged together to keep the restaurant experience clear and practical.", ar: "عناصر العرض والخدمة مرتبة معاً للحفاظ على وضوح التجربة وسهولة تشغيل المطعم." },
  },
  {
    title: { en: "Restaurant display and finish detail", ar: "تفصيلة عرض وتشطيب في المطعم" },
    caption: { en: "A closer view of the material finish and presentation details supporting the hospitality setting.", ar: "لقطة أقرب للخامات والتفاصيل التي تدعم حضور المكان وتجربة الضيافة." },
  },
  {
    title: { en: "Service point with organized storage", ar: "نقطة خدمة مع تخزين منظم" },
    caption: { en: "A practical service composition balancing access, storage, and a composed customer-facing edge.", ar: "تكوين خدمة عملي يوازن بين سهولة الوصول والتخزين والحضور الواضح أمام العميل." },
  },
  {
    title: { en: "Restaurant counter with clear circulation", ar: "كاونتر مطعم مع حركة واضحة" },
    caption: { en: "A view that shows how the counter position supports movement and day-to-day operation.", ar: "لقطة توضح كيف يدعم موقع الكاونتر الحركة والتشغيل اليومي داخل المطعم." },
  },
  {
    title: { en: "Hospitality finish and service detail", ar: "تفصيلة تشطيب وخدمة في مساحة ضيافة" },
    caption: { en: "A finished hospitality detail bringing service, material, and presentation into one composed view.", ar: "تفصيلة ضيافة مكتملة تجمع بين الخدمة والخامة والحضور البصري في مشهد متوازن." },
  },
];

const almasiaSharedCopy: Record<string, { title: Bilingual; caption: Bilingual }> = {
  "006": {
    title: { en: "Service detail with display shelving", ar: "تفصيلة خدمة مع رفوف عرض" },
    caption: { en: "A supporting service and display view grouped with the Almasia Restaurants project imagery.", ar: "لقطة مساندة للخدمة والعرض ضمن صور مشروع مطاعم الماسيه." },
  },
  "007": {
    title: { en: "Restaurant display rhythm", ar: "إيقاع العرض داخل المطعم" },
    caption: { en: "Display and service details arranged to support a clear hospitality experience.", ar: "تفاصيل عرض وخدمة مرتبة لدعم تجربة ضيافة واضحة." },
  },
  "008": {
    title: { en: "Counter and customer-facing detail", ar: "تفصيلة كاونتر أمام العميل" },
    caption: { en: "A project detail showing the relationship between service, finish, and customer interaction.", ar: "تفصيلة من المشروع توضح العلاقة بين الخدمة والتشطيب وتفاعل العميل." },
  },
  "009": {
    title: { en: "Hospitality service composition", ar: "تكوين خدمة في مساحة ضيافة" },
    caption: { en: "A composed view of the service and display language used across the restaurant project.", ar: "لقطة متوازنة من لغة الخدمة والعرض المستخدمة في مشروع المطعم." },
  },
};

function createBatchCommercialItem(
  id: string,
  src: string,
  title: Bilingual,
  caption: Bilingual,
): CommercialShopGalleryItem {
  return {
    id,
    src,
    alt: title,
    title,
    caption,
    groupId: "commercial-shops-previous-works",
    groupLabel: batchCommercialGroup,
    objectFit: "cover",
    objectPosition: "center",
  };
}

function dedupeCommercialItemsBySrc(
  items: CommercialShopGalleryItem[],
): CommercialShopGalleryItem[] {
  return Array.from(new Map(items.map((item) => [item.src, item])).values());
}

const almasiaRestaurantsItems = dedupeCommercialItemsBySrc(
  [
    ...Array.from({ length: 6 }, (_, index) => {
      const fileIndex = String(index + 1).padStart(3, "0");
      const copy = almasiaRestaurantViewCopy[index] ?? almasiaRestaurantViewCopy[0];

      return createBatchCommercialItem(
        `commercial-almasia-restaurants-${fileIndex}`,
        `/images/capital-oasis/website-photos/restaurants/restaurants-almasiah-${fileIndex}.jpeg`,
        copy.title,
        copy.caption,
      );
    }),
    createBatchCommercialItem(
      "commercial-almasia-restaurants-interior-002",
      "/images/capital-oasis/website-photos/restaurants/restaurants-interior-exterior-002.jpg",
      {
        en: "Almasia Restaurants interior with coordinated service flow",
        ar: "مشهد داخلي من مطاعم الماسيه بإيقاع خدمة منسق",
      },
      {
        en: "An interior view showing how reception, movement, and daily service are held together within the project.",
        ar: "مشهد داخلي يوضح تكامل الاستقبال والحركة والخدمة اليومية داخل المشروع.",
      },
    ),
    ...["006", "007", "008", "009"].map((fileIndex) => {
      const copy = almasiaSharedCopy[fileIndex];

      return createBatchCommercialItem(
        `commercial-almasia-restaurants-shared-${fileIndex}`,
        `/images/capital-oasis/website-photos/commercial-shops/commercial-jazira-super-${fileIndex}.jpeg`,
        copy.title,
        copy.caption,
      );
    }),
  ],
);

function CtaLink({
  children,
  href = company.whatsapp,
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "soft";
}) {
  const classes =
    variant === "primary"
      ? "bg-[#7A5B45] text-white shadow-[0_20px_42px_-24px_rgba(70,42,25,0.82)] hover:bg-[#4B3A2F]"
      : "border border-[#D3B07A]/32 bg-white/92 text-[#204443] shadow-[0_18px_40px_-30px_rgba(12,58,58,0.72)] hover:border-[#D3B07A]/54 hover:bg-[#FFF9F2]";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-[var(--radius-button)] px-5 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3B07A] focus-visible:ring-offset-2 ${classes}`}
    >
      {children}
    </a>
  );
}

function CommercialImageRail({
  items,
  groupLabel,
  tone = "default",
}: {
  items: CommercialRailItem[];
  groupLabel: string;
  tone?: "default" | "dark";
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
      variant="commercial"
      eyebrow={t({ ar: "تجهيز تجاري مصمم حول أداء المساحة", en: "Commercial fit-out shaped around how the space performs" })}
      title={t({
        ar: "مساحات تجارية بهوية أوضح\nورحلة عميل أكثر انسيابية",
        en: "Commercial spaces with a clearer identity and a more deliberate customer journey.",
      })}
      body={t({
        ar: "ننسق الواجهات ووحدات العرض والكاونترات وحركة المنتجات حول طبيعة النشاط ورحلة العميل ومتطلبات التشغيل اليومية.",
        en: "We coordinate storefronts, display units, counters, and product flow around the activity, customer journey, and everyday operation.",
      })}
      actions={
        <>
          <CtaLink>
            <MessageCircle size={18} aria-hidden="true" />
            {t(commercialShopsPageContent.hero.primaryCta)}
          </CtaLink>
          <CtaLink href="#commercial-display-shelving" variant="soft">
            {t(commercialShopsPageContent.hero.secondaryCta)}
            <Arrow size={18} aria-hidden="true" />
          </CtaLink>
        </>
      }
      points={commercialShopsPageContent.hero.chips}
      mediaItems={commercialShopsHeroMediaPool}
    />
  );
}

function EditorialSection({
  section,
  index,
}: {
  section: CommercialShopEditorialSection;
  index: number;
}) {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;
  const Icon = sectionIcons[index] ?? Store;
  const style = editorialStyles[index] ?? editorialStyles[0];

  return (
    <section id={section.id} className={`section-pad overflow-hidden ${style.section}`}>
      <SectionShell
        className={`route-shell split-row grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] ${
          index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal>
          <div className={`inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-extrabold ${style.tag}`}>
            <Icon size={17} aria-hidden="true" />
            <span>{t(section.eyebrow)}</span>
          </div>
          <h2 className={`mt-5 max-w-2xl text-[clamp(2.1rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal ${style.heading}`}>
            {t(section.title)}
          </h2>
          <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${style.body}`}>
            {t(section.text)}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {section.serviceTags.map((tag) => (
              <span
                key={tag.en}
                className={`rounded-full border px-3 py-2 text-xs font-extrabold ${style.tag}`}
              >
                {t(tag)}
              </span>
            ))}
          </div>

          <div className={`mt-7 rounded-[1.45rem] border p-5 shadow-[var(--shadow-card-soft)] ${style.panel}`}>
            <div className="grid gap-3 sm:grid-cols-2">
              {section.benefits.map((benefit) => (
                <div
                  key={benefit.en}
                  className={`flex gap-2 rounded-2xl p-3 text-sm font-bold leading-6 ${style.item}`}
                >
                  <Check
                    className="mt-1 size-4 shrink-0 text-[#D3B07A]"
                    aria-hidden="true"
                  />
                  <span>{t(benefit)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <CtaLink>
              {t(section.ctaLabel)}
              <Arrow size={18} aria-hidden="true" />
            </CtaLink>
          </div>
        </Reveal>

        <Reveal delay={110} className="min-w-0">
          <div className={`rounded-[1.85rem] border p-3 sm:p-4 ${style.media}`}>
            <CommercialImageRail
              items={section.items}
              groupLabel={t(section.title)}
              tone={index === 1 ? "dark" : "default"}
            />
          </div>
        </Reveal>
      </SectionShell>
    </section>
  );
}

function BatchProjectSection({
  title,
  eyebrow,
  text,
  items,
  sectionClassName = "bg-[linear-gradient(135deg,#0C3536_0%,#153E3F_54%,#4B3A2F_100%)] text-white",
  mediaClassName = "border-white/10 bg-white/[0.06] shadow-[0_34px_84px_-56px_rgba(0,0,0,0.92)]",
}: {
  title: Bilingual;
  eyebrow: Bilingual;
  text: Bilingual;
  items: CommercialRailItem[];
  sectionClassName?: string;
  mediaClassName?: string;
}) {
  const { t } = useLanguage();

  return (
    <section className={`section-pad ${sectionClassName}`}>
      <SectionShell className="route-shell split-row grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <p className="eyebrow text-[#E2C18C]">{t(eyebrow)}</p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2.1rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-white">
            {t(title)}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
            {t(text)}
          </p>
        </Reveal>

        <Reveal delay={110} className="min-w-0">
          <div className={`rounded-[1.9rem] border p-3 sm:p-4 ${mediaClassName}`}>
            <CommercialImageRail items={items} groupLabel={t(title)} tone="dark" />
          </div>
        </Reveal>
      </SectionShell>
    </section>
  );
}

const marahibCommercialSectionClassName =
  "bg-[linear-gradient(135deg,#0C3536_0%,#153E3F_54%,#4B3A2F_100%)] text-white";
const marahibCommercialMediaClassName =
  "border-white/10 bg-white/[0.06] shadow-[0_34px_84px_-56px_rgba(0,0,0,0.92)]";
const marahibCommercialGalleryCopy: readonly {
  title: Bilingual;
  caption: Bilingual;
}[] = [
  {
    title: { ar: "مدخل مطعم بإضاءة ليلية واضحة", en: "A restaurant entrance with clear night lighting" },
    caption: {
      ar: "مشهد من تنفيذ مراحب طويق يوضح العلاقة بين الواجهة والإضاءة وحضور العلامة.",
      en: "A Marahib Tuwaiq execution view showing the relationship between façade, lighting, and brand presence.",
    },
  },
  {
    title: { ar: "مسار دخول يوجّه تجربة العميل", en: "An entrance path shaping customer flow" },
    caption: {
      ar: "تفصيل من المساحة يربط الوصول بالحركة والقراءة البصرية للعميل.",
      en: "A spatial detail connecting arrival, movement, and the customer’s visual reading of the restaurant.",
    },
  },
  {
    title: { ar: "تفصيل إضاءة يثبت هوية المطعم", en: "A lighting detail reinforcing restaurant identity" },
    caption: {
      ar: "لقطة من التنفيذ تبرز كيف تخدم الإضاءة هوية مراحب طويق وأجواءه الليلية.",
      en: "An execution view showing how lighting supports Marahib Tuwaiq’s identity and evening atmosphere.",
    },
  },
  {
    title: { ar: "عنصر عرض يعزز الحضور البصري", en: "A display element strengthening visual presence" },
    caption: {
      ar: "عنصر عرض يكمّل الواجهة ويساعد على توجيه الانتباه داخل تجربة المطعم.",
      en: "A display element completing the frontage and guiding attention within the restaurant experience.",
    },
  },
  {
    title: { ar: "واجهة مطعم بتكوين متماسك", en: "A cohesive restaurant façade" },
    caption: {
      ar: "منظور يوضح تماسك الواجهة والإضاءة والتفاصيل التي نفذتها كابيتال واسي.",
      en: "A view of the cohesive façade, lighting, and detail language executed by Capital Oasis.",
    },
  },
];
const marahibCommercialProjectItems: CommercialRailItem[] = marahibTuwaiqProjectItems.map(
  (item, index) => {
    const copy = marahibCommercialGalleryCopy[index % marahibCommercialGalleryCopy.length];

    return {
      ...item,
      alt: copy.title,
      title: copy.title,
      caption: copy.caption,
      groupLabel: { ar: "مراحب طويق", en: "Marahib Tuwaiq" },
    };
  },
);

function MarahibTuwaiqCommercialProject({
  video,
}: {
  video: EventsRouteVideo | null;
}) {
  return (
    <>
      <BatchProjectSection
        eyebrow={{
          ar: "مشروع مطعم معروف | هوية وتجربة ضيافة",
          en: "Recognised restaurant project | Identity and hospitality experience",
        }}
        title={{ ar: "مراحب طويق", en: "Marahib Tuwaiq" }}
        text={{
          ar: "مشروع مطعم معروف صيغت هويته من لحظة الوصول؛ مدخل واضح يرحّب بالعميل، ومسارات حركة مدروسة تربط الواجهة بتجربة الدخول والإضاءة والعرض. ترجمت كابيتال واسي هذا الاتجاه إلى تنفيذ متماسك يوازن بين الحضور الليلي ووضوح العلامة وجودة التفاصيل داخل المساحة.",
          en: "A recognised restaurant project shaped from the first arrival: a clear entrance, considered customer flow, and a visual sequence linking the façade with lighting and display. Capital Oasis translated that direction into a cohesive execution that balances night-time presence, brand clarity, and detail quality across the space.",
        }}
        items={marahibCommercialProjectItems}
        sectionClassName={marahibCommercialSectionClassName}
        mediaClassName={marahibCommercialMediaClassName}
      />

      {video ? (
        <ReadyVideoSection
          eyebrow={{ ar: "مشروع مطعم", en: "Restaurant project" }}
          title={{ ar: "مراحب طويق", en: "Marahib Tuwaiq — Project" }}
          text={{
            ar: "لقطات من التنفيذ تُظهر الواجهة والإضاءة ومسارات الدخول وتفاصيل العرض التي تبني تجربة المطعم.",
            en: "A concise project showing the entrance, lighting, customer flow, and display details shaping the restaurant experience.",
          }}
          prompt={{ en: "Watch the project", ar: "شاهد المشروع" }}
          src={video.video}
          poster={video.poster}
        />
      ) : null}
    </>
  );
}

function FinalCtaSection() {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section className="section-pad bg-[#F8F1E7]">
      <SectionShell className="route-shell">
        <Reveal className="relative isolate overflow-hidden rounded-[2.35rem] bg-[linear-gradient(135deg,#0C3536_0%,#153E3F_52%,#7A5B45_100%)] p-7 text-white shadow-[0_34px_90px_-58px_rgba(0,0,0,0.62)] sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_86%_24%,rgba(211,176,122,0.3),transparent_34%)]"
          />
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="eyebrow text-[#E2C18C]">
                {t(commercialShopsPageContent.cta.eyebrow)}
              </p>
              <h2 className="mt-5 text-[clamp(2.1rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-white">
                {t(commercialShopsPageContent.cta.title)}
              </h2>
              <p className="mt-4 text-base font-medium leading-8 text-white/78 sm:text-lg">
                {t(commercialShopsPageContent.cta.text)}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <CtaLink>
                <MessageCircle size={18} aria-hidden="true" />
                {t(commercialShopsPageContent.cta.cta)}
              </CtaLink>
              <CtaLink href={company.phoneHref} variant="soft">
                <Phone size={18} aria-hidden="true" />
                {t(commercialShopsPageContent.cta.call)}
                <Arrow size={18} aria-hidden="true" />
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </section>
  );
}

function CommercialShopsRoutePageBody() {
  const marahibVideo = useMemo(
    () => eventsRouteVideos.find((video) => video.id === "event-marahib-tuwaiq") ?? null,
    [],
  );

  return (
    <div className="route-density min-h-screen bg-[#FFF8F1]">
      <Header />
      <main>
        <HeroSection />
        {commercialShopsEditorialSections.map((section, index) => (
          <EditorialSection
            key={section.id}
            section={section}
            index={index + 2}
          />
        ))}
        <ReadyVideoSection
          id="aljazira-super-video"
          eyebrow={{ ar: "فيديو مشروع منفذ", en: "Executed project" }}
          title={{ ar: "فيديو الجزيره سوبر ماركت", en: "Aljazira Super Video" }}
          text={{
            ar: "لقطات مختصرة من تنفيذ وتجهيز المشروع، توضح جودة التشطيب وتنظيم المساحة.",
            en: "Short project footage showing the quality of the fit-out and the organization of the commercial space.",
          }}
          prompt={{ en: "Watch the project", ar: "شاهد المشروع" }}
          src="/videos/capital-oasis/site-videos/commercial-shops/aljazira-super-site-ready.mp4"
          poster="/images/capital-oasis/website-photos/commercial-shops/aljazira-super/aljazira-super-image-001.jpg"
        />
        <BatchProjectSection
          eyebrow={{ en: "A gift-shop fit-out with a clear customer path", ar: "تجهيز متجر هدايا بمسار عميل واضح" }}
          title={{ en: "Botella Gift Shop", ar: "محل الهدايا بوتيلا" }}
          text={{
            en: "Selected views from the Botella fit-out, where display, shelving, counters, and circulation come together for a clear and welcoming retail experience.",
            ar: "لقطات مختارة من تجهيز بوتيلا، حيث تتكامل وحدات العرض والرفوف والكونترات والحركة لتقديم تجربة تجارية واضحة ومرحبة.",
          }}
          items={commercialBotellaGiftShopItems}
        />
        <ReadyVideoSection
          id="botella-gift-shop-video"
          title={{ en: "Botella Gift Shop — Project", ar: "مشروع محل الهدايا بوتيلا" }}
          eyebrow={{ ar: "المشروع", en: "Project" }}
          text={{
            en: "A concise look at the Botella fit-out, highlighting display, service, and finishing details across the store.",
            ar: "نظرة مختصرة على تجهيز بوتيلا، تبرز تفاصيل العرض والخدمة والتشطيب في أنحاء المتجر.",
          }}
          prompt={{ en: "Watch the project", ar: "شاهد المشروع" }}
          src="/videos/capital-oasis/site-videos/commercial-shops/botella-gift-shop-site-ready.mp4"
          poster="/images/capital-oasis/website-photos/commercial-shops/botella-gift-shop/botella-gift-shop-image-001.jpg"
        />
        <BatchProjectSection
          eyebrow={{ en: "A restaurant fit-out shaped around service flow", ar: "تجهيز مطعم مصمم حول إيقاع الخدمة" }}
          title={{ en: "Almasia Restaurants", ar: "مطاعم الماسيه" }}
          text={{
            en: "Views from the Almasia Restaurants fit-out, showing how counters, finishes, service units, and circulation support a composed hospitality setting.",
            ar: "لقطات من تجهيز مطاعم الماسيه توضح كيف تدعم الكاونترات والتشطيبات ووحدات الخدمة والحركة أجواء ضيافة متوازنة.",
          }}
          items={almasiaRestaurantsItems}
        />
        <ReadyVideoSection
          id="almasia-restaurants-video"
          title={{ en: "Almasia Restaurants — Project", ar: "مشروع مطاعم الماسيه" }}
          eyebrow={{ ar: "المشروع", en: "Project" }}
          text={{
            en: "A concise look at the Almasia Restaurants fit-out, focusing on service, finish, and spatial organization.",
            ar: "نظرة مختصرة على تجهيز مطاعم الماسيه، تركز على الخدمة والتشطيب وتنظيم المساحة.",
          }}
          prompt={{ en: "Watch the project", ar: "شاهد المشروع" }}
          src="/videos/capital-oasis/site-videos/commercial-shops/almasia-restaurants-site-ready.mp4"
          poster="/images/capital-oasis/website-photos/restaurants/restaurants-almasiah-001.jpeg"
        />
        <MarahibTuwaiqCommercialProject video={marahibVideo} />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />

    </div>
  );
}

export function CommercialShopsRoutePage() {
  return (
    <LanguageProvider>
      <CommercialShopsRoutePageBody />
    </LanguageProvider>
  );
}
