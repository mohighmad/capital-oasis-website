"use client";

import Image from "next/image";
import {
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  Lamp,
  MessageCircle,
  PanelsTopLeft,
  Phone,
  Ruler,
  Sparkles,
  SquareStack,
} from "lucide-react";
import { useMemo } from "react";
import { company, type Bilingual } from "@/data/content";
import {
  dressingRoomCopy,
  dressingRoomSelectionItems,
  dressingRoomSections,
  type DressingRoomGalleryItem,
  type DressingRoomSection,
} from "@/data/dressingRooms";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { LanguageProvider, useLanguage } from "../LanguageProvider";
import { ImageModal } from "../media/ImageModal";
import {
  PremiumImageRail,
  type PremiumImageRailItem,
} from "../media/PremiumImageRail";
import { useImageLightbox, type LightboxItem } from "../media/useImageLightbox";
import { Reveal } from "../Reveal";
import { ScrollToTop } from "../ScrollToTop";
import { WhatsAppButton } from "../WhatsAppButton";
import { SectionShell } from "./SectionShell";
import { UnifiedRouteHero } from "./UnifiedRouteHero";
import { dressingRoomsHeroMediaPool } from "./unifiedHeroMedia";

const selectorIcons = [PanelsTopLeft, Lamp, Sparkles, SquareStack];
const selectorCardStyles = [
  {
    card:
      "border-[#0C3A3A]/14 bg-[linear-gradient(145deg,#FFF9F0_0%,#F2E4D1_100%)] text-[#3E2B1D] shadow-[0_24px_54px_rgba(70,42,25,0.12)] hover:border-[#0C3A3A]/24",
    icon:
      "border border-[#D4A674]/28 bg-[#E6C692] text-[#4D3322] group-hover:bg-[#D4A674] group-hover:text-[#2D1E15]",
    title: "text-[#2D1E15]",
    text: "text-[#6A5140]",
    accent:
      "bg-[linear-gradient(90deg,rgba(12,58,58,0.7),rgba(212,166,116,0.28),transparent)]",
  },
  {
    card:
      "border-white/70 bg-[linear-gradient(145deg,rgba(255,252,246,0.96)_0%,rgba(232,221,205,0.88)_54%,rgba(221,235,231,0.68)_100%)] text-[#173E3B] shadow-[0_24px_54px_rgba(12,58,58,0.1)] hover:border-[#0C3A3A]/26",
    icon:
      "border border-[#D4A674]/30 bg-[rgba(12,58,58,0.11)] text-[#0C3A3A] group-hover:bg-[#0C3A3A] group-hover:text-[#F7F4EF]",
    title: "text-[#12302F]",
    text: "text-[#52645D]",
    accent:
      "bg-[linear-gradient(90deg,rgba(12,58,58,0.72),rgba(212,166,116,0.34),transparent)]",
  },
  {
    card:
      "border-[#D9C6AE]/34 bg-[linear-gradient(145deg,#6F4E37_0%,#8A6648_56%,#E8D9C5_100%)] text-[#FFF9F0] shadow-[0_24px_54px_rgba(70,42,25,0.18)] hover:border-[#D4A674]/48",
    icon:
      "border border-[#F1D49B]/38 bg-[#F1D49B] text-[#4A3020] group-hover:bg-white group-hover:text-[#6F4E37]",
    title: "text-[#FFF9F0]",
    text: "text-[#FFF4E4]/82",
    accent:
      "bg-[linear-gradient(90deg,rgba(241,212,155,0.86),rgba(255,249,240,0.16),transparent)]",
  },
  {
    card:
      "border-[#D4A674]/24 bg-[linear-gradient(145deg,#0C3A3A_0%,#173A34_52%,#5B4637_100%)] text-[#FFF9F0] shadow-[0_24px_54px_rgba(12,58,58,0.18)] hover:border-[#D4A674]/52",
    icon:
      "border border-[#D4A674]/36 bg-[#D4A674]/18 text-[#F1D49B] group-hover:bg-[#D4A674] group-hover:text-[#0C3A3A]",
    title: "text-[#FFF9F0]",
    text: "text-[#F7F4EF]/78",
    accent:
      "bg-[linear-gradient(90deg,rgba(212,166,116,0.9),rgba(255,249,240,0.12),transparent)]",
  },
] as const;

const dressingRoomPreviousWorksGroup: Bilingual = {
  ar: "سوابق أعمال الديكور الداخلي والغرف",
  en: "Interior Decor and Room Previous Works",
};

