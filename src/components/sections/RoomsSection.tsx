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
        description: "Spacious room with private rooftop terrace and stunning views of the Mosta Rotunda.",
        basePrice: 85,
        maxGuests: 4,
        image: "/images/villa/room-3.jpg",
    },
    {
        id: "2",
        slug: "deluxe-double",
        name: "Deluxe Double Room",
        description: "Elegant double room with modern amenities and beautifully appointed bathroom.",
        basePrice: 65,
        maxGuests: 2,
        image: "/images/villa/room-1.jpg",
    },
    {
        id: "3",
        slug: "cozy-double",
        name: "Cozy Double Room",
        description: "A charming room with comfortable double bed, perfect for couples.",
        basePrice: 60,
        maxGuests: 2,
        image: "/images/villa/room-2.jpg",
    },
    {
        id: "4",
        slug: "terrace-suite",
        name: "Terrace Suite",
        description: "Our premium suite with direct access to the rooftop terrace and panoramic views.",
        basePrice: 95,
        maxGuests: 3,
        image: "/images/villa/terrace-view.jpg",
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
    subtitle = "Each room has been thoughtfully designed to offer comfort, character, and authentic Maltese hospitality.",
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
            className={cn("py-20 md:py-28 bg-stone-100", className)}
        >
            <div className="container">
                {/* Header */}
                <div className="text-center mb-14">
                    <span
                        className={cn(
                            "block text-xs font-semibold tracking-[0.2em] uppercase text-amber-700 mb-3",
                            "transition-all duration-700",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                    >
                        ACCOMMODATIONS
                    </span>
                    <h2
                        className={cn(
                            "font-serif text-3xl md:text-4xl lg:text-5xl text-stone-800 mb-4",
                            "transition-all duration-700 delay-100",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        {title}
                    </h2>
                    <p
                        className={cn(
                            "text-stone-600 text-lg max-w-2xl mx-auto",
                            "transition-all duration-700 delay-200",
                            isVisible ? "opacity-100" : "opacity-0"
                        )}
                    >
                        {subtitle}
                    </p>
                </div>

                {/* Rooms Grid - 2x2 layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {rooms.map((room, index) => (
                        <Link
                            key={room.id}
                            href={`/rooms/${room.slug}`}
                            className={cn(
                                "group block bg-white overflow-hidden",
                                "transition-all duration-700 hover:shadow-xl",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            )}
                            style={{ transitionDelay: `${300 + index * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={room.image}
                                    alt={room.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Price badge */}
                                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2">
                                    <span className="font-serif text-xl text-stone-800">€{room.basePrice}</span>
                                    <span className="text-stone-500 text-sm"> / night</span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-serif text-xl text-stone-800 group-hover:text-amber-700 transition-colors">
                                        {room.name}
                                    </h3>
                                    <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all" />
                                </div>

                                <p className="text-stone-500 text-sm mb-4">
                                    {room.description}
                                </p>

                                {/* Meta */}
                                <div className="flex items-center gap-1.5 text-stone-400 text-sm">
                                    <Users className="w-4 h-4" />
                                    <span>Up to {room.maxGuests} guests</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All */}
                <div className={cn(
                    "text-center mt-12 transition-all duration-700 delay-700",
                    isVisible ? "opacity-100" : "opacity-0"
                )}>
                    <Link
                        href="/rooms"
                        className="inline-flex items-center gap-2 text-stone-700 font-medium hover:text-amber-700 transition-colors"
                    >
                        <span>View All Rooms</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
