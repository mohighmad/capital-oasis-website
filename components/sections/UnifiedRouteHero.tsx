"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import {
  type LocalizedText,
  type UnifiedHeroMediaItem,
} from "@/components/sections/unifiedHeroMedia";
import {
  UnifiedHeroMediaShowcase,
  type ResolvedHeroMediaItem,
} from "@/components/media/UnifiedHeroMediaShowcase";
import type { Bilingual } from "@/data/content";
import { SectionShell } from "./SectionShell";

type HeroVariant =
  | "commercial"
  | "doors"
  | "dressing"
  | "events"
  | "homepage"
  | "kitchens"
  | "other-services";

type UnifiedRouteHeroProps = {
  actions?: React.ReactNode;
  body: LocalizedText;
  eyebrow: LocalizedText;
  id?: string;
  mediaItems: UnifiedHeroMediaItem[];
  points?: readonly LocalizedText[];
  title: LocalizedText;
  variant: HeroVariant;
};

const heroVariants = {
  commercial: {
    body: "text-white/80",
    eyebrow: "text-[#E2C18C]",
    mediaShell:
      "border-white/12 bg-[rgba(7,23,24,0.34)] shadow-[0_32px_86px_-52px_rgba(0,0,0,0.72)]",
    point:
      "border border-white/12 bg-white/[0.08] text-white/80 shadow-[0_18px_40px_-34px_rgba(0,0,0,0.54)]",
    pointIcon: "text-[#E2C18C]",
    section:
      "bg-[linear-gradient(135deg,#0D3738_0%,#1E4947_42%,#5D4433_100%)] text-white",
    surface:
      "border-white/12 bg-[rgba(7,23,24,0.22)] text-white shadow-[0_30px_84px_-58px_rgba(0,0,0,0.72)] backdrop-blur-sm",
    title: "text-white",
    tone: "dark" as const,
  },
  doors: {
    body: "text-white/80",
    eyebrow: "text-[#E7C98C]",
    mediaShell:
      "border-white/12 bg-[rgba(4,26,24,0.26)] shadow-[0_32px_86px_-52px_rgba(0,0,0,0.74)]",
    point:
      "border border-white/12 bg-white/[0.08] text-white/80 shadow-[0_18px_40px_-34px_rgba(0,0,0,0.56)]",
    pointIcon: "text-[#E7C98C]",
    section:
      "bg-[linear-gradient(135deg,#0c3a3a_0%,#082f2f_52%,#35281d_100%)] text-white",
    surface:
      "border-white/12 bg-[rgba(4,26,24,0.18)] text-white shadow-[0_30px_84px_-58px_rgba(0,0,0,0.72)] backdrop-blur-sm",
    title: "text-white",
    tone: "dark" as const,
  },
  dressing: {
    body: "text-[#5F4635]",
    eyebrow: "text-[#8A623B]",
    mediaShell:
      "border-white/70 bg-[rgba(255,249,240,0.64)] shadow-[0_30px_84px_-58px_rgba(70,42,25,0.24)]",
    point:
      "border border-[#A77C4E]/16 bg-white/72 text-[#5B402C] shadow-[0_18px_40px_-34px_rgba(70,42,25,0.24)]",
    pointIcon: "text-[#8A623B]",
    section:
      "bg-[linear-gradient(135deg,#FFF9F0_0%,#F1E1CE_52%,#D9BA97_100%)] text-[#2D1E15]",
    surface:
      "border-white/72 bg-[rgba(255,249,240,0.72)] text-[#2D1E15] shadow-[0_30px_84px_-58px_rgba(70,42,25,0.22)] backdrop-blur-sm",
    title: "text-[#2D1E15]",
    tone: "light" as const,
  },
  events: {
    body: "text-[#645143]",
    eyebrow: "text-[#9A714A]",
    mediaShell:
      "border-white/70 bg-[rgba(255,249,240,0.66)] shadow-[0_30px_84px_-58px_rgba(93,63,43,0.24)]",
    point:
      "border border-[#D5B17C]/18 bg-white/68 text-[#614D40] shadow-[0_18px_40px_-34px_rgba(93,63,43,0.22)]",
    pointIcon: "text-[#9A714A]",
    section:
      "bg-[linear-gradient(135deg,#FFF8F0_0%,#F0DECA_46%,#D5B792_100%)] text-[#2F221D]",
    surface:
      "border-white/72 bg-[rgba(255,249,240,0.72)] text-[#2F221D] shadow-[0_30px_84px_-58px_rgba(93,63,43,0.22)] backdrop-blur-sm",
    title: "text-[#2F221D]",
    tone: "light" as const,
  },
  homepage: {
    body: "text-white/80",
    eyebrow: "text-[#E7C98C]",
    mediaShell:
      "border-white/12 bg-[rgba(6,24,24,0.24)] shadow-[0_32px_86px_-52px_rgba(0,0,0,0.74)]",
    point:
      "border border-white/12 bg-white/[0.08] text-white/80 shadow-[0_18px_40px_-34px_rgba(0,0,0,0.56)]",
    pointIcon: "text-[#E7C98C]",
    section:
      "bg-[linear-gradient(135deg,#0C3A3A_0%,#153D3B_48%,#5A4030_100%)] text-white",
    surface:
      "border-white/12 bg-[rgba(6,24,24,0.18)] text-white shadow-[0_30px_84px_-58px_rgba(0,0,0,0.72)] backdrop-blur-sm",
    title: "text-white",
    tone: "dark" as const,
  },
  kitchens: {
    body: "text-[#614B39]",
    eyebrow: "text-[#9A7044]",
    mediaShell:
      "border-white/70 bg-[rgba(255,249,240,0.66)] shadow-[0_30px_84px_-58px_rgba(70,42,25,0.22)]",
    point:
      "border border-[#B69063]/16 bg-white/72 text-[#5A4636] shadow-[0_18px_40px_-34px_rgba(70,42,25,0.22)]",
    pointIcon: "text-[#9A7044]",
    section:
      "bg-[linear-gradient(135deg,#FFF9F0_0%,#F2E5D4_46%,#DEC4A0_100%)] text-[#2F2016]",
    surface:
      "border-white/72 bg-[rgba(255,249,240,0.72)] text-[#2F2016] shadow-[0_30px_84px_-58px_rgba(70,42,25,0.22)] backdrop-blur-sm",
    title: "text-[#2F2016]",
    tone: "light" as const,
  },
  "other-services": {
    body: "text-[#5F4D40]",
    eyebrow: "text-[#7C6452]",
    mediaShell:
      "border-white/70 bg-[rgba(255,249,240,0.66)] shadow-[0_30px_84px_-58px_rgba(12,58,58,0.2)]",
    point:
      "border border-[rgba(12,58,58,0.1)] bg-white/72 text-[#4E3B2E] shadow-[0_18px_40px_-34px_rgba(12,58,58,0.18)]",
    pointIcon: "text-[#7A6247]",
    section:
      "bg-[linear-gradient(135deg,#FFFDF9_0%,#F3EBDD_52%,#E4D3BA_100%)] text-[#2B2018]",
    surface:
      "border-white/72 bg-[rgba(255,249,240,0.72)] text-[#2B2018] shadow-[0_30px_84px_-58px_rgba(12,58,58,0.2)] backdrop-blur-sm",
    title: "text-[#2B2018]",
    tone: "light" as const,
  },
} as const;

