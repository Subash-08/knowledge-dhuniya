'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
    currentView?: 'landing' | 'courses' | 'about';
}

const Navbar: React.FC<NavbarProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Helper function to check if link is active
    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-100 group-hover:scale-105 transition duration-300">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <span className="text-xl font-bold text-[#1e293b] tracking-tight">
                                KNOWLEDGE <span className="text-blue-600">DUNIYA</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            href="/"
                            className={`font-semibold transition text-sm uppercase tracking-wider ${isActive('/') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/courses/detail"
                            className={`font-semibold transition text-sm uppercase tracking-wider ${isActive('/courses') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                                }`}
                        >
                            Courses
                        </Link>
                        <Link
                            href="/about"
                            className={`font-semibold transition text-sm uppercase tracking-wider ${isActive('/about') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`font-semibold transition text-sm uppercase tracking-wider ${isActive('/contact') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                                }`}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-7 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-100"
                        >
                            Book Free Demo
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-600 hover:text-blue-600"
                        >
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 p-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
                    <Link
                        href="/"
                        className={`block font-bold ${isActive('/') ? 'text-blue-600' : 'text-slate-800'}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/courses/detail"
                        className={`block font-bold ${isActive('/courses') ? 'text-blue-600' : 'text-slate-800'}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Courses
                    </Link>
                    <Link
                        href="/about"
                        className={`block font-bold ${isActive('/about') ? 'text-blue-600' : 'text-slate-800'}`}
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className={`block font-bold ${isActive('/contact') ? 'text-blue-600' : 'text-slate-800'}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                    <div className="pt-2">
                    </div>
                    <Link
                        href="/contact"
                        className="block w-full bg-blue-600 text-white px-5 py-4 rounded-xl font-bold shadow-xl shadow-blue-100 text-center"
                        onClick={() => setIsOpen(false)}
                    >
                        Book Free Demo
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
