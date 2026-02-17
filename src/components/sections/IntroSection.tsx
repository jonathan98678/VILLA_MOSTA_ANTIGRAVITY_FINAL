"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BookButton } from "@/components/ui/BookButton";

interface IntroSectionProps {
    overline?: string;
    title?: string;
    description?: string;
    className?: string;
}

export function IntroSection({
    overline = "WELCOME TO VILLA MOSTA",
    title = "A Traditional Maltese Home",
    description = "Experience the real Malta in a real town with real people. Villa Mosta is a spacious traditional home with lots of character, beautiful terraces, and a central location - right at the doorstep of the third largest Rotunda.",
    className,
}: IntroSectionProps) {
    return (
        <section
            id="intro"
            className={cn("section bg-[var(--color-warm-cream)] overflow-hidden", className)}
        >
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center lg:text-left"
                    >
                        <span className="section-overline">
                            {overline}
                        </span>

                        <h2 className="section-title mb-6 sm:mb-8">
                            {title}
                        </h2>

                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                            <div className="h-px w-12 bg-[var(--color-honey)]" />
                            <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-honey)]" />
                        </div>

                        <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-10">
                            {description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
                            {["Historic", "Central", "Authentic", "Family-Friendly"].map((tag) => (
                                <div
                                    key={tag}
                                    className="px-5 py-2.5 bg-white rounded-full border border-stone-200 text-xs font-medium uppercase tracking-wider text-stone-600 hover:border-[var(--color-honey)] hover:text-[var(--color-accent)] transition-colors duration-300"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <BookButton size="default">
                                Book Your Stay
                            </BookButton>
                            <Link
                                href="/villa"
                                className="inline-flex items-center justify-center px-6 py-3 text-xs font-medium tracking-[0.15em] uppercase rounded-full border border-stone-300 text-stone-700 hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-400"
                            >
                                Explore the Villa
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image Grid */}
                    <div className="relative h-[450px] sm:h-[550px] lg:h-[650px]">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-0 right-0 w-[65%] h-[60%] z-10"
                        >
                            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src="/images/villa/terrace.jpg"
                                    alt="Villa Mosta sun terrace with outdoor furniture and Rotunda views"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute bottom-0 left-0 w-[55%] h-[55%] z-20 group"
                        >
                            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl border-4 border-[var(--color-warm-cream)]">
                                <Image
                                    src="/images/villa/entrence.jpg"
                                    alt="Traditional Maltese entrance to Villa Mosta with limestone archway"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </motion.div>

                        {/* Premium decorative accent */}
                        <div className="absolute top-[15%] left-[10%] w-20 h-20 border border-[var(--color-honey)]/20 rounded-full pointer-events-none" />
                        <div className="absolute bottom-[15%] right-[10%] w-32 h-32 border border-stone-300/20 rounded-full pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
