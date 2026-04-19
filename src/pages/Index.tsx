import { useState, useEffect } from "react";
import { StickyBar } from "@/components/StickyBar";
import { HeroSection } from "@/components/HeroSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { TrainerSection } from "@/components/TrainerSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { GallerySection } from "@/components/GallerySection";
import { SecondCTA } from "@/components/SecondCTA";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";
import { InfiniteGridBg } from "@/components/ui/the-infinite-grid";

const Index = () => {
  const { theme, toggle } = useTheme();
  const [showRegistration, setShowRegistration] = useState(false);

  const openRegistration = () => setShowRegistration(true);
  const closeRegistration = () => setShowRegistration(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("zapisz") === "1") {
      setShowRegistration(true);
    }
  }, []);

  return (
    <InfiniteGridBg className="min-h-screen bg-background">
      <StickyBar onOpenRegistration={openRegistration} theme={theme} onToggleTheme={toggle} />
      <div id="szkolenie" className="pt-14">
        <HeroSection onOpenRegistration={openRegistration} />
      </div>
      <ComparisonTable />
      <div id="trener">
        <TrainerSection />
      </div>
      <div id="opinie">
        <ReviewsSection />
      </div>
      <GallerySection />
      <SecondCTA onOpenRegistration={openRegistration} />
      <RegistrationForm prefill={null} isOpen={showRegistration} onClose={closeRegistration} />
      <RegistrationForm prefill={null} />
      <Footer />
    </InfiniteGridBg>
  );
};

export default Index;
