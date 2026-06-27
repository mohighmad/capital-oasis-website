import { assets } from "./assets";
import type { MediaItem } from "./media";

const pricedOfferSources = [
  ...assets.doors.offers,
  ...assets.doors.pricedAds,
  "/images/capital-oasis/ads-priced/priced-ad-06.jpg",
  "/images/capital-oasis/ads-priced/priced-ad-07.png",
  "/images/capital-oasis/ads-priced/priced-ad-08.jpg",
  "/images/capital-oasis/ads-priced/priced-ad-09.jpeg",
  "/images/capital-oasis/ads-priced/priced-ad-10.jpg",
];

export const pricedOffers: MediaItem[] = pricedOfferSources.map(
  (src, index) => ({
    id: `priced-offer-${index + 1}`,
    src,
    titleAr: `عرض أبواب مسعر ${index + 1}`,
    titleEn: `Priced Door Offer ${index + 1}`,
    category: "offers",
    categoryAr: "العروض",
    categoryEn: "Offers",
    contentType: "priced-offer",
    altAr: "تصميم عرض مسعر لأبواب كابيتال واسي",
    altEn: "Capital Oasis priced promotional door offer",
  }),
);