const dressingRoomOffersGroup: Bilingual = {
  ar: "عروض غرف الملابس",
  en: "Dressing Room Offers",
};

const dressingRoomOffersCopy = {
  eyebrow: {
    ar: "عروض وتجهيزات مختارة",
    en: "Offers and selected models",
  },
  title: dressingRoomOffersGroup,
  text: {
    ar: "نماذج عروض وتجهيزات مختارة لغرف الملابس، تساعد في مراجعة التشطيبات والتنظيم الداخلي والإضاءة وشكل الواجهات قبل اعتماد الاتجاه المناسب.",
    en: "Selected offer visuals and wardrobe models that help review finishes, internal organization, lighting, and front style before settling on the right direction.",
  },
};

function createDecorGalleryItem(
  id: string,
  src: string,
  title: Bilingual,
  caption: Bilingual,
  groupLabel: Bilingual,
  usageType: DressingRoomGalleryItem["usageType"],
): DressingRoomGalleryItem {
  return {
    id,
    src,
    alt: title,
    title,
    caption,
    groupId: "dressing-room-selection-models",
    groupLabel,
    usageType,
    processingNeeded: "css-frame-only",
    objectFit: "cover",
    objectPosition: "center 50%",
  };
}

function uniqueGalleryItemsBySrc(
  items: DressingRoomGalleryItem[],
): DressingRoomGalleryItem[] {
  const seen = new Set<string>();

  return items.filter((item) => {
    if (seen.has(item.src)) {
      return false;
    }

    seen.add(item.src);
    return true;
  });
}

const dressingRoomPreviousWorksItems: DressingRoomGalleryItem[] = Array.from(
  { length: 6 },
  (_, index) => {
    const fileIndex = String(index + 1).padStart(3, "0");
    const itemNumber = String(index + 1).padStart(2, "0");

    return createDecorGalleryItem(
      `dressing-room-previous-work-${itemNumber}`,
      `/images/capital-oasis/website-photos/decor/decor-bedroom-interior-${fileIndex}.jpeg`,
      {
        ar: "تكوين داخلي وتشطيب لغرفة منفذة",
        en: "Interior composition and finish",
      },
      {
        ar: "مشهد تنفيذ يساعد على قراءة التشطيب، والتخزين، وتكوين الغرفة بصورة أوضح.",
        en: "An executed interior view that helps compare finish tone, storage rhythm, and room composition.",
      },
      dressingRoomPreviousWorksGroup,
      "design",
    );
  },
);

const dressingRoomDecorOfferItems: DressingRoomGalleryItem[] = Array.from(
  { length: 9 },
  (_, index) => {
    const fileIndex = String(index + 1).padStart(3, "0");
    const itemNumber = String(index + 1).padStart(2, "0");

    return createDecorGalleryItem(
      `dressing-room-offer-${itemNumber}`,
      `/images/capital-oasis/website-photos/decor/decor-rooms-ads-${fileIndex}.jpg`,
      {
        ar: "تكوين غرفة ملابس وتشطيب مختار",
        en: "Selected dressing-room composition",
      },
      {
        ar: "نموذج عرض يساعد على مراجعة ترتيب التخزين، وشكل الواجهات، واتجاه التشطيب.",
        en: "An offer-oriented visual that helps compare storage arrangement, front style, and finish direction.",
      },
      dressingRoomOffersGroup,
      "offer-reference",
    );
  },
);

