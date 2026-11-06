"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/interfaces";

const projects = [
    {
        title: "RFP Agent",
        description: "AI-powered proposal platform for document retrieval and workflow generation.",
        details:
            "Built an AI-powered proposal platform combining document retrieval, chunk-based RAG, intent-driven tool execution, database queries, LLM-assisted proposal building, and SSE-based real-time agent streaming.",
        tech: ["Python", "FastAPI", "OpenAI API", "RAG", "SSE", "PostgreSQL", "LangGraph", "Okta"],
        github: "#",
        live: "#",
    },
    {
        title: "Sample Management Console",
        description: "Operational survey and quota management system with AI-assisted insights.",
        details:
            "Built a survey operations platform for retrieval and creation, quota monitoring, materialized-view reporting, Redis caching, automated data refreshes, and AI-generated operational insights for business teams.",
        tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "AI Agents", "PureSpectrum"],
        github: "#",
        live: "#",
    },
    {
        title: "Putler Analytics",
        description: "Production SaaS analytics platform with real-time dashboards and custom tracking.",
        details:
            "Developed a production analytics platform with real-time dashboards, a custom analytics engine, and cross-database synchronization between PostgreSQL and ClickHouse for large-scale time-series workloads.",
        tech: ["Next.js", "GraphQL", "ClickHouse", "PostgreSQL", "RocksDB"],
        github: "#",
        live: "https://demo.putler.com",
    },
    {
        title: "Ladki Bahin Yojna Portal",
        description: "Government-scale platform handling high-traffic public services.",
        details:
            "Built a Maharashtra state government platform handling high concurrent traffic with Redis caching, MySQL reporting, and resilient APIs for public-facing operations.",
        tech: ["React.js", "Node.js", "MySQL", "Redis"],
        github: "#",
        live: "https://ladakibahin.maharashtra.gov.in/",
    }
];


export default function Projects() {
    const [expanded, setExpanded] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleOpen = (project: Project) => setSelectedProject(project);
    const handleClose = () => setSelectedProject(null);


    const toggleExpand = (idx: number) => {
        setExpanded(expanded === idx ? null : idx);
    };

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto" id="projects">
            <motion.h2
                className="text-3xl sm:text-4xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => {
                    const isOpen = expanded === idx;

                    return (
                        <motion.div
                            key={idx}
                            className={`border rounded-2xl p-6 shadow-sm transition-all bg-card text-card-foreground hover:shadow-xl ${isOpen ? "bg-muted" : ""
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <button
                                    onClick={() => toggleExpand(idx)}
                                    className="text-muted-foreground"
                                >
                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                            </div>
                            <p className="text-muted-foreground mt-2">{project.description}</p>

                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4"
                                >
                                    <p className="text-sm text-muted-foreground">{project.details}</p>
                                </motion.div>
                            )}

                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-background text-xs px-2 py-1 rounded-md border"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-4 text-sm font-medium">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:underline"
                                >
                                    <FaGithub /> GitHub
                                </a>
                                {project.live !== "#" && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 hover:underline"
                                    >
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                )}
                            </div>
                            <button
                                onClick={() => handleOpen(project)}
                                className="mt-4 underline text-sm text-primary hover:text-primary/80"
                            >
                                View Details
                            </button>
                        </motion.div>
                    );
                })}
            </div>
            {
                selectedProject && <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={handleClose}
                />
            }
        </section>
    );
}
