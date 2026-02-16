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
    buttonText = "Check Availability",
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
            className={cn(
                "relative min-h-[55vh] flex items-center justify-center overflow-hidden",
                className
            )}
        >
            {/* Background with slow zoom */}
            <div className="absolute inset-0 hero-image-zoom">
                <Image
                    src={backgroundImage}
                    alt="Villa Mosta"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            {/* Gradient overlay — cinematic warm */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(44,37,32,0.5) 0%, rgba(44,37,32,0.65) 50%, rgba(44,37,32,0.8) 100%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-6 py-20 max-w-3xl mx-auto">
                {/* Decorative overline */}
                <div
                    className={cn(
                        "flex items-center justify-center gap-4 mb-8 transition-all duration-1000",
                        isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    )}
                >
                    <div className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400/60" />
                    <div className="w-1.5 h-1.5 rotate-45 border border-amber-400/60" />
                    <div className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400/60" />
                </div>

                <h2
                    className={cn(
                        "font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-5 tracking-wide",
                        "transition-all duration-1000 delay-100",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    {title}
                </h2>

                <p
                    className={cn(
                        "text-white/75 text-lg mb-10 max-w-lg mx-auto leading-relaxed",
                        "transition-all duration-1000 delay-200",
                        isVisible ? "opacity-100" : "opacity-0"
                    )}
                >
                    {subtitle}
                </p>

                <div className={cn(
                    "transition-all duration-1000 delay-300",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                    <Link
                        href={buttonHref}
                        className="group inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white text-xs font-medium tracking-[0.2em] uppercase backdrop-blur-sm bg-white/5 hover:bg-white/15 hover:border-white/50 transition-all duration-500"
                    >
                        <span>{buttonText}</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
