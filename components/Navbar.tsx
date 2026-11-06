"use client";

import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Name */}
        <div className="flex items-center gap-3">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="font-semibold text-base tracking-tight text-foreground group-hover:text-primary transition-colors">
              Mayuresh Ovhal
            </span>
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            AI Engineer
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <a href="#systems" className="hover:text-foreground transition-colors">
            Core Architecture
          </a>
          <a href="#projects" className="hover:text-foreground transition-colors">
            Featured Projects
          </a>
          <a href="#experience" className="hover:text-foreground transition-colors">
            Experience
          </a>
          <a href="#stack" className="hover:text-foreground transition-colors">
            Technical Stack
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <a
            href="/Mayuresh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border/80 bg-muted/40 hover:bg-muted text-foreground transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-muted-foreground" />
            Resume
            <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
          </a>

          <ModeToggle />

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg border border-border/70 text-muted-foreground hover:text-foreground"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-border/60 bg-background/95 backdrop-blur-xl px-4 py-5 space-y-3">
          <div className="flex flex-col space-y-3 text-sm font-medium">
            <a
              href="#systems"
              onClick={() => setIsOpen(false)}
              className="py-1.5 text-muted-foreground hover:text-foreground"
            >
              Core Architecture
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="py-1.5 text-muted-foreground hover:text-foreground"
            >
              Featured Projects
            </a>
            <a
              href="#experience"
              onClick={() => setIsOpen(false)}
              className="py-1.5 text-muted-foreground hover:text-foreground"
            >
              Experience
            </a>
            <a
              href="#stack"
              onClick={() => setIsOpen(false)}
              className="py-1.5 text-muted-foreground hover:text-foreground"
            >
              Technical Stack
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="py-1.5 text-muted-foreground hover:text-foreground"
            >
              Contact
            </a>
          </div>

          <div className="pt-3 border-t border-border/60">
            <a
              href="/Mayuresh_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2 text-xs font-medium rounded-lg border border-border/80 bg-muted/60 text-foreground"
            >
              <FileText className="w-4 h-4 text-muted-foreground" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
