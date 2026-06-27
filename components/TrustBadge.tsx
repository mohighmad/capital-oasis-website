"use client";

import { BadgeCheck } from "lucide-react";
import { company } from "@/data/content";
import { useLanguage } from "./LanguageProvider";

export function TrustBadge({ dark = false }: { dark?: boolean }) {
  const { t } = useLanguage();

  return (
    <div
      className={`inline-flex max-w-md items-center gap-3 rounded-full border px-4 py-2.5 shadow-sm backdrop-blur-md ${
        dark ? "border-forest/15 bg-forest/[0.04] text-forest" : "border-white/20 bg-white/10 text-white"
      }`}
    >
      <BadgeCheck className="shrink-0 text-sand" size={20} strokeWidth={1.8} />
      <span className="text-xs font-semibold leading-5">{t(company.trust)}</span>
    </div>
  );
}
