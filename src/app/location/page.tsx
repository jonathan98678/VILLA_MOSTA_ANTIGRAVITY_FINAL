import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Car, Plane, Clock, Navigation, Bus } from "lucide-react";

export const metadata = {
    title: "Location - How to Find Villa Mosta in Malta",
    description: "Villa Mosta is located in the heart of Mosta, Malta. Just 20 minutes from the airport, steps from the Mosta Rotunda. See nearby attractions and how to get here.",
};

const transportOptions = [
    {
        title: "From Malta Airport",
        description: "A scenic 20-minute drive through the Maltese countryside. Use Bolt or eCabs for a direct taxi ride.",
        icon: Plane,
        time: "20 min",
    },
    {
        title: "By Car",
        description: "GPS coordinates and detailed directions provided upon booking. Street parking available nearby.",
        icon: Car,
        time: "Self-drive",
    },
    {
        title: "Public Transport",
        description: "Regular bus services connect Mosta to all major destinations. The nearest bus stop (route 958) is at our doorstep.",
        icon: Bus,
        time: "At doorstep",
    },
];

const nearbyAttractions = [
    { name: "Mosta Rotunda", distance: "5 min walk", description: "One of the largest church domes in Europe" },
    { name: "Valletta (Capital)", distance: "20 min drive", description: "UNESCO World Heritage city" },
    { name: "Mdina (Silent City)", distance: "10 min drive", description: "Ancient walled medieval city" },
    { name: "Golden Bay Beach", distance: "15 min drive", description: "Sandy beach with crystal clear waters" },
    { name: "St. Julian's", distance: "15 min drive", description: "Nightlife, dining, and waterfront" },
    { name: "Blue Grotto", distance: "25 min drive", description: "Stunning natural sea caves" },
];

export default function LocationPage() {
    return (
        <>
            <Header />
            <main className="pt-20 min-h-screen">
                {/* Hero */}
                <section className="page-hero">
                    <div className="container text-center">
                        <span className="section-overline text-amber-400">FIND US</span>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                            In the Heart of Malta
                        </h1>
                        <p className="text-stone-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                            Nestled in the historic town of Mosta, perfectly positioned
                            to explore the entire island while enjoying peaceful seclusion.
                        </p>
                    </div>
                </section>

                {/* Interactive Map */}
                <section className="relative h-[450px] sm:h-[500px] lg:h-[550px] bg-stone-100 w-full overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.8!2d14.4253!3d35.9009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e501a3554b73b%3A0xa646453965681710!2s51%20Triq%20Il-Kungress%20Ewkaristiku%2C%20Mosta%2C%20Malta!5e0!3m2!1sen!2smt!4v1709224851061!5m2!1sen!2smt"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full"
                        title="Villa Mosta location on Google Maps - 51 Triq Il-Kungress Ewkaristiku, Mosta, Malta"
                    />

                    {/* Address Card Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-8 md:bottom-8 md:w-96 card-premium p-7 sm:p-8 z-10">
                        <h3 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-3">
                            Villa Mosta
                        </h3>
                        <p className="text-stone-500 mb-5 leading-relaxed">
                            51 Triq Il-Kungress Ewkaristiku<br />
                            Mosta, MST 2201<br />
                            Malta
                        </p>
                        <a
                            href="https://www.google.com/maps/dir//51+Triq+Il-Kungress+Ewkaristiku+Mosta+Malta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:text-amber-700 transition-colors uppercase tracking-wide"
                        >
                            <Navigation className="w-4 h-4" />
                            Get Directions
                        </a>
                    </div>
                </section>

                {/* Neighborhood Description */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div>
                                <span className="section-overline">THE NEIGHBORHOOD</span>
                                <h2 className="section-title mb-8">
                                    The heart of Malta
                                </h2>
                                <div className="space-y-5 text-stone-600 text-base sm:text-lg leading-relaxed">
                                    <p>
                                        Mosta sits at the geographical center of Malta, making it the
                                        perfect base for exploring the entire island. This charming town
                                        is famous for its Rotunda - one of the largest unsupported
                                        church domes in the world.
                                    </p>
                                    <p>
                                        Beyond the architecture, you will find authentic local life: morning
                                        markets, family-run restaurants serving traditional Maltese cuisine,
                                        and friendly neighbors who still greet each other by name.
                                    </p>
                                    <p>
                                        Villa Mosta is tucked away on a quiet lane, offering privacy and
                                        tranquility while remaining just steps from cafes, shops, and the
                                        vibrant town square.
                                    </p>
                                </div>
                                {/* Internal link */}
                                <div className="mt-8">
                                    <Link
                                        href="/blog"
                                        className="text-sm font-medium text-[var(--color-accent)] hover:text-amber-700 transition-colors uppercase tracking-wider"
                                    >
                                        Read our Mosta travel guide &rarr;
                                    </Link>
                                </div>
                            </div>
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl">
                                <Image
                                    src="/images/villa/entrence.jpg"
                                    alt="Traditional Maltese street in Mosta with limestone buildings"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Getting Here */}
                <section className="section bg-[var(--color-warm-cream)]">
                    <div className="container">
                        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                            <span className="section-overline">GETTING HERE</span>
                            <h2 className="section-title">Easy to reach</h2>
                            <p className="text-stone-500 text-base sm:text-lg mt-4">
                                Whether arriving by air or exploring by car,
                                getting to Villa Mosta is simple.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                            {transportOptions.map((option) => (
                                <div
                                    key={option.title}
                                    className="card-premium p-8 sm:p-10"
                                >
                                    <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                                        <option.icon className="w-6 h-6 text-[var(--color-accent)]" />
                                    </div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Clock className="w-4 h-4 text-amber-500" />
                                        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                                            {option.time}
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-xl sm:text-2xl text-stone-800 mb-3">
                                        {option.title}
                                    </h3>
                                    <p className="text-stone-500 leading-relaxed">
                                        {option.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Nearby Attractions */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                            <span className="section-overline">EXPLORE MALTA</span>
                            <h2 className="section-title">Nearby attractions</h2>
                            <p className="text-stone-500 text-base sm:text-lg mt-4">
                                From ancient cities to stunning beaches, discover what makes
                                Malta one of the Mediterranean&apos;s best-kept secrets.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                            {nearbyAttractions.map((attraction) => (
                                <div
                                    key={attraction.name}
                                    className="card-premium p-7 sm:p-8"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <MapPin className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                                            <h3 className="font-serif text-lg sm:text-xl text-stone-800 font-medium">
                                                {attraction.name}
                                            </h3>
                                        </div>
                                        <span className="text-xs text-amber-700 font-bold whitespace-nowrap ml-4 bg-amber-50 px-3 py-1.5 rounded-full">
                                            {attraction.distance}
                                        </span>
                                    </div>
                                    <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
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
