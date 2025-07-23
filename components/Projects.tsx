"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/interfaces";

const projects = [
    {
        title: "Web Analytics Tracker",
        description: "A high-performance tracking system for real-time analytics.",
        details:
            "Engineered a scalable web analytics system that validates and deduplicates incoming events, stores unique entries in RocksDB, and processes them using RabbitMQ. Designed logic to prioritize 'store' events before 'track' events, and implemented a requeue mechanism for unknown events to maintain data consistency.",
        tech: ["Node.js", "RocksDB", "RabbitMQ", "Express", "Redis"],
        github: "#", // Private or internal, leave as #
        live: "#",
    },
    {
        title: "Putler",
        description: "Re-engineering the core architecture of a business analytics product.",
        details:
            "Ported the existing Angular-based frontend to a modern React + Next.js stack, enhancing performance and UX. Migrated the backend from a socket-based system to a GraphQL + PostgreSQL-based architecture for better scalability, maintainability, and developer experience. Focused on modularizing the codebase for easier deployments and version control.",
        tech: ["React", "Next.js", "GraphQL", "PostgreSQL"],
        github: "#",
        live: "https://demo.putler.com",
    },
    {
        title: "Ladki Bahin",
        description: "Government-backed women's safety application for Maharashtra state.",
        details:
            "Led development of the admin panel using Sequelize, Express, and Node.js, handling dynamic filtering, analytics, and user management. Optimized API performance with Redis caching to support over 100K daily users. Extracted large datasets for reporting and data analysis. Deployed and maintained infrastructure through secure server operations using PuTTY.",
        tech: ["React.js", "Node.js", "Sequelize", "Redis", "MySQL"],
        github: "#",
        live: "https://ladakibahin.maharashtra.gov.in/",
    },
    {
        title: "Learning Management System (LMS)",
        description: "Custom LMS platforms tailored for educational clients.",
        details:
            "Built and integrated scalable back-end APIs using Sequelize.js and MySQL, enhancing performance through optimized queries and dynamic filtering. Developed responsive front-ends in React.js and Next.js with TypeScript, supporting features such as Excel export and personalized dashboards. Delivered customized functionality for various institutions across multiple live LMS deployments.",
        tech: ["Next.js", "React.js", "TypeScript", "MySQL", "Sequelize"],
        github: "#",
        live: "https://examination.myglaonline.com/",
    },
    {
        title: "GT20",
        description: "Official web platform for the Global T20 Canada Cricket League.",
        details:
            "Designed and maintained back-end services using Node.js and Express. Implemented secure user authentication, authorization, and session management. Used AWS SDK for media storage on S3. Supported both client-facing and internal admin panels, collaborating with the front-end team for seamless integration and robust UX.",
        tech: ["Node.js", "Express", "MySQL", "AWS S3"],
        github: "#",
        live: "https://gt20.ca/",
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
