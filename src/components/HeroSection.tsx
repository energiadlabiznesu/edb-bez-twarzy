import { useState } from "react";

interface HeroSectionProps {
  onGateSubmit: (data: { imie: string; email: string; telefon: string }) => void;
  gateData: { imie: string; email: string; telefon: string } | null;
}

export const HeroSection = ({ onGateSubmit, gateData }: HeroSectionProps) => {
  const [imie, setImie] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const unlocked = !!gateData;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("zrodlo", "gate / bezplatne szkolenie AI");
      formData.append("imie", imie);
      formData.append("email", email);
      formData.append("telefon", telefon);
      fetch("https://script.google.com/macros/s/AKfycbz2V42cgixXmfl5hSeugLtMQfYRAM9ZW8PXZkdZa956fM8DAxQAqAv9ThFaTrBdr0g/exec", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
    } catch {}
    onGateSubmit({ imie, email, telefon });
    setSubmitting(false);
  };

  return (
    <section className="px-4 pt-8 pb-12 md:pt-16 md:pb-20">
      <div className="max-w-content mx-auto text-center">
        <div className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          Bezpłatne szkolenie
        </div>

        <h1 className="font-serif text-3xl md:text-5xl leading-tight text-foreground mb-4">
          Twoja firma nie potrzebuje agencji. Potrzebuje AI.
        </h1>

        <p className="text-body-secondary text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Obejrzyj bezpłatne szkolenie, w&nbsp;którym buduję stronę www, tworzę grafikę i&nbsp;montuję wideo — z&nbsp;AI, za&nbsp;0&nbsp;zł. Po&nbsp;tym szkoleniu będziesz w&nbsp;stanie zrobić to&nbsp;samo w&nbsp;swojej firmie.
        </p>

        {/* Video container */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-foreground/5">
          <iframe
            src={unlocked ? "https://www.youtube.com/embed/pfvN4kNOa2E?autoplay=1" : "https://www.youtube.com/embed/pfvN4kNOa2E"}
            title="Bezpłatne szkolenie AI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
          {!unlocked && (
            <div className="absolute inset-0 backdrop-blur-md bg-foreground/10 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-card/90 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-card font-semibold text-lg">Odblokuj szkolenie</p>
              </div>
            </div>
          )}
        </div>

        {unlocked && gateData && (
          <div className="mb-8 p-4 bg-green-50 rounded-xl text-green-800 font-medium text-lg">
            ✅ Gotowe, {gateData.imie}! Twoje szkolenie jest odblokowane.
          </div>
        )}

        {!unlocked && (
          <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8 max-w-md mx-auto mb-8 text-left">
            <h3 className="font-serif text-xl text-foreground mb-4 text-center">
              Podaj dane, aby odblokować szkolenie
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Imię"
                value={imie}
                onChange={(e) => setImie(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              />
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              />
              <input
                type="tel"
                required
                placeholder="Telefon"
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {submitting ? "Wysyłanie..." : "Odblokuj szkolenie →"}
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-3 text-center leading-relaxed">
              Wyrażam zgodę na kontakt w celu przedstawienia oferty szkoleniowej zgodnie z{" "}
              <a href="https://energiabiznesu.pl/polityka-prywatnosci/" target="_blank" rel="noopener" className="underline">
                polityką prywatności
              </a>
              . Administratorem danych jest Energia dla Biznesu.
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-body-secondary">
          <span>✅ Zero teorii — same konkrety</span>
          <span>✅ Nagrane specjalnie dla Ciebie</span>
          <span>✅ 100% za darmo</span>
        </div>
      </div>
    </section>
  );
};
