"use client";

import Link from "next/link";
import {
  ArrowUpLeft,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/content";
import { SectionShell } from "./SectionShell";
import { UnifiedRouteHero } from "./UnifiedRouteHero";
import { contactHeroMediaPool } from "./unifiedHeroMedia";

function ActionLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "soft";
  external?: boolean;
}) {
  const classes =
    variant === "primary"
      ? "bg-[var(--color-brand-deep)] text-white shadow-[0_22px_50px_-28px_rgba(12,58,58,0.82)] hover:bg-[var(--color-brand-deep-hover)]"
      : "border border-[rgba(12,58,58,0.14)] bg-white/76 text-[var(--color-brand-deep)] shadow-[0_18px_42px_-34px_rgba(12,58,58,0.55)] hover:border-[rgba(12,58,58,0.24)] hover:bg-white";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-[var(--radius-button)] px-5 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)] focus-visible:ring-offset-2 ${classes}`}
    >
      {children}
    </a>
  );
}

function ContactRoutePageBody() {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";
  const Arrow = isArabic ? ArrowUpLeft : ArrowUpRight;

  const contactCards = [
    {
      id: "whatsapp",
      icon: MessageCircle,
      title: { ar: "واتساب", en: "WhatsApp" },
      body: { ar: "ابدأ المحادثة مباشرة معنا على الرقم المعتمد.", en: "Start a direct conversation with our approved business number." },
      detail: company.phoneDisplay,
      href: company.whatsapp,
      external: true,
    },
    {
      id: "phone",
      icon: Phone,
      title: { ar: "اتصال هاتفي", en: "Phone / Call" },
      body: { ar: "للاستفسارات السريعة والتنسيق الأولي للمشروع.", en: "For quick questions and first-step project coordination." },
      detail: `${company.phoneDisplay} • ${company.additionalPhone}`,
      href: company.phoneHref,
      external: false,
    },
    {
      id: "location",
      icon: MapPin,
      title: { ar: "العنوان", en: "Location" },
      body: { ar: "الرياض - السلي - شارع عبدالله بن عبد الحق الأنصاري.", en: "Riyadh, Al Sulay, Abdullah Bin Abdulhaq Al Ansari Street." },
      detail: t(company.location),
      href: "#contact-location",
      external: false,
    },
    {
      id: "website",
      icon: Globe2,
      title: { ar: "الموقع الإلكتروني", en: "Website" },
      body: { ar: "تصفح موقع كابيتال واسي والانتقال إلى الأقسام الرئيسية.", en: "Browse the Capital Oasis website and move through the main routes." },
      detail: company.websiteDisplay,
      href: `https://${company.website}`,
      external: true,
    },
  ] as const;

  const inquiryItems = [
    {
      href: "/doors",
      title: { ar: "الأبواب", en: "Doors" },
      text: { ar: "خشب وPVC وWPC مع خيارات توريد وتركيب.", en: "Wood, PVC, and WPC with supply and installation options." },
    },
    {
      href: "/kitchens",
      title: { ar: "المطابخ", en: "Kitchens" },
      text: { ar: "أنظمة مطابخ عملية بتشطيبات راقية ومسارات اختيار واضحة.", en: "Practical kitchen systems with refined finishes and clear selection paths." },
    },
    {
      href: "/dressing-rooms",
      title: { ar: "غرف الملابس", en: "Dressing Rooms" },
      text: { ar: "توزيعات تخزين راقية تناسب اختلاف المساحات وروتين الاستخدام.", en: "Refined storage layouts shaped around space and daily use." },
    },
    {
      href: "/commercial-shops",
      title: { ar: "ديكورات المحلات", en: "Commercial Shops" },
      text: { ar: "حلول تجهيز وعرض تدعم هوية النشاط التجاري.", en: "Retail fit-out and display solutions aligned with the business identity." },
    },
    {
      href: "/events",
      title: { ar: "ديكورات المعارض والفعاليات", en: "Events & Exhibitions" },
      text: { ar: "أفكار وتجهيزات تنفيذية للمعارض والاحتفالات والواجهات المؤقتة.", en: "Execution-ready ideas for exhibitions, celebrations, and temporary presentation spaces." },
    },
    {
      href: "/other-services",
      title: { ar: "وحدات التلفزيون وخدمات أخرى", en: "TV Units & Other Services" },
      text: { ar: "طلبات خاصة وخدمات مساندة ضمن نطاق كابيتال واسي.", en: "Special requests and supporting services within the Capital Oasis scope." },
    },
  ] as const;

  return (
    <div className="route-density min-h-screen bg-[#FBF7F1] text-[var(--color-text-primary)]">
      <Header />

      <main id="main-content" tabIndex={-1}>
        <UnifiedRouteHero
          id="contact-hero"
          variant="other-services"
          eyebrow={{ ar: "بداية المشروع", en: "Project Brief" }}
          title={{
            ar: "لنحدد معاً اتجاه مشروعك من أول رسالة.",
            en: "Let us define the right project direction from the first message.",
          }}
          body={{
            ar: "أرسل نوع المشروع والمساحة والخامة المطلوبة، وسنبدأ من المعلومات التي ترسم الحل المناسب.",
            en: "Send the project type, space details, and preferred material so we can shape the right solution clearly.",
          }}
          actions={[
            <ActionLink key="whatsapp" href={company.whatsapp} external>
              <MessageCircle size={18} aria-hidden="true" />
              {t({ ar: "ابدأ المحادثة عبر واتساب", en: "Start on WhatsApp" })}
            </ActionLink>,
            <ActionLink key="phone" href={company.phoneHref} variant="soft">
              <Phone size={18} aria-hidden="true" />
              {t({ ar: "اتصال مباشر", en: "Direct Call" })}
            </ActionLink>,
            <Link
              key="choices"
              href="#contact-inquiry"
              className="inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-[var(--radius-button)] border border-[rgba(12,58,58,0.12)] bg-transparent px-5 py-3 text-sm font-extrabold text-[#5C4634] transition hover:border-[rgba(12,58,58,0.22)] hover:bg-white/56 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)]"
            >
              {t({ ar: "اختر مسار مشروعك", en: "Choose Your Project Route" })}
              <Arrow size={18} aria-hidden="true" />
            </Link>,
          ]}
          points={[
            { ar: "واتساب مباشر", en: "Direct WhatsApp" },
            { ar: "تواصل هاتفي سريع", en: "Fast Call Access" },
            { ar: "عنوان واضح ومعتمد", en: "Clear Approved Location" },
          ]}
          mediaItems={contactHeroMediaPool}
        />

        <section id="contact-channels" className="section-pad bg-[#FCF8F2]">
          <SectionShell className="route-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow justify-center text-[#7B8D82]">
                {t({ ar: "قنوات التواصل", en: "Contact Channels" })}
              </p>
              <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-normal text-[#2C2118] sm:text-4xl">
                {t({ ar: "اختر قناة البداية الأنسب", en: "Choose the best starting channel" })}
              </h2>
              <p className="mt-4 text-base leading-8 text-[#625043]">
                {t({
                  ar: "كل قناة أدناه تقودك إلى بيانات كابيتال واسي المعتمدة لبدء المحادثة بوضوح.",
                  en: "Each channel below uses the approved Capital Oasis details to start the conversation clearly.",
                })}
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {contactCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.id}
                    className="h-full rounded-[1.6rem] border border-[rgba(12,58,58,0.08)] bg-white/82 p-5 shadow-[0_26px_60px_-50px_rgba(12,58,58,0.62)]"
                  >
                    <a
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noreferrer" : undefined}
                      className="flex h-full flex-col rounded-[1.2rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)]"
                    >
                      <span className="grid size-12 place-items-center rounded-2xl border border-[rgba(212,166,116,0.24)] bg-[#F6E8D6] text-[#7D5E3F]">
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 text-xl font-semibold tracking-normal text-[#2E2219]">
                        {t(card.title)}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#5F4D40]">
                        {t(card.body)}
                      </p>
                      <p className="mt-5 break-words text-sm font-bold leading-7 text-[#183B37]">
                        {card.detail}
                      </p>
                    </a>
                  </div>
                );
              })}
            </div>
          </SectionShell>
        </section>

        <section id="contact-inquiry" className="section-pad bg-[#F4EDE2]">
          <SectionShell className="route-shell">
            <div className="grid gap-8 rounded-[2rem] border border-[rgba(12,58,58,0.08)] bg-white/72 p-6 shadow-[0_30px_74px_-58px_rgba(47,31,20,0.34)] sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:p-10">
              <div>
                <p className="eyebrow text-[#8D7253]">
                  {t({ ar: "استفسار سريع", en: "Quick Inquiry" })}
                </p>
                <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2D2118]">
                  {t({ ar: "اختر مسار المشروع الذي تريد مناقشته", en: "Choose the project route you want to discuss" })}
                </h2>
                <p className="mt-4 text-base leading-8 text-[#5E4B3D]">
                  {t({
                    ar: "يمكنك تصفح القسم المناسب أولاً، أو الانتقال مباشرة إلى واتساب مع توضيح نوع الطلب والمساحة والخامة المطلوبة.",
                    en: "You can review the relevant route first, or go straight to WhatsApp and mention the request type, space, and preferred material.",
                  })}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {inquiryItems.map((item, index) => (
                  <div
                    key={item.href}
                    className="h-full rounded-[1.45rem] border border-[rgba(12,58,58,0.1)] bg-[linear-gradient(145deg,rgba(255,249,240,0.96),rgba(236,243,239,0.82))] p-4 shadow-[0_24px_52px_-46px_rgba(12,58,58,0.55)] transition hover:-translate-y-0.5"
                  >
                    <Link
                      href={item.href}
                      className="block h-full rounded-[1rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-gold)]"
                    >
                      <h3 className="text-lg font-semibold tracking-normal text-[#183733]">
                        {t(item.title)}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#5D4B3F]">
                        {t(item.text)}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#7A6247]">
                        {t({ ar: "استعرض المسار", en: "Explore the route" })}
                        <Arrow size={16} aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </SectionShell>
        </section>

        <section id="contact-location" className="section-pad bg-[#FCF8F2]">
          <SectionShell className="route-shell split-row grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div>
              <p className="eyebrow text-[#76897E]">
                {t({ ar: "الزيارة والموقع", en: "Visit & Location" })}
              </p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-[#2B2018]">
                {t({ ar: "عنوان معتمد وبداية مباشرة", en: "An approved address and a direct start" })}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#5D4B3E]">
                {t({
                  ar: "إذا كنت تفضل التنسيق عبر الهاتف أو واتساب قبل الزيارة، ستجد هنا العنوان المعتمد مع القنوات الأساسية للتواصل السريع.",
                  en: "If you prefer to coordinate by phone or WhatsApp before visiting, here you will find the approved address with the main contact channels for quick access.",
                })}
              </p>

              <div className="mt-7 grid gap-3">
                {[
                  t(company.location),
                  company.phoneDisplay,
                  company.websiteDisplay,
                ].map((line) => (
                  <div
                    key={line}
                    className="flex items-start gap-3 rounded-[1.25rem] border border-[rgba(12,58,58,0.08)] bg-white/80 px-4 py-3 text-sm font-semibold text-[#364643] shadow-[0_18px_42px_-34px_rgba(12,58,58,0.42)]"
                  >
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#8A6A48]" aria-hidden="true" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(12,58,58,0.1)] bg-[linear-gradient(145deg,rgba(238,243,240,0.92),rgba(255,249,240,0.92))] p-6 shadow-[0_30px_76px_-56px_rgba(12,58,58,0.5)] sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.88),transparent_28%),radial-gradient(circle_at_84%_24%,rgba(212,166,116,0.18),transparent_34%)]"
                />
                <div className="relative z-10">
                  <div className="rounded-[1.6rem] border border-[rgba(12,58,58,0.08)] bg-white/80 p-5">
                    <div className="flex items-center gap-3">
                      <span className="grid size-12 place-items-center rounded-2xl border border-[rgba(212,166,116,0.24)] bg-[#F6E8D6] text-[#7C5F42]">
                        <MapPin size={22} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#7A664F]">
                          {t({ ar: "العنوان المعتمد", en: "Approved Address" })}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold text-[#21312E]">
                          {t({ ar: "الرياض - السلي", en: "Riyadh - Al Sulay" })}
                        </h3>
                      </div>
                    </div>
                    <address className="mt-4 text-sm leading-8 font-semibold text-[#425450] not-italic">
                      {t(company.location)}
                    </address>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <ActionLink href={company.whatsapp} external>
                      <MessageCircle size={18} aria-hidden="true" />
                      {t({ ar: "تواصل واتساب", en: "WhatsApp" })}
                    </ActionLink>
                    <ActionLink href={company.phoneHref} variant="soft">
                      <Phone size={18} aria-hidden="true" />
                      {t({ ar: "اتصال مباشر", en: "Direct Call" })}
                    </ActionLink>
                  </div>

                  <div className="mt-4 rounded-[1.4rem] border border-dashed border-[rgba(12,58,58,0.16)] bg-[#F8F4EC] p-4 text-sm leading-7 text-[#5A493C]">
                    {t({
                      ar: "تواصل مباشر وواضح عبر واتساب أو الهاتف، مع عنوان معتمد للزيارة عند الحاجة.",
                      en: "Clear, direct contact by WhatsApp or phone, with an approved address for visits when needed.",
                    })}
                  </div>
                </div>
              </div>
            </div>
          </SectionShell>
        </section>

        <section className="section-pad bg-[#F2E9DE]">
          <SectionShell className="route-shell">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-[rgba(12,58,58,0.08)] bg-[linear-gradient(135deg,#0C3A3A_0%,#29514B_100%)] p-7 text-white shadow-[0_34px_90px_-58px_rgba(12,58,58,0.9)] sm:p-10 lg:p-12">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(212,166,116,0.2),transparent_32%)]"
              />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <p className="eyebrow text-[#E7C98C]">
                    {t({ ar: "ابدأ من موجز المشروع", en: "Start with the Project Brief" })}
                  </p>
                  <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-semibold tracking-normal text-white">
                    {t({ ar: "أرسل موجز مشروعك", en: "Send Your Project Brief" })}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/78 sm:text-lg">
                    {t({
                      ar: "اكتب لنا نوع المشروع والمساحة والخامة أو التشطيب المطلوب، وسنساعدك في تحديد الخيار الأنسب وخطوة التواصل التالية.",
                      en: "Send the project type, space, and preferred material or finish, and we will help define the right option and next contact step.",
                    })}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <ActionLink href={company.whatsapp} external>
                    <MessageCircle size={18} aria-hidden="true" />
                    {t({ ar: "واتساب", en: "WhatsApp" })}
                  </ActionLink>
                  <ActionLink href={company.phoneHref} variant="soft">
                    <Phone size={18} aria-hidden="true" />
                    {t({ ar: "اتصال", en: "Call" })}
                  </ActionLink>
                </div>
              </div>
            </div>
          </SectionShell>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

export function ContactRoutePage() {
  return (
    <LanguageProvider>
      <ContactRoutePageBody />
    </LanguageProvider>
  );
}
