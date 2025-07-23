"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full border-b px-6 py-4 flex justify-between items-center relative">
            {/* Left Side: Title */}
            <div className="flex items-center gap-2">
                {/* <img src="/Mayuresh Profile.jpeg" alt="" width="40" height="40" className="rounded-md" /> */}
                <span className="font-semibold text-lg">Web Developer</span>
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex gap-8 text-sm font-medium">
                <a href="#about"><li className="hover:text-primary transition-colors">About</li></a>
                <a href="#projects"><li className="hover:text-primary transition-colors">Projects</li></a>
                <a href="#contact"><li className="hover:text-primary transition-colors">Contact</li></a>
            </ul>

            {/* Mode Toggle */}
            <div className="flex items-center gap-4">
                <ModeToggle />
                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-xl"
                    aria-label="Toggle Menu"
                >
                    <FaBars />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-[100%] left-0 w-full bg-background border-t md:hidden z-50">
                    <ul className="flex flex-col items-center py-4 gap-4 text-sm font-medium">
                        <a href="#about" onClick={() => setIsOpen(false)}><li>About</li></a>
                        <a href="#projects" onClick={() => setIsOpen(false)}><li>Projects</li></a>
                        <a href="#contact" onClick={() => setIsOpen(false)}><li>Contact</li></a>
                    </ul>
                </div>
            )}
        </nav>
    );
}
