"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookButton } from "@/components/ui/BookButton";

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
    buttonText = "Book Your Stay",
    buttonHref = "/book",
    backgroundImage = "/images/villa/terrace.jpg",
    className,
}: CTASectionProps) {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section
            ref={ref}
            className={cn("relative py-20 sm:py-28 md:py-36 overflow-hidden", className)}
        >
            {/* Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div style={{ y, scale: 1.1 }} className="absolute inset-0">
                    <Image
                        src={backgroundImage}
                        alt="Villa Mosta terrace"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        quality={85}
                    />
                </motion.div>
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to bottom, rgba(44,37,32,0.65) 0%, rgba(44,37,32,0.5) 50%, rgba(44,37,32,0.7) 100%)",
                    }}
                />
            </div>

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 container text-center px-4 sm:px-6"
            >
                {/* Divider */}
                <motion.div
                    variants={{
                        hidden: { scaleX: 0, opacity: 0 },
                        visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8 } }
                    }}
                    className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
                >
                    <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-amber-400/60" />
                    <div className="w-1.5 h-1.5 rotate-45 border border-amber-400/60" />
                    <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-amber-400/60" />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 max-w-3xl mx-auto">
                        {title}
                    </h2>
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto mb-8 sm:mb-10"
                >
                    {subtitle}
                </motion.p>

                <motion.div variants={itemVariants}>
                    <BookButton variant="outline" size="lg" href={buttonHref}>
                        {buttonText}
                    </BookButton>
                </motion.div>
            </motion.div>
        </section>
    );
}
