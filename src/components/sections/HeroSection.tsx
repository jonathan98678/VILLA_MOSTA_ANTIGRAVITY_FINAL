"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    address?: string;
    heroImage?: string;
    showScrollIndicator?: boolean;
    className?: string;
}

export function HeroSection({
    title = "VILLA MOSTA",
    subtitle = "A Traditional Maltese Home",
    address = "51 Triq Il-Kungress Ewkaristiku, Mosta, Malta",
    heroImage = "/images/villa/hero-rotunda.jpg",
    showScrollIndicator = true,
    className,
}: HeroSectionProps) {
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const scrollToContent = () => {
        const nextSection = document.getElementById("intro");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            className={cn(
                "relative flex items-start overflow-hidden bg-stone-900",
                "h-screen min-h-[600px]",
                className
            )}
        >
            {/* Background Image with slow zoom */}
            <div className="absolute inset-0 hero-image-zoom">
                <Image
                    src={heroImage}
                    alt="Villa Mosta, Malta"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                    quality={90}
                />
            </div>

            {/* Gradient overlay — cinematic */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(15,12,8,0.4) 0%, rgba(15,12,8,0.1) 40%, rgba(15,12,8,0.6) 100%)",
                }}
            />

            {/* Content — pushed higher */}
            <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-6xl mx-auto pt-[28vh] sm:pt-[30vh]">
                {/* Overline */}
                <span
                    className={cn(
                        "block text-[10px] sm:text-xs font-medium tracking-[0.35em] uppercase text-white/60 mb-4 sm:mb-6",
                        "transition-all duration-1000 ease-out delay-300",
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                >
                    Est. Mosta, Malta
                </span>

                {/* Main Title — single line, lighter weight */}
                <h1
                    className={cn(
                        "hero-title font-serif text-white whitespace-nowrap",
                        "text-[clamp(2.2rem,8vw,7rem)] font-light leading-[1] tracking-[0.18em] sm:tracking-[0.25em]",
                        "transition-all duration-[1400ms] ease-out delay-500",
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                >
                    {title}
                </h1>

                {/* Decorative divider */}
                <div
                    className={cn(
                        "mx-auto my-5 sm:my-7 flex items-center justify-center gap-3 sm:gap-4 transition-all duration-1000 ease-out delay-700",
                        isLoaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    )}
                >
                    <div className="h-px w-10 sm:w-16 md:w-20 bg-gradient-to-r from-transparent to-amber-400/60" />
                    <div className="w-1.5 h-1.5 rotate-45 border border-amber-400/60" />
                    <div className="h-px w-10 sm:w-16 md:w-20 bg-gradient-to-l from-transparent to-amber-400/60" />
                </div>

                {/* Subtitle */}
                <p
                    className={cn(
                        "text-white/80 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-md mx-auto",
                        "transition-all duration-1000 ease-out delay-[900ms]",
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    )}
                >
                    {subtitle}
                </p>

                {/* Address */}
                <p
                    className={cn(
                        "text-white/50 text-[10px] sm:text-xs md:text-sm tracking-[0.12em] sm:tracking-[0.15em] uppercase mt-2 sm:mt-3",
                        "transition-all duration-1000 ease-out delay-[1100ms]",
                        isLoaded ? "opacity-100" : "opacity-0"
                    )}
                >
                    {address}
                </p>

                {/* CTA Button */}
                <div
                    className={cn(
                        "mt-8 sm:mt-10 md:mt-12 transition-all duration-1000 ease-out delay-[1300ms]",
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    )}
                >
                    <Link
                        href="/book"
                        className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 border border-white/30 text-white text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase backdrop-blur-sm bg-white/5 hover:bg-white/15 hover:border-white/50 transition-all duration-500"
                    >
                        <span>Book Your Stay</span>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            {showScrollIndicator && (
                <button
                    onClick={scrollToContent}
                    className={cn(
                        "absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white",
                        "transition-all duration-700 ease-out cursor-pointer",
                        "flex flex-col items-center gap-2",
                        isLoaded ? "opacity-100 delay-[1600ms]" : "opacity-0"
                    )}
                    style={{ zIndex: 10 }}
                    aria-label="Scroll to content"
                >
                    <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase">Discover</span>
                    <ChevronDown className="w-4 h-4 animate-bounce" />
                </button>
            )}
        </section>
    );
}
