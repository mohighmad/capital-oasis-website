"use client";

import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/components/LanguageProvider";
import { orderedSiteSections } from "@/data/sections";
import { SectionShell } from "./SectionShell";

export function CategoryGateway() {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";
  const Arrow = isArabic ? ArrowUpLeft : ArrowUpRight;

  return (
    <section
      id="section-gateway"
      className="section-pad surface-soft bg-[radial-gradient(circle_at_top,rgba(212,166,116,0.16),transparent_26rem),var(--color-bg-body)]"
    >
      <SectionShell>
        <div className="mx-auto max-w-[52rem] text-center [&>div]:mx-auto [&_p]:mx-auto">
          <SectionTitle
            eyebrow={{ ar: "بوابة الأقسام", en: "Section gateway" }}
            title={{
              ar: "ابدأ من القسم المناسب لمشروعك",
              en: "Start from the section that fits your project",
            }}
            text={{
              ar: "هذه الطبقة مخصصة لتوجيه العميل مباشرة إلى القسم الصحيح داخل نظام كابيتال واسي الجديد، قبل الوصول إلى الصفحات التفصيلية الكاملة.",
              en: "This layer directs each visitor into the right Capital Oasis section before the full dedicated experiences are completed.",
            }}
          />
        </div>

        <Reveal className="reveal-stagger mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {orderedSiteSections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className="group flex h-full min-h-[17.5rem] flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.74))] p-6 shadow-[var(--shadow-card-soft)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(212,166,116,0.45)] hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 sm:p-7"
              aria-label={t({
                ar: `استكشف قسم ${section.title.ar}`,
                en: `Explore ${section.title.en}`,
              })}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex rounded-full border border-[rgba(12,58,58,0.12)] bg-white px-3 py-1 text-[11px] font-extrabold tracking-[0.14em] text-[var(--color-brand-deep)] uppercase rtl:tracking-normal rtl:normal-case">
                  {t({
                    ar:
                      section.categoryType === "core-product"
                        ? "قسم رئيسي"
                        : section.categoryType === "interior-solution"
                          ? "حل داخلي"
                          : section.categoryType === "fit-out"
                            ? "تجهيز تجاري"
                            : section.categoryType === "event-solution"
                              ? "تنفيذ فعاليات"
                              : "خدمة مساندة",
                    en:
                      section.categoryType === "core-product"
                        ? "Core section"
                        : section.categoryType === "interior-solution"
                          ? "Interior solution"
                          : section.categoryType === "fit-out"
                            ? "Commercial fit-out"
                            : section.categoryType === "event-solution"
                              ? "Event solution"
                              : "Support service",
                  })}
                </span>
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[rgba(12,58,58,0.1)] bg-[var(--color-brand-deep)] text-[var(--color-brand-gold)] transition duration-300 group-hover:border-[var(--color-brand-gold)] group-hover:bg-[var(--color-brand-deep-hover)]">
                  <Arrow size={18} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="brand-display text-2xl leading-tight font-semibold text-[var(--color-text-primary)]">
                  {t(section.title)}
                </h3>
                <p className="brand-body mt-4 text-sm leading-7 text-[var(--color-text-muted)] sm:text-[0.95rem]">
                  {t(section.shortDescription)}
                </p>

                {section.subcategories?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {section.subcategories.map((subcategory) => (
                      <span
                        key={subcategory.id}
                        className="rounded-full border border-[rgba(212,166,116,0.36)] bg-[rgba(212,166,116,0.12)] px-3 py-1 text-xs font-bold text-[var(--color-brand-deep)]"
                      >
                        {t(subcategory.title)}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-[var(--color-border-subtle)] pt-5">
                  <span className="text-xs font-bold tracking-[0.08em] text-[var(--color-brand-gold)] uppercase rtl:tracking-normal rtl:normal-case">
                    {t(section.ctaLabel)}
                  </span>
                  {section.id === "doors" ? (
                    <span className="text-xs font-semibold text-[var(--color-text-muted)]">
                      WPC · PVC · Wood
                    </span>
                  ) : null}
                </div>
              </div>
            </Link>
          ))}
        </Reveal>
      </SectionShell>
    </section>
  );
}
