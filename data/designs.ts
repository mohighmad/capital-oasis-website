import type { MediaItem } from "./media";

type DesignCategory =
  | "dressing-rooms"
  | "tv-units"
  | "kitchens"
  | "decor"
  | "storage-office"
  | "vanity-bedroom"
  | "wall-cladding";

const categories: Record<
  DesignCategory,
  { categoryAr: string; categoryEn: string }
> = {
  "dressing-rooms": { categoryAr: "خزائن وغرف ملابس", categoryEn: "Wardrobes & Dressing" },
  "tv-units": { categoryAr: "وحدات تلفزيون", categoryEn: "TV Units" },
  kitchens: { categoryAr: "مطابخ", categoryEn: "Kitchens" },
  decor: { categoryAr: "ديكور ولوبيات", categoryEn: "Decorative & Lobby" },
  "storage-office": { categoryAr: "تخزين ومكاتب", categoryEn: "Storage & Office" },
  "vanity-bedroom": { categoryAr: "تسريحات وغرف نوم", categoryEn: "Vanity & Bedroom" },
  "wall-cladding": { categoryAr: "التكسيات", categoryEn: "Wall Cladding" },
};

function design(
  id: string,
  src: string,
  category: DesignCategory,
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
    contentType: "design",
    altAr,
    altEn,
  };
}

const designsBase = "/images/capital-oasis/designs";

