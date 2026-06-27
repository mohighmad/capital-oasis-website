"use client";

import { Globe2, MapPin, MessageCircle, Phone, PhoneCall } from "lucide-react";
import { company } from "@/data/content";
import { BrandLogo } from "./BrandLogo";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="section-pad bg-[linear-gradient(135deg,#E8DDCF_0%,#F7F4EF_58%,#EFE4D6_100%)]"
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <BrandLogo
              variant="light"
              className="mb-6 block h-auto max-h-32 w-auto max-w-[188px] sm:max-h-36 sm:max-w-[208px]"
            />
            <p className="eyebrow mb-5 text-forest/60">{t({ en: "Contact us", ar: "تواصل معنا" })}</p>
            <h2 className="max-w-3xl text-[clamp(2.4rem,5vw,4.7rem)] leading-[1.04] font-bold tracking-[-0.045em] text-forest rtl:leading-[1.18] rtl:tracking-[-0.015em]">
              {t({
                en: "Start Your Project with Capital Oasis",
                ar: "ابدأ مشروعك مع كابيتال واسي",
              })}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-forest/70">
              {t({
                en: "Contact us now for a quote or consultation for doors, residential and hotel furniture, commercial shop decoration, or exhibition decor and events.",
                ar: "تواصل معنا الآن للحصول على عرض سعر أو استشارة للأبواب، الأثاث السكني والفندقي، ديكورات المحلات التجارية، أو ديكورات معرضك أو فعاليتك.",
              })}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn-primary bg-deep-green text-white shadow-forest/20 hover:bg-dark-teal">
                <MessageCircle size={19} />
                {t({ en: "WhatsApp", ar: "واتساب" })}
              </a>
              <a href={company.phoneHref} className="inline-flex min-h-[3.125rem] items-center justify-center gap-3 rounded-full border border-deep-green/25 bg-white/35 px-6 text-sm font-extrabold text-deep-green transition hover:border-deep-green hover:bg-white/60">
                <PhoneCall size={19} />
                {t({ en: "Call Now", ar: "اتصل الآن" })}
              </a>
            </div>
          </div>

          <Reveal className="rounded-3xl border border-white/40 bg-ivory p-6 shadow-[0_24px_65px_rgba(11,59,53,.14)] sm:p-8">
            <h3 className="text-xl font-bold text-forest">{t({ en: "Contact details", ar: "بيانات التواصل" })}</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a href={company.whatsapp} target="_blank" rel="noreferrer" className="group rounded-2xl border border-forest/10 bg-white p-5 transition hover:border-gold hover:shadow-md">
                <MessageCircle className="text-gold" size={24} />
                <p className="mt-4 text-xs font-bold text-forest/45">{t({ en: "WhatsApp", ar: "واتساب" })}</p>
                <p className="mt-1 font-bold text-forest" dir="ltr">{company.phoneDisplay}</p>
              </a>
              <div className="rounded-2xl border border-forest/10 bg-white p-5">
                <Phone className="text-gold" size={24} />
                <p className="mt-4 text-xs font-bold text-forest/45">{t({ en: "Phone / Call", ar: "اتصال هاتفي" })}</p>
                <a href={company.phoneHref} className="mt-1 block font-bold text-forest transition hover:text-wood-brown" dir="ltr">
                  {company.phoneDisplay}
                </a>
                <a href={company.additionalPhoneHref} className="mt-1 block font-bold text-forest transition hover:text-wood-brown" dir="ltr">
                  {company.additionalPhone}
                </a>
              </div>
              <a href={`https://${company.website}`} target="_blank" rel="noreferrer" className="group rounded-2xl border border-forest/10 bg-white p-5 transition hover:border-gold hover:shadow-md">
                <Globe2 className="text-gold" size={24} />
                <p className="mt-4 text-xs font-bold text-forest/45">{t({ en: "Website", ar: "الموقع الإلكتروني" })}</p>
                <p className="mt-1 break-words font-bold text-forest">{company.websiteDisplay}</p>
              </a>
              <div className="rounded-2xl border border-forest/10 bg-white p-5">
                <MapPin className="text-gold" size={24} />
                <p className="mt-4 text-xs font-bold text-forest/45">{t({ en: "Location", ar: "العنوان" })}</p>
                <address className="mt-1 text-sm leading-7 font-bold text-forest not-italic">{t(company.location)}</address>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
