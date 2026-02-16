"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    React.useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
                    scrolled
                        ? "bg-stone-900/90 backdrop-blur-lg py-3 shadow-lg shadow-black/10"
                        : "bg-transparent py-5"
                )}
            >
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={cn(
                            "font-serif text-white transition-all duration-500",
                            scrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
                        )}
                    >
                        <span className="tracking-[0.15em] font-semibold">Villa</span>{" "}
                        <span className="tracking-[0.15em]">Mosta</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "relative px-4 py-2 text-[13px] tracking-[0.08em] uppercase transition-colors duration-300 group",
                                        isActive
                                            ? "text-white"
                                            : "text-white/70 hover:text-white"
                                    )}
                                >
                                    {link.label}
                                    {/* Animated underline */}
                                    <span
                                        className={cn(
                                            "absolute bottom-0.5 left-4 right-4 h-px bg-amber-400 transition-transform duration-300 origin-left",
                                            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                        )}
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <Link
                            href="/book"
                            className={cn(
                                "text-xs font-medium tracking-[0.15em] uppercase px-6 py-2.5 border transition-all duration-500",
                                scrolled
                                    ? "bg-amber-600 border-amber-600 text-white hover:bg-amber-700 hover:border-amber-700"
                                    : "border-white/40 text-white bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:border-white/60"
                            )}
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

            {/* Mobile Menu — full screen overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-50 bg-stone-900 transition-all duration-500 lg:hidden",
                    isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
            >
                <div className="container py-5 flex justify-between items-center">
                    <Link
                        href="/"
                        className="font-serif text-xl text-white tracking-[0.15em]"
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

                <nav className="container flex flex-col gap-1 mt-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                                "font-serif text-3xl text-white py-3 border-b border-white/10 transition-all duration-500",
                                isMobileMenuOpen
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-8"
                            )}
                            style={{
                                transitionDelay: isMobileMenuOpen ? `${200 + index * 80}ms` : "0ms",
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div
                        className={cn(
                            "mt-8 transition-all duration-500",
                            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                        style={{ transitionDelay: isMobileMenuOpen ? "600ms" : "0ms" }}
                    >
                        <Link
                            href="/book"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="inline-flex items-center justify-center w-full py-4 bg-amber-600 text-white font-medium text-sm uppercase tracking-[0.15em]"
                        >
                            Book Your Stay
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}
