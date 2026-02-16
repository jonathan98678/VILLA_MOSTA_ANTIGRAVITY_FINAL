"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

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

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
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
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth effect
            },
        },
    };

    return (
        <section
            ref={ref}
            className={cn(
                "relative flex items-start overflow-hidden bg-stone-900",
                "h-screen min-h-[600px]",
                className
            )}
        >
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-stone-900/20" /> {/* Extra tint if needed */}
                <Image
                    src={heroImage}
                    alt="Villa Mosta, Malta"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                    quality={90}
                />
            </motion.div>

            {/* Gradient overlay — cinematic */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(15,12,8,0.4) 0%, rgba(15,12,8,0.1) 40%, rgba(15,12,8,0.6) 100%)",
                }}
            />

            {/* Content — pushed higher */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center px-4 sm:px-6 w-full max-w-6xl mx-auto pt-[28vh] sm:pt-[30vh]"
            >
                {/* Overline */}
                <motion.span
                    variants={itemVariants}
                    className="block text-[10px] sm:text-xs font-medium tracking-[0.35em] uppercase text-white/60 mb-4 sm:mb-6"
                >
                    Est. Mosta, Malta
                </motion.span>

                {/* Main Title — single line, lighter weight */}
                <motion.div variants={itemVariants}>
                    <h1
                        className={cn(
                            "font-serif text-white whitespace-nowrap",
                            "text-[clamp(2.2rem,8vw,7rem)] font-light leading-[1] tracking-[0.18em] sm:tracking-[0.25em]"
                        )}
                    >
                        {title}
                    </h1>
                </motion.div>

                {/* Decorative divider */}
                <motion.div
                    variants={itemVariants}
                    className="mx-auto my-5 sm:my-7 flex items-center justify-center gap-3 sm:gap-4"
                >
                    <div className="h-px w-10 sm:w-16 md:w-20 bg-gradient-to-r from-transparent to-amber-400/60" />
                    <div className="w-1.5 h-1.5 rotate-45 border border-amber-400/60" />
                    <div className="h-px w-10 sm:w-16 md:w-20 bg-gradient-to-l from-transparent to-amber-400/60" />
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="text-white/80 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-md mx-auto"
                >
                    {subtitle}
                </motion.p>

                {/* Address */}
                <motion.p
                    variants={itemVariants}
                    className="text-white/50 text-[10px] sm:text-xs md:text-sm tracking-[0.12em] sm:tracking-[0.15em] uppercase mt-2 sm:mt-3"
                >
                    {address}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    variants={itemVariants}
                    className="mt-8 sm:mt-10 md:mt-12"
                >
                    <Link
                        href="/book"
                        className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 border border-white/30 text-white text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase backdrop-blur-sm bg-white/5 hover:bg-white/15 hover:border-white/50 transition-all duration-500"
                    >
                        <span>Book Your Stay</span>
                    </Link>
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
