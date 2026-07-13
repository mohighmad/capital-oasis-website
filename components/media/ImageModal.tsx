"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useId, useRef, useState, type TouchEvent } from "react";
import { useLanguage } from "../LanguageProvider";
import type { LightboxItem } from "./useImageLightbox";

type ImageModalProps = {
  activeIndex: number | null;
  canGoNext: boolean;
  canGoPrevious: boolean;
  items: LightboxItem[];
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

const SWIPE_THRESHOLD = 48;
const SWIPE_DOMINANCE_RATIO = 1.2;

type ScrollLockSnapshot = {
  bodyOverflow: string;
  bodyPaddingRight: string;
  bodyOverscrollBehavior: string;
  htmlOverflow: string;
  htmlOverscrollBehavior: string;
};

export function ImageModal({
  activeIndex,
  canGoNext,
  canGoPrevious,
  items,
  onClose,
  onNext,
  onPrevious,
}: ImageModalProps) {
  const { language, t } = useLanguage();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const onNextRef = useRef(onNext);
  const onPreviousRef = useRef(onPrevious);
  const scrollLockRef = useRef<ScrollLockSnapshot | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const titleId = useId();
  const captionId = useId();
  const currentItem =
    activeIndex === null ? null : (items[activeIndex] ?? null);

  useEffect(() => {
    onCloseRef.current = onClose;
    onNextRef.current = onNext;
    onPreviousRef.current = onPrevious;
  }, [onClose, onNext, onPrevious]);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    if (!currentItem) return;

    const html = document.documentElement;
    const body = document.body;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    scrollLockRef.current = {
      bodyOverflow: body.style.overflow,
      bodyPaddingRight: body.style.paddingRight,
      bodyOverscrollBehavior: body.style.overscrollBehavior,
      htmlOverflow: html.style.overflow,
      htmlOverscrollBehavior: html.style.overscrollBehavior,
    };

    html.style.overflow = "hidden";
    html.style.overscrollBehavior = "contain";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "contain";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (event.key === "ArrowLeft" && canGoPrevious) {
        onPreviousRef.current();
        return;
      }
      if (event.key === "ArrowRight" && canGoNext) {
        onNextRef.current();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      const previous = scrollLockRef.current;
      if (!previous) return;

      body.style.overflow = previous.bodyOverflow;
      body.style.paddingRight = previous.bodyPaddingRight;
      body.style.overscrollBehavior = previous.bodyOverscrollBehavior;
      html.style.overflow = previous.htmlOverflow;
      html.style.overscrollBehavior = previous.htmlOverscrollBehavior;
      scrollLockRef.current = null;
    };
  }, [activeIndex, canGoNext, canGoPrevious, currentItem]);

  if (!currentItem || activeIndex === null) {
    return null;
  }

  const modalTitle =
    currentItem.title ??
    currentItem.groupLabel ??
    t({ en: "Image preview", ar: "معاينة الصورة" });
  const hasNavigation = items.length > 1;
  const previousIcon = language === "ar" ? ChevronRight : ChevronLeft;
  const nextIcon = language === "ar" ? ChevronLeft : ChevronRight;
  const PreviousIcon = previousIcon;
  const NextIcon = nextIcon;

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    if (event.changedTouches.length !== 1) return;
    const touch = event.changedTouches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (!touchStartRef.current || event.changedTouches.length !== 1) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    if (Math.abs(deltaX) <= Math.abs(deltaY) * SWIPE_DOMINANCE_RATIO) return;

    if (deltaX < 0 && canGoNext) {
      onNext();
    } else if (deltaX > 0 && canGoPrevious) {
      onPrevious();
    }
  }

  if (!portalRoot) {
    return null;
  }

  const modalMarkup = (
    <div
      className="modal-backdrop-in fixed inset-0 z-[9999] flex items-center justify-center bg-[#031715]/94 p-2 backdrop-blur-md overscroll-contain sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={currentItem.caption ? captionId : undefined}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-panel-in flex h-[92dvh] max-h-[94dvh] w-[96vw] max-w-[1440px] flex-col overflow-hidden rounded-[1.6rem] border border-gold/18 bg-[rgba(6,24,24,0.9)] shadow-[var(--shadow-modal)] sm:h-[92dvh] sm:rounded-[2rem]">
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-4 py-3 text-white sm:px-6 sm:py-4">
          <div className="min-w-0">
            {currentItem.groupLabel ? (
              <p className="text-[11px] font-extrabold tracking-[0.16em] text-gold/90 uppercase rtl:tracking-normal rtl:normal-case">
                {currentItem.groupLabel}
              </p>
            ) : null}
            <h2
              id={titleId}
              className="mt-1 truncate text-base font-bold sm:text-lg"
            >
              {modalTitle}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {hasNavigation ? (
              <span className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs font-bold text-white/78">
                {activeIndex + 1} / {items.length}
              </span>
            ) : null}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={t({ en: "Close image", ar: "إغلاق الصورة" })}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="relative flex min-h-0 flex-1 items-center justify-center px-2 py-2 sm:px-4 sm:py-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {hasNavigation ? (
            <button
              type="button"
              onClick={onPrevious}
              disabled={!canGoPrevious}
              className="absolute left-3 z-10 grid size-11 place-items-center rounded-full border border-white/15 bg-[rgba(4,18,18,0.8)] text-white backdrop-blur-md transition hover:border-gold/55 hover:text-gold disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:left-7 sm:size-12"
              aria-label={t({ en: "Previous image", ar: "الصورة السابقة" })}
            >
              <PreviousIcon size={20} aria-hidden="true" />
            </button>
          ) : null}

          <div className="relative h-full w-full">
            <Image
              src={currentItem.src}
              alt={currentItem.alt}
              fill
              loading="eager"
              sizes="96vw"
              className="object-contain"
            />
          </div>

          {hasNavigation ? (
            <button
              type="button"
              onClick={onNext}
              disabled={!canGoNext}
              className="absolute right-3 z-10 grid size-11 place-items-center rounded-full border border-white/15 bg-[rgba(4,18,18,0.8)] text-white backdrop-blur-md transition hover:border-gold/55 hover:text-gold disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:right-7 sm:size-12"
              aria-label={t({ en: "Next image", ar: "الصورة التالية" })}
            >
              <NextIcon size={20} aria-hidden="true" />
            </button>
          ) : null}
        </div>

        {currentItem.caption ? (
          <div
            id={captionId}
            className="max-h-[18dvh] shrink-0 overflow-y-auto border-t border-white/10 px-4 py-3 text-sm leading-7 text-white/78 sm:px-6 sm:py-4"
          >
            {currentItem.caption}
          </div>
        ) : null}
      </div>
    </div>
  );

  return createPortal(modalMarkup, portalRoot);
}
