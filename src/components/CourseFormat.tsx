import { ScrollFadeIn } from "./ScrollFadeIn";

const items = [
  { emoji: "📅", title: "20 godzin warsztatów", desc: "Intensywny kurs online" },
  { emoji: "💻", title: "Na żywo, nie nagrany", desc: "Zoom / Google Meet" },
  { emoji: "🛠️", title: "Praktyka, nie teoria", desc: "Pracujesz na swoich przykładach" },
  { emoji: "👥", title: "Dla siebie lub zespołu", desc: "Firmy, JDG, NGO, indywidualnie" },
];

export const CourseFormat = () => (
  <section className="py-16 md:py-24 px-4">
    <div className="max-w-content mx-auto">
      <ScrollFadeIn>
        <h2 className="font-serif text-2xl md:text-4xl text-foreground text-center mb-10">Jak wygląda kurs?</h2>
      </ScrollFadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map((item, i) => (
          <ScrollFadeIn key={i}>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="font-sans font-bold text-foreground text-lg mb-1">{item.title}</h3>
              <p className="text-body-secondary text-sm">{item.desc}</p>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  </section>
);
