'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const experiences = [
    {
        title: "Software Developer | StoreApps",
        period: "FEB 2025 – PRESENT",
        location: "Kandivali, Mumbai",
        responsibilities: [
            "Built a robust web analytics tracker with data validation, deduplication using RocksDB, and message queuing for precise event processing.",
            "Handled sequencing of store and track events, requeuing unknown track events to ensure data integrity.",
            "Ported legacy Putler frontend from Angular to modern React for enhanced UX and performance.",
            "Migrated Putler backend from socket-based infrastructure to a PostgreSQL + GraphQL-based scalable system."
        ]
    },
    {
        title: "Full-Stack Developer | Alphawarenext Technologies",
        period: "OCT 2023 – JAN 2025",
        location: "Powai, Mumbai",
        responsibilities: [
            "Built full-stack features using Sequelize, Express, Node.js, and React.js.",
            "Optimized APIs to handle 100K+ daily users, achieving a 35% reduction in latency.",
            "Implemented Redis caching for faster data retrieval and reduced DB load.",
            "Enabled dynamic filtering via complex MySQL queries, enhancing data interactivity.",
            "Utilized AWS SDK for managing S3 buckets for media storage and access.",
            "Managed secure authentication, sessions, and authorization for user access control.",
            "Handled server deployments via SSH using PuTTY and collaborated with frontend teams to improve UX."
        ]
    },
    {
        title: "Web Developer Intern | Getfly Technologies",
        period: "JUNE 2023",
        location: "Sion, Mumbai",
        responsibilities: [
            "Worked on backend APIs using Node.js and MongoDB.",
            "Integrated frontend components and API calls using React.js."
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
