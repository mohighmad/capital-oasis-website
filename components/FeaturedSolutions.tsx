"use client";

import Image from "next/image";
import { Check, MessageCircle } from "lucide-react";
import { company } from "@/data/content";
import { featuredSolutions } from "@/data/solutions";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function FeaturedSolutions() {
  const { t } = useLanguage();

  return (
    <section id="featured-solutions" className="section-pad surface-soft bg-warm-beige">
      <div className="shell">
        <SectionTitle
          eyebrow={{ ar: "حلول حسب احتياج المشروع", en: "Tailored for your project" }}
          title={{ ar: "حلول مميزة", en: "Featured Solutions" }}
          text={{
            ar: "مختارات من خدمات كابيتال واسي للأبواب، الأثاث، الديكورات التجارية، وديكورات معارض وفعاليات.",
            en: "Selected Capital Oasis solutions for doors, furniture, commercial decorations, and exhibition décor and events.",
          }}
        />

        <Reveal className="reveal-stagger mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredSolutions.map((solution) => (
            <article
              key={solution.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-forest/10 bg-white shadow-[0_18px_48px_rgba(11,59,53,.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(11,59,53,.15)]"
            >
              <a
                href={solution.href}
                className="relative block aspect-[16/10] overflow-hidden bg-deep-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                aria-label={t({
                  ar: `استكشف ${solution.title.ar}`,
                  en: `Explore ${solution.title.en}`,
                })}
              >
                <Image
                  src={solution.image}
                  alt={t(solution.alt)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-deep-green/55 via-transparent to-transparent" />
              </a>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-bold text-forest">{t(solution.title)}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/65">{t(solution.description)}</p>

                <ul className="mt-5 space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature.en} className="flex items-start gap-3 text-sm text-ink/75">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-deep-green/8 text-dark-teal">
                        <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-extrabold text-deep-green transition hover:bg-[#d8aa5b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  aria-label={t({
                    ar: `احصل على عرض سعر حول ${solution.title.ar} عبر واتساب`,
                    en: `Get a quote about ${solution.title.en} on WhatsApp`,
                  })}
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  {t({ ar: "احصل على عرض سعر", en: "Get a Quote" })}
                </a>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
