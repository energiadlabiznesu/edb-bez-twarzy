import { ScrollFadeIn } from "./ScrollFadeIn";

interface Props {
  onOpenRegistration: () => void;
}

export const SecondCTA = ({ onOpenRegistration }: Props) => (
  <section className="py-20 md:py-28 px-4 border-t border-b border-border">
    <ScrollFadeIn>
      <div className="max-w-content mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
          Zapłać <span className="text-primary">od 250 zł</span> zamiast 5 000 zł
        </h2>
        <p className="text-muted-foreground text-base mb-4 leading-relaxed max-w-xl mx-auto">
          Dofinansowanie od państwa pokrywa do 95% kosztów kursu. Program się kończy — sprawdź, czy jeszcze możesz skorzystać.
        </p>
        <p className="text-muted-foreground text-sm mb-8 max-w-lg mx-auto">
          Pomagamy z dokumentami, z formalnościami, ze wszystkim. Od Ciebie — tylko zgłoszenie i udział.
        </p>
        <button
          onClick={onOpenRegistration}
          className="inline-block bg-foreground text-background px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Zapisz się i sprawdź dofinansowanie
        </button>
        <p className="text-muted-foreground text-xs mt-4 uppercase tracking-widest">Liczba miejsc ograniczona</p>
      </div>
    </ScrollFadeIn>
  </section>
);
