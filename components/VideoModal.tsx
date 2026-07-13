"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { Bilingual } from "@/data/content";
import { useLanguage } from "./LanguageProvider";

type VideoModalProps = {
  autoPlay?: boolean;
  video: string;
  title: Bilingual;
  poster?: string;
  onClose: () => void;
};

export function VideoModal({
  autoPlay = true,
  video,
  title,
  poster,
  onClose,
}: VideoModalProps) {
  const { t } = useLanguage();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const onCloseRef = useRef(onClose);
  const portalRoot = typeof document === "undefined" ? null : document.body;
  const titleId = useId();

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!portalRoot) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    const activeVideo = videoRef.current;

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      activeVideo?.pause();
      if (activeVideo) activeVideo.currentTime = 0;
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [portalRoot]);

  if (!portalRoot) return null;

  const modalMarkup = (
    <div
      className="modal-backdrop-in fixed inset-0 z-[9999] grid place-items-center bg-[#041a18]/90 p-4 backdrop-blur-md sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-panel-in flex max-h-[92vh] w-full max-w-[96vw] flex-col overflow-hidden rounded-3xl border border-gold/25 bg-deep-green shadow-[0_30px_100px_rgba(0,0,0,.5)] sm:max-w-6xl">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 text-white sm:px-6">
          <h2 id={titleId} className="text-base font-bold sm:text-lg">
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
        <div className="grid min-h-0 place-items-center overflow-hidden bg-black">
          <video
            ref={videoRef}
            key={video}
            src={video}
            poster={poster}
            autoPlay={autoPlay}
            controls
            playsInline
            preload="metadata"
            aria-label={t(title)}
            className="block h-auto max-h-[calc(92vh-5.25rem)] w-auto max-w-full object-contain"
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

  return createPortal(modalMarkup, portalRoot);
}
