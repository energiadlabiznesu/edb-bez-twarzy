import { ScrollFadeIn } from "./ScrollFadeIn";

const photos = [
  {
    src: "/images/zajecia-1.jpg",
    alt: "Szkolenie online – praca z uczestnikami",
    caption: "Sesja na żywo – omawiamy kampanie Meta Ads",
  },
  {
    src: "/images/zajecia-2.jpg",
    alt: "Warsztaty z Canva i AI podczas szkolenia",
    caption: "Uczestnicy tworzą content z AI w czasie rzeczywistym",
  },
  {
    src: "/images/zajecia-3.jpg",
    alt: "Mat prowadzi szkolenie stacjonarne",
    caption: "Warsztaty stacjonarne – praca na realnych przykładach",
  },
];

export const GallerySection = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="max-w-content mx-auto">
      <ScrollFadeIn>
        <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">Zajęcia</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
          Jak wyglądają <span className="text-primary">zajęcia?</span>
        </h2>
        <p className="text-muted-foreground text-base mb-12 leading-relaxed">
          Live online – pracujemy razem na realnych przykładach Twojego biznesu.
        </p>
      </ScrollFadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {photos.map((p, i) => (
          <ScrollFadeIn key={i}>
            <div className="rounded-lg overflow-hidden aspect-[3/4] relative group border border-border">
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-0 left-0 right-0 text-white text-xs font-medium px-4 py-3">
                {p.caption}
              </p>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  </section>
);
