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
    <div className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-content mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-serif text-lg text-foreground">Energia dla Biznesu</span>
        <a
          href="#zapisz-sie"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Zapisz się — 95% dofinansowania →
        </a>
      </div>
    </div>
  );
};
