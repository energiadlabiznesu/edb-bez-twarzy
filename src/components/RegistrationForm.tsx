import { useState, useEffect } from "react";
import { ScrollFadeIn } from "./ScrollFadeIn";

const voivodeships = [
  "dolnoslaskie", "kujawsko-pomorskie", "lubelskie", "lubuskie", "lodzkie", "malopolskie",
  "mazowieckie", "opolskie", "podkarpackie", "podlaskie", "pomorskie", "slaskie",
  "swietokrzyskie", "warminsko-mazurskie", "wielkopolskie", "zachodniopomorskie",
];

const formy = ["Sp. z o.o.", "JDG", "Fundacja", "Stowarzyszenie", "Inne"];

interface Props {
  prefill: { imie: string; email: string; telefon: string } | null;
  isOpen?: boolean;
  onClose?: () => void;
}

export const RegistrationForm = ({ prefill, isOpen, onClose }: Props) => {
  const [imie, setImie] = useState(prefill?.imie || "");
  const [email, setEmail] = useState(prefill?.email || "");
  const [telefon, setTelefon] = useState(prefill?.telefon || "");
  const [miasto, setMiasto] = useState("");
  const [typ, setTyp] = useState<"firma" | "indywidualnie">("firma");
  const [forma, setForma] = useState("");
  const [liczbaOsob, setLiczbaOsob] = useState("");
  const [nazwaFirmy, setNazwaFirmy] = useState("");
  const [wojewodztwo, setWojewodztwo] = useState("");
  const [powiat, setPowiat] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefill) {
      setImie(prefill.imie);
      setEmail(prefill.email);
      setTelefon(prefill.telefon);
    }
  }, [prefill]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("zrodlo", "zapis / kurs marketing AI");
      formData.append("imie", imie);
      formData.append("email", email);
      formData.append("telefon", telefon);
      formData.append("miasto", miasto);
      formData.append("typ", typ === "firma" ? "Dla zespolu / firmy" : "Dla siebie");
      formData.append("forma", forma);
      formData.append("liczba_osob", liczbaOsob);
      formData.append("nazwa_firmy", nazwaFirmy);
      formData.append("wojewodztwo", wojewodztwo);
      formData.append("powiat", powiat);
      fetch("https://script.google.com/macros/s/AKfycbz2V42cgixXmfl5hSeugLtMQfYRAM9ZW8PXZkdZa956fM8DAxQAqAv9ThFaTrBdr0g/exec", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
    } catch {}
    setSubmitted(true);
    setSubmitting(false);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm";

  const formContent = (
    <>
      {submitted ? (
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold mb-3 tracking-tight">Dziekujemy za zgloszenie!</h3>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Nasz specjalista skontaktuje sie z Toba w ciagu 24 godzin, aby omowic mozliwosci dofinansowania i pomoc z formalnosciami.
          </p>
          {onClose && (
            <button onClick={onClose} className="mt-6 text-primary underline text-sm">Zamknij</button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" required placeholder="Imie i nazwisko *" value={imie} onChange={(e) => setImie(e.target.value)} className={inputClass} />
            <input type="email" required placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="tel" required placeholder="Telefon *" value={telefon} onChange={(e) => setTelefon(e.target.value)} className={inputClass} />
            <input type="text" required placeholder="Miasto *" value={miasto} onChange={(e) => setMiasto(e.target.value)} className={inputClass} />
          </div>

          <div className="flex gap-4">
            <label className={`flex-1 text-center py-3 rounded-lg cursor-pointer border transition-all font-bold text-sm ${typ === "firma" ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-muted-foreground/50"}`}>
              <input type="radio" name="typ" className="sr-only" checked={typ === "firma"} onChange={() => setTyp("firma")} />
              Dla zespolu / firmy
            </label>
            <label className={`flex-1 text-center py-3 rounded-lg cursor-pointer border transition-all font-bold text-sm ${typ === "indywidualnie" ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-muted-foreground/50"}`}>
              <input type="radio" name="typ" className="sr-only" checked={typ === "indywidualnie"} onChange={() => setTyp("indywidualnie")} />
              Dla siebie
            </label>
          </div>

          {typ === "firma" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select value={forma} onChange={(e) => setForma(e.target.value)} className={inputClass + " appearance-none"}>
                  <option value="">Forma dzialalnosci</option>
                  {formy.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
                <input type="number" min="1" placeholder="Liczba osob" value={liczbaOsob} onChange={(e) => setLiczbaOsob(e.target.value)} className={inputClass} />
              </div>
              <input type="text" placeholder="Nazwa firmy / organizacji" value={nazwaFirmy} onChange={(e) => setNazwaFirmy(e.target.value)} className={inputClass} />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select required value={wojewodztwo} onChange={(e) => setWojewodztwo(e.target.value)} className={inputClass + " appearance-none"}>
              <option value="">Wojewodztwo *</option>
              {voivodeships.map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
            <input type="text" required placeholder="Powiat *" value={powiat} onChange={(e) => setPowiat(e.target.value)} className={inputClass} />
          </div>

          <div className="flex justify-center pt-2">
            <span className="inline-block border border-primary/30 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
              Dofinansowanie do 95% — sprawdzimy opcje za Ciebie
            </span>
          </div>

          <button
            type="submit" disabled={submitting}
            className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {submitting ? "Wysylanie..." : "WYSLIJ ZGLOSZENIE"}
          </button>

          <p className="text-xs text-center text-muted-foreground leading-relaxed">
            Wyrazam zgode na przetwarzanie danych osobowych w celu obslugi zgloszenia szkoleniowego i kontaktu w sprawie dofinansowania, zgodnie z{" "}
            <a href="https://energiabiznesu.pl/polityka-prywatnosci/" target="_blank" rel="noopener" className="underline">
              polityka prywatnosci
            </a>
            . Administratorem danych jest Energia dla Biznesu.
          </p>
        </form>
      )}
    </>
  );

  // Modal mode
  if (isOpen !== undefined) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div
          className="relative bg-card border border-border rounded-lg p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">Zapisz sie na kurs</h3>
            <p className="text-muted-foreground text-sm">Wypelnij formularz — sprawdzimy dostepne dofinansowanie i pomozemy z dokumentami.</p>
          </div>
          {formContent}
        </div>
      </div>
    );
  }

  // Inline mode (on page)
  return (
    <section id="zapisz-sie" className="py-20 md:py-28 px-4 border-t border-border">
      <ScrollFadeIn>
        <div className="max-w-content mx-auto">
          <div className="mb-10">
            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">Zapisz sie</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Chce wziac udzial w <span className="text-primary">kursie</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Wypelnij formularz — sprawdzimy dostepne dofinansowanie, pomozemy z dokumentami i przeprowadzimy cale Twoje zgloszenie. Bezplatnie.
            </p>
          </div>
          {formContent}
        </div>
      </ScrollFadeIn>
    </section>
  );
};
