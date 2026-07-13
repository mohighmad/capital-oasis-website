"use client";

import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

/**
 * Reveal-on-scroll hook. Returns a ref to attach to the element and whether it
 * has entered view yet. Reveals once; shows immediately when motion is reduced
 * or IntersectionObserver is unavailable so content is never withheld.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let frameId = 0;
    let fallbackId = 0;
    let disposed = false;
    let observer: IntersectionObserver | null = null;
    let handleViewportChange = () => {};

    const removeViewportListeners = () => {
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("hashchange", handleViewportChange);
    };

    const show = () => {
      if (disposed) return;
      setShown(true);
      setReady(true);
      observer?.disconnect();
      removeViewportListeners();
      window.clearTimeout(fallbackId);
    };

    const markReady = () => {
      if (!disposed) setReady(true);
    };

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const el = ref.current;
    if (!el || prefersReduced || typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const revealIfVisible = () => {
      const rect = el.getBoundingClientRect();
      const viewportMargin = Math.max(window.innerHeight * 0.2, 160);
      const hasVisiblePixels =
        rect.bottom > -viewportMargin && rect.top < window.innerHeight + viewportMargin;

      if (hasVisiblePixels) {
        show();
        return true;
      }

      return false;
    };

    handleViewportChange = () => {
      if (!revealIfVisible()) return;
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
          }
        });
      },
      { threshold: 0, rootMargin: "20% 0px 20% 0px" },
    );

    observer.observe(el);
    if (!revealIfVisible()) markReady();
    frameId = window.requestAnimationFrame(() => {
      if (!revealIfVisible()) markReady();
    });
    fallbackId = window.setTimeout(show, 1600);
    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange, { passive: true });
    window.addEventListener("hashchange", handleViewportChange, { passive: true });

    return () => {
      disposed = true;
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(fallbackId);
      removeViewportListeners();
    };
  }, []);

  return { ref, shown, ready };
}

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** Optional stagger delay in ms applied to the transition. */
  delay?: number;
  className?: string;
};

/**
 * Lightweight, dependency-free scroll reveal: a gentle fade + small upward
 * movement the first time the element enters the viewport. Transform/opacity
 * only (no layout shift), reveals once, and never hides content when
 * IntersectionObserver is unavailable or motion is reduced (see globals.css).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  style,
  ...rest
}: RevealProps) {
  const { ref, shown, ready } = useReveal<HTMLDivElement>();
  const visibilityClass = shown ? "is-visible" : ready ? "is-pending" : "";

  return (
    <div
      ref={ref}
      data-reveal
      className={`${visibilityClass}${className ? ` ${className}` : ""}`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </div>
  );
}
