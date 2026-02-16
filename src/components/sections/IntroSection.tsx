"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface IntroSectionProps {
    overline?: string;
    title?: string;
    description?: string;
    className?: string;
}

export function IntroSection({
    overline = "WELCOME TO VILLA MOSTA",
    title = "A Traditional Maltese Home",
    description = "Experience the real Malta in a real town with real people. Villa Mosta is a spacious traditional home with lots of character, beautiful terraces, and a central location — right at the doorstep of the third largest Rotunda.",
    className,
}: IntroSectionProps) {
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
            id="intro"
            ref={sectionRef}
            className={cn("py-20 sm:py-24 md:py-32 bg-[var(--color-warm-cream)]", className)}
        >
            <div className="container max-w-3xl text-center px-4 sm:px-6">
                {/* Overline */}
                <span
                    className={cn(
                        "block text-[10px] sm:text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-accent)] mb-4 sm:mb-6 transition-all duration-700",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                >
                    {overline}
                </span>

                {/* Title */}
                <h2
                    className={cn(
                        "font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-800 mb-5 sm:mb-6 transition-all duration-700 delay-200",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    )}
                >
                    {title}
                </h2>

                {/* Maltese divider */}
                <div
                    className={cn(
                        "flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-700 delay-300",
                        isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    )}
                >
                    <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[var(--color-honey)]" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-honey)]" />
                    <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-[var(--color-honey)]" />
                </div>

                {/* Description */}
                <p
                    className={cn(
                        "text-sm sm:text-base md:text-lg text-stone-600 leading-[1.8] sm:leading-[1.9] transition-all duration-700 delay-400",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                >
                    {description}
                </p>
            </div>
        </section>
    );
}
