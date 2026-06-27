"use client";

import { BadgeCheck, Building2 } from "lucide-react";
import { copy } from "@/data/content";
import { useLanguage } from "./LanguageProvider";

export function NHCTrustStrip() {
  const { t } = useLanguage();

  return (
    <section className="bg-ivory py-8" aria-labelledby="nhc-trust-title">
      <div className="shell">
        <div className="grid overflow-hidden rounded-2xl border border-deep-green/10 bg-white shadow-[0_14px_38px_rgba(11,59,53,.08)] lg:grid-cols-2">
          <div className="flex items-start gap-4 bg-deep-green px-5 py-6 text-white sm:px-7">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-gold/35 bg-white/[0.06] text-gold">
              <BadgeCheck size={23} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold tracking-[0.16em] text-gold uppercase rtl:tracking-normal">
                {t({ en: "NHC trust", ar: "اعتماد NHC" })}
              </p>
              <h2 id="nhc-trust-title" className="mt-2 text-base leading-7 font-bold sm:text-lg">
                {t(copy.trustStrip.title)}
              </h2>
            </div>
          </div>

          <div className="flex items-start gap-4 px-5 py-6 sm:px-7 lg:border-s lg:border-deep-green/10">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-warm-beige text-deep-green">
              <Building2 size={22} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold tracking-[0.16em] text-wood-brown uppercase rtl:tracking-normal">
                {t({ en: "Saudi company", ar: "شركة سعودية" })}
              </p>
              <p className="mt-2 text-sm leading-7 font-semibold text-charcoal/70">
                {t({
                  en: "A registered and active Saudi company providing supply, installation, and manufacturing solutions for doors, furniture, residential and hotel furniture, commercial decorations, and exhibition decor and events.",
                  ar: "شركة سعودية مسجلة ونشطة، تقدم حلول توريد وتركيب وتصنيع للأبواب والأثاث السكني والفندقي وديكورات المحلات وديكورات معارض وفعاليات.",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
