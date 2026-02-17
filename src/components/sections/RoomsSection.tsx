"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Room {
    id: string;
    slug: string;
    name: string;
    description: string;
    basePrice: number;
    maxGuests: number;
    image: string;
}

const defaultRooms: Room[] = [
    {
        id: "1",
        slug: "family-room-terrace",
        name: "Family Room with Terrace",
        description: "Spacious sanctuary featuring a private terrace with breathtaking views of the Rotunda.",
        basePrice: 85,
        maxGuests: 4,
        image: "/images/villa/room-3.jpg",
    },
    {
        id: "2",
        slug: "deluxe-double-shower",
        name: "Deluxe Double Room",
        description: "Elegant comfort with modern amenities and a beautifully appointed en-suite shower.",
        basePrice: 65,
        maxGuests: 2,
        image: "/images/villa/room-1.jpg",
    },
    {
        id: "3",
        slug: "double-twin-garden-view",
        name: "Garden View Double",
        description: "Charming retreat overlooking the lush garden, perfect for a peaceful getaway.",
        basePrice: 60,
        maxGuests: 2,
        image: "/images/villa/room-2.jpg",
    },
];

interface RoomsSectionProps {
    title?: string;
    subtitle?: string;
    rooms?: Room[];
    className?: string;
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export function RoomsSection({
    title = "Our Rooms",
    subtitle = "Three distinct spaces, each with authentic Maltese character and modern comforts.",
    rooms = defaultRooms,
    className,
}: RoomsSectionProps) {
    return (
        <section
            id="rooms"
            className={cn("section bg-[var(--color-warm-cream)]", className)}
        >
            <div className="container">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="section-overline"
                        >
                            YOUR STAY
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
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-stone-500 text-base sm:text-lg mt-4"
                        >
                            {subtitle}
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="/rooms"
                            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-stone-200 rounded-full text-xs font-medium tracking-[0.1em] uppercase hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-300 shadow-sm"
                        >
                            <span>View All Rooms</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Room Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {rooms.slice(0, 3).map((room, index) => (
                        <motion.div
                            key={room.id}
                            variants={itemVariants}
                            className="group"
                        >
                            <Link href={`/rooms/${room.slug}`} className="block">
                                <div className="card-premium overflow-hidden">
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={room.image}
                                            alt={`${room.name} at Villa Mosta`}
                                            fill
                                            className="object-cover card-image-zoom"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        {/* Overlay badge */}
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full text-stone-800">
                                            From €{room.basePrice}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 sm:p-8">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Users className="w-4 h-4 text-[var(--color-accent)]" />
                                            <span className="text-xs font-medium uppercase tracking-wider text-stone-400">
                                                Up to {room.maxGuests} guests
                                            </span>
                                        </div>
                                        <h3 className="font-serif text-xl sm:text-2xl text-stone-800 mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                                            {room.name}
                                        </h3>
                                        <p className="text-stone-500 text-sm sm:text-base leading-relaxed mb-6">
                                            {room.description}
                                        </p>
                                        <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-stone-800 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                                            View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
