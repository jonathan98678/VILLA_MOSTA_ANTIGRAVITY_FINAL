import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
    title: "The Villa",
    description: "Discover Villa Mosta - a boutique Mediterranean retreat where timeless elegance meets authentic hospitality.",
};

export default function VillaPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <HeroSection
                    title="The Villa"
                    subtitle="Our Story"
                    description="A passion project born from a love of Mediterranean beauty, thoughtful design, and the art of true hospitality."
                    showScrollIndicator={true}
                />

                {/* The Story */}
                <AboutSection
                    overline="OUR STORY"
                    title="Built on a dream of sharing something beautiful"
                    description={[
                        "Villa Mosta began as a vision—to create a space where travelers could experience the Mediterranean not as tourists, but as welcomed guests in a home filled with history and heart.",
                        "Every stone, every olive tree, every handcrafted detail was chosen with intention. We renovated this historic property over three years, working with local artisans to preserve its soul while introducing the comforts modern travelers deserve.",
                        "Today, Villa Mosta stands as a testament to slow living, mindful design, and the belief that a truly great stay should feel less like a hotel and more like coming home.",
                    ]}
                />

                {/* Features */}
                <FeaturesSection
                    overline="WHAT MAKES US DIFFERENT"
                    title="The Villa Mosta difference"
                    description="We believe luxury isn't about excess—it's about intention. Every element of Villa Mosta has been designed to create meaningful moments."
                    features={[
                        {
                            title: "Artisan Heritage",
                            description: "Original stone walls, hand-carved wooden beams, and locally crafted furniture tell the story of generations of Mediterranean craftsmanship.",
                            image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
                        },
                        {
                            title: "Sustainable Luxury",
                            description: "Solar-heated pools, organic gardens, and partnerships with local producers allow us to offer luxury that respects the land.",
                            image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=80",
                        },
                        {
                            title: "Personal Touch",
                            description: "With just four rooms, we know every guest by name. Your preferences, your celebrations, your needs—we remember them all.",
                            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
                        },
                    ]}
                />

                {/* Specifications / Amenities */}
                <section className="section bg-cream-200">
                    <div className="container">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <span className="text-overline text-text-muted block mb-4">
                                VILLA AMENITIES
                            </span>
                            <h2 className="font-serif text-heading-1 text-text mb-6">
                                Everything you need, nothing you don&apos;t
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {[
                                "Private Pool",
                                "Mediterranean Gardens",
                                "Farm-to-Table Breakfast",
                                "Complimentary Wine Tasting",
                                "High-Speed WiFi",
                                "Air Conditioning",
                                "Daily Housekeeping",
                                "Concierge Service",
                                "Private Parking",
                                "Library & Games",
                                "Outdoor Terrace",
                                "BBQ Facilities",
                            ].map((amenity) => (
                                <div
                                    key={amenity}
                                    className="text-center py-6 px-4 bg-cream-100 rounded-lg"
                                >
                                    <span className="text-body text-text">{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <CTASection
                    title="Ready to experience the villa?"
                    subtitle="Book your room and become part of the Villa Mosta story."
                    buttonText="View Rooms"
                    buttonHref="/rooms"
                />
            </main>
            <Footer />
        </>
    );
}
