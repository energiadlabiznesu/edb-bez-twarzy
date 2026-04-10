import { useState, useEffect } from "react";
import { StickyBar } from "@/components/StickyBar";
import { HeroSection } from "@/components/HeroSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SecondCTA } from "@/components/SecondCTA";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [gateData, setGateData] = useState<{ imie: string; email: string; telefon: string } | null>(null);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleGateSubmit = (data: { imie: string; email: string; telefon: string }) => {
    setGateData(data);
  };

  const openRegistration = () => setShowRegistration(true);
  const closeRegistration = () => setShowRegistration(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("zapisz") === "1") {
      setShowRegistration(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <StickyBar onOpenRegistration={openRegistration} />
      <HeroSection onGateSubmit={handleGateSubmit} gateData={gateData} onOpenRegistration={openRegistration} />
      <ComparisonTable />
      <SecondCTA onOpenRegistration={openRegistration} />
      <RegistrationForm prefill={gateData} isOpen={showRegistration} onClose={closeRegistration} />
      <RegistrationForm prefill={gateData} />
      <Footer />
    </div>
  );
};

export default Index;
