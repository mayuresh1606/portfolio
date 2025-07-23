// ExperienceSkills.tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import ExperienceSection from './ExperienceSection';

export default function ExperienceSkills() {
    return (
        <div className="w-full px-6 py-12 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Experience Section */}
                <ExperienceSection />
                <motion.div
                    className="space-y-6"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-4xl font-bold text-primary">Skills</h3>
                    <Card>
                        <CardContent className="p-5 space-y-3 text-sm">
                            <p><span className="font-semibold">Frontend:</span> React.js, Next.js, TypeScript</p>
                            <p><span className="font-semibold">Backend:</span> Node.js, Express, GraphQL</p>
                            <p><span className="font-semibold">Databases:</span> MySQL, PostgreSQL, MongoDB, ClickHouse</p>
                            <p><span className="font-semibold">DevOps:</span> AWS S3, Redis, RabbitMQ</p>
                        </CardContent>
                    </Card>

                    <h3 className="text-3xl font-semibold text-primary">Education</h3>
                    <Card>
                        <CardContent className="p-5 space-y-2 text-sm">
                            <p className="text-muted-foreground">JUNE 2024</p>
                            <p className="font-semibold">B.E. in Computer Science</p>
                            <p>University of Mumbai | Vasantdada Patil Pratishthan’s COE</p>
                            <p className="text-muted-foreground">8.45 CGPA</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-5 space-y-2 text-sm">
                            <p className="text-muted-foreground">JUNE 2020</p>
                            <p className="font-semibold">Diploma in Computer Science</p>
                            <p>MSBTE | Vidyalankar Polytechnic</p>
                            <p className="text-muted-foreground">74.97%</p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
