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
        <div className="flex w-full h-[80%]">
            <div className="flex flex-col justify-center text-center w-[50%]">
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 2.5 }}
                >
                    Hi, I'm Mayuresh Ovhal
                </motion.h2>
                <span ref={el} className="text-xl sm:text-2xl text-muted-foreground min-h-[2.5rem] inline-block" />
            </div>
            <div className="w-[50%] dark:border-white border-black border-[5px]">
                <div className="p-6">
                    <motion.img
                        // className="text-4xl sm:text-5xl font-bold mb-4"
                        src={"/Mayuresh Profile.jpeg"}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                    </motion.img>
                </div>
            </div>
        </div>
    );
}
