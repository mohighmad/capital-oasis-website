"use client";

import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { LanguageToggle } from "@/components/LanguageToggle";
import { company } from "@/data/content";
import type { SiteSection } from "@/data/sections";
import { SectionShell } from "./SectionShell";

type PlaceholderRoutePageProps = {
  section: SiteSection;
};

function PlaceholderRoutePageBody({ section }: PlaceholderRoutePageProps) {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";
  const Arrow = isArabic ? ArrowUpLeft : ArrowUpRight;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(212,166,116,0.18),transparent_28rem),linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0)),var(--color-bg-body)] text-[var(--color-text-primary)]">
      <header className="border-b border-white/10 bg-[var(--color-brand-deep)]/92 text-white backdrop-blur-sm">
        <SectionShell className="flex min-h-[76px] items-center justify-between gap-4 py-4">
          <Link
            href="/"
            className="inline-flex shrink-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={t({ en: "Back to Capital Oasis homepage", ar: "العودة إلى الصفحة الرئيسية لكابيتال واسي" })}
          >
            <BrandLogo
              priority
              variant="light"
              className="block h-auto max-h-12 w-auto max-w-[150px] sm:max-h-14 sm:max-w-[170px]"
            />
          </Link>

          <div className="flex items-center gap-2">
            <LanguageToggle compact />
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-primary hidden min-h-10 px-4 py-2 text-xs shadow-none sm:inline-flex"
            >
              <MessageCircle size={15} />
              {t({ en: "WhatsApp", ar: "واتساب" })}
            </a>
          </div>
        </SectionShell>
      </header>

      <main id="main-content" className="pb-16 pt-10 sm:pb-20 sm:pt-14">
        <SectionShell className="grid gap-8">
          <section className="overflow-hidden rounded-[var(--radius-media)] border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] shadow-[var(--shadow-card-soft)] backdrop-blur-md">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              <div className="border-b border-[var(--color-border-subtle)] p-6 sm:p-8 lg:border-e lg:border-b-0 lg:p-10 xl:p-12">
                <p className="eyebrow">
                  {t({ en: "Capital Oasis new system", ar: "نظام كابيتال واسي الجديد" })}
                </p>
                <h1 className="display-title mt-6 max-w-none text-[var(--color-text-primary)]">
                  {t(section.title)}
                </h1>
                <p className="brand-body mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
                  {t(section.shortDescription)}
                </p>
                <p className="brand-body mt-4 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
                  {t({
                    en: "This section is being prepared within the new Capital Oasis system. The foundation and navigation layer are live so visitors can move through the structure safely while the final section build is completed.",
                    ar: "يتم تجهيز هذا القسم ضمن نظام كابيتال واسي الجديد. طبقة الأساس والتنقل أصبحت جاهزة حتى يتمكن الزائر من التحرك داخل البنية بأمان ريثما يكتمل تنفيذ الصفحة النهائية لهذا القسم.",
                  })}
                </p>

                {section.subcategories?.length ? (
                  <div className="mt-6">
                    <p className="text-sm font-bold text-[var(--color-text-primary)]">
                      {t({
                        en: "Internal categories coming within this section",
                        ar: "تصنيفات داخلية ستظهر داخل هذا القسم",
                      })}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {section.subcategories.map((subcategory) => (
                        <span
                          key={subcategory.id}
                          className="rounded-full border border-[rgba(212,166,116,0.36)] bg-[rgba(212,166,116,0.12)] px-3 py-1 text-sm font-bold text-[var(--color-brand-deep)]"
                        >
                          {t(subcategory.title)}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div id="contact" className="mt-8 flex flex-wrap gap-3">
                  <Link href="/" className="btn-primary">
                    <Arrow size={16} aria-hidden="true" />
                    {t({ en: "Back to homepage", ar: "العودة إلى الرئيسية" })}
                  </Link>
                  <Link
                    href="/#contact"
                    className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-[var(--radius-button)] border border-[var(--color-border-subtle)] bg-white px-5 py-3 text-sm font-extrabold text-[var(--color-brand-deep)] transition hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-deep-hover)]"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    {t({ en: "Go to contact", ar: "الانتقال إلى التواصل" })}
                  </Link>
                  <a
                    href={company.phoneHref}
                    className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-[var(--radius-button)] border border-[var(--color-border-subtle)] bg-transparent px-5 py-3 text-sm font-extrabold text-[var(--color-text-primary)] transition hover:border-[var(--color-brand-gold)] hover:bg-white/70"
                  >
                    <Phone size={16} aria-hidden="true" />
                    {t({ en: "Call us", ar: "اتصل بنا" })}
                  </a>
                </div>
              </div>

              <div className="flex h-full flex-col justify-between bg-[linear-gradient(160deg,var(--color-brand-deep)_0%,#082f2f_100%)] p-6 text-white sm:p-8 lg:p-10 xl:p-12">
                <div>
                  <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[11px] font-extrabold tracking-[0.14em] text-[var(--color-brand-gold)] uppercase rtl:tracking-normal rtl:normal-case">
                    {t({ en: "Route skeleton active", ar: "الهيكل الأولي للمسار مفعل" })}
                  </span>
                  <h2 className="brand-display mt-6 text-2xl leading-tight font-semibold sm:text-3xl">
                    {t({
                      en: "A clear route identity now, with the full section experience to follow in the larger rebuild.",
                      ar: "هوية واضحة للمسار الآن، على أن تأتي التجربة الكاملة لهذا القسم ضمن مرحلة التطوير الأكبر القادمة.",
                    })}
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                    {t({
                      en: "No gallery content, media sorting, or final section-specific layouts have been added here yet. This page exists only to establish the section route, hierarchy, and next-step path safely.",
                      ar: "لم تتم إضافة معرض أعمال أو فرز وسائط أو تخطيطات نهائية خاصة بهذا القسم بعد. هذه الصفحة موجودة فقط لتثبيت مسار القسم وتسلسله وخطوة المتابعة بشكل آمن.",
                    })}
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[var(--radius-card)] border border-white/12 bg-white/7 p-4">
                    <p className="text-[11px] font-extrabold tracking-[0.14em] text-[var(--color-brand-gold)] uppercase rtl:tracking-normal rtl:normal-case">
                      {t({ en: "Category", ar: "التصنيف" })}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">{t(section.title)}</p>
                  </div>
                  <div className="rounded-[var(--radius-card)] border border-white/12 bg-white/7 p-4">
                    <p className="text-[11px] font-extrabold tracking-[0.14em] text-[var(--color-brand-gold)] uppercase rtl:tracking-normal rtl:normal-case">
                      {t({ en: "Search intent", ar: "التركيز التعريفي" })}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {t(section.seoIntent)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionShell>
      </main>

      <footer className="border-t border-[var(--color-border-subtle)] bg-white/55">
        <SectionShell className="flex flex-col gap-4 py-6 text-sm text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p className="brand-body">
            {t({
              en: "Capital Oasis route foundation layer for the new system.",
              ar: "طبقة أساس لمسارات كابيتال واسي ضمن النظام الجديد.",
            })}
          </p>
          <div className="flex flex-wrap gap-4 text-[var(--color-text-primary)]">
            <a href={company.phoneHref} className="font-semibold transition hover:text-[var(--color-brand-deep)]">
              {company.phoneDisplay}
            </a>
            <Link href="/#contact" className="font-semibold transition hover:text-[var(--color-brand-deep)]">
              {t({ en: "Contact page section", ar: "قسم التواصل" })}
            </Link>
          </div>
        </SectionShell>
      </footer>
    </div>
  );
}

export function PlaceholderRoutePage(props: PlaceholderRoutePageProps) {
  return (
    <LanguageProvider>
      <PlaceholderRoutePageBody {...props} />
    </LanguageProvider>
  );
}
