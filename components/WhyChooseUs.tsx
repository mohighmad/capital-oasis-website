"use client";

import {
  BadgeCheck,
  Boxes,
  Building2,
  CircleDollarSign,
  Hammer,
  Palette,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

const reasons = [
  {
    icon: BadgeCheck,
    text: {
      en: "NHC approved for supply and installation works",
      ar: "معتمدون لدى NHC لأعمال التوريد والتركيب",
    },
  },
  {
    icon: Hammer,
    text: {
      en: "High-quality manufacturing and installation",
      ar: "جودة عالية في التصنيع والتركيب",
    },
  },
  {
    icon: Boxes,
    text: {
      en: "Custom solutions based on space and need",
      ar: "حلول مخصصة حسب المساحة والاحتياج",
    },
  },
  {
    icon: Palette,
    text: {
      en: "Multiple materials and color options",
      ar: "خامات متعددة وألوان متنوعة",
    },
  },
  {
    icon: Building2,
    text: {
      en: "Residential and commercial project execution",
      ar: "تنفيذ للمشاريع السكنية والتجارية",
    },
  },
  {
    icon: Wrench,
    text: {
      en: "Professional installation team with engineering supervision",
      ar: "فريق تركيب محترف وإشراف هندسي",
    },
  },
  {
    icon: CircleDollarSign,
    text: {
      en: "Competitive pricing for offers and quantity orders",
      ar: "أسعار مناسبة للعروض والكميات",
    },
  },
  {
    icon: ShieldCheck,
    text: {
      en: "Warranty depending on product and offer",
      ar: "ضمان حسب نوع المنتج والعرض",
    },
  },
];

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="section-pad bg-warm-beige">
      <div className="shell">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">{t({ en: "Our difference", ar: "ما يميزنا" })}</p>
          <h2 className="text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.03] font-bold tracking-[-0.055em] text-forest rtl:leading-[1.16] rtl:tracking-[-0.02em]">
            {t({ en: "Why Choose Capital Oasis?", ar: "لماذا تختار كابيتال واسي؟" })}
          </h2>
        </div>

        <Reveal className="reveal-stagger mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, text }, index) => (
            <article
              key={text.en}
              className={`brand-card min-h-52 p-6 ${
                index === 0 ? "card-feature rim-gold bg-warm-beige" : "bg-ivory"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-deep-green text-gold">
                  <Icon size={23} strokeWidth={1.6} />
                </span>
                <span className="text-xs font-extrabold text-forest/20">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-10 text-base leading-7 font-bold text-forest">{t(text)}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
