"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTASectionProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonHref?: string;
    backgroundImage?: string;
    className?: string;
}

export function CTASection({
    title = "Begin Your Maltese Adventure",
    subtitle = "Book your stay at Villa Mosta and experience traditional Maltese hospitality.",
    buttonText = "Book Your Stay",
    buttonHref = "/book",
    backgroundImage = "/images/villa/terrace.jpg",
    className,
}: CTASectionProps) {
    const sectionRef = React.useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={cn("relative py-20 sm:py-28 md:py-36 overflow-hidden", className)}
        >
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt="Villa Mosta terrace"
                    fill
                    className="object-cover transition-transform duration-[15000ms] ease-out scale-100 hover:scale-105"
                    sizes="100vw"
                    quality={85}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to bottom, rgba(44,37,32,0.65) 0%, rgba(44,37,32,0.5) 50%, rgba(44,37,32,0.7) 100%)",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container text-center px-4 sm:px-6">
                {/* Divider */}
                <div
                    className={cn(
                        "flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-700",
                        isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    )}
                >
                    <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-amber-400/60" />
                    <div className="w-1.5 h-1.5 rotate-45 border border-amber-400/60" />
                    <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-amber-400/60" />
                </div>

                <h2
                    className={cn(
                        "font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 max-w-3xl mx-auto",
                        "transition-all duration-700 delay-100",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    )}
                >
                    {title}
                </h2>

                <p
                    className={cn(
                        "text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto mb-8 sm:mb-10",
                        "transition-all duration-700 delay-200",
                        isVisible ? "opacity-100" : "opacity-0"
                    )}
                >
                    {subtitle}
                </p>

                <Link
                    href={buttonHref}
                    className={cn(
                        "inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 border border-white/30 text-white text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase backdrop-blur-sm bg-white/5 hover:bg-white/15 hover:border-white/50 transition-all duration-500",
                        "transition-all duration-700 delay-300",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                >
                    {buttonText}
                </Link>
            </div>
        </section>
    );
}
