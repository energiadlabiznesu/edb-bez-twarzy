import { ScrollFadeIn } from "./ScrollFadeIn";

export const SecondCTA = () => (
  <section className="py-20 md:py-28 px-4 border-t border-b border-border">
    <ScrollFadeIn>
      <div className="max-w-content mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
          Zaplac <span className="text-primary">250 zl</span> zamiast 5 000 zl
        </h2>
        <p className="text-muted-foreground text-base mb-4 leading-relaxed max-w-xl mx-auto">
          Dofinansowanie od panstwa pokrywa do 95% kosztow kursu. Program sie konczy — sprawdz, czy jeszcze mozesz skorzystac.
        </p>
        <p className="text-muted-foreground text-sm mb-8 max-w-lg mx-auto">
          Pomagamy z dokumentami, z formalnosciami, ze wszystkim. Od Ciebie — tylko zgloszenie i udzial.
        </p>
        <a
          href="#zapisz-sie"
          className="inline-block bg-foreground text-background px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          ZAPISZ SIE I SPRAWDZ DOFINANSOWANIE
        </a>
        <p className="text-muted-foreground text-xs mt-4 uppercase tracking-widest">Liczba miejsc ograniczona</p>
      </div>
    </ScrollFadeIn>
  </section>
);
