"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Star, Quote } from "lucide-react";

interface Review {
    id: string;
    guestName: string;
    country?: string;
    source: string;
    rating: number;
    reviewText: string;
    stayType?: string;
    isFeatured?: boolean;
}

interface TestimonialsSectionProps {
    overline?: string;
    title?: string;
    reviews?: Review[];
}

const defaultReviews: Review[] = [
    {
        id: "1",
        guestName: "Sarah & Michael",
        country: "United Kingdom",
        source: "Booking.com",
        rating: 5,
        reviewText: "An absolutely magical experience. From the moment we arrived, we felt completely at home. The attention to detail is extraordinary—fresh flowers in every room, handmade soaps, and the most incredible breakfast we've ever had. We've already booked our return.",
        stayType: "Couple",
        isFeatured: true,
    },
    {
        id: "2",
        guestName: "Marco Rossi",
        country: "Italy",
        source: "Google",
        rating: 5,
        reviewText: "Villa Mosta exceeded all expectations. The hosts are warm and attentive without being intrusive. Perfect for anyone seeking a peaceful retreat with stunning views.",
        stayType: "Solo traveler",
    },
    {
        id: "3",
        guestName: "Emma Thompson",
        country: "Australia",
        source: "Airbnb",
        rating: 5,
        reviewText: "We celebrated our anniversary here and couldn't have chosen a more romantic setting. The terrace suite offered breathtaking sunsets, and the local wine recommendations were perfect.",
        stayType: "Couple",
    },
];

export function TestimonialsSection({
    overline = "GUEST EXPERIENCES",
    title = "Words from those who've stayed",
    reviews = defaultReviews,
}: TestimonialsSectionProps) {
    const sectionRef = React.useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);

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

    // Auto-rotate testimonials
    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % reviews.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    const activeReview = reviews[activeIndex];

    return (
        <section
            ref={sectionRef}
            className="section bg-stone text-cream-100"
        >
            <div className="container max-w-4xl text-center">
                {/* Header */}
                <span
                    className={cn(
                        "text-overline text-cream-300 block mb-4 transition-all duration-700",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                >
                    {overline}
                </span>
                <h2
                    className={cn(
                        "font-serif text-heading-1 mb-16 transition-all duration-700 delay-100",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    )}
                >
                    {title}
                </h2>

                {/* Quote Icon */}
                <div
                    className={cn(
                        "flex justify-center mb-8 transition-all duration-700 delay-200",
                        isVisible ? "opacity-100" : "opacity-0"
                    )}
                >
                    <Quote className="w-12 h-12 text-accent opacity-50" />
                </div>

                {/* Active Review */}
                <div
                    className={cn(
                        "transition-all duration-700 delay-300",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={cn(
                                    "w-5 h-5 transition-all duration-300",
                                    i < activeReview.rating
                                        ? "text-accent fill-accent"
                                        : "text-cream-400"
                                )}
                            />
                        ))}
                    </div>

                    {/* Review Text */}
                    <blockquote className="font-serif text-heading-3 text-cream-100 mb-8 leading-relaxed transition-opacity duration-500">
                        &ldquo;{activeReview.reviewText}&rdquo;
                    </blockquote>

                    {/* Guest Info */}
                    <div className="text-body text-cream-200 mb-2">
                        {activeReview.guestName}
                    </div>
                    <div className="text-body-sm text-cream-400">
                        {activeReview.stayType && `${activeReview.stayType} • `}
                        {activeReview.country && `${activeReview.country} • `}
                        {activeReview.source}
                    </div>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-3 mt-12">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                index === activeIndex
                                    ? "bg-accent w-8"
                                    : "bg-cream-400 hover:bg-cream-300"
                            )}
                            aria-label={`View testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
