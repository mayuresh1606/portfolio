"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, CheckCircle2, ShieldCheck, Terminal, Sparkles } from "lucide-react";
import AgentInspector from "@/components/AgentInspector";

export default function Hero() {
  return (
    <section className="relative w-full pt-12 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-border/40">
      {/* Background ambient accents for tech site */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl opacity-20 dark:opacity-30"
      >
        <div 
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Technical Overview & Lead */}
        <div className="lg:span-6 lg:col-span-6 space-y-6 text-left">
          {/* Status and Certification Badge */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-300">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              Claude Certified Architect – Professional
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-border/80 bg-muted/60 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for Full-Stack AI Roles
            </span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
            Full-Stack AI Engineer &amp; Systems Architect.
          </h1>

          {/* Subline: Plain facts, zero buzzword fluff */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Designing and shipping production RAG retrieval pipelines, intent-driven agentic tool calling, 
            and high-throughput data platforms with real-time SSE streaming. Built on React, Next.js, FastAPI, 
            Python, ClickHouse, and PostgreSQL.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xs active:scale-[0.98]"
            >
              Inspect Systems &amp; Projects
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/Mayuresh_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border/80 bg-background hover:bg-muted/60 text-foreground transition-all shadow-xs active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-muted-foreground" />
              Read Resume (PDF)
            </a>
          </div>

          {/* Production Telemetry Bar: Hard figures on first screen */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/60">
            <div>
              <div className="text-2xl font-bold font-mono text-foreground">3+ Yrs</div>
              <div className="text-xs text-muted-foreground">Production Engineering</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-foreground">10k+ /hr</div>
              <div className="text-xs text-muted-foreground">Form Throughput</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-foreground">&lt; 50ms</div>
              <div className="text-xs text-muted-foreground">Agent Streaming TTFT</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-foreground">40%</div>
              <div className="text-xs text-muted-foreground">Bundle Size Reduction</div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Agent Inspector */}
        <div className="lg:span-6 lg:col-span-6 w-full">
          <AgentInspector />
        </div>
      </div>
    </section>
  );
}
