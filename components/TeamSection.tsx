"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  ClipboardCheck,
  HardHat,
  MapPin,
  MessageCircle,
  Ruler,
  Users,
} from "lucide-react";
import { assets } from "@/data/assets";
import { company } from "@/data/content";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

const highlights = [
  {
    icon: Ruler,
    text: {
      en: "Engineering supervision across work stages",
      ar: "إشراف هندسي على مراحل العمل",
    },
  },
  {
    icon: MapPin,
    text: {
      en: "On-site project follow-up",
      ar: "متابعة ميدانية للمشاريع",
    },
  },
  {
    icon: ClipboardCheck,
    text: {
      en: "Execution according to approved plans",
      ar: "تنفيذ حسب الخطة المعتمدة",
    },
  },
  {
    icon: HardHat,
    text: {
      en: "Professional installation team with engineering supervision",
      ar: "فريق تركيب محترف وإشراف هندسي",
    },
  },
  {
    icon: Users,
    text: {
      en: "Experience in residential, commercial, exhibition, and event projects",
      ar: "خبرة في المشاريع السكنية والتجارية وديكورات المعارض والفعاليات",
    },
  },
];

const photos = [
  {
    src: assets.team.photos[0],
    caption: { en: "Field supervision follow-up", ar: "متابعة إشرافية ميدانية" },
  },
  {
    src: assets.team.photos[1],
    caption: { en: "Technical coordination during execution", ar: "تنسيق فني أثناء التنفيذ" },
  },
  {
    src: assets.team.photos[2],
    caption: { en: "Engineering quality supervision", ar: "إشراف هندسي على الجودة" },
  },
  {
    src: assets.team.photos[3],
    caption: { en: "Execution and finishing follow-up", ar: "متابعة تنفيذ وتشطيبات الموقع" },
  },
  {
    src: assets.team.photos[4],
    caption: { en: "Work-stage review and approval", ar: "اعتماد ومراجعة مراحل العمل" },
  },
];

const INITIAL_VISIBLE_TEAM_PHOTOS = 2;

export function TeamSection() {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const visiblePhotos = photos.slice(
    0,
    isExpanded ? photos.length : INITIAL_VISIBLE_TEAM_PHOTOS,
  );

  const handleGalleryToggle = () => {
    if (isExpanded) {
      setIsExpanded(false);
      window.setTimeout(() => {
        headingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
      return;
    }

    setIsExpanded(true);
  };

  return (
    <section id="team" className="section-pad surface-soft bg-ivory">
      <div className="shell">
        <div ref={headingRef} className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-6">
            {t({ en: "Team & Engineering Supervision", ar: "فريق العمل والإشراف الهندسي" })}
          </p>
          <h2 className="text-[clamp(2.25rem,4.4vw,4.15rem)] leading-[1.05] font-bold tracking-[-0.05em] text-forest rtl:leading-[1.17] rtl:tracking-[-0.015em]">
            {t({ en: "Team & Engineering Supervision", ar: "فريق العمل والإشراف الهندسي" })}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-forest/70 sm:text-lg">
            {t({
              en: "Capital Oasis team combines field experience and engineering supervision to deliver accurate, high-quality, and reliable execution in every project.",
              ar: "فريق كابيتال واسي يجمع بين الخبرة الميدانية والإشراف الهندسي لضمان تنفيذ الأعمال بدقة وجودة وثقة في كل مشروع.",
            })}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="flex min-w-0 flex-col">
            <Reveal className="reveal-stagger grid flex-1 gap-4 md:grid-cols-2 lg:min-h-[29rem]">
              {visiblePhotos.map((item, index) => (
                <figure
                  key={item.src}
                  className={`group relative min-h-[18rem] overflow-hidden rounded-[1.45rem] border border-forest/12 bg-warm-beige transition duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-[0_22px_54px_rgba(11,59,53,.14)] sm:min-h-[22rem] md:min-h-[24rem] lg:h-full lg:min-h-0 ${
                    index === 0 ? "card-feature rim-gold" : "card-support"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={t(item.caption)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 32vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-green/70 via-deep-green/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-bold text-gold sm:p-6">
                    {t(item.caption)}
                  </figcaption>
                </figure>
              ))}
            </Reveal>

            {photos.length > INITIAL_VISIBLE_TEAM_PHOTOS ? (
              <div className="mt-7 flex justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={handleGalleryToggle}
                  aria-expanded={isExpanded}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-forest/15 bg-white/78 px-6 py-2.5 text-sm font-extrabold text-forest shadow-[0_12px_30px_rgba(11,59,53,.075)] transition hover:-translate-y-0.5 hover:border-gold/45 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
                >
                  {isExpanded ? t({ ar: "عرض أقل", en: "Show less" }) : t({ ar: "عرض المزيد", en: "Show more" })}
                </button>
              </div>
            ) : null}
          </div>

          <div className="rounded-[1.6rem] border border-forest/12 bg-warm-beige/50 p-5 shadow-[0_18px_50px_rgba(11,59,53,.07)] sm:p-6">
            <div className="grid gap-3">
              {highlights.map(({ icon: Icon, text }) => (
                <div
                  key={text.en}
                  className="flex min-h-20 items-center gap-4 rounded-2xl border border-forest/10 bg-white/78 p-4 shadow-[0_8px_22px_rgba(11,59,53,.045)]"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-deep-green text-gold">
                    <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-6 font-bold text-forest">{t(text)}</span>
                </div>
              ))}
            </div>

            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-extrabold text-deep-green transition hover:bg-[#d8aa5b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
              aria-label={t({
                ar: "احصل على عرض سعر عبر واتساب",
                en: "Get a quote on WhatsApp",
              })}
            >
              <MessageCircle size={18} aria-hidden="true" />
              {t({ ar: "احصل على عرض سعر", en: "Get a Quote" })}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
