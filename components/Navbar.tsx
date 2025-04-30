"use client";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
    return (
        <nav className="flex items-center px-6 py-4 border-b w-full">
            <div className="flex justify-between align-middle w-[10%]">
                {/* <img className="rounded-md" height={"50px"} width={"50px"} src="/Mayuresh Profile.jpeg" alt="" /> */}
                <span className="ml-2 my-auto">Web Developer</span>
            </div>
            <div className="items-center w-[80%]">
                <ul className="flex justify-center w-full mx-auto">
                    <li className="mx-6 hover:cursor-pointer">About</li>
                    <li className="mx-6 hover:cursor-pointer">Projects</li>
                    <li className="mx-6 hover:cursor-pointer">Contact</li>
                </ul>
            </div>
            <ModeToggle className={"absolute right-2"} />
        </nav>
    );
}