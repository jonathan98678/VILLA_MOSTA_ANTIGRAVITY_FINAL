"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
        text: "Very welcoming host. Well equipped. Great location. Quiet.",
    },
    {
        id: "2",
        guestName: "Inge",
        country: "Belgium",
        rating: 10,
        text: "Wonderful hospitable owners! Beautiful rooms with a lovely terrace. Mosta is a charming town. We can only praise our stay highly.",
    },
    {
        id: "3",
        guestName: "Julie",
        country: "United Kingdom",
        rating: 10,
        text: "Location very central and easy to catch buses. The rooftop is perfect for chilling and relaxing. A beautiful traditional Maltese villa.",
    },
    {
        id: "4",
        guestName: "Bridie",
        country: "Australia",
        rating: 10,
        text: "Great location. Really friendly and helpful hosts. I would definitely stay again.",
    },
    {
        id: "5",
        guestName: "Shane",
        country: "Canada",
        rating: 10,
        text: "The hosts were amazing. Great restaurant recommendations with authentic Maltese cuisine. Friendliness was more than expected.",
    },
    {
        id: "6",
        guestName: "Jamie",
        country: "United Kingdom",
        rating: 10,
        text: "Hosts were very friendly, hospitable and extremely helpful.",
    },
    {
        id: "7",
        guestName: "Olivera",
        country: "Serbia",
        rating: 10,
        text: "Great location to explore everything. The house is lovely, very clean, had a great view from my room and the owner is amazing!",
    },
    {
        id: "8",
        guestName: "Tamara",
        country: "Slovakia",
        rating: 10,
        text: "We loved everything! Host was kind and helpful with great recommendations. The room is spacious and terrace is outstanding.",
    },
    {
        id: "9",
        guestName: "Agnė",
        country: "Lithuania",
        rating: 10,
        text: "The host was incredibly nice, offered guidance and accommodated our needs. The place was clean and spacious.",
    },
    {
        id: "10",
        guestName: "Emmanouil",
        country: "United Kingdom",
        rating: 10,
        text: "Host was really friendly, providing recommendations and proactively communicating throughout the process.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6 } // No stagger, just fade in
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

interface ReviewsSectionProps {
    title?: string;
    rating?: number;
    reviewCount?: number;
    reviews?: Review[];
    className?: string;
}

export function ReviewsSection({
    title = "Guest Experiences",
    rating = 9.4,
    reviewCount = 90,
    reviews = defaultReviews,
    className,
}: ReviewsSectionProps) {
    return (
        <section
            className={cn("section bg-white", className)}
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="container"
            >
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <motion.span
                        variants={itemVariants}
                        className="section-overline"
                    >
                        TESTIMONIALS
                    </motion.span>
                    <motion.h2
                        variants={itemVariants}
                        className="section-title"
                    >
                        {title}
                    </motion.h2>

                    {/* Rating badge */}
                    <motion.div
                        variants={{
                            hidden: { scale: 0.95, opacity: 0 },
                            visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
                        }}
                        className="inline-flex items-center gap-4 sm:gap-5 bg-stone-50 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl border border-stone-100 mt-6"
                    >
                        <span className="font-serif text-3xl sm:text-4xl text-stone-800 leading-none">{rating}</span>
                        <div className="h-8 w-px bg-stone-200" />
                        <div className="text-left">
                            <div className="flex gap-0.5 text-amber-400 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <span className="text-stone-400 text-xs sm:text-sm">{reviewCount}+ reviews on Booking.com</span>
                        </div>
                    </motion.div>
                </div>

                {/* Reviews Grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
                    data-admin-edit="/admin/reviews"
                >
                    {reviews.slice(0, 6).map((review) => (
                        <motion.div
                            key={review.id}
                            variants={itemVariants}
                            className="card-premium p-6 sm:p-8 flex flex-col"
                        >
                            {/* Stars */}
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                ))}
                            </div>

                            {/* Quote mark */}
                            <span className="block font-serif text-3xl text-[var(--color-honey)]/30 leading-none mb-1">&ldquo;</span>

                            <p className="text-stone-700 leading-relaxed mb-6 text-sm sm:text-base flex-grow">
                                {review.text}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-gradient-to-br from-stone-200 to-stone-300 rounded-full flex items-center justify-center">
                                        <span className="text-xs font-medium text-stone-600">
                                            {review.guestName.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-stone-800 text-sm">{review.guestName}</p>
                                        <p className="text-stone-400 text-xs">{review.country}</p>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-full">
                                    <span className="font-serif text-base font-medium text-amber-700">{review.rating}</span>
                                    <span className="text-xs text-amber-500">/10</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mt-12 sm:mt-16"
                >
                    <Link
                        href="/reviews"
                        className="group inline-flex items-center gap-2 px-7 py-3.5 border border-stone-300 text-stone-700 text-xs font-medium tracking-[0.1em] uppercase rounded-full hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-300"
                    >
                        <span>Read All Reviews</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
