// components/Contact.tsx
"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <motion.section
            id="contact"
            className="py-20 px-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
                Feel free to reach out via email or through any of my socials.
            </p>
            <div className="flex justify-center gap-6 text-muted-foreground">
                <a href="mailto:mayureshovhal16@gmail.com" className="hover:text-primary" aria-label="Email">
                    <Mail size={28} />
                </a>
                <a href="https://github.com/mayuresh1606" target="_blank" className="hover:text-primary" aria-label="GitHub">
                    <Github size={28} />
                </a>
                <a href="https://linkedin.com/in/mayuresh-ovhal-52479b1b3/" target="_blank" className="hover:text-primary" aria-label="LinkedIn">
                    <Linkedin size={28} />
                </a>
            </div>
        </motion.section>
    );
}
