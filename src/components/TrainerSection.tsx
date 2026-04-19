import { ScrollFadeIn } from "./ScrollFadeIn";

const stats = [
  { num: "8+ lat", label: "doświadczenia w marketingu i tworzeniu treści" },
  { num: "$70 000+", label: "zarządzanych budżetów reklamowych" },
  { num: "100 mln+", label: "wyświetleń wideo stworzonych przeze mnie" },
  { num: "4+ lata", label: "pracy z AI w codziennym tworzeniu treści" },
];

export const TrainerSection = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="max-w-content mx-auto">
      <ScrollFadeIn>
        <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">Prowadzący szkolenie</p>
      </ScrollFadeIn>

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-16 items-start">
        {/* Photo */}
        <ScrollFadeIn>
          <div className="flex flex-col items-center md:items-start">
            <div className="relative inline-block">
              <img
                src="/images/mat-trainer.jpg"
                alt="Mat – trener, specjalista AI i marketingu"
                className="w-48 md:w-56 aspect-[3/4] object-cover object-top rounded-xl shadow-lg"
                loading="lazy"
              />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                Twój trener
              </span>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Content */}
        <ScrollFadeIn>
          <div className="mt-6 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-1">Mat</h2>
            <p className="text-muted-foreground text-base italic mb-8">
              Praktyk marketingu, twórca treści i specjalista AI w biznesie
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {stats.map((s, i) => (
                <div key={i} className="border border-border rounded-lg p-4 border-l-[3px] border-l-primary">
                  <div className="text-xl font-bold text-foreground leading-tight">{s.num}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Przez ponad 8 lat budowałem strategie contentowe i prowadziłem kampanie reklamowe dla firm różnej wielkości
              — od jednoosobowych działalności po większe organizacje. Pracuję z AI od ponad 4 lat, w tym tworzę treści
              wideo i content marketingowy bez pojawiania się przed kamerą. Na szkoleniu przekazuję wyłącznie to, co
              sprawdziłem w praktyce — bez zbędnej teorii.
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  </section>
);
