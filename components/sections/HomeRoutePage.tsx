"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowUpLeft,
  ArrowUpRight,
  BadgeCheck,
  Check,
  Hammer,
  Lamp,
  Layers3,
  MessageCircle,
  PanelsTopLeft,
  Phone,
  Play,
  Ruler,
  Sparkles,
  SquareStack,
  Store,
  Trees,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { ImageModal } from "@/components/media/ImageModal";
import { VideoModal } from "@/components/VideoModal";
import { RotatingHeroMediaImage } from "@/components/media/RotatingHeroMediaImage";
import { useRotatingHeroMedia } from "@/components/media/useRotatingHeroMedia";
import { useImageLightbox, type LightboxItem } from "@/components/media/useImageLightbox";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  homepageHeroMediaPool,
  otherServicesHeroMediaPool,
} from "@/components/sections/unifiedHeroMedia";
import { company, doorOffer, type Bilingual } from "@/data/content";
import { commercialShopsHeroItems } from "@/data/commercialShops";
import {
  heroDoorDesignItems,
  pvcOfferGallery,
} from "@/data/doors";
import {
  dressingRoomHeroItems,
  dressingRoomSelectionItems,
} from "@/data/dressingRooms";
import { eventsHeroItems } from "@/data/events";
import { kitchenHeroItems } from "@/data/kitchens";
import { SectionShell } from "./SectionShell";
import { UnifiedRouteHero } from "./UnifiedRouteHero";

type VisualItem = {
  src: string;
  alt: Bilingual;
  title: Bilingual;
  caption: Bilingual;
  objectPosition: string;
};

type GalleryVisualItem = {
  src: string;
  alt: Bilingual | string;
  title: Bilingual | string;
  caption: Bilingual | string;
  objectPosition?: string;
};

type SelectedHighlightGallery = {
  id: string;
  categoryLabel: Bilingual;
  sectionLabel: Bilingual;
  summary: Bilingual;
  items: readonly GalleryVisualItem[];
};

const homepageServicesVideo = {
  src: "/videos/capital-oasis/site-videos/homepage/capital-oasis-by-phoenixflow-site-ready-v1.mp4",
  eyebrow: {
    ar: "نظرة أقرب على أعمالنا",
    en: "A closer look at the work",
  },
  title: {
    ar: "شاهد نهج كابيتال واسي في التنفيذ.",
    en: "See the Capital Oasis approach in motion.",
  },
  text: {
    ar: "فيلم مختصر يوضح كيف تجتمع الخامات المدروسة والتفاصيل الواثقة والتنفيذ المنظم في تجربة واحدة.",
    en: "A concise look at how considered materials, confident details, and disciplined execution come together in one experience.",
  },
};

function resolveLocalizedValue(
  value: Bilingual | string,
  t: (value: Bilingual) => string,
) {
  return typeof value === "string" ? value : t(value);
}

function toHomepageHeroLightboxItem(
  item: {
    id: string;
    image: VisualItem;
    label: Bilingual;
    note: Bilingual;
  },
  t: (value: Bilingual) => string,
): LightboxItem {
  return {
    id: item.id,
    src: item.image.src,
    alt: t(item.image.alt),
    title: t(item.image.title),
    caption: t(item.note),
    groupId: "homepage-hero",
    groupLabel: t({ ar: "صور البوابة الرئيسية", en: "Homepage Hero" }),
  };
}

function toSelectedGalleryLightboxItem(
  item: GalleryVisualItem,
  groupId: string,
  groupLabel: Bilingual,
  t: (value: Bilingual) => string,
): LightboxItem {
  const title = resolveLocalizedValue(item.title, t);

  return {
    id: `${groupId}-${title}`,
    src: item.src,
    alt: resolveLocalizedValue(item.alt, t),
    title,
    caption: resolveLocalizedValue(item.caption, t),
    groupId,
    groupLabel: t(groupLabel),
  };
}

function HomeSelectedHighlightCard({
  item,
}: {
  item: SelectedHighlightGallery;
}) {
  const { t } = useLanguage();
  const modalItems = useMemo(
    () =>
      item.items.map((entry) =>
        toSelectedGalleryLightboxItem(entry, item.id, item.categoryLabel, t),
      ),
    [item, t],
  );
  const lightbox = useImageLightbox(modalItems);
  const previewRotation = useRotatingHeroMedia(item.items, 1, 5000, {
    isPaused: lightbox.isOpen,
  });
  const previewImage = previewRotation.slotItems[0];
  const previewIndex =
    item.items.length > 0 ? previewRotation.activeIndex % item.items.length : 0;

  if (!previewImage) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        onClick={(event) =>
          lightbox.openAtIndex(previewIndex, event.currentTarget)
        }
        className="group h-full overflow-hidden rounded-[1.8rem] border border-[rgba(12,58,58,0.08)] bg-white/84 text-start shadow-[0_28px_66px_-56px_rgba(12,58,58,0.56)] transition hover:-translate-y-1 hover:shadow-[0_34px_76px_-52px_rgba(12,58,58,0.68)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)]"
        aria-label={t({
          ar: `عرض صور ${item.categoryLabel.ar}`,
          en: `View ${item.categoryLabel.en} images`,
        })}
        {...previewRotation.binding}
      >
        <div className="relative aspect-[16/10] min-h-[15rem] overflow-hidden bg-[#1B1715] sm:min-h-[16rem]">
          <RotatingHeroMediaImage
            id={`${item.id}-${previewIndex}-${previewImage.src}`}
            src={previewImage.src}
            alt={resolveLocalizedValue(previewImage.alt, t)}
            sizes="(max-width: 1280px) 100vw, 33vw"
            imageClassName="object-cover transition duration-700 group-hover:scale-[1.03]"
            objectPosition={previewImage.objectPosition ?? "center"}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,26,24,0.04),rgba(4,26,24,0.28)_44%,rgba(4,26,24,0.92)_100%)]" />
          <div className="absolute inset-x-5 bottom-5">
            <span className="inline-flex rounded-full border border-white/12 bg-[rgba(6,24,24,0.72)] px-3 py-1 text-[0.72rem] font-extrabold text-[#E7C98C]">
              {t(item.categoryLabel)}
            </span>
            <h3 className="mt-3 text-[1.32rem] font-semibold tracking-normal text-white">
              {t(item.sectionLabel)}
            </h3>
            <p className="mt-2 text-sm leading-7 text-white/72">
              {t(item.summary)}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#F1D6A8]">
              {t({ ar: "رؤية التفاصيل", en: "View details" })}
            </span>
          </div>
        </div>
      </button>

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

