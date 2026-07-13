"use client";

import { useEffect, useMemo, useState, type FocusEvent } from "react";

type RotationBinding = {
  "data-hero-rotation": "true";
  "data-hero-rotation-image-set-interval": string;
  "data-hero-rotation-index": string;
  "data-hero-rotation-layout-interval": string;
  "data-hero-rotation-mounted": "true" | "false";
  "data-hero-rotation-paused": "true" | "false";
  "data-hero-rotation-reduced-motion": "true" | "false";
  "data-hero-rotation-set-index": string;
  onBlurCapture: (event: FocusEvent<HTMLElement>) => void;
  onFocusCapture: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function useRotatingHeroMedia<T>(
  items: readonly T[],
  slotCount = items.length,
  intervalMs = 5000,
  options?: {
    imageSetIntervalMs?: number;
    isPaused?: boolean;
  },
) {
  const [layoutIndex, setLayoutIndex] = useState(0);
  const [imageSetIndex, setImageSetIndex] = useState(0);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePreference);

      return () => {
        mediaQuery.removeEventListener("change", updatePreference);
      };
    }

    mediaQuery.addListener(updatePreference);

    return () => {
      mediaQuery.removeListener(updatePreference);
    };
  }, []);

  const pauseRequested = isFocusWithin || isHovered || options?.isPaused === true;

  const imageSetIntervalMs = options?.imageSetIntervalMs ?? intervalMs * 2;
  const safeSlotCount = Math.min(slotCount, items.length);
  const imageSetCount = Math.max(1, Math.ceil(items.length / Math.max(1, safeSlotCount)));

  useEffect(() => {
    if (!isMounted || prefersReducedMotion || pauseRequested || items.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setLayoutIndex((current) => (current + 1) % Math.max(1, safeSlotCount));
    }, intervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [intervalMs, isMounted, items.length, pauseRequested, prefersReducedMotion, safeSlotCount]);

  useEffect(() => {
    if (!isMounted || prefersReducedMotion || pauseRequested || items.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setImageSetIndex((current) => (current + 1) % imageSetCount);
    }, imageSetIntervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [imageSetCount, imageSetIntervalMs, isMounted, items.length, pauseRequested, prefersReducedMotion]);

  const slotItems = useMemo(
    () => {
      const setStart = (imageSetIndex * safeSlotCount) % items.length;
      const currentSet = Array.from({ length: safeSlotCount }, (_, slotIndex) => {
        return items[(setStart + slotIndex) % items.length]!;
      });

      return currentSet.map((_, slotIndex) => currentSet[(slotIndex + layoutIndex) % currentSet.length]!);
    },
    [imageSetIndex, items, layoutIndex, safeSlotCount],
  );

  const activeIndex = (imageSetIndex * safeSlotCount + layoutIndex) % Math.max(1, items.length);

  const binding: RotationBinding = {
    "data-hero-rotation": "true",
    "data-hero-rotation-image-set-interval": String(imageSetIntervalMs),
    "data-hero-rotation-index": String(activeIndex),
    "data-hero-rotation-layout-interval": String(intervalMs),
    "data-hero-rotation-mounted": isMounted ? "true" : "false",
    "data-hero-rotation-paused": pauseRequested ? "true" : "false",
    "data-hero-rotation-reduced-motion": prefersReducedMotion
      ? "true"
      : "false",
    "data-hero-rotation-set-index": String(imageSetIndex),
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onFocusCapture: () => setIsFocusWithin(true),
    onBlurCapture: (event) => {
      const nextTarget = event.relatedTarget;

      if (!nextTarget || !event.currentTarget.contains(nextTarget as Node)) {
        setIsFocusWithin(false);
      }
    },
  };

  return {
    activeIndex,
    binding,
    intervalMs,
    isPaused: pauseRequested,
    prefersReducedMotion,
    slotItems,
  };
}
