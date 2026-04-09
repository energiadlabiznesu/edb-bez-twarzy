import { useState, useEffect } from "react";
import { StickyBar } from "@/components/StickyBar";
import { HeroSection } from "@/components/HeroSection";
import { FirstCTA } from "@/components/FirstCTA";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SecondCTA } from "@/components/SecondCTA";
import { CourseFormat } from "@/components/CourseFormat";
import { StatsSection } from "@/components/StatsSection";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [gateData, setGateData] = useState<{ imie: string; email: string; telefon: string } | null>(null);

  const handleGateSubmit = (data: { imie: string; email: string; telefon: string }) => {
    setGateData(data);
  };

  return (
    <div className="min-h-screen bg-background">
      <StickyBar />
      <HeroSection onGateSubmit={handleGateSubmit} gateData={gateData} />
      <FirstCTA />
      <BenefitsSection />
      <ComparisonTable />
      <SecondCTA />
      <CourseFormat />
      <StatsSection />
      <RegistrationForm prefill={gateData} />
      <Footer />
    </div>
  );
};

export default Index;
