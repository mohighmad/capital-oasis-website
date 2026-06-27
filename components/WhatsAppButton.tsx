"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "@/data/content";
import { useLanguage } from "./LanguageProvider";

export function WhatsAppButton() {
  const { language } = useLanguage();
  const [hideOnMobileHero, setHideOnMobileHero] = useState(false);
  const label = language === "ar" ? "واتساب" : "WhatsApp";

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 639px)");

    function updateVisibility() {
      setHideOnMobileHero(
        mobileQuery.matches && window.scrollY < window.innerHeight * 0.9,
      );
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    mobileQuery.addEventListener("change", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
      mobileQuery.removeEventListener("change", updateVisibility);
    };
  }, []);

  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noreferrer"
      className={`fixed right-4 bottom-4 z-40 inline-flex min-h-14 items-center gap-2.5 rounded-full bg-[#25D366] px-4 text-sm font-extrabold text-white shadow-xl shadow-black/25 transition hover:-translate-y-1 hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:right-5 sm:bottom-5 rtl:right-auto rtl:left-4 sm:rtl:left-5 ${
        hideOnMobileHero ? "pointer-events-none opacity-0 sm:pointer-events-auto sm:opacity-100" : ""
      }`}
      style={hideOnMobileHero ? { display: "none" } : undefined}
      aria-label={`${label} ${company.phoneDisplay}`}
      aria-hidden={hideOnMobileHero ? true : undefined}
      tabIndex={hideOnMobileHero ? -1 : undefined}
    >
      <MessageCircle size={23} />
      <span>{label}</span>
    </a>
  );
}
