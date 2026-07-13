"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { KeyboardEvent, PointerEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export type PremiumImageRailItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
};

type PremiumImageRailProps = {
  items: PremiumImageRailItem[];
  groupLabel: string;
  onOpen: (itemId: string, trigger: HTMLButtonElement) => void;
  cardAspectClass?: string;
  className?: string;
  showLabel?: boolean;
  stageClassName?: string;
  tone?: "default" | "dark";
};

const CARD_SHIFT = "clamp(8.75rem, 27vw, 20.5rem)";
const FAR_CARD_SHIFT = "clamp(15rem, 45vw, 33rem)";
const SWIPE_THRESHOLD = 42;

function wrapIndex(index: number, total: number) {
  if (total <= 0) return 0;
  return (index + total) % total;
}

function getCircularOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

function getCardState(index: number, activeIndex: number, total: number) {
  const offset = getCircularOffset(index, activeIndex, total);
  const absOffset = Math.abs(offset);
  const direction = Math.sign(offset);

  if (absOffset === 0) {
    return {
      opacity: 1,
      pointerEvents: "auto" as const,
      scale: 1,
      transform: "translate3d(-50%, 0, 0) scale(1)",
      zIndex: 40,
    };
  }

  if (absOffset === 1) {
    return {
      opacity: 0.84,
      pointerEvents: "auto" as const,
      scale: 0.8,
      transform: `translate3d(calc(-50% + (${direction} * ${CARD_SHIFT})), 0, 0) scale(0.8)`,
      zIndex: 26,
    };
  }

  return {
    opacity: 0,
    pointerEvents: "none" as const,
    scale: 0.68,
    transform: `translate3d(calc(-50% + (${direction || 1} * ${FAR_CARD_SHIFT})), 0, 0) scale(0.68)`,
    zIndex: 8,
  };
}

