import { ScrollFadeIn } from "./ScrollFadeIn";

const stats = [
  { value: "95%", label: "Dofinansowania" },
  { value: "20h", label: "Warsztatow na zywo" },
  { value: "15+", label: "Narzedzi AI" },
];

export const StatsSection = () => (
  <section className="py-16 md:py-20 px-4 border-t border-b border-border">
    <ScrollFadeIn>
      <div className="max-w-content mx-auto flex items-center justify-center gap-12 md:gap-20">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl md:text-5xl font-black text-primary tracking-tight">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>
    </ScrollFadeIn>
  </section>
);
