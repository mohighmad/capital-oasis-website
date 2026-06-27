"use client";

import Image from "next/image";
import { Film, Play } from "lucide-react";
import { useMemo, useState } from "react";
import {
  projectVideos,
  type ProjectVideo,
  type VideoCategory,
} from "@/data/videos";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { VideoModal } from "./VideoModal";

type ShowcaseCategory = Exclude<VideoCategory, "all" | "team">;

const showcaseTabs: { id: ShowcaseCategory; label: { ar: string; en: string } }[] = [
  { id: "events", label: { ar: "الفعاليات والمعارض", en: "Events & Exhibitions" } },
  { id: "doors", label: { ar: "الأبواب والتصنيع", en: "Doors & Manufacturing" } },
  { id: "commercial", label: { ar: "الأعمال التجارية", en: "Commercial Works" } },
];

const brandBadge = "/images/capital-oasis/logo/capital-oasis-logo-main.webp";

function VideoThumb({
  video,
  onPlay,
  featured = false,
}: {
  video: ProjectVideo;
  onPlay: (video: ProjectVideo) => void;
  featured?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => onPlay(video)}
      className="group relative block h-full w-full overflow-hidden rounded-[1.45rem] bg-[linear-gradient(145deg,#0b3b35,#082d29)] text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
      aria-label={t({
        en: `Play ${video.title.en}`,
        ar: `تشغيل ${video.title.ar}`,
      })}
    >
      <Image
        src={video.thumbnail}
        alt={t(video.alt)}
        fill
        sizes={
          featured
            ? "(max-width: 1024px) calc(100vw - 2rem), 760px"
            : "(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc((100vw - 4rem) / 2), 300px"
        }
        className="object-cover transition duration-700 group-hover:scale-[1.035]"
      />
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(226,201,139,.16),transparent_34%),linear-gradient(to_top,rgba(6,35,31,.72),rgba(6,35,31,.2),rgba(6,35,31,.08))]" />
      <span
        className={`absolute top-3 z-10 grid place-items-center overflow-hidden rounded-full border border-gold/35 bg-deep-green/72 shadow-[0_10px_24px_rgba(0,0,0,.24)] backdrop-blur-md ltr:right-3 rtl:left-3 ${
          featured ? "size-12 sm:size-14" : "size-10"
        }`}
        aria-hidden="true"
      >
        <Image
          src={brandBadge}
          alt=""
          width={featured ? 48 : 38}
          height={featured ? 48 : 38}
          className="h-[78%] w-[78%] object-contain"
        />
      </span>
      <span
        className={`video-play absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/40 bg-deep-green/78 text-white shadow-[0_16px_34px_rgba(0,0,0,.24)] backdrop-blur-md transition group-hover:scale-105 group-hover:bg-deep-green/88 ${
          featured ? "size-16" : "size-12"
        }`}
      >
        <Play
          size={featured ? 25 : 19}
          fill="currentColor"
          className="translate-x-px rtl:-translate-x-px"
          aria-hidden="true"
        />
      </span>
    </button>
  );
}

