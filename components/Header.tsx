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
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${
        scrolled
          ? "bg-deep-green/98 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-deep-green/55 backdrop-blur-md"
      }`}
    >
      <div className="shell flex h-[68px] items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex h-full shrink-0 items-center gap-3 py-2"
          aria-label={t(company.name)}
        >
          <BrandLogo
            priority
            variant="dark"
            className="block h-auto max-h-11 w-auto max-w-[132px] sm:max-h-12 sm:max-w-[148px]"
          />
        </Link>

        <nav
          className="hidden items-center gap-7 xl:flex"
          aria-label={t({ en: "Primary navigation", ar: "التنقل الرئيسي" })}
        >
          {primaryNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative whitespace-nowrap py-3 text-[13px] font-bold tracking-[0.01em] transition after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-center after:bg-gold after:transition-transform rtl:tracking-normal ${
                isActive(item.href)
                  ? "text-white after:scale-x-100"
                  : "text-white/80 after:scale-x-0 hover:text-white hover:after:scale-x-100"
              }`}
            >
              {t(item.label)}
            </Link>
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
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-white/10 py-3.5 text-sm font-semibold transition ${
                  isActive(item.href) ? "text-gold" : "text-white/88 hover:text-white"
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
