"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
            className={cn("py-20 sm:py-24 md:py-32 bg-[var(--color-warm-cream)] overflow-hidden", className)}
        >
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <span className="block text-[10px] sm:text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-accent)] mb-4 sm:mb-6">
                            {overline}
                        </span>

                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6 sm:mb-8 leading-tight">
                            {title}
                        </h2>

                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                            <div className="h-px w-12 bg-[var(--color-honey)]" />
                            <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-honey)]" />
                        </div>

                        <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-8">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <div className="px-4 py-2 bg-white rounded-full border border-stone-200 text-xs font-medium uppercase tracking-wider text-stone-600">
                                Historic
                            </div>
                            <div className="px-4 py-2 bg-white rounded-full border border-stone-200 text-xs font-medium uppercase tracking-wider text-stone-600">
                                Central
                            </div>
                            <div className="px-4 py-2 bg-white rounded-full border border-stone-200 text-xs font-medium uppercase tracking-wider text-stone-600">
                                Authentic
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Grid */}
                    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute top-0 right-0 w-[65%] h-[60%] z-10"
                        >
                            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl">
                                <Image
                                    src="/images/villa/terrace.jpg"
                                    alt="Villa Mosta Terrace"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute bottom-0 left-0 w-[55%] h-[55%] z-20"
                        >
                            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl border-4 border-[var(--color-warm-cream)]">
                                <Image
                                    src="/images/villa/entrence.jpg"
                                    alt="Villa Mosta Entrance"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </motion.div>

                        {/* Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-stone-300 rounded-full opacity-30 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
