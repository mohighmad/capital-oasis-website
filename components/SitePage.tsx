"use client";

import { BusinessLines } from "./BusinessLines";
import { Collections } from "./Collections";
import { CommercialSection } from "./CommercialSection";
import { Contact } from "./Contact";
import { DoorsSection } from "./DoorsSection";
import { EventSection } from "./EventSection";
import { FeaturedSolutions } from "./FeaturedSolutions";
import { Footer } from "./Footer";
import { FurnitureSection } from "./FurnitureSection";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { LanguageProvider } from "./LanguageProvider";
import { NHCTrustStrip } from "./NHCTrustStrip";
import { OfferSection } from "./OfferSection";
import { OurCategories } from "./OurCategories";
import { Process } from "./Process";
import { ProjectVideos } from "./ProjectVideos";
import { ScrollToTop } from "./ScrollToTop";
import { TeamSection } from "./TeamSection";
import { WhatsAppButton } from "./WhatsAppButton";
import { WhyChooseUs } from "./WhyChooseUs";

export function SitePage() {
  return (
    <LanguageProvider>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <OurCategories />
        <FeaturedSolutions />
        <Collections />
        <BusinessLines />
        <DoorsSection />
        <FurnitureSection />
        <CommercialSection />
        <EventSection />
        <Gallery />
        <ProjectVideos />
        <OfferSection />
        <WhyChooseUs />
        <TeamSection />
        <Process />
        <NHCTrustStrip />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </LanguageProvider>
  );
}
