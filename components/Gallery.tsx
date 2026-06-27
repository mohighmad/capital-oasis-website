"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { designs } from "@/data/designs";
import type { Bilingual } from "@/data/content";
import type { MediaItem } from "@/data/media";
import { nonPricedAds } from "@/data/nonPricedAds";
import { portfolio } from "@/data/portfolio";
import { pricedOffers } from "@/data/pricedOffers";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

type ContentTab = "designs" | "portfolio" | "brand-visuals" | "offers";
type DisplayItem = MediaItem;

const INITIAL_VISIBLE_ITEMS = 12;
const VISIBLE_ITEM_INCREMENT = 12;

const tabs: {
  id: ContentTab;
  title: Bilingual;
  subtitle: Bilingual;
  label: Bilingual;
  cardLabel: Bilingual;
}[] = [
  {
    id: "designs",
    title: { ar: "التصميمات", en: "Designs" },
    subtitle: {
      ar: "تصاميم وأفكار بصرية توضح أسلوب كابيتال واسي في الأثاث والديكور ووحدات التلفزيون وغرف الملابس.",
      en: "Visual concepts and design references showing Capital Oasis style in furniture, decor, TV units, and dressing rooms.",
    },
    label: { ar: "التصميمات", en: "Designs" },
    cardLabel: { ar: "تصميم", en: "Design" },
  },
  {
    id: "portfolio",
    title: { ar: "سوابق الأعمال", en: "Previous Works" },
    subtitle: {
      ar: "صور وفيديوهات من أعمال منفذة في الأبواب والديكورات التجارية والمطاعم والكافيهات وديكورات معارض وفعاليات.",
      en: "Photos and videos from completed projects in doors, commercial decorations, restaurants, cafes, and exhibition decor and events.",
    },
    label: { ar: "سوابق الأعمال", en: "Previous Works" },
    cardLabel: { ar: "سابقة أعمال", en: "Previous Work" },
  },
  {
    id: "brand-visuals",
    title: { ar: "إعلانات وتعريفات", en: "Brand Visuals" },
    subtitle: {
      ar: "تصاميم تعريفية بدون أسعار توضح خدمات الشركة ومجالات العمل.",
      en: "Non-priced brand visuals that introduce the company services and work scope.",
    },
    label: { ar: "إعلانات وتعريفات", en: "Brand Visuals" },
    cardLabel: { ar: "تعريف بالخدمة", en: "Brand Visual" },
  },
  {
    id: "offers",
    title: { ar: "العروض", en: "Offers" },
    subtitle: {
      ar: "عروض خاصة على منتجات وخدمات مختارة حسب تفاصيل كل عرض.",
      en: "Special offers on selected products and services depending on each offer details.",
    },
    label: { ar: "العروض", en: "Offers" },
    cardLabel: { ar: "عرض", en: "Offer" },
  },
];

const contentByTab: Record<ContentTab, DisplayItem[]> = {
  designs,
  portfolio,
  "brand-visuals": nonPricedAds,
  offers: pricedOffers,
};

function GalleryMedia({
  src,
  alt,
  title,
}: {
  src?: string;
  alt: string;
  title: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_top_right,rgba(201,154,74,.18),transparent_46%),linear-gradient(145deg,#0B3B35,#092f2b)] p-8 text-center">
        <div>
          <ImageIcon className="mx-auto text-gold" size={42} strokeWidth={1.3} />
          <p className="mt-5 max-w-xs text-lg font-bold text-white">{title}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc((100vw - 4rem) / 2), 390px"
      className="object-cover transition duration-700 group-hover:scale-[1.035]"
      onError={() => setHasError(true)}
    />
  );
}