export function ProjectVideos() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ShowcaseCategory>("events");
  const [activeVideo, setActiveVideo] = useState<ProjectVideo | null>(null);

  const visibleVideos = useMemo(
    () => projectVideos.filter((video) => video.category === activeFilter),
    [activeFilter],
  );
  const featuredVideo = visibleVideos[0];
  const compactVideos = visibleVideos.slice(1);
  const activeTab = showcaseTabs.find((tab) => tab.id === activeFilter) ?? showcaseTabs[0];

  return (
    <section id="project-videos" className="section-pad surface-soft bg-warm-beige">
      <div className="shell">
        <SectionTitle
          eyebrow={{ en: "Previous work in motion", ar: "لقطات من سوابق الأعمال" }}
          title={{ en: "Project Videos", ar: "فيديوهات من أعمالنا" }}
          text={{
            en: "A curated cinematic view of selected executions across events, doors, manufacturing, and commercial works.",
            ar: "عرض سينمائي مختار لأعمال منفذة في الفعاليات، الأبواب، التصنيع، والأعمال التجارية.",
          }}
        />

        <div
          className="mt-9 flex flex-wrap gap-2.5"
          role="tablist"
          aria-label={t({ en: "Video showcase categories", ar: "تصنيفات عرض الفيديو" })}
        >
          {showcaseTabs.map((tab) => {
            const active = tab.id === activeFilter;
            const count = projectVideos.filter((video) => video.category === tab.id).length;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(tab.id)}
                className={`min-h-11 rounded-full border px-4 py-2 text-xs font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                  active
                    ? "border-deep-green bg-deep-green text-white shadow-[0_10px_26px_rgba(11,59,53,.18)]"
                    : "border-deep-green/12 bg-ivory text-deep-green hover:border-gold/70 hover:bg-white"
                }`}
              >
                {t(tab.label)}
                <span className={`ms-2 rounded-full px-2 py-0.5 ${active ? "bg-white/12 text-gold" : "bg-deep-green/8 text-deep-green/60"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {featuredVideo ? (
          <Reveal
            className="mt-8 grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch"
            aria-live="polite"
            aria-label={t({
              en: `${visibleVideos.length} ${activeTab.label.en} videos`,
              ar: `${visibleVideos.length} من فيديوهات ${activeTab.label.ar}`,
            })}
          >
            <article className="overflow-hidden rounded-[1.75rem] border border-deep-green/12 bg-ivory/95 shadow-[0_22px_60px_rgba(11,59,53,.12)]">
              <div className="relative aspect-video lg:aspect-[16/9]">
                <VideoThumb video={featuredVideo} onPlay={setActiveVideo} featured />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[10px] font-extrabold tracking-[0.14em] text-wood-brown uppercase rtl:tracking-normal">
                  {t(activeTab.label)}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-deep-green sm:text-3xl">
                  {t(featuredVideo.title)}
                </h3>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {compactVideos.length > 0 ? (
                compactVideos.map((video) => (
                  <article
                    key={video.id}
                    className="grid overflow-hidden rounded-[1.35rem] border border-deep-green/12 bg-ivory/95 shadow-[0_14px_38px_rgba(11,59,53,.085)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/35 hover:shadow-[0_18px_46px_rgba(11,59,53,.12)] sm:grid-cols-[0.95fr_1.05fr] lg:grid-cols-[0.82fr_1.18fr]"
                  >
                    <div className="relative aspect-video sm:aspect-auto sm:min-h-32">
                      <VideoThumb video={video} onPlay={setActiveVideo} />
                    </div>
                    <div className="flex flex-col justify-center p-4">
                      <p className="text-[10px] font-extrabold tracking-[0.12em] text-wood-brown uppercase rtl:tracking-normal">
                        {t(activeTab.label)}
                      </p>
                      <h3 className="mt-1.5 text-base leading-snug font-bold text-deep-green">
                        {t(video.title)}
                      </h3>
                    </div>
                  </article>
                ))
              ) : (
                <div className="grid min-h-52 place-items-center rounded-3xl border border-deep-green/12 bg-ivory/95 p-7 text-center shadow-[0_16px_42px_rgba(11,59,53,.08)]">
                  <div>
                    <Film className="mx-auto text-gold" size={38} strokeWidth={1.5} />
                    <p className="mt-4 font-bold text-deep-green">
                      {t({
                        en: "This category has one curated featured video.",
                        ar: "هذا القسم يحتوي على فيديو مميز واحد.",
                      })}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        ) : null}
      </div>

      {activeVideo ? (
        <VideoModal
          video={activeVideo.video}
          title={activeVideo.title}
          poster={activeVideo.thumbnail}
          onClose={() => setActiveVideo(null)}
        />
      ) : null}
    </section>
  );
}
