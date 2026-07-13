"use client";

import Image from "next/image";
import {
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  MessageCircle,
  PanelsTopLeft,
  Phone,
  SquareStack,
  SwatchBook,
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
  kitchenEditorialSections,
  kitchensPageContent,
  kitchenShowcaseItems,
  type KitchenEditorialSection,
  type KitchenGalleryItem,
} from "@/data/kitchens";
import { SectionShell } from "./SectionShell";
import { UnifiedRouteHero } from "./UnifiedRouteHero";
import { kitchensHeroMediaPool } from "./unifiedHeroMedia";

const sectionIcons = [PanelsTopLeft, SwatchBook, SquareStack] as const;
const editorialStyles = [
  {
    section: "bg-[linear-gradient(180deg,#F7F1E8_0%,#FFF9F0_100%)] text-[#352419]",
    eyebrow: "text-[#9A6E42]",
    heading: "text-[#2F2016]",
    body: "text-[#65503D]",
    panel: "border-[#B69063]/18 bg-white/82",
    item: "bg-[#FBF5EC] text-[#5E4735]",
    media: "border-white/72 bg-white/66 shadow-[0_30px_78px_-56px_rgba(70,42,25,0.18)]",
    badge: "bg-[#F2E4D1] text-[#6A4A31]",
  },
  {
    section:
      "bg-[linear-gradient(180deg,#FFF8EE_0%,#F0E1CF_100%)] text-[#352419]",
    eyebrow: "text-[#8F6540]",
    heading: "text-[#302117]",
    body: "text-[#674E3D]",
    panel: "border-[#0C3A3A]/10 bg-[rgba(255,252,246,0.86)]",
    item: "bg-[rgba(255,248,238,0.92)] text-[#5A463A]",
    media: "border-white/72 bg-[rgba(255,255,255,0.74)] shadow-[0_30px_78px_-56px_rgba(12,58,58,0.14)]",
    badge: "bg-[rgba(12,58,58,0.08)] text-[#0C3A3A]",
  },
  {
    section:
      "bg-[linear-gradient(180deg,#F4E9DB_0%,#EAD8C0_100%)] text-[#352419]",
    eyebrow: "text-[#8B623E]",
    heading: "text-[#2F2016]",
    body: "text-[#634C3A]",
    panel: "border-[#A77C4E]/16 bg-[rgba(255,249,240,0.82)]",
    item: "bg-[rgba(255,245,234,0.92)] text-[#5E4735]",
    media: "border-white/70 bg-[rgba(111,78,55,0.08)] shadow-[0_30px_78px_-56px_rgba(76,52,33,0.18)]",
    badge: "bg-[#EAD8C0] text-[#6A4A31]",
  },
] as const;

const kitchenPreviousWorksGroup: Bilingual = {
  ar: "سوابق أعمال المطابخ",
  en: "Kitchen Previous Works",
};

const kitchenPreviousWorksCaptions: Bilingual[] = [
  {
    ar: "نموذج يوضح توزيع الخزائن والأسطح بطريقة تخدم الاستخدام اليومي داخل المطبخ.",
    en: "A kitchen example that shows how cabinets and worktops can support everyday use.",
  },
  {
    ar: "تفاصيل تشطيب تساعد على قراءة الخامة والتخزين وحركة الاستخدام داخل المساحة.",
    en: "Finish details that help compare material tone, storage flow, and day-to-day movement.",
  },
  {
    ar: "مشهد إضافي يوضح علاقة التخزين والتشطيب بخط العمل داخل المطبخ.",
    en: "An additional view that clarifies how storage and finish relate to the working line of the kitchen.",
  },
] as const;

