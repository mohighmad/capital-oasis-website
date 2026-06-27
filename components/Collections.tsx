"use client";

import Image from "next/image";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { workCollections } from "@/data/solutions";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function Collections() {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="collections" className="wood-grain section-pad bg-deep-green text-white">
      <div className="shell">
        <SectionTitle
          eyebrow={{ ar: "تصفح حسب نوع العمل", en: "Browse by work type" }}
          title={{ ar: "مجموعات الأعمال", en: "Collections" }}
          text={{
            ar: "مجموعات مختارة تساعدك على الوصول بسرعة إلى المجال المناسب لمشروعك.",
            en: "Selected collections that help you quickly reach the right area for your project.",
          }}
          light
        />

        <Reveal className="reveal-stagger mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workCollections.map((collection) => (
            <a
              key={collection.id}
              href={collection.href}
              className="group relative isolate min-w-0 aspect-[4/3] min-h-[16rem] overflow-hidden rounded-3xl border border-white/10 bg-forest shadow-[0_18px_46px_rgba(0,0,0,.18)] transition duration-300 hover:-translate-y-1 hover:border-gold/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-deep-green sm:min-h-[17rem]"
              aria-label={t({
                ar: `استكشف ${collection.title.ar}`,
                en: `Explore ${collection.title.en}`,
              })}
            >
              <Image
                src={collection.image}
                alt={t(collection.alt)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.045]"
                style={
                  collection.objectPosition
                    ? { objectPosition: collection.objectPosition }
                    : undefined
                }
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#031714]/95 via-[#062b27]/30 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-6">
                <span className="min-w-0">
                  <span className="block text-xl font-bold">{t(collection.title)}</span>
                  <span className="mt-2 block [overflow-wrap:anywhere] text-sm leading-6 text-white/68">
                    {t(collection.description)}
                  </span>
                </span>
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-gold backdrop-blur-md transition group-hover:border-gold group-hover:bg-gold group-hover:text-deep-green">
                  <Arrow size={18} aria-hidden="true" />
                </span>
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