export function PremiumImageRail({
  items,
  groupLabel,
  onOpen,
  cardAspectClass = "aspect-[4/5]",
  className = "",
  showLabel = true,
  stageClassName = "h-[clamp(24rem,58vw,38rem)]",
  tone = "default",
}: PremiumImageRailProps) {
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const pointerStartX = useRef<number | null>(null);
  const PreviousIcon = language === "ar" ? ChevronRight : ChevronLeft;
  const NextIcon = language === "ar" ? ChevronLeft : ChevronRight;
  const hasMultipleItems = items.length > 1;
  const labelClass =
    tone === "dark"
      ? "text-gold"
      : "text-[var(--color-brand-deep)]";
  const buttonClass =
    tone === "dark"
      ? "border-white/14 bg-[rgba(6,24,24,0.58)] text-white hover:border-gold/45 hover:text-gold"
      : "border-[rgba(12,58,58,0.12)] bg-white/88 text-[var(--color-brand-deep)] hover:border-[rgba(212,166,116,0.42)] hover:text-[var(--color-brand-gold)]";

  useEffect(() => {
    setActiveIndex((current) => wrapIndex(current, items.length));
    cardRefs.current = cardRefs.current.slice(0, items.length);
  }, [items.length]);

  useEffect(() => {
    let isActive = true;
    let cleanup: (() => void) | undefined;

    import("gsap").then(({ gsap }) => {
      if (!isActive) return;

      const context = gsap.context(() => {
        cardRefs.current.forEach((card, index) => {
          if (!card) return;
          const state = getCardState(index, activeIndex, items.length);
          gsap.to(card, {
            autoAlpha: state.opacity,
            duration: 0.62,
            ease: "power3.out",
            transform: state.transform,
            zIndex: state.zIndex,
          });
        });
      }, stageRef);

      cleanup = () => context.revert();
    });

    return () => {
      isActive = false;
      cleanup?.();
    };
  }, [activeIndex, items.length]);

  function goToPrevious() {
    setActiveIndex((current) => wrapIndex(current - 1, items.length));
  }

  function goToNext() {
    setActiveIndex((current) => wrapIndex(current + 1, items.length));
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    pointerStartX.current = event.clientX;
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (pointerStartX.current === null || !hasMultipleItems) return;

    const delta = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta > 0) {
      goToPrevious();
      return;
    }
    goToNext();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!hasMultipleItems) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      language === "ar" ? goToNext() : goToPrevious();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      language === "ar" ? goToPrevious() : goToNext();
    }
  }

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={`relative min-w-0 overflow-hidden ${className}`}>
      <div className={`flex items-center gap-3 ${showLabel ? "mb-4 justify-between" : "mb-3 justify-end"}`}>
        {showLabel ? (
          <p
            className={`text-xs font-extrabold tracking-[0.14em] uppercase rtl:tracking-normal rtl:normal-case ${labelClass}`}
          >
            {groupLabel}
          </p>
        ) : null}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goToPrevious}
            disabled={!hasMultipleItems}
            className={`grid size-11 place-items-center rounded-full border shadow-[var(--shadow-card-soft)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-35 ${buttonClass}`}
            aria-label={t({
              en: "Show previous image",
              ar: "اعرض الصورة السابقة",
            })}
          >
            <PreviousIcon size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            disabled={!hasMultipleItems}
            className={`grid size-11 place-items-center rounded-full border shadow-[var(--shadow-card-soft)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-35 ${buttonClass}`}
            aria-label={t({
              en: "Show next image",
              ar: "اعرض الصورة التالية",
            })}
          >
            <NextIcon size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={stageRef}
        className={`relative isolate min-w-0 touch-pan-y overflow-hidden px-2 ${stageClassName}`}
        role="group"
        aria-roledescription={t({
          en: "Centered image carousel",
          ar: "عارض صور مركزي",
        })}
        aria-label={groupLabel}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerCancel={() => {
          pointerStartX.current = null;
        }}
        onPointerUp={handlePointerUp}
      >
        {items.map((item, index) => {
          const state = getCardState(index, activeIndex, items.length);
          const isActive = index === activeIndex;

          return (
            <figure
              key={item.id}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className="group absolute left-1/2 top-0 w-[min(76vw,25rem)] -translate-x-1/2 will-change-transform sm:w-[min(50vw,28rem)] lg:w-[min(34vw,30.5rem)]"
              style={{
                opacity: state.opacity,
                pointerEvents: state.pointerEvents,
                transform: state.transform,
                zIndex: state.zIndex,
              }}
            >
              <div
                className={`rounded-[1.55rem] border p-3 shadow-[var(--shadow-card-soft)] transition duration-300 ${
                  tone === "dark"
                    ? "border-white/12 bg-white/[0.08]"
                    : "border-[rgba(12,58,58,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,244,239,0.96))]"
                } ${isActive ? "shadow-[var(--shadow-card-hover)]" : ""}`}
              >
                <button
                  type="button"
                  onClick={(event) => {
                    if (!isActive) {
                      setActiveIndex(index);
                      return;
                    }
                    onOpen(item.id, event.currentTarget);
                  }}
                  className={`relative block w-full overflow-hidden rounded-[1.18rem] border border-[rgba(12,58,58,0.08)] bg-[rgba(12,58,58,0.04)] text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${cardAspectClass}`}
                  aria-label={
                    isActive
                      ? t({
                          en: `View ${item.title}`,
                          ar: `عرض ${item.title}`,
                        })
                      : t({
                          en: `Center ${item.title}`,
                          ar: `توسيط ${item.title}`,
                        })
                  }
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 76vw, (max-width: 1024px) 50vw, 34vw"
                    className="transition duration-700 group-hover:scale-[1.025]"
                    style={{
                      objectFit: item.objectFit ?? "cover",
                      objectPosition: item.objectPosition ?? "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,24,24,0.86)] via-[rgba(6,24,24,0.18)] to-transparent" />
                  <figcaption className="absolute inset-x-4 bottom-4">
                    <h3 className="text-base font-extrabold leading-6 text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/76">
                      {item.caption}
                    </p>
                  </figcaption>
                </button>
              </div>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
