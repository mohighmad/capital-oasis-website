"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Film } from "lucide-react";
import type { KeyboardEvent, PointerEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export type PremiumVideoRailItem = {
  id: string;
  poster: string;
  alt: string;
  title: string;
  caption: string;
  objectPosition?: string;
};

type PremiumVideoRailProps = {
  items: PremiumVideoRailItem[];
  railLabel: string;
  onOpen: (itemId: string, trigger: HTMLButtonElement) => void;
  className?: string;
  stageClassName?: string;
};

const CARD_SHIFT = "clamp(9.5rem, 23vw, 21rem)";
const FAR_CARD_SHIFT = "clamp(15rem, 38vw, 31rem)";
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
      transform: "translate3d(-50%, -50%, 0) scale(1.08)",
      zIndex: 40,
    };
  }

  if (absOffset === 1) {
    return {
      opacity: 0.82,
      pointerEvents: "auto" as const,
      transform: `translate3d(calc(-50% + (${direction} * ${CARD_SHIFT})), -50%, 0) scale(0.84)`,
      zIndex: 26,
    };
  }

  return {
    opacity: 0,
    pointerEvents: "none" as const,
    transform: `translate3d(calc(-50% + (${direction || 1} * ${FAR_CARD_SHIFT})), -50%, 0) scale(0.72)`,
    zIndex: 8,
  };
}

export function PremiumVideoRail({
  items,
  railLabel,
  onOpen,
  className = "",
  stageClassName = "h-[clamp(23rem,41vw,31rem)]",
}: PremiumVideoRailProps) {
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const pointerStartX = useRef<number | null>(null);
  const PreviousIcon = language === "ar" ? ChevronRight : ChevronLeft;
  const NextIcon = language === "ar" ? ChevronLeft : ChevronRight;
  const hasMultipleItems = items.length > 1;

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
    <div className={`relative mx-auto min-w-0 max-w-[68rem] overflow-hidden ${className}`}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-extrabold tracking-[0.14em] text-[#E5C18E] uppercase rtl:tracking-normal rtl:normal-case">
          {railLabel}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goToPrevious}
            disabled={!hasMultipleItems}
            className="grid size-11 place-items-center rounded-full border border-white/14 bg-[rgba(6,24,24,0.58)] text-white shadow-[var(--shadow-card-soft)] transition hover:-translate-y-0.5 hover:border-gold/45 hover:text-gold disabled:cursor-not-allowed disabled:opacity-35"
            aria-label={t({
              en: "Show previous video",
              ar: "اعرض الفيديو السابق",
            })}
          >
            <PreviousIcon size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            disabled={!hasMultipleItems}
            className="grid size-11 place-items-center rounded-full border border-white/14 bg-[rgba(6,24,24,0.58)] text-white shadow-[var(--shadow-card-soft)] transition hover:-translate-y-0.5 hover:border-gold/45 hover:text-gold disabled:cursor-not-allowed disabled:opacity-35"
            aria-label={t({
              en: "Show next video",
              ar: "اعرض الفيديو التالي",
            })}
          >
            <NextIcon size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={stageRef}
        className={`relative isolate min-w-0 touch-pan-y overflow-hidden px-1 sm:px-2 ${stageClassName}`}
        role="group"
        aria-roledescription={t({
          en: "Centered video carousel",
          ar: "عارض فيديو مركزي",
        })}
        aria-label={railLabel}
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
              className="group absolute left-1/2 top-1/2 w-[min(84vw,31rem)] -translate-x-1/2 -translate-y-1/2 will-change-transform sm:w-[min(60vw,34rem)] lg:w-[min(42vw,37rem)]"
              style={{
                opacity: state.opacity,
                pointerEvents: state.pointerEvents,
                transform: state.transform,
                zIndex: state.zIndex,
              }}
            >
              <div
                className={`rounded-[1.55rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-2.5 shadow-[0_22px_60px_rgba(0,0,0,0.28)] transition duration-300 ${
                  isActive ? "shadow-[0_32px_84px_rgba(0,0,0,0.42)]" : ""
                }`}
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
                  className="relative block aspect-[16/10] w-full overflow-hidden rounded-[1.2rem] border border-white/10 bg-black text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label={
                    isActive
                      ? t({
                          en: `Play ${item.title}`,
                          ar: `شغل ${item.title}`,
                        })
                      : t({
                          en: `Center ${item.title}`,
                          ar: `وسّط ${item.title}`,
                        })
                  }
                >
                  <Image
                    src={item.poster}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 54vw, 38vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.025]"
                    style={{ objectPosition: item.objectPosition ?? "center" }}
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,19,20,0.04),rgba(5,19,20,0.42)_38%,rgba(5,19,20,0.92)_100%)]" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/12 bg-[rgba(5,19,20,0.72)] px-3 py-1 text-[0.68rem] font-extrabold tracking-[0.14em] text-[#E5C18E] uppercase rtl:tracking-normal rtl:normal-case">
                    {railLabel}
                  </span>
                  <span className="absolute left-1/2 top-1/2 grid size-[4.6rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#E5C18E]/40 bg-[rgba(5,19,20,0.74)] text-[#E5C18E] shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md">
                    <Film size={21} aria-hidden="true" />
                  </span>
                  <figcaption className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
                    <h3 className="text-base font-extrabold leading-6 text-white sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/76 sm:text-sm">
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
