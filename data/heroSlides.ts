export type HeroSlide = {
  id: string;
  src: string;
  titleAr: string;
  titleEn: string;
  category: string;
  contentType: "design" | "portfolio";
  altAr: string;
  altEn: string;
};

const processedHeroBase = "/images/capital-oasis/hero/processed";

export const heroSlides: HeroSlide[] = [
  {
    id: "hero-previous-wooden-doors",
    src: "/images/capital-oasis/doors/door-project-07.jpg",
    titleAr: "أبواب خشبية",
    titleEn: "Wooden Doors",
    category: "wooden-doors",
    contentType: "portfolio",
    altAr: "أبواب خشبية منفذة ضمن سوابق أعمال كابيتال واسي",
    altEn: "Completed wooden doors from Capital Oasis previous works",
  },
  {
    id: "hero-previous-hotel-furniture",
    src: `${processedHeroBase}/hero-previous-hotel-furniture-01.webp`,
    titleAr: "الأثاث الفندقي",
    titleEn: "Hotel Furniture",
    category: "hotel-furniture",
    contentType: "portfolio",
    altAr: "أثاث فندقي وديكور داخلي منفذ ضمن سوابق الأعمال",
    altEn: "Completed hotel furniture and interior decor from previous works",
  },
  {
    id: "hero-previous-tv-wall",
    src: `${processedHeroBase}/hero-previous-tv-wall-01.webp`,
    titleAr: "وحدات تلفزيون وتكسيات",
    titleEn: "TV Units & Wall Cladding",
    category: "tv-units-wall-cladding",
    contentType: "portfolio",
    altAr: "وحدة تلفزيون وتكسيات جدارية منفذة ضمن سوابق الأعمال",
    altEn: "Completed TV wall unit and wall cladding from previous works",
  },
  {
    id: "hero-previous-kitchen",
    src: `${processedHeroBase}/hero-previous-kitchen-01.webp`,
    titleAr: "مطابخ منفذة",
    titleEn: "Completed Kitchens",
    category: "kitchens",
    contentType: "portfolio",
    altAr: "مطبخ منفذ بخزائن خشبية وتشطيبات عصرية ضمن سوابق الأعمال",
    altEn: "Completed kitchen with wood cabinetry and modern finishes from previous works",
  },
  {
    id: "hero-previous-commercial-display",
    src: `${processedHeroBase}/hero-previous-shop-fitout-01.webp`,
    titleAr: "ديكورات محلات تجارية",
    titleEn: "Commercial Decorations",
    category: "commercial-decorations",
    contentType: "portfolio",
    altAr: "وحدة عرض تجارية منفذة ضمن سوابق أعمال كابيتال واسي",
    altEn: "Completed commercial display fit-out from Capital Oasis previous works",
  },
  {
    id: "hero-previous-exhibition-decor",
    src: `${processedHeroBase}/hero-previous-commercial-decoration-01.webp`,
    titleAr: "ديكورات معارض",
    titleEn: "Exhibition Decor",
    category: "exhibition-decor",
    contentType: "portfolio",
    altAr: "ديكور معرض أو مساحة تجارية منفذة ضمن سوابق الأعمال",
    altEn: "Completed exhibition or commercial decor from previous works",
  },
  {
    id: "hero-previous-restaurant-cafe",
    src: `${processedHeroBase}/hero-previous-restaurant-cafe-01.webp`,
    titleAr: "ديكور داخلي تجاري",
    titleEn: "Commercial Interior Decor",
    category: "commercial-interior-decor",
    contentType: "portfolio",
    altAr: "ديكور داخلي تجاري منفذ لمطعم أو كافيه ضمن سوابق الأعمال",
    altEn: "Completed commercial interior decor for a restaurant or cafe from previous works",
  },
];
