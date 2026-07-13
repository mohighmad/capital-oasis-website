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
const readySiteVideos = "/videos/capital-oasis/site-videos";
const readyEventsVideos = `${readySiteVideos}/events`;
const readyCommercialVideos = `${readySiteVideos}/commercial-shops`;

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
    src: `${readyEventsVideos}/mushaf-writing-competition-site-ready.mp4`,
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
    src: `${readyEventsVideos}/princess-seetah-award-site-ready-v2.mp4`,
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
    src: `${readyEventsVideos}/king-salman-quran-competition-site-ready.mp4`,
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
    src: "/videos/capital-oasis/site-videos/doors/doors-after-installation-approved-batch1-v1.mp4",
    poster: "/images/capital-oasis/previous-works/videos/processed/pw-doors-installed.jpg",
    category: "doors",
    categoryAr: "أبواب خشبية",
    categoryEn: "Wooden Doors",
    titleAr: "الأبواب بعد التركيب",
    titleEn: "Doors After Installation",
    altAr: "صورة مصغرة تعرض فيلم الأبواب بعد التركيب",
    altEn: "Thumbnail for the Doors After Installation video",
  }),
  projectVideo({
    id: "pw-doors-manufacturing",
    src: "/videos/capital-oasis/site-videos/doors/doors-manufacturing-approved-batch1-v1.mp4",
    poster: "/images/capital-oasis/previous-works/videos/processed/pw-doors-manufacturing.jpg",
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
    src: `${readyCommercialVideos}/almasia-restaurants-site-ready.mp4`,
    poster: `${curatedPosters}/pw-commercial-restaurant-poster-v6.webp`,
    category: "commercial",
    categoryAr: "ديكورات محلات تجارية",
    categoryEn: "Commercial Decorations",
    titleAr: "مطاعم الماسيه",
    titleEn: "Almasia Restaurants",
    altAr: "صورة مصغرة تعرض فيلم تجهيز مطاعم الماسيه",
    altEn: "Thumbnail for the Almasia Restaurants fit-out video",
  }),
  projectVideo({
    id: "pw-commercial-shops",
    src: `${readyCommercialVideos}/aljazira-super-site-ready.mp4`,
    poster: `${curatedPosters}/pw-commercial-shops-poster-v6.webp`,
    category: "commercial",
    categoryAr: "ديكورات محلات تجارية",
    categoryEn: "Commercial Decorations",
    titleAr: "الجزيره سوبر ماركت",
    titleEn: "Aljazira Super",
    altAr: "صورة مصغرة تعرض فيلم تجهيز الجزيره سوبر ماركت",
    altEn: "Thumbnail for the Aljazira Super fit-out video",
  }),
  projectVideo({
    id: "pw-botella-store",
    src: `${readyCommercialVideos}/botella-gift-shop-site-ready.mp4`,
    poster: `${curatedPosters}/pw-botella-store-poster-v6.webp`,
    category: "commercial",
    categoryAr: "ديكورات محلات تجارية",
    categoryEn: "Commercial Decorations",
    titleAr: "فيديو محل الهدايا بوتيلا",
    titleEn: "Botella Gift Shop Video",
    altAr: "صورة مصغرة تعرض فيلم محل الهدايا بوتيلا",
    altEn: "Thumbnail for the Botella Gift Shop video",
  }),
];
