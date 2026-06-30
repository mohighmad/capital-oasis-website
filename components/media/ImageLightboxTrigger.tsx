"use client";

import { Expand } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

type ImageLightboxTriggerProps = {
  label: string;
  onOpen: (trigger: HTMLButtonElement) => void;
};

export function ImageLightboxTrigger({
  label,
  onOpen,
}: ImageLightboxTriggerProps) {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onOpen(event.currentTarget);
      }}
      className="absolute inset-0 z-20 cursor-zoom-in rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-3 inline-flex min-h-9 items-center gap-2 rounded-full border border-white/15 bg-[rgba(4,18,18,0.7)] px-3 py-1.5 text-[11px] font-extrabold tracking-[0.12em] text-white/92 uppercase shadow-[0_10px_24px_rgba(0,0,0,0.2)] backdrop-blur-md ltr:right-3 rtl:left-3 rtl:tracking-normal rtl:normal-case"
      >
        <Expand size={13} className="text-gold" />
        {t({ en: "View", ar: "عرض" })}
      </span>
    </button>
  );
}
