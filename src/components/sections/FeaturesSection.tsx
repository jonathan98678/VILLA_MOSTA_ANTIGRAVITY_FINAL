"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface Feature {
    title: string;
    description: string;
    image: string;
}

interface FeaturesSectionProps {
    overline?: string;
    title?: string;
    description?: string;
    features?: Feature[];
}

const defaultFeatures: Feature[] = [
    {
        title: "Curated Experiences",
        description: "From private wine tastings to guided coastal walks, we craft bespoke experiences that reveal the authentic character of our region.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    },
    {
        title: "Farm-to-Table Dining",
        description: "Our kitchen celebrates local traditions with ingredients sourced from neighboring farms and our own garden.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    },
    {
        title: "Tranquil Gardens",
        description: "Wander through olive groves, fragrant herb gardens, and shaded terraces designed for quiet contemplation.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
];

export function FeaturesSection({
    overline = "THE EXPERIENCE",
    title = "More than just a stay",
    description = "Villa Mosta is designed for those who seek depth in their travels—experiences that nourish, inspire, and leave lasting impressions.",
    features = defaultFeatures,
}: FeaturesSectionProps) {
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
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="section bg-cream-100"
        >
            <div className="container">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <span
                        className={cn(
                            "text-overline text-text-muted block mb-4 transition-all duration-700",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                    >
                        {overline}
                    </span>
                    <h2
                        className={cn(
                            "font-serif text-heading-1 text-text mb-6 transition-all duration-700 delay-100",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        )}
                    >
                        {title}
                    </h2>
                    <p
                        className={cn(
                            "text-body-lg text-text-muted transition-all duration-700 delay-200",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                    >
                        {description}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={cn(
                                "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                                // Alternate layout
                                index % 2 === 1 && "lg:flex-row-reverse"
                            )}
                            style={{ transitionDelay: `${300 + index * 150}ms` }}
                        >
                            {/* Image */}
                            <div
                                className={cn(
                                    "relative aspect-[4/3] rounded-lg overflow-hidden image-reveal",
                                    index % 2 === 1 && "lg:order-2"
                                )}
                            >
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>

                            {/* Content */}
                            <div className={cn(index % 2 === 1 && "lg:order-1")}>
                                <h3 className="font-serif text-heading-2 text-text mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-body-lg text-text-muted leading-relaxed mb-6">
                                    {feature.description}
                                </p>
                                <Button variant="link" className="p-0 h-auto text-stone hover:text-accent">
                                    Learn more →
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
