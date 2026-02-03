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
            className={cn(
                "relative min-h-[50vh] flex items-center justify-center overflow-hidden",
                className
            )}
        >
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt="Villa Mosta"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-stone-900/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 py-16 max-w-2xl mx-auto">
                <h2
                    className={cn(
                        "font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4",
                        "transition-all duration-1000",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    {title}
                </h2>

                <p
                    className={cn(
                        "text-white/80 text-lg mb-8 max-w-md mx-auto",
                        "transition-all duration-1000 delay-150",
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
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-800 font-medium text-sm uppercase tracking-wider hover:bg-stone-100 transition-colors"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
}
