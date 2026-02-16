"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Star, ArrowRight } from "lucide-react";

interface Review {
    id: string;
    guestName: string;
    country: string;
    rating: number;
    text: string;
}

const defaultReviews: Review[] = [
    {
        id: "1",
        guestName: "Elizabeth",
        country: "United Kingdom",
        rating: 10,
        text: "Very welcoming host. Well equipped. Great location. Quiet",
    },
    {
        id: "2",
        guestName: "Inge",
        country: "Belgium",
        rating: 10,
        text: "Wonderful hospitable owners! Beautiful rooms with a lovely terrace. Mosta is a charming town.",
    },
    {
        id: "3",
        guestName: "Julie",
        country: "United Kingdom",
        rating: 10,
        text: "Location very central and easy to catch buses. The rooftop is perfect for relaxing.",
    },
    {
        id: "4",
        guestName: "Shane",
        country: "Canada",
        rating: 10,
        text: "The hosts were amazing. Great restaurant recommendations with authentic Maltese cuisine.",
    },
    {
        id: "5",
        guestName: "Tamara",
        country: "Slovakia",
        rating: 10,
        text: "We loved everything! The room is spacious and the terrace is outstanding.",
    },
    {
        id: "6",
        guestName: "Marco",
        country: "Germany",
        rating: 10,
        text: "Perfect stay in Malta! The hosts made us feel at home. Great views from the terrace.",
    },
];

interface ReviewsSectionProps {
    title?: string;
    rating?: number;
    reviewCount?: number;
    reviews?: Review[];
    className?: string;
}

export function ReviewsSection({
    title = "Guest Experiences",
    rating = 9.3,
    reviewCount = 88,
    reviews = defaultReviews,
    className,
}: ReviewsSectionProps) {
    const sectionRef = React.useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
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
            className={cn("py-24 md:py-32 bg-[var(--color-warm-white)]", className)}
        >
            <div className="container">
                {/* Header */}
                <div className="text-center mb-14">
                    <span
                        className={cn(
                            "block text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-accent)] mb-4",
                            "transition-all duration-700",
                            isVisible ? "opacity-100" : "opacity-0"
                        )}
                    >
                        TESTIMONIALS
                    </span>
                    <h2
                        className={cn(
                            "font-serif text-3xl md:text-4xl lg:text-5xl text-stone-800 mb-6",
                            "transition-all duration-700 delay-100",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        {title}
                    </h2>

                    {/* Rating badge */}
                    <div
                        className={cn(
                            "inline-flex items-center gap-4 bg-white px-6 py-4 shadow-sm border border-stone-100",
                            "transition-all duration-700 delay-200",
                            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        )}
                    >
                        <span className="font-serif text-4xl text-stone-800 leading-none">{rating}</span>
                        <div className="h-8 w-px bg-stone-200" />
                        <div className="text-left">
                            <div className="flex gap-0.5 text-[var(--color-honey)]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <span className="text-[var(--color-text-muted)] text-sm">{reviewCount} reviews on Booking.com</span>
                        </div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.slice(0, 6).map((review, index) => (
                        <div
                            key={review.id}
                            className={cn(
                                "bg-white p-7 border border-stone-100 hover:shadow-md hover:shadow-stone-100 transition-all duration-500",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            )}
                            style={{ transitionDelay: `${300 + index * 100}ms` }}
                        >
                            {/* Quote mark */}
                            <span className="block font-serif text-4xl text-[var(--color-honey)] leading-none mb-3">&ldquo;</span>

                            <p className="text-stone-700 leading-[1.8] mb-6 text-[15px]">
                                {review.text}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                                <div>
                                    <p className="font-medium text-stone-800 text-sm">{review.guestName}</p>
                                    <p className="text-stone-400 text-xs">{review.country}</p>
                                </div>
                                <div className="flex items-center gap-1.5 bg-stone-50 px-3 py-1.5">
                                    <span className="font-serif text-lg text-stone-800">{review.rating}</span>
                                    <span className="text-stone-400 text-xs">/10</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All */}
                <div className={cn(
                    "text-center mt-14 transition-all duration-700 delay-700",
                    isVisible ? "opacity-100" : "opacity-0"
                )}>
                    <Link
                        href="/reviews"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 text-stone-700 text-xs font-medium tracking-[0.1em] uppercase hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-400"
                    >
                        <span>Read All Reviews</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
