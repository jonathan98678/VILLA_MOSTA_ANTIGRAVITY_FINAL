import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { getRooms } from "@/lib/db";

export const metadata = {
    title: "Our Rooms",
    description: "Explore our three unique rooms at Villa Mosta — a Family Room with Terrace, Deluxe Double with Shower, and Double/Twin with Garden View.",
};

export default async function RoomsPage() {
    const dbRooms = await getRooms();

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

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-center justify-center bg-stone-800">
                    <div className="container text-center text-white px-4 sm:px-6">
                        <span className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-stone-400 block mb-3 sm:mb-4">
                            ACCOMMODATIONS
                        </span>
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4">Our Rooms</h1>
                        <p className="text-sm sm:text-base md:text-lg text-stone-300 max-w-2xl mx-auto">
                            Three unique spaces, each designed with comfort and authentic Maltese character.
                        </p>
                    </div>
                </section>

                {/* Rooms Grid */}
                <RoomsSection
                    title=""
                    subtitle=""
                    rooms={rooms}
                />

                {/* Info Section */}
                <section className="section bg-[var(--color-warm-cream)]">
                    <div className="container max-w-3xl text-center px-4 sm:px-6">
                        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-800 mb-4 sm:mb-6">
                            What&apos;s included
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-stone-500 mb-6 sm:mb-8 leading-relaxed">
                            Every room at Villa Mosta includes free WiFi, air conditioning (coin-operated),
                            flat-screen TV with streaming, electric kettle with complimentary coffee and sugar,
                            microwave, refrigerator, and access to our beautiful sun terrace.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                            {[
                                "Free WiFi",
                                "Air Conditioning",
                                "Flat-screen TV",
                                "Streaming",
                                "Electric Kettle",
                                "Microwave",
                                "Refrigerator",
                                "Sun Terrace",
                                "Toiletries",
                                "Hairdryer",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="bg-white text-stone-700 border border-stone-100 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium tracking-wide"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
