export default function Footer() {
  return (
    <footer className="w-full border-t border-border/60 bg-muted/20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Systems Operational</span>
          <span className="text-border">•</span>
          <span>© {new Date().getFullYear()} Mayuresh Ovhal</span>
        </div>

        <div className="flex items-center gap-5">
          <a href="#top" className="hover:text-foreground transition-colors">
            Back to Top
          </a>
          <a
            href="https://github.com/mayuresh1606"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mayuresh-ovhal-52479b1b3/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/Mayuresh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Resume (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
}
