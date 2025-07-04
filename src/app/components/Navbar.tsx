"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Smooth scroll function
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setSidebarOpen(false);
        }
    };

    return (
        <>
            {/* Desktop Navbar */}
            <div className="hidden lg:flex w-full text-sm px-20 fixed text-white/80 top-2 right-0 h-10 bg-transparent flex-row items-center justify-between z-100">
                <div className="flex flex-row gap-10 font-light">
                    <Link className="hover:cursor-pointer hover:font-semibold hover:translate-x-0.5 transition-all duration-200" href="#hero" onClick={e => handleSmoothScroll(e, 'hero')}>Home</Link>
                    <Link className="hover:cursor-pointer hover:font-semibold hover:translate-x-0.5 transition-all duration-200" href="#projects" onClick={e => handleSmoothScroll(e, 'projects')}>Projects</Link>
                    <Link className="hover:cursor-pointer hover:font-semibold hover:translate-x-0.5 transition-all duration-200" href="#team" onClick={e => handleSmoothScroll(e, 'team')}>Team</Link>
                </div>
                <div>
                    <h1>tutuianuwebdev@gmail.com</h1>
                </div>
            </div>

            {/* Mobile Sidebar Button */}
            <button
                className="lg:hidden fixed top-4 right-4 z-[110] bg-white/10 rounded-full p-2 shadow-lg"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
            >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h20M4 16h20" />
                </svg>
            </button>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#18181b] text-white/90 z-[200] shadow-2xl transform transition-transform duration-300 lg:hidden ${
                    sidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                        <span className="font-semibold text-lg">Menu</span>
                        <button
                            className="text-white/70 hover:text-white transition"
                            onClick={() => setSidebarOpen(false)}
                            aria-label="Close sidebar"
                        >
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col gap-6 px-8 py-8 font-light">
                        <Link
                            href="#hero"
                            className="hover:font-semibold hover:translate-x-1 transition-all duration-200"
                            onClick={e => handleSmoothScroll(e, 'hero')}
                        >
                            Home
                        </Link>
                        <Link
                            href="#projects"
                            className="hover:font-semibold hover:translate-x-1 transition-all duration-200"
                            onClick={e => handleSmoothScroll(e, 'projects')}
                        >
                            Projects
                        </Link>
                        <Link
                            href="#team"
                            className="hover:font-semibold hover:translate-x-1 transition-all duration-200"
                            onClick={e => handleSmoothScroll(e, 'team')}
                        >
                            Team
                        </Link>
                    </nav>
                    <div className="mt-auto px-8 pb-8 text-xs text-white/60">
                        <h1>tutuianuwebdev@gmail.com</h1>
                    </div>
                </div>
            </div>

            {/* Overlay when sidebar is open */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-[150] lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </>
    );
}