import { ScrollFadeIn } from "./ScrollFadeIn";

const items = [
  { title: "20 godzin warsztatow", desc: "Intensywny kurs online" },
  { title: "Na zywo, nie nagrany", desc: "Zoom / Google Meet" },
  { title: "Praktyka, nie teoria", desc: "Pracujesz na swoich przykladach" },
  { title: "Dla siebie lub zespolu", desc: "Firmy, JDG, NGO, indywidualnie" },
];

export const CourseFormat = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="max-w-content mx-auto">
      <ScrollFadeIn>
        <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">Format</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 tracking-tight">Jak wyglada kurs?</h2>
      </ScrollFadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <ScrollFadeIn key={i}>
            <div className="border border-border rounded-lg p-6 hover:border-muted-foreground/30 transition-colors">
              <h3 className="font-bold text-foreground text-base mb-1 tracking-tight">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  </section>
);
