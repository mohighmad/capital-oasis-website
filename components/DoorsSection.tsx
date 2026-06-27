"use client";

import Image from "next/image";
import { Check, DoorOpen, ShieldCheck } from "lucide-react";
import { doorOffer } from "@/data/content";
import { services } from "@/data/services";
import { useLanguage } from "./LanguageProvider";

const doorProjects = [
  {
    image: services[0].image,
    alt: {
      en: "Installed internal wood-finish doors by Capital Oasis",
      ar: "أبواب خشبية بتشطيب خشبي نفذتها كابيتال واسي",
    },
  },
  {
    image: "/images/capital-oasis/doors/door-project-09.jpg",
    alt: {
      en: "Wide double wooden doors with dark wood finish",
      ar: "أبواب خشبية مزدوجة بتشطيب خشبي داكن",
    },
  },
  {
    image: "/images/capital-oasis/doors/door-project-11.jpg",
    alt: {
      en: "Wooden doors integrated with custom residential and hotel furniture",
      ar: "أبواب خشبية مدمجة مع أثاث سكني وفندقي مخصص",
    },
  },
];

export function DoorsSection() {
  const { t } = useLanguage();
  const doors = services[0];

  return (
    <section id="doors" className="section-pad wood-grain bg-forest text-white">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="grid min-w-0 grid-cols-2 gap-3">
            <div className="image-reveal arch-frame rim-gold card-feature relative col-span-2 aspect-[4/3] overflow-hidden border border-white/10 sm:aspect-[16/10]">
              <Image
                src={doorProjects[0].image}
                alt={t(doorProjects[0].alt)}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-deep-green/85 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                <p className="text-xs font-bold text-gold">
                  {t({ en: "Complete door systems", ar: "أنظمة أبواب متكاملة" })}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  {t({
                    en: "Frames, locks, accessories, supply, and installation.",
                    ar: "إطارات وأقفال وإكسسوارات وتوريد وتركيب.",
                  })}
                </p>
              </div>
            </div>
            {doorProjects.slice(1).map((project) => (
              <div
                key={project.image}
                className="card-support relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <Image
                  src={project.image}
                  alt={t(project.alt)}
                  fill
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="object-cover object-center transition duration-700 hover:scale-[1.035]"
                />
              </div>
            ))}
          </div>

          <div>
            <p className="eyebrow mb-6 text-gold">{t({ en: "Doors", ar: "الأبواب" })}</p>
            <h2 className="text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.02] font-bold tracking-[-0.055em] text-white rtl:leading-[1.16] rtl:tracking-[-0.02em]">
              {t({ en: "Doors Supply & Installation", ar: "توريد وتركيب الأبواب" })}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">{t(doors.description)}</p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {doors.products.map((product) => (
                <div
                  key={product.en}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3.5"
                >
                  <DoorOpen size={17} className="shrink-0 text-gold" />
                  <span className="text-xs font-bold text-white/88">{t(product)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h3 className="text-xl font-bold">
              {t({ en: "Performance benefits", ar: "مزايا عملية تدوم" })}
            </h3>
            <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {doors.features.map((feature) => (
                <li
                  key={feature.en}
                  className="flex items-center gap-3 text-sm font-semibold text-white/78"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Check size={15} />
                  </span>
                  {t(feature)}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gold/25 bg-gold/[0.08] p-6">
            <ShieldCheck size={32} className="text-gold" />
            <p className="mt-5 text-xs font-bold tracking-[0.12em] text-gold uppercase rtl:tracking-normal">
              {t({ en: "Selected product warranty", ar: "ضمان المنتجات المختارة" })}
            </p>
            <p className="mt-3 text-sm leading-7 font-semibold text-white/82">{t(doorOffer.warranty)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
