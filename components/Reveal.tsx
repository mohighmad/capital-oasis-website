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

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, shown };
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
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal
      className={`${shown ? "is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </div>
  );
}
