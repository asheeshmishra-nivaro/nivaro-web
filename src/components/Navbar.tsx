"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Technology", href: "/technology" },
    { name: "Governance", href: "/governance" },
    { name: "Partner", href: "/partner" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    console.log("Navbar component rendering...");
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Debugging navigation
    useEffect(() => {
        console.log("Current path:", pathname);
    }, [pathname]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-3" : "bg-transparent py-5"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-primary tracking-tight hover:opacity-80 transition-opacity">
                            NIVARO
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-bold transition-all hover:text-accent ${pathname === link.href ? "text-accent" : "text-slate-600"}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-accent text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-accent/20"
                        >
                            Request Demo
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-primary hover:bg-slate-50 rounded-lg transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-2xl animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-4 pb-8 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 text-base font-bold rounded-xl transition-colors ${pathname === link.href ? "text-accent bg-accent/5" : "text-slate-600 hover:text-accent hover:bg-slate-50"}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-accent text-white py-4 rounded-xl font-bold shadow-lg shadow-accent/20"
                            >
                                Request Demo
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
