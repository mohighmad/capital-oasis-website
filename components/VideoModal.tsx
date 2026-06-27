"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Bilingual } from "@/data/content";
import { useLanguage } from "./LanguageProvider";

type VideoModalProps = {
  video: string;
  title: Bilingual;
  poster?: string;
  onClose: () => void;
};

export function VideoModal({ video, title, poster, onClose }: VideoModalProps) {
  const { t } = useLanguage();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop-in fixed inset-0 z-[100] grid place-items-center bg-[#041a18]/90 p-4 backdrop-blur-md sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-video-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-panel-in w-full max-w-5xl overflow-hidden rounded-3xl border border-gold/25 bg-deep-green shadow-[0_30px_100px_rgba(0,0,0,.5)]">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 text-white sm:px-6">
          <h2 id="portfolio-video-title" className="text-base font-bold sm:text-lg">
            {t(title)}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={t({ en: "Close video", ar: "إغلاق الفيديو" })}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <div className="bg-black">
          <video
            key={video}
            src={video}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            className="max-h-[78vh] w-full"
          >
            {t({
              en: "Your browser does not support video playback.",
              ar: "متصفحك لا يدعم تشغيل الفيديو.",
            })}
          </video>
        </div>
      </div>
    </div>
  );
}
