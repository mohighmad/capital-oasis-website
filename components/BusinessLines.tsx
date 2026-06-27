"use client";

import Image from "next/image";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { copy } from "@/data/content";
import { services } from "@/data/services";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const links = ["#doors", "#furniture", "#commercial", "#events"];

export function BusinessLines() {
  const { t, language } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="services" className="section-pad surface-soft bg-paper">
      <div className="shell">
        <SectionTitle eyebrow={copy.services.eyebrow} title={copy.services.title} text={copy.services.text} />
        <Reveal className="reveal-stagger mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <a
              href={links[index]}
              key={service.number}
              className="group flex overflow-hidden rounded-3xl border border-deep-green/10 bg-white shadow-[0_16px_45px_rgba(11,59,53,.08)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_22px_55px_rgba(11,59,53,.13)]"
            >
              <article className="flex min-h-full w-full flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-warm-beige">
                  <Image
                    src={service.image}
                    alt={t(service.alt)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <span className="absolute top-4 rounded-lg bg-white/92 px-3 py-1.5 text-xs font-extrabold tracking-[0.15em] text-deep-green shadow-sm ltr:left-4 rtl:right-4">
                    {service.number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[1.3rem] leading-snug font-bold text-deep-green">
                    {t(service.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/65">{t(service.short)}</p>
                  <span className="mt-auto flex pt-6 text-gold transition group-hover:text-deep-green">
                    <span className="grid size-9 place-items-center rounded-full border border-current/30">
                      <Arrow size={17} />
                    </span>
                  </span>
                </div>
              </article>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
