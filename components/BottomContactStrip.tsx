"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";
import { company } from "@/data/content";
import { useLanguage } from "./LanguageProvider";

export function BottomContactStrip() {
  const { t } = useLanguage();

  return (
    <aside
      className="border-b border-white/10 bg-deep-green py-5 text-white"
      aria-label={t({ en: "Quick contact information", ar: "معلومات التواصل السريع" })}
    >
      <div className="shell grid gap-3 sm:grid-cols-2 lg:grid-cols-[auto_auto_1fr] lg:items-center lg:gap-8">
        <a
          href={company.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-bold text-white/80 transition hover:bg-white/[0.06] hover:text-gold"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
            <MessageCircle size={18} aria-hidden="true" />
          </span>
          <span dir="ltr">{company.phoneDisplay}</span>
        </a>

        <a
          href={company.additionalPhoneHref}
          className="flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-bold text-white/80 transition hover:bg-white/[0.06] hover:text-gold"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
            <Phone size={18} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-[10px] font-bold text-white/45 uppercase">
              {t({ en: "Phone / Call", ar: "اتصال هاتفي" })}
            </span>
            <span dir="ltr">{company.additionalPhone}</span>
          </span>
        </a>

        <div className="flex min-h-11 items-start gap-3 rounded-xl px-3 text-sm leading-6 font-semibold text-white/70 sm:col-span-2 lg:col-span-1 lg:justify-self-end">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
            <MapPin size={18} aria-hidden="true" />
          </span>
          <span>{t(company.location)}</span>
        </div>
      </div>
    </aside>
  );
}
