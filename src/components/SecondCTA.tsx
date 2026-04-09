import { ScrollFadeIn } from "./ScrollFadeIn";

export const SecondCTA = () => (
  <section className="section-dark py-16 md:py-24 px-4">
    <ScrollFadeIn>
      <div className="max-w-content mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-4xl mb-4">Zapłać 250&nbsp;zł zamiast 5&nbsp;000&nbsp;zł</h2>
        <p className="text-lg opacity-80 mb-4 leading-relaxed">
          Dofinansowanie od państwa pokrywa do 95% kosztów kursu. Program się kończy — sprawdź, czy jeszcze możesz skorzystać.
        </p>
        <p className="opacity-70 mb-8 leading-relaxed">
          Pomagamy z dokumentami, z formalnościami, ze wszystkim. Od Ciebie — tylko zgłoszenie i udział.
        </p>
        <a
          href="#zapisz-sie"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Zapisz się i sprawdź dofinansowanie →
        </a>
        <div className="mt-4">
          <span className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
            ⏳ Liczba miejsc ograniczona
          </span>
        </div>
      </div>
    </ScrollFadeIn>
  </section>
);
