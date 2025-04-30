"use client";
import { motion } from "framer-motion";
import {
    SiNextdotjs,
    SiReact,
    SiNodedotjs,
    SiTailwindcss,
    SiTypescript,
    SiGithub,
} from "react-icons/si";

export default function About() {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto text-center" id="about">
            <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
            >
                About Me
            </motion.h2>
            <motion.p
                className="text-muted-foreground text-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                I'm a passionate Full Stack Developer who loves building fast, accessible,
                and delightful web experiences. I specialize in creating responsive web
                apps with React, Next.js, and Node.js.
            </motion.p>

            <motion.div
                className="flex justify-center gap-6 flex-wrap text-4xl text-muted-foreground"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                <SiNextdotjs />
                <SiReact />
                <SiNodedotjs />
                <SiTailwindcss />
                <SiTypescript />
                <SiGithub />
            </motion.div>
        </section>
    );
}
