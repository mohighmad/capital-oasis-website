"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "@/data/content";
import { primaryNavItems } from "@/data/sections";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";
import { BrandLogo } from "./BrandLogo";

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href;
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b text-white transition-all duration-300 ${
        scrolled
          ? "border-gold/14 bg-[#06231F]/96 shadow-[0_18px_44px_rgba(4,26,24,0.16)] backdrop-blur-xl"
          : "border-white/10 bg-[#06231F]/72 shadow-[0_12px_34px_rgba(4,26,24,0.08)] backdrop-blur-md"
      }`}
    >
      <div className="shell flex h-[112px] items-center justify-between gap-4 xl:h-[104px] xl:gap-3">
        <Link
          href="/"
          className="group flex h-full shrink-0 items-center gap-3 rounded-2xl py-2 xl:py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label={t(company.name)}
        >
          <BrandLogo
            priority
            variant="dark"
            className="header-logo-align-fix block h-auto max-h-[72px] w-auto max-w-[264px] sm:max-h-[84px] sm:max-w-[318px] xl:max-h-[95px] xl:max-w-[358px]"
          />
        </Link>

        <nav
          className="header-controls-optical-align hidden items-center gap-1.5 xl:flex"
          aria-label={t({ en: "Primary navigation", ar: "التنقل الرئيسي" })}
        >
          {primaryNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center justify-center whitespace-nowrap rounded-full px-2.5 py-2 text-center text-[0.72rem] font-extrabold leading-tight tracking-[0.01em] transition duration-300 after:absolute after:inset-x-2.5 after:bottom-1 after:h-px after:origin-center after:bg-gold after:transition-transform rtl:tracking-normal ${
                isActive(item.href)
                  ? "bg-white/[0.075] text-gold after:scale-x-100"
                  : "text-white/78 after:scale-x-0 hover:bg-white/[0.055] hover:text-white hover:after:scale-x-100"
              }`}
            >
              <span className="block w-full text-center">{t(item.label)}</span>
            </Link>
          ))}
        </nav>

        <div className="header-controls-optical-align hidden shrink-0 items-center gap-[6px] xl:flex">
          <LanguageToggle compact dense />
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-primary min-h-[30px] px-3 py-[6px] text-[0.62rem] font-extrabold shadow-none"
          >
            <MessageCircle size={12} />
            {t({ en: "WhatsApp", ar: "واتساب" })}
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-2xl border border-white/14 bg-white/[0.055] text-white shadow-[0_14px_30px_rgba(4,26,24,0.16)] transition hover:border-gold/50 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold xl:hidden"
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
          className="menu-in max-h-[calc(100dvh-112px)] overflow-y-auto border-t border-white/10 bg-[#06231F]/98 px-4 pb-5 shadow-2xl backdrop-blur-xl xl:hidden"
        >
          <nav
            className="shell grid grid-cols-2 gap-2 py-4"
            aria-label={t({ en: "Mobile navigation", ar: "التنقل عبر الجوال" })}
          >
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl border px-3 py-3 text-sm font-bold leading-6 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  isActive(item.href)
                    ? "border-gold/28 bg-gold/10 text-gold"
                    : "border-white/9 bg-white/[0.035] text-white/84 hover:border-white/18 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>
          <div className="shell mt-2 flex items-center justify-between gap-3">
            <LanguageToggle compact />
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-primary min-h-10 px-4 py-2 text-[0.78rem] font-extrabold"
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
