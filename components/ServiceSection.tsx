"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import type { Service } from "@/data/services";
import { useLanguage } from "./LanguageProvider";

export function ServiceSection({
  service,
  id,
  reverse = false,
  dark = false,
}: {
  service: Service;
  id: string;
  reverse?: boolean;
  dark?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <section id={id} className={`section-pad ${dark ? "wood-grain bg-forest text-white" : "bg-cream"}`}>
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={`image-reveal relative aspect-[4/3] w-full min-w-0 sm:min-h-96 ${reverse ? "lg:order-2" : ""}`}>
          <Image src={service.image} alt={t(service.alt)} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          <div className={`absolute bottom-0 p-5 ${reverse ? "right-0" : "left-0"} bg-sand text-forest`}>
            <span className="text-4xl font-light">{service.number}</span>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-6 text-sand">{t({ en: "Our expertise", ar: "خبراتنا" })}</p>
          <h2
            className={`text-[clamp(2.3rem,5vw,4.8rem)] leading-none font-semibold tracking-[-0.055em] ${
              dark ? "text-white" : "text-forest"
            }`}
          >
            {t(service.title)}
          </h2>
          <p className={`mt-7 max-w-xl text-lg leading-8 ${dark ? "text-white/65" : "text-ink/65"}`}>
            {t(service.description)}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {service.products.map((product) => (
              <span
                key={product.en}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                  dark ? "border-white/15 bg-white/[0.05] text-white/80" : "border-forest/15 bg-white/40 text-forest"
                }`}
              >
                {t(product)}
              </span>
            ))}
          </div>
          <ul className="mt-9 grid gap-x-5 gap-y-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li
                key={feature.en}
                className={`flex items-center gap-2 border-t pt-4 text-sm font-semibold ${
                  dark ? "border-white/15 text-white/80" : "border-forest/15 text-forest"
                }`}
              >
                <Check size={15} className="shrink-0 text-sand" />
                {t(feature)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
