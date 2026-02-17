"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookButton } from "@/components/ui/BookButton";
import { cn } from "@/lib/utils";
import { Users, ChevronLeft, ChevronRight, Wifi, Wind, Tv, Coffee, UtensilsCrossed, Sun, Shirt, BedDouble } from "lucide-react";

const roomsData: Record<string, {
    id: string;
    name: string;
    description: string;
    longDescription: string[];
    basePrice: number;
    maxGuests: number;
    bedType: string;
    features: string[];
    images: string[];
}> = {
    "family-room-terrace": {
        id: "1",
        name: "Family Room with Terrace",
        description: "A spacious retreat for families with a private terrace overlooking the Mosta Rotunda.",
        longDescription: [
            "Our largest room is perfect for families or groups of up to four guests. The Family Room features two comfortable beds and direct access to a private terrace with stunning views of the Mosta Rotunda, one of the largest unsupported church domes in Europe.",
            "Wake up to morning light flooding through the windows, step out onto your terrace for breakfast, and enjoy the peaceful atmosphere of traditional Maltese architecture. The room is equipped with all modern comforts while retaining its authentic character.",
            "Children are especially welcome. We provide safety gates and socket covers throughout the property. Cots are available for children aged 0 to 2 years, free of charge.",
        ],
        basePrice: 85,
        maxGuests: 4,
        bedType: "1 Double + 2 Singles",
        features: [
            "Private Terrace",
            "Rotunda Views",
            "Free WiFi",
            "Air Conditioning",
            "Flat-screen TV",
            "Electric Kettle",
            "Microwave & Fridge",
            "Hairdryer",
            "Free Toiletries",
            "Child Friendly",
        ],
        images: [
            "/images/villa/room-3.jpg",
            "/images/villa/terrace.jpg",
            "/images/villa/hero-rotunda.jpg",
        ],
    },
    "deluxe-double-shower": {
        id: "2",
        name: "Deluxe Double Room",
        description: "Elegant comfort with modern amenities and a beautifully appointed en-suite shower room.",
        longDescription: [
            "The Deluxe Double Room offers a perfect balance of traditional Maltese charm and modern comfort. Featuring a comfortable double bed with quality linens, this room is ideal for couples or solo travelers seeking a premium experience.",
            "The en-suite shower room is modern and well-equipped with complimentary toiletries and a hairdryer. Every detail has been considered to ensure a comfortable stay.",
            "Relax after a day exploring Malta with streaming services on the flat-screen TV, or prepare a hot drink using the complimentary coffee, sugar, and electric kettle provided in the room.",
        ],
        basePrice: 65,
        maxGuests: 2,
        bedType: "1 Double Bed",
        features: [
            "En-suite Shower",
            "Free WiFi",
            "Air Conditioning",
            "Flat-screen TV",
            "Streaming Services",
            "Electric Kettle",
            "Microwave & Fridge",
            "Hairdryer",
            "Free Toiletries",
            "Ironing Facilities",
        ],
        images: [
            "/images/villa/room-1.jpg",
            "/images/villa/hero-rotunda.jpg",
        ],
    },
    "double-twin-garden-view": {
        id: "3",
        name: "Garden View Double",
        description: "A charming retreat overlooking the lush garden, perfect for a peaceful getaway.",
        longDescription: [
            "The Garden View Double is a peaceful haven that overlooks the property's lush garden. This room offers a serene setting for guests who value quiet and privacy, with natural light and garden views creating a calming atmosphere.",
            "The room can be configured with either a double bed or two single beds, making it versatile for couples or friends traveling together. Like all rooms at Villa Mosta, it comes fully equipped with modern amenities.",
            "Enjoy the tranquility of your garden outlook while being just steps away from the vibrant town center of Mosta, with its charming cafes, shops, and the magnificent Rotunda.",
        ],
        basePrice: 60,
        maxGuests: 2,
        bedType: "1 Double or 2 Singles",
        features: [
            "Garden View",
            "Flexible Bed Config",
            "Free WiFi",
            "Air Conditioning",
            "Flat-screen TV",
            "Electric Kettle",
            "Microwave & Fridge",
            "Hairdryer",
            "Free Toiletries",
            "Drying Rack",
        ],
        images: [
            "/images/villa/room-2.jpg",
            "/images/villa/terrace.jpg",
        ],
    },
};

const featureIcons: Record<string, React.ReactNode> = {
    "Free WiFi": <Wifi className="w-4 h-4" />,
    "Air Conditioning": <Wind className="w-4 h-4" />,
    "Flat-screen TV": <Tv className="w-4 h-4" />,
    "Streaming Services": <Tv className="w-4 h-4" />,
    "Electric Kettle": <Coffee className="w-4 h-4" />,
    "Microwave & Fridge": <UtensilsCrossed className="w-4 h-4" />,
    "Ironing Facilities": <Shirt className="w-4 h-4" />,
    "Drying Rack": <Shirt className="w-4 h-4" />,
};

interface RoomPageProps {
    params: Promise<{ slug: string }>;
}