export function Gallery() {
  const { t } = useLanguage();
  const galleryControlsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<ContentTab>("designs");
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleLimit, setVisibleLimit] = useState(INITIAL_VISIBLE_ITEMS);

  useEffect(() => {
    function openTab(event: Event) {
      const tab = (event as CustomEvent<ContentTab>).detail;
      if (!contentByTab[tab]) return;
      setActiveTab(tab);
      setActiveCategory("all");
      setVisibleLimit(INITIAL_VISIBLE_ITEMS);
    }

    window.addEventListener("capital-oasis:gallery-tab", openTab);
    return () => window.removeEventListener("capital-oasis:gallery-tab", openTab);
  }, []);

  const activeConfig = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  const activeItems = contentByTab[activeTab];

  const categories = useMemo(() => {
    const unique = new Map<string, Bilingual>();
    activeItems.forEach((item) => {
      unique.set(item.category, {
        ar: item.categoryAr,
        en: item.categoryEn,
      });
    });
    return [...unique.entries()].map(([id, label]) => ({ id, label }));
  }, [activeItems]);

  const visibleItems = useMemo(
    () =>
      activeItems.filter(
        (item) => activeCategory === "all" || item.category === activeCategory,
      ),
    [activeCategory, activeItems],
  );

  function selectTab(tab: ContentTab) {
    setActiveTab(tab);
    setActiveCategory("all");
    setVisibleLimit(INITIAL_VISIBLE_ITEMS);
  }

  function selectCategory(category: string) {
    setActiveCategory(category);
    setVisibleLimit(INITIAL_VISIBLE_ITEMS);
  }

  function showNextBatch() {
    setVisibleLimit((current) =>
      Math.min(current + VISIBLE_ITEM_INCREMENT, visibleItems.length),
    );
  }

  function showInitialBatch() {
    setVisibleLimit(INITIAL_VISIBLE_ITEMS);

    window.setTimeout(() => {
      galleryControlsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }

  const displayedItems = visibleItems.slice(0, visibleLimit);
  const hasMoreItems = visibleItems.length > displayedItems.length;
  const canToggleBatch = visibleItems.length > INITIAL_VISIBLE_ITEMS;
  const batchButtonLabel = t(
    hasMoreItems
      ? { ar: "عرض المزيد", en: "Show more" }
      : { ar: "عرض أقل", en: "Show less" },
  );
  const batchButtonAriaLabel = t({
    ar: hasMoreItems
      ? `عرض المزيد من ${activeConfig.title.ar}`
      : `عرض أقل من ${activeConfig.title.ar}`,
    en: hasMoreItems
      ? `Show more ${activeConfig.title.en}`
      : `Show less ${activeConfig.title.en}`,
  });

  return (
    <section id="gallery" className="section-pad surface-soft overflow-hidden bg-paper">
      <div className="shell">
        <SectionTitle
          eyebrow={{ ar: "معرض المحتوى", en: "Visual Library" }}
          title={activeConfig.title}
          text={activeConfig.subtitle}
        />

        <div
          ref={galleryControlsRef}
          className="mt-9 grid scroll-mt-24 gap-2 rounded-2xl border border-deep-green/10 bg-white p-2 shadow-[0_14px_40px_rgba(11,59,53,.08)] sm:grid-cols-2 lg:grid-cols-4"
          role="tablist"
          aria-label={t({ ar: "أقسام المحتوى", en: "Content sections" })}
        >
          {tabs.map((tab) => {
            const active = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                id={`content-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls="content-panel"
                onClick={() => selectTab(tab.id)}
                className={`min-h-12 rounded-xl px-4 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                  active
                    ? "bg-deep-green text-white shadow-[0_8px_22px_rgba(11,59,53,.2)]"
                    : "text-deep-green hover:bg-warm-beige/45"
                }`}
              >
                {t(tab.label)}
              </button>
            );
          })}
        </div>

        {categories.length > 1 ? (
          <div
            className="mt-6 flex flex-wrap gap-2.5"
            role="group"
            aria-label={t({ ar: "تصنيفات القسم", en: "Section categories" })}
          >
            <button
              type="button"
              onClick={() => selectCategory("all")}
              aria-pressed={activeCategory === "all"}
              className={`min-h-10 rounded-xl border px-4 py-2 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                activeCategory === "all"
                  ? "border-deep-green bg-deep-green text-white"
                  : "border-deep-green/12 bg-white text-deep-green hover:border-gold/70"
              }`}
            >
              {t({ ar: "الكل", en: "All" })}
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => selectCategory(category.id)}
                aria-pressed={activeCategory === category.id}
                className={`min-h-10 rounded-xl border px-4 py-2 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                  activeCategory === category.id
                    ? "border-deep-green bg-deep-green text-white"
                    : "border-deep-green/12 bg-white text-deep-green hover:border-gold/70"
                }`}
              >
                {t(category.label)}
              </button>
            ))}
          </div>
        ) : null}

        <Reveal>
          <div
            id="content-panel"
            role="tabpanel"
            aria-labelledby={`content-tab-${activeTab}`}
            className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            aria-live="polite"
            aria-label={t({
              ar: `${displayedItems.length} من عناصر ${activeConfig.title.ar}`,
              en: `${displayedItems.length} ${activeConfig.title.en} items`,
            })}
          >
            {displayedItems.map((item) => {
              return (
                <figure
                  key={item.id}
                  className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-deep-green/12 bg-ivory shadow-[0_16px_42px_rgba(11,59,53,.085)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(11,59,53,.12)]"
                >
                  <GalleryMedia
                    src={item.src}
                    alt={t({ ar: item.altAr, en: item.altEn })}
                    title={t({ ar: item.titleAr, en: item.titleEn })}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061f1c]/72 via-[#061f1c]/10 to-transparent" />

                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-6">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-extrabold tracking-[0.13em] uppercase rtl:tracking-normal">
                      <span className="rounded-full bg-gold px-2.5 py-1 text-deep-green">
                        {t(activeConfig.cardLabel)}
                      </span>
                      <span className="text-white/82">
                        {t({ ar: item.categoryAr, en: item.categoryEn })}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-bold sm:text-xl">
                      {t({ ar: item.titleAr, en: item.titleEn })}
                    </h3>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </Reveal>
        {canToggleBatch ? (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={hasMoreItems ? showNextBatch : showInitialBatch}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-deep-green/20 bg-white px-6 text-sm font-extrabold text-deep-green transition hover:border-gold hover:text-wood-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              aria-label={batchButtonAriaLabel}
            >
              {batchButtonLabel}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
