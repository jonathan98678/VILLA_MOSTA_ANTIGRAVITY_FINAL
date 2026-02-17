import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { CTASection } from "@/components/sections/CTASection";
import { getRooms } from "@/lib/db";
import Link from "next/link";
import { Wifi, Wind, Tv, Coffee, UtensilsCrossed, Sun, Droplets, Shirt } from "lucide-react";

export const metadata = {
    title: "Our Rooms | Villa Mosta",
    description: "Explore our three unique rooms at Villa Mosta: a Family Room with Terrace, Deluxe Double with Shower, and Double/Twin with Garden View. Rated 9.4 on Booking.com.",
};

export default async function RoomsPage() {
    let dbRooms: Awaited<ReturnType<typeof getRooms>> = [];
    try {
        dbRooms = await getRooms();
    } catch (e) {
        console.error("Failed to fetch rooms:", e);
    }

    const rooms = dbRooms.map(room => ({
        id: room.id,
        name: room.name,
        slug: room.slug,
        description: room.short_description || room.long_description[0] || "",
        basePrice: room.base_price,
        maxGuests: room.max_guests,
        features: room.features,
        image: room.images[0] || "/images/placeholder.jpg",
    }));

    const amenities = [
        { name: "Free WiFi", icon: <Wifi className="w-5 h-5" /> },
        { name: "Air Conditioning", icon: <Wind className="w-5 h-5" /> },
        { name: "Flat-screen TV", icon: <Tv className="w-5 h-5" /> },
        { name: "Electric Kettle", icon: <Coffee className="w-5 h-5" /> },
        { name: "Microwave & Fridge", icon: <UtensilsCrossed className="w-5 h-5" /> },
        { name: "Sun Terrace", icon: <Sun className="w-5 h-5" /> },
        { name: "Free Toiletries", icon: <Droplets className="w-5 h-5" /> },
        { name: "Hairdryer", icon: <Droplets className="w-5 h-5" /> },
        { name: "Ironing Facilities", icon: <Shirt className="w-5 h-5" /> },
    ];

    return (
        <>
            <Header />
            <main className="pt-20 min-h-screen">
                {/* Hero Section */}
                <section className="page-hero text-center">
                    <div className="container max-w-3xl mx-auto">
                        <span className="section-overline text-amber-400">
                            ACCOMMODATIONS
                        </span>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                            Our Rooms
                        </h1>
                        <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto">
                            Three unique spaces, each designed with comfort and authentic Maltese character.
                        </p>
                    </div>
                </section>

                {/* Rooms Grid */}
                <RoomsSection
                    title=""
                    subtitle=""
                    rooms={rooms.length > 0 ? rooms : undefined}
                />

                {/* What's Included */}
                <section className="section bg-white">
                    <div className="container max-w-4xl mx-auto text-center">
                        <span className="section-overline">AMENITIES</span>
                        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-800 mb-4">
                            What&apos;s included in every room
                        </h2>
                        <p className="text-base sm:text-lg text-stone-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Every room at Villa Mosta includes essential amenities for a comfortable
                            and authentic Maltese stay.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {amenities.map((item) => (
                                <div
                                    key={item.name}
                                    className="card-premium p-5 flex flex-col items-center gap-3 text-center"
                                >
                                    <span className="text-[var(--color-accent)]">{item.icon}</span>
                                    <span className="text-sm font-medium text-stone-700">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* House Rules Info */}
                <section className="section bg-[var(--color-warm-cream)]">
                    <div className="container max-w-3xl mx-auto text-center">
                        <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-4">
                            Good to know
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
                            <div className="card-premium p-5">
                                <h3 className="text-sm font-semibold text-stone-800 mb-2">Check-in / Check-out</h3>
                                <p className="text-sm text-stone-500">Check-in: 14:00 to 20:00<br />Check-out: 07:00 to 11:00</p>
                            </div>
                            <div className="card-premium p-5">
                                <h3 className="text-sm font-semibold text-stone-800 mb-2">Air Conditioning</h3>
                                <p className="text-sm text-stone-500">Coin-operated: 1 EUR for 3 to 5 hours of cooling.</p>
                            </div>
                            <div className="card-premium p-5">
                                <h3 className="text-sm font-semibold text-stone-800 mb-2">Child Friendly</h3>
                                <p className="text-sm text-stone-500">Children of any age welcome. Cots available for 0 to 2 years (free).</p>
                            </div>
                            <div className="card-premium p-5">
                                <h3 className="text-sm font-semibold text-stone-800 mb-2">License</h3>
                                <p className="text-sm text-stone-500">License number: 61700A. Damage deposit: up to 200 EUR.</p>
                            </div>
                        </div>
                        <Link
                            href="/faq"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:underline"
                        >
                            View all FAQ &rarr;
                        </Link>
                    </div>
                </section>

                {/* CTA */}
                <CTASection backgroundImage="/images/villa/terrace.jpg" />
            </main>
            <Footer />
        </>
    );
}
