"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
        title: "Sun-Drenched Terraces",
        description: "Relax on multiple levels of private terraces with views of the Mosta Rotunda. The perfect spot for morning coffee or evening drinks under the Mediterranean sky.",
        image: "/images/villa/terrace.jpg",
    },
    {
        title: "Authentic Maltese Character",
        description: "Original Maltese architecture and decor throughout. Limestone walls, traditional tiles, and arched doorways tell the story of centuries of island life.",
        image: "/images/villa/entrence.jpg",
    },
    {
        title: "Heart of Malta Location",
        description: "Mosta sits at the center of the island, putting every beach, city, and hidden gem within easy reach. Buses, taxis, and walking paths start at our doorstep.",
        image: "/images/villa/hero-rotunda.jpg",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

export function FeaturesSection({
    overline = "THE EXPERIENCE",
    title = "More than just a stay",
    description = "Villa Mosta offers the kind of experience that turns a holiday into a story worth telling.",
    features = defaultFeatures,
}: FeaturesSectionProps) {
    return (
        <section className="section bg-white overflow-hidden">
            <div className="container">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-overline"
                    >
                        {overline}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-stone-500 text-base sm:text-lg leading-relaxed mt-5"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Features - alternating layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    className="space-y-20 sm:space-y-28"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            className={cn(
                                "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                            )}
                        >
                            {/* Image */}
                            <div
                                className={cn(
                                    "relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-xl",
                                    index % 2 === 1 && "lg:order-2"
                                )}
                            >
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover card-image-zoom"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <div className={cn(index % 2 === 1 && "lg:order-1", "group")}>
                                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4">
                                    0{index + 1}
                                </span>
                                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-800 mb-5 leading-tight group-hover:text-[var(--color-accent)] transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-stone-500 text-base sm:text-lg leading-relaxed mb-8">
                                    {feature.description}
                                </p>
                                <Link
                                    href="/villa"
                                    className="inline-flex items-center text-sm font-medium tracking-[0.1em] uppercase text-stone-800 hover:text-[var(--color-accent)] transition-colors group-hover:translate-x-2 duration-300"
                                >
                                    Discover more &rarr;
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
