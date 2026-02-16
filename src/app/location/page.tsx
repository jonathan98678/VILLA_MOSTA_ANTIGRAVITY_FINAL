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
                <section className="bg-stone-900 text-white py-20 sm:py-28">
                    <div className="container text-center px-4">
                        <span className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-amber-400 block mb-4">
                            FIND US
                        </span>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6">Location</h1>
                        <p className="text-stone-300 max-w-2xl mx-auto text-lg leading-relaxed">
                            Nestled in the historic town of Mosta, Malta - perfectly positioned
                            to explore the island while enjoying peaceful seclusion.
                        </p>
                    </div>
                </section>

                {/* Map Section */}
                <section className="relative h-[400px] lg:h-[500px] bg-stone-100 w-full overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.879774843993!2d14.423455325881005!3d35.90088012674261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e501a3554b73b%3A0xa646453965681710!2sMosta%20Rotunda!5e0!3m2!1sen!2smt!4v1709224851061!5m2!1sen!2smt"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(100%) contrast(1.2) opacity(0.85)" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full"
                    />

                    {/* Address Card Overlay */}
                    <div className="absolute bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-80 bg-white rounded-lg p-6 shadow-xl z-10">
                        <h3 className="font-serif text-2xl text-stone-800 mb-2">
                            Villa Mosta
                        </h3>
                        <p className="text-stone-500 mb-4 leading-relaxed">
                            51 Triq Il-Kungress Ewkaristiku<br />
                            Mosta, MST 2201<br />
                            Malta
                        </p>
                        <a
                            href="https://maps.google.com/?q=Mosta+Rotunda"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-stone-800 hover:text-amber-600 transition-colors uppercase tracking-wide"
                        >
                            <Navigation className="w-4 h-4" />
                            Get Directions
                        </a>
                    </div>
                </section>

                {/* Neighborhood Description */}
                <section className="py-20 bg-white">
                    <div className="container px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <span className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-stone-400 block mb-4">
                                    THE NEIGHBORHOOD
                                </span>
                                <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 mb-6">
                                    The heart of Malta
                                </h2>
                                <div className="space-y-4 text-stone-600 leading-relaxed">
                                    <p>
                                        Mosta sits at the geographical center of Malta, making it the
                                        perfect base for exploring the entire island. This charming town
                                        is famous for its impressive Rotunda - one of the largest unsupported
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
                            <div className="bg-stone-100 aspect-[4/3] rounded-2xl overflow-hidden relative shadow-lg">
                                {/* Use a real image if available, fallback to color for now */}
                                <div className="absolute inset-0 bg-[url('/images/villa/entrence.jpg')] bg-cover bg-center" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Getting Here */}
                <section className="py-20 bg-stone-50">
                    <div className="container px-4">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <span className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-stone-400 block mb-4">
                                GETTING HERE
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 mb-6">
                                Easy to reach
                            </h2>
                            <p className="text-stone-600 text-lg">
                                Whether you're arriving by air or exploring by car,
                                getting to Villa Mosta is simple.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {transportOptions.map((option) => (
                                <div
                                    key={option.title}
                                    className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6">
                                        <option.icon className="w-6 h-6 text-stone-600" />
                                    </div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Clock className="w-4 h-4 text-amber-500" />
                                        <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                                            {option.time}
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-xl text-stone-800 mb-3">
                                        {option.title}
                                    </h3>
                                    <p className="text-stone-500 leading-relaxed text-sm">
                                        {option.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Nearby Attractions */}
                <section className="py-20 bg-white">
                    <div className="container px-4">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <span className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-stone-400 block mb-4">
                                EXPLORE MALTA
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 mb-6">
                                Nearby attractions
                            </h2>
                            <p className="text-stone-600 text-lg">
                                From ancient cities to stunning beaches, discover what makes
                                Malta one of the Mediterranean's best-kept secrets.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {nearbyAttractions.map((attraction) => (
                                <div
                                    key={attraction.name}
                                    className="bg-stone-50 rounded-lg p-6 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-stone-100"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-serif text-lg text-stone-800 font-medium">
                                            {attraction.name}
                                        </h3>
                                        <span className="text-xs text-amber-600 font-bold whitespace-nowrap ml-4 bg-amber-50 px-2 py-1 rounded-full">
                                            {attraction.distance}
                                        </span>
                                    </div>
                                    <p className="text-stone-500 text-sm">
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
