"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
    overline?: string;
    title?: string;
    description?: string[];
}

export function AboutSection({
    overline = "WHAT LIVES HERE",
    title = "Villa Mosta is more than a home | it's a living rhythm.",
    description = [
        "Perched on the gentle slopes of the Mediterranean, Villa Mosta offers an escape from the ordinary. Here, time moves differently. Mornings begin with golden light filtering through ancient olive trees, and evenings end with the soft whisper of sea breezes.",
        "Every corner of our villa has been thoughtfully curated to create moments of quiet luxury. From the hand-selected linens to the locally sourced breakfast ingredients, we believe true hospitality lies in the details.",
    ],
}: AboutSectionProps) {
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
            id="about"
            ref={sectionRef}
            className="section bg-cream-100"
        >
            <div className="container max-w-4xl text-center">
                {/* Overline */}
                <span
                    className={cn(
                        "text-overline text-text-muted block mb-6 transition-all duration-700",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                >
                    {overline}
                </span>

                {/* Title with decorative element */}
                <h2
                    className={cn(
                        "font-serif text-heading-1 text-text mb-10 text-balance transition-all duration-700 delay-200",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    )}
                >
                    {title.split("|").map((part, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && (
                                <>
                                    <span className="text-accent mx-2 inline-block">✦</span>
                                </>
                            )}
                            {part}
                        </React.Fragment>
                    ))}
                </h2>

                {/* Description paragraphs */}
                <div className="prose-villa mx-auto">
                    {description.map((paragraph, index) => (
                        <p
                            key={index}
                            className={cn(
                                "text-body-lg text-text-muted leading-relaxed mb-6 last:mb-0 transition-all duration-700",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            )}
                            style={{ transitionDelay: `${400 + index * 150}ms` }}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
