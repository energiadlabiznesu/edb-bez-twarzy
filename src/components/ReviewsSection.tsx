import { ScrollFadeIn } from "./ScrollFadeIn";

const reviews = [
  {
    text: "Byłem sceptyczny przed szkoleniem – myślałem, że AI to coś dla dużych firm. Po dwóch dniach sam stworzyłem pierwszą kampanię w Meta Ads i landing page do nowego produktu. Bez agencji. Po miesiącu nasz koszt pozyskania klienta spadł o 40%.",
    initials: "KW",
    name: "Konrad Wiśniewski",
    role: "Właściciel, firma budowlana, Łódź",
    tag: "CPL spadł o 40%",
    color: "bg-primary text-primary-foreground",
  },
  {
    text: "Wcześniej zatrudnialiśmy grafika zewnętrznego – kosztowało nas to kilkaset złotych miesięcznie. Teraz całą grafikę i rolki na Instagram robię sama w Canva i VEED.IO. Zaoszczędziliśmy jakieś 4 000 zł w ciągu pół roku. I wygląda lepiej niż wcześniej.",
    initials: "KS",
    name: "Karolina Szymańska",
    role: "Koordynatorka marketingu, e-commerce, Kraków",
    tag: "Oszczędność 4 000 zł / pół roku",
    color: "bg-accent text-accent-foreground",
  },
  {
    text: "Wysłałem na szkolenie dwóch pracowników działu marketingu. Zmiana była widoczna od razu – przestali czekać na zewnętrzne agencje i zaczęli działać sami. Pierwsze kampanie Google Ads i treści na social media zrobili samodzielnie w pierwszym tygodniu po powrocie.",
    initials: "WK",
    name: "Władysław Kowalczyk",
    role: "Dyrektor operacyjny, firma usługowa, Wrocław",
    tag: "Zespół działa samodzielnie",
    color: "bg-foreground text-background",
  },
];

export const ReviewsSection = () => (
  <section className="py-20 md:py-28 px-4 bg-card">
    <div className="max-w-content mx-auto">
      <ScrollFadeIn>
        <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">Opinie</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
          Co mówią <span className="text-primary">uczestnicy?</span>
        </h2>
        <p className="text-muted-foreground text-base mb-12 leading-relaxed">
          Prawdziwe efekty, które firmy osiągnęły po szkoleniu.
        </p>
      </ScrollFadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((r, i) => (
          <ScrollFadeIn key={i}>
            <div className="border border-border rounded-lg p-6 flex flex-col gap-5 h-full bg-background hover:-translate-y-1 transition-transform duration-200">
              <div className="flex gap-0.5 text-primary text-base">
                {"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${r.color}`}>
                  {r.initials}
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
              <span className="text-xs font-semibold text-primary border border-primary/30 bg-primary/5 rounded-full px-3 py-1 self-start">
                ✓ {r.tag}
              </span>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  </section>
);
