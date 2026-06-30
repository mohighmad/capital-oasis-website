"use client";

import Image from "next/image";
import { ArrowDownLeft, ArrowDownRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { company, type Bilingual } from "@/data/content";
import { heroSlides } from "@/data/heroSlides";
import { useLanguage } from "./LanguageProvider";

const ROTATION_INTERVAL = 5000;

const FEATURED_HERO_SLIDE_IDS = [
  "hero-previous-wooden-doors",
  "hero-previous-hotel-furniture",
  "hero-previous-kitchen",
  "hero-previous-commercial-display",
  "hero-previous-exhibition-decor",
] as const;

const featuredHeroSlides = heroSlides.filter((slide) =>
  FEATURED_HERO_SLIDE_IDS.includes(
    slide.id as (typeof FEATURED_HERO_SLIDE_IDS)[number],
  ),
);

const heroCopy: Record<
  "eyebrow" | "title" | "text" | "primary" | "secondary" | "featuredLabel" | "slidesLabel",
  Bilingual
> = {
  eyebrow: {
    en: "Premium woodworking and fit-out",
    ar: "نجارة وتجهيزات بمعايير راقية",
  },
  title: {
    en: "Capital Oasis Woodworking & Fit-Out",
    ar: "كابيتال واسي للأعمال الخشبية والتجهيزات",
  },
  text: {
    en: "Doors, kitchens, dressing rooms, commercial shops, and event fit-outs crafted with premium execution.",
    ar: "أبواب، مطابخ، غرف ملابس، محلات، وفعاليات بتنفيذ احترافي وهوية راقية.",
  },
  primary: {
    en: "Get a Quote",
    ar: "احصل على عرض سعر",
  },
  secondary: {
    en: "Explore Sections",
    ar: "استكشف الأقسام",
  },
  featuredLabel: {
    en: "Featured project",
    ar: "المشهد الحالي",
  },
  slidesLabel: {
    en: "Featured service images",
    ar: "صور الأعمال المختارة",
  },
};

export function Hero() {
  const { t, language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [unavailableSlides, setUnavailableSlides] = useState<Set<string>>(
    () => new Set(),
  );
  const Arrow = language === "ar" ? ArrowDownLeft : ArrowDownRight;

  const availableSlides = featuredHeroSlides.filter(
    (slide) => !unavailableSlides.has(slide.id),
  );
  const normalizedActiveSlide =
    activeSlide < availableSlides.length ? activeSlide : 0;
  const currentSlide = availableSlides[normalizedActiveSlide];
  const currentSlideTitle = currentSlide
    ? language === "ar"
      ? currentSlide.titleAr
      : currentSlide.titleEn
    : t(heroCopy.title);

  useEffect(() => {
    if (activeSlide >= availableSlides.length && availableSlides.length > 0) {
      setActiveSlide(0);
    }
  }, [activeSlide, availableSlides.length]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || availableSlides.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % availableSlides.length);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(timer);
  }, [availableSlides.length]);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-deep-green text-white md:min-h-[100dvh]"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {availableSlides.map((slide, index) => (
          <Image
            key={slide.id}
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-1000 motion-reduce:transition-none ${
              index === normalizedActiveSlide ? "opacity-100 hero-kenburns" : "opacity-0"
            }`}
            onError={() => {
              setUnavailableSlides((currentUnavailable) => {
                const nextUnavailable = new Set(currentUnavailable);
                nextUnavailable.add(slide.id);
                return nextUnavailable;
              });
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_72%,rgba(12,58,58,0.44),transparent_34rem)] rtl:bg-[radial-gradient(circle_at_82%_72%,rgba(12,58,58,0.44),transparent_34rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,35,31,0.18)_0%,rgba(6,35,31,0.34)_48%,rgba(6,35,31,0.74)_100%)]" />

      <div className="shell relative z-10 flex min-h-[100svh] items-end pt-[88px] pb-12 sm:pt-[96px] sm:pb-14 md:min-h-[100dvh] lg:pt-[104px] lg:pb-[4.5rem]">
        <div className="w-full max-w-[46rem] rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(7,31,29,0.82),rgba(7,31,29,0.62))] p-4 shadow-[0_24px_72px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-6 lg:p-7">
          <div className="lg:grid lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-end lg:gap-7">
            <div>
              <p className="eyebrow mb-2.5 text-gold sm:mb-3">{t(heroCopy.eyebrow)}</p>

              <h1 className="max-w-[14ch] text-[clamp(1.95rem,7vw,3.55rem)] leading-[1.04] font-semibold tracking-[-0.045em] text-white sm:text-[clamp(2.3rem,4.8vw,3.7rem)] rtl:max-w-[12ch] rtl:leading-[1.18] rtl:tracking-[-0.02em]">
                {t(heroCopy.title)}
              </h1>
            </div>

            <div className="mt-4 lg:mt-0">
              <p className="max-w-[27rem] text-sm leading-[1.75rem] text-white/78 sm:text-[0.95rem] sm:leading-7">
                {t(heroCopy.text)}
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary group w-full sm:w-auto"
                >
                  <MessageCircle size={18} />
                  {t(heroCopy.primary)}
                </a>
                <a
                  href="#section-gateway"
                  className="btn-secondary group w-full sm:w-auto"
                >
                  {t(heroCopy.secondary)}
                  <Arrow
                    size={17}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-4">
            <div className="hidden min-w-0 sm:block">
              <p className="text-[11px] font-bold tracking-[0.18em] text-gold/84 uppercase rtl:tracking-normal rtl:normal-case">
                {t(heroCopy.featuredLabel)}
              </p>
              <p className="mt-1 truncate text-sm font-semibold text-white/88">
                {currentSlideTitle}
              </p>
            </div>

            {availableSlides.length > 1 ? (
              <div
                className="flex items-center gap-2"
                aria-label={t(heroCopy.slidesLabel)}
              >
                {availableSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={
                      language === "ar"
                        ? `عرض ${slide.titleAr}`
                        : `Show ${slide.titleEn}`
                    }
                    aria-current={
                      index === normalizedActiveSlide ? "true" : undefined
                    }
                    className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-deep-green ${
                      index === normalizedActiveSlide
                        ? "w-8 bg-gold"
                        : "w-4 bg-white/40 hover:bg-white/72"
                    }`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
