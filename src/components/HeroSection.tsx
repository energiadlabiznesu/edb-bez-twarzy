import { useState } from "react";

interface HeroSectionProps {
  onGateSubmit: (data: { imie: string; email: string; telefon: string }) => void;
  gateData: { imie: string; email: string; telefon: string } | null;
}

export const HeroSection = ({ onGateSubmit, gateData }: HeroSectionProps) => {
  const [showModal, setShowModal] = useState(false);
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
    setShowModal(false);
    setSubmitting(false);
  };

  return (
    <>
      <section className="px-4 pt-12 pb-16 md:pt-24 md:pb-24">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block border border-border text-muted-foreground text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              Bezplatne szkolenie
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] text-foreground mb-6 tracking-tight">
              Twoja firma nie potrzebuje agencji.{" "}
              <span className="text-primary">Potrzebuje AI.</span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Obejrzyj bezplatne szkolenie, w ktorym buduje strone www, tworze grafike i montuje wideo — z AI, za 0 zl. Po tym szkoleniu bedziesz w stanie zrobic to samo w swojej firmie.
            </p>
          </div>

          {/* Video */}
          <div
            className="relative w-full aspect-video rounded-lg overflow-hidden mb-6 border border-border cursor-pointer group"
            onClick={() => !unlocked && setShowModal(true)}
          >
            <iframe
              src={unlocked ? "https://www.youtube.com/embed/pfvN4kNOa2E?autoplay=1" : "https://www.youtube.com/embed/pfvN4kNOa2E"}
              title="Bezplatne szkolenie AI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ pointerEvents: unlocked ? "auto" : "none" }}
            />
            {!unlocked && (
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full border-2 border-foreground flex items-center justify-center mx-auto mb-4 group-hover:border-primary group-hover:scale-105 transition-all">
                    <svg className="w-8 h-8 text-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-foreground font-bold text-lg tracking-tight">Odblokuj szkolenie</p>
                  <p className="text-muted-foreground text-sm mt-1">Podaj dane, aby obejrzec za darmo</p>
                </div>
              </div>
            )}
          </div>

          {unlocked && gateData && (
            <div className="mb-6 p-4 border border-primary/30 rounded-lg text-primary font-medium text-center">
              Gotowe, {gateData.imie}! Twoje szkolenie jest odblokowane.
            </div>
          )}

          {/* Course CTA below video */}
          <div className="border border-border rounded-lg p-6 md:p-8 text-center">
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-3">Pelny kurs</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
              Chcesz wiecej? Zapisz sie na <span className="text-accent">20h warsztatow na zywo</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Strony, wideo, kampanie, automatyzacje, agenci AI — wszystko na Twoich przykladach. Dofinansowanie do 95%.
            </p>
            <a
              href="#zapisz-sie"
              className="inline-block bg-foreground text-background px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              ZAPISZ SIE NA KURS
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground mt-8">
            <span>Zero teorii — same konkrety</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
            <span>Nagrane specjalnie dla Ciebie</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
            <span>100% za darmo</span>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <div
            className="relative bg-card border border-border rounded-lg p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">Odblokuj szkolenie</h3>
            <p className="text-muted-foreground text-sm mb-6">Podaj dane, aby obejrzec szkolenie za darmo</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text" required placeholder="Imie"
                value={imie} onChange={(e) => setImie(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm"
              />
              <input
                type="email" required placeholder="Email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm"
              />
              <input
                type="tel" required placeholder="Telefon"
                value={telefon} onChange={(e) => setTelefon(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm"
              />
              <button
                type="submit" disabled={submitting}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {submitting ? "Wysylanie..." : "ODBLOKUJ SZKOLENIE"}
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              Wyrazam zgode na kontakt w celu przedstawienia oferty szkoleniowej zgodnie z{" "}
              <a href="https://energiabiznesu.pl/polityka-prywatnosci/" target="_blank" rel="noopener" className="underline">
                polityka prywatnosci
              </a>
              . Administratorem danych jest Energia dla Biznesu.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
