"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import type { Bilingual } from "@/data/content";
import { useLanguage } from "../LanguageProvider";
import { Reveal } from "../Reveal";
import { VideoModal } from "../VideoModal";
import { SectionShell } from "../sections/SectionShell";

type ReadyVideoSectionProps = {
  id?: string;
  eyebrow: Bilingual;
  title: Bilingual;
  text: Bilingual;
  prompt?: Bilingual;
  src: string;
  poster?: string;
};

export function ReadyVideoSection({
  id,
  eyebrow,
  title,
  text,
  prompt = { en: "Watch the project film", ar: "شاهد فيلم المشروع" },
  src,
  poster,
}: ReadyVideoSectionProps) {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      id={id}
      className="section-pad bg-[linear-gradient(180deg,#F8F1E7_0%,#EADDCB_100%)]"
    >
      <SectionShell className="route-shell">
        <Reveal className="overflow-hidden rounded-[2rem] border border-[#D7C2A6]/42 bg-[linear-gradient(135deg,rgba(12,58,58,0.98),rgba(30,66,67,0.98),rgba(100,73,56,0.96))] p-6 text-white shadow-[0_34px_90px_-58px_rgba(0,0,0,0.65)] sm:p-8 lg:p-10">
          <div className="grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <p className="eyebrow text-[#E2C18C]">{t(eyebrow)}</p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-white">
                {t(title)}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
                {t(text)}
              </p>
              <p className="mt-6 text-sm font-extrabold text-[#E2C18C]">
                {t(prompt)}
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.65rem] border border-white/12 bg-black shadow-[0_26px_72px_rgba(0,0,0,0.34)]">
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="group relative block aspect-video w-full overflow-hidden text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2C18C] focus-visible:ring-inset"
                aria-label={t({
                  en: `Play ${title.en}`,
                  ar: `تشغيل ${title.ar}`,
                })}
              >
                {poster ? (
                  <Image
                    src={poster}
                    alt={t(title)}
                    fill
                    sizes="(max-width: 1024px) 92vw, 58vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.025]"
                  />
                ) : null}
                <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,14,14,0.08),rgba(4,14,14,0.22)_38%,rgba(4,14,14,0.9)_100%)]" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid size-16 place-items-center rounded-full border border-[#E2C18C]/55 bg-[rgba(4,26,24,0.62)] text-[#E2C18C] shadow-[0_18px_44px_rgba(0,0,0,0.34)] backdrop-blur-md transition duration-300 group-hover:scale-105 group-hover:border-[#E2C18C] sm:size-20">
                    <Play size={27} fill="currentColor" aria-hidden="true" />
                  </span>
                </span>
                <span className="sr-only">
                  {t({ en: "Open full-frame video", ar: "فتح الفيديو بالحجم الكامل" })}
                </span>
                <span className="sr-only">
                {t({
                  en: "Your browser does not support video playback.",
                  ar: "متصفحك لا يدعم تشغيل الفيديو.",
                })}
                </span>
              </button>
            </div>
          </div>
        </Reveal>
      </SectionShell>

      {isVideoOpen ? (
        <VideoModal
          video={src}
          title={title}
          poster={poster}
          autoPlay
          onClose={() => setIsVideoOpen(false)}
        />
      ) : null}
    </section>
  );
}
