"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Full-Stack AI Developer",
    company: "NeuIQ",
    period: "APR 2026 – PRESENT",
    location: "Mumbai, India",
    highlight: "Enterprise RAG, LangGraph AI Agents, SSE Streaming",
    achievements: [
      "Architected AI-powered proposal workflows using OpenAI APIs, chunk-based RAG retrieval, intent-driven tool calling, and relational querying for automated RFP evaluation.",
      "Engineered an SSE-based streaming API for AI agents delivering real-time incremental token generation and tool status updates with sub-50ms TTFT.",
      "Integrated Okta SSO with SAML 2.0 and RBAC for secure enterprise authentication across multi-tenant agent endpoints.",
      "Reorganized backend survey lifecycle management and automated data ingestion pipelines for the PureSpectrum platform.",
      "Constructed materialized views and Redis caching layers with automated cache invalidation to accelerate recurring operational queries."
    ],
    tech: ["Python", "FastAPI", "OpenAI API", "LangGraph", "PostgreSQL", "Redis", "SSE", "Okta SSO"]
  },
  {
    role: "Software Developer",
    company: "StoreApps",
    period: "FEB 2025 – MAR 2026",
    location: "Mumbai, India",
    highlight: "Putler Analytics, Dual DB Sync, Next.js Migration",
    achievements: [
      "Led the frontend architecture migration of the Putler SaaS analytics platform to Next.js, ShadCN, Apollo Client, and WebSockets, cutting initial bundle size by 40%.",
      "Engineered a custom web analytics engine covering session tracking, event ingestion buffers, RocksDB caching, and real-time synchronization between PostgreSQL and ClickHouse.",
      "Optimized Node.js backend services and ClickHouse analytical queries to deliver sub-100ms dashboard latency on multi-million record datasets.",
      "Implemented Keycloak authentication with NextAuth and developed event-driven account synchronization into PostgreSQL."
    ],
    tech: ["Next.js", "ClickHouse", "PostgreSQL", "RocksDB", "GraphQL", "Apollo Client", "Socket.io", "Keycloak"]
  },
  {
    role: "Full-Stack Developer",
    company: "Alphawarenext Technologies",
    period: "OCT 2023 – JAN 2025",
    location: "Mumbai, India",
    highlight: "High-Concurrency Public Platforms, Redis Caching",
    achievements: [
      "Built resilient government and educational platforms using React.js, Node.js, Express, Sequelize, and MySQL handling 10k+ form submissions per hour.",
      "Engineered a multi-tier data validation and sanitization pipeline processing high-frequency submissions with defense-in-depth across client, API, and database layers.",
      "Developed modular REST APIs and Next.js / TypeScript frontends with dynamic filtering, live reporting, and bulk streaming exports.",
      "Designed role-based access control (RBAC) supporting 50K+ student profiles and 500+ faculty members with automated evaluation pipelines."
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express", "MySQL", "Redis", "Sequelize", "AWS S3"]
  }
];

export default function ExperienceSection() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="p-6 sm:p-7 rounded-xl border border-border/70 bg-card hover:border-border hover:shadow-lg transition-all space-y-4"
        >
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-foreground">
                  {exp.role}
                </h3>
                <span className="text-muted-foreground font-mono">@</span>
                <span className="text-xl font-bold text-primary">
                  {exp.company}
                </span>
              </div>
              <div className="text-xs font-mono text-muted-foreground mt-1">
                {exp.highlight}
              </div>
            </div>

            <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {exp.location}
              </span>
            </div>
          </div>

          {/* Bullet achievements */}
          <ul className="space-y-2.5 pt-1 text-sm text-muted-foreground">
            {exp.achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Technologies row */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
            {exp.tech.map((t, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-muted text-muted-foreground border border-border/40"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
