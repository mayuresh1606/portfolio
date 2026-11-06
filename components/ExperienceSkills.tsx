"use client";

import ExperienceSection from "./ExperienceSection";
import { ShieldCheck, GraduationCap, Cpu, Database, Layout, Shield, Server, Terminal, CheckCircle2 } from "lucide-react";

export default function ExperienceSkills() {
  const stackCategories = [
    {
      title: "AI & Agent Orchestration",
      icon: Cpu,
      skills: [
        "OpenAI API",
        "LangGraph StateGraph",
        "RAG Retrieval Pipelines",
        "Intent-Driven Tool Calling",
        "SSE Token Streaming",
        "Hierarchical Chunking",
        "Vector Embeddings",
        "Grounding & Citation Verification"
      ]
    },
    {
      title: "Backend & Data Infrastructure",
      icon: Database,
      skills: [
        "FastAPI",
        "Python",
        "Node.js & Express",
        "ClickHouse Time-Series",
        "PostgreSQL (OLTP)",
        "RocksDB Caching",
        "Redis & Materialized Views",
        "GraphQL & Apollo",
        "RabbitMQ"
      ]
    },
    {
      title: "Frontend Engineering",
      icon: Layout,
      skills: [
        "Next.js 15 (App Router)",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "ShadCN UI",
        "WebSockets / SSE Clients",
        "Core Web Vitals Optimization",
        "Component Architecture"
      ]
    },
    {
      title: "Enterprise Auth & Cloud",
      icon: Shield,
      skills: [
        "Okta SSO (SAML 2.0)",
        "Keycloak Auth",
        "NextAuth",
        "Role-Based Access Control (RBAC)",
        "AWS S3 & Cloud Storage",
        "Docker & Containerization",
        "CI/CD GitHub Actions",
        "Databricks"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 border-b border-border/40">
      {/* 1. Experience Timeline */}
      <div id="experience" className="space-y-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-border/80 bg-muted/50 text-muted-foreground">
            <Server className="w-3.5 h-3.5 text-primary" />
            Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Production Engineering Experience.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            3+ years designing, building, and deploying real-world software, AI workflows, and high-concurrency platforms.
          </p>
        </div>

        <ExperienceSection />
      </div>

      {/* 2. Technical Stack & Credentials */}
      <div id="stack" className="space-y-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-border/80 bg-muted/50 text-muted-foreground">
            <Terminal className="w-3.5 h-3.5 text-primary" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Technical Stack &amp; Verified Credentials.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Technologies, frameworks, and architecture tools utilized in production environments.
          </p>
        </div>

        {/* Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stackCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border/70 bg-card hover:border-border transition-all space-y-4"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-muted text-foreground border border-border/60 hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Credentials and Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Anthropic Certification */}
          <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/5 dark:bg-blue-950/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Industry Certification
              </span>
              <span className="text-xs font-mono text-muted-foreground">Anthropic</span>
            </div>
            <h4 className="text-xl font-bold text-foreground">
              Claude Certified Architect – Professional
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Certified validation in prompt architecture, agentic orchestration, tool-calling systems, 
              and enterprise LLM solution design.
            </p>
          </div>

          {/* Academic Background */}
          <div className="p-6 rounded-xl border border-border/70 bg-card space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                Academic Background
              </span>
              <span className="text-xs font-mono text-muted-foreground">June 2024</span>
            </div>
            <h4 className="text-xl font-bold text-foreground">
              B.E. in Computer Science &amp; Engineering
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              University of Mumbai (Vasantdada Patil Pratishthan’s COE) • <span className="font-semibold text-foreground">CGPA: 8.05</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
