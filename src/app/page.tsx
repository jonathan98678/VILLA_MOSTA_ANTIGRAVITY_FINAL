import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
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
                <RoomsSection />

                {/* Reviews */}
                <ReviewsSection />

                {/* CTA */}
                <CTASection backgroundImage="/images/villa/terrace.jpg" />
            </main>
            <Footer />
        </>
    );
}
