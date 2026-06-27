"use client";

import Image from "next/image";
import { Check, Store } from "lucide-react";
import { assets } from "@/data/assets";
import { services } from "@/data/services";
import { useLanguage } from "./LanguageProvider";

const commercial = services[2];
const commercialProjects = [
  {
    image: assets.commercial.featured,
    alt: {
      en: "Custom retail display island completed by Capital Oasis",
      ar: "جزيرة عرض تجارية مخصصة نفذتها كابيتال واسي",
    },
  },
  {
    image: assets.commercial.decorations[0],
    alt: {
      en: "Completed shop interior with custom display units and counters",
      ar: "ديكور محل مكتمل بوحدات عرض وكاونترات مخصصة",
    },
  },
  {
    image: assets.commercial.restaurants[1],
    alt: {
      en: "Restaurant fit-out with custom counters and wood partitions",
      ar: "تجهيز مطعم بكاونترات وقواطع خشبية مخصصة",
    },
  },
];

export function CommercialSection() {
  const { t } = useLanguage();

  return (
    <section id="commercial" className="section-pad wood-grain bg-deep-green text-white">
      <div className="shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="grid grid-cols-2 gap-3">
          <div className="image-reveal relative col-span-2 aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 sm:aspect-[16/10]">
            <Image
              src={commercialProjects[0].image}
              alt={t(commercialProjects[0].alt)}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-green/65 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
              <p className="text-sm font-bold text-gold">
                {t({ en: "Stores · Showrooms · Cafes · Offices", ar: "محلات · معارض · مقاهٍ · مكاتب" })}
              </p>
            </div>
          </div>
          {commercialProjects.slice(1).map((project) => (
            <div
              key={project.image}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_14px_38px_rgba(0,0,0,.14)]"
            >
              <Image
                src={project.image}
                alt={t(project.alt)}
                fill
                sizes="(max-width: 1024px) 50vw, 22vw"
                className="object-cover transition duration-700 hover:scale-[1.035]"
              />
            </div>
          ))}
        </div>

        <div>
          <span className="grid size-14 place-items-center rounded-2xl bg-gold/15 text-gold">
            <Store size={26} strokeWidth={1.6} />
          </span>
          <p className="eyebrow mt-7 mb-5 text-gold">{t({ en: "Commercial interiors", ar: "المساحات التجارية" })}</p>
          <h2 className="text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.03] font-bold tracking-[-0.055em] text-white rtl:leading-[1.16] rtl:tracking-[-0.02em]">
            {t(commercial.title)}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            {t(commercial.description)}
          </p>

          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {commercial.products.map((product) => (
              <li
                key={product.en}
                className="flex min-h-20 items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4 text-sm font-bold text-white/85 shadow-[0_14px_34px_rgba(0,0,0,.1)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/35 hover:bg-white/[0.07]"
              >
                <Check size={17} className="mt-0.5 shrink-0 text-gold" strokeWidth={2.2} />
                {t(product)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
