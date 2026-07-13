"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  Droplets,
  Layers3,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  Trees,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
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
import { RotatingHeroMediaImage } from "@/components/media/RotatingHeroMediaImage";
import { useRotatingHeroMedia } from "@/components/media/useRotatingHeroMedia";
import { useImageLightbox } from "@/components/media/useImageLightbox";
import { doorsHeroMediaPool } from "@/components/sections/unifiedHeroMedia";
import { company } from "@/data/content";
import {
  doorPreviousWorksItems,
  doorProcessSteps,
  doorSubcategories,
  doorsPageContent,
  heroDoorDesignItems,
  type DoorGalleryItem,
  type DoorMaterialId,
} from "@/data/doors";
import { projectVideos, type ProjectVideo } from "@/data/videos";
import { SectionShell } from "./SectionShell";
import { UnifiedRouteHero } from "./UnifiedRouteHero";

const materialIcons = {
  wood: Trees,
  pvc: Layers3,
  wpc: Droplets,
} as const;

const materialStyles = {
  wood: {
    section: "bg-[linear-gradient(180deg,#f7f4ef_0%,#efefef_100%)]",
    icon: "border border-[rgba(212,166,116,0.28)] bg-[rgba(212,166,116,0.12)] text-[var(--color-brand-deep)]",
    eyebrow: "text-[#8a623b]",
    heading: "text-[#2d1e15]",
    summary: "text-[#5a3c28]",
    body: "text-[#654832]",
    benefitPanel: "border-[#a77c4e]/18 bg-white/82",
    benefitItem: "bg-[#fbf4ea] text-[#5e4432]",
    chip: "border-[rgba(112,76,45,0.18)] bg-[rgba(212,166,116,0.12)] text-[#5a3c28]",
    mediaPanel:
      "border-white/70 bg-white/62 shadow-[0_30px_78px_-58px_rgba(70,42,25,0.78)]",
    railTone: "default",
    selector:
      "border-[rgba(112,76,45,0.26)] bg-[linear-gradient(145deg,#fff9f0_0%,#efdcc3_48%,#8a6648_100%)] text-[#2d1e15] shadow-[0_24px_54px_rgba(76,48,30,0.14)] hover:border-[rgba(12,58,58,0.26)]",
    selectorGlow:
      "bg-[radial-gradient(circle_at_top_right,rgba(212,166,116,0.32),transparent_54%)]",
    selectorLine:
      "bg-[linear-gradient(90deg,rgba(12,58,58,0.72),rgba(212,166,116,0.42),transparent)]",
    selectorIcon:
      "border border-[rgba(212,166,116,0.38)] bg-[rgba(212,166,116,0.92)] text-[#3e2b1d] group-hover:bg-[var(--color-brand-deep)] group-hover:text-gold",
    selectorTitle: "text-[#2d1e15]",
    selectorText: "text-[#654832]",
  },
  pvc: {
    section: "bg-white/46",
    icon: "bg-[rgba(12,58,58,0.08)] text-[var(--color-brand-deep)]",
    eyebrow: "text-[var(--color-brand-deep)]",
    heading: "text-[var(--color-brand-deep)]",
    summary: "text-[var(--color-brand-deep)]",
    body: "text-[var(--color-text-muted)]",
    benefitPanel: "border-[rgba(12,58,58,0.1)] bg-white/84",
    benefitItem: "bg-[rgba(247,244,239,0.9)] text-[var(--color-text-primary)]",
    chip: "border-[rgba(12,58,58,0.1)] bg-white text-[var(--color-brand-deep)]",
    mediaPanel:
      "border-white/68 bg-white/64 shadow-[0_30px_78px_-58px_rgba(4,26,24,0.72)]",
    railTone: "default",
    selector:
      "border-[rgba(12,58,58,0.14)] bg-[linear-gradient(145deg,rgba(247,244,239,0.98),rgba(226,238,235,0.98))] text-[var(--color-brand-deep)] shadow-[0_24px_54px_rgba(12,58,58,0.1)]",
    selectorGlow:
      "bg-[radial-gradient(circle_at_top_right,rgba(83,146,140,0.18),transparent_56%)]",
    selectorLine:
      "bg-[linear-gradient(90deg,rgba(12,58,58,0.78),rgba(83,146,140,0.18))]",
    selectorIcon:
      "border border-[rgba(212,166,116,0.3)] bg-[rgba(12,58,58,0.1)] text-[var(--color-brand-deep)] group-hover:bg-[var(--color-brand-deep)] group-hover:text-white",
    selectorTitle: "text-[var(--color-brand-deep)]",
    selectorText: "text-[var(--color-text-muted)]",
  },
  wpc: {
    section: "wood-grain bg-[linear-gradient(135deg,#0c3a3a_0%,#082f2f_58%,#4a3726_100%)] text-white",
    icon: "border border-white/10 bg-[rgba(212,166,116,0.14)] text-[var(--color-brand-gold)]",
    eyebrow: "text-gold",
    heading: "text-white",
    summary: "text-white/78",
    body: "text-white/68",
    benefitPanel: "border-white/12 bg-white/[0.055]",
    benefitItem: "bg-white/[0.055] text-white/82",
    chip: "border-white/12 bg-white/[0.055] text-white/82",
    mediaPanel:
      "border-white/10 bg-white/[0.055] shadow-[0_34px_84px_-56px_rgba(0,0,0,0.95)]",
    railTone: "dark",
    selector:
      "border-[rgba(12,58,58,0.22)] bg-[linear-gradient(145deg,rgba(8,47,47,0.98),rgba(37,68,63,0.98))] text-white shadow-[0_24px_54px_rgba(8,47,47,0.18)]",
    selectorGlow:
      "bg-[radial-gradient(circle_at_top_right,rgba(212,166,116,0.22),transparent_56%)]",
    selectorLine:
      "bg-[linear-gradient(90deg,rgba(212,166,116,0.8),rgba(91,122,116,0.18))]",
    selectorIcon:
      "border border-[rgba(212,166,116,0.36)] bg-[rgba(212,166,116,0.16)] text-gold group-hover:bg-gold group-hover:text-[var(--color-brand-deep)]",
    selectorTitle: "text-white",
    selectorText: "text-white/76",
  },
} as const;

