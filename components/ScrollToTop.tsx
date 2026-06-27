"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function ScrollToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setVisible(window.scrollY > 640);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t({ ar: "العودة إلى أعلى الصفحة", en: "Scroll to top" })}
      className={`fixed bottom-4 left-4 z-40 grid size-12 place-items-center rounded-full border border-gold/45 bg-deep-green text-gold shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-dark-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 sm:bottom-5 sm:left-5 rtl:right-4 rtl:left-auto sm:rtl:right-5 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ChevronUp size={21} strokeWidth={2.4} aria-hidden="true" />
    </button>
  );
}
