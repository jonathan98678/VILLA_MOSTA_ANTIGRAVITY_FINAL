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
            className={cn("py-20 md:py-28 bg-white", className)}
        >
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Overline */}
                    <span
                        className={cn(
                            "block text-xs font-semibold tracking-[0.2em] uppercase text-amber-700 mb-4",
                            "transition-all duration-700 ease-out",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                    >
                        {overline}
                    </span>

                    {/* Title */}
                    <h2
                        className={cn(
                            "font-serif text-3xl md:text-4xl lg:text-5xl text-stone-800 mb-6",
                            "transition-all duration-700 ease-out delay-100",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        {title}
                    </h2>

                    {/* Description */}
                    <p
                        className={cn(
                            "text-stone-600 text-lg leading-relaxed",
                            "transition-all duration-700 ease-out delay-200",
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