export default function RoomPage({ params }: RoomPageProps) {
    const resolvedParams = React.use(params);
    const room = roomsData[resolvedParams.slug];

    const [activeImageIndex, setActiveImageIndex] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

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
            <main className="pt-20 min-h-screen">
                {/* Breadcrumb */}
                <div className="container py-4">
                    <nav aria-label="Breadcrumb" className="text-sm text-stone-400">
                        <Link href="/" className="hover:text-stone-800 transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/rooms" className="hover:text-stone-800 transition-colors">Rooms</Link>
                        <span className="mx-2">/</span>
                        <span className="text-stone-800">{room.name}</span>
                    </nav>
                </div>

                {/* Image Gallery */}
                <section className="relative h-[50vh] sm:h-[60vh] min-h-[400px] bg-stone-100">
                    <Image
                        src={room.images[activeImageIndex]}
                        alt={`${room.name} at Villa Mosta, image ${activeImageIndex + 1}`}
                        fill
                        className="object-cover transition-opacity duration-500"
                        priority
                        sizes="100vw"
                    />

                    {/* Gallery Navigation */}
                    {room.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-5 h-5 text-stone-800" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-5 h-5 text-stone-800" />
                            </button>

                            {/* Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {room.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImageIndex(index)}
                                        className={cn(
                                            "h-2 rounded-full transition-all duration-300",
                                            index === activeImageIndex
                                                ? "bg-white w-8 shadow-md"
                                                : "bg-white/50 w-2 hover:bg-white/80"
                                        )}
                                        aria-label={`View image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </section>

                {/* Room Details */}
                <section className="section bg-[var(--color-warm-cream)]">
                    <div className="container max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <span
                                    className={cn(
                                        "section-overline transition-all duration-700",
                                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    )}
                                >
                                    ACCOMMODATION
                                </span>
                                <h1
                                    className={cn(
                                        "font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 mb-6 transition-all duration-700 delay-100",
                                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                    )}
                                >
                                    {room.name}
                                </h1>

                                {/* Meta badges */}
                                <div className="flex flex-wrap gap-3 mb-8">
                                    <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm text-stone-600 border border-stone-100">
                                        <Users className="w-4 h-4 text-[var(--color-accent)]" />
                                        Up to {room.maxGuests} guests
                                    </span>
                                    <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm text-stone-600 border border-stone-100">
                                        <BedDouble className="w-4 h-4 text-[var(--color-accent)]" />
                                        {room.bedType}
                                    </span>
                                    <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm text-stone-600 border border-stone-100">
                                        <Sun className="w-4 h-4 text-[var(--color-accent)]" />
                                        {room.features[0]}
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="space-y-5 mb-12">
                                    {room.longDescription.map((paragraph, index) => (
                                        <p key={index} className="text-base sm:text-lg text-stone-600 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Features Grid */}
                                <div>
                                    <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-6">
                                        Room Amenities
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {room.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-stone-100 text-sm text-stone-700"
                                            >
                                                <span className="text-[var(--color-accent)]">
                                                    {featureIcons[feature] || <span className="w-4 h-4 block rounded-full bg-amber-100" />}
                                                </span>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Booking Card */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-28 card-premium p-7 sm:p-8">
                                    <div className="mb-6">
                                        <span className="text-sm text-stone-400">From</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="font-serif text-4xl text-stone-800">
                                                &euro;{room.basePrice}
                                            </span>
                                            <span className="text-base text-stone-400">/ night</span>
                                        </div>
                                    </div>

                                    <BookButton variant="primary" size="lg" href={`/book?room=${resolvedParams.slug}`} className="w-full mb-4">
                                        Book This Room
                                    </BookButton>

                                    <Link
                                        href="/contact"
                                        className="block w-full text-center px-6 py-3.5 border border-stone-200 text-stone-700 text-sm font-medium rounded-full hover:bg-stone-50 transition-colors"
                                    >
                                        Ask a Question
                                    </Link>

                                    <p className="text-xs text-stone-400 text-center mt-5 leading-relaxed">
                                        Cancellation and prepayment policies vary by accommodation type. Check conditions when making your selection.
                                    </p>

                                    {/* Maltese divider */}
                                    <div className="maltese-divider my-6" />

                                    <div className="text-center">
                                        <p className="text-xs text-stone-400 mb-1">License number</p>
                                        <p className="text-sm font-medium text-stone-600">61700A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Rooms */}
                <section className="section bg-white">
                    <div className="container max-w-4xl mx-auto text-center">
                        <span className="section-overline">EXPLORE MORE</span>
                        <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-8">
                            Other Rooms
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {Object.entries(roomsData)
                                .filter(([slug]) => slug !== resolvedParams.slug)
                                .map(([slug, otherRoom]) => (
                                    <Link
                                        key={slug}
                                        href={`/rooms/${slug}`}
                                        className="group card-premium p-5 text-left flex-1"
                                    >
                                        <h3 className="font-serif text-lg text-stone-800 mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                                            {otherRoom.name}
                                        </h3>
                                        <p className="text-sm text-stone-400">From &euro;{otherRoom.basePrice} / night</p>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
