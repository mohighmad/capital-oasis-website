"use client";

import { ImageModal } from "@/components/media/ImageModal";
import { RotatingHeroMediaImage } from "@/components/media/RotatingHeroMediaImage";
import { useRotatingHeroMedia } from "@/components/media/useRotatingHeroMedia";
import { useImageLightbox, type LightboxItem } from "@/components/media/useImageLightbox";

export type ResolvedHeroMediaItem = {
  alt: string;
  caption: string;
  groupId: string;
  groupLabel: string;
  id: string;
  objectFit: "contain" | "cover";
  objectPosition: string;
  src: string;
  title: string;
};

type UnifiedHeroMediaShowcaseProps = {
  items: ResolvedHeroMediaItem[];
  mediaShellClassName: string;
  tone?: "dark" | "light";
};

export function UnifiedHeroMediaShowcase({
  items,
  mediaShellClassName,
  tone = "light",
}: UnifiedHeroMediaShowcaseProps) {
  const modalItems: LightboxItem[] = items.map((item) => ({
    id: item.id,
    src: item.src,
    alt: item.alt,
    title: item.title,
    caption: item.caption,
    groupId: item.groupId,
    groupLabel: item.groupLabel,
  }));
  const lightbox = useImageLightbox(modalItems);
  const heroRotation = useRotatingHeroMedia(items, Math.min(4, items.length), 3000, {
    imageSetIntervalMs: 12000,
    isPaused: lightbox.isOpen,
  });
  const mainItem = heroRotation.slotItems[0] ?? items[0];
  const supportingItems = heroRotation.slotItems.slice(1, 4);

  if (!mainItem) {
    return null;
  }

  function openHeroImage(itemId: string, trigger: HTMLButtonElement) {
    const index = modalItems.findIndex((item) => item.id === itemId);

    if (index >= 0) {
      lightbox.openAtIndex(index, trigger);
    }
  }

  function renderSupportingCard(
    item: ResolvedHeroMediaItem,
    {
      compact = false,
      extraClassName = "",
      sizes,
    }: {
      compact?: boolean;
      extraClassName?: string;
      sizes: string;
    },
  ) {
    return (
      <button
        key={item.id}
        type="button"
        onClick={(event) => openHeroImage(item.id, event.currentTarget)}
        className={`group relative overflow-hidden rounded-[1.35rem] text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)] ${
          compact ? "" : "min-h-[8rem] sm:min-h-[8.75rem]"
        } ${extraClassName}`}
        aria-label={item.title}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/14" />
        <RotatingHeroMediaImage
          id={item.id}
          src={item.src}
          alt={item.alt}
          sizes={sizes}
          objectFit={item.objectFit}
          imageClassName="object-cover transition duration-700 group-hover:scale-[1.035]"
          objectPosition={item.objectPosition}
        />
        <span
          className={`pointer-events-none absolute inset-0 ${
            tone === "dark"
              ? "bg-[linear-gradient(180deg,rgba(4,18,18,0.03),rgba(4,18,18,0.2)_44%,rgba(4,18,18,0.88)_100%)]"
              : "bg-[linear-gradient(180deg,rgba(23,18,14,0.02),rgba(23,18,14,0.18)_44%,rgba(23,18,14,0.72)_100%)]"
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-x-2 bottom-2 grid sm:inset-x-3 sm:bottom-3 ${
            compact ? "gap-1" : "gap-1.5"
          }`}
        >
          <h4
            className={`font-semibold tracking-normal text-white ${
              compact ? "text-[0.78rem] sm:text-[0.82rem]" : "text-sm sm:text-base"
            }`}
          >
            {item.title}
          </h4>
          <p
            className={`${
              compact
                ? "hidden text-[0.7rem] leading-5 text-white/66 sm:block"
                : "text-xs leading-6 text-white/72"
            }`}
          >
            {item.caption}
          </p>
        </div>
      </button>
    );
  }

  return (
    <>
      <div
        className={`hero-media-panel relative isolate h-full min-h-[28.6rem] overflow-hidden rounded-[2rem] border p-2.5 sm:p-3 lg:min-h-[34.5rem] xl:min-h-[35.25rem] ${mediaShellClassName}`}
        {...heroRotation.binding}
      >
        <div className="grid h-full min-h-[25.35rem] grid-rows-[minmax(0,7fr)_minmax(0,3fr)] gap-3 sm:min-h-[28.6rem] sm:gap-3.5 lg:min-h-[31.5rem]">
          <button
            type="button"
            onClick={(event) => openHeroImage(mainItem.id, event.currentTarget)}
            className="group relative min-h-[18.2rem] overflow-hidden rounded-[1.7rem] text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)] sm:min-h-[20.8rem] lg:min-h-0"
            aria-label={mainItem.title}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/14" />
            <RotatingHeroMediaImage
              id={mainItem.id}
              src={mainItem.src}
              alt={mainItem.alt}
              priority
              sizes="(max-width: 1024px) 100vw, 62vw"
              objectFit={mainItem.objectFit}
              imageClassName="object-cover transition duration-700 group-hover:scale-[1.025]"
              objectPosition={mainItem.objectPosition}
            />
            <span
              className={`pointer-events-none absolute inset-0 ${
                tone === "dark"
                  ? "bg-[linear-gradient(180deg,rgba(4,18,18,0.04),rgba(4,18,18,0.28)_42%,rgba(4,18,18,0.92)_100%)]"
                  : "bg-[linear-gradient(180deg,rgba(23,18,14,0.03),rgba(23,18,14,0.22)_44%,rgba(23,18,14,0.82)_100%)]"
              }`}
            />
            <div className="pointer-events-none absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
              <span
                className={`inline-flex rounded-full border px-3 py-1 text-[0.7rem] font-extrabold ${
                  tone === "dark"
                    ? "border-white/14 bg-[rgba(4,18,18,0.72)] text-[#E7C98C]"
                    : "border-white/45 bg-[rgba(255,249,240,0.76)] text-[#72543A]"
                }`}
              >
                {mainItem.groupLabel}
              </span>
              <h3 className="mt-3 text-[1.2rem] font-semibold tracking-normal text-white sm:text-[1.38rem]">
                {mainItem.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/76">
                {mainItem.caption}
              </p>
            </div>
          </button>

          {supportingItems.length ? (
            <div className="grid min-h-[7.5rem] grid-cols-3 gap-2 sm:min-h-[9.1rem] sm:gap-3.5 lg:min-h-0">
              {supportingItems.map((item) =>
                renderSupportingCard(item, {
                  compact: true,
                  extraClassName: "min-h-[7.5rem] sm:min-h-[9.1rem] lg:min-h-0",
                  sizes: "(max-width: 640px) 31vw, (max-width: 1024px) 31vw, 19vw",
                }),
              )}
            </div>
          ) : null}
        </div>
      </div>

      <ImageModal
        activeIndex={lightbox.activeIndex}
        canGoNext={lightbox.canGoNext}
        canGoPrevious={lightbox.canGoPrevious}
        items={modalItems}
        onClose={lightbox.close}
        onNext={lightbox.goToNext}
        onPrevious={lightbox.goToPrevious}
      />
    </>
  );
}
