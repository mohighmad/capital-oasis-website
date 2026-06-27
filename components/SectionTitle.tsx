"use client";

import type { Bilingual } from "@/data/content";
import { useLanguage } from "./LanguageProvider";
import { useReveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: Bilingual;
  title: Bilingual;
  text?: Bilingual;
  light?: boolean;
}) {
  const { t } = useLanguage();
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal
      className={`max-w-[50rem]${shown ? " is-visible" : ""}`}
    >
      <p className={`eyebrow mb-5 ${light ? "text-sand" : ""}`}>{t(eyebrow)}</p>
      <h2
        className={`max-w-[18ch] text-[clamp(2.05rem,3.9vw,3.7rem)] leading-[1.07] font-semibold tracking-[-0.04em] rtl:max-w-[20ch] rtl:leading-[1.22] rtl:tracking-[-0.015em] ${
          light ? "text-white" : "text-forest"
        }`}
      >
        {t(title)}
      </h2>
      {text ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 sm:text-[1.05rem] ${
            light ? "text-white/70" : "text-ink/68"
          }`}
        >
          {t(text)}
        </p>
      ) : null}
    </div>
  );
}