function toRailItem(
  item: DressingRoomGalleryItem,
  t: ReturnType<typeof useLanguage>["t"],
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
  item: DressingRoomGalleryItem,
  t: ReturnType<typeof useLanguage>["t"],
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
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "soft";
}) {
  const classes =
    variant === "primary"
      ? "bg-[#6F4E37] text-white shadow-[0_20px_42px_-24px_rgba(70,42,25,0.9)] hover:bg-[#563824]"
      : "border border-[#A77C4E]/34 bg-white px-5 text-[#4D3322] shadow-[0_18px_40px_-30px_rgba(70,42,25,0.85)] hover:border-[#A77C4E]/58 hover:bg-[#FFF9F0]";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-[var(--radius-button)] px-5 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8915C] focus-visible:ring-offset-2 ${classes}`}
    >
      {children}
    </a>
  );
}

function DressingImageRail({
  items,
  groupLabel,
  tone = "default",
}: {
  items: DressingRoomGalleryItem[];
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
      id="dressing-rooms-hero"
      variant="dressing"
      eyebrow={t({ ar: "أنظمة خزائن تمنح الغرفة وضوحاً وهدوءاً", en: "Wardrobe systems for calmer, clearer rooms" })}
      title={t({
        ar: "غرف ملابس\nبتنظيم راقٍ وراحة يومية",
        en: "Dressing rooms with refined order and everyday ease.",
      })}
      body={t({
        ar: "ننسق التوزيع والواجهات والإضاءة والتشطيبات حول المساحة واحتياج التخزين اليومي.",
        en: "We shape the layout, fronts, lighting, and finishes around the room and its everyday storage routine.",
      })}
      actions={
        <>
          <CtaLink>
            <MessageCircle size={18} aria-hidden="true" />
            {t(dressingRoomCopy.hero.primaryCta)}
          </CtaLink>
          <CtaLink href="#dressing-room-styles" variant="soft">
            {t(dressingRoomCopy.hero.secondaryCta)}
            <Arrow size={18} aria-hidden="true" />
          </CtaLink>
        </>
      }
      points={dressingRoomCopy.hero.chips}
      mediaItems={dressingRoomsHeroMediaPool}
    />
  );
}

function StyleSelector() {
  const { t } = useLanguage();

  return (
    <section id="dressing-room-styles" className="section-pad bg-[#FFF9F0]">
      <SectionShell className="route-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center text-[#9A7044]">
            {t(dressingRoomCopy.intro.eyebrow)}
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl leading-tight font-semibold tracking-normal text-[#2D1E15] sm:text-4xl">
            {t(dressingRoomCopy.intro.title)}
          </h2>
          <p className="mt-4 text-base font-medium leading-8 text-[#67503C]">
            {t(dressingRoomCopy.intro.text)}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dressingRoomSections.map((section, index) => {
            const Icon = selectorIcons[index] ?? Sparkles;
            const style = selectorCardStyles[index] ?? selectorCardStyles[0];
            return (
              <Reveal
                key={section.id}
                delay={index * 70}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${style.card}`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-5 top-0 h-px ${style.accent}`}
                />
                <a
                  href={`#${section.id}`}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8915C]"
                >
                  <span className={`grid size-11 place-items-center rounded-2xl transition ${style.icon}`}>
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <h3 className={`mt-5 text-2xl font-semibold tracking-normal ${style.title}`}>
                    {t(section.title)}
                  </h3>
                  <p className={`mt-3 text-sm font-medium leading-7 ${style.text}`}>
                    {t(section.text)}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </SectionShell>
    </section>
  );
}

