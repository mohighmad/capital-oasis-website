"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { assets } from "@/data/assets";
import type { Bilingual } from "@/data/content";
import { useLanguage } from "./LanguageProvider";

type FurnitureService = {
  title: Bilingual;
  description: Bilingual;
  image: string;
  alt: Bilingual;
};

const furnitureServices: FurnitureService[] = [
  {
    title: { en: "Dressing Rooms", ar: "غرف الملابس" },
    description: {
      en: "Dressing rooms tailored to the client’s space with practical divisions and refined finishing.",
      ar: "غرف ملابس مصممة حسب مساحة العميل مع تقسيمات عملية وتشطيبات راقية.",
    },
    image: assets.furniture.dressingRooms[1],
    alt: { en: "Custom dressing room designs", ar: "تصاميم غرف ملابس حسب الطلب" },
  },
  {
    title: { en: "TV Units", ar: "وحدات التلفزيون" },
    description: {
      en: "Modern TV units that combine visual appeal with practical everyday use.",
      ar: "وحدات تلفزيون عصرية تجمع بين الشكل الجمالي والاستخدام العملي.",
    },
    image: assets.furniture.tvUnits[2],
    alt: { en: "Modern custom TV units", ar: "وحدات تلفزيون عصرية حسب الطلب" },
  },
  {
    title: { en: "Wooden Kitchens", ar: "المطابخ الخشبية" },
    description: {
      en: "Wooden kitchens with practical layouts and materials suited to daily use.",
      ar: "مطابخ خشبية بتصاميم عملية وخامات مناسبة للاستخدام اليومي.",
    },
    image: assets.furniture.kitchens[0],
    alt: { en: "Custom wooden kitchen", ar: "مطبخ خشبي مصمم حسب الطلب" },
  },
  {
    title: { en: "Wall Cladding", ar: "التكسيات الخشبية" },
    description: {
      en: "Wall cladding that adds warmth and a refined sense of luxury to interior spaces.",
      ar: "تكسيات حوائط تضيف لمسة فخامة ودفء للمساحات الداخلية.",
    },
    image: assets.furniture.wallCladding[0],
    alt: { en: "Interior wooden wall cladding", ar: "تكسيات حوائط خشبية داخلية" },
  },
  {
    title: { en: "Wooden Decorations", ar: "الديكورات الخشبية" },
    description: {
      en: "Custom wooden decoration for homes, offices, and showrooms.",
      ar: "ديكورات خشبية مخصصة للمنازل والمكاتب والمعارض.",
    },
    image: assets.decor.projects[2],
    alt: { en: "Custom interior wooden decoration", ar: "ديكورات خشبية داخلية مخصصة" },
  },
  {
    title: { en: "Shoe Organizers", ar: "منظمات الأحذية" },
    description: {
      en: "Practical shoe organizers with elegant design and efficient space utilization.",
      ar: "منظمات أحذية عملية بتصميم أنيق واستغلال مثالي للمساحات.",
    },
    image: assets.furniture.custom[1],
    alt: { en: "Practical custom shoe organizer", ar: "منظم أحذية عملي مصمم حسب الطلب" },
  },
  {
    title: { en: "Custom Furniture", ar: "الأثاث حسب الطلب" },
    description: {
      en: "Made-to-measure furniture shaped around the space, function, and preferred finish.",
      ar: "أثاث مصمم حسب المقاس ليتناسب مع المساحة والاستخدام والتشطيب المطلوب.",
    },
    image: assets.furniture.custom[0],
    alt: { en: "Custom furniture collection", ar: "مجموعة أثاث مصمم حسب الطلب" },
  },
  {
    title: { en: "Commercial Hotel Furniture", ar: "الأثاث الفندقي التجاري" },
    description: {
      en: "Purpose-built hotel furniture for offices, retail spaces, exhibitions, and commercial projects.",
      ar: "أثاث فندقي وتجاري مخصص للمكاتب والمتاجر والمعارض والمشاريع التجارية.",
    },
    image: assets.commercial.decorations[0],
    alt: { en: "Commercial hotel furniture solutions", ar: "حلول أثاث فندقي للمشاريع التجارية" },
  },
];

export function FurnitureSection() {
  const { t } = useLanguage();

  const featuredWork = [
    furnitureServices[0],
    furnitureServices[1],
    {
      ...furnitureServices[2],
      image: assets.decor.projects[5],
      alt: {
        en: "Completed custom wooden kitchen with warm wood cabinets",
        ar: "مطبخ خشبي مخصص منفذ بخزائن ذات تشطيب دافئ",
      },
    },
  ];

  return (
    <section id="furniture" className="section-pad surface-soft bg-warm-beige">
      <div className="shell">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5">
              {t({ en: "Furniture & hotel furniture", ar: "الأثاث السكني والفندقي" })}
            </p>
            <h2 className="text-[clamp(2.1rem,4vw,3.65rem)] leading-[1.08] font-bold tracking-[-0.035em] text-forest rtl:leading-[1.18] rtl:tracking-[-0.01em]">
              {t({ en: "Custom Furniture & Hotel Furniture", ar: "تصميم وتصنيع الأثاث السكني والفندقي" })}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-charcoal/68 sm:text-lg">
              {t({
                en: "Custom-made solutions with high quality, modern designs, and smart space utilization.",
                ar: "تفصيل حسب الطلب بجودة عالية، تصاميم عصرية، واستغلال ذكي للمساحات.",
              })}
            </p>
          </div>

          <div className="mt-14 grid gap-8 pb-2 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <figure className="card-feature arch-frame rim-gold order-1 group relative aspect-[4/3] w-full max-w-full overflow-hidden border border-forest/10 bg-deep-green lg:order-2 lg:aspect-[5/4]">
              <Image
                src={featuredWork[0].image}
                alt={t(featuredWork[0].alt)}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041c19]/88 via-[#041c19]/16 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                <p className="text-[10px] font-extrabold tracking-[0.15em] text-gold uppercase rtl:tracking-normal rtl:normal-case">
                  {t({ en: "Featured work", ar: "عمل مميز" })}
                </p>
                <h3 className="mt-2 text-2xl leading-tight font-bold">
                  {t(featuredWork[0].title)}
                </h3>
              </figcaption>
            </figure>

            <div className="order-3 grid gap-4 sm:grid-cols-2 lg:order-3">
              {featuredWork.slice(1).map((service) => (
                <figure
                  key={service.title.en}
                  className="group relative aspect-[4/3] overflow-hidden rounded-[1.35rem] border border-forest/10 bg-deep-green shadow-[0_14px_38px_rgba(11,59,53,.12)]"
                >
                  <Image
                    src={service.image}
                    alt={t(service.alt)}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041c19]/84 via-[#041c19]/12 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-base leading-tight font-bold sm:text-lg">
                      {t(service.title)}
                    </h3>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1 lg:row-span-2">
              {furnitureServices.map((service) => (
                <article
                  key={service.title.en}
                  className="flex min-h-[10.5rem] items-start gap-4 rounded-[1.25rem] border border-forest/10 bg-ivory/92 p-5 shadow-[0_14px_34px_rgba(11,59,53,.08)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/35 hover:shadow-[0_18px_44px_rgba(11,59,53,.12)] sm:p-6"
                >
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-deep-green/10 bg-deep-green/8 text-forest">
                    <Check size={17} strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="text-base leading-6 font-bold text-forest">
                      {t(service.title)}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-charcoal/62">
                      {t(service.description)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
