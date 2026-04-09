import { ScrollFadeIn } from "./ScrollFadeIn";

const rows = [
  { name: "Strona internetowa", agency: "5 000 – 15 000 zl", ai: "0 zl" },
  { name: "Grafiki social media", agency: "200 – 500 zl / szt.", ai: "0 zl" },
  { name: "Wideo reklamowe", agency: "1 000 – 3 000 zl", ai: "0 zl" },
  { name: "Kampania mailingowa", agency: "1 000 – 2 000 zl/mies.", ai: "0 zl" },
  { name: "Copywriting", agency: "300 – 800 zl / tekst", ai: "0 zl" },
];

export const ComparisonTable = () => (
  <section className="py-20 md:py-28 px-4">
    <ScrollFadeIn>
      <div className="max-w-content mx-auto">
        <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">Porownanie</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 tracking-tight">
          Agencja vs AI — ile naprawde <span className="text-accent">oszczedzasz?</span>
        </h2>

        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-bold text-foreground text-xs uppercase tracking-widest">Potrzebujesz</th>
                <th className="text-center p-4 font-bold text-accent text-xs uppercase tracking-widest">Agencja</th>
                <th className="text-center p-4 font-bold text-primary text-xs uppercase tracking-widest">Z AI</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-4 text-foreground font-medium">{r.name}</td>
                  <td className="p-4 text-center text-muted-foreground">{r.agency}</td>
                  <td className="p-4 text-center font-bold text-primary">{r.ai}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-border bg-card">
                <td className="p-4 font-bold text-foreground">Razem / miesiac</td>
                <td className="p-4 text-center font-bold text-accent">5 000 – 20 000 zl</td>
                <td className="p-4 text-center font-bold text-primary">0 zl + Twoj czas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ScrollFadeIn>
  </section>
);
