import type { Metadata, Viewport } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { assets } from "@/data/assets";

const siteUrl = "https://capitaloasisgroup.com";
const title = "Capital Oasis | تصنيع وتوريد أبواب وأثاث وديكورات معارض وفعاليات في الرياض";
const arabicDescription =
  "كابيتال واسي شركة متخصصة في تصنيع وتوريد الأبواب والأثاث وديكورات المحلات التجارية وديكورات المعارض والفعاليات المختلفة في الرياض.";
const englishDescription =
  "Capital Oasis provides manufacturing and supply solutions for doors and furniture, commercial shop decorations, exhibition decor, and different event setups in Riyadh, Saudi Arabia.";

const socialImage = assets.logo.src;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: arabicDescription,
  keywords: [
    "Capital Oasis",
    "كابيتال واسي",
    "أبواب WPC",
    "أبواب PVC",
    "توريد وتركيب أبواب",
    "أثاث تفصيل",
    "غرف ملابس",
    "وحدات تلفزيون",
    "ديكورات محلات تجارية",
    "ديكورات معارض",
    "commercial shop decoration",
    "retail fit-out",
    "ديكورات معارض وفعاليات",
    "Exhibition Decor & Events",
    "Hotel Furniture",
    "Wooden Doors",
    "الرياض",
    "NHC approved",
  ],
  authors: [{ name: "Capital Oasis" }],
  creator: "Capital Oasis Woodworking Company",
  publisher: "Capital Oasis Woodworking Company",
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "ar_SA",
    alternateLocale: "en_SA",
    siteName: "Capital Oasis",
    title,
    description: englishDescription,
    images: [{ url: socialImage, alt: "Capital Oasis official brand logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: englishDescription,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B3B35",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#organization`,
    name: "Capital Oasis Woodworking Company",
    alternateName: "كابيتال واسي",
    url: siteUrl,
    logo: `${siteUrl}${assets.logo.src}`,
    image: `${siteUrl}${assets.hero}`,
    description: englishDescription,
    telephone: "+966549971514",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Abdullah Bin Abdulhaq Al Ansari Street, Al Sulay",
      addressLocality: "Riyadh",
      addressCountry: "SA",
    },
    areaServed: { "@type": "City", name: "Riyadh" },
    knowsAbout: [
      "WPC doors",
      "PVC doors",
      "Wooden Doors",
      "Custom furniture",
      "Hotel Furniture",
      "Commercial shop decoration",
      "Retail fit-out",
      "Exhibition Decor & Events",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+966549971514",
      contactType: "sales",
      availableLanguage: ["Arabic", "English"],
    },
  };

  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${inter.variable} ${tajawal.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a href="#main-content" className="skip-link">
          تخطِ إلى المحتوى | Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
