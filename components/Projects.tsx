"use client";

import { useState } from "react";
import { ExternalLink, Github, ArrowUpRight, Cpu, Database, Zap, Shield, Layers } from "lucide-react";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/interfaces";

const projects: Project[] = [
  {
    title: "Enterprise RFP AI Agent",
    category: "AGENTIC AI & SSE STREAMING",
    description: "Intent-driven enterprise proposal platform combining document chunking, hybrid RAG, LangGraph orchestration, and real-time SSE streaming.",
    details: "Built an AI-powered proposal platform for enterprise sales and compliance. Features document chunking, intent-driven tool execution against relational databases, vector-based RAG retrieval, and real-time SSE token streaming for sub-50ms TTFT.",
    architectureFlow: "RFP Document (.pdf/.docx) → Hierarchical Chunking → Vector Search (Cosine > 0.91) → LangGraph Intent Routing → Postgres Query Tool → SSE Incremental Stream",
    metrics: "Sub-50ms TTFT • Okta SSO SAML 2.0 • 100% Citation Grounding",
    impact: [
      "Implemented document chunking and hybrid retrieval pipelines to ground responses strictly in verified enterprise knowledge bases.",
      "Engineered SSE-based streaming API for agents delivering incremental status and token streams to frontend clients in real time.",
      "Integrated Okta SSO with SAML 2.0 and RBAC for secure enterprise authorization."
    ],
    tech: ["Python", "FastAPI", "OpenAI API", "LangGraph", "PostgreSQL", "SSE Streaming", "Okta SSO", "Docker"],
    github: "https://github.com/mayuresh1606",
    live: "#"
  },
  {
    title: "Putler SaaS Analytics Platform",
    category: "REAL-TIME TIME-SERIES & CDC",
    description: "Production multi-tenant analytics platform with sub-100ms dashboard queries, RocksDB caching, and real-time synchronization between PostgreSQL and ClickHouse.",
    details: "Architected the frontend migration to Next.js and Apollo Client while building a custom web analytics engine covering session tracking, event ingestion pipelines, RocksDB key-value caching, and continuous CDC synchronization between PostgreSQL and ClickHouse.",
    architectureFlow: "Client Event SDK → Node.js Ingestion Buffer → RocksDB Key-Value Cache → PostgreSQL (Transactions) ⇄ ClickHouse (OLAP Time-Series) → Next.js Real-Time UI",
    metrics: "40% Bundle Size Reduction • Multi-million Row Queries < 100ms • Keycloak SSO",
    impact: [
      "Designed cross-database synchronization pipeline between transactional PostgreSQL and ClickHouse for large-scale time-series workloads.",
      "Optimized frontend bundle size using code splitting and lazy loading, reducing initial page load time by 40% and improving Core Web Vitals.",
      "Implemented Keycloak authentication with NextAuth and event-driven user account synchronization to PostgreSQL."
    ],
    tech: ["Next.js", "ClickHouse", "PostgreSQL", "RocksDB", "GraphQL", "Apollo Client", "Socket.io", "Keycloak"],
    live: "https://demo.putler.com",
    github: "https://github.com/mayuresh1606"
  },
  {
    title: "Sample Management Operations Console",
    category: "LIFECYCLE AUTOMATION & INSIGHTS",
    description: "Operational survey lifecycle management and quota monitoring platform with materialized views, Redis caching, and AI-generated business insights.",
    details: "Reorganized and built backend services for survey lifecycle management, quota monitoring, automated refresh workflows, and AI-generated operational anomaly insights integrated with the PureSpectrum platform.",
    architectureFlow: "PureSpectrum External API → FastAPI Lifecycle Engine → Materialized Views + Redis Cache → Anomaly Detection Agent → Operational Dashboard",
    metrics: "Automated Quota Alerts • Zero-downtime Redis Invalidation • Real-time Sync",
    impact: [
      "Built materialized views, Redis caching, and automated refresh workflows to accelerate query access for high-frequency operational reporting.",
      "Designed automated data ingestion and survey creation flows via PureSpectrum platform APIs.",
      "Integrated automated AI summarization for survey quota anomalies and field reporting."
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "PureSpectrum API", "AI Agents", "Docker"],
    github: "https://github.com/mayuresh1606",
    live: "#"
  },
  {
    title: "Ladki Bahin Public Service Platform",
    category: "HIGH-CONCURRENCY GOVERNMENT PLATFORM",
    description: "State-scale government platform processing 10k+ form submissions per hour with multi-layer sanitization, Redis caching, and bulk exports.",
    details: "Engineered critical public-facing platform components handling immense concurrent citizen traffic with Redis caching, normalized MySQL schemas, and resilient APIs for public disbursements.",
    architectureFlow: "Citizen Traffic (10k+/hr) → Client & API Sanitization Gate → Redis Rate Limiter → Node.js Cluster → Sharded MySQL + Bulk Reporting",
    metrics: "10,000+ Form Submissions/hr • 99.99% Peak Uptime • Sub-second API Latency",
    impact: [
      "Built end-to-end data validation and sanitization pipeline processing 10K+ form submissions per hour across multi-layer validation checks.",
      "Implemented Redis caching layers to mitigate database contention during high-traffic disbursement windows.",
      "Revamped frontend interfaces in Next.js and TypeScript with dynamic filtering and bulk reporting capabilities."
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express", "MySQL", "Redis", "AWS S3"],
    live: "https://ladakibahin.maharashtra.gov.in/",
    github: "https://github.com/mayuresh1606"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-border/40">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-border/80 bg-muted/50 text-muted-foreground">
            <Layers className="w-3.5 h-3.5 text-primary" />
            Engineering Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Featured Systems &amp; Deployments.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Real enterprise and high-concurrency systems engineered for scale, reliability, 
            and low-latency AI orchestration.
          </p>
        </div>

        <a
          href="https://github.com/mayuresh1606"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors shrink-0"
        >
          View all repositories on GitHub
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group rounded-xl border border-border/70 bg-card hover:border-border hover:shadow-xl transition-all p-6 sm:p-7 flex flex-col justify-between space-y-6"
          >
            {/* Top row */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-wider text-primary font-semibold uppercase">
                  {project.category}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/50">
                  {project.metrics.split("•")[0].trim()}
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Data flow strip */}
              <div className="p-3 rounded-lg bg-muted/60 border border-border/60 font-mono text-[11px] space-y-1">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider flex items-center gap-1 font-semibold">
                  <Cpu className="w-3 h-3 text-primary" /> Pipeline Architecture
                </div>
                <div className="text-foreground/90 truncate">
                  {project.architectureFlow}
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="space-y-4 pt-2 border-t border-border/60">
              {/* Stack pills */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 5).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-muted/80 text-muted-foreground border border-border/40"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="px-1.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                    +{project.tech.length - 5}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  Inspect Architecture &amp; SLA
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  {project.live && project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground font-mono"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-muted-foreground/70">
                      Internal Enterprise
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
