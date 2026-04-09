import { useEffect, useState } from "react";

export const StickyBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-content mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-bold text-foreground text-sm tracking-tight">Energia dla Biznesu</span>
        <a
          href="#zapisz-sie"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-xs font-bold tracking-wide hover:opacity-90 transition-opacity"
        >
          ZAPISZ SIE — 95% DOFINANSOWANIA
        </a>
      </div>
    </div>
  );
};
