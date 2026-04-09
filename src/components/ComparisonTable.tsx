import { ScrollFadeIn } from "./ScrollFadeIn";

const rows = [
  { name: "Strona internetowa", agency: "5 000 – 15 000 zł", ai: "0 zł" },
  { name: "Grafiki social media", agency: "200 – 500 zł / szt.", ai: "0 zł" },
  { name: "Wideo reklamowe", agency: "1 000 – 3 000 zł", ai: "0 zł" },
  { name: "Kampania mailingowa", agency: "1 000 – 2 000 zł/mies.", ai: "0 zł" },
  { name: "Copywriting", agency: "300 – 800 zł / tekst", ai: "0 zł" },
];

export const ComparisonTable = () => (
  <section className="py-16 md:py-24 px-4">
    <ScrollFadeIn>
      <div className="max-w-content mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-primary text-sm font-semibold mb-4">Porównanie</span>
          <h2 className="font-serif text-2xl md:text-4xl text-foreground">Agencja vs AI — ile naprawdę oszczędzasz?</h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-4 font-semibold text-foreground">Potrzebujesz</th>
                <th className="text-center p-4 font-semibold text-red-600">Agencja / zlecenie</th>
                <th className="text-center p-4 font-semibold text-green-600">Z AI (po kursie)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-4 text-foreground font-medium">{r.name}</td>
                  <td className="p-4 text-center text-body-secondary">{r.agency}</td>
                  <td className="p-4 text-center font-semibold text-green-600">{r.ai}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-border bg-muted">
                <td className="p-4 font-bold text-foreground">Razem / miesiąc</td>
                <td className="p-4 text-center font-bold text-red-600">5 000 – 20 000 zł</td>
                <td className="p-4 text-center font-bold text-green-600">0 zł + Twój czas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ScrollFadeIn>
  </section>
);
