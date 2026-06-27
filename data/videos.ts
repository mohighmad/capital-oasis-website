import type { Bilingual } from "./content";
import type { VideoMediaItem } from "./media";

export type VideoCategory =
  | "all"
  | "events"
  | "team"
  | "doors"
  | "commercial";

export type ProjectVideo = VideoMediaItem & {
  category: Exclude<VideoCategory, "all">;
  video: string;
  thumbnail: string;
  title: Bilingual;
  alt: Bilingual;
};

export const videoFilters: { id: VideoCategory; label: Bilingual }[] = [
  { id: "all", label: { en: "All", ar: "الكل" } },
  {
    id: "events",
    label: { en: "Exhibition Decor & Events", ar: "ديكورات معارض وفعاليات" },
  },
  { id: "doors", label: { en: "Wooden Doors", ar: "أبواب خشبية" } },
  {
    id: "commercial",
    label: { en: "Commercial Decorations", ar: "ديكورات محلات تجارية" },
  },
];

type VideoInput = {
  id: string;
  src: string;
  poster: string;
  category: Exclude<VideoCategory, "all">;
  categoryAr: string;
  categoryEn: string;
  titleAr: string;
  titleEn: string;
  altAr: string;
  altEn: string;
};

const finalVideos = "/images/capital-oasis/project-videos/final";
const curatedPosters = "/images/capital-oasis/project-videos/posters-curated-v6";

function projectVideo(input: VideoInput): ProjectVideo {
  return {
    ...input,
    contentType: "portfolio-video",
    video: input.src,
    thumbnail: input.poster,
    title: { ar: input.titleAr, en: input.titleEn },
    alt: { ar: input.altAr, en: input.altEn },
  };
}