function DoorsRoutePageBody() {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";
  const Arrow = isArabic ? ArrowUpLeft : ArrowUpRight;
  const doorVideos = useMemo(
    () => projectVideos.filter((video) => video.category === "doors"),
    [],
  );
  const [activeVideo, setActiveVideo] = useState<ProjectVideo | null>(null);
  const videoShowcaseRef = useRef<HTMLDivElement>(null);
  const videoShowcaseTextRef = useRef<HTMLDivElement>(null);
  const videoShowcaseArrowStartRef = useRef<SVGPathElement>(null);
  const videoShowcaseArrowEndRef = useRef<SVGPathElement>(null);
  const featuredVideoCardRef = useRef<HTMLButtonElement>(null);
  const secondaryVideoCardRef = useRef<HTMLButtonElement>(null);
  const featuredPlayButtonRef = useRef<HTMLSpanElement>(null);
  const secondaryPlayButtonRef = useRef<HTMLSpanElement>(null);

  const woodSection = doorSubcategories.find((section) => section.id === "wood");
  const pvcSection = doorSubcategories.find((section) => section.id === "pvc");
  const wpcSection = doorSubcategories.find((section) => section.id === "wpc");
  const featuredDoorVideo = useMemo(
    () =>
      doorVideos.find((video) => video.id === "pw-doors-manufacturing") ??
      doorVideos[0] ??
      null,
    [doorVideos],
  );
  const secondaryDoorVideo = useMemo(
    () =>
      doorVideos.find((video) => video.id === "pw-doors-installed") ??
      doorVideos.find((video) => video.id !== featuredDoorVideo?.id) ??
      null,
    [doorVideos, featuredDoorVideo?.id],
  );

  if (!heroDoorDesignItems.length || !woodSection || !pvcSection || !wpcSection) {
    return null;
  }

  function toRailItems(items: DoorGalleryItem[]): PremiumImageRailItem[] {
    return items.map((item) => ({
      id: item.id,
      src: item.src,
      alt: t(item.alt),
      title: t(item.title),
      caption: t(item.caption),
      objectFit: item.objectFit,
      objectPosition: item.objectPosition,
    }));
  }

  function toLightboxItems(items: DoorGalleryItem[], groupLabel: string) {
    return items.map((item) => ({
      id: item.id,
      src: item.src,
      alt: t(item.alt),
      title: t(item.title),
      caption: t(item.caption),
      groupId: item.groupId,
      groupLabel,
    }));
  }

  const heroRotation = useRotatingHeroMedia(heroDoorDesignItems, 3);
  const heroFeatureItem = heroRotation.slotItems[0] ?? heroDoorDesignItems[0]!;
  const heroSupportingItems = heroRotation.slotItems.slice(1);
  const combinedPreviousWorksItems = useMemo(
    () => doorPreviousWorksItems,
    [],
  );
  const previousWorksRailItems = toRailItems(combinedPreviousWorksItems);

  const heroDesignLightboxItems = toLightboxItems(
    heroDoorDesignItems,
    t({ en: "Hero Door Design", ar: "تصميمات أبواب الواجهة" }),
  );
  const previousWorksLightboxItems = toLightboxItems(
    combinedPreviousWorksItems,
    t(doorsPageContent.previousWorks.title),
  );
  const materialLightboxItems = {
    woodDirections: toLightboxItems(woodSection.directionGallery, t(woodSection.visualLabel)),
    pvcDirections: toLightboxItems(pvcSection.directionGallery, t(pvcSection.visualLabel)),
    wpcDirections: toLightboxItems(wpcSection.directionGallery, t(wpcSection.visualLabel)),
  } as const;

  const heroDesignIndexById = new Map(
    heroDesignLightboxItems.map((item, index) => [item.id, index]),
  );
  const previousWorksIndexById = new Map(
    previousWorksLightboxItems.map((item, index) => [item.id, index]),
  );
  const materialIndexById = {
    woodDirections: new Map(
      materialLightboxItems.woodDirections.map((item, index) => [item.id, index]),
    ),
    pvcDirections: new Map(
      materialLightboxItems.pvcDirections.map((item, index) => [item.id, index]),
    ),
    wpcDirections: new Map(
      materialLightboxItems.wpcDirections.map((item, index) => [item.id, index]),
    ),
  };

  const heroDesignLightbox = useImageLightbox(heroDesignLightboxItems);
  const previousWorksLightbox = useImageLightbox(previousWorksLightboxItems);
  const woodDirectionLightbox = useImageLightbox(materialLightboxItems.woodDirections);
  const pvcDirectionLightbox = useImageLightbox(materialLightboxItems.pvcDirections);
  const wpcDirectionLightbox = useImageLightbox(materialLightboxItems.wpcDirections);

  function openHeroDesignImage(itemId: string, trigger: HTMLButtonElement) {
    const index = heroDesignIndexById.get(itemId);
    if (typeof index === "number") {
      heroDesignLightbox.openAtIndex(index, trigger);
    }
  }

  function openPreviousWorkImage(itemId: string, trigger: HTMLButtonElement) {
    const index = previousWorksIndexById.get(itemId);
    if (typeof index === "number") {
      previousWorksLightbox.openAtIndex(index, trigger);
    }
  }

  function openMaterialDirectionImage(
    materialId: DoorMaterialId,
    itemId: string,
    trigger: HTMLButtonElement,
  ) {
    if (materialId === "wood") {
      const index = materialIndexById.woodDirections.get(itemId);
      if (typeof index === "number") woodDirectionLightbox.openAtIndex(index, trigger);
      return;
    }
    if (materialId === "pvc") {
      const index = materialIndexById.pvcDirections.get(itemId);
      if (typeof index === "number") pvcDirectionLightbox.openAtIndex(index, trigger);
      return;
    }
    const index = materialIndexById.wpcDirections.get(itemId);
    if (typeof index === "number") wpcDirectionLightbox.openAtIndex(index, trigger);
  }

  useEffect(() => {
    const section = videoShowcaseRef.current;
    const textColumn = videoShowcaseTextRef.current;
    const featuredCard = featuredVideoCardRef.current;
    const secondaryCard = secondaryVideoCardRef.current;
    const featuredPlay = featuredPlayButtonRef.current;
    const secondaryPlay = secondaryPlayButtonRef.current;
    const arrowStart = videoShowcaseArrowStartRef.current;
    const arrowEnd = videoShowcaseArrowEndRef.current;

    if (
      !section ||
      !textColumn ||
      !featuredCard ||
      !secondaryCard ||
      !featuredPlay ||
      !secondaryPlay ||
      !arrowStart ||
      !arrowEnd
    ) {
      return;
    }

    let isActive = true;
    let observer: IntersectionObserver | null = null;
    const cleanupInteractions: Array<() => void> = [];

    import("gsap").then(({ gsap }) => {
      if (!isActive) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const textChildren = Array.from(textColumn.children);
      const arrowElements = Array.from(
        section.querySelectorAll<SVGElement>("[data-journey-arrow]"),
      );
      const arrowLines = Array.from(
        section.querySelectorAll<SVGPathElement>("[data-journey-arrow-line]"),
      );
      const featuredRestShadow = "0 28px 72px rgba(4,26,24,0.22)";
      const featuredHoverShadow = "0 38px 96px rgba(4,26,24,0.3)";
      const secondaryRestShadow = "0 22px 58px rgba(4,26,24,0.18)";
      const secondaryHoverShadow = "0 30px 74px rgba(4,26,24,0.24)";

      const attachInteractiveMotion = (
        card: HTMLButtonElement,
        playButton: HTMLSpanElement,
        restShadow: string,
        hoverShadow: string,
        liftY: number,
      ) => {
        const enter = () => {
          gsap.to(card, {
            y: liftY,
            scale: 1.01,
            boxShadow: hoverShadow,
            duration: 0.34,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(playButton, {
            scale: 1.05,
            boxShadow: "0 0 0 14px rgba(212,166,116,0.14)",
            duration: 0.34,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: restShadow,
            duration: 0.32,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(playButton, {
            scale: 1,
            boxShadow: "0 0 0 0 rgba(212,166,116,0)",
            duration: 0.32,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
        card.addEventListener("focusin", enter);
        card.addEventListener("focusout", leave);

        cleanupInteractions.push(() => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
          card.removeEventListener("focusin", enter);
          card.removeEventListener("focusout", leave);
        });
      };

      const ctx = gsap.context(() => {
        gsap.set(featuredCard, { boxShadow: featuredRestShadow, transformOrigin: "center center" });
        gsap.set(secondaryCard, {
          boxShadow: secondaryRestShadow,
          transformOrigin: "center center",
        });
        arrowLines.forEach((path) => {
          const length = path.getTotalLength();
          path.style.strokeDasharray = `${length}`;
          path.style.strokeDashoffset = `${length * 0.28}`;
        });

        if (prefersReducedMotion) {
          gsap.set(arrowElements, { opacity: 0.92, y: 0 });
          gsap.set(arrowLines, { strokeDashoffset: 0 });
          return;
        }

        gsap.set(textColumn, { autoAlpha: 0, x: isArabic ? 18 : -18 });
        gsap.set(textChildren, { autoAlpha: 0, y: 18 });
        gsap.set(arrowElements, { autoAlpha: 0.58, y: 8 });
        gsap.set(featuredCard, {
          autoAlpha: 0,
          y: 26,
          scale: 0.975,
          boxShadow: featuredRestShadow,
        });
        gsap.set(secondaryCard, {
          autoAlpha: 0,
          y: 26,
          scale: 0.985,
          boxShadow: secondaryRestShadow,
        });
        gsap.set([featuredPlay, secondaryPlay], {
          scale: 0.92,
          boxShadow: "0 0 0 0 rgba(212,166,116,0)",
        });

        const runReveal = () => {
          const timeline = gsap.timeline({
            defaults: { ease: "power3.out" },
          });

          timeline
            .to(textColumn, {
              autoAlpha: 1,
              x: 0,
              duration: 0.72,
            })
            .to(
              textChildren,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.56,
                stagger: 0.09,
                ease: "power2.out",
              },
              0.08,
            )
            .to(
              arrowElements,
              {
                autoAlpha: 0.9,
                y: 0,
                duration: 0.96,
                stagger: 0.1,
                ease: "power2.out",
              },
              0.16,
            )
            .to(
              arrowLines,
              {
                strokeDashoffset: 0,
                duration: 0.96,
                stagger: 0.1,
                ease: "power2.out",
              },
              0.16,
            )
            .to(
              featuredCard,
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.84,
              },
              0.22,
            )
            .to(
              secondaryCard,
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.72,
              },
              0.3,
            )
            .fromTo(
              [featuredPlay, secondaryPlay],
              {
                scale: 0.92,
                boxShadow: "0 0 0 0 rgba(212,166,116,0.28)",
              },
              {
                scale: 1,
                boxShadow: "0 0 0 14px rgba(212,166,116,0)",
                duration: 1.1,
                stagger: 0.1,
                ease: "power2.out",
              },
              0.38,
            );
        };

        observer = new IntersectionObserver(
          (entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
              runReveal();
              observer?.disconnect();
              observer = null;
            }
          },
          { threshold: 0.24 },
        );

        observer.observe(section);

        attachInteractiveMotion(
          featuredCard,
          featuredPlay,
          featuredRestShadow,
          featuredHoverShadow,
          -6,
        );
        attachInteractiveMotion(
          secondaryCard,
          secondaryPlay,
          secondaryRestShadow,
          secondaryHoverShadow,
          -4,
        );
      }, section);

      cleanupInteractions.push(() => ctx.revert());
    });

    return () => {
      isActive = false;
      observer?.disconnect();
      cleanupInteractions.forEach((cleanup) => cleanup());
    };
  }, [featuredDoorVideo?.id, isArabic, secondaryDoorVideo?.id]);

  return (
    <>
      <Header />

      <main
        id="main-content"
        tabIndex={-1}
        className="route-density bg-[var(--color-bg-body)] text-[var(--color-text-primary)]"
      >
        <UnifiedRouteHero
          id="doors-hero"
          variant="doors"
          eyebrow={t(doorsPageContent.hero.eyebrow)}
          title={t({
            ar: "أبواب راقية\nبتفاصيل تكمّل مشروعك",
            en: "Refined door systems with details that complete the project.",
          })}
          body={t({
            ar: "نساعدك في اختيار الخامة والتشطيب المناسبين، ثم ننسق التوريد والتركيب حول الاستخدام والتفاصيل.",
            en: "We define the right material and finish, then coordinate supply and installation around how the door will be used.",
          })}
          actions={
            <>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <MessageCircle size={18} />
                {t(doorsPageContent.hero.primaryCta)}
              </a>
              <a href="#door-materials" className="btn-secondary w-full sm:w-auto">
                {t(doorsPageContent.hero.secondaryCta)}
                <Arrow size={16} aria-hidden="true" />
              </a>
            </>
          }
          points={doorsPageContent.hero.trustNotes}
          mediaItems={doorsHeroMediaPool}
        />
        <section className="hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(212,166,116,0.22),transparent_34%),radial-gradient(circle_at_86%_20%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(90deg,rgba(212,166,116,0.08),transparent_38%,rgba(255,255,255,0.05))]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-[linear-gradient(180deg,rgba(8,47,47,0)_0%,rgba(4,26,24,0.28)_100%)]"
          />
          <SectionShell className="route-shell route-hero-shell relative grid min-w-0 gap-8 pb-10 pt-4 md:pb-12">
            <Reveal className="relative z-10 min-w-0 lg:order-2">
              <div className="route-hero-copy max-w-2xl">
                <p className="eyebrow text-gold">
                  {t(doorsPageContent.hero.eyebrow)}
                </p>
                <h1 className="route-hero-title mt-6 max-w-full break-words font-semibold tracking-normal text-white">
                  {t(doorsPageContent.hero.title)}
                </h1>
                <p className="route-hero-body mt-5 max-w-xl text-white/76">
                  {t(doorsPageContent.hero.text)}
                </p>

                <div className="route-hero-actions flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={company.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full sm:w-auto"
                  >
                    <MessageCircle size={18} />
                    {t(doorsPageContent.hero.primaryCta)}
                  </a>
                  <a
                    href="#door-materials"
                    className="btn-secondary w-full sm:w-auto"
                  >
                    {t(doorsPageContent.hero.secondaryCta)}
                    <Arrow size={16} aria-hidden="true" />
                  </a>
                </div>

                <div className="route-hero-points mt-7 text-sm font-bold text-white/82">
                  {doorsPageContent.hero.trustNotes.map((point) => (
                    <div
                      key={point.en}
                      className="flex items-start gap-2 rounded-2xl border border-white/12 bg-white/[0.065] p-3 backdrop-blur-sm"
                    >
                      <Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                      <span>{t(point)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="route-hero-media min-w-0 lg:order-1">
              <div
                className="relative isolate min-h-[28rem] overflow-hidden rounded-[1.85rem] border border-white/14 bg-[rgba(4,26,24,0.28)] p-3 shadow-[0_28px_70px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:min-h-[34rem] sm:p-4 xl:min-h-[37rem]"
                {...heroRotation.binding}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(212,166,116,0.28),transparent_32%),linear-gradient(135deg,rgba(12,58,58,0.44),rgba(111,78,55,0.16))]"
                />
                <button
                  type="button"
                  onClick={(event) =>
                    openHeroDesignImage(heroFeatureItem.id, event.currentTarget)
                  }
                  className="group absolute inset-x-3 top-3 h-[64%] overflow-hidden rounded-[1.55rem] border border-white/14 bg-[#061818] text-start shadow-[0_24px_70px_rgba(0,0,0,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:inset-x-4 sm:top-4"
                  aria-label={t({ en: "Open main door image", ar: "عرض صورة الباب الرئيسية" })}
                >
                  <RotatingHeroMediaImage
                    id={heroFeatureItem.id}
                    src={heroFeatureItem.src}
                    alt={t(heroFeatureItem.alt)}
                    priority
                    sizes="(max-width: 1024px) 92vw, 52vw"
                    imageClassName="object-cover transition duration-700 group-hover:scale-[1.025]"
                    objectPosition={heroFeatureItem.objectPosition}
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,26,24,0.02),rgba(4,26,24,0.74))]" />
                  <span className="absolute bottom-5 right-5 rounded-full border border-white/18 bg-[rgba(6,24,24,0.74)] px-4 py-2 text-xs font-extrabold text-gold backdrop-blur-md rtl:right-auto rtl:left-5">
                    {t({ en: "Door finish system", ar: "نظام تشطيب الأبواب" })}
                  </span>
                </button>

                <div className="absolute inset-x-5 bottom-5 grid grid-cols-2 gap-3 sm:inset-x-6 sm:bottom-6">
                  {heroSupportingItems.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={(event) =>
                        openHeroDesignImage(item.id, event.currentTarget)
                      }
                      className={`group relative h-[8rem] overflow-hidden rounded-[1.15rem] border border-white/16 bg-[#082f2f] shadow-[0_18px_46px_rgba(0,0,0,0.3)] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:h-[10rem] ${
                        index === 1 ? "sm:-translate-y-5" : ""
                      }`}
                      aria-label={t(item.title)}
                    >
                      <RotatingHeroMediaImage
                        id={item.id}
                        src={item.src}
                        alt={t(item.alt)}
                        sizes="(max-width: 1024px) 30vw, 16vw"
                        imageClassName="object-cover transition duration-700 group-hover:scale-[1.04]"
                        objectPosition={item.objectPosition}
                      />
                      <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(4,26,24,0.6))]" />
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          </SectionShell>
        </section>

        <section id="door-materials" className="section-pad bg-[#f7f4ef]">
          <SectionShell className="route-shell">
            <Reveal className="mx-auto max-w-3xl text-center">
                <p className="eyebrow justify-center">
                  {t(doorsPageContent.materials.eyebrow)}
                </p>
                <h2 className="mx-auto mt-5 max-w-3xl text-3xl leading-tight font-semibold tracking-normal sm:text-4xl">
                  {t(doorsPageContent.materials.title)}
                </h2>
                <p className="mt-4 text-base font-medium leading-8 text-[var(--color-text-muted)]">
                  {t(doorsPageContent.materials.text)}
                </p>
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {doorSubcategories.map((section, index) => {
                const Icon = materialIcons[section.id];
                const style = materialStyles[section.id];

                return (
                  <Reveal
                    key={section.id}
                    delay={index * 70}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${style.selector}`}
                  >
                    <a
                      href={`#${section.anchorId}`}
                      className="relative block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      aria-label={t({
                        en: `Go to ${section.title.en}`,
                        ar: `الانتقال إلى قسم ${section.title.ar}`,
                      })}
                    >
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute inset-0 ${style.selectorGlow}`}
                      />
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute inset-x-5 top-0 h-px ${style.selectorLine}`}
                      />
                      <span className={`grid size-11 place-items-center rounded-2xl transition ${style.selectorIcon}`}>
                          <Icon size={21} aria-hidden="true" />
                      </span>
                      <h3 className={`relative mt-5 text-2xl font-semibold tracking-normal ${style.selectorTitle}`}>
                        {t(section.title)}
                      </h3>
                      <p className={`relative mt-3 text-sm font-medium leading-7 ${style.selectorText}`}>
                        {t(section.cardSummary)}
                      </p>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </SectionShell>
        </section>

        {doorSubcategories.map((section, index) => {
          const Icon = materialIcons[section.id];
          const style = materialStyles[section.id];
          const directionRailItems = toRailItems(section.directionGallery);

          return (
            <section
              key={section.id}
              id={section.anchorId}
              className={`section-pad ${style.section}`}
            >
              <SectionShell
                className={`route-shell split-row grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                      <p className={`eyebrow ${style.eyebrow}`}>
                        {t(section.visualLabel)}
                      </p>
                      <div className="mt-5 flex items-start gap-4">
                        <span
                          className={`grid size-12 shrink-0 place-items-center rounded-2xl ${style.icon}`}
                        >
                          <Icon size={23} aria-hidden="true" />
                        </span>
                        <h2 className={`max-w-2xl text-[clamp(2.1rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal ${style.heading}`}>
                          {t(section.title)}
                        </h2>
                      </div>
                      <p className={`mt-6 max-w-2xl text-lg leading-9 font-semibold ${style.summary}`}>
                        {t(section.summary)}
                      </p>
                      <p className={`mt-5 max-w-2xl text-base leading-8 ${style.body}`}>
                        {t(section.description)}
                      </p>
                      <div className="mt-7 flex flex-wrap gap-2.5">
                        {section.bestFor.map((item) => (
                          <span
                            key={item.en}
                            className={`rounded-full border px-3 py-1.5 text-xs font-bold ${style.chip}`}
                          >
                            {t(item)}
                          </span>
                        ))}
                      </div>

                    <div className={`mt-7 rounded-[1.65rem] border p-5 shadow-[var(--shadow-card-soft)] sm:p-6 ${style.benefitPanel}`}>
                      <h3 className={`text-sm font-extrabold tracking-[0.14em] uppercase rtl:tracking-normal rtl:normal-case ${style.heading}`}>
                        {t({ en: "Why this type works", ar: "لماذا يختار العملاء هذا النوع" })}
                      </h3>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {section.benefits.map((benefit) => (
                          <div
                            key={benefit.en}
                            className={`flex items-start gap-3 rounded-2xl px-4 py-3 text-sm font-semibold leading-6 ${style.benefitItem}`}
                          >
                            <Check
                              size={15}
                              className="mt-1 shrink-0 text-[var(--color-brand-gold)]"
                              aria-hidden="true"
                            />
                            <span>{t(benefit)}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {section.servicePoints.map((point) => (
                          <span
                            key={point.en}
                            className={`rounded-full border px-3 py-1 text-xs font-bold ${style.chip}`}
                          >
                            {t(point)}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6">
                        <a
                          href={company.whatsapp}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary w-full sm:w-auto"
                        >
                          <MessageCircle size={18} />
                          {t(section.ctaLabel)}
                        </a>
                      </div>
                    </div>
                </Reveal>

                <Reveal delay={110} className="min-w-0">
                  <div className={`rounded-[1.85rem] border p-3 sm:p-4 ${style.mediaPanel}`}>
                    <PremiumImageRail
                      items={directionRailItems}
                      groupLabel={t(section.visualLabel)}
                      showLabel={false}
                      tone={style.railTone}
                      onOpen={(itemId, trigger) =>
                        openMaterialDirectionImage(section.id, itemId, trigger)
                      }
                    />
                  </div>
                </Reveal>
              </SectionShell>
            </section>
          );
        })}

        <section className="section-pad wood-grain bg-[var(--color-brand-deep)] text-white">
          <SectionShell className="route-shell split-row grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="lg:order-2">
              <div className="max-w-3xl">
                <p className="eyebrow text-gold">
                  {t(doorsPageContent.previousWorks.eyebrow)}
                </p>
                <h2 className="mt-5 text-[clamp(2.1rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-white">
                  {t(doorsPageContent.previousWorks.title)}
                </h2>
                <p className="mt-4 max-w-2xl text-base font-medium leading-8 text-white/72 sm:text-lg">
                  {t(doorsPageContent.previousWorks.text)}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-4 block h-px w-24 bg-[linear-gradient(90deg,rgba(212,166,116,0.96),rgba(212,166,116,0.2),transparent)]"
                />
              </div>
            </Reveal>

            <Reveal delay={110} className="min-w-0 lg:order-1">
              <div className="rounded-[1.85rem] border border-white/10 bg-white/[0.055] p-3 shadow-[0_34px_84px_-56px_rgba(0,0,0,0.95)] sm:p-4">
                <PremiumImageRail
                  items={previousWorksRailItems}
                  groupLabel={t(doorsPageContent.previousWorks.title)}
                  onOpen={openPreviousWorkImage}
                  tone="dark"
                  showLabel={false}
                />
              </div>
            </Reveal>
          </SectionShell>
        </section>

        <section id="doors-process" className="section-pad bg-white/46">
          <SectionShell className="route-shell">
            <Reveal className="space-y-8">
              <div className="max-w-3xl">
                <p className="eyebrow">
                  {t(doorsPageContent.process.eyebrow)}
                </p>
                <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-normal sm:text-4xl">
                  {t(doorsPageContent.process.title)}
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-text-muted)]">
                  {t(doorsPageContent.process.text)}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {doorProcessSteps.map((step, index) => (
                  <article
                    key={step.title.en}
                    className="rounded-[1.25rem] border border-[var(--color-border-subtle)] bg-white/84 p-5 shadow-[var(--shadow-card-soft)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-2xl bg-[rgba(212,166,116,0.14)] text-[var(--color-brand-deep)]">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-semibold tracking-normal">
                        {t(step.title)}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                      {t(step.text)}
                    </p>
                  </article>
                ))}
              </div>

              <div
                ref={videoShowcaseRef}
                className="relative isolate overflow-hidden rounded-[2rem] border border-[rgba(12,58,58,0.14)] bg-[linear-gradient(135deg,#0c3a3a_0%,#082f2f_52%,#123f38_100%)] p-4 text-white shadow-[0_30px_90px_rgba(4,26,24,0.16)] sm:p-5 lg:p-6 xl:p-7"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
                >
                  <div className="absolute inset-[1.2rem] rounded-[1.55rem] border border-white/6" />
                  <div className="absolute inset-x-10 top-8 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.02),rgba(212,166,116,0.24),rgba(255,255,255,0.02))]" />
                  <svg
                    className="absolute inset-0 h-full w-full overflow-visible"
                    viewBox="0 0 1200 620"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="doors-journey-arrow-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" stopColor="rgba(247,244,239,0.46)" />
                        <stop offset="50%" stopColor="rgba(212,166,116,1)" />
                        <stop offset="100%" stopColor="rgba(247,244,239,0.8)" />
                      </linearGradient>
                      <filter
                        id="doors-journey-arrow-glow"
                        x="-20%"
                        y="-20%"
                        width="140%"
                        height="140%"
                      >
                        <feDropShadow
                          dx="0"
                          dy="0"
                          stdDeviation="5"
                          floodColor="rgba(212,166,116,0.34)"
                        />
                      </filter>
                    </defs>
                    <path
                      data-journey-arrow
                      data-journey-arrow-line
                      ref={videoShowcaseArrowStartRef}
                      d={
                        isArabic
                          ? "M1012 216 C 972 188, 936 176, 896 176 C 876 176, 858 176, 840 178"
                          : "M188 216 C 228 188, 264 176, 304 176 C 324 176, 342 176, 360 178"
                      }
                      fill="none"
                      stroke="url(#doors-journey-arrow-gradient)"
                      strokeWidth="5.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#doors-journey-arrow-glow)"
                    />
                    <path
                      data-journey-arrow
                      d={
                        isArabic
                          ? "M824 178 L842 168 L838 192 Z"
                          : "M376 178 L358 168 L362 192 Z"
                      }
                      fill="rgba(247,244,239,0.96)"
                      stroke="rgba(212,166,116,0.92)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#doors-journey-arrow-glow)"
                    />
                    <path
                      data-journey-arrow
                      data-journey-arrow-line
                      ref={videoShowcaseArrowEndRef}
                      d={
                        isArabic
                          ? "M520 486 C 474 494, 438 492, 410 488 C 396 486, 386 482, 376 476"
                          : "M680 486 C 726 494, 762 492, 790 488 C 804 486, 814 482, 824 476"
                      }
                      fill="none"
                      stroke="url(#doors-journey-arrow-gradient)"
                      strokeWidth="5.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#doors-journey-arrow-glow)"
                    />
                    <path
                      data-journey-arrow
                      d={
                        isArabic
                          ? "M360 476 L378 466 L374 490 Z"
                          : "M840 476 L822 466 L826 490 Z"
                      }
                      fill="rgba(247,244,239,0.96)"
                      stroke="rgba(212,166,116,0.92)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#doors-journey-arrow-glow)"
                    />
                  </svg>
                </div>

                <div className="relative z-10 grid min-w-0 gap-4 lg:grid-cols-[minmax(0,0.31fr)_minmax(0,0.38fr)_minmax(0,0.31fr)] lg:items-stretch lg:gap-6 xl:gap-8">
                  <div
                    ref={videoShowcaseTextRef}
                    className="order-1 min-w-0 rounded-[1.7rem] border border-white/10 bg-[rgba(247,244,239,0.04)] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:px-6 lg:order-2 lg:flex lg:min-h-[25rem] lg:items-center lg:px-7"
                  >
                    <div className="min-w-0">
                      <p className="eyebrow text-gold">
                        {t({
                          en: "From Workshop to Installation",
                          ar: "من التصنيع إلى التركيب",
                        })}
                      </p>
                      <h2 className="mt-5 max-w-xl text-3xl leading-tight font-semibold tracking-normal text-white sm:text-4xl">
                        {t({
                          en: "Execution Details Before You Decide",
                          ar: "تفاصيل التنفيذ قبل اعتماد طلبك",
                        })}
                      </h2>
                      <p className="mt-4 max-w-lg text-base leading-8 text-white/74">
                        {t({
                          en: "Watch selected moments from door preparation and installed works to understand finish quality before requesting your quote.",
                          ar: "شاهد جانبًا من مراحل تجهيز وتصنيع الأبواب، ثم معاينة الأعمال المنفذة بعد التركيب، لتتكون صورة أوضح عن مستوى التشطيب قبل طلبك.",
                        })}
                      </p>
                      <div className="mt-5 grid gap-3">
                        {[
                          {
                            en: "Prepared to match project measurements",
                            ar: "تصنيع وتجهيز حسب المقاسات",
                          },
                          {
                            en: "Supplied and installed with detail-focused execution",
                            ar: "توريد وتركيب باهتمام بالتفاصيل",
                          },
                          {
                            en: "Finished for daily use",
                            ar: "تشطيبات مناسبة للاستخدام اليومي",
                          },
                        ].map((point) => (
                          <div
                            key={point.en}
                            className="flex items-start gap-3 rounded-[1.15rem] border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold leading-6 text-white/82 backdrop-blur-sm"
                          >
                            <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-[rgba(212,166,116,0.16)] text-gold">
                              <Check size={14} aria-hidden="true" />
                            </span>
                            <span>{t(point)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="contents">
                    {featuredDoorVideo ? (
                      <button
                        ref={featuredVideoCardRef}
                        type="button"
                        onClick={() => setActiveVideo(featuredDoorVideo)}
                        className={`group relative order-2 min-w-0 overflow-hidden rounded-[1.7rem] border border-white/12 bg-[rgba(255,255,255,0.05)] text-start shadow-[0_28px_72px_rgba(4,26,24,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold lg:min-h-[25rem] ${isArabic ? "lg:order-1" : "lg:order-1"}`}
                        aria-label={t({
                          en: `Play ${featuredDoorVideo.title.en}`,
                          ar: `تشغيل ${featuredDoorVideo.title.ar}`,
                        })}
                      >
                        <div className="relative h-full min-h-[18.5rem] overflow-hidden rounded-[1.58rem] border border-white/8 bg-black lg:min-h-[25rem]">
                          <Image
                            src={featuredDoorVideo.thumbnail}
                            alt={t(featuredDoorVideo.alt)}
                            fill
                            sizes="(max-width: 1024px) 100vw, 30vw"
                            className="object-cover transition duration-700 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,26,24,0.08),rgba(4,26,24,0.24)_34%,rgba(4,26,24,0.9)_100%)]" />
                          <div
                            aria-hidden="true"
                            className="absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.08),rgba(212,166,116,0.84),rgba(255,255,255,0.04))]"
                          />
                          <span className="absolute left-5 top-5 rounded-full border border-white/12 bg-[rgba(6,24,24,0.72)] px-3 py-1 text-[0.7rem] font-extrabold tracking-[0.14em] text-gold uppercase rtl:tracking-normal rtl:normal-case">
                            {t({ en: "Manufacturing Stage", ar: "مرحلة التصنيع" })}
                          </span>
                          <span
                            ref={featuredPlayButtonRef}
                            className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/45 bg-[rgba(6,24,24,0.72)] text-gold backdrop-blur-md"
                          >
                            <Play size={22} fill="currentColor" aria-hidden="true" />
                          </span>
                          <div className="absolute inset-x-5 bottom-5">
                            <h3 className="text-[1.35rem] font-semibold tracking-normal text-white sm:text-[1.48rem]">
                              {t({
                                en: "Wooden Door Manufacturing",
                                ar: "تصنيع أبواب خشبية",
                              })}
                            </h3>
                            <p className="mt-2 max-w-xs text-sm leading-7 text-white/72">
                              {t({
                                en: "A closer look at workshop preparation, material handling, and the making stage before delivery.",
                                ar: "لقطة أقرب لمرحلة الورشة وتجهيز المواد وخطوات التصنيع قبل التوريد.",
                              })}
                            </p>
                          </div>
                        </div>
                      </button>
                    ) : null}

                    <div className="order-3 flex justify-center lg:hidden">
                      <div className="flex flex-col items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-xs font-extrabold text-gold">
                        <span>{t({ en: "Process Journey", ar: "رحلة التنفيذ" })}</span>
                        <span className="text-lg leading-none text-white/82">↓</span>
                        <span className="text-white/70">
                          {t({
                            en: "Workshop to installed result",
                            ar: "من التصنيع إلى النتيجة المنفذة",
                          })}
                        </span>
                      </div>
                    </div>

                    {secondaryDoorVideo ? (
                      <button
                        ref={secondaryVideoCardRef}
                        type="button"
                        onClick={() => setActiveVideo(secondaryDoorVideo)}
                        className={`group relative order-4 min-w-0 overflow-hidden rounded-[1.7rem] border border-white/12 bg-[rgba(255,255,255,0.05)] text-start shadow-[0_22px_58px_rgba(4,26,24,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold lg:min-h-[25rem] ${isArabic ? "lg:order-3" : "lg:order-3"}`}
                        aria-label={t({
                          en: `Play ${secondaryDoorVideo.title.en}`,
                          ar: `تشغيل ${secondaryDoorVideo.title.ar}`,
                        })}
                      >
                        <div className="grid h-full gap-0 overflow-hidden rounded-[1.58rem] border border-white/8 bg-[rgba(4,26,24,0.42)] lg:min-h-[25rem]">
                          <div className="relative min-h-[18.5rem] overflow-hidden lg:min-h-[25rem]">
                            <Image
                              src={secondaryDoorVideo.thumbnail}
                              alt={t(secondaryDoorVideo.alt)}
                              fill
                              sizes="(max-width: 1024px) 100vw, 30vw"
                              className="object-cover transition duration-700 group-hover:scale-[1.03]"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,26,24,0.08),rgba(4,26,24,0.32)_36%,rgba(4,26,24,0.9)_100%)]" />
                            <div
                              aria-hidden="true"
                              className="absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.08),rgba(212,166,116,0.84),rgba(255,255,255,0.04))]"
                            />
                            <span className="absolute left-5 top-5 rounded-full border border-white/12 bg-[rgba(6,24,24,0.72)] px-3 py-1 text-[0.7rem] font-extrabold tracking-[0.14em] text-gold uppercase rtl:tracking-normal rtl:normal-case">
                              {t({
                                en: "Execution & Delivery",
                                ar: "مرحلة التنفيذ والتسليم",
                              })}
                            </span>
                            <span
                              ref={secondaryPlayButtonRef}
                              className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/38 bg-[rgba(6,24,24,0.74)] text-gold backdrop-blur-md"
                            >
                              <Play size={20} fill="currentColor" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="absolute inset-x-5 bottom-5">
                            <h3 className="text-[1.35rem] font-semibold tracking-normal text-white sm:text-[1.48rem]">
                              {t({
                                en: "Doors After Installation",
                                ar: "الأبواب بعد التركيب",
                              })}
                            </h3>
                            <p className="mt-2 max-w-xs text-sm leading-7 text-white/72">
                              {t({
                                en: "Review the installed result and the final finish quality after fitting and handover preparation.",
                                ar: "عاين النتيجة بعد التركيب وجودة التشطيب النهائية بعد التثبيت والاستعداد للتسليم.",
                              })}
                            </p>
                          </div>
                        </div>
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>
          </SectionShell>
        </section>

        <section className="section-pad bg-[linear-gradient(180deg,#efefef_0%,rgba(12,58,58,0.08)_100%)]">
          <SectionShell className="route-shell">
            <Reveal className="grid gap-7 overflow-hidden rounded-[1.65rem] border border-[var(--color-border-subtle)] bg-white/86 p-6 shadow-[var(--shadow-card)] sm:p-8 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:p-10">
              <div>
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[rgba(212,166,116,0.38)] bg-[rgba(212,166,116,0.1)] px-4 py-2 text-sm font-extrabold text-[var(--color-brand-deep)]">
                  <ShieldCheck size={17} aria-hidden="true" />
                  <span>{t(doorsPageContent.cta.nhcBadge)}</span>
                </div>
                <p className="eyebrow mt-7">
                  {t(doorsPageContent.cta.eyebrow)}
                </p>
                <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-semibold tracking-normal sm:text-4xl">
                  {t(doorsPageContent.cta.title)}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
                  {t(doorsPageContent.cta.text)}
                </p>
              </div>

              <div className="grid gap-3 rounded-[1.35rem] border border-[rgba(12,58,58,0.08)] bg-[rgba(12,58,58,0.035)] p-4">
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <MessageCircle size={18} />
                  {t(doorsPageContent.hero.primaryCta)}
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-[var(--radius-button)] bg-[var(--color-brand-deep)] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[var(--color-brand-deep-hover)]"
                >
                  {t({ en: "Go to Contact", ar: "اذهب إلى التواصل" })}
                  <Arrow size={16} aria-hidden="true" />
                </Link>
                <a
                  href={company.phoneHref}
                  className="inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-[var(--radius-button)] border border-[rgba(212,166,116,0.34)] bg-white px-5 py-3 text-sm font-extrabold text-[var(--color-brand-deep)] transition hover:border-[var(--color-brand-gold)]"
                >
                  <Phone size={16} />
                  {t({ en: "Call Us", ar: "اتصل بنا" })}
                </a>
              </div>
            </Reveal>
          </SectionShell>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />

      <ImageModal
        items={heroDesignLightboxItems}
        activeIndex={heroDesignLightbox.activeIndex}
        canGoNext={heroDesignLightbox.canGoNext}
        canGoPrevious={heroDesignLightbox.canGoPrevious}
        onClose={heroDesignLightbox.close}
        onNext={heroDesignLightbox.goToNext}
        onPrevious={heroDesignLightbox.goToPrevious}
      />

      <ImageModal
        items={materialLightboxItems.woodDirections}
        activeIndex={woodDirectionLightbox.activeIndex}
        canGoNext={woodDirectionLightbox.canGoNext}
        canGoPrevious={woodDirectionLightbox.canGoPrevious}
        onClose={woodDirectionLightbox.close}
        onNext={woodDirectionLightbox.goToNext}
        onPrevious={woodDirectionLightbox.goToPrevious}
      />

      <ImageModal
        items={materialLightboxItems.pvcDirections}
        activeIndex={pvcDirectionLightbox.activeIndex}
        canGoNext={pvcDirectionLightbox.canGoNext}
        canGoPrevious={pvcDirectionLightbox.canGoPrevious}
        onClose={pvcDirectionLightbox.close}
        onNext={pvcDirectionLightbox.goToNext}
        onPrevious={pvcDirectionLightbox.goToPrevious}
      />

      <ImageModal
        items={materialLightboxItems.wpcDirections}
        activeIndex={wpcDirectionLightbox.activeIndex}
        canGoNext={wpcDirectionLightbox.canGoNext}
        canGoPrevious={wpcDirectionLightbox.canGoPrevious}
        onClose={wpcDirectionLightbox.close}
        onNext={wpcDirectionLightbox.goToNext}
        onPrevious={wpcDirectionLightbox.goToPrevious}
      />

      <ImageModal
        items={previousWorksLightboxItems}
        activeIndex={previousWorksLightbox.activeIndex}
        canGoNext={previousWorksLightbox.canGoNext}
        canGoPrevious={previousWorksLightbox.canGoPrevious}
        onClose={previousWorksLightbox.close}
        onNext={previousWorksLightbox.goToNext}
        onPrevious={previousWorksLightbox.goToPrevious}
      />

      {activeVideo ? (
        <VideoModal
          video={activeVideo.video}
          title={activeVideo.title}
          poster={activeVideo.thumbnail}
          onClose={() => setActiveVideo(null)}
        />
      ) : null}
    </>
  );
}

export function DoorsRoutePage() {
  return (
    <LanguageProvider>
      <DoorsRoutePageBody />
    </LanguageProvider>
  );
}
