export const Footer = () => (
  <footer className="py-10 px-4 border-t border-border">
    <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
      <p className="text-muted-foreground text-xs">© 2026 Energia dla Biznesu</p>

      <div className="flex items-center gap-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/EnergiadlaBizne/"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/energiadlabiznes"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
        <a href="mailto:szkolenia@energiabiznesu.pl" className="hover:text-foreground transition-colors">
          szkolenia@energiabiznesu.pl
        </a>
        <a href="https://energiabiznesu.pl" target="_blank" rel="noopener" className="hover:text-foreground transition-colors">
          energiabiznesu.pl
        </a>
        <a href="https://energiabiznesu.pl/polityka-prywatnosci/" target="_blank" rel="noopener" className="hover:text-foreground transition-colors">
          Polityka prywatności
        </a>
      </div>
    </div>
  </footer>
);
