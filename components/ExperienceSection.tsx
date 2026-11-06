'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const experiences = [
    {
        title: "Software Developer | NeuIQ",
        period: "APR 2026 – PRESENT",
        location: "Mumbai, India",
        responsibilities: [
            "Built AI-powered proposal workflows using OpenAI APIs, RAG retrieval, intent-based tool calling, and database querying for context-aware RFP search and generation.",
            "Designed and implemented document chunking and retrieval pipelines to fetch relevant RFP content from a knowledge base for LLM-assisted workflows.",
            "Integrated an SSE-based streaming API for AI agents to deliver incremental responses and workflow updates to the frontend in real time.",
            "Integrated Okta SSO for secure enterprise authentication and contributed backend APIs and agent workflows for proposal retrieval and generation.",
            "Reorganized backend services for survey lifecycle management, including survey retrieval, creation automation, and reporting workflows for the PureSpectrum platform.",
            "Built materialized views, Redis-based caching, and automated refresh workflows to improve access to frequently queried survey and quota data."
        ]
    },
    {
        title: "Software Developer | StoreApps",
        period: "FEB 2025 – MAR 2026",
        location: "Kandivali, Mumbai",
        responsibilities: [
            "Architected the frontend migration of the Putler SaaS analytics platform to Next.js, ShadCN, Apollo Client, and Socket.io, improving responsiveness and reducing component load times.",
            "Shipped a custom web analytics engine covering session tracking, event pipelines, RocksDB caching, and synchronization between PostgreSQL and ClickHouse.",
            "Built and optimized Node.js backend services for multi-tenant analytics workloads and improved query performance on ClickHouse for large time-series datasets.",
            "Implemented Keycloak-based authentication with NextAuth, built custom auth pages, and developed event-driven synchronization from Keycloak to PostgreSQL.",
            "Optimized frontend bundle size using code splitting and lazy loading, reducing initial page load time by 40% and improving Core Web Vitals."
        ]
    },
    {
        title: "Full-Stack Developer | Alphawarenext Technologies",
        period: "OCT 2023 – JAN 2025",
        location: "Powai, Mumbai",
        responsibilities: [
            "Built end-to-end government and education platforms using React.js, Node.js, Express, Sequelize, and MySQL for high-traffic products with Redis caching and bulk reporting.",
            "Built a data validation and sanitization pipeline processing 10K+ form submissions per hour with multi-layer validation across client, API, and database layers.",
            "Developed modular REST APIs and revamped frontends in Next.js and TypeScript with dynamic filtering, live data, and bulk Excel exports for institutional platforms.",
            "Engineered a role-based access control system for 50K+ students and 500+ faculty members, including automated assignment grading workflows.",
            "Built secure authentication, session handling, normalized schemas, and AWS S3-backed media delivery for the GT20 cricket platform."
        ]
    }
];

export default function ExperienceSection() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex((prev) => (prev === index ? null : index));
    };

    return (
        <motion.div
            className="space-y-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h3 className="text-4xl font-bold text-primary">Experience</h3>

            {experiences.map((exp, index) => (
                <Card key={index}>
                    <CardContent className="p-5 space-y-3">
                        <div>
                            <p className="text-sm text-muted-foreground">{exp.period}</p>
                            <h4 className="text-lg font-semibold">{exp.title}</h4>
                            <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>

                        <AnimatePresence>
                            {expandedIndex === index && (
                                <motion.ul
                                    className="list-disc pl-5 text-sm space-y-1 text-muted-foreground"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {exp.responsibilities.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>

                        <Button
                            variant="ghost"
                            className="p-0 dark:text-white text-sm hover:underline"
                            onClick={() => toggleExpand(index)}
                        >
                            {expandedIndex === index ? 'Show less' : 'Read more'}
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </motion.div>
    );
}
