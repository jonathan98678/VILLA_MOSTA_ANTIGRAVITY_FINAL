"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Users, ArrowRight, Maximize } from "lucide-react";
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
    {
        id: "4", // Placeholder for layout balance if needed, or we just utilize the 3 real ones creatively
        slug: "master-suite",
        name: "The Master Suite",
        description: "The ultimate luxury experience with panoramic views and premium furnishings.",
        basePrice: 120,
        maxGuests: 2,
        image: "/images/villa/room-3.jpg",
    }
];

// We only have 3 real rooms, so let's use them wisely in a grid that supports 3 items beautifully
const realRooms = defaultRooms.slice(0, 3);

interface RoomsSectionProps {
    title?: string;
    subtitle?: string;
    rooms?: Room[];
    className?: string;
}

export function RoomsSection({
    title = "Curated Accommodations",
    subtitle = "Designed for comfort, styled with authentic Maltese character.",
    rooms = realRooms,
    className,
}: RoomsSectionProps) {
    return (
        <section
            id="rooms"
            className={cn("py-20 sm:py-24 md:py-32 bg-stone-100", className)}
        >
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 gap-6">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="block text-[10px] sm:text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-accent)] mb-4"
                        >
                            YOUR STAY
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 leading-tight"
                        >
                            {title}
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/rooms"
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-white border border-stone-200 rounded-full text-xs font-medium tracking-[0.1em] uppercase hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 shadow-sm"
                        >
                            <span>View All Rooms</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Versatile Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                    {/* First Large Item - Spans 8 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-8 group relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <Link href={`/rooms/${rooms[0].slug}`} className="block h-full w-full">
                            <Image
                                src={rooms[0].image}
                                alt={rooms[0].name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white">
                                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-2">{rooms[0].name}</h3>
                                <p className="text-white/80 max-w-md text-sm sm:text-base mb-4 line-clamp-2">{rooms[0].description}</p>
                                <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider border border-white/30 rounded-full px-4 py-2 backdrop-blur-md">
                                    <span>From €{rooms[0].basePrice}</span>
                                    <span className="w-1 h-1 bg-white rounded-full" />
                                    <span>{rooms[0].maxGuests} Guests</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Second Item - Spans 4 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-4 group relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <Link href={`/rooms/${rooms[1].slug}`} className="block h-full w-full">
                            <Image
                                src={rooms[1].image}
                                alt={rooms[1].name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white">
                                <h3 className="font-serif text-xl sm:text-2xl mb-2">{rooms[1].name}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg">€{rooms[1].basePrice} <span className="text-sm text-white/70">/ night</span></span>
                                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Third Item - Spans Full Width or specific cols - Let's do a wide banner style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-12 group relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden cursor-pointer mt-0 lg:mt-2"
                    >
                        <Link href={`/rooms/${rooms[2].slug}`} className="block h-full w-full flex flex-col md:flex-row bg-white">
                            <div className="w-full md:w-1/2 h-full relative">
                                <Image
                                    src={rooms[2].image}
                                    alt={rooms[2].name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-4">
                                    <Users className="w-4 h-4 text-[var(--color-accent)]" />
                                    <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">Up to {rooms[2].maxGuests} guests</span>
                                </div>
                                <h3 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-4">{rooms[2].name}</h3>
                                <p className="text-stone-600 mb-6 max-w-md">{rooms[2].description}</p>
                                <div className="flex items-center gap-4">
                                    <span className="font-serif text-2xl text-[var(--color-accent)]">€{rooms[2].basePrice}</span>
                                    <span className="w-px h-8 bg-stone-200" />
                                    <span className="flex items-center gap-2 text-stone-800 font-medium group-hover:text-[var(--color-accent)] transition-colors">
                                        View Details <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
