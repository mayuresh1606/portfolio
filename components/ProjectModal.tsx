"use client";

import { ProjectModalProps } from "@/interfaces";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle, Cpu, Layers } from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          className="bg-card text-card-foreground rounded-2xl border border-border/80 max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-border/60">
            <div>
              <span className="text-[11px] font-mono tracking-wider text-primary uppercase font-medium">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-foreground mt-1">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Architecture Flow */}
          <div className="my-5 p-3.5 rounded-xl bg-muted/60 border border-border/70 space-y-1.5 font-mono text-xs">
            <div className="text-[11px] text-muted-foreground flex items-center gap-1.5 uppercase tracking-wider font-semibold">
              <Layers className="w-3.5 h-3.5 text-primary" />
              Architecture Data Flow
            </div>
            <p className="text-foreground leading-relaxed">
              {project.architectureFlow}
            </p>
            <div className="text-[11px] text-primary pt-1">
              Key SLA / Metric: {project.metrics}
            </div>
          </div>

          {/* Core details */}
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>{project.details}</p>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
                Key Engineering Highlights
              </h4>
              <ul className="space-y-2">
                {project.impact.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stack tags */}
          <div className="my-5 pt-4 border-t border-border/60">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              Technologies &amp; Protocols
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-muted text-foreground border border-border/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xs"
                >
                  Visit Live Production Platform
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg border border-border/80 hover:bg-muted text-foreground transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  Repository
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-muted-foreground hover:text-foreground font-mono"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
