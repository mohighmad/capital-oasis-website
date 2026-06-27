"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex min-h-10 items-center rounded-full border border-white/18 bg-white/[0.07] p-1 text-xs font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,.12)] backdrop-blur-md"
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
            className={`min-w-10 rounded-full px-2.5 py-1.5 transition ${
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
