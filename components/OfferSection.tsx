"use client";

import Image from "next/image";
import {
  ArrowUpLeft,
  ArrowUpRight,
  BadgePercent,
  Check,
  DoorOpen,
} from "lucide-react";
import { assets } from "@/data/assets";
import { company, doorOffer } from "@/data/content";
import { useLanguage } from "./LanguageProvider";

export function OfferSection() {
  const { t, language } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;
  const offerImage = assets.doors.featured;

  return (
    <section className="surface-soft bg-paper py-20" aria-labelledby="door-offer-title">
      <div className="shell">
        <div className="overflow-hidden rounded-[1.75rem] border border-deep-green/10 bg-white shadow-[0_22px_65px_rgba(11,59,53,.1)]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="flex items-center gap-3 text-gold">
                <BadgePercent size={25} aria-hidden="true" />
                <p className="text-xs font-extrabold tracking-[0.16em] uppercase rtl:tracking-normal">
                  {t({
                    en: "Project quantity offer",
                    ar: "عرض خاص للمشاريع والكميات",
                  })}
                </p>
              </div>

              <h2
                id="door-offer-title"
                className="mt-5 max-w-2xl text-3xl leading-tight font-bold tracking-[-0.035em] text-deep-green sm:text-4xl"
              >
                {t(doorOffer.title)}
              </h2>

              <ul className="mt-7 grid gap-4">
                {doorOffer.conditions.map((condition) => (
                  <li
                    key={condition.en}
                    className="flex items-start gap-3 text-sm leading-7 text-charcoal/70 sm:text-base"
                  >
                    <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-deep-green text-white">
                      <Check size={14} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {t(condition)}
                  </li>
                ))}
              </ul>

              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-primary group mt-9 w-fit"
              >
                {t({ en: "Get a Quote", ar: "احصل على عرض سعر" })}
                <Arrow
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden bg-deep-green p-8 text-white sm:p-10 lg:min-h-[450px] lg:p-12">
              <Image
                src={offerImage}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover object-center opacity-28"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,35,31,.95),rgba(6,35,31,.78)_48%,rgba(6,35,31,.5))]" />
              <div className="absolute inset-6 rounded-[1.35rem] border border-gold/18" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -bottom-32 -left-24 size-80 rounded-full border border-gold/20" />
              <DoorOpen
                className="relative size-12 text-gold"
                strokeWidth={1.4}
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-sm font-bold tracking-[0.12em] text-white/58">
                  WPC &amp; PVC
                </p>
                <p className="mt-4 max-w-md text-3xl leading-tight font-bold text-gold drop-shadow-sm sm:text-4xl">
                  {t(doorOffer.price)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