function resolveText(
  value: LocalizedText,
  t: (value: Bilingual) => string,
) {
  return typeof value === "string" ? value : t(value);
}

export function UnifiedRouteHero({
  actions,
  body,
  eyebrow,
  id,
  mediaItems,
  points = [],
  title,
  variant,
}: UnifiedRouteHeroProps) {
  const { t } = useLanguage();
  const theme = heroVariants[variant];
  const resolvedMediaItems: ResolvedHeroMediaItem[] = mediaItems.map((item) => ({
    alt: resolveText(item.alt, t),
    caption: resolveText(item.caption, t),
    groupId: item.groupId,
    groupLabel: resolveText(item.groupLabel, t),
    id: item.id,
    objectFit: item.objectFit,
    objectPosition: item.objectPosition,
    src: item.src,
    title: resolveText(item.title, t),
  }));

  return (
    <section id={id} className={`relative isolate overflow-hidden pt-[var(--site-header-height)] ${theme.section}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_16%,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(212,166,116,0.2),transparent_34%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(12,58,58,0.1)_100%)]"
      />

      <SectionShell className="global-hero-shell relative grid min-w-0 gap-6 pb-10 pt-4 md:pb-12 lg:gap-8">
        <Reveal className="global-hero-copy min-w-0">
          <div className={`flex h-full min-w-0 flex-col justify-center rounded-[2rem] border p-6 sm:p-7 lg:min-h-[37rem] lg:p-8 ${theme.surface}`}>
            <p className={`eyebrow ${theme.eyebrow}`}>{resolveText(eyebrow, t)}</p>
            <h1 className={`global-hero-title mt-5 font-semibold tracking-normal ${theme.title}`}>
              {resolveText(title, t)}
            </h1>
            <p className={`global-hero-body mt-4 ${theme.body}`}>
              {resolveText(body, t)}
            </p>

            {actions ? (
              <div className="global-hero-actions mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {actions}
              </div>
            ) : null}

            {points.length ? (
              <div className="global-hero-points mt-7 grid gap-3">
                {points.map((point) => (
                  <div key={resolveText(point, t)} className={`flex items-start gap-3 rounded-[1.2rem] px-4 py-3 text-sm font-bold ${theme.point}`}>
                    <Check className={`mt-1 size-4 shrink-0 ${theme.pointIcon}`} aria-hidden="true" />
                    <span>{resolveText(point, t)}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={120} className="global-hero-media min-w-0">
          <UnifiedHeroMediaShowcase
            items={resolvedMediaItems}
            mediaShellClassName={theme.mediaShell}
            tone={theme.tone}
          />
        </Reveal>
      </SectionShell>
    </section>
  );
}
