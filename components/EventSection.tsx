"use client";

import Image from "next/image";
import {
  Armchair,
  Lamp,
  LayoutTemplate,
  MessageCircle,
  PartyPopper,
  Sparkles,
  SquareStack,
  TentTree,
} from "lucide-react";
import { assets } from "@/data/assets";
import { company } from "@/data/content";
import { useLanguage } from "./LanguageProvider";

const eventServices = [
  { icon: PartyPopper, en: "Exhibition and event decoration", ar: "ديكورات معارض وفعاليات" },
  { icon: LayoutTemplate, en: "Backdrops and visual walls", ar: "خلفيات وجدران بصرية" },
  { icon: Armchair, en: "Seating and reception setup", ar: "تجهيز جلسات واستقبال" },
  { icon: TentTree, en: "Stages and entrances", ar: "منصات ومداخل" },
  { icon: Lamp, en: "Lighting and decoration", ar: "إضاءة وديكور" },
  { icon: SquareStack, en: "Exhibition and event furniture", ar: "أثاث معارض وفعاليات" },
  { icon: Sparkles, en: "Custom setup based on event identity", ar: "تنفيذ حسب هوية المناسبة" },
];

const heroImages = [
  {
    image: assets.exhibitionsEvents.processed[5],
    alt: {
      en: "Illuminated event stage with balanced decor and a level visual composition",
      ar: "منصة فعالية مضاءة بتنسيق ديكور متوازن وتكوين بصري ثابت",
    },
  },
  {
    image: assets.exhibitionsEvents.processed[7],
    alt: {
      en: "Illuminated event entrance with refined decorative details",
      ar: "مدخل فعالية مضاء بتفاصيل ديكورية أنيقة",
    },
  },
  {
    image: assets.exhibitionsEvents.processed[2],
    alt: {
      en: "Custom illuminated entrance for an exhibition or event",
      ar: "مدخل مضاء مخصص لمعرض أو فعالية",
    },
  },
];

export function EventSection() {
  const { t } = useLanguage();

  return (
    <section id="events" className="section-pad surface-soft bg-warm-beige">
      <div className="shell">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow mb-5">
                {t({ en: "Exhibition Decor & Events", ar: "ديكورات معارض وفعاليات" })}
              </p>
              <h2 className="max-w-2xl text-[clamp(2.15rem,4.2vw,3.85rem)] leading-[1.08] font-bold tracking-[-0.04em] text-forest rtl:leading-[1.18] rtl:tracking-[-0.01em]">
                {t({ en: "Exhibition Decor & Events", ar: "ديكورات معارض وفعاليات" })}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/68 sm:text-lg">
                {t({
                  en: "We provide exhibition and event decor solutions, from backdrops, entrances, and seating to lighting and space preparation with an organized style that reflects the event identity.",
                  ar: "نقدم حلول ديكورات المعارض والفعاليات المختلفة، من الخلفيات والمداخل والجلسات إلى الإضاءة وتجهيز المساحات بأسلوب منظم يعكس هوية المناسبة.",
                })}
              </p>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-extrabold text-deep-green shadow-[0_12px_30px_rgba(201,154,74,.2)] transition hover:bg-[#d8aa5b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-warm-beige"
                aria-label={t({
                  ar: "احصل على عرض سعر لديكورات المعارض والفعاليات عبر واتساب",
                  en: "Get a quote for exhibition and event decor on WhatsApp",
                })}
              >
                <MessageCircle size={18} aria-hidden="true" />
                {t({ ar: "احصل على عرض سعر", en: "Get a Quote" })}
              </a>
            </div>

            <div className="grid gap-3 rounded-[1.6rem] border border-forest/10 bg-ivory/82 p-4 shadow-[0_18px_50px_rgba(11,59,53,.08)] sm:grid-cols-2 sm:p-5">
              {eventServices.slice(0, 3).map(({ icon: Icon, en, ar }) => (
                <div
                  key={en}
                  className="flex min-h-20 items-center gap-3 rounded-2xl border border-deep-green/10 bg-white/74 p-4 shadow-[0_10px_26px_rgba(11,59,53,.05)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/35"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-deep-green/8 text-gold">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-6 font-bold text-forest">{t({ en, ar })}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <figure className="card-feature group relative aspect-[4/3] overflow-hidden rounded-[1.4rem] border border-forest/12 bg-deep-green lg:min-h-[28rem]">
              <Image
                src={heroImages[0].image}
                alt={t(heroImages[0].alt)}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/62 via-deep-green/8 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-sm font-bold text-gold">
                  {t({ en: "Real exhibition decor and event work", ar: "من أعمال ديكورات معارض وفعاليات" })}
                </p>
              </figcaption>
            </figure>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {heroImages.slice(1).map((item) => (
                <figure
                  key={item.image}
                  className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-forest/12 bg-deep-green shadow-[0_14px_36px_rgba(11,59,53,.11)]"
                >
                  <Image
                    src={item.image}
                    alt={t(item.alt)}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06231f]/42 via-transparent to-transparent" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
