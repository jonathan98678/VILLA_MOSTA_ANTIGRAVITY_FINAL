import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import {
    Wifi, Wind, Tv, Coffee, UtensilsCrossed, Sun,
    Eye, Shirt, ShowerHead, Luggage, Baby, Languages
} from "lucide-react";

export const metadata = {
    title: "The Villa",
    description: "Discover Villa Mosta - a spacious traditional Maltese home with beautiful terraces, central location, and genuine hospitality.",
};

const amenities = [
    { name: "Free WiFi", icon: Wifi, desc: "Available in all rooms" },
    { name: "Air Conditioning", icon: Wind, desc: "Coin-operated (€1 for 3-5h)" },
    { name: "Flat-screen TV", icon: Tv, desc: "With streaming services" },
    { name: "Electric Kettle", icon: Coffee, desc: "Coffee & sugar provided" },
    { name: "Microwave & Fridge", icon: UtensilsCrossed, desc: "In-room kitchenette" },
    { name: "Sun Terrace", icon: Sun, desc: "With outdoor furniture" },
    { name: "City & Landmark View", icon: Eye, desc: "Views of Mosta Rotunda" },
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
            <main>
                {/* Hero */}
                <HeroSection
                    title="THE VILLA"
                    subtitle="A spacious traditional Maltese home with lots of character, beautiful terraces, and a central location."
                    heroImage="/images/villa/terrace-view.jpg"
                    showScrollIndicator={true}
                />

                {/* Our Story */}
                <section id="intro" className="section bg-[var(--color-warm-white)]">
                    <div className="container max-w-4xl">
                        <div className="text-center mb-10 sm:mb-14">
                            <span className="block text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[var(--color-accent)] mb-3 sm:mb-4">
                                OUR STORY
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-800 mb-5 sm:mb-6">
                                Experience the real Malta
                            </h2>
                            {/* Maltese divider */}
                            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                                <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[var(--color-honey)]" />
                                <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-honey)]" />
                                <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-[var(--color-honey)]" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                            <div className="space-y-4 sm:space-y-5">
                                <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed">
                                    Experience the real Malta in a real town with real people. Villa Mosta is a spacious
                                    traditional Maltese home with lots of character, original decor, and beautiful terraces.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed">
                                    There are 3 rooms — 2 with double beds and 1 with 2 single beds. Central location,
                                    no neighbors overlooking the area, and toddler-safe stairs throughout.
                                </p>
                            </div>
                            <div className="space-y-4 sm:space-y-5">
                                <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed">
                                    We love to share our place and time with you. You come as foreigners, you leave as friends.
                                    We love children and we are here to make your stay pleasant.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed">
                                    We also offer private car tours around the island so you can experience all hidden gems of Malta.
                                    The third largest Rotunda is at our doorsteps, with all beaches close by.
                                </p>
                            </div>
                        </div>

                        {/* Host card */}
                        <div className="mt-10 sm:mt-14 bg-white border border-stone-100 p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="font-serif text-lg sm:text-xl text-stone-600">A</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="font-serif text-lg sm:text-xl text-stone-800">Hosted by Andreas</h3>
                                    <span className="bg-stone-100 text-stone-600 text-xs px-2 py-0.5 font-medium">9.8 ★</span>
                                </div>
                                <p className="text-sm text-stone-500 leading-relaxed">
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
                        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
                            <span className="block text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[var(--color-accent)] mb-3 sm:mb-4">
                                VILLA AMENITIES
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-800 mb-4 sm:mb-6">
                                Everything you need, nothing you don&apos;t
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                            {amenities.map((amenity, index) => (
                                <div
                                    key={amenity.name}
                                    className="group bg-white border border-stone-100 p-4 sm:p-6 text-center hover:shadow-md hover:border-[var(--color-honey)]/30 transition-all duration-500 hover:-translate-y-1"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-stone-50 group-hover:bg-[var(--color-honey)]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-colors duration-300">
                                        <amenity.icon className="w-4 h-4 sm:w-5 sm:h-5 text-stone-500 group-hover:text-[var(--color-accent)] transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xs sm:text-sm font-medium text-stone-800 mb-1">{amenity.name}</h3>
                                    <p className="text-[10px] sm:text-xs text-stone-400">{amenity.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* House Rules snapshot */}
                <section className="section bg-white">
                    <div className="container max-w-3xl">
                        <div className="text-center mb-8 sm:mb-12">
                            <span className="block text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[var(--color-accent)] mb-3 sm:mb-4">
                                GOOD TO KNOW
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-800">
                                House Rules
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {[
                                { label: "Check-in", value: "14:00 — 20:00" },
                                { label: "Check-out", value: "07:00 — 11:00" },
                                { label: "Quiet hours", value: "20:00 — 08:00" },
                                { label: "Smoking", value: "Designated area only" },
                                { label: "Pets", value: "Not allowed" },
                                { label: "Parties", value: "Not allowed" },
                            ].map((rule) => (
                                <div
                                    key={rule.label}
                                    className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-5 bg-stone-50 border border-stone-100"
                                >
                                    <span className="text-xs sm:text-sm font-medium text-stone-800">{rule.label}</span>
                                    <span className="text-xs sm:text-sm text-stone-500">{rule.value}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-xs text-stone-400 text-center mt-4 sm:mt-6">
                            License number: 61700A • Damage deposit: up to €200
                        </p>
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
