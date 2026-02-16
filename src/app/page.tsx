import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CTASection } from "@/components/sections/CTASection";

import { getRooms } from "@/lib/db";

export default async function HomePage() {
    const dbRooms = await getRooms();

    // Limit to 3 rooms for homepage if needed, or just map all
    const rooms = dbRooms.slice(0, 3).map(room => ({
        id: room.id,
        slug: room.slug,
        name: room.name,
        description: room.short_description || room.long_description[0] || "",
        basePrice: room.base_price,
        maxGuests: room.max_guests,
        image: room.images[0] || "/images/placeholder.jpg",
    }));

    return (
        <>
            <Header />
            <main>
                {/* Hero with YouTube video of Mosta Rotunda */}
                <HeroSection
                    title="VILLA MOSTA"
                    subtitle="A Traditional Maltese Home"
                    description="Experience authentic Maltese hospitality in the heart of Mosta."
                    videoId="9mg8FOQi6bI"
                    videoStart={122}
                />

                {/* Intro */}
                <IntroSection />

                {/* Rooms - using different images */}
                <RoomsSection rooms={rooms} />

                {/* Reviews */}
                <ReviewsSection />

                {/* CTA */}
                <CTASection backgroundImage="/images/villa/terrace.jpg" />
            </main>
            <Footer />
        </>
    );
}
