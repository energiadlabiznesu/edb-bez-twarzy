import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface Props {
  onOpenRegistration: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const navLinks = [
  { label: "Bezpłatne szkolenie", id: "szkolenie" },
  { label: "Trener", id: "trener" },
  { label: "Opinie", id: "opinie" },
  { label: "Kontakt", id: "kontakt" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 60;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
};

export const StickyBar = ({ onOpenRegistration, theme, onToggleTheme }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  return (
    <div
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-content mx-auto px-4 h-14 flex items-center justify-between gap-3">

        {/* Logo */}
        <img src="/images/logo.png" alt="Energia dla Biznesu" className="h-7 w-auto flex-shrink-0" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-muted"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Desktop: register button */}
          <button
            onClick={onOpenRegistration}
            className="hidden md:block bg-primary text-primary-foreground px-4 py-1.5 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Zapisz się
          </button>

          {/* Mobile: yellow register button (always visible) */}
          <button
            onClick={onOpenRegistration}
            className="md:hidden bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Zapisz się na kurs
          </button>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-1.5 rounded-md hover:bg-muted transition-colors"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <div className="flex flex-col gap-1 w-5">
              <span
                className={`block h-0.5 bg-foreground origin-center transition-all duration-200 ${
                  mobileOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-foreground transition-all duration-200 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-foreground origin-center transition-all duration-200 ${
                  mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden border-t border-border bg-background overflow-hidden transition-all duration-200 ${
          mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { scrollTo(link.id); setMobileOpen(false); }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 text-left px-2 rounded-md hover:bg-muted"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
