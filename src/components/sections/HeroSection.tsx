"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookButton } from "@/components/ui/BookButton";

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    address?: string;
    heroImage?: string;
    showScrollIndicator?: boolean;
    className?: string;
}

export function HeroSection({
    title = "VILLA MOSTA",
    subtitle = "A Traditional Maltese Home",
    address = "51 Triq Il-Kungress Ewkaristiku, Mosta, Malta",
    heroImage = "/images/villa/hero-rotunda.jpg",
    showScrollIndicator = true,
    className,
}: HeroSectionProps) {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const scrollToContent = () => {
        const nextSection = document.getElementById("intro");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section
            ref={ref}
            className={cn(
                "relative flex items-center justify-center overflow-hidden bg-stone-900",
                "h-screen min-h-[600px]",
                className
            )}
        >
            {/* Background Image with Parallax & Scale */}
            <motion.div
                style={{ y, opacity, scale }}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-stone-900/20" />
                <Image
                    src="/images/villa/hero-rotunda.jpg"
                    alt="Villa Mosta, Malta"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                    quality={100}
                />
            </motion.div>

            {/* Gradient overlay - cinematic */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(15,12,8,0.35) 0%, rgba(15,12,8,0.15) 40%, rgba(15,12,8,0.55) 100%)",
                }}
            />

            {/* Content - centered vertically */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center px-6 sm:px-8 w-full max-w-5xl mx-auto"
            >
                {/* Main Title - VILLA MOSTA */}
                <motion.div variants={itemVariants}>
                    <h1
                        className={cn(
                            "font-serif text-white",
                            "text-[clamp(3rem,10vw,8rem)] font-light leading-[0.95] tracking-[0.15em] sm:tracking-[0.2em]"
                        )}
                    >
                        {title}
                    </h1>
                </motion.div>

                {/* Decorative divider */}
                <motion.div
                    variants={itemVariants}
                    className="mx-auto my-6 sm:my-8 md:my-10 flex items-center justify-center gap-4 sm:gap-6"
                >
                    <div className="h-px w-16 sm:w-24 md:w-32 bg-gradient-to-r from-transparent to-amber-400/60" />
                    <div className="w-2 h-2 rotate-45 border border-amber-400/60" />
                    <div className="h-px w-16 sm:w-24 md:w-32 bg-gradient-to-l from-transparent to-amber-400/60" />
                </motion.div>

                {/* Subtitle - larger and more visible */}
                <motion.p
                    variants={itemVariants}
                    className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-light tracking-wide max-w-3xl mx-auto"
                >
                    {subtitle}
                </motion.p>

                {/* Address - larger and more visible */}
                <motion.p
                    variants={itemVariants}
                    className="text-white/85 text-sm sm:text-base md:text-lg tracking-[0.12em] sm:tracking-[0.18em] uppercase mt-4 sm:mt-6"
                >
                    {address}
                </motion.p>

                {/* CTA Button - Unified BookButton */}
                <motion.div
                    variants={itemVariants}
                    className="mt-10 sm:mt-12"
                >
                    <BookButton variant="outline" size="lg">
                        Book Your Stay
                    </BookButton>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            {showScrollIndicator && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    onClick={scrollToContent}
                    className={cn(
                        "absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white",
                        "transition-colors duration-300 ease-out cursor-pointer",
                        "flex flex-col items-center gap-2"
                    )}
                    style={{ zIndex: 10 }}
                    aria-label="Scroll to content"
                >
                    <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase">Discover</span>
                    <ChevronDown className="w-4 h-4 animate-bounce" />
                </motion.button>
            )}
        </section>
    );
}
