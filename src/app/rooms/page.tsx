import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { getRooms } from "@/lib/db";

export const metadata = {
    title: "Our Rooms",
    description: "Explore our thoughtfully designed accommodations at Villa Mosta. Each room offers a unique Mediterranean experience.",
};

export default async function RoomsPage() {
    const dbRooms = await getRooms();

    // Map DB rooms to component expected format
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
                <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-stone">
                    <div className="container text-center text-cream-100">
                        <span className="text-overline text-cream-300 block mb-4">
                            ACCOMMODATIONS
                        </span>
                        <h1 className="font-serif text-display mb-4">Our Rooms</h1>
                        <p className="text-body-lg text-cream-200 max-w-2xl mx-auto">
                            Three unique spaces, each designed with intention. Choose your sanctuary.
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
                <section className="section bg-cream-100">
                    <div className="container max-w-3xl text-center">
                        <h2 className="font-serif text-heading-2 text-text mb-6">
                            What&apos;s included
                        </h2>
                        <p className="text-body-lg text-text-muted mb-8">
                            Every stay at Villa Mosta includes complimentary breakfast featuring
                            local and homemade products, daily housekeeping, high-speed WiFi,
                            access to our pool and gardens, and our dedicated concierge service.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Breakfast Included",
                                "Free WiFi",
                                "Pool Access",
                                "Daily Housekeeping",
                                "Concierge",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="bg-cream-200 text-text px-4 py-2 rounded-full text-body-sm"
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