export const projectVideos: ProjectVideo[] = [
  projectVideo({
    id: "event-exhibitions-booths",
    src: `${finalVideos}/event-exhibitions-booths-final-v6.mp4`,
    poster: `${curatedPosters}/event-exhibitions-booths-poster-v6.webp`,
    category: "events",
    categoryAr: "المعارض والمنصات",
    categoryEn: "Exhibitions & Booths",
    titleAr: "قمة جلوبال بروبتك",
    titleEn: "Global PropTech Summit",
    altAr: "صورة مصغرة تعرض هوية كابيتال واسي لفيلم قمة جلوبال بروبتك",
    altEn: "Capital Oasis branded thumbnail for the Global PropTech Summit video",
  }),
  projectVideo({
    id: "event-mushaf-writing-competition",
    src: `${finalVideos}/event-mushaf-writing-competition-final-v6.mp4`,
    poster: `${curatedPosters}/event-mushaf-writing-competition-poster-v6.webp`,
    category: "events",
    categoryAr: "ديكورات معارض وفعاليات",
    categoryEn: "Exhibition Decor & Events",
    titleAr: "مسابقة كتابة المصحف",
    titleEn: "Mushaf Writing Competition",
    altAr: "صورة مصغرة تعرض هوية كابيتال واسي لفيلم مسابقة كتابة المصحف",
    altEn: "Capital Oasis branded thumbnail for the Mushaf Writing Competition video",
  }),
  projectVideo({
    id: "event-princess-seetah-award",
    src: `${finalVideos}/event-princess-seetah-award-final-v6.mp4`,
    poster: `${curatedPosters}/event-princess-seetah-award-poster-v6.webp`,
    category: "events",
    categoryAr: "ديكورات معارض وفعاليات",
    categoryEn: "Exhibition Decor & Events",
    titleAr: "جائزة الأميرة صيتة",
    titleEn: "Princess Seetah Award",
    altAr: "صورة مصغرة تعرض هوية كابيتال واسي لفيلم جائزة الأميرة صيتة",
    altEn: "Capital Oasis branded thumbnail for the Princess Seetah Award video",
  }),
  projectVideo({
    id: "event-king-salman-quran-award",
    src: `${finalVideos}/event-king-salman-quran-award-final-v6.mp4`,
    poster: `${curatedPosters}/event-king-salman-quran-award-poster-v6.webp`,
    category: "events",
    categoryAr: "القاعات والفعاليات",
    categoryEn: "Halls & Ceremonies",
    titleAr: "جائزة الملك سلمان للقرآن الكريم",
    titleEn: "King Salman Quran Award",
    altAr: "صورة مصغرة تعرض هوية كابيتال واسي لفيلم جائزة الملك سلمان للقرآن الكريم",
    altEn: "Capital Oasis branded thumbnail for the King Salman Quran Award video",
  }),
  projectVideo({
    id: "pw-doors-installed",
    src: `${finalVideos}/pw-doors-installed-final-v6.mp4`,
    poster: `${curatedPosters}/pw-doors-installed-poster-v6.webp`,
    category: "doors",
    categoryAr: "أبواب خشبية",
    categoryEn: "Wooden Doors",
    titleAr: "الأبواب المنفذة",
    titleEn: "Installed Doors",
    altAr: "صورة مصغرة تعرض هوية كابيتال واسي لفيلم الأبواب المنفذة",
    altEn: "Capital Oasis branded thumbnail for the Installed Doors video",
  }),
  projectVideo({
    id: "pw-doors-manufacturing",
    src: `${finalVideos}/pw-doors-manufacturing-final-v6.mp4`,
    poster: `${curatedPosters}/pw-doors-manufacturing-poster-v6.webp`,
    category: "doors",
    categoryAr: "أبواب خشبية",
    categoryEn: "Wooden Doors",
    titleAr: "تصنيع أبواب خشبية",
    titleEn: "Wooden Door Manufacturing",
    altAr: "صورة مصغرة تعرض هوية كابيتال واسي لفيلم تصنيع الأبواب",
    altEn: "Capital Oasis branded thumbnail for the Door Manufacturing video",
  }),
  projectVideo({
    id: "pw-commercial-restaurant",
    src: `${finalVideos}/pw-commercial-restaurant-final-v6.mp4`,
    poster: `${curatedPosters}/pw-commercial-restaurant-poster-v6.webp`,
    category: "commercial",
    categoryAr: "ديكورات محلات تجارية",
    categoryEn: "Commercial Decorations",
    titleAr: "أعمال المطاعم التجارية",
    titleEn: "Commercial Restaurant Works",
    altAr: "صورة مصغرة تعرض هوية كابيتال واسي لفيلم أعمال المطاعم التجارية",
    altEn: "Capital Oasis branded thumbnail for the Commercial Restaurant Works video",
  }),
  projectVideo({
    id: "pw-commercial-shops",
    src: `${finalVideos}/pw-commercial-shops-final-v6.mp4`,
    poster: `${curatedPosters}/pw-commercial-shops-poster-v6.webp`,
    category: "commercial",
    categoryAr: "ديكورات محلات تجارية",
    categoryEn: "Commercial Decorations",
    titleAr: "أعمال المحلات التجارية",
    titleEn: "Commercial Shops Works",
    altAr: "صورة مصغرة تعرض هوية كابيتال واسي لفيلم أعمال المحلات التجارية",
    altEn: "Capital Oasis branded thumbnail for the Commercial Shops Works video",
  }),
  projectVideo({
    id: "pw-botella-store",
    src: `${finalVideos}/pw-botella-store-final-v6.mp4`,
    poster: `${curatedPosters}/pw-botella-store-poster-v6.webp`,
    category: "commercial",
    categoryAr: "ديكورات محلات تجارية",
    categoryEn: "Commercial Decorations",
    titleAr: "تنفيذ متجر بوتيلا",
    titleEn: "Botella Store Fit-out",
    altAr: "صورة مصغرة تعرض هوية كابيتال واسي لفيلم تنفيذ متجر بوتيلا",
    altEn: "Capital Oasis branded thumbnail for the Botella Store Fit-out video",
  }),
];
