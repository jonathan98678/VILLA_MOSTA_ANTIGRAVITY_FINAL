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
    description = "Villa Mosta is more than a place to stay — it's an invitation to experience authentic Malta. Located in the heart of Mosta, our charming home offers comfortable rooms, sun-drenched terraces with stunning views, and the warmth of genuine Maltese hospitality.",
    className,
}: IntroSectionProps) {
    const sectionRef = React.useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="intro"
            className={cn("relative py-24 md:py-32 bg-[var(--color-warm-white)]", className)}
        >
            {/* Decorative top accent */}
            <div
                className={cn(
                    "absolute top-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[var(--color-honey)] to-transparent transition-all duration-1000",
                    isVisible ? "h-16 opacity-100" : "h-0 opacity-0"
                )}
            />

            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Overline */}
                    <span
                        className={cn(
                            "block text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-accent)] mb-5",
                            "transition-all duration-700 ease-out",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                    >
                        {overline}
                    </span>

                    {/* Title */}
                    <h2
                        className={cn(
                            "font-serif text-3xl md:text-4xl lg:text-5xl text-stone-800 mb-5",
                            "transition-all duration-700 ease-out delay-100",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        {title}
                    </h2>

                    {/* Maltese decorative divider */}
                    <div
                        className={cn(
                            "flex items-center justify-center gap-4 my-6 transition-all duration-700 ease-out delay-200",
                            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        )}
                    >
                        <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-[var(--color-honey)]" />
                        <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-honey)]" />
                        <div className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-[var(--color-honey)]" />
                    </div>

                    {/* Description */}
                    <p
                        className={cn(
                            "text-[var(--color-text-muted)] text-lg leading-[1.85] max-w-2xl mx-auto",
                            "transition-all duration-700 ease-out delay-300",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}
