"use client";

import type { SVGProps } from "react";
import {
  ArrowUpLeft,
  ArrowUpRight,
  ExternalLink,
  Globe2,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { company } from "@/data/content";
import { BrandLogo } from "./BrandLogo";
import { useLanguage } from "./LanguageProvider";

type GalleryTab = "designs" | "portfolio" | "offers";

const usefulLinks = [
  { href: "#home", label: { ar: "الرئيسية", en: "Home" } },
  { href: "#services", label: { ar: "خدماتنا", en: "Services" } },
  { href: "#gallery", label: { ar: "أعمالنا", en: "Portfolio" }, galleryTab: "portfolio" },
  { href: "#gallery", label: { ar: "التصميمات", en: "Designs" }, galleryTab: "designs" },
  { href: "#gallery", label: { ar: "العروض", en: "Offers" }, galleryTab: "offers" },
  { href: "#contact", label: { ar: "تواصل معنا", en: "Contact" } },
] satisfies {
  href: string;
  label: { ar: string; en: string };
  galleryTab?: GalleryTab;
}[];

const categories = [
  { href: "#doors", label: { ar: "الأبواب", en: "Doors" } },
  { href: "#furniture", label: { ar: "المطابخ", en: "Kitchens" } },
  { href: "#furniture", label: { ar: "غرف الملابس", en: "Dressing Rooms" } },
  { href: "#furniture", label: { ar: "وحدات التلفزيون", en: "TV Units" } },
  { href: "#commercial", label: { ar: "ديكورات المحلات", en: "Commercial Decorations" } },
  { href: "#events", label: { ar: "ديكورات معارض وفعاليات", en: "Exhibition Decor & Events" } },
];

const phoenixflow = {
  logo: "/images/phoenixflow/vector-logo-for-site.svg",
  callHref: "tel:+966564722313",
  whatsappHref: "https://wa.me/966564722313",
  instagramHref: "https://www.instagram.com/phoen.ixflow",
  websiteHref: "https://phoenixflow.dev/",
  credit: {
    ar: "استراتيجية وتصميم وتنفيذ الموقع بواسطة Phoenixflow",
    en: "Website Strategy, Design & Execution by Phoenixflow",
  },
  descriptor: {
    ar: "حلول تطوير ونمو الأعمال",
    en: "Business Development & Growth Solutions",
  },
  contactLabel: {
    ar: "وسائل التواصل مع Phoenixflow",
    en: "Phoenixflow contact links",
  },
  callLabel: {
    ar: "اتصل بـ Phoenixflow",
    en: "Call Phoenixflow",
  },
  whatsappLabel: {
    ar: "تواصل مع Phoenixflow عبر واتساب",
    en: "Contact Phoenixflow on WhatsApp",
  },
  instagramLabel: {
    ar: "زيارة حساب Phoenixflow على إنستجرام",
    en: "Visit Phoenixflow on Instagram",
  },
  websiteLabel: {
    ar: "Ø²ÙŠØ§Ø±Ø© Ù…ÙˆÙ‚Ø¹ Phoenixflow",
    en: "Visit Phoenixflow website",
  },
  copyright: {
    ar: "Phoenixflow",
    en: "Phoenixflow",
  },
};

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.75" />
      <circle cx="17.25" cy="6.75" r="0.85" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;
  const stackAlignment =
    isArabic
      ? "items-center text-center sm:items-end sm:text-end"
      : "items-center text-center sm:items-start sm:text-start";
  const sectionAlignment = isArabic ? "text-center sm:text-end" : "text-center sm:text-start";
  const actionAlignment =
    isArabic
      ? "justify-center sm:justify-end"
      : "justify-center sm:justify-start";
  const footerLinkTextAlignment = isArabic ? "flex-1 text-right leading-6" : "flex-1 text-left leading-6";
  const contactTextAlignment = isArabic ? "min-w-0 flex-1 text-right" : "min-w-0 flex-1 text-left";

  function openGalleryTab(tab?: GalleryTab) {
    if (!tab) return;
    window.dispatchEvent(new CustomEvent("capital-oasis:gallery-tab", { detail: tab }));
  }

  return (
    <footer className="wood-grain bg-[#06231F] text-white">
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[0.95fr_1.18fr_0.78fr_0.88fr_1.02fr] lg:gap-8 xl:gap-10">
          <div className={`order-5 flex flex-col gap-4 ${stackAlignment}`}>
            <div className="relative isolate inline-flex">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0.5 top-1/2 -z-10 h-[116px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(6,5,4,0.96)_0%,rgba(6,5,4,0.54)_46%,rgba(6,5,4,0)_80%)] blur-[31px] sm:h-[134px]"
              />
              <img
                src={phoenixflow.logo}
                alt="Phoenixflow logo"
                className="relative h-auto w-[146px] object-contain opacity-[0.98] [filter:drop-shadow(0_19px_36px_rgba(0,0,0,0.6))] sm:w-[158px] lg:w-[170px]"
              />
            </div>

            <div className="space-y-2">
              <p className="text-[13px] font-semibold leading-6 text-[#E7D2A4] sm:text-sm">
                {t(phoenixflow.credit)}
              </p>
              <p className="text-[11px] font-medium leading-5 tracking-[0.015em] text-[#C39A61] sm:text-xs">
                {t(phoenixflow.descriptor)}
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-2 ${actionAlignment}`}
              aria-label={t(phoenixflow.contactLabel)}
            >
              <a
                href={phoenixflow.websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  isArabic
                    ? "\u0632\u064A\u0627\u0631\u0629 \u0645\u0648\u0642\u0639 Phoenixflow"
                    : "Visit Phoenixflow website"
                }
                className="inline-flex size-10 items-center justify-center rounded-full border border-[#B38954]/38 bg-white/[0.035] text-[#E7D2A4] shadow-[0_12px_28px_-18px_rgba(0,0,0,0.85)] transition hover:-translate-y-0.5 hover:border-[#D7B37A] hover:bg-[#B38954]/10 hover:text-white"
              >
                <Globe2 size={15} aria-hidden="true" />
              </a>
              <a
                href={phoenixflow.callHref}
                aria-label={t(phoenixflow.callLabel)}
                className="inline-flex size-10 items-center justify-center rounded-full border border-[#B38954]/38 bg-white/[0.035] text-[#E7D2A4] shadow-[0_12px_28px_-18px_rgba(0,0,0,0.85)] transition hover:-translate-y-0.5 hover:border-[#D7B37A] hover:bg-[#B38954]/10 hover:text-white"
              >
                <Phone size={15} aria-hidden="true" />
              </a>
              <a
                href={phoenixflow.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(phoenixflow.whatsappLabel)}
                className="inline-flex size-10 items-center justify-center rounded-full border border-[#B38954]/38 bg-white/[0.035] text-[#E7D2A4] shadow-[0_12px_28px_-18px_rgba(0,0,0,0.85)] transition hover:-translate-y-0.5 hover:border-[#D7B37A] hover:bg-[#B38954]/10 hover:text-white"
              >
                <MessageCircle size={15} aria-hidden="true" />
              </a>
              <a
                href={phoenixflow.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(phoenixflow.instagramLabel)}
                className="inline-flex size-10 items-center justify-center rounded-full border border-[#B38954]/38 bg-white/[0.035] text-[#E7D2A4] shadow-[0_12px_28px_-18px_rgba(0,0,0,0.85)] transition hover:-translate-y-0.5 hover:border-[#D7B37A] hover:bg-[#B38954]/10 hover:text-white"
              >
                <InstagramIcon className="size-[15px]" />
              </a>
            </div>

          </div>

          <div className={`order-1 ${sectionAlignment}`}>
            <a
              href="#home"
              className="inline-flex rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={t({ ar: "العودة إلى الرئيسية", en: "Back to homepage" })}
            >
              <BrandLogo
                variant="dark"
                className="block h-auto max-h-28 w-auto max-w-[188px] sm:max-h-32 sm:max-w-[210px]"
              />
            </a>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              {t({
                ar: "كابيتال واسي شركة متخصصة في تصنيع وتوريد الأبواب والأثاث، ديكورات المحلات التجارية، ديكورات المعارض والفعاليات المختلفة.",
                en: "Capital Oasis specializes in doors and furniture manufacturing and supply, hotel furniture, commercial shop decorations, exhibition decor, and event solutions.",
              })}
            </p>

            <div
              className={`mt-6 flex flex-wrap gap-3 ${actionAlignment}`}
              aria-label={t({ ar: "وسائل التواصل المؤكدة", en: "Confirmed contact channels" })}
            >
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 text-xs font-bold text-white/80 transition hover:border-gold/60 hover:bg-gold hover:text-deep-green"
              >
                <MessageCircle size={17} aria-hidden="true" />
                {t({ ar: "واتساب", en: "WhatsApp" })}
              </a>
              <a
                href={company.phoneHref}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 text-xs font-bold text-white/80 transition hover:border-gold/60 hover:bg-white/10 hover:text-gold"
              >
                <Phone size={16} aria-hidden="true" />
                {t({ ar: "اتصال", en: "Call" })}
              </a>
            </div>
          </div>

          <div className={`order-2 ${sectionAlignment}`} dir={isArabic ? "rtl" : "ltr"}>
            <h2 className="text-sm font-extrabold text-white">
              {t({ ar: "روابط مفيدة", en: "Useful Links" })}
            </h2>
            <nav className="mt-5 grid gap-1" aria-label={t({ ar: "روابط التذييل", en: "Footer links" })}>
              {usefulLinks.map((item) => (
                <a
                  key={`${item.label.en}-${item.galleryTab ?? item.href}`}
                  href={item.href}
                  onClick={() => openGalleryTab(item.galleryTab)}
                  className="group flex min-h-9 items-center justify-between gap-3 rounded-lg px-2 text-sm font-semibold text-white/58 transition hover:bg-white/[0.05] hover:text-gold"
                >
                  <span className={footerLinkTextAlignment}>{t(item.label)}</span>
                  <Arrow
                    size={14}
                    className="shrink-0 opacity-0 transition group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>
          </div>

          <div className={`order-3 ${sectionAlignment}`} dir={isArabic ? "rtl" : "ltr"}>
            <h2 className="text-sm font-extrabold text-white">
              {t({ ar: "التصنيفات", en: "Categories" })}
            </h2>
            <nav className="mt-5 grid gap-1" aria-label={t({ ar: "تصنيفات الخدمات", en: "Service categories" })}>
              {categories.map((item) => (
                <a
                  key={item.label.en}
                  href={item.href}
                  className="group flex min-h-9 items-center justify-between gap-3 rounded-lg px-2 text-sm font-semibold text-white/58 transition hover:bg-white/[0.05] hover:text-gold"
                >
                  <span className={footerLinkTextAlignment}>{t(item.label)}</span>
                  <Arrow
                    size={14}
                    className="shrink-0 opacity-0 transition group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>
          </div>

          <div className={`order-4 ${sectionAlignment}`} dir={isArabic ? "rtl" : "ltr"}>
            <h2 className="text-sm font-extrabold text-white">
              {t({ ar: "بيانات التواصل", en: "Contact" })}
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/65">
              <li>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-10 items-start gap-3 rounded-xl transition hover:text-gold sm:items-center"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold/12 text-gold">
                    <MessageCircle size={17} aria-hidden="true" />
                  </span>
                  <span className={contactTextAlignment}>
                    <span className="block text-[10px] font-bold tracking-wide text-white/40 uppercase">
                      WhatsApp
                    </span>
                    <span dir="ltr" className="font-bold">{company.phoneDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={company.additionalPhoneHref}
                  className="flex min-h-10 items-start gap-3 rounded-xl transition hover:text-gold sm:items-center"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold/12 text-gold">
                    <Phone size={17} aria-hidden="true" />
                  </span>
                  <span className={contactTextAlignment}>
                    <span className="block text-[10px] font-bold tracking-wide text-white/40 uppercase">
                      {t({ ar: "اتصال هاتفي", en: "Phone / Call" })}
                    </span>
                    <span dir="ltr" className="font-bold">{company.additionalPhone}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold/12 text-gold">
                  <MapPin size={17} aria-hidden="true" />
                </span>
                <span className={`${contactTextAlignment} pt-1.5`}>{t(company.location)}</span>
              </li>
              <li>
                <a
                  href={`https://${company.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-10 items-start gap-3 rounded-xl transition hover:text-gold sm:items-center"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold/12 text-gold">
                    <Globe2 size={17} aria-hidden="true" />
                  </span>
                  <span className={contactTextAlignment}>
                    <span dir="ltr">{company.websiteDisplay}</span>
                  </span>
                  <ExternalLink size={13} className="text-white/35" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-7 text-center text-xs text-white/38">
          <div className="space-y-2">
            <p>
              © {new Date().getFullYear()} {t(phoenixflow.copyright)}.{" "}
              {t({ ar: "جميع الحقوق محفوظة.", en: "All rights reserved." })}
            </p>
            <p>{t(company.legalName)}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
