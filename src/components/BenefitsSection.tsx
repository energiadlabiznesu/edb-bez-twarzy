import { useState } from "react";
import { ScrollFadeIn } from "./ScrollFadeIn";

const items = [
  { title: "Strony internetowe", desc: "Budujesz profesjonalne strony z AI. Bez programisty, za darmo." },
  { title: "Wideo i montaz", desc: "Tworzysz i montujesz wideo, budujesz awatary AI." },
  { title: "Kampanie reklamowe", desc: "Facebook Ads, Google Ads — od kreacji po uruchomienie." },
  { title: "Grafiki i tresci", desc: "Posty, grafiki, teksty z ChatGPT i Canva. Bez grafika." },
  { title: "Automatyzacja", desc: "Mailingi, CRM, leady — automatyzacje oszczedzajace godziny." },
  { title: "Agenci AI", desc: "Agenci AI odpowiadaja klientom i kwalifikuja leady za Ciebie." },
  { title: "20h warsztatow na zywo", desc: "Intensywny kurs online przez Zoom / Google Meet." },
  { title: "Praktyka, nie teoria", desc: "Pracujesz na swoich przykladach. Firmy, JDG, NGO." },
];

interface Props {
  onOpenRegistration: () => void;
}

export const BenefitsSection = ({ onOpenRegistration }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-content mx-auto">
        <ScrollFadeIn>
          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">Kurs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
            Czego sie nauczysz i jak wyglada kurs
          </h2>
          <p className="text-muted-foreground text-base mb-12 leading-relaxed max-w-2xl">
            20 godzin intensywnych warsztatow na zywo. Po kursie Twoja firma dziala jak zespol z grafikiem, programista i specjalista od reklam — tylko ze to wszystko robi AI.
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((item, i) => (
            <ScrollFadeIn key={i}>
              <div
                className={`border rounded-lg p-5 cursor-pointer transition-all duration-300 ${
                  activeIndex === i
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground/30"
                }`}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                <h3 className="font-bold text-foreground text-sm mb-1 tracking-tight">{item.title}</h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === i ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn className="mt-10">
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">Dofinansowanie do 95%. Pomagamy z dokumentami.</p>
            <button
              onClick={onOpenRegistration}
              className="inline-block bg-foreground text-background px-6 py-3 rounded-lg font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Zapisz sie na kurs
            </button>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};
