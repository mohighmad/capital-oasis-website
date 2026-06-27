import type { Bilingual } from "./content";

export type ContentType =
  | "design"
  | "portfolio"
  | "non-priced-ad"
  | "priced-offer"
  | "portfolio-video";

export type MediaItem = {
  id: string;
  src: string;
  titleAr: string;
  titleEn: string;
  category: string;
  categoryAr: string;
  categoryEn: string;
  contentType: ContentType;
  altAr: string;
  altEn: string;
};

export type VideoMediaItem = MediaItem & {
  contentType: "portfolio-video";
  poster?: string;
};

export const bilingualTitle = (item: MediaItem): Bilingual => ({
  ar: item.titleAr,
  en: item.titleEn,
});

export const bilingualAlt = (item: MediaItem): Bilingual => ({
  ar: item.altAr,
  en: item.altEn,
});
