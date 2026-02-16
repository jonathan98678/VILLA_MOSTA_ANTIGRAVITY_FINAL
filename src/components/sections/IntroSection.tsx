"use client";

import * as React from "react";
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
    description = "Experience the real Malta in a real town with real people. Villa Mosta is a spacious traditional home with lots of character, beautiful terraces, and a central location — right at the doorstep of the third largest Rotunda.",
    className,
}: IntroSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const lineVariants = {
        hidden: { scaleX: 0, opacity: 0 },
        visible: {
            scaleX: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section
            id="intro"
            className={cn("py-20 sm:py-24 md:py-32 bg-[var(--color-warm-cream)]", className)}
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="container max-w-3xl text-center px-4 sm:px-6"
            >
                {/* Overline */}
                <motion.span
                    variants={itemVariants}
                    className="block text-[10px] sm:text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-accent)] mb-4 sm:mb-6"
                >
                    {overline}
                </motion.span>

                {/* Title */}
                <motion.div variants={itemVariants}>
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-800 mb-5 sm:mb-6">
                        {title}
                    </h2>
                </motion.div>

                {/* Maltese divider */}
                <motion.div
                    variants={lineVariants}
                    className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
                >
                    <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[var(--color-honey)]" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-honey)]" />
                    <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-[var(--color-honey)]" />
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-sm sm:text-base md:text-lg text-stone-600 leading-[1.8] sm:leading-[1.9]"
                >
                    {description}
                </motion.p>
            </motion.div>
        </section>
    );
}