const kitchenPreviousWorksItems: KitchenGalleryItem[] = Array.from(
  { length: 3 },
  (_, index) => {
    const fileIndex = String(index + 1).padStart(3, "0");
    const itemNumber = String(index + 1).padStart(2, "0");

    return {
      id: `kitchen-previous-work-${itemNumber}`,
      src: `/images/capital-oasis/website-photos/kitchens/kitchens-works-a-${fileIndex}.jpg`,
      alt: {
        ar: "تكوين خزائن وأسطح في مطبخ منفذ",
        en: "Cabinetry and worktop composition in an executed kitchen",
      },
      title: {
        ar: "تكوين خزائن وأسطح في مطبخ منفذ",
        en: "Cabinetry and worktop composition",
      },
      caption: kitchenPreviousWorksCaptions[index] ?? kitchenPreviousWorksCaptions[0],
      groupId: "kitchen-options-showcase",
      groupLabel: kitchenPreviousWorksGroup,
      objectFit: "cover",
      objectPosition: "center 50%",
    };
  },
);

function toRailItem(
  item: KitchenGalleryItem,
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
  item: KitchenGalleryItem,
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
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "soft";
}) {
  const classes =
    variant === "primary"
      ? "bg-[#6F4E37] text-white shadow-[0_20px_42px_-24px_rgba(70,42,25,0.85)] hover:bg-[#563824]"
      : "border border-[#B69063]/30 bg-white/90 text-[#4D3424] shadow-[0_18px_40px_-30px_rgba(70,42,25,0.72)] hover:border-[#B69063]/56 hover:bg-[#FFF9F0]";

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

function HeroSection() {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <UnifiedRouteHero
      variant="kitchens"
      eyebrow={t({ ar: "مطابخ مصممة لإيقاع الحياة اليومية", en: "Kitchen systems made for daily rhythm" })}
      title={t({
        ar: "مطابخ تجعل\nكل استخدام أكثر سلاسة",
        en: "Kitchens that make every daily movement feel more considered.",
      })}
      body={t({
        ar: "ننسق الخامة والتخزين والحركة حول المساحة وطريقة استخدامها الفعلية كل يوم.",
        en: "We shape materials, storage, and movement around how the space actually works each day.",
      })}
      actions={
        <>
          <CtaLink>
            <MessageCircle size={18} aria-hidden="true" />
            {t(kitchensPageContent.hero.primaryCta)}
          </CtaLink>
          <CtaLink href="#kitchen-options-showcase" variant="soft">
            {t(kitchensPageContent.hero.secondaryCta)}
            <Arrow size={18} aria-hidden="true" />
          </CtaLink>
        </>
      }
      points={kitchensPageContent.hero.chips}
      mediaItems={kitchensHeroMediaPool}
    />
  );
}

