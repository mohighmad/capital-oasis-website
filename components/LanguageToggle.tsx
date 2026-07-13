"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle({
  compact = false,
  dense = false,
}: {
  compact?: boolean;
  /** Smaller footprint for the desktop header's 75%-of-current sizing pass.
   * Only used there — the mobile menu's toggle keeps its normal size. */
  dense?: boolean;
}) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/18 bg-white/[0.07] font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,.12)] backdrop-blur-md ${
        dense ? "min-h-[30px] p-0.5 text-[0.68rem]" : "min-h-10 p-1 text-xs"
      }`}
      role="group"
      aria-label={language === "ar" ? "اختيار اللغة" : "Choose language"}
    >
      {(["ar", "en"] as const).map((item) => {
        const active = language === item;
        return (
          <button
            key={item}
            type="button"
            onClick={() => setLanguage(item)}
            className={`rounded-full transition ${dense ? "min-w-[30px] px-2 py-1" : "min-w-10 px-2.5 py-1.5"} ${
              active ? "bg-gold text-deep-green shadow-sm" : "text-white/72 hover:text-white"
            }`}
            aria-pressed={active}
            aria-label={item === "ar" ? "العربية" : "English"}
          >
            {compact ? item.toUpperCase() : item === "ar" ? "AR" : "EN"}
          </button>
        );
      })}
    </div>
  );
}
