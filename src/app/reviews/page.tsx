import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Star } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Guest Reviews - Rated 9.4 on Booking.com",
    description: "Read verified guest reviews for Villa Mosta. Rated 9.4 from 90+ reviews on Booking.com. Guests love the hospitality, terraces, and central Mosta location.",
    keywords: [
        "villa mosta reviews",
        "mosta accommodation reviews",
        "booking.com reviews malta",
        "villa mosta rating",
    ],
};

const reviews = [
    {
        id: "1",
        guestName: "Elizabeth",
        country: "United Kingdom",
        source: "Booking.com",
        rating: 10,
        reviewText: "Very welcoming host. Well equipped. Great location. Quiet.",
        stayType: "Couple",
        reviewDate: "January 2025",
    },
    {
        id: "2",
        guestName: "Inge",
        country: "Belgium",
        source: "Booking.com",
        rating: 10,
        reviewText: "Wonderful hospitable owners! Beautiful rooms with a lovely terrace. Mosta is a charming town. We can only praise our stay highly.",
        stayType: "Couple",
        reviewDate: "January 2025",
    },
    {
        id: "3",
        guestName: "Julie",
        country: "United Kingdom",
        source: "Booking.com",
        rating: 10,
        reviewText: "Location very central and easy to catch buses. The rooftop is perfect for chilling and relaxing. A beautiful traditional Maltese villa.",
        stayType: "Solo traveler",
        reviewDate: "December 2024",
    },
    {
        id: "4",
        guestName: "Bridie",
        country: "Australia",
        source: "Booking.com",
        rating: 10,
        reviewText: "Great location. Really friendly and helpful hosts. I would definitely stay again.",
        stayType: "Solo traveler",
        reviewDate: "December 2024",
    },
    {
        id: "5",
        guestName: "Shane",
        country: "Canada",
        source: "Booking.com",
        rating: 10,
        reviewText: "The hosts were amazing. Great restaurant recommendations with authentic Maltese cuisine. Friendliness was more than expected.",
        stayType: "Couple",
        reviewDate: "November 2024",
    },
    {
        id: "6",
        guestName: "Jamie",
        country: "United Kingdom",
        source: "Booking.com",
        rating: 10,
        reviewText: "Hosts were very friendly, hospitable and extremely helpful.",
        stayType: "Couple",
        reviewDate: "November 2024",
    },
    {
        id: "7",
        guestName: "Olivera",
        country: "Serbia",
        source: "Booking.com",
        rating: 10,
        reviewText: "Great location to explore everything. The house is lovely, very clean, had a great view from my room and the owner is amazing!",
        stayType: "Solo traveler",
        reviewDate: "October 2024",
    },
    {
        id: "8",
        guestName: "Tamara",
        country: "Slovakia",
        source: "Booking.com",
        rating: 10,
        reviewText: "We loved everything! Host was kind and helpful with great recommendations. The room is spacious and terrace is outstanding.",
        stayType: "Couple",
        reviewDate: "October 2024",
    },
    {
        id: "9",
        guestName: "Agnė",
        country: "Lithuania",
        source: "Booking.com",
        rating: 10,
        reviewText: "The host was incredibly nice, offered guidance and accommodated our needs. The place was clean and spacious.",
        stayType: "Family",
        reviewDate: "September 2024",
    },
    {
        id: "10",
        guestName: "Emmanouil",
        country: "United Kingdom",
        source: "Booking.com",
        rating: 10,
        reviewText: "Host was really friendly, providing recommendations and proactively communicating throughout the process.",
        stayType: "Couple",
        reviewDate: "September 2024",
    },
];

export default function ReviewsPage() {
    const totalReviews = 90;
    const overallRating = 9.4;

    return (
        <>
            <Header />
            <main className="pt-20 min-h-screen">
                {/* Hero */}
                <section className="page-hero text-center">
                    <div className="container max-w-4xl mx-auto">
                        <span className="section-overline text-amber-400">GUEST REVIEWS</span>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8">
                            What Our Guests Say
                        </h1>

                        {/* Rating Summary */}
                        <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-5 border border-white/10">
                            <div className="text-center">
                                <span className="block text-4xl sm:text-5xl font-serif text-white">{overallRating}</span>
                                <span className="text-xs text-stone-400 uppercase tracking-wider">Rating</span>
                            </div>
                            <div className="w-px h-10 bg-white/20" />
                            <div className="text-center">
                                <div className="flex gap-0.5 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-amber-400 fill-amber-400"
                                        />
                                    ))}
                                </div>
                                <span className="text-xs text-stone-400">{totalReviews}+ reviews on Booking.com</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* All Reviews */}
                <section className="section bg-[var(--color-warm-cream)]">
                    <div className="container">
                        <div className="text-center mb-12 sm:mb-16">
                            <span className="section-overline">VERIFIED REVIEWS</span>
                            <h2 className="section-title">Real stories from real guests</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                            {reviews.map((review) => (
                                <article
                                    key={review.id}
                                    className="card-premium p-7 sm:p-8 flex flex-col"
                                >
                                    {/* Stars */}
                                    <div className="flex gap-0.5 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <span className="block font-serif text-4xl text-[var(--color-honey)]/30 leading-none mb-1">&ldquo;</span>

                                    {/* Review Text */}
                                    <p className="text-base text-stone-700 mb-6 leading-relaxed flex-grow">
                                        {review.reviewText}
                                    </p>

                                    {/* Guest Info */}
                                    <div className="flex items-center justify-between pt-5 border-t border-stone-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-stone-200 to-stone-300 rounded-full flex items-center justify-center">
                                                <span className="text-sm font-medium text-stone-600">
                                                    {review.guestName.charAt(0)}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-stone-800">
                                                    {review.guestName}
                                                </p>
                                                <p className="text-xs text-stone-400">
                                                    {review.country}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="inline-flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-full">
                                                <span className="font-serif text-base font-medium text-amber-700">{review.rating}</span>
                                                <span className="text-xs text-amber-500">/10</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Internal link */}
                        <div className="text-center mt-12">
                            <Link
                                href="/book"
                                className="text-sm font-medium text-[var(--color-accent)] hover:text-amber-700 transition-colors uppercase tracking-wider"
                            >
                                Join our happy guests. Book your stay &rarr;
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <CTASection
                    title="Ready to create your own memories?"
                    subtitle="Book your stay at Villa Mosta and see why our guests keep coming back."
                    buttonText="Book Now"
                    buttonHref="/book"
                />
            </main>
            <Footer />
        </>
    );
}
