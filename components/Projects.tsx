"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ProjectModal from "@/components/ProjectModal";

const projects = [
    {
        title: "Portfolio Website",
        description: "My personal website built using Next.js and Tailwind CSS.",
        details:
            "This project was designed to showcase my web development skills. It features dynamic sections, dark mode toggle, and is fully responsive. I used Next.js for server-side rendering and SEO optimization.",
        tech: ["Next.js", "Tailwind", "TypeScript"],
        github: "https://github.com/yourusername/portfolio",
        live: "https://yourdomain.com",
    },
    {
        title: "Crowdfunding Dapp",
        description: "A decentralized app for funding projects via blockchain.",
        details:
            "Built with Solidity smart contracts and React frontend. This DApp allows users to create and fund campaigns securely on Ethereum using MetaMask integration.",
        tech: ["Solidity", "React", "Web3.js"],
        github: "https://github.com/yourusername/crowdfunding-dapp",
        live: "#",
    },
];

export default function Projects() {
    const [expanded, setExpanded] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpen = (project) => setSelectedProject(project);
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
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={handleClose}
            />
        </section>
    );
}
