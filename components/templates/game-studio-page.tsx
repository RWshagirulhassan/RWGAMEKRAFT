import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { OfferingsSection } from "@/components/sections/offerings-section";
import { AboutSection } from "@/components/sections/about-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";
import { TeamSection } from "../sections/team-section";

export default function GameStudioPage() {
  return (
    <div className="min-h-screen  bg-background text-foreground">
      <SiteHeader />
      <main className="pt-0 md:pt-0">
        <HeroSection />
        <OfferingsSection />
        {/* <AboutSection /> */}
        <TeamSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
}
