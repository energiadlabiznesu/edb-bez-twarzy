import { ScrollFadeIn } from "./ScrollFadeIn";

const benefits = [
  { title: "Strony internetowe z AI", desc: "Budujesz profesjonalne strony w Claude Code. Bez programisty, za darmo, w kilkadziesiat minut." },
  { title: "Wideo i montaz", desc: "Tworzysz, montujesz i dodajesz napisy w VEED.IO. Budujesz awatary AI do prowadzenia marketingu." },
  { title: "Kampanie reklamowe", desc: "Facebook Ads, Google Ads — od tworzenia kreacji po uruchomienie kampanii, wszystko z AI." },
  { title: "Grafiki i tresci", desc: "Posty, grafiki, teksty reklamowe z ChatGPT, Canva i Nano Banana. Bez grafika i copywritera." },
  { title: "Automatyzacja procesow", desc: "Mailingi, autoresponder, CRM, leady — automatyzacje, ktore oszczedzaja godziny tygodniowo." },
  { title: "Agenci AI", desc: "Budujesz agentow AI, ktorzy odpowiadaja klientom, kwalifikuja leady i obsluguja zapytania za Ciebie." },
];

export const BenefitsSection = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="max-w-content mx-auto">
      <ScrollFadeIn>
        <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">Pelny kurs</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
          Czego nauczysz Ty i Twoj <span className="text-accent">zespol?</span>
        </h2>
        <p className="text-muted-foreground text-base mb-14 leading-relaxed max-w-2xl">
          Po dwoch dniach Twoja firma bedzie dzialac jak zespol z wlasnym grafikiem, programista, montazysta i specjalista od reklam — tylko ze to wszystko robi AI.
        </p>
      </ScrollFadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((b, i) => (
          <ScrollFadeIn key={i}>
            <div className="border border-border rounded-lg p-6 hover:border-muted-foreground/30 transition-colors">
              <h3 className="font-bold text-foreground text-base mb-2 tracking-tight">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          </ScrollFadeIn>
        ))}
      </div>

      <ScrollFadeIn className="mt-12">
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">I to wciaz nie wszystko. 20 godzin intensywnych warsztatow.</p>
          <a
            href="#zapisz-sie"
            className="inline-block bg-foreground text-background px-6 py-3 rounded-lg font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            ZAPISZ SIE NA KURS
          </a>
        </div>
      </ScrollFadeIn>
    </div>
  </section>
);
