"use client";

import Image from "next/image";
import {
  ArrowDownLeft,
  ArrowDownRight,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { company, copy } from "@/data/content";
import { heroSlides } from "@/data/heroSlides";
import { useLanguage } from "./LanguageProvider";

const ROTATION_INTERVAL = 5000;

export function Hero() {
  const { t, language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [unavailableSlides, setUnavailableSlides] = useState<Set<string>>(
    () => new Set(),
  );
  const Arrow = language === "ar" ? ArrowDownLeft : ArrowDownRight;

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || heroSlides.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => {
        for (let offset = 1; offset <= heroSlides.length; offset += 1) {
          const next = (current + offset) % heroSlides.length;
          if (!unavailableSlides.has(heroSlides[next].id)) return next;
        }
        return current;
      });
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(timer);
  }, [unavailableSlides]);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-deep-green text-white md:min-h-[100dvh]"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {heroSlides.map((slide, index) =>
          unavailableSlides.has(slide.id) ? null : (
            <Image
              key={slide.id}
              src={slide.src}
              alt=""
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className={`object-cover object-[43%_center] transition-opacity duration-1000 motion-reduce:transition-none sm:object-center ${
                index === activeSlide ? "opacity-100 hero-kenburns" : "opacity-0"
              }`}
              onError={() => {
                setUnavailableSlides((current) => {
                  const next = new Set(current);
                  next.add(slide.id);
                  return next;
                });
                if (index === activeSlide) {
                  setActiveSlide((index + 1) % heroSlides.length);
                }
              }}
            />
          ),
        )}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,34,31,.97)_0%,rgba(6,34,31,.88)_40%,rgba(6,34,31,.42)_72%,rgba(6,34,31,.2)_100%)] rtl:bg-[linear-gradient(270deg,rgba(6,34,31,.97)_0%,rgba(6,34,31,.88)_40%,rgba(6,34,31,.42)_72%,rgba(6,34,31,.2)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-green/82 via-transparent to-black/10" />

      <div className="shell relative z-10 flex min-h-[100svh] items-center pt-[78px] pb-16 sm:pt-[84px] sm:pb-[4.25rem] md:min-h-[100dvh] lg:pt-[90px]">
        <div className="max-w-[min(820px,100%)] py-6 sm:max-w-[740px] sm:py-8 lg:max-w-[820px] lg:py-10">
          <p className="eyebrow mb-3 text-gold sm:mb-4">{t(copy.hero.eyebrow)}</p>
          <h1 className="max-w-[18ch] text-[clamp(1.9rem,8vw,2.9rem)] leading-[1.13] font-bold tracking-[-0.025em] text-balance text-white sm:max-w-[19ch] sm:text-[clamp(2.65rem,5.8vw,3.55rem)] sm:leading-[1.08] lg:max-w-[17ch] lg:text-[clamp(3.2rem,3.85vw,3.85rem)] rtl:max-w-[19ch] rtl:leading-[1.2] rtl:tracking-[-0.01em] sm:rtl:leading-[1.15]">
            {t(copy.hero.title)}
          </h1>
          <p className="mt-3 max-w-[36rem] text-sm leading-7 text-white/78 sm:mt-4 sm:max-w-2xl sm:text-[1rem] sm:leading-8">
            {t(copy.hero.text)}
          </p>

          <ul
            className="mt-4 flex max-w-[38rem] flex-wrap gap-2 sm:mt-5 sm:max-w-2xl sm:gap-2"
            aria-label={t({
              en: "Service highlights",
              ar: "مزايا الخدمة",
            })}
          >
            {copy.hero.badges.map((badge) => (
              <li
                key={badge.en}
                className="inline-flex min-h-8 items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-2.5 py-1 text-[10.5px] font-semibold leading-tight text-white/86 backdrop-blur-md sm:min-h-9 sm:px-3 sm:py-1.5 sm:text-[11.5px]"
              >
                <BadgeCheck size={15} className="shrink-0 text-gold" />
                {t(badge)}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-primary group w-full sm:w-auto"
            >
              <MessageCircle size={18} />
              {t(copy.hero.primary)}
            </a>
            <a href="#gallery" className="btn-secondary group w-full sm:w-auto">
              {t(copy.hero.secondary)}
              <Arrow
                size={17}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-5 z-20 flex justify-center gap-2"
        aria-label={t({ ar: "شرائح صور الخدمات", en: "Service image slides" })}
      >
        {heroSlides.map((slide, index) =>
          unavailableSlides.has(slide.id) ? null : (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={t({
                ar: `عرض ${slide.titleAr}`,
                en: `Show ${slide.titleEn}`,
              })}
              aria-current={index === activeSlide ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-deep-green ${
                index === activeSlide
                  ? "w-8 bg-gold"
                  : "w-4 bg-white/45 hover:bg-white/75"
              }`}
            />
          ),
        )}
      </div>
    </section>
  );
}
