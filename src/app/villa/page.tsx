import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import Link from "next/link";
import {
    Wifi, Wind, Tv, Coffee, UtensilsCrossed, Sun,
    Eye, Shirt, ShowerHead, Luggage, Baby, Languages
} from "lucide-react";

export const metadata = {
    title: "The Villa - Traditional Maltese Home in Mosta",
    description: "Discover Villa Mosta - a spacious traditional Maltese home with beautiful terraces, views of the Mosta Rotunda, and genuine hospitality by Minja and Andreas.",
};

const amenities = [
    { name: "Free WiFi", icon: Wifi, desc: "High-speed in all rooms" },
    { name: "Air Conditioning", icon: Wind, desc: "Coin-operated (1€ for 3-5h)" },
    { name: "Flat-screen TV", icon: Tv, desc: "With streaming services" },
    { name: "Electric Kettle", icon: Coffee, desc: "Coffee & sugar provided" },
    { name: "Microwave & Fridge", icon: UtensilsCrossed, desc: "In-room kitchenette" },
    { name: "Sun Terrace", icon: Sun, desc: "With outdoor furniture" },
    { name: "Rotunda View", icon: Eye, desc: "Views of Mosta Rotunda" },
    { name: "Ironing Facilities", icon: Shirt, desc: "Drying rack included" },
    { name: "Hairdryer & Toiletries", icon: ShowerHead, desc: "Free toiletries" },
    { name: "Luggage Storage", icon: Luggage, desc: "Secure storage available" },
    { name: "Child Friendly", icon: Baby, desc: "Safety gates & socket covers" },
    { name: "7 Languages", icon: Languages, desc: "EN, DE, FR, BS, HR, SR, SV" },
];

export default function VillaPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero */}
                <HeroSection
                    title="THE VILLA"
                    subtitle="A spacious traditional Maltese home with character, terraces, and a central location."
                    heroImage="/images/villa/terrace-view.jpg"
                    showScrollIndicator={true}
                />

                {/* Our Story */}
                <section id="intro" className="section bg-[var(--color-warm-white)]">
                    <div className="container max-w-5xl">
                        <div className="text-center mb-12 sm:mb-16">
                            <span className="section-overline">OUR STORY</span>
                            <h2 className="section-title">
                                Experience the real Malta
                            </h2>
                            <div className="maltese-divider" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                            <div className="space-y-5 sm:space-y-6">
                                <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                                    Experience the real Malta in a real town with real people. Villa Mosta is a spacious
                                    traditional Maltese home with lots of character, original decor, and beautiful terraces.
                                </p>
                                <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                                    There are 3 rooms: 2 with double beds and 1 with 2 single beds. Central location,
                                    no neighbors overlooking the area, and toddler-safe stairs throughout.
                                </p>
                            </div>
                            <div className="space-y-5 sm:space-y-6">
                                <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                                    We love to share our place and time with you. You come as foreigners, you leave as friends.
                                    We love children and we are here to make your stay pleasant.
                                </p>
                                <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                                    We also offer private car tours around the island so you can experience all hidden gems of Malta.
                                    The third largest Rotunda is at our doorstep, with all beaches close by.
                                </p>
                            </div>
                        </div>

                        {/* Host card - premium styling */}
                        <div className="mt-12 sm:mt-16 card-premium p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[var(--color-honey)] to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                <span className="font-serif text-lg sm:text-xl text-white font-medium">M&A</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <h3 className="font-serif text-xl sm:text-2xl text-stone-800">Hosted by Minja and Andreas</h3>
                                    <span className="bg-amber-50 text-amber-700 text-xs px-3 py-1 rounded-full font-semibold">9.8 ★</span>
                                </div>
                                <p className="text-base text-stone-500 leading-relaxed">
                                    We are looking forward to meeting you, so you can enjoy our hospitality and lovely Malta.
                                    Languages spoken: English, German, French, Bosnian, Croatian, Serbian, Swedish.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Villa Amenities */}
                <section className="section bg-[var(--color-warm-cream)]">
                    <div className="container">
                        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                            <span className="section-overline">VILLA AMENITIES</span>
                            <h2 className="section-title">
                                Everything you need
                            </h2>
                            <p className="text-stone-500 text-base sm:text-lg mt-4">
                                Thoughtfully equipped for a comfortable and authentic Maltese stay.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                            {amenities.map((amenity) => (
                                <div
                                    key={amenity.name}
                                    className="group card-premium p-5 sm:p-7 text-center"
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-stone-50 group-hover:bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 transition-colors duration-300">
                                        <amenity.icon className="w-5 h-5 sm:w-6 sm:h-6 text-stone-400 group-hover:text-[var(--color-accent)] transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-sm sm:text-base font-medium text-stone-800 mb-1.5">{amenity.name}</h3>
                                    <p className="text-xs sm:text-sm text-stone-400">{amenity.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* House Rules */}
                <section className="section bg-white">
                    <div className="container max-w-4xl">
                        <div className="text-center mb-10 sm:mb-14">
                            <span className="section-overline">GOOD TO KNOW</span>
                            <h2 className="section-title">House Rules</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            {[
                                { label: "Check-in", value: "14:00 - 20:00" },
                                { label: "Check-out", value: "07:00 - 11:00" },
                                { label: "Quiet hours", value: "20:00 - 08:00" },
                                { label: "Smoking", value: "Designated area only" },
                                { label: "Pets", value: "Not allowed" },
                                { label: "Parties", value: "Not allowed" },
                            ].map((rule) => (
                                <div
                                    key={rule.label}
                                    className="flex items-center justify-between py-4 sm:py-5 px-5 sm:px-6 bg-stone-50 rounded-xl border border-stone-100 hover:border-stone-200 transition-colors duration-300"
                                >
                                    <span className="text-sm sm:text-base font-medium text-stone-800">{rule.label}</span>
                                    <span className="text-sm sm:text-base text-stone-500">{rule.value}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-xs text-stone-400 text-center mt-6 sm:mt-8">
                            License number: 61700A - Damage deposit: up to 200 EUR
                        </p>

                        {/* Internal link to FAQ */}
                        <div className="text-center mt-8">
                            <Link
                                href="/faq"
                                className="text-sm font-medium text-[var(--color-accent)] hover:text-amber-700 transition-colors uppercase tracking-wider"
                            >
                                View all FAQ &rarr;
                            </Link>
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
