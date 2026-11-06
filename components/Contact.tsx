"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, Send, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "mayureshovhal16@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-2xl border border-border/80 bg-card p-8 sm:p-12 shadow-xl relative overflow-hidden">
        {/* Subtle accent glow */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-border/80 bg-muted/60 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for Senior Engineering Roles
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Let's Build Production AI Systems.
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              Whether you are architecting agentic RAG workflows, building low-latency data pipelines, 
              or scaling real-time web applications, I am open to technical leadership and engineering discussions.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Mumbai, India (Open to Remote)
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary" />
                UTC+05:30 (IST)
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-5 rounded-xl border border-border/70 bg-muted/40 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Direct Communication Channel
              </div>

              <div className="flex items-center justify-between gap-2 p-3 rounded-lg bg-background border border-border/70">
                <span className="font-mono text-xs sm:text-sm text-foreground truncate select-all">
                  {emailAddress}
                </span>

                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center justify-center gap-2 flex-1 py-2 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Email Directly
                </a>
              </div>
            </div>

            {/* Social channels */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/mayuresh1606"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-border/70 bg-card hover:bg-muted/50 hover:border-border transition-all text-xs font-medium text-foreground"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-muted-foreground" />
                  GitHub
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
              </a>

              <a
                href="https://linkedin.com/in/mayuresh-ovhal-52479b1b3/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-border/70 bg-card hover:bg-muted/50 hover:border-border transition-all text-xs font-medium text-foreground"
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-muted-foreground" />
                  LinkedIn
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
