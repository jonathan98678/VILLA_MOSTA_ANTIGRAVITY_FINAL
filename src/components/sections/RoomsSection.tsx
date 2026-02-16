"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Users, ArrowRight } from "lucide-react";

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
        description: "Spacious room with 1 large double bed and private terrace with stunning views of the Mosta Rotunda.",
        basePrice: 85,
        maxGuests: 4,
        image: "/images/villa/room-3.jpg",
    },
    {
        id: "2",
        slug: "deluxe-double-shower",
        name: "Deluxe Double Room with Shower",
        description: "Elegant room with 1 double bed, modern amenities and a beautifully appointed shower room.",
        basePrice: 65,
        maxGuests: 2,
        image: "/images/villa/room-1.jpg",
    },
    {
        id: "3",
        slug: "double-twin-garden-view",
        name: "Double or Twin Room with Garden View",
        description: "Charming room with 1 large double bed and a lovely garden view. Perfect for couples.",
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

export function RoomsSection({
    title = "Our Rooms",
    subtitle = "Three unique spaces, each designed with comfort and authentic Maltese character.",
    rooms = defaultRooms,
    className,
}: RoomsSectionProps) {
    const sectionRef = React.useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="rooms"
            className={cn("py-20 sm:py-24 md:py-32 bg-[var(--color-warm-cream)]", className)}
        >
            <div className="container">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-16">
                    <span
                        className={cn(
                            "block text-[10px] sm:text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-accent)] mb-3 sm:mb-4",
                            "transition-all duration-700",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                    >
                        ACCOMMODATIONS
                    </span>
                    <h2
                        className={cn(
                            "font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-800 mb-4 sm:mb-5",
                            "transition-all duration-700 delay-100",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        {title}
                    </h2>

                    {/* Maltese divider */}
                    <div
                        className={cn(
                            "flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6 transition-all duration-700 delay-150",
                            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        )}
                    >
                        <div className="h-px w-8 sm:w-10 bg-gradient-to-r from-transparent to-[var(--color-honey)]" />
                        <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-honey)]" />
                        <div className="h-px w-8 sm:w-10 bg-gradient-to-l from-transparent to-[var(--color-honey)]" />
                    </div>

                    <p
                        className={cn(
                            "text-[var(--color-text-muted)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto",
                            "transition-all duration-700 delay-200",
                            isVisible ? "opacity-100" : "opacity-0"
                        )}
                    >
                        {subtitle}
                    </p>
                </div>

                {/* Rooms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                    {rooms.map((room, index) => (
                        <Link
                            key={room.id}
                            href={`/rooms/${room.slug}`}
                            className={cn(
                                "group block bg-white overflow-hidden",
                                "transition-all duration-700 hover:shadow-xl hover:shadow-stone-200/50",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            )}
                            style={{ transitionDelay: `${300 + index * 120}ms` }}
                        >
                            {/* Image with zoom hover */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={room.image}
                                    alt={room.name}
                                    fill
                                    className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                {/* Price badge */}
                                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 shadow-sm">
                                    <span className="font-serif text-lg sm:text-xl text-stone-800">€{room.basePrice}</span>
                                    <span className="text-[var(--color-text-muted)] text-xs sm:text-sm ml-1">/ night</span>
                                </div>
                                {/* Bottom gradient */}
                                <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-black/15 to-transparent" />
                            </div>

                            {/* Info */}
                            <div className="p-5 sm:p-6 md:p-7">
                                <div className="flex items-center justify-between mb-2 sm:mb-3">
                                    <h3 className="font-serif text-lg sm:text-xl text-stone-800 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                                        {room.name}
                                    </h3>
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-stone-300 group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-300" />
                                </div>

                                <p className="text-[var(--color-text-muted)] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                                    {room.description}
                                </p>

                                {/* Meta */}
                                <div className="flex items-center gap-1.5 text-stone-400 text-xs sm:text-sm">
                                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    <span>Up to {room.maxGuests} guests</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All */}
                <div className={cn(
                    "text-center mt-10 sm:mt-14 transition-all duration-700 delay-700",
                    isVisible ? "opacity-100" : "opacity-0"
                )}>
                    <Link
                        href="/rooms"
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-stone-300 text-stone-700 text-[10px] sm:text-xs font-medium tracking-[0.1em] uppercase hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-400"
                    >
                        <span>View All Rooms</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
