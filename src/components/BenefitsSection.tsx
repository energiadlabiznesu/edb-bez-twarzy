import { ScrollFadeIn } from "./ScrollFadeIn";

const benefits = [
  { emoji: "🌐", title: "Strony internetowe z AI", desc: "Budujesz profesjonalne strony w Claude Code. Bez programisty, za darmo, w kilkadziesiąt minut." },
  { emoji: "🎬", title: "Wideo i montaż", desc: "Tworzysz, montujesz i dodajesz napisy w VEED.IO. Budujesz awatary AI do prowadzenia marketingu." },
  { emoji: "📣", title: "Kampanie reklamowe", desc: "Facebook Ads, Google Ads — od tworzenia kreacji po uruchomienie kampanii, wszystko z AI." },
  { emoji: "🎨", title: "Grafiki i treści", desc: "Posty, grafiki, teksty reklamowe z ChatGPT, Canva i Nano Banana. Bez grafika i copywritera." },
  { emoji: "⚡", title: "Automatyzacja procesów", desc: "Mailingi, autoresponder, CRM, leady — automatyzacje, które oszczędzają godziny tygodniowo." },
  { emoji: "🤖", title: "Agenci AI", desc: "Budujesz agentów AI, którzy odpowiadają klientom, kwalifikują leady i obsługują zapytania za Ciebie." },
];

export const BenefitsSection = () => (
  <section className="py-16 md:py-24 px-4">
    <div className="max-w-content mx-auto text-center">
      <ScrollFadeIn>
        <span className="inline-block text-primary text-sm font-semibold mb-4">Marketing i automatyzacja z AI</span>
        <h2 className="font-serif text-2xl md:text-4xl text-foreground mb-3">Czego nauczysz Ty i&nbsp;Twój zespół?</h2>
        <p className="text-body-secondary text-base md:text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
          Po dwóch dniach Twoja firma będzie działać jak zespół z&nbsp;własnym grafikiem, programistą, montażystą i&nbsp;specjalistą od&nbsp;reklam — tylko że to wszystko robi AI.
        </p>
      </ScrollFadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {benefits.map((b, i) => (
          <ScrollFadeIn key={i}>
            <div className="bg-card rounded-xl p-6 text-left border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-orange-soft flex items-center justify-center text-2xl mb-4">
                {b.emoji}
              </div>
              <h3 className="font-sans font-bold text-foreground text-lg mb-1">{b.title}</h3>
              <p className="text-body-secondary text-sm leading-relaxed">{b.desc}</p>
            </div>
          </ScrollFadeIn>
        ))}
      </div>

      <ScrollFadeIn className="mt-10">
        <p className="text-body-secondary mb-6">I to wciąż nie wszystko. 20 godzin intensywnych warsztatów — na Twoich realnych przypadkach.</p>
        <a
          href="#zapisz-sie"
          className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          Chcę się zapisać →
        </a>
      </ScrollFadeIn>
    </div>
  </section>
);
