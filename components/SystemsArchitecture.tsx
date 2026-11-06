"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Zap, ShieldCheck, GitMerge, Layers, Activity } from "lucide-react";

export default function SystemsArchitecture() {
  const architecturalPillars = [
    {
      title: "Agentic RAG & Intent Routing",
      tag: "ORCHESTRATION",
      description:
        "Multi-step document retrieval using hierarchical chunking, hybrid dense/sparse vector search, intent classification, and LangGraph state machines for enterprise RFP proposals.",
      icon: Cpu,
      specs: ["Cosine Similarity Re-ranking", "LangGraph StateGraph", "Hybrid Dense/BM25"],
      visual: (
        <div className="p-3 bg-muted/60 rounded-lg border border-border/70 font-mono text-[11px] space-y-1.5 text-muted-foreground">
          <div className="flex items-center justify-between text-foreground font-semibold">
            <span>Query Pipeline</span>
            <span className="text-emerald-500 font-mono text-[10px]">● Active</span>
          </div>
          <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
            <span>RFP Document</span>
            <span>→</span>
            <span>Chunking</span>
            <span>→</span>
            <span>Vector Search</span>
          </div>
          <div className="text-[10px] text-muted-foreground">Score &gt; 0.91 • Top-4 Chunks Grounded</div>
        </div>
      ),
    },
    {
      title: "Real-Time SSE Streaming",
      tag: "LOW LATENCY",
      description:
        "Server-Sent Events streaming delivering incremental LLM token generation, agent status notifications, and live tool execution updates directly to Next.js frontends with minimal latency.",
      icon: Zap,
      specs: ["Sub-50ms TTFT", "FastAPI StreamingResponse", "Connection Heartbeat"],
      visual: (
        <div className="p-3 bg-muted/60 rounded-lg border border-border/70 font-mono text-[11px] space-y-1.5 text-muted-foreground">
          <div className="flex items-center justify-between text-foreground font-semibold">
            <span>Streaming Metrics</span>
            <span className="text-amber-500 font-mono text-[10px]">P99: 42ms</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <span>FastAPI SSE</span>
            <span>→</span>
            <span>EventSource</span>
            <span>→</span>
            <span>React Stream</span>
          </div>
          <div className="text-[10px] text-muted-foreground">Zero-buffer incremental token dispatch</div>
        </div>
      ),
    },
    {
      title: "Dual-Engine Analytics Engine",
      tag: "DATA INFRA",
      description:
        "High-performance time-series analytics using ClickHouse for multi-million row aggregations synchronized with transactional PostgreSQL schemas and RocksDB low-latency key-value caching.",
      icon: Database,
      specs: ["ClickHouse Time-Series", "PostgreSQL CDC Sync", "RocksDB Caching"],
      visual: (
        <div className="p-3 bg-muted/60 rounded-lg border border-border/70 font-mono text-[11px] space-y-1.5 text-muted-foreground">
          <div className="flex items-center justify-between text-foreground font-semibold">
            <span>Data Sync Mesh</span>
            <span className="text-purple-500 font-mono text-[10px]">CDC Real-Time</span>
          </div>
          <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400">
            <span>Postgres (OLTP)</span>
            <span>⇄</span>
            <span>Sync Pipe</span>
            <span>⇄</span>
            <span>ClickHouse (OLAP)</span>
          </div>
          <div className="text-[10px] text-muted-foreground">Sub-100ms analytics dashboard queries</div>
        </div>
      ),
    },
    {
      title: "Enterprise Auth & High-Concurrency",
      tag: "RELIABILITY",
      description:
        "Resilient platforms handling 10k+ form submissions/hour with Redis rate-limiting, Okta SAML 2.0 / Keycloak SSO, and multi-tier data sanitization pipelines across distributed microservices.",
      icon: ShieldCheck,
      specs: ["10k+ Submissions/hr", "Okta & Keycloak SSO", "Redis Rate Limiting"],
      visual: (
        <div className="p-3 bg-muted/60 rounded-lg border border-border/70 font-mono text-[11px] space-y-1.5 text-muted-foreground">
          <div className="flex items-center justify-between text-foreground font-semibold">
            <span>Security Layer</span>
            <span className="text-emerald-500 font-mono text-[10px]">Zero Trust</span>
          </div>
          <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
            <span>Okta SSO</span>
            <span>→</span>
            <span>JWT Guard</span>
            <span>→</span>
            <span>Redis Throttle</span>
          </div>
          <div className="text-[10px] text-muted-foreground">99.99% availability during peak traffic</div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-border/40">
      <div id="systems" className="scroll-mt-20 space-y-4 max-w-2xl mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-border/80 bg-muted/50 text-muted-foreground">
          <Layers className="w-3.5 h-3.5 text-primary" />
          Engineering Competencies
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Production Systems Architecture.
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Architectural patterns designed and deployed across production enterprise environments, 
          prioritizing sub-second latency, deterministic agent reliability, and resilient distributed state.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {architecturalPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-xl border border-border/70 bg-card hover:border-border hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase">
                      {pillar.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {pillar.visual}

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {pillar.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-muted text-muted-foreground border border-border/50"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
