import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RoomsSection } from "@/components/sections/RoomsSection";

export const metadata = {
    title: "Our Rooms",
    description: "Explore our thoughtfully designed accommodations at Villa Mosta. Each room offers a unique Mediterranean experience.",
};

// This would be fetched from Supabase in production
const rooms = [
    {
        id: "1",
        name: "The Terrace Suite",
        slug: "terrace-suite",
        description: "A spacious retreat with private terrace overlooking the Mediterranean, featuring floor-to-ceiling windows, a king-size bed, and stunning sunset views.",
        basePrice: 280,
        maxGuests: 2,
        features: ["Private Terrace", "Sea View", "King Bed", "En-suite Bath", "Mini Bar", "Air Conditioning"],
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    },
    {
        id: "2",
        name: "The Garden Room",
        slug: "garden-room",
        description: "Nestled among olive trees, this ground-floor room offers direct garden access, a queen bed, and a serene atmosphere perfect for peaceful mornings.",
        basePrice: 220,
        maxGuests: 2,
        features: ["Garden Access", "Queen Bed", "Rainfall Shower", "Workspace", "Coffee Machine"],
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    },
    {
        id: "3",
        name: "The Sunset Chamber",
        slug: "sunset-chamber",
        description: "West-facing windows capture golden hour perfectly. Features traditional stone walls, modern luxuries, and a private balcony for evening relaxation.",
        basePrice: 260,
        maxGuests: 3,
        features: ["Sunset Views", "King Bed", "Sofa Bed", "Private Balcony", "Bathtub"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    },
    {
        id: "4",
        name: "The Heritage Room",
        slug: "heritage-room",
        description: "Our most intimate room celebrates the villa's history with original stone features, antique furnishings, and modern comforts for a unique stay.",
        basePrice: 200,
        maxGuests: 2,
        features: ["Historic Features", "Queen Bed", "En-suite Shower", "Courtyard View"],
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    },
];

export default function RoomsPage() {
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
                            Four unique spaces, each designed with intention. Choose your sanctuary.
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
