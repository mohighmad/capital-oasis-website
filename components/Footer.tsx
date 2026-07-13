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

const usefulLinks = [
  { href: "/", label: { ar: "الرئيسية", en: "Home" } },
  { href: "/#services", label: { ar: "خدماتنا", en: "Services" } },
  { href: "/#categories", label: { ar: "التصنيفات", en: "Categories" } },
  { href: "/other-services", label: { ar: "خدمات أخرى", en: "Other Services" } },
  { href: "/#contact", label: { ar: "تواصل معنا", en: "Contact" } },
] satisfies {
  href: string;
  label: { ar: string; en: string };
}[];

const categories = [
  { href: "/doors", label: { ar: "الأبواب", en: "Doors" } },
  { href: "/kitchens", label: { ar: "المطابخ", en: "Kitchens" } },
  { href: "/dressing-rooms", label: { ar: "غرفة الملابس", en: "Dressing Rooms" } },
  { href: "/commercial-shops", label: { ar: "ديكورات المحلات", en: "Commercial Decorations" } },
  { href: "/events", label: { ar: "ديكورات معارض وفعاليات", en: "Exhibition Decor & Events" } },
  { href: "/other-services", label: { ar: "خدمات أخرى", en: "Other Services" } },
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
    ar: "زيارة موقع Phoenixflow",
    en: "Visit Phoenixflow website",
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
  const Arrow = isArabic ? ArrowUpLeft : ArrowUpRight;
  const brandAlignment = "items-center text-center";
  const brandActionAlignment = "justify-center";
  const footerLinkTextAlignment = isArabic ? "flex-1 text-right leading-6" : "flex-1 text-left leading-6";
  const contactTextAlignment = isArabic ? "min-w-0 flex-1 text-right" : "min-w-0 flex-1 text-left";
  const columnContainerClass =
    isArabic ? "flex h-full flex-col items-end gap-0.5 text-end" : "flex h-full flex-col items-start gap-0.5 text-start";
  const columnListClass = isArabic ? "mt-4 grid w-full justify-items-end gap-1.5" : "mt-4 grid w-full justify-items-start gap-1.5";
  const contactListClass =
    isArabic
      ? "mt-4 grid w-full justify-items-end gap-2.5 text-[0.92rem] font-medium leading-7 text-white/70"
      : "mt-4 grid w-full justify-items-start gap-2.5 text-[0.92rem] font-medium leading-7 text-white/70";
  const footerHeadingClass =
    isArabic
      ? "w-fit ml-auto text-right text-[0.92rem] font-extrabold tracking-normal text-gold normal-case"
      : "w-fit mr-auto text-left text-[0.82rem] font-extrabold tracking-[0.14em] text-gold uppercase";
  const footerIconClass =
    "inline-flex size-10 items-center justify-center rounded-full border border-[#D4A674]/28 bg-white/[0.055] text-[#E7D2A4] shadow-[0_12px_28px_-18px_rgba(0,0,0,0.85)] transition hover:-translate-y-0.5 hover:border-[#D7B37A] hover:bg-[#B38954]/14 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";
  const footerLinkClass =
    "group flex w-full min-h-10 items-center justify-between gap-3 rounded-2xl border border-transparent px-3 text-[0.94rem] font-bold leading-7 text-white/72 transition hover:border-white/10 hover:bg-white/[0.055] hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";
  const desktopSectionClass =
    "lg:min-h-full lg:border-s lg:border-white/9 lg:pe-1 lg:ps-6 lg:first:border-s-0 lg:first:ps-0 xl:ps-7";
  const brandDesktopOrder = isArabic ? "lg:order-1" : "lg:order-5";
  const usefulDesktopOrder = isArabic ? "lg:order-2" : "lg:order-4";
  const categoriesDesktopOrder = "lg:order-3";
  const contactDesktopOrder = isArabic ? "lg:order-4" : "lg:order-2";
  const phoenixDesktopOrder = isArabic ? "lg:order-5" : "lg:order-1";
  const brandDesktopSpacingClass = "lg:px-4 xl:px-5";
  const brandInnerClass = "mx-auto flex w-full max-w-[21rem] flex-col items-center gap-4 text-center";
  const phoenixAlignment = isArabic ? "items-center text-center" : "items-center text-center lg:items-start lg:text-left";
  const phoenixIconsAlignment = isArabic ? "justify-center lg:justify-center" : "justify-center lg:justify-start";
  const phoenixInnerClass = "flex h-full w-full flex-col items-center gap-5 py-1 text-center lg:gap-4";
  const phoenixLogoShellClass =
    // Sized to hug the actual Phoenixflow symbol + wordmark: the source SVG's
    // own canvas has large transparent margins (its visible art only fills
    // ~81% of the width and ~54% of the height), so the tile is now sized
    // from the inner crop wrapper's content box below rather than a fixed
    // oversized square, with just a small premium padding around it.
    // Vertical padding (py) carries an extra ~19px per side (~0.5cm) beyond
    // that snug fit, so the tile is taller top-and-bottom while its width
    // and the logo's own size/centering are untouched.
    "relative inline-flex w-fit items-center justify-center overflow-hidden rounded-2xl border border-[#D4A674]/20 bg-[linear-gradient(180deg,rgba(11,15,13,0.98),rgba(14,18,16,0.96)_52%,rgba(19,24,21,0.94)_100%)] px-3 py-[29px] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),inset_0_-18px_30px_rgba(0,0,0,0.24),0_18px_46px_-34px_rgba(0,0,0,0.88)] sm:px-3.5 sm:py-[31px]";

  return (
    <footer className="wood-grain relative isolate overflow-hidden bg-[#06231F] text-[#F7F4EF]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_20%,rgba(212,166,116,0.16),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(255,255,255,0.08),transparent_30%),linear-gradient(135deg,#06231F_0%,#0C3A3A_56%,#041A18_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-px bg-[linear-gradient(90deg,transparent,rgba(212,166,116,0.72),transparent)]"
      />

      <div className="shell route-shell py-12 sm:py-14 lg:py-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-[0_34px_90px_-66px_rgba(0,0,0,0.95)] backdrop-blur-sm sm:p-7 lg:p-8 xl:p-9">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_16%,rgba(212,166,116,0.12),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.015))]"
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_1.08fr_0.92fr_1fr_1.12fr] lg:items-start lg:gap-0">
            <section className={`flex w-full flex-col ${brandAlignment} ${brandDesktopOrder} ${desktopSectionClass} ${brandDesktopSpacingClass}`}>
              <div className={brandInnerClass}>
                <a
                  href="/"
                  className="footer-brand-logo-zone flex w-full items-center justify-center rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label={t({ ar: "العودة إلى الرئيسية", en: "Back to homepage" })}
                >
                  <BrandLogo
                    variant="dark"
                    className="block h-auto max-h-[144px] w-auto max-w-[390px] sm:max-h-[168px] sm:max-w-[480px]"
                  />
                </a>

                <div className="footer-brand-text-zone flex w-full items-center justify-center">
                  <p className="max-w-md text-[0.98rem] font-medium leading-8 text-white/72">
                    {t({
                      ar: "كابيتال واسي شركة متخصصة في تصنيع وتوريد الأبواب والأثاث، ديكورات المحلات التجارية، ديكورات المعارض والفعاليات المختلفة.",
                      en: "Capital Oasis specializes in doors and furniture manufacturing and supply, hotel furniture, commercial shop decorations, exhibition decor, and event solutions.",
                    })}
                  </p>
                </div>

                <div
                  className={`footer-brand-actions-zone w-full flex flex-wrap items-center gap-2.5 ${brandActionAlignment}`}
                  aria-label={t({ ar: "وسائل التواصل المؤكدة", en: "Confirmed contact channels" })}
                >
                  <a
                    href={company.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-[0.82rem] font-extrabold text-deep-green shadow-[0_18px_40px_-24px_rgba(212,166,116,0.9)] transition hover:-translate-y-0.5 hover:bg-[#E0B685] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <MessageCircle size={17} aria-hidden="true" />
                    {t({ ar: "واتساب", en: "WhatsApp" })}
                  </a>
                  <a
                    href={company.phoneHref}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/16 bg-white/[0.065] px-4 py-2.5 text-[0.82rem] font-extrabold text-white/86 transition hover:-translate-y-0.5 hover:border-gold/60 hover:bg-white/10 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <Phone size={16} aria-hidden="true" />
                    {t({ ar: "اتصال", en: "Call" })}
                  </a>
                </div>
              </div>
            </section>

            <section className={`w-full ${usefulDesktopOrder} ${desktopSectionClass}`}>
              <div className={`${columnContainerClass} w-full`} dir={isArabic ? "rtl" : "ltr"}>
                <h2 className={footerHeadingClass}>{t({ ar: "روابط مفيدة", en: "Useful Links" })}</h2>
                <nav className={columnListClass} aria-label={t({ ar: "روابط التذييل", en: "Footer links" })}>
                  {usefulLinks.map((item) => (
                    <a
                      key={`${item.label.en}-${item.href}`}
                      href={item.href}
                      className={footerLinkClass}
                    >
                      <span className={footerLinkTextAlignment}>{t(item.label)}</span>
                      <Arrow
                        size={14}
                        className="shrink-0 text-gold opacity-0 transition group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </nav>
              </div>
            </section>

            <section className={`w-full ${categoriesDesktopOrder} ${desktopSectionClass}`}>
              <div className={`${columnContainerClass} w-full`} dir={isArabic ? "rtl" : "ltr"}>
                <h2 className={footerHeadingClass}>{t({ ar: "التصنيفات", en: "Categories" })}</h2>
                <nav className={columnListClass} aria-label={t({ ar: "تصنيفات الخدمات", en: "Service categories" })}>
                  {categories.map((item) => (
                    <a key={item.label.en} href={item.href} className={footerLinkClass}>
                      <span className={footerLinkTextAlignment}>{t(item.label)}</span>
                      <Arrow
                        size={14}
                        className="shrink-0 text-gold opacity-0 transition group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </nav>
              </div>
            </section>

            <section className={`w-full ${contactDesktopOrder} ${desktopSectionClass}`}>
              <div className={`${columnContainerClass} w-full`} dir={isArabic ? "rtl" : "ltr"}>
                <h2 className={footerHeadingClass}>{t({ ar: "بيانات التواصل", en: "Contact" })}</h2>
                <ul className={contactListClass}>
                  <li className="w-full">
                    <a
                      href={company.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full min-h-12 items-start gap-3 rounded-[1.15rem] border border-white/8 bg-white/[0.035] p-2 transition hover:border-gold/24 hover:bg-white/[0.055] hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:items-center"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold/14 text-gold">
                        <MessageCircle size={17} aria-hidden="true" />
                      </span>
                      <span className={contactTextAlignment}>
                        <span className="block text-[0.68rem] font-extrabold tracking-[0.08em] text-white/44 uppercase rtl:tracking-normal">
                          WhatsApp
                        </span>
                        <span dir="ltr" className="font-bold text-white/84">
                          {company.phoneDisplay}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="w-full">
                    <a
                      href={company.additionalPhoneHref}
                      className="flex w-full min-h-12 items-start gap-3 rounded-[1.15rem] border border-white/8 bg-white/[0.035] p-2 transition hover:border-gold/24 hover:bg-white/[0.055] hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:items-center"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold/14 text-gold">
                        <Phone size={17} aria-hidden="true" />
                      </span>
                      <span className={contactTextAlignment}>
                        <span className="block text-[0.68rem] font-extrabold tracking-[0.08em] text-white/44 uppercase rtl:tracking-normal">
                          {t({ ar: "اتصال هاتفي", en: "Phone / Call" })}
                        </span>
                        <span dir="ltr" className="font-bold text-white/84">
                          {company.additionalPhone}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="flex w-full min-h-12 items-start gap-3 rounded-[1.15rem] border border-white/8 bg-white/[0.035] p-2">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold/14 text-gold">
                      <MapPin size={17} aria-hidden="true" />
                    </span>
                    <span className={`${contactTextAlignment} pt-1.5`}>{t(company.location)}</span>
                  </li>
                  <li className="w-full">
                    <a
                      href={`https://${company.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full min-h-12 items-start gap-3 rounded-[1.15rem] border border-white/8 bg-white/[0.035] p-2 transition hover:border-gold/24 hover:bg-white/[0.055] hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:items-center"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold/14 text-gold">
                        <Globe2 size={17} aria-hidden="true" />
                      </span>
                      <span className={contactTextAlignment}>
                        <span dir="ltr" className="text-white/84">
                          {company.websiteDisplay}
                        </span>
                      </span>
                      <ExternalLink size={13} className="text-white/35" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className={`flex w-full flex-col ${phoenixAlignment} ${phoenixDesktopOrder} ${desktopSectionClass}`} dir={isArabic ? "rtl" : "ltr"}>
              <div className={phoenixInnerClass}>
                <div className="footer-brand-logo-zone flex w-full items-center justify-center">
                  <div className={phoenixLogoShellClass}>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-[1px] rounded-[1.15rem] bg-[radial-gradient(circle_at_50%_32%,rgba(230,197,132,0.06),transparent_34%),linear-gradient(180deg,rgba(27,33,29,0.64),rgba(8,11,10,0.1)_42%,rgba(8,11,10,0.35)_100%)]"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-2 top-1/2 h-[52px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,181,116,0.18)_0%,rgba(27,34,30,0.3)_40%,rgba(7,10,9,0)_100%)] blur-[16px]"
                    />
                    {/* Crop wrapper: the Phoenixflow SVG's own canvas is square
                        with wide empty margins around the symbol+wordmark, so
                        this box is sized to the artwork's real aspect ratio
                        (826:550, measured from the source file) and the image
                        is scaled up + shifted to reveal only that visible
                        content band, cropped via overflow-hidden. This does not
                        alter or re-render the logo file itself. */}
                    <div className="relative z-[1] aspect-[826/550] w-[158px] overflow-hidden sm:w-[171px]">
                      <img
                        src={phoenixflow.logo}
                        alt="Phoenixflow logo"
                        className="absolute left-[-5.83%] top-[-24.35%] h-[166.3%] w-[110.6%] max-w-none object-contain opacity-[0.998] [filter:drop-shadow(0_14px_24px_rgba(0,0,0,0.24))]"
                      />
                    </div>
                  </div>
                </div>

                <div className="footer-brand-text-zone mx-auto flex w-full max-w-[15.75rem] flex-col items-center justify-center gap-2.5">
                  <p className="text-[0.82rem] font-bold leading-7 text-[#E7D2A4] sm:text-[0.88rem]">
                    {t(phoenixflow.credit)}
                  </p>
                  <p className="text-[0.72rem] font-semibold leading-6 tracking-[0.02em] text-white/56 sm:text-[0.78rem] rtl:tracking-normal">
                    {t(phoenixflow.descriptor)}
                  </p>
                </div>

                <div
                  className={`footer-brand-actions-zone w-full flex flex-wrap items-center gap-2.5 lg:flex-nowrap ${phoenixIconsAlignment}`}
                  aria-label={t(phoenixflow.contactLabel)}
                >
                  <a
                    href={phoenixflow.websiteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(phoenixflow.websiteLabel)}
                    className={footerIconClass}
                  >
                    <Globe2 size={15} aria-hidden="true" />
                  </a>
                  <a
                    href={phoenixflow.callHref}
                    aria-label={t(phoenixflow.callLabel)}
                    className={footerIconClass}
                  >
                    <Phone size={15} aria-hidden="true" />
                  </a>
                  <a
                    href={phoenixflow.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(phoenixflow.whatsappLabel)}
                    className={footerIconClass}
                  >
                    <MessageCircle size={15} aria-hidden="true" />
                  </a>
                  <a
                    href={phoenixflow.instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(phoenixflow.instagramLabel)}
                    className={footerIconClass}
                  >
                    <InstagramIcon className="size-[15px]" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}
