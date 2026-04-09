import { useState } from "react";
import { ScrollFadeIn } from "./ScrollFadeIn";

const voivodeships = [
  "dolnośląskie", "kujawsko-pomorskie", "lubelskie", "lubuskie", "łódzkie", "małopolskie",
  "mazowieckie", "opolskie", "podkarpackie", "podlaskie", "pomorskie", "śląskie",
  "świętokrzyskie", "warmińsko-mazurskie", "wielkopolskie", "zachodniopomorskie",
];

const formy = ["Sp. z o.o.", "JDG", "Fundacja", "Stowarzyszenie", "Inne"];

interface Props {
  prefill: { imie: string; email: string; telefon: string } | null;
}

export const RegistrationForm = ({ prefill }: Props) => {
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

  // Sync prefill when it changes
  if (prefill && !imie && !email && !telefon) {
    setImie(prefill.imie);
    setEmail(prefill.email);
    setTelefon(prefill.telefon);
  }

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
      formData.append("typ", typ === "firma" ? "Dla zespołu / firmy" : "Dla siebie");
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

  const inputClass = "w-full px-4 py-3 rounded-lg bg-card/10 border border-card/20 text-card placeholder:text-card/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all";
  const selectClass = inputClass + " appearance-none";

  return (
    <section id="zapisz-sie" className="section-dark py-16 md:py-24 px-4">
      <ScrollFadeIn>
        <div className="max-w-content mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-primary text-sm font-semibold mb-4">Zapisz się na kurs</span>
            <h2 className="font-serif text-2xl md:text-4xl mb-3">Chcę wziąć udział w kursie</h2>
            <p className="opacity-70 leading-relaxed max-w-xl mx-auto">
              Wypełnij formularz — sprawdzimy dostępne dofinansowanie, pomożemy z dokumentami i przeprowadzimy całe Twoje zgłoszenie. Bezpłatnie.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-serif text-2xl mb-3">Dziękujemy za zgłoszenie!</h3>
              <p className="opacity-80 max-w-md mx-auto leading-relaxed">
                Nasz specjalista skontaktuje się z Tobą w ciągu 24 godzin, aby omówić możliwości dofinansowania i pomóc z formalnościami.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" required placeholder="Imię i nazwisko *" value={imie} onChange={(e) => setImie(e.target.value)} className={inputClass} />
                <input type="email" required placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="tel" required placeholder="Telefon *" value={telefon} onChange={(e) => setTelefon(e.target.value)} className={inputClass} />
                <input type="text" required placeholder="Miasto *" value={miasto} onChange={(e) => setMiasto(e.target.value)} className={inputClass} />
              </div>

              {/* Radio buttons */}
              <div className="flex gap-4">
                <label className={`flex-1 text-center py-3 rounded-lg cursor-pointer border transition-all font-medium ${typ === "firma" ? "bg-primary text-primary-foreground border-primary" : "bg-card/10 border-card/20 text-card"}`}>
                  <input type="radio" name="typ" className="sr-only" checked={typ === "firma"} onChange={() => setTyp("firma")} />
                  Dla zespołu / firmy
                </label>
                <label className={`flex-1 text-center py-3 rounded-lg cursor-pointer border transition-all font-medium ${typ === "indywidualnie" ? "bg-primary text-primary-foreground border-primary" : "bg-card/10 border-card/20 text-card"}`}>
                  <input type="radio" name="typ" className="sr-only" checked={typ === "indywidualnie"} onChange={() => setTyp("indywidualnie")} />
                  Dla siebie
                </label>
              </div>

              {typ === "firma" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select value={forma} onChange={(e) => setForma(e.target.value)} className={selectClass}>
                      <option value="">Forma działalności</option>
                      {formy.map((f) => <option key={f} value={f}>{f}</option>)}
                    </select>
                    <input type="number" min="1" placeholder="Liczba osób" value={liczbaOsob} onChange={(e) => setLiczbaOsob(e.target.value)} className={inputClass} />
                  </div>
                  <input type="text" placeholder="Nazwa firmy / organizacji" value={nazwaFirmy} onChange={(e) => setNazwaFirmy(e.target.value)} className={inputClass} />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select required value={wojewodztwo} onChange={(e) => setWojewodztwo(e.target.value)} className={selectClass}>
                  <option value="">Województwo *</option>
                  {voivodeships.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                <input type="text" required placeholder="Powiat *" value={powiat} onChange={(e) => setPowiat(e.target.value)} className={inputClass} />
              </div>

              <div className="flex justify-center pt-2">
                <span className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
                  🏷️ Dofinansowanie do 95% — sprawdzimy dostępne opcje za Ciebie
                </span>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {submitting ? "Wysyłanie..." : "Wyślij zgłoszenie →"}
              </button>

              <p className="text-xs text-center opacity-50 leading-relaxed">
                Wyrażam zgodę na przetwarzanie danych osobowych w celu obsługi zgłoszenia szkoleniowego i kontaktu w sprawie dofinansowania, zgodnie z{" "}
                <a href="https://energiabiznesu.pl/polityka-prywatnosci/" target="_blank" rel="noopener" className="underline">
                  polityką prywatności
                </a>
                . Administratorem danych jest Energia dla Biznesu.
              </p>
            </form>
          )}
        </div>
      </ScrollFadeIn>
    </section>
  );
};
