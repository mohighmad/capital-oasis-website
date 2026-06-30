"use client";

import { useEffect, useRef, useState } from "react";

export type LightboxItem = {
  id: string;
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  groupId: string;
  groupLabel?: string;
};

export function useImageLightbox(items: LightboxItem[]) {
  const openerRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    if (items.length === 0) {
      setActiveIndex(null);
      return;
    }
    if (activeIndex >= items.length) {
      setActiveIndex(items.length - 1);
    }
  }, [activeIndex, items.length]);

  const activeItem =
    activeIndex === null ? null : (items[activeIndex] ?? null);

  function openAtIndex(index: number, trigger?: HTMLElement | null) {
    if (index < 0 || index >= items.length) return;
    openerRef.current =
      trigger ??
      (document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null);
    setActiveIndex(index);
  }

  function close() {
    setActiveIndex(null);

    if (openerRef.current) {
      const opener = openerRef.current;
      window.requestAnimationFrame(() => opener.focus());
    }
  }

  function goToPrevious() {
    setActiveIndex((current) => {
      if (current === null) return current;
      return Math.max(current - 1, 0);
    });
  }

  function goToNext() {
    setActiveIndex((current) => {
      if (current === null) return current;
      return Math.min(current + 1, items.length - 1);
    });
  }

  return {
    activeIndex,
    activeItem,
    canGoNext: activeIndex !== null && activeIndex < items.length - 1,
    canGoPrevious: activeIndex !== null && activeIndex > 0,
    close,
    goToNext,
    goToPrevious,
    isOpen: activeIndex !== null,
    openAtIndex,
    total: items.length,
  };
}
