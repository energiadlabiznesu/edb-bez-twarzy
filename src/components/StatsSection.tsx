import { ScrollFadeIn } from "./ScrollFadeIn";

const stats = [
  { value: "95%", label: "Dofinansowania" },
  { value: "20h", label: "Warsztatów na żywo" },
  { value: "15+", label: "Narzędzi AI" },
];

export const StatsSection = () => (
  <section className="py-12 md:py-16 px-4 bg-muted">
    <ScrollFadeIn>
      <div className="max-w-content mx-auto flex items-center justify-center gap-8 md:gap-16">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-primary">{s.value}</div>
            <div className="text-sm text-body-secondary mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </ScrollFadeIn>
  </section>
);
