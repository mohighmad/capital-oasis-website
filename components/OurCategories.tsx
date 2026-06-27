"use client";

import Image from "next/image";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { homepageCategories } from "@/data/categories";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function OurCategories() {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="categories" className="section-pad surface-soft bg-paper">
      <div className="shell">
        <div className="mx-auto max-w-[52rem] text-center [&>div]:mx-auto [&_p]:mx-auto">
          <SectionTitle
            eyebrow={{ ar: "تصفح حسب الخدمة", en: "Browse by service" }}
            title={{ ar: "مجالاتنا", en: "Our Categories" }}
            text={{
              ar: "اختر الخدمة التي تناسب مشروعك، من الأبواب والأثاث إلى ديكورات المحلات وديكورات معارض وفعاليات.",
              en: "Choose the service that fits your project, from doors and furniture to commercial decorations and exhibition décor and events.",
            }}
          />
        </div>

        <Reveal className="reveal-stagger mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {homepageCategories.map((category, index) => (
            <a
              key={category.id}
              href={category.href}
              className={`group relative isolate flex min-h-[23rem] overflow-hidden rounded-[1.5rem] border border-deep-green/10 bg-deep-green shadow-[0_18px_46px_rgba(11,59,53,.12)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_24px_58px_rgba(11,59,53,.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 ${
                index === 0 ? "rim-gold card-feature" : ""
              } ${
                index === homepageCategories.length - 1 ? "lg:col-span-3 lg:min-h-[20rem]" : ""
              }`}
              aria-label={t({
                ar: `استكشف ${category.title.ar}`,
                en: `Explore ${category.title.en}`,
              })}
            >
              <Image
                src={category.image}
                alt={t(category.alt)}
                fill
                sizes={
                  index === homepageCategories.length - 1
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 100vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }
                className="object-cover transition duration-700 group-hover:scale-[1.035]"
                style={
                  category.objectPosition
                    ? { objectPosition: category.objectPosition }
                    : undefined
                }
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#031715]/96 via-[#062b27]/48 to-black/18 transition duration-300 group-hover:via-[#062b27]/36" />
              <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(205,164,94,.18),transparent_32%,rgba(255,255,255,.04)_100%)] opacity-70" />
              <span className="relative z-10 mt-auto flex min-h-[15rem] w-full flex-col justify-end p-6 text-white sm:p-7 lg:p-8">
                <span className="text-[10px] leading-none font-extrabold tracking-[0.15em] text-gold uppercase rtl:tracking-normal rtl:normal-case">
                  {t({ ar: "مجال خدمة", en: "Service category" })}
                </span>
                <span className="mt-4 flex min-h-[10.5rem] flex-col justify-between gap-5 sm:min-h-[11.25rem]">
                  <span className="block">
                    <span className="block text-[1.55rem] leading-tight font-bold sm:text-2xl">
                      {t(category.title)}
                    </span>
                    <span className="mt-3 block max-w-[34rem] text-sm leading-7 text-white/76">
                      {t(category.description)}
                    </span>
                  </span>
                  <span className="flex items-center justify-between gap-4">
                    <span className="h-px flex-1 bg-gradient-to-r from-gold/0 via-gold/65 to-gold/0 rtl:bg-gradient-to-l" />
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-gold backdrop-blur-md transition duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-deep-green">
                      <Arrow size={19} aria-hidden="true" />
                    </span>
                  </span>
                </span>
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
