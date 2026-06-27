"use client";

import { ClipboardCheck, Factory, MessageSquareText, Ruler, SwatchBook } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const steps = [
  {
    icon: MessageSquareText,
    title: { en: "Consultation", ar: "تواصل واستشارة" },
  },
  {
    icon: Ruler,
    title: { en: "Measurement", ar: "رفع المقاسات" },
  },
  {
    icon: SwatchBook,
    title: { en: "Design & Material Selection", ar: "اختيار التصميم والخامات" },
  },
  {
    icon: Factory,
    title: { en: "Manufacturing or Supply", ar: "التصنيع أو التوريد" },
  },
  {
    icon: ClipboardCheck,
    title: { en: "Installation & Handover", ar: "التركيب والتسليم" },
  },
];

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="section-pad wood-grain bg-forest text-white">
      <div className="shell">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6 text-gold">{t({ en: "Work process", ar: "مراحل العمل" })}</p>
          <h2 className="text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.03] font-bold tracking-[-0.055em] rtl:leading-[1.16] rtl:tracking-[-0.02em]">
            {t({ en: "From consultation to handover.", ar: "من الاستشارة حتى التسليم." })}
          </h2>
        </div>

        <ol className="relative mt-16 grid gap-5 md:grid-cols-5">
          <div className="absolute inset-x-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent md:block" aria-hidden="true" />
          {steps.map(({ icon: Icon, title }, index) => (
            <li key={title.en} className="relative rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm">
              <div className="relative z-10 flex items-center justify-between">
                <span className="grid size-16 place-items-center rounded-2xl border border-gold/30 bg-deep-green text-gold shadow-lg">
                  <Icon size={26} strokeWidth={1.5} />
                </span>
                <span className="text-xs font-extrabold tracking-[0.15em] text-gold/70">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-lg leading-7 font-bold text-white">{t(title)}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
