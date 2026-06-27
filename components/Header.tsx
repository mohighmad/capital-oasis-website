"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, navItems } from "@/data/content";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";
import { BrandLogo } from "./BrandLogo";

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function closeMenuAndFollowHash(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    setOpen(false);
    if (!href.startsWith("#")) return;

    event.preventDefault();
    window.history.pushState(null, "", href);

    window.setTimeout(() => {
      const target = document.querySelector(href);
      target?.scrollIntoView({ block: "start" });
    }, 80);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${
        scrolled
          ? "bg-deep-green/98 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-deep-green/55 backdrop-blur-md"
      }`}
    >
      <div className="shell flex h-[68px] items-center justify-between gap-4">
        <a
          href="#home"
          className="group flex h-full shrink-0 items-center gap-3 py-2"
          aria-label={t(company.name)}
        >
          <BrandLogo
            priority
            variant="dark"
            className="block h-auto max-h-11 w-auto max-w-[132px] sm:max-h-12 sm:max-w-[148px]"
          />
        </a>

        <nav
          className="hidden items-center gap-7 xl:flex"
          aria-label={t({ en: "Primary navigation", ar: "التنقل الرئيسي" })}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative whitespace-nowrap py-3 text-[13px] font-bold tracking-[0.01em] text-white/80 transition after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-center after:scale-x-0 after:bg-gold after:transition-transform hover:text-white hover:after:scale-x-100 rtl:tracking-normal"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <LanguageToggle compact />
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-primary min-h-10 px-4 py-2 text-xs shadow-none"
          >
            <MessageCircle size={16} />
            {t({ en: "WhatsApp", ar: "واتساب" })}
          </a>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-xl border border-white/15 bg-white/[0.04] text-white xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? t({ en: "Close menu", ar: "إغلاق القائمة" }) : t({ en: "Open menu", ar: "فتح القائمة" })}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="menu-in max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-white/10 bg-deep-green/98 px-4 pb-5 shadow-2xl backdrop-blur-xl xl:hidden"
        >
          <nav
            className="shell grid grid-cols-2 gap-x-5 py-3"
            aria-label={t({ en: "Mobile navigation", ar: "التنقل عبر الجوال" })}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => closeMenuAndFollowHash(event, item.href)}
                className="border-b border-white/10 py-3.5 text-sm font-semibold text-white/88"
              >
                {t(item.label)}
              </a>
            ))}
          </nav>
          <div className="shell mt-2 flex items-center justify-between gap-3">
            <LanguageToggle compact />
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-primary min-h-10 px-4 py-2 text-xs"
            >
              <MessageCircle size={15} />
              {t({ en: "WhatsApp Us", ar: "تواصل واتساب" })}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