function MaterialStyleSection({
  section,
  index,
}: {
  section: DressingRoomSection;
  index: number;
}) {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;
  const isDark = index % 2 === 1;
  // Desktop-only override for two specific sections: media block on the
  // right, text/content block on the left (this site is RTL by default, so
  // without this override the text column is on the right and the media
  // column is on the left — this flips just these two). Matched by stable
  // section id, independent of the index-based dark/light or first-child
  // alternation below, so no other section is affected.
  const isMediaRightOverride =
    section.id === "walk-in-dressing-rooms" ||
    section.id === "mirrored-sliding-wardrobes";

  return (
    <section
      id={section.id}
      className={`section-pad overflow-hidden ${
        isDark ? "bg-[#1D1510] text-white" : "bg-[#F7EFE4] text-[#342318]"
      }`}
    >
      <SectionShell
        className={`route-shell split-row grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] ${
          index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal className={isMediaRightOverride ? "lg:order-2" : undefined}>
          <p className={`eyebrow ${isDark ? "text-[#D6B37A]" : "text-[#92663D]"}`}>
            {t(section.eyebrow)}
          </p>
          <h2
            className={`mt-5 max-w-2xl text-[clamp(2.1rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal ${
              isDark ? "text-[#FFF4E4]" : "text-[#2D1E15]"
            }`}
          >
            {t(section.title)}
          </h2>
          <p
            className={`mt-6 max-w-2xl text-lg leading-9 font-semibold ${
              isDark ? "text-white/76" : "text-[#604531]"
            }`}
          >
            {t(section.text)}
          </p>

          <div
            className={`mt-7 rounded-[1.45rem] border p-5 shadow-[var(--shadow-card-soft)] ${
              isDark ? "border-white/12 bg-white/[0.055]" : "border-[#A77C4E]/18 bg-white/82"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`grid size-11 place-items-center rounded-2xl ${
                  isDark ? "bg-[#D6B37A]/14 text-[#E3C58F]" : "bg-[#F1E1CE] text-[#6F4E37]"
                }`}
              >
                <Ruler size={19} aria-hidden="true" />
              </span>
              <h3 className={`text-lg font-black ${isDark ? "text-white" : "text-[#2D1E15]"}`}>
                {t({ en: "What this choice helps with", ar: "ماذا يضيف هذا الاختيار؟" })}
              </h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {section.benefits.map((benefit) => (
                <div
                  key={benefit.en}
                  className={`flex gap-2 rounded-2xl p-3 text-sm font-bold leading-6 ${
                    isDark ? "bg-white/[0.055] text-white/82" : "bg-[#FBF4EA] text-[#5E4432]"
                  }`}
                >
                  <Check
                    className={`mt-1 size-4 shrink-0 ${
                      isDark ? "text-[#D6B37A]" : "text-[#8A623B]"
                    }`}
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

        <Reveal
          delay={110}
          className={`min-w-0 ${isMediaRightOverride ? "lg:order-1" : "lg:order-2"}`}
        >
          <div
            className={`rounded-[1.85rem] border p-3 sm:p-4 ${
              isDark
                ? "border-white/10 bg-white/[0.055] shadow-[0_34px_84px_-56px_rgba(0,0,0,0.95)]"
                : "border-white/68 bg-white/62 shadow-[0_30px_78px_-58px_rgba(70,42,25,0.78)]"
            }`}
          >
            <DressingImageRail
              items={section.items}
              groupLabel={t(section.title)}
              tone={isDark ? "dark" : "default"}
            />
          </div>
        </Reveal>
      </SectionShell>
    </section>
  );
}

function PreviousWorksSection() {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section className="section-pad bg-[linear-gradient(180deg,#F6EFE5_0%,#EBDDCC_100%)]">
      <SectionShell className="route-shell split-row grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <Reveal delay={110} className="min-w-0">
          <div className="rounded-[1.9rem] border border-white/72 bg-white/78 p-3 shadow-[0_30px_78px_-56px_rgba(70,42,25,0.18)] sm:p-4">
            <DressingImageRail
              items={dressingRoomPreviousWorksItems}
              groupLabel={t(dressingRoomPreviousWorksGroup)}
            />
          </div>
        </Reveal>

        <Reveal className="lg:order-1">
          <p className="eyebrow text-[#976B44]">
            {t({ ar: "سوابق أعمال", en: "Previous Works" })}
          </p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2.05rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2D1E15]">
            {t(dressingRoomPreviousWorksGroup)}
          </h2>
          <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-[#624C3A] sm:text-lg">
            {t({
              ar: "نماذج من تفاصيل الديكور الداخلي والغرف، تشمل الخامات، حلول التخزين، والتشطيبات التي تساعد على قراءة المساحة بصورة عملية قبل اعتماد التكوين المناسب.",
              en: "Examples of interior decor and room detailing, including materials, storage solutions, and finishes that help read the space more practically before settling on the right composition.",
            })}
          </p>

          <div className="mt-7 rounded-[1.5rem] border border-[#B69063]/18 bg-white/76 p-5 shadow-[var(--shadow-card-soft)]">
            <div className="grid gap-3">
              {[
                {
                  ar: "تفاصيل خامة وتشطيب تساعد على مقارنة الدرجة والملمس داخل الغرفة",
                  en: "Finish and material details that make tone and texture easier to compare inside the room",
                },
                {
                  ar: "حلول تخزين توضح علاقة الرفوف والأدراج بخط الاستخدام اليومي",
                  en: "Storage examples that clarify how shelving and drawers support daily use",
                },
                {
                  ar: "نماذج تنفيذ تمنح تصوراً أوضح قبل اعتماد توزيع غرفة الملابس",
                  en: "Executed examples that give a clearer picture before finalizing the dressing-room layout",
                },
              ].map((point) => (
                <div
                  key={point.en}
                  className="flex gap-2 rounded-2xl bg-[#FBF5EC] p-3 text-sm font-bold leading-6 text-[#5E4735]"
                >
                  <Check className="mt-1 size-4 shrink-0 text-[#9A7044]" aria-hidden="true" />
                  <span>{t(point)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <CtaLink>
              <MessageCircle size={18} aria-hidden="true" />
              {t({ ar: "ناقش معنا غرفة الملابس", en: "Discuss Your Dressing Room" })}
              <Arrow size={18} aria-hidden="true" />
            </CtaLink>
          </div>
        </Reveal>
      </SectionShell>
    </section>
  );
}

function SelectionSection() {
  const { t } = useLanguage();
  const offerItems = useMemo(
    () =>
      uniqueGalleryItemsBySrc([
        ...dressingRoomSelectionItems,
        ...dressingRoomDecorOfferItems,
      ]),
    [],
  );

  return (
    <section className="section-pad bg-[#FFF9F0]">
      <SectionShell className="route-shell split-row grid items-center gap-10 lg:grid-cols-[0.84fr_1.16fr]">
        <Reveal>
          <p className="eyebrow text-[#9A7044]">
            {t(dressingRoomOffersCopy.eyebrow)}
          </p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2.1rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2D1E15]">
            {t(dressingRoomOffersCopy.title)}
          </h2>
          <p className="mt-5 max-w-xl text-base font-medium leading-8 text-[#604531] sm:text-lg">
            {t(dressingRoomOffersCopy.text)}
          </p>
          <div className="mt-7 rounded-[1.5rem] border border-[#A77C4E]/16 bg-[#F4E4D1] p-5 text-sm font-bold leading-7 text-[#5E4432]">
            {t({
              en: "Tip: save two or three images you like, then send them with the room dimensions so the right system can be narrowed quickly.",
              ar: "نصيحة: اختر صورتين أو ثلاثا تناسب ذوقك، ثم أرسلها مع مقاسات الغرفة لتسهيل تحديد النظام المناسب بسرعة.",
            })}
          </div>
        </Reveal>

        <Reveal delay={110} className="min-w-0">
          <DressingImageRail
            items={offerItems}
            groupLabel={t(dressingRoomOffersCopy.title)}
          />
        </Reveal>
      </SectionShell>
    </section>
  );
}

function ConfidenceSection() {
  const { t } = useLanguage();

  return (
    <section className="section-pad bg-[#2A1D14] text-white">
      <SectionShell className="route-shell">
        <Reveal className="grid gap-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(214,179,122,0.09))] p-6 shadow-[0_34px_90px_-66px_rgba(0,0,0,0.95)] sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <p className="eyebrow text-[#D6B37A]">
              {t(dressingRoomCopy.confidence.eyebrow)}
            </p>
            <h2 className="mt-5 text-[clamp(2.1rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#FFF4E4]">
              {t(dressingRoomCopy.confidence.title)}
            </h2>
            <p className="mt-5 text-base font-medium leading-8 text-white/74">
              {t(dressingRoomCopy.confidence.text)}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {dressingRoomCopy.confidence.points.map((point, index) => (
              <div
                key={point.en}
                className="flex gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.055] p-4"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#D6B37A]/16 text-[#E7C98C]">
                  {index + 1}
                </span>
                <p className="text-sm font-bold leading-7 text-white/82">
                  {t(point)}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </SectionShell>
    </section>
  );
}

function FinalCtaSection() {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section className="section-pad bg-[#F7EFE4]">
      <SectionShell className="route-shell">
        <Reveal className="relative isolate overflow-hidden rounded-[2.3rem] bg-[#6F4E37] p-7 text-white shadow-[0_34px_90px_-58px_rgba(70,42,25,0.9)] sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.2),transparent_30%),radial-gradient(circle_at_88%_26%,rgba(214,179,122,0.38),transparent_34%)]"
          />
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="eyebrow text-[#F1D49B]">
                {t(dressingRoomCopy.finalCta.eyebrow)}
              </p>
              <h2 className="mt-5 text-[clamp(2.1rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-white">
                {t(dressingRoomCopy.finalCta.title)}
              </h2>
              <p className="mt-4 text-base font-medium leading-8 text-white/78 sm:text-lg">
                {t(dressingRoomCopy.finalCta.text)}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <CtaLink>
                <MessageCircle size={18} aria-hidden="true" />
                {t(dressingRoomCopy.finalCta.cta)}
              </CtaLink>
              <CtaLink href={company.phoneHref} variant="soft">
                <Phone size={18} aria-hidden="true" />
                {t(dressingRoomCopy.finalCta.call)}
                <Arrow size={18} aria-hidden="true" />
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </section>
  );
}

function DressingRoomsPageContent() {
  return (
    <div className="route-density min-h-screen bg-[#FFF9F0]">
      <Header />
      <main>
        <HeroSection />
        <StyleSelector />
        {dressingRoomSections.map((section, index) => (
          <MaterialStyleSection key={section.id} section={section} index={index} />
        ))}
        <PreviousWorksSection />
        <SelectionSection />
        <ConfidenceSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

export function DressingRoomsRoutePage() {
  return (
    <LanguageProvider>
      <DressingRoomsPageContent />
    </LanguageProvider>
  );
}
