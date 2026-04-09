import { ScrollFadeIn } from "./ScrollFadeIn";

interface Props {
  onOpenRegistration: () => void;
}

export const FirstCTA = ({ onOpenRegistration }: Props) => (
  <section className="py-20 md:py-28 px-4 border-t border-b border-border">
    <ScrollFadeIn>
      <div className="max-w-content mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1">
            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">Pelny kurs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              To, co zobaczyłes, to ulamek tego, czego ucze na kursie
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Na 20-godzinnym kursie online na zywo pracujemy razem — budujesz strony, tworzysz wideo, uruchamiasz kampanie, automatyzujesz procesy i budujesz agentow AI.
            </p>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-muted-foreground line-through text-lg">5 000 zl</span>
              <span className="text-5xl font-black text-primary tracking-tight">250 zl</span>
            </div>
            <p className="text-muted-foreground text-sm mb-8">Dofinansowanie od panstwa pokrywa do 95% kosztow kursu</p>
            <button
              onClick={onOpenRegistration}
              className="inline-block bg-foreground text-background px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Zapisz sie na kurs
            </button>
          </div>
        </div>
      </div>
    </ScrollFadeIn>
  </section>
);