function HomeServicesVideoShowcase() {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <article className="mt-8 overflow-hidden rounded-[1.85rem] border border-[rgba(12,58,58,0.08)] bg-[linear-gradient(135deg,#123638_0%,#21484A_54%,#6C513E_100%)] p-5 text-white shadow-[0_28px_74px_-54px_rgba(12,58,58,0.68)] sm:p-6 lg:p-7">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-8">
          <div>
            <p className="eyebrow text-[#E5C18E]">{t(homepageServicesVideo.eyebrow)}</p>
            <h3 className="mt-4 text-[clamp(1.75rem,3.2vw,2.55rem)] leading-[1.12] font-semibold tracking-[-0.02em] text-white rtl:tracking-normal">
              {t(homepageServicesVideo.title)}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/76">
              {t(homepageServicesVideo.text)}
            </p>
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-button)] border border-[#E5C18E]/35 bg-white/8 px-4 py-2.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:border-[#E5C18E]/70 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C18E]"
            >
              <Play size={16} fill="currentColor" aria-hidden="true" />
              {t({ ar: "شاهد الفيلم كاملاً", en: "Watch the full film" })}
            </button>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#071B1C] shadow-[0_24px_62px_-38px_rgba(0,0,0,0.9)]">
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="group relative block aspect-video w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C18E] focus-visible:ring-inset"
              aria-label={t({
                ar: `تشغيل ${homepageServicesVideo.title.ar}`,
                en: `Play ${homepageServicesVideo.title.en}`,
              })}
            >
              <video
                src={homepageServicesVideo.src}
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.01]"
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,14,14,0.04),rgba(4,14,14,0.22)_45%,rgba(4,14,14,0.72)_100%)]" />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid size-14 place-items-center rounded-full border border-[#E5C18E]/55 bg-[rgba(4,26,24,0.68)] text-[#E5C18E] shadow-[0_18px_44px_rgba(0,0,0,0.34)] backdrop-blur-md transition duration-300 group-hover:scale-105 group-hover:border-[#E5C18E] sm:size-16">
                  <Play size={23} fill="currentColor" aria-hidden="true" />
                </span>
              </span>
              <span className="absolute inset-x-4 bottom-4 text-start text-xs font-extrabold text-white/82 sm:inset-x-5 sm:bottom-5 sm:text-sm">
                {t({ ar: "فيلم مختار من أعمال كابيتال واسي", en: "A selected Capital Oasis project film" })}
              </span>
            </button>
          </div>
        </div>
      </article>

      {isVideoOpen ? (
        <VideoModal
          video={homepageServicesVideo.src}
          title={homepageServicesVideo.title}
          autoPlay
          onClose={() => setIsVideoOpen(false)}
        />
      ) : null}
    </>
  );
}

function CtaLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "soft";
  external?: boolean;
}) {
  const classes =
    variant === "primary"
      ? "bg-[#D8B178] text-[#0C3A3A] shadow-[0_22px_58px_-26px_rgba(216,177,120,0.92)] hover:bg-[#E1BC89]"
      : variant === "secondary"
        ? "border border-white/18 bg-white/10 text-white hover:border-[#D8B178]/70 hover:bg-white/16"
        : "border border-[rgba(12,58,58,0.12)] bg-white/82 text-[var(--color-brand-deep)] shadow-[0_18px_42px_-34px_rgba(12,58,58,0.45)] hover:border-[rgba(12,58,58,0.24)] hover:bg-white";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-[var(--radius-button)] px-5 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)] focus-visible:ring-offset-2 ${classes}`}
    >
      {children}
    </a>
  );
}

function HomeRoutePageBody() {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";
  const Arrow = isArabic ? ArrowUpLeft : ArrowUpRight;

  const homepageHeroItems = [
    {
      id: "home-commercial",
      href: "/commercial-shops",
      image: commercialShopsHeroItems[0] as VisualItem,
      label: { ar: "المحلات التجارية", en: "Commercial Shops" },
      note: {
        ar: "ديكورات وواجهات وعرض يوضح هوية النشاط داخل المساحة.",
        en: "Fit-out, storefront, and display direction shaped around the store identity.",
      },
    },
    {
      id: "home-doors",
      href: "/doors",
      image: heroDoorDesignItems[0] as VisualItem,
      label: { ar: "الأبواب", en: "Doors" },
      note: {
        ar: "اختيارات أبواب وخامات وتشطيبات تناسب الاستخدام والمساحة.",
        en: "Door systems, materials, and finishes matched to use and space.",
      },
    },
    {
      id: "home-kitchens",
      href: "/kitchens",
      image: kitchenHeroItems[0] as VisualItem,
      label: { ar: "المطابخ", en: "Kitchens" },
      note: {
        ar: "أنظمة مطابخ عملية بتفاصيل تساعدك تختار التوزيع المناسب.",
        en: "Practical kitchen systems with materials and layouts that fit daily use.",
      },
    },
    {
      id: "home-dressing",
      href: "/dressing-rooms",
      image: dressingRoomHeroItems[0] as VisualItem,
      label: { ar: "غرف الملابس", en: "Dressing Rooms" },
      note: {
        ar: "خزائن وتخزين وواجهات مرايا بتفاصيل تناسب روتين الاستخدام.",
        en: "Wardrobes, storage, and mirrored fronts composed around daily routines.",
      },
    },
    {
      id: "home-events",
      href: "/events",
      image: eventsHeroItems[0] as VisualItem,
      label: { ar: "المعارض والفعاليات", en: "Events & Exhibitions" },
      note: {
        ar: "منصات وخلفيات وتجهيزات حضور بهوية بصرية متوازنة.",
        en: "Stage, backdrop, and exhibition direction with a refined event presence.",
      },
    },
  ] as const;
  const homepageHeroModalItems = useMemo(
    () => homepageHeroItems.map((item) => toHomepageHeroLightboxItem(item, t)),
    [homepageHeroItems, t],
  );
  const homepageHeroLightbox = useImageLightbox(homepageHeroModalItems);
  const homepageHeroRotation = useRotatingHeroMedia(homepageHeroItems, 3, 5000, {
    isPaused: homepageHeroLightbox.isOpen,
  });

  const serviceCards = [
    {
      id: "doors",
      href: "/doors",
      title: { ar: "الأبواب", en: "Doors" },
      blurb: { ar: "أبواب خشب وPVC وWPC مع خيارات توريد وتركيب مناسبة للمشاريع السكنية والتجارية.", en: "Wood, PVC, and WPC doors prepared with supply and installation options." },
      detail: { ar: "أبواب خشب، PVC، WPC", en: "Wood, PVC, and WPC doors" },
      image: heroDoorDesignItems[0] as VisualItem,
      icon: Trees,
    },
    {
      id: "kitchens",
      href: "/kitchens",
      title: { ar: "المطابخ", en: "Kitchens" },
      blurb: { ar: "خامات وتشطيبات وحلول تخزين تساعدك على اختيار نظام مطبخ يناسب المساحة والاستخدام.", en: "Materials, finishes, and storage choices for a kitchen system that fits the space." },
      detail: { ar: "خامات، تشطيبات، حلول تخزين", en: "Materials, finishes, and storage" },
      image: kitchenHeroItems[0] as VisualItem,
      icon: Layers3,
    },
    {
      id: "dressing",
      href: "/dressing-rooms",
      title: { ar: "غرف الملابس", en: "Dressing Rooms" },
      blurb: { ar: "أنظمة تخزين وخزائن ومرايا وأبواب سحاب بتوزيعات تناسب روتين الاستخدام اليومي.", en: "Wardrobe systems, mirrors, and sliding fronts shaped around daily use." },
      detail: { ar: "خزائن، مرايا، أبواب سحاب", en: "Wardrobes, mirrors, and sliding fronts" },
      image: dressingRoomHeroItems[0] as VisualItem,
      icon: SquareStack,
    },
    {
      id: "commercial",
      href: "/commercial-shops",
      title: { ar: "ديكورات المحلات التجارية", en: "Commercial Shops" },
      blurb: { ar: "واجهات وكاونترات ووحدات عرض تدعم هوية النشاط التجاري وتجربة الزوار داخل المساحة.", en: "Fronts, counters, and display units aligned with the commercial identity." },
      detail: { ar: "واجهات، كاونترات، وحدات عرض", en: "Fronts, counters, and display units" },
      image: commercialShopsHeroItems[1] as VisualItem,
      icon: Store,
    },
    {
      id: "events",
      href: "/events",
      title: { ar: "ديكورات المعارض والفعاليات", en: "Events & Exhibitions" },
      blurb: { ar: "أجنحة وستاندات ومنصات وخلفيات تعزز تجربة الحضور وتخدم هوية الفعالية.", en: "Booths, stands, stages, and backdrops that support the event atmosphere." },
      detail: { ar: "أجنحة، منصات، خلفيات", en: "Booths, stages, and backdrops" },
      image: eventsHeroItems[0] as VisualItem,
      icon: Sparkles,
    },
    {
      id: "other",
      href: "/other-services",
      title: { ar: "خدمات أخرى", en: "Other Services" },
      blurb: { ar: "وحدات تلفزيون وحلول خاصة حسب الطلب ضمن نطاق كابيتال واسي ومسار تنفيذ منظم.", en: "TV units and special requests within the Capital Oasis solution range." },
      detail: { ar: "وحدات تلفزيون وحلول حسب الطلب", en: "TV units and custom requests" },
      image: dressingRoomSelectionItems[0] as VisualItem,
      icon: Lamp,
    },
  ] as const;

  const whatWeDoCards = [
    {
      title: { ar: "تصنيع وتوريد الأبواب", en: "Door Supply & Manufacturing" },
      text: { ar: "حلول أبواب بمواد وتشطيبات تناسب طبيعة المساحة والاستخدام اليومي.", en: "Door systems with materials and finishes suited to the space and daily use." },
      icon: Trees,
    },
    {
      title: { ar: "المطابخ وغرف الملابس", en: "Kitchens & Dressing Rooms" },
      text: { ar: "أنظمة تخزين وعمل تناسب احتياج المنزل وتفاصيل الاستخدام.", en: "Storage and working systems shaped around residential routines." },
      icon: SquareStack,
    },
    {
      title: { ar: "ديكورات المحلات التجارية", en: "Commercial Shop Decorations" },
      text: { ar: "كاونترات ووحدات عرض وتجهيزات تدعم وضوح الهوية داخل المحل.", en: "Counters, display units, and fit-out systems that support the store identity." },
      icon: Store,
    },
    {
      title: { ar: "ديكورات المعارض والفعاليات", en: "Events & Exhibitions" },
      text: { ar: "أجنحة ومنصات وخلفيات وتجهيزات ترفع جودة تجربة الحضور.", en: "Booths, stages, backdrops, and event-support elements for a stronger visitor experience." },
      icon: Sparkles,
    },
    {
      title: { ar: "وحدات التلفزيون والخدمات الأخرى", en: "TV Units & Other Services" },
      text: { ar: "حلول إضافية حسب الطلب ضمن نفس المنظومة التجارية والتنفيذية.", en: "Additional custom solutions within the same production and delivery system." },
      icon: PanelsTopLeft,
    },
  ] as const;

  const projectTypeGroups = [
    {
      title: { ar: "للفلل والمنازل", en: "For Villas & Homes" },
      text: { ar: "حلول سكنية تجمع بين الخامة المناسبة، التخزين العملي، والتشطيب الهادئ.", en: "Residential solutions balancing materials, practical storage, and calm finishes." },
      icon: PanelsTopLeft,
      tags: [
        { ar: "الأبواب", en: "Doors" },
        { ar: "المطابخ", en: "Kitchens" },
        { ar: "غرف الملابس", en: "Dressing Rooms" },
        { ar: "وحدات التلفزيون", en: "TV Units" },
      ],
    },
    {
      title: { ar: "للشركات والمكاتب", en: "For Companies & Offices" },
      text: { ar: "أبواب داخلية وكاونترات ووحدات عرض وتفاصيل تساعد على تنظيم البيئة المهنية.", en: "Internal doors, counters, display units, and practical commercial details for office environments." },
      icon: BadgeCheck,
      tags: [
        { ar: "أبواب", en: "Doors" },
        { ar: "كاونترات", en: "Counters" },
        { ar: "ديكورات داخلية", en: "Interior details" },
        { ar: "وحدات عرض", en: "Display units" },
      ],
    },
    {
      title: { ar: "للمحلات التجارية", en: "For Retail Shops" },
      text: { ar: "واجهات وكاونترات ووحدات عرض وتشطيبات تساعد على وضوح حركة الزوار والمنتجات.", en: "Fronts, counters, display units, and finishes that support product visibility and customer flow." },
      icon: Store,
      tags: [
        { ar: "واجهات", en: "Fronts" },
        { ar: "كاونترات", en: "Counters" },
        { ar: "وحدات عرض", en: "Display units" },
        { ar: "تشطيبات تجارية", en: "Commercial finishes" },
      ],
    },
    {
      title: { ar: "للمعارض والفعاليات", en: "For Events & Exhibitions" },
      text: { ar: "أجنحة وستاندات ومنصات وخلفيات وتجهيزات عرض تمنح الفعالية حضوراً أوضح.", en: "Booths, stands, stages, and backdrop systems that strengthen the event presence." },
      icon: Sparkles,
      tags: [
        { ar: "أجنحة", en: "Booths" },
        { ar: "ستاندات", en: "Stands" },
        { ar: "منصات وخلفيات", en: "Stages & backdrops" },
        { ar: "تجهيزات عرض", en: "Display setups" },
      ],
    },
  ] as const;

  const selectedHighlights = [
    {
      id: "selected-doors",
      categoryLabel: { ar: "الأبواب", en: "Doors" },
      sectionLabel: { ar: "أبواب وتشطيبات", en: "Doors & Finishes" },
      summary: {
        ar: "اضغط لرؤية صور الأبواب ومقارنة الخامة والتشطيب وحضور التفاصيل.",
        en: "Open door visuals to compare materials, finishes, and detailing.",
      },
      items: heroDoorDesignItems.slice(0, 3) as readonly GalleryVisualItem[],
    },
    {
      id: "selected-dressing",
      categoryLabel: { ar: "غرف الملابس", en: "Dressing Rooms" },
      sectionLabel: { ar: "حلول تخزين", en: "Storage Solutions" },
      summary: {
        ar: "استعرض لقطات توضح توزيعات الخزائن وتفاصيل التخزين والواجهات.",
        en: "Browse wardrobe visuals that highlight storage layouts and front details.",
      },
      items: dressingRoomHeroItems.slice(0, 4) as readonly GalleryVisualItem[],
    },
    {
      id: "selected-kitchens",
      categoryLabel: { ar: "المطابخ", en: "Kitchens" },
      sectionLabel: { ar: "خامات مطابخ", en: "Kitchen Materials" },
      summary: {
        ar: "اضغط لتكبير صور تساعدك على مقارنة خامات المطبخ وأسلوب العرض.",
        en: "Open kitchen visuals to compare materials and presentation style.",
      },
      items: kitchenHeroItems.slice(0, 3) as readonly GalleryVisualItem[],
    },
    {
      id: "selected-commercial",
      categoryLabel: { ar: "المحلات التجارية", en: "Commercial Shops" },
      sectionLabel: { ar: "ديكورات تجارية", en: "Commercial Fit-out" },
      summary: {
        ar: "صور تبرز الواجهات وعناصر العرض وتوزيع المساحة داخل المحل.",
        en: "Images that show storefronts, display elements, and space composition.",
      },
      items: commercialShopsHeroItems.slice(0, 3) as readonly GalleryVisualItem[],
    },
    {
      id: "selected-events",
      categoryLabel: { ar: "الفعاليات والمعارض", en: "Events & Exhibitions" },
      sectionLabel: { ar: "تجهيزات فعاليات", en: "Event Setup" },
      summary: {
        ar: "استعرض لقطات من المنصات والخلفيات والمداخل وتجهيزات الحضور.",
        en: "View stage, backdrop, entrance, and event-setup visuals.",
      },
      items: eventsHeroItems.slice(0, 4) as readonly GalleryVisualItem[],
    },
    {
      id: "selected-other-services",
      categoryLabel: { ar: "خدمات أخرى", en: "Other Services" },
      sectionLabel: { ar: "عناصر مكملة ووحدات تلفزيون", en: "Support Details & TV Units" },
      summary: {
        ar: "صور مختارة لوحدات تلفزيون وعناصر مكملة لا تندرج تحت الأقسام الرئيسية.",
        en: "Selected TV-unit and support-detail visuals outside the main route groups.",
      },
      items: otherServicesHeroMediaPool.slice(0, 4) as readonly GalleryVisualItem[],
    },
  ] as const satisfies readonly SelectedHighlightGallery[];

  const trustPoints = [
    { ar: "تصنيع وتوريد وتركيب", en: "Manufacturing, supply, and installation" },
    { ar: "خامات مناسبة للاستخدام اليومي", en: "Materials suited to daily use" },
    { ar: "حلول حسب المساحة", en: "Solutions shaped around the space" },
    { ar: "تفاصيل تناسب طبيعة المشروع", en: "Details matched to the project type" },
    { ar: "متابعة من اختيار الخامة حتى التسليم", en: "Follow-up from material choice to handover" },
  ] as const;

  const processSteps = [
    {
      title: { ar: "تحديد نوع المشروع", en: "Define the project type" },
      text: { ar: "تحديد القسم المناسب وطبيعة الاستخدام والمساحة المستهدفة.", en: "Choose the right service category, use case, and target space." },
    },
    {
      title: { ar: "مراجعة المساحة والمقاسات", en: "Review the space and measurements" },
      text: { ar: "ربط الحل بالمقاسات الفعلية والحركة اليومية داخل المساحة.", en: "Connect the solution to real dimensions and daily movement inside the space." },
    },
    {
      title: { ar: "اختيار الخامة والتشطيب", en: "Select materials and finishes" },
      text: { ar: "اختيار النوع المناسب من حيث الشكل والعملية وطبيعة المشروع.", en: "Choose the right material and finish for appearance, practicality, and project type." },
    },
    {
      title: { ar: "التصنيع والتوريد والتركيب", en: "Manufacture, supply, and install" },
      text: { ar: "تنفيذ الحل ضمن مسار منظم حتى التوريد والتركيب والتسليم.", en: "Deliver the solution through a coordinated path from production to installation and handover." },
    },
  ] as const;

  return (
    <div className="route-density min-h-screen bg-[#FBF8F3] text-[var(--color-text-primary)]">
      <Header />

      <main id="main-content" tabIndex={-1}>
        <UnifiedRouteHero
          id="home-hero"
          variant="homepage"
          eyebrow={t({ ar: "مساحات مدروسة من الفكرة إلى التسليم", en: "Considered spaces from brief to handover" })
          }
          title={t({
            ar: "حلول تنطلق من المساحة\nوتنتهي بتفصيل يليق بالمشروع",
            en: "Spaces shaped from the brief to the final considered detail.",
          })}
          body={t({
            ar: "أبواب ومطابخ وغرف ملابس وتجهيزات تجارية وفعاليات، ضمن مسار واضح من اختيار الخامة إلى التوريد والتركيب.",
            en: "Doors, kitchens, dressing rooms, commercial fit-outs, and events, aligned through a clear path from material choice to supply and installation.",
          })}
          actions={
            <>
              <CtaLink href={company.whatsapp} external>
                <MessageCircle size={18} aria-hidden="true" />
                {t({ ar: "ابدأ مشروعك", en: "Start Your Project" })}
              </CtaLink>
              <Link
                href="#services"
                className="inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-[var(--radius-button)] border border-white/16 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:border-[#D8B178]/70 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)]"
              >
                {t({ ar: "استكشف حلولنا", en: "Explore Our Solutions" })}
                <Arrow size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-[var(--radius-button)] border border-white/14 bg-transparent px-5 py-3 text-sm font-extrabold text-white/84 transition hover:border-white/24 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)]"
              >
                {t({ ar: "ابدأ محادثة مشروعك", en: "Start the Project Conversation" })}
              </Link>
              <div className="inline-flex min-h-[3.35rem] max-w-full items-center gap-2 self-start rounded-full border border-[#D8B178]/28 bg-[rgba(245,235,220,0.12)] px-4 py-3 text-sm font-extrabold text-[#F2DEC0] shadow-[0_18px_42px_-32px_rgba(0,0,0,0.7)] backdrop-blur-sm sm:self-auto">
                <BadgeCheck size={16} aria-hidden="true" className="shrink-0 text-[#D8B178]" />
                <span className="leading-6 text-white/84">{t(company.trust)}</span>
              </div>
            </>
          }
          points={[
            { ar: "أبواب وخامات وتشطيبات", en: "Doors, materials, and finishes" },
            { ar: "حلول تخزين ومطابخ", en: "Storage and kitchen systems" },
            { ar: "ديكور تجاري وفعاليات", en: "Commercial and event decoration" },
          ]}
          mediaItems={homepageHeroMediaPool}
        />
        <section id="services" className="section-pad bg-[#FBF8F3]">
          <SectionShell className="route-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow justify-center text-[#8F7352]">
                {t({ ar: "ماذا نقدم؟", en: "What We Do" })}
              </p>
              <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-normal text-[#2D2219] sm:text-4xl">
                {t({
                ar: "حلول تجعل المساحات أوضح وأسهل استخداماً",
                en: "Solutions that make each space clearer and easier to use",
                })}
              </h2>
              <p className="mt-4 text-base leading-8 text-[#5F4D40]">
                {t({
                  ar: "نربط الخامة والتفصيل ومسار التنفيذ بطريقة تخدم طبيعة المشروع واستخدامه اليومي.",
                  en: "We connect material, detail, and delivery into one direction shaped around the project and its daily use.",
                })}
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {whatWeDoCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title.en}
                    className="rounded-[1.5rem] border border-[rgba(12,58,58,0.08)] bg-white/82 p-5 shadow-[0_24px_56px_-48px_rgba(12,58,58,0.55)]"
                  >
                    <span className="grid size-11 place-items-center rounded-2xl border border-[rgba(216,177,120,0.28)] bg-[#F5E6D2] text-[#7A5A3E]">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold tracking-normal text-[#21312E]">
                      {t(card.title)}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5D4B3E]">
                      {t(card.text)}
                    </p>
                  </div>
                );
              })}
            </div>
            <HomeServicesVideoShowcase />
          </SectionShell>
        </section>

        <section id="designs" className="section-pad bg-[#F3EADF]">
          <SectionShell className="route-shell">
            <div id="categories" className="scroll-mt-28" />
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="eyebrow text-[#7C8F84]">
                  {t({ ar: "بوابات الخدمات", en: "Service Gateway" })}
                </p>
                <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2A2018]">
                  {t({
                    ar: "ابدأ من القسم الذي يطابق مشروعك",
                    en: "Start with the route that matches your project",
                  })}
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-[var(--radius-button)] border border-[rgba(12,58,58,0.12)] bg-white/82 px-5 py-3 text-sm font-extrabold text-[var(--color-brand-deep)] transition hover:border-[rgba(12,58,58,0.24)] hover:bg-white"
              >
                {t({ ar: "اعرف القسم المناسب", en: "Find Your Category" })}
                <Arrow size={18} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {serviceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.id}
                    href={card.href}
                    className="group overflow-hidden rounded-[1.85rem] border border-[rgba(12,58,58,0.08)] bg-white/86 shadow-[0_28px_70px_-56px_rgba(12,58,58,0.6)] transition hover:-translate-y-1 hover:shadow-[0_34px_80px_-54px_rgba(12,58,58,0.72)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)]"
                  >
                    <div className="relative min-h-[15rem] overflow-hidden border-b border-[rgba(12,58,58,0.08)] bg-[#1A1715]">
                      <Image
                        src={card.image.src}
                        alt={t(card.image.alt)}
                        fill
                        sizes="(max-width: 1280px) 100vw, 32vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                        style={{ objectPosition: card.image.objectPosition }}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,26,24,0.04),rgba(4,26,24,0.3)_40%,rgba(4,26,24,0.9)_100%)]" />
                      <div className="absolute inset-x-5 bottom-5">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-[rgba(6,24,24,0.72)] px-3 py-1 text-[0.72rem] font-extrabold text-[#E7C98C]">
                          <Icon size={14} aria-hidden="true" />
                          {t(card.detail)}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-[1.38rem] font-semibold tracking-normal text-[#22312E]">
                        {t(card.title)}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#5E4B3D]">
                        {t(card.blurb)}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#7A6247]">
                        {t({ ar: "استكشف القسم", en: "Explore the route" })}
                        <Arrow size={16} aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SectionShell>
        </section>

        <section className="section-pad bg-[#FBF8F3]">
          <SectionShell className="route-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow justify-center text-[#8D7253]">
                {t({ ar: "حلول حسب نوع المشروع", en: "Solutions by Project Type" })}
              </p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2A2018]">
                {t({
                  ar: "نرتب الحلول حسب نوع المشروع لتصل إلى القرار أسرع",
                  en: "Solutions organized by project type for a clearer decision",
                })}
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {projectTypeGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.title.en}
                    className="rounded-[1.7rem] border border-[rgba(12,58,58,0.08)] bg-[linear-gradient(145deg,rgba(255,249,240,0.98),rgba(235,242,238,0.88))] p-5 shadow-[0_26px_60px_-50px_rgba(12,58,58,0.5)]"
                  >
                    <span className="grid size-11 place-items-center rounded-2xl border border-[rgba(216,177,120,0.25)] bg-[#F5E6D2] text-[#7C5F42]">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-normal text-[#21312E]">
                      {t(group.title)}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5E4C3F]">
                      {t(group.text)}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.tags.map((tag) => (
                        <span
                          key={tag.en}
                          className="rounded-full border border-[rgba(12,58,58,0.1)] bg-white px-3 py-1 text-xs font-extrabold text-[#21413D]"
                        >
                          {t(tag)}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionShell>
        </section>

        <section id="portfolio" className="section-pad bg-[#F4EBDD]">
          <SectionShell className="route-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow justify-center text-[#7C8F84]">
                {t({ ar: "لمحات مختارة من أقسامنا", en: "Selected Highlights" })}
              </p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2D2219]">
                {t({
                  ar: "مشاهد مختارة توضح الخامات والعرض وتفاصيل التشطيب",
                  en: "Selected scenes across materials, display, and finishing detail",
                })}
              </h2>
              <p className="mt-4 text-base leading-8 text-[#5E4B3D]">
                {t({
                  ar: "استعرض صورًا مختارة من أقسام كابيتال واسي. اضغط على أي صورة لرؤيتها بحجم أكبر ومقارنة التفاصيل قبل اختيار الأنسب لمشروعك.",
                  en: "Browse selected visuals from Capital Oasis categories. Open any image to view it larger and compare the details before choosing what fits your project.",
                })}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {selectedHighlights.map((item) => (
                <HomeSelectedHighlightCard key={item.id} item={item} />
              ))}
            </div>
          </SectionShell>
        </section>

        <section id="offers" className="section-pad bg-[#FBF8F3]">
          <SectionShell className="route-shell split-row grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow text-[#8F7352]">
                {t({ ar: "العروض", en: "Offers" })}
              </p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2C2118]">
                {t(doorOffer.title)}
              </h2>
              <p className="mt-4 text-base leading-8 text-[#5E4B3D]">
                {t({
                  ar: "إذا كان مشروعك يحتاج كمية أبواب مع توريد وتركيب، يمكن لفريقنا مراجعة تفاصيل العرض والكمية المناسبة لك.",
                  en: "If your project needs a larger door package with supply and installation, our team can review the right offer structure with you.",
                })}
              </p>
              <div className="mt-5 rounded-[1.5rem] border border-[rgba(12,58,58,0.08)] bg-white/82 p-5 shadow-[0_20px_48px_-38px_rgba(12,58,58,0.45)]">
                <p className="text-sm font-extrabold text-[#8B6B46]">{t(doorOffer.price)}</p>
                <div className="mt-3 grid gap-3">
                  {doorOffer.conditions.map((condition) => (
                    <div
                      key={condition.en}
                      className="flex items-start gap-3 rounded-[1rem] border border-[rgba(12,58,58,0.08)] bg-[#F8F4EC] px-4 py-3 text-sm font-semibold text-[#4D4137]"
                    >
                      <Check className="mt-1 size-4 shrink-0 text-[#8A6A48]" aria-hidden="true" />
                      <span>{t(condition)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <CtaLink href={company.whatsapp} external>
                  <MessageCircle size={18} aria-hidden="true" />
                  {t({ ar: "اسأل عن العرض", en: "Ask About the Offer" })}
                </CtaLink>
                <Link
                  href="/doors"
                  className="inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-[var(--radius-button)] border border-[rgba(12,58,58,0.12)] bg-white/82 px-5 py-3 text-sm font-extrabold text-[var(--color-brand-deep)] transition hover:border-[rgba(12,58,58,0.24)] hover:bg-white"
                >
                  {t({ ar: "انتقل إلى قسم الأبواب", en: "Go to Doors" })}
                  <Arrow size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(12,58,58,0.08)] bg-white/84 p-4 shadow-[0_30px_74px_-56px_rgba(12,58,58,0.52)]">
              <div className="relative min-h-[24rem] overflow-hidden rounded-[1.5rem] bg-[#1B1715]">
                <Image
                  src={pvcOfferGallery[0]!.src}
                  alt={t(pvcOfferGallery[0]!.alt)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  style={{ objectPosition: pvcOfferGallery[0]!.objectPosition }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,26,24,0.04),rgba(4,26,24,0.32)_46%,rgba(4,26,24,0.92)_100%)]" />
                <div className="absolute inset-x-5 bottom-5">
                  <span className="inline-flex rounded-full border border-white/12 bg-[rgba(6,24,24,0.72)] px-3 py-1 text-[0.72rem] font-extrabold text-[#E7C98C]">
                    {t({ ar: "عرض مختار", en: "Selected Offer" })}
                  </span>
                  <h3 className="mt-3 text-[1.36rem] font-semibold tracking-normal text-white">
                    {t(pvcOfferGallery[0]!.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/72">
                    {t(pvcOfferGallery[0]!.caption)}
                  </p>
                </div>
              </div>
            </div>
          </SectionShell>
        </section>

        <section className="section-pad bg-[#F3EADF]">
          <SectionShell className="route-shell split-row grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <p className="eyebrow text-[#7B8D82]">
                {t({ ar: "لماذا كابيتال واسي؟", en: "Why Capital Oasis" })}
              </p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2A2018]">
                {t({
                  ar: "خامة مناسبة، تنفيذ مضبوط، وتفاصيل تخدم مشروعك من أول تواصل حتى التركيب.",
                  en: "The right material, precise execution, and details that support your project from first contact to installation.",
                })}
              </h2>
              <p className="mt-4 text-base leading-8 text-[#5E4B3D]">
                {t({
                  ar: "الهدف من الصفحة الرئيسية أن تختصر عليك الطريق إلى القسم المناسب، ثم تساعدك على بدء التواصل بخطوات واضحة.",
                  en: "The homepage is designed to shorten the path to the right route, then move you toward contact with a clearer next step.",
                })}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {trustPoints.map((point, index) => (
                <div
                  key={point.en}
                  className="rounded-[1.45rem] border border-[rgba(12,58,58,0.08)] bg-white/84 p-5 shadow-[0_22px_54px_-46px_rgba(12,58,58,0.5)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-[#F5E6D2] text-[#7A5A3E]">
                      {index === 0 ? <Hammer size={18} aria-hidden="true" /> : index === 1 ? <Layers3 size={18} aria-hidden="true" /> : index === 2 ? <Ruler size={18} aria-hidden="true" /> : index === 3 ? <PanelsTopLeft size={18} aria-hidden="true" /> : <BadgeCheck size={18} aria-hidden="true" />}
                    </span>
                    <p className="text-sm font-extrabold text-[#23312E]">
                      {t(point)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SectionShell>
        </section>

        <section className="section-pad bg-[#FBF8F3]">
          <SectionShell className="route-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow justify-center text-[#8F7352]">
                {t({ ar: "من الفكرة إلى التنفيذ", en: "From Idea to Execution" })}
              </p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2D2219]">
                {t({
                  ar: "مسار بسيط وواضح يربط القسم المناسب بالتصنيع والتوريد والتركيب",
                  en: "A simple process that connects the right route to manufacturing, supply, and installation",
                })}
              </h2>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title.en}
                  className="rounded-[1.55rem] border border-[rgba(12,58,58,0.08)] bg-white/84 p-5 shadow-[0_24px_56px_-46px_rgba(12,58,58,0.48)]"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#0C3A3A] text-sm font-extrabold text-[#E7C98C]">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-normal text-[#22312E]">
                    {t(step.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5E4B3D]">
                    {t(step.text)}
                  </p>
                </div>
              ))}
            </div>
          </SectionShell>
        </section>

        <section id="contact" className="section-pad bg-[#F2E8DA]">
          <SectionShell className="route-shell">
            <div className="relative overflow-hidden rounded-[2.2rem] bg-[linear-gradient(135deg,#0C3A3A_0%,#183D3A_54%,#5A4030_100%)] p-7 text-white shadow-[0_34px_90px_-60px_rgba(12,58,58,0.9)] sm:p-10 lg:p-12">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(216,177,120,0.22),transparent_32%)]"
              />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <p className="eyebrow text-[#E7C98C]">
                    {t({ ar: "ابدأ من موجز المشروع", en: "Start with the Project Brief" })}
                  </p>
                  <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-white">
                    {t({ ar: "لنبدأ من احتياج مشروعك", en: "Let us start with your project brief" })}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/78 sm:text-lg">
                    {t({
                      ar: "شاركنا تفاصيل المساحة والخامة المطلوبة، ونساعدك في اختيار الحل المناسب للمشروع.",
                      en: "Share the space details and preferred material, and we will help define the right solution for the project.",
                    })}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <CtaLink href={company.whatsapp} external>
                    <MessageCircle size={18} aria-hidden="true" />
                    {t({ ar: "واتساب", en: "WhatsApp" })}
                  </CtaLink>
                  <CtaLink href={company.phoneHref} variant="secondary">
                    <Phone size={18} aria-hidden="true" />
                    {t({ ar: "اتصال مباشر", en: "Direct Call" })}
                  </CtaLink>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-[var(--radius-button)] border border-white/16 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:border-[#D8B178]/70 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)]"
                  >
                    {t({ ar: "ناقش مشروعك معنا", en: "Discuss Your Project" })}
                    <Arrow size={18} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </SectionShell>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <ImageModal
        activeIndex={homepageHeroLightbox.activeIndex}
        canGoNext={homepageHeroLightbox.canGoNext}
        canGoPrevious={homepageHeroLightbox.canGoPrevious}
        items={homepageHeroModalItems}
        onClose={homepageHeroLightbox.close}
        onNext={homepageHeroLightbox.goToNext}
        onPrevious={homepageHeroLightbox.goToPrevious}
      />
    </div>
  );
}

export function HomeRoutePage() {
  return (
    <LanguageProvider>
      <HomeRoutePageBody />
    </LanguageProvider>
  );
}
