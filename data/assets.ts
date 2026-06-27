import logoDark from "@/LOGO/processed-transparent/production-clean/capital-oasis-logo-dark-clean-tight-2x.png";
import logoLight from "@/LOGO/processed-transparent/production-clean/capital-oasis-logo-light-clean-tight-2x.png";

const base = "/images/capital-oasis";

export const assets = {
  logo: logoDark,
  logoDark,
  logoLight,
  hero: `${base}/decor/decor-06.jpg`,
  doors: {
    featured: `${base}/doors/door-project-07.jpg`,
    projects: Array.from(
      { length: 12 },
      (_, index) => `${base}/doors/door-project-${String(index + 1).padStart(2, "0")}.jpg`,
    ),
    offers: [
      `${base}/offers/door-offer-01.jpg`,
      `${base}/offers/door-offer-02.jpg`,
      `${base}/offers/door-offer-03.jpg`,
    ],
    pricedAds: [
      `${base}/ads-priced/priced-ad-02.png`,
      `${base}/ads-priced/priced-ad-03.png`,
      `${base}/ads-priced/priced-ad-04.png`,
      `${base}/ads-priced/priced-ad-05.png`,
    ],
  },
  furniture: {
    featured: `${base}/furniture/dressing-room-01.jpg`,
    dressingRooms: [
      `${base}/furniture/dressing-room-01.jpg`,
      `${base}/furniture/dressing-room-02.jpg`,
      `${base}/furniture/dressing-room-03.jpg`,
      `${base}/furniture/dressing-room-04.jpg`,
    ],
    tvUnits: [
      `${base}/furniture/tv-unit-01.jpg`,
      `${base}/furniture/tv-unit-02.jpg`,
      `${base}/furniture/tv-unit-03.jpg`,
    ],
    kitchens: [`${base}/furniture/kitchen-01.jpg`],
    wallCladding: [`${base}/furniture/wall-cladding-01.jpg`],
    custom: [
      `${base}/furniture/furniture-01.jpg`,
      `${base}/furniture/furniture-02.jpg`,
      `${base}/furniture/furniture-03.jpg`,
    ],
  },
  commercial: {
    featured: `${base}/shops/shop-fitout-01.jpg`,
    decorations: Array.from(
      { length: 6 },
      (_, index) =>
        `${base}/commercial-decorations/commercial-decoration-${String(index + 1).padStart(2, "0")}.jpg`,
    ),
    shops: [
      `${base}/shops/shop-fitout-01.jpg`,
      `${base}/shops/shop-fitout-02.jpg`,
      `${base}/shops/shop-fitout-04.jpg`,
      `${base}/shops/shop-fitout-05.jpg`,
      `${base}/shops/shop-fitout-06.jpg`,
      `${base}/shops/shop-fitout-07.jpg`,
      `${base}/shops/shop-fitout-08.jpg`,
    ],
    restaurants: Array.from(
      { length: 7 },
      (_, index) =>
        `${base}/restaurants-cafes/restaurant-fitout-${String(index + 1).padStart(2, "0")}.jpg`,
    ),
  },
  decor: {
    featured: `${base}/decor/decor-03.jpg`,
    projects: Array.from(
      { length: 7 },
      (_, index) => `${base}/decor/decor-${String(index + 1).padStart(2, "0")}.jpg`,
    ),
  },
  nonPricedAds: Array.from(
    { length: 5 },
    (_, index) => `${base}/ads-non-priced/non-priced-ad-${String(index + 1).padStart(2, "0")}.png`,
  ),
  portfolioVideos: {
    files: Array.from(
      { length: 6 },
      (_, index) => `${base}/videos/video-${String(index + 1).padStart(2, "0")}.mp4`,
    ),
    thumbnails: Array.from(
      { length: 6 },
      (_, index) => `${base}/videos/thumbnails/video-${String(index + 1).padStart(2, "0")}.jpg`,
    ),
  },
  events: {
    images: [
      `${base}/events/event-setup-01.jpg`,
      `${base}/events/event-setup-02.jpg`,
      `${base}/events/celebration-setup-01.jpg`,
      `${base}/events/event-backdrop-01.jpg`,
      `${base}/events/event-seating-01.jpg`,
      `${base}/events/event-entrance-01.jpg`,
    ],
    videos: [
      `${base}/events/videos/event-video-01.mp4`,
      `${base}/events/videos/event-video-02.mp4`,
    ],
    thumbnails: [
      `${base}/events/thumbnails/event-video-01.jpg`,
      `${base}/events/thumbnails/event-video-02.jpg`,
    ],
  },
  exhibitionsEvents: {
    processed: [
      `${base}/exhibitions-events/processed/exhibition-event-stage-01.webp`,
      `${base}/exhibitions-events/processed/exhibition-event-seating-01.webp`,
      `${base}/exhibitions-events/processed/exhibition-event-entrance-01.webp`,
      `${base}/exhibitions-events/processed/exhibition-event-drapery-01.webp`,
      `${base}/exhibitions-events/processed/exhibition-event-seating-02.webp`,
      `${base}/exhibitions-events/processed/exhibition-event-stage-02.webp`,
      `${base}/exhibitions-events/processed/exhibition-event-entrance-02.webp`,
      `${base}/exhibitions-events/processed/exhibition-event-entrance-03.webp`,
      `${base}/exhibitions-events/processed/exhibition-event-hall-01.webp`,
    ],
    pdfVisuals: [
      `${base}/exhibitions-events/pdf-extracted/event-pdf-visual-01.webp`,
      `${base}/exhibitions-events/pdf-extracted/event-pdf-visual-02.webp`,
      `${base}/exhibitions-events/pdf-extracted/event-pdf-visual-03.webp`,
      `${base}/exhibitions-events/pdf-extracted/event-pdf-visual-04.webp`,
      `${base}/exhibitions-events/pdf-extracted/event-pdf-visual-05.webp`,
      `${base}/exhibitions-events/pdf-extracted/event-pdf-visual-06.webp`,
      `${base}/exhibitions-events/pdf-extracted/event-pdf-visual-07.webp`,
    ],
    // Branded curated event films (audio stripped, energetic music + ديكورات معارض وفعاليات logo outro). Originals kept in exhibitions-events/videos/original.
    videos: [
      `${base}/exhibitions-events/videos/processed/event-exhibitions-booths.mp4`,
      `${base}/exhibitions-events/videos/processed/event-halls-ceremonies.mp4`,
    ],
    thumbnails: [
      `${base}/exhibitions-events/videos/processed/event-exhibitions-booths.jpg`,
      `${base}/exhibitions-events/videos/processed/event-halls-ceremonies.jpg`,
    ],
  },
  team: {
    // Processed (enhanced) team & engineering supervision photos. Originals kept in team/.
    photos: [
      `${base}/team/processed/team-supervision-site-01.webp`,
      `${base}/team/processed/team-engineering-onsite-02.webp`,
      `${base}/team/processed/team-crew-onsite-03.webp`,
      `${base}/team/processed/team-site-followup-04.webp`,
      `${base}/team/processed/team-leadership-showroom-05.webp`,
    ],
    // Branded master team film (audio stripped, instrumental music + team logo outro). Originals kept in team/videos/original.
    videos: [`${base}/team/videos/processed/team-film-01.mp4`],
    thumbnails: [`${base}/team/videos/processed/team-film-01.jpg`],
  },
  previousWorks: {
    // Branded curated previous-works films (audio stripped, instrumental music + سوابق أعمالنا logo outro). Originals kept in previous-works/videos/original.
    videos: {
      commercialRestaurant: `${base}/previous-works/videos/processed/pw-commercial-restaurant.mp4`,
      commercialShops: `${base}/previous-works/videos/processed/pw-commercial-shops.mp4`,
      doorsInstalled: `${base}/previous-works/videos/processed/pw-doors-installed.mp4`,
      doorsManufacturing: `${base}/previous-works/videos/processed/pw-doors-manufacturing.mp4`,
    },
    thumbnails: {
      commercialRestaurant: `${base}/previous-works/videos/processed/pw-commercial-restaurant.jpg`,
      commercialShops: `${base}/previous-works/videos/processed/pw-commercial-shops.jpg`,
      doorsInstalled: `${base}/previous-works/videos/processed/pw-doors-installed.jpg`,
      doorsManufacturing: `${base}/previous-works/videos/processed/pw-doors-manufacturing.jpg`,
    },
  },
  designRenders: {
    // Premium design concept renders (processed copies of source تصاميم اثاث كابيتال). Designs only — not Previous Works.
    dressingRooms: [
      `${base}/designs/design-dressing-room-render-01.webp`,
      `${base}/designs/design-dressing-room-render-02.webp`,
      `${base}/designs/design-dressing-room-render-03.webp`,
      `${base}/designs/design-dressing-room-render-04.webp`,
      `${base}/designs/design-wardrobe-render-01.webp`,
      `${base}/designs/design-wardrobe-render-02.webp`,
    ],
    tvUnits: [
      `${base}/designs/design-tv-unit-render-01.webp`,
      `${base}/designs/design-tv-unit-render-02.webp`,
    ],
    kitchens: [`${base}/designs/design-kitchen-render-01.webp`],
    decor: [
      `${base}/designs/design-decor-render-01.webp`,
      `${base}/designs/design-decor-render-02.webp`,
      `${base}/designs/design-decor-render-03.webp`,
    ],
  },
} as const;
