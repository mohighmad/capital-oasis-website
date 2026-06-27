import { assets } from "./assets";
import type { MediaItem } from "./media";

type PortfolioCategory =
  | "doors"
  | "commercial-decorations"
  | "restaurants-cafes"
  | "event-setup"
  | "hotel-furniture";

const categories: Record<
  PortfolioCategory,
  { categoryAr: string; categoryEn: string }
> = {
  doors: { categoryAr: "الأبواب", categoryEn: "Doors" },
  "commercial-decorations": {
    categoryAr: "ديكورات المحلات",
    categoryEn: "Commercial Decorations",
  },
  "restaurants-cafes": {
    categoryAr: "المطاعم والكافيهات",
    categoryEn: "Restaurants & Cafes",
  },
  "event-setup": {
    categoryAr: "ديكورات معارض وفعاليات",
    categoryEn: "Exhibition Décor & Events",
  },
  "hotel-furniture": {
    categoryAr: "الأثاث الفندقي",
    categoryEn: "Hotel Furniture",
  },
};

function portfolioItem(
  id: string,
  src: string,
  category: PortfolioCategory,
  titleAr: string,
  titleEn: string,
  altAr: string,
  altEn: string,
): MediaItem {
  return {
    id,
    src,
    titleAr,
    titleEn,
    category,
    ...categories[category],
    contentType: "portfolio",
    altAr,
    altEn,
  };
}

export const portfolio: MediaItem[] = [
  ...assets.doors.projects.map((src, index) =>
    portfolioItem(
      `portfolio-door-${index + 1}`,
      src,
      "doors",
      `مشروع أبواب خشبية ${index + 1}`,
      `Wooden Doors Project ${index + 1}`,
      "أبواب خشبية منفذة بتشطيب خشبي وتركيب احترافي",
      "Completed wooden doors with wood finish and professional installation",
    ),
  ),
  ...assets.commercial.decorations.map((src, index) =>
    portfolioItem(
      `portfolio-commercial-decoration-${index + 1}`,
      src,
      "commercial-decorations",
      `ديكور محل تجاري ${index + 1}`,
      `Commercial Shop Decoration ${index + 1}`,
      "أعمال ديكور وتجهيز داخلي منفذة لمحل تجاري",
      "Completed decoration and interior fit-out work for a commercial shop",
    ),
  ),
  ...assets.commercial.shops.map((src, index) =>
    portfolioItem(
      `portfolio-shop-fitout-${index + 1}`,
      src,
      "commercial-decorations",
      `تجهيز وحدة عرض تجارية ${index + 1}`,
      `Retail Display Fit-out ${index + 1}`,
      "وحدة عرض أو كاونتر تجاري منفذ حسب متطلبات الموقع",
      "Completed retail display unit or counter made for the project site",
    ),
  ),
  ...assets.commercial.restaurants.map((src, index) =>
    portfolioItem(
      `portfolio-restaurant-cafe-${index + 1}`,
      src,
      "restaurants-cafes",
      `تجهيز مطعم أو كافيه ${index + 1}`,
      `Restaurant or Cafe Fit-out ${index + 1}`,
      "أعمال تجهيز داخلي تجاري مصنفة ضمن مشاريع المطاعم والكافيهات",
      "Commercial interior fit-out classified with restaurant and cafe projects",
    ),
  ),
  ...assets.events.images.map((src, index) =>
    portfolioItem(
      `portfolio-event-${index + 1}`,
      src,
      "event-setup",
      `ديكورات معارض وفعاليات ${index + 1}`,
      `Exhibition Décor & Events ${index + 1}`,
      "ديكورات معارض وفعاليات بديكور وإضاءة مخصصة",
      "Completed event or celebration setup with custom decor and lighting",
    ),
  ),
  ...assets.exhibitionsEvents.processed.map((src, index) =>
    portfolioItem(
      `portfolio-exhibition-event-${index + 1}`,
      src,
      "event-setup",
      `ديكورات معارض وفعاليات ${index + 1}`,
      `Exhibition Décor & Events ${index + 1}`,
      "ديكورات معارض وفعاليات منفذة تشمل الخلفيات والمداخل والجلسات والإضاءة",
      "Completed exhibition and event decor including backdrops, entrances, seating, and lighting",
    ),
  ),
  ...assets.exhibitionsEvents.pdfVisuals.map((src, index) =>
    portfolioItem(
      `portfolio-exhibition-event-pdf-visual-${index + 1}`,
      src,
      "event-setup",
      `عرض بصري لديكور معرض أو فعالية ${index + 1}`,
      `Exhibition & Event Portfolio Visual ${index + 1}`,
      "عرض بصري آمن من ملف تعريفي عام لديكورات المعارض والفعاليات",
      "Safe public brochure visual for exhibition and event decor portfolio",
    ),
  ),
  ...assets.decor.projects.map((src, index) =>
    portfolioItem(
      `portfolio-hotel-furniture-${index + 1}`,
      src,
      "hotel-furniture",
      `أثاث فندقي منفذ ${index + 1}`,
      `Completed Hotel Furniture ${index + 1}`,
      "أثاث فندقي وديكور داخلي منفذ ضمن مشروع سكني",
      "Completed hotel furniture and interior decor in a residential project",
    ),
  ),
];