function KitchenImageRail({
  items,
  groupLabel,
  tone = "default",
}: {
  items: KitchenGalleryItem[];
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

function EditorialSection({
  section,
  index,
}: {
  section: KitchenEditorialSection;
  index: number;
}) {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;
  const Icon = sectionIcons[index] ?? PanelsTopLeft;
  const style = editorialStyles[index] ?? editorialStyles[0];
  const shouldSwapSidesForDesktop =
    section.id === "kitchen-materials-finishes";
  const textOrderClass = shouldSwapSidesForDesktop
    ? "lg:order-1"
    : "lg:order-2";
  const mediaOrderClass = shouldSwapSidesForDesktop
    ? "lg:order-2"
    : "lg:order-1";

  return (
    <section id={section.id} className={`section-pad overflow-hidden ${style.section}`}>
      <SectionShell
        className={`route-shell split-row grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] ${
          index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal className={textOrderClass}>
          <div className={`inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-extrabold ${style.badge}`}>
            <Icon size={17} aria-hidden="true" />
            <span>{t(section.eyebrow)}</span>
          </div>
          <h2 className={`mt-5 max-w-2xl text-[clamp(2.1rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal ${style.heading}`}>
            {t(section.title)}
          </h2>
          <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${style.body}`}>
            {t(section.text)}
          </p>

          <div className={`mt-7 rounded-[1.45rem] border p-5 shadow-[var(--shadow-card-soft)] ${style.panel}`}>
            <div className="grid gap-3 sm:grid-cols-2">
              {section.benefits.map((benefit) => (
                <div
                  key={benefit.en}
                  className={`flex gap-2 rounded-2xl p-3 text-sm font-bold leading-6 ${style.item}`}
                >
                  <Check className="mt-1 size-4 shrink-0 text-[#9A7044]" aria-hidden="true" />
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

        <Reveal delay={110} className={`min-w-0 ${mediaOrderClass}`}>
          <div className={`rounded-[1.85rem] border p-3 sm:p-4 ${style.media}`}>
            <KitchenImageRail
              items={section.items}
              groupLabel={t(section.title)}
              tone="default"
            />
          </div>
        </Reveal>
      </SectionShell>
    </section>
  );
}

function ShowcaseSection() {
  const { t } = useLanguage();
  const railItems = useMemo(
    () => kitchenShowcaseItems.map((item) => toRailItem(item, t)),
    [t],
  );
  const modalItems = useMemo(
    () => kitchenShowcaseItems.map((item) => toLightboxItem(item, t)),
    [t],
  );
  const lightbox = useImageLightbox(modalItems);

  return (
    <section
      id="kitchen-options-showcase"
      className="section-pad bg-[linear-gradient(180deg,#FBF6EF_0%,#EFE1D0_100%)]"
    >
      <SectionShell className="route-shell split-row grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <p className="eyebrow text-[#9A7044]">
            {t(kitchensPageContent.showcase.eyebrow)}
          </p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2.1rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2F2016]">
            {t(kitchensPageContent.showcase.title)}
          </h2>
          <p className="mt-5 max-w-xl text-base font-medium leading-8 text-[#614B39] sm:text-lg">
            {t(kitchensPageContent.showcase.text)}
          </p>

          <div className="mt-7 rounded-[1.5rem] border border-[#B69063]/16 bg-white/72 p-5 shadow-[var(--shadow-card-soft)]">
            <div className="grid gap-3">
              {kitchensPageContent.showcase.checklist.map((point) => (
                <div
                  key={point.en}
                  className="flex gap-2 rounded-2xl bg-[#FBF5EC] p-3 text-sm font-bold leading-6 text-[#5E4735]"
                >
                  <Check className="mt-1 size-4 shrink-0 text-[#9A7044]" aria-hidden="true" />
                  <span>{t(point)}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-[1.15rem] bg-[#F2E4D1] px-4 py-3 text-sm font-bold leading-7 text-[#5A4636]">
              {t(kitchensPageContent.showcase.tip)}
            </p>
          </div>

          <div className="mt-7">
            <CtaLink>
              <MessageCircle size={18} aria-hidden="true" />
              {t(kitchensPageContent.showcase.ctaLabel)}
            </CtaLink>
          </div>
        </Reveal>

        <Reveal delay={110} className="min-w-0">
          <div className="rounded-[1.85rem] border border-white/72 bg-white/68 p-3 shadow-[0_30px_78px_-56px_rgba(70,42,25,0.18)] sm:p-4">
            <PremiumImageRail
              items={railItems}
              groupLabel={t(kitchensPageContent.showcase.title)}
              showLabel={false}
              onOpen={(itemId, trigger) => {
                const index = modalItems.findIndex((item) => item.id === itemId);
                lightbox.openAtIndex(index, trigger);
              }}
            />
          </div>
        </Reveal>
      </SectionShell>

      <ImageModal
        activeIndex={lightbox.activeIndex}
        canGoNext={lightbox.canGoNext}
        canGoPrevious={lightbox.canGoPrevious}
        items={modalItems}
        onClose={lightbox.close}
        onNext={lightbox.goToNext}
        onPrevious={lightbox.goToPrevious}
      />
    </section>
  );
}

function KitchenPreviousWorksSection() {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section
      id="kitchen-previous-works"
      className="section-pad bg-[linear-gradient(180deg,#F4E7D7_0%,#FBF5EC_100%)]"
    >
      <SectionShell className="route-shell split-row grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal className="lg:order-2">
          <p className="eyebrow text-[#976B44]">
            {t({ ar: "سوابق أعمال", en: "Previous Works" })}
          </p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2.05rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2F2016]">
            {t(kitchenPreviousWorksGroup)}
          </h2>
          <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-[#624C3A] sm:text-lg">
            {t({
              ar: "نماذج إضافية من تشطيبات وتفاصيل المطابخ تساعدك على رؤية الخامات، توزيع التخزين، وطريقة توظيف المساحة في الاستخدام اليومي.",
              en: "Additional kitchen work examples that help compare materials, storage distribution, and how the space can support daily use.",
            })}
          </p>

          <div className="mt-7 rounded-[1.5rem] border border-[#B69063]/18 bg-white/76 p-5 shadow-[var(--shadow-card-soft)]">
            <div className="grid gap-3">
              {[
                {
                  ar: "تفاصيل تشطيبات تساعد على قراءة الخامة واللون داخل المساحة",
                  en: "Finish details that make material tone easier to compare inside the space",
                },
                {
                  ar: "حلول تخزين توضح علاقة الأدراج والخزائن بالاستخدام اليومي",
                  en: "Storage examples that clarify how drawers and cabinets support daily use",
                },
                {
                  ar: "نماذج تنفيذ تضيف رؤية عملية قبل اعتماد التوزيع المناسب",
                  en: "Executed examples that give a more practical reading before choosing the layout",
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
              {t({ ar: "ناقش معنا مطبخك", en: "Discuss Your Kitchen" })}
              <Arrow size={18} aria-hidden="true" />
            </CtaLink>
          </div>
        </Reveal>

        <Reveal delay={110} className="min-w-0 lg:order-1">
          <div className="rounded-[1.85rem] border border-white/72 bg-white/72 p-3 shadow-[0_30px_78px_-56px_rgba(70,42,25,0.18)] sm:p-4">
            <KitchenImageRail
              items={kitchenPreviousWorksItems}
              groupLabel={t(kitchenPreviousWorksGroup)}
              tone="default"
            />
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
        <Reveal className="relative isolate overflow-hidden rounded-[2.3rem] bg-[linear-gradient(135deg,#6F4E37_0%,#8A6648_52%,#2A4B46_100%)] p-7 text-white shadow-[0_34px_90px_-58px_rgba(70,42,25,0.82)] sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_86%_24%,rgba(214,179,122,0.34),transparent_34%)]"
          />
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="eyebrow text-[#F1D49B]">
                {t(kitchensPageContent.finalCta.eyebrow)}
              </p>
              <h2 className="mt-5 text-[clamp(2.1rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-white">
                {t(kitchensPageContent.finalCta.title)}
              </h2>
              <p className="mt-4 text-base font-medium leading-8 text-white/78 sm:text-lg">
                {t(kitchensPageContent.finalCta.text)}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <CtaLink>
                <MessageCircle size={18} aria-hidden="true" />
                {t(kitchensPageContent.finalCta.cta)}
              </CtaLink>
              <CtaLink href={company.phoneHref} variant="soft">
                <Phone size={18} aria-hidden="true" />
                {t(kitchensPageContent.finalCta.call)}
                <Arrow size={18} aria-hidden="true" />
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </section>
  );
}

function KitchensRoutePageBody() {
  return (
    <div className="route-density min-h-screen bg-[#FFF9F0]">
      <Header />
      <main>
        <HeroSection />
        {kitchenEditorialSections.map((section, index) => (
          <EditorialSection key={section.id} section={section} index={index} />
        ))}
        <ShowcaseSection />
        <KitchenPreviousWorksSection />
        <ReadyVideoSection
          id="kitchen-previous-works-video"
          eyebrow={{ ar: "فيلم من أعمال المطابخ", en: "Kitchen work film" }}
          title={{
            ar: "مشاهد من تنفيذ المطابخ",
            en: "Kitchen execution in motion",
          }}
          text={{
            ar: "لمحة مركزة على تشطيبات المطابخ وتفاصيل التنفيذ داخل المساحة.",
            en: "A focused look at kitchen finishes and execution details inside the space.",
          }}
          src="/videos/capital-oasis/site-videos/kitchens/kitchen-previous-works-site-ready.mp4"
          poster="/images/capital-oasis/website-photos/kitchens/kitchen-previous-works/kitchen-previous-works-image-001.jpg"
        />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

export function KitchensRoutePage() {
  return (
    <LanguageProvider>
      <KitchensRoutePageBody />
    </LanguageProvider>
  );
}
