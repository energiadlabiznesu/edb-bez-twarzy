import { ScrollFadeIn } from "./ScrollFadeIn";

export const FirstCTA = () => (
  <section className="section-dark py-16 md:py-24 px-4">
    <ScrollFadeIn>
      <div className="max-w-content mx-auto text-center">
        <span className="inline-block text-primary text-sm font-semibold mb-4">Pełny kurs</span>
        <h2 className="font-serif text-2xl md:text-4xl mb-4">
          To, co zobaczyłeś, to ułamek tego, czego uczę na&nbsp;kursie
        </h2>
        <p className="text-lg opacity-80 mb-8 leading-relaxed">
          Na 20-godzinnym kursie online na żywo pracujemy razem na&nbsp;Twoich przykładach — budujesz strony, tworzysz wideo, uruchamiasz kampanie, automatyzujesz procesy i&nbsp;budujesz agentów AI.
        </p>

        <div className="mb-8">
          <span className="text-2xl line-through opacity-50">5 000 zł</span>
          <div className="text-5xl md:text-6xl font-bold text-primary mt-1">250 zł</div>
          <p className="text-sm opacity-70 mt-2">Dofinansowanie od państwa pokrywa do 95% kosztów kursu</p>
        </div>

        <a
          href="#zapisz-sie"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Zapisz się na kurs →
        </a>
        <p className="text-sm opacity-60 mt-4">⏳ Program dofinansowania się kończy — nie czekaj.</p>
      </div>
    </ScrollFadeIn>
  </section>
);
