export const Footer = () => (
  <footer className="py-12 px-4 border-t border-border">
    <div className="max-w-content mx-auto flex flex-col items-center gap-8">

      {/* Contact row */}
      <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
        <a
          href="mailto:szkolenia@energiabiznesu.pl"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          szkolenia@energiabiznesu.pl
        </a>

        <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />

        <a
          href="tel:+48505027741"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +48 505 027 741
        </a>
      </div>

      {/* Social + copyright row */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
        <p className="text-muted-foreground text-xs">© 2026 Energia dla Biznesu</p>

        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/EnergiadlaBizne/"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/energiadlabiznes"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <a
          href="https://energiabiznesu.pl/polityka-prywatnosci/"
          target="_blank"
          rel="noopener"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Polityka prywatności
        </a>
      </div>

    </div>
  </footer>
);
