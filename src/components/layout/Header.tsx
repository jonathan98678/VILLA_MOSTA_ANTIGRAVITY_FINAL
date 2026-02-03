"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "The Villa", href: "/villa" },
    { label: "Rooms", href: "/rooms" },
    { label: "Location", href: "/location" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-sm py-3">
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="font-serif text-xl md:text-2xl text-white">
                        Villa Mosta
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-white/80 hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <Link
                            href="/book"
                            className="text-sm font-medium px-5 py-2.5 bg-amber-600 text-white hover:bg-amber-700 transition-colors"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden p-2 text-white"
                        aria-label="Open menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 z-50 bg-stone-900 transition-transform duration-300 lg:hidden",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="container py-4 flex justify-between items-center">
                    <Link
                        href="/"
                        className="font-serif text-xl text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Villa Mosta
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 text-white"
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <nav className="container flex flex-col gap-6 mt-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="font-serif text-3xl text-white opacity-0 animate-fade-in-up"
                            style={{ animationDelay: `${index * 60}ms`, animationFillMode: "forwards" }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="mt-8">
                        <Link
                            href="/book"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="inline-flex items-center justify-center w-full py-4 bg-amber-600 text-white font-medium text-sm uppercase tracking-wider"
                        >
                            Book Your Stay
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}
