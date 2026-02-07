import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { MapPin, Car, Plane, Clock, Navigation } from "lucide-react";

export const metadata = {
    title: "Location",
    description: "Find Villa Mosta in the heart of Malta. Discover how to reach us and explore the surrounding area.",
};

// This would be fetched from Supabase in production
const transportOptions = [
    {
        title: "From Malta International Airport",
        description: "A scenic 20-minute drive through the Maltese countryside. We can arrange private transfers upon request.",
        icon: Plane,
        time: "20 min",
    },
    {
        title: "By Car",
        description: "Free private parking is available at the villa. GPS coordinates and detailed directions provided upon booking.",
        icon: Car,
        time: "Self-drive",
    },
    {
        title: "Public Transport",
        description: "Regular bus services connect Mosta to all major destinations. The nearest bus stop is a 5-minute walk.",
        icon: Navigation,
        time: "5 min walk",
    },
];

const nearbyAttractions = [
    { name: "Mosta Rotunda", distance: "5 min walk", description: "One of the largest church domes in Europe" },
    { name: "Valletta (Capital City)", distance: "20 min drive", description: "UNESCO World Heritage Site" },
    { name: "Mdina (Silent City)", distance: "10 min drive", description: "Ancient walled city" },
    { name: "Golden Bay Beach", distance: "15 min drive", description: "Sandy beach with crystal waters" },
    { name: "St. Julian's", distance: "15 min drive", description: "Vibrant nightlife and restaurants" },
    { name: "Blue Grotto", distance: "25 min drive", description: "Stunning sea caves" },
];

export default function LocationPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="section bg-stone text-cream-100">
                    <div className="container text-center">
                        <span className="text-overline text-cream-300 block mb-4">
                            FIND US
                        </span>
                        <h1 className="font-serif text-display mb-6">Location</h1>
                        <p className="text-body-lg text-cream-200 max-w-2xl mx-auto">
                            Nestled in the historic town of Mosta, Malta—perfectly positioned
                            to explore the island while enjoying peaceful seclusion.
                        </p>
                    </div>
                </section>

                {/* Map Section */}
                <section className="relative h-[400px] lg:h-[500px] bg-cream-200">
                    {/* Placeholder for Google Map - would integrate real map in production */}
                    <div className="absolute inset-0 flex items-center justify-center bg-cream-300">
                        <div className="text-center">
                            <MapPin className="w-16 h-16 text-stone mx-auto mb-4" />
                            <p className="text-body text-text-muted">
                                Interactive map would be displayed here
                            </p>
                            <p className="text-body-sm text-text-light mt-2">
                                Mosta, Malta
                            </p>
                        </div>
                    </div>

                    {/* Address Card Overlay */}
                    <div className="absolute bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-80 bg-cream-100 rounded-lg p-6 shadow-large">
                        <h3 className="font-serif text-heading-3 text-text mb-2">
                            Villa Mosta
                        </h3>
                        <p className="text-body text-text-muted mb-4">
                            123 Mediterranean Lane<br />
                            Mosta MST 1234<br />
                            Malta
                        </p>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-body font-medium text-stone hover:text-accent transition-colors"
                        >
                            <Navigation className="w-4 h-4" />
                            Get Directions
                        </a>
                    </div>
                </section>

                {/* Neighborhood Description */}
                <section className="section bg-cream-100">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <span className="text-overline text-text-muted block mb-4">
                                    THE NEIGHBORHOOD
                                </span>
                                <h2 className="font-serif text-heading-1 text-text mb-6">
                                    The heart of Malta
                                </h2>
                                <div className="space-y-4 text-body-lg text-text-muted">
                                    <p>
                                        Mosta sits at the geographical center of Malta, making it the
                                        perfect base for exploring the entire island. This charming town
                                        is famous for its impressive Rotunda—one of the largest unsupported
                                        church domes in the world.
                                    </p>
                                    <p>
                                        Beyond the architecture, you'll find authentic local life: morning
                                        markets, family-run restaurants serving traditional Maltese cuisine,
                                        and friendly neighbors who still greet each other by name.
                                    </p>
                                    <p>
                                        Villa Mosta is tucked away on a quiet lane, offering privacy and
                                        tranquility while remaining just steps from cafes, shops, and the
                                        vibrant town square.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-cream-200 aspect-[4/3] rounded-lg flex items-center justify-center">
                                <span className="text-text-muted">Neighborhood image</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Getting Here */}
                <section className="section bg-cream-200">
                    <div className="container">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <span className="text-overline text-text-muted block mb-4">
                                GETTING HERE
                            </span>
                            <h2 className="font-serif text-heading-1 text-text mb-6">
                                Easy to reach
                            </h2>
                            <p className="text-body-lg text-text-muted">
                                Whether you're arriving by air or exploring by car,
                                getting to Villa Mosta is simple.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {transportOptions.map((option) => (
                                <div
                                    key={option.title}
                                    className="bg-cream-100 rounded-lg p-6"
                                >
                                    <div className="w-12 h-12 bg-cream-200 rounded-full flex items-center justify-center mb-4">
                                        <option.icon className="w-6 h-6 text-stone" />
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Clock className="w-4 h-4 text-accent" />
                                        <span className="text-body-sm font-medium text-accent">
                                            {option.time}
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-heading-3 text-text mb-2">
                                        {option.title}
                                    </h3>
                                    <p className="text-body text-text-muted">
                                        {option.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Nearby Attractions */}
                <section className="section bg-cream-100">
                    <div className="container">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <span className="text-overline text-text-muted block mb-4">
                                EXPLORE MALTA
                            </span>
                            <h2 className="font-serif text-heading-1 text-text mb-6">
                                Nearby attractions
                            </h2>
                            <p className="text-body-lg text-text-muted">
                                From ancient cities to stunning beaches, discover what makes
                                Malta one of the Mediterranean's best-kept secrets.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {nearbyAttractions.map((attraction) => (
                                <div
                                    key={attraction.name}
                                    className="bg-cream-200 rounded-lg p-6 hover:shadow-soft transition-shadow"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="font-serif text-heading-3 text-text">
                                            {attraction.name}
                                        </h3>
                                        <span className="text-caption text-accent font-medium whitespace-nowrap ml-4">
                                            {attraction.distance}
                                        </span>
                                    </div>
                                    <p className="text-body text-text-muted">
                                        {attraction.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <CTASection
                    title="Ready to explore Malta?"
                    subtitle="Book your stay at Villa Mosta and experience the best of Maltese hospitality."
                    buttonText="Check Availability"
                    buttonHref="/book"
                />
            </main>
            <Footer />
        </>
    );
}
