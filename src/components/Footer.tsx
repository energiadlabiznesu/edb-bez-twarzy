export const Footer = () => (
  <footer className="py-10 px-4 border-t border-border">
    <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-xs">© 2026 Energia dla Biznesu</p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <a href="https://energiabiznesu.pl" target="_blank" rel="noopener" className="hover:text-foreground transition-colors">energiabiznesu.pl</a>
        <a href="mailto:energiabiznesu@gmail.com" className="hover:text-foreground transition-colors">energiabiznesu@gmail.com</a>
        <a href="https://energiabiznesu.pl/polityka-prywatnosci/" target="_blank" rel="noopener" className="hover:text-foreground transition-colors">Polityka prywatności</a>
      </div>
    </div>
  </footer>
);
