import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Star } from "lucide-react";

export const metadata = {
    title: "Guest Reviews",
    description: "Read what our guests say about Villa Mosta. Real reviews from Booking.com — rated 9.4 from 90+ reviews.",
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
            <main className="pt-20">
                {/* Hero */}
                <section className="section bg-stone-800 text-white">
                    <div className="container text-center">
                        <span className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-stone-400 block mb-3 sm:mb-4">
                            GUEST REVIEWS
                        </span>
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 sm:mb-6">What Our Guests Say</h1>

                        {/* Rating Summary */}
                        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="flex gap-0.5 sm:gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 fill-amber-400"
                                    />
                                ))}
                            </div>
                            <span className="text-2xl sm:text-3xl font-serif">{overallRating}</span>
                        </div>
                        <p className="text-sm sm:text-base text-stone-300">
                            Based on {totalReviews} reviews on Booking.com
                        </p>
                    </div>
                </section>

                {/* All Reviews */}
                <section className="section bg-[var(--color-warm-cream)]">
                    <div className="container">
                        <div className="text-center mb-8 sm:mb-12">
                            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-800">
                                All Reviews
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
                            {reviews.map((review) => (
                                <article
                                    key={review.id}
                                    className="bg-white border border-stone-100 p-5 sm:p-7 hover:shadow-md transition-shadow duration-300"
                                >
                                    {/* Quote */}
                                    <span className="block font-serif text-3xl text-[var(--color-honey)] leading-none mb-2">&ldquo;</span>

                                    {/* Review Text */}
                                    <p className="text-sm sm:text-[15px] text-stone-700 mb-4 sm:mb-5 leading-relaxed">
                                        {review.reviewText}
                                    </p>

                                    {/* Guest Info */}
                                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-stone-100">
                                        <div>
                                            <p className="text-xs sm:text-sm font-medium text-stone-800">
                                                {review.guestName}
                                            </p>
                                            <p className="text-[10px] sm:text-xs text-stone-400">
                                                {review.stayType} • {review.country}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <div className="inline-flex items-center gap-1.5 bg-stone-50 px-2.5 py-1">
                                                <span className="font-serif text-base sm:text-lg text-stone-800">{review.rating}</span>
                                                <span className="text-[10px] sm:text-xs text-stone-400">/10</span>
                                            </div>
                                            <p className="text-[10px] sm:text-xs text-stone-400 mt-1">
                                                {review.reviewDate}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
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
