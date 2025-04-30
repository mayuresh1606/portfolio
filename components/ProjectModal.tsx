// components/ProjectModal.tsx
"use client";
import { ProjectModalProps } from "@/interfaces";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-background text-foreground rounded-xl max-w-xl w-full p-6 relative shadow-xl"
                    initial={{ scale: 0.9, y: 30 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 30 }}
                    transition={{ duration: 0.3 }}
                >
                    <button onClick={onClose} className="absolute top-4 right-4">
                        <FaTimes className="w-5 h-5 text-muted-foreground" />
                    </button>

                    <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                    <p className="text-muted-foreground mb-4">{project.details}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech: string, i: number) => (
                            <span key={i} className="text-sm border px-2 py-1 rounded-md">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 text-sm font-medium">
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
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
