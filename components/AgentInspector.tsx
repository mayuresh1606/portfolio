"use client";

import { useState, useEffect } from "react";
import { Terminal, Cpu, Database, Play, CheckCircle2, RefreshCw, Zap, Layers } from "lucide-react";

export default function AgentInspector() {
  const [activeTab, setActiveTab] = useState<"stream" | "architecture" | "profile">("profile");
  const [streamProgress, setStreamProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Simulated SSE token stream
  const tokenStream = [
    { type: "intent", text: "Target intent identified: Generate compliance section for ISO/IEC 27001 RFP clause." },
    { type: "tool", text: "Tool invoked: vector_retrieval(query='ISO 27001 data encryption at rest', top_k=4)" },
    { type: "trace", text: "Vector search completed: 4 chunks retrieved with cosine score > 0.91 (latency: 34ms)" },
    { type: "tool", text: "Tool invoked: execute_sql_query('SELECT auth_method, audit_retention FROM enterprise_config')" },
    { type: "sse", text: "SSE Stream Connected: sub-50ms TTFT established. Generating verified proposal payload..." },
    { type: "output", text: "Response payload: All customer data is AES-256 encrypted at rest and in transit via TLS 1.3 with Okta SSO SAML 2.0 enforcement." }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setStreamProgress((prev) => {
          if (prev >= tokenStream.length) {
            setIsRunning(false);
            return prev;
          }
          return prev + 1;
        });
      }, 900);
    }
    return () => clearInterval(interval);
  }, [isRunning, tokenStream.length]);

  const restartTrace = () => {
    setStreamProgress(1);
    setIsRunning(true);
  };

  return (
    <div className="w-full rounded-xl border border-border/80 bg-card/90 shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/70 bg-muted/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono text-muted-foreground ml-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-blue-500" />
            agent-runtime://rfp-orchestrator
          </span>
        </div>

        <div className="flex items-center gap-1 bg-background/80 p-0.5 rounded-lg border border-border/60 text-xs font-medium">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === "profile"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Architect Spec
          </button>
          <button
            onClick={() => setActiveTab("stream")}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === "stream"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Agent Stream
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === "architecture"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            System Graph
          </button>
        </div>
      </div>

      {/* Window Body */}
      <div className="p-4 sm:p-5 min-h-[320px] flex flex-col justify-between">
        {activeTab === "stream" && (
          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-border/40 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isRunning ? "bg-emerald-500 animate-ping" : "bg-emerald-500"}`} />
                Status: {isRunning ? "Streaming SSE Payload..." : "Completed (6/6 steps)"}
              </span>
              <span className="text-muted-foreground/80">LangGraph • Sub-50ms TTFT • PostgreSQL</span>
            </div>

            <div className="space-y-2 pt-1">
              {tokenStream.slice(0, streamProgress).map((item, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-lg border transition-all text-left ${
                    item.type === "intent"
                      ? "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-300"
                      : item.type === "tool"
                      ? "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-300"
                      : item.type === "trace"
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-300"
                      : item.type === "sse"
                      ? "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-300"
                      : "bg-muted/70 border-border/70 text-foreground font-sans text-xs leading-relaxed"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-background/80 border border-border/50 shrink-0 font-mono">
                      {item.type}
                    </span>
                    <span className="break-words">{item.text}</span>
                  </div>
                </div>
              ))}

              {isRunning && (
                <div className="flex items-center gap-2 text-muted-foreground text-xs pl-2 pt-1 animate-pulse">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Processing token buffer...</span>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "architecture" && (
          <div className="space-y-4 text-xs font-mono">
            <div className="text-[11px] text-muted-foreground uppercase tracking-wider pb-1 border-b border-border/40">
              End-to-End Enterprise AI Pipeline Topology
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-center">
              <div className="p-3 rounded-lg border border-border/70 bg-muted/40 space-y-1.5">
                <Database className="w-4 h-4 mx-auto text-blue-500" />
                <div className="font-semibold text-foreground">1. Knowledge Layer</div>
                <div className="text-[11px] text-muted-foreground">Document Chunking • Vector RAG • Hybrid BM25</div>
              </div>

              <div className="p-3 rounded-lg border border-border/70 bg-muted/40 space-y-1.5">
                <Cpu className="w-4 h-4 mx-auto text-amber-500" />
                <div className="font-semibold text-foreground">2. Orchestration</div>
                <div className="text-[11px] text-muted-foreground">LangGraph State • Intent Routing • Tool Calling</div>
              </div>

              <div className="p-3 rounded-lg border border-border/70 bg-muted/40 space-y-1.5">
                <Zap className="w-4 h-4 mx-auto text-emerald-500" />
                <div className="font-semibold text-foreground">3. Real-Time Delivery</div>
                <div className="text-[11px] text-muted-foreground">SSE Incremental Stream • Next.js UI • Okta SSO</div>
              </div>
            </div>

            <div className="p-3 rounded-lg border border-border/50 bg-background/50 text-[11px] text-muted-foreground space-y-1">
              <div className="font-semibold text-foreground flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-primary" />
                Production Metrics & SLA:
              </div>
              <p>• P99 Retrieval Latency: &lt; 90ms | Token Time-to-First: &lt; 50ms</p>
              <p>• Data Stores: PostgreSQL (Relational/State) • ClickHouse (Analytics) • Redis (Cache)</p>
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src="/Mayuresh Profile.jpeg"
                alt="Mayuresh Ovhal"
                className="w-16 h-16 rounded-xl object-cover border border-border/80 shadow-md shrink-0"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm text-foreground">Mayuresh Ovhal</h4>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Active
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">Full-Stack AI Engineer & System Architect</p>
                <p className="text-[11px] font-mono text-muted-foreground">Mumbai, India • Available for Senior Roles</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
              <div className="p-2.5 rounded-lg border border-border/70 bg-muted/40">
                <span className="text-[10px] text-muted-foreground block uppercase">Certification</span>
                <span className="font-semibold text-foreground">Claude Certified Architect</span>
              </div>
              <div className="p-2.5 rounded-lg border border-border/70 bg-muted/40">
                <span className="text-[10px] text-muted-foreground block uppercase">Education</span>
                <span className="font-semibold text-foreground">B.E. Computer Science (8.05)</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer controls */}
        <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
          <span className="font-mono flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            Verified Production Artifact
          </span>
          {activeTab === "stream" && (
            <button
              onClick={restartTrace}
              className="inline-flex items-center gap-1 font-mono text-xs text-primary hover:underline hover:opacity-80 transition-opacity"
            >
              <RefreshCw className="w-3 h-3" />
              Replay Stream
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