// Confirmed, ownership-cleared Furniture / Design Gallery renders — the single
// curated source of the Designs tab. This list is deduplicated by design: the
// previous auto-generated furniture/render entries were removed because they
// were the same source renders (e.g. one kitchen render appeared 3x). Order =
// approved display order (12 primary first → 6 support). The gallery shows the
// first 12 by default (INITIAL_VISIBLE_ITEMS), so the 12 primary are the initial
// view and the 6 support reveal on "Show more". Near-duplicates (lounge alt;
// extra walk-in-wardrobe variants) are kept in the support tier so they never
// sit beside their primary counterpart.
export const designs: MediaItem[] = [
  // --- Primary 12 (display order 1,5,2,9,7,4,6,3,11,10,8,12) ---
  design(
    "design-luxury-lobby-lounge",
    `${designsBase}/capital-oasis-design-luxury-lobby-lounge.webp`,
    "decor",
    "تصميم لوبي ومجلس فاخر",
    "Luxury Lobby & Lounge Design",
    "تصميم لوبي ومجلس فاخر بديكور خشبي وإضاءة راقية",
    "Luxury lobby and lounge concept with wood screen and refined lighting",
  ),
  design(
    "design-open-walk-in-wardrobe",
    `${designsBase}/capital-oasis-design-open-walk-in-wardrobe.webp`,
    "dressing-rooms",
    "غرفة ملابس مفتوحة",
    "Open Walk-in Wardrobe",
    "تصميم غرفة ملابس مفتوحة بخزائن وتفاصيل تخزين عصرية",
    "Open walk-in wardrobe concept with contemporary storage",
  ),
  design(
    "design-backlit-marble-tv-unit",
    `${designsBase}/capital-oasis-design-backlit-marble-tv-unit.webp`,
    "tv-units",
    "وحدة تلفزيون بإضاءة خلفية ورخام",
    "Backlit Marble TV Unit",
    "تصميم وحدة تلفزيون برخام وإضاءة خلفية ونيش مضيء",
    "Marble TV unit concept with backlighting and lit niches",
  ),
  design(
    "design-glass-dressing-room",
    `${designsBase}/capital-oasis-design-glass-dressing-room.webp`,
    "dressing-rooms",
    "غرفة ملابس زجاجية",
    "Glass Dressing Room",
    "تصميم غرفة ملابس زجاجية بإضاءة وتنظيم متكامل",
    "Glass walk-in dressing room with lighting and full organization",
  ),
  design(
    "design-luxury-console-wall-decor",
    `${designsBase}/capital-oasis-design-luxury-console-wall-decor.webp`,
    "decor",
    "كونسول وديكور جداري فاخر",
    "Luxury Console & Wall Décor",
    "تصميم كونسول فاخر مع ديكور جداري دائري",
    "Luxury console concept with decorative medallion wall",
  ),
  design(
    "design-modern-kitchen",
    `${designsBase}/capital-oasis-design-modern-kitchen.webp`,
    "kitchens",
    "تصميم مطبخ عصري",
    "Modern Kitchen Design",
    "تصميم مطبخ عصري يوضح الخزائن ومناطق العمل",
    "Modern kitchen design showing cabinetry and work zones",
  ),
  design(
    "design-illuminated-glass-wardrobe",
    `${designsBase}/capital-oasis-design-illuminated-glass-wardrobe.webp`,
    "dressing-rooms",
    "خزانة زجاجية بإضاءة",
    "Illuminated Glass Wardrobe",
    "تصميم خزانة ملابس زجاجية ركنية بإضاءة داخلية",
    "Illuminated corner glass wardrobe concept",
  ),
  design(
    "design-wood-slat-tv-wall",
    `${designsBase}/capital-oasis-design-wood-slat-tv-wall.webp`,
    "tv-units",
    "جدار تلفزيون بتشطيب خشبي",
    "Wood-Finish TV Wall",
    "تصميم جدار تلفزيون بتكسية خشبية وكونسول معلق",
    "Wood-slat TV wall concept with floating console",
  ),
  design(
    "design-curved-minimalist-console",
    `${designsBase}/capital-oasis-design-curved-minimalist-console.webp`,
    "decor",
    "كونسول بتصميم انسيابي",
    "Curved Minimalist Console",
    "تصميم كونسول انسيابي بسيط وأنيق",
    "Curved minimalist console concept",
  ),
  design(
    "design-corner-walk-in-wardrobe",
    `${designsBase}/capital-oasis-design-corner-walk-in-wardrobe.webp`,
    "dressing-rooms",
    "غرفة ملابس ركنية بإضاءة",
    "Lit Corner Walk-in Wardrobe",
    "تصميم غرفة ملابس ركنية بإضاءة دافئة وتفاصيل خشبية",
    "Corner walk-in wardrobe concept with warm lighting",
  ),
  design(
    "design-storage-coffee-station-unit",
    `${designsBase}/capital-oasis-design-storage-coffee-station-unit.webp`,
    "storage-office",
    "وحدة تخزين وركن قهوة",
    "Storage & Coffee-Station Unit",
    "تصميم وحدة تخزين مدمجة مع ركن قهوة ونيش مضيء",
    "Fitted storage unit concept with coffee station and lit niches",
  ),
  design(
    "design-bedroom-vanity",
    `${designsBase}/capital-oasis-design-bedroom-vanity.webp`,
    "vanity-bedroom",
    "تسريحة غرفة نوم",
    "Bedroom Vanity Design",
    "تصميم تسريحة غرفة نوم عصرية بمقعد منحني",
    "Modern bedroom vanity concept with curved stool",
  ),
  // --- Support 6 (reveal on Show more) ---
  design(
    "design-lounge-wardrobe-alt",
    `${designsBase}/capital-oasis-design-lounge-wardrobe-alt.webp`,
    "decor",
    "لوبي وغرفة ملابس",
    "Lounge & Wardrobe",
    "تصميم لوبي مع غرفة ملابس بإضاءة راقية",
    "Lounge with wardrobe concept and refined lighting",
  ),
  design(
    "design-walk-in-wardrobe-system",
    `${designsBase}/capital-oasis-design-walk-in-wardrobe-system.webp`,
    "dressing-rooms",
    "نظام غرفة ملابس مفتوحة",
    "Walk-in Wardrobe System",
    "تصميم نظام غرفة ملابس مفتوحة بخزائن منظمة",
    "Open walk-in wardrobe system concept",
  ),
  design(
    "design-mirrored-wardrobe-doors",
    `${designsBase}/capital-oasis-design-mirrored-wardrobe-doors.webp`,
    "dressing-rooms",
    "أبواب خزانة بمرايا",
    "Mirrored Wardrobe Doors",
    "تصميم خزانة ملابس بأبواب مرايا أنيقة",
    "Wardrobe concept with elegant mirrored doors",
  ),
  design(
    "design-glass-display-coffee-station",
    `${designsBase}/capital-oasis-design-glass-display-coffee-station.webp`,
    "storage-office",
    "خزانة عرض زجاجية وركن قهوة",
    "Glass Display & Coffee Station",
    "تصميم خزانة عرض زجاجية مع ركن قهوة وإضاءة",
    "Glass display cabinet concept with coffee station and lighting",
  ),
  design(
    "design-single-wardrobe",
    `${designsBase}/capital-oasis-design-single-wardrobe.webp`,
    "dressing-rooms",
    "خزانة ملابس مفردة",
    "Single Wardrobe",
    "تصميم خزانة ملابس مفردة بخامات عصرية",
    "Single wardrobe concept with modern materials",
  ),
  design(
    "design-tall-mirror-wardrobe",
    `${designsBase}/capital-oasis-design-tall-mirror-wardrobe.webp`,
    "dressing-rooms",
    "خزانة طويلة بمرآة",
    "Tall Mirror Wardrobe",
    "تصميم خزانة ملابس طويلة بمرآة كاملة",
    "Tall wardrobe concept with full-length mirror",
  ),
];
