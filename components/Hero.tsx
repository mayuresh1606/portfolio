"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

export default function Hero() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Full Stack Developer", "Open Source Enthusiast", "Tech Explorer"],
            typeSpeed: 60,
            backSpeed: 30,
            loop: true,
            showCursor: false
        });

        return () => typed.destroy();
    }, []);

    return (
        <div className="flex flex-col md:flex-row w-full min-h-[90vh] px-4 md:px-6 gap-8">
            <div className="flex flex-col justify-center text-center w-full md:w-1/2 pt-8 md:pt-0">
                <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 2.5 }}
                >
                    Hi, I'm Mayuresh Ovhal
                </motion.h2>
                <span ref={el} className="text-lg md:text-xl lg:text-2xl text-muted-foreground min-h-[2.5rem] inline-block mt-4" />
            </div>
            <div className="w-full md:w-1/2 dark:border-white border-black border-[5px] max-w-xl mx-auto flex flex-col justify-center">
                <div className="p-4 md:p-6">
                    <motion.img
                        src="/Mayuresh Profile.jpeg"
                        alt="Mayuresh Ovhal"
                        className="w-full h-auto"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    />
                </div>
            </div>
        </div>
    );
}