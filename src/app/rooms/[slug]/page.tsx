"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Users, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

// This would be fetched from Supabase in production
const roomsData: Record<string, {
    id: string;
    name: string;
    description: string;
    longDescription: string[];
    basePrice: number;
    maxGuests: number;
    size: string;
    features: string[];
    images: string[];
}> = {
    "terrace-suite": {
        id: "1",
        name: "The Terrace Suite",
        description: "A spacious retreat with private terrace overlooking the Mediterranean.",
        longDescription: [
            "The Terrace Suite is our crown jewel—a generous 45m² space designed for those who appreciate waking up to the sound of birdsong and the sight of the Mediterranean stretching to the horizon.",
            "Floor-to-ceiling windows flood the room with natural light, while the private terrace offers the perfect setting for morning coffee or evening aperitivos. The king-size bed features premium linens, and the en-suite bathroom includes both a rainfall shower and a deep soaking tub.",
            "Every detail has been considered, from the locally crafted furniture to the curated selection of books and local wines awaiting your arrival.",
        ],
        basePrice: 280,
        maxGuests: 2,
        size: "45m²",
        features: [
            "Private Terrace",
            "Mediterranean Sea View",
            "King-Size Bed",
            "En-suite Bathroom",
            "Rainfall Shower",
            "Soaking Tub",
            "Mini Bar",
            "Nespresso Machine",
            "Air Conditioning",
            "Complimentary WiFi",
            "Smart TV",
            "Safe",
        ],
        images: [
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
        ],
    },
    "garden-room": {
        id: "2",
        name: "The Garden Room",
        description: "Nestled among olive trees with direct garden access.",
        longDescription: [
            "The Garden Room offers an intimate connection with nature. Step directly from your private terrace into our Mediterranean garden, where ancient olive trees and fragrant herbs create a peaceful sanctuary.",
            "At 35m², this ground-floor retreat features a comfortable queen bed, a dedicated workspace for those who need to stay connected, and an en-suite bathroom with a luxurious rainfall shower.",
            "Mornings here are magical—enjoy your breakfast on the terrace while watching the garden come alive with butterflies and birdsong.",
        ],
        basePrice: 220,
        maxGuests: 2,
        size: "35m²",
        features: [
            "Direct Garden Access",
            "Private Terrace",
            "Queen-Size Bed",
            "En-suite Bathroom",
            "Rainfall Shower",
            "Workspace",
            "Nespresso Machine",
            "Air Conditioning",
            "Complimentary WiFi",
            "Smart TV",
        ],
        images: [
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
            "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200&q=80",
        ],
    },
    "sunset-chamber": {
        id: "3",
        name: "The Sunset Chamber",
        description: "West-facing room with golden hour views and balcony.",
        longDescription: [
            "Named for its unparalleled sunset views, the Sunset Chamber captures the magic of Mediterranean evenings. West-facing windows frame the sky as it transforms from blue to gold to rose each evening.",
            "This 40m² room combines original stone walls with modern luxuries. The king-size bed ensures restful sleep, while a comfortable sofa bed makes this room suitable for families or small groups.",
            "The private balcony is the perfect spot to end each day—glass of local wine in hand, watching the sun dip below the horizon.",
        ],
        basePrice: 260,
        maxGuests: 3,
        size: "40m²",
        features: [
            "Sunset Views",
            "Private Balcony",
            "King-Size Bed",
            "Sofa Bed",
            "En-suite Bathroom",
            "Bathtub",
            "Original Stone Walls",
            "Mini Bar",
            "Nespresso Machine",
            "Air Conditioning",
            "Complimentary WiFi",
            "Smart TV",
        ],
        images: [
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
            "https://images.unsplash.com/photo-1598928506311-c55ez89a2cc8?w=1200&q=80",
        ],
    },
    "heritage-room": {
        id: "4",
        name: "The Heritage Room",
        description: "Our most intimate room celebrating the villa's history.",
        longDescription: [
            "The Heritage Room is a love letter to the villa's past. Original stone features, restored antique furnishings, and carefully preserved architectural details create a space that feels both historic and welcoming.",
            "At 28m², this is our most intimate accommodation—perfect for solo travelers or couples seeking a cozy, characterful retreat. The queen bed is positioned to catch the morning light through the courtyard-facing window.",
            "Despite its historic charm, modern comforts abound: climate control, high-speed WiFi, and a beautifully appointed en-suite bathroom ensure your stay is as comfortable as it is atmospheric.",
        ],
        basePrice: 200,
        maxGuests: 2,
        size: "28m²",
        features: [
            "Historic Features",
            "Antique Furnishings",
            "Queen-Size Bed",
            "Courtyard View",
            "En-suite Bathroom",
            "Walk-in Shower",
            "Air Conditioning",
            "Complimentary WiFi",
            "Smart TV",
        ],
        images: [
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
            "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
        ],
    },
};

interface RoomPageProps {
    params: Promise<{ slug: string }>;
}

export default function RoomPage({ params }: RoomPageProps) {
    const resolvedParams = React.use(params);
    const room = roomsData[resolvedParams.slug];

    const [activeImageIndex, setActiveImageIndex] = React.useState(0);

    if (!room) {
        notFound();
    }

    const nextImage = () => {
        setActiveImageIndex((prev) => (prev + 1) % room.images.length);
    };

    const prevImage = () => {
        setActiveImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
    };

    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Breadcrumb */}
                <div className="container py-4">
                    <nav className="text-body-sm text-text-muted">
                        <Link href="/" className="hover:text-text transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/rooms" className="hover:text-text transition-colors">Rooms</Link>
                        <span className="mx-2">/</span>
                        <span className="text-text">{room.name}</span>
                    </nav>
                </div>

                {/* Image Gallery */}
                <section className="relative h-[60vh] min-h-[500px] bg-cream-200">
                    <Image
                        src={room.images[activeImageIndex]}
                        alt={`${room.name} - Image ${activeImageIndex + 1}`}
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Gallery Navigation */}
                    {room.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cream-100/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cream-100 transition-colors"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-6 h-6 text-stone" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cream-100/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cream-100 transition-colors"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-6 h-6 text-stone" />
                            </button>

                            {/* Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {room.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImageIndex(index)}
                                        className={cn(
                                            "w-2 h-2 rounded-full transition-all",
                                            index === activeImageIndex
                                                ? "bg-cream-100 w-6"
                                                : "bg-cream-100/50 hover:bg-cream-100/70"
                                        )}
                                        aria-label={`View image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </section>

                {/* Room Details */}
                <section className="section bg-cream-100">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <span className="text-overline text-text-muted block mb-4">
                                    ACCOMMODATION
                                </span>
                                <h1 className="font-serif text-display text-text mb-6">
                                    {room.name}
                                </h1>

                                {/* Meta */}
                                <div className="flex flex-wrap gap-6 mb-8 text-body text-text-muted">
                                    <span className="flex items-center gap-2">
                                        <Users className="w-5 h-5" />
                                        Up to {room.maxGuests} guests
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Maximize2 className="w-5 h-5" />
                                        {room.size}
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="prose-villa mb-12">
                                    {room.longDescription.map((paragraph, index) => (
                                        <p key={index} className="text-body-lg text-text-muted leading-relaxed mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Features */}
                                <div>
                                    <h2 className="font-serif text-heading-3 text-text mb-6">
                                        Room Amenities
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {room.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-3 text-body text-text"
                                            >
                                                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Booking Card */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-28 bg-cream-200 rounded-lg p-6">
                                    <div className="mb-6">
                                        <span className="text-body-sm text-text-muted">From</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="font-serif text-heading-2 text-text">
                                                €{room.basePrice}
                                            </span>
                                            <span className="text-body text-text-muted">/ night</span>
                                        </div>
                                    </div>

                                    <Button size="xl" asChild className="w-full mb-4">
                                        <Link href={`/book?room=${resolvedParams.slug}`}>
                                            Book This Room
                                        </Link>
                                    </Button>

                                    <Button variant="secondary" size="lg" asChild className="w-full">
                                        <Link href="/contact">
                                            Ask a Question
                                        </Link>
                                    </Button>

                                    <p className="text-caption text-text-muted text-center mt-4">
                                        Free cancellation up to 7 days before check-in
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
