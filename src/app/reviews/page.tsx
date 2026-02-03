import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { Star } from "lucide-react";

export const metadata = {
    title: "Guest Reviews",
    description: "Read what our guests have to say about their stay at Villa Mosta. Real reviews from real travelers.",
};

// This would be fetched from Supabase in production
const reviews = [
    {
        id: "1",
        guestName: "Sarah & Michael",
        country: "United Kingdom",
        source: "Booking.com",
        rating: 5,
        reviewText: "An absolutely magical experience. From the moment we arrived, we felt completely at home. The attention to detail is extraordinary—fresh flowers in every room, handmade soaps, and the most incredible breakfast we've ever had. We've already booked our return.",
        stayType: "Couple",
        isFeatured: true,
        reviewDate: "December 2023",
    },
    {
        id: "2",
        guestName: "Marco Rossi",
        country: "Italy",
        source: "Google",
        rating: 5,
        reviewText: "Villa Mosta exceeded all expectations. The hosts are warm and attentive without being intrusive. Perfect for anyone seeking a peaceful retreat with stunning views.",
        stayType: "Solo traveler",
        reviewDate: "November 2023",
    },
    {
        id: "3",
        guestName: "Emma Thompson",
        country: "Australia",
        source: "Airbnb",
        rating: 5,
        reviewText: "We celebrated our anniversary here and couldn't have chosen a more romantic setting. The terrace suite offered breathtaking sunsets, and the local wine recommendations were perfect.",
        stayType: "Couple",
        reviewDate: "October 2023",
    },
    {
        id: "4",
        guestName: "Pierre & Marie Dubois",
        country: "France",
        source: "Booking.com",
        rating: 5,
        reviewText: "Exceptional in every way. The breakfast alone is worth the trip—fresh local ingredients prepared with such care. The villa itself is a perfect blend of history and modern comfort.",
        stayType: "Couple",
        reviewDate: "September 2023",
    },
    {
        id: "5",
        guestName: "Hans Mueller",
        country: "Germany",
        source: "Direct",
        rating: 5,
        reviewText: "Third visit and it keeps getting better. The team remembers our preferences, our favorite room was ready, and they'd even stocked our preferred wine. This is what true hospitality looks like.",
        stayType: "Couple",
        reviewDate: "August 2023",
    },
    {
        id: "6",
        guestName: "The Williams Family",
        country: "USA",
        source: "Airbnb",
        rating: 5,
        reviewText: "Traveled with our two teenagers who are usually hard to impress. They loved the pool, the gardens, and even put their phones down at dinner! A rare family vacation where everyone was happy.",
        stayType: "Family",
        reviewDate: "July 2023",
    },
];

export default function ReviewsPage() {
    const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="section bg-stone text-cream-100">
                    <div className="container text-center">
                        <span className="text-overline text-cream-300 block mb-4">
                            GUEST REVIEWS
                        </span>
                        <h1 className="font-serif text-display mb-6">What Our Guests Say</h1>

                        {/* Rating Summary */}
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-6 h-6 text-accent fill-accent"
                                    />
                                ))}
                            </div>
                            <span className="text-heading-3 font-serif">{averageRating.toFixed(1)}</span>
                        </div>
                        <p className="text-body text-cream-200">
                            Based on {reviews.length} reviews
                        </p>
                    </div>
                </section>

                {/* Featured Testimonials Carousel */}
                <TestimonialsSection
                    overline="FEATURED REVIEWS"
                    title="Our guests' favorite moments"
                    reviews={reviews.filter(r => r.isFeatured || r.rating === 5).slice(0, 3)}
                />

                {/* All Reviews */}
                <section className="section bg-cream-100">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-heading-1 text-text">
                                All Reviews
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {reviews.map((review) => (
                                <article
                                    key={review.id}
                                    className="bg-cream-200 rounded-lg p-6"
                                >
                                    {/* Rating */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < review.rating
                                                        ? "text-accent fill-accent"
                                                        : "text-cream-400"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-body text-text mb-4 leading-relaxed">
                                        &ldquo;{review.reviewText}&rdquo;
                                    </p>

                                    {/* Guest Info */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-body font-medium text-text">
                                                {review.guestName}
                                            </p>
                                            <p className="text-body-sm text-text-muted">
                                                {review.stayType} • {review.country}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-caption text-text-muted">
                                                {review.source}
                                            </p>
                                            <p className="text-caption text-text-light">
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
                    overline="EXPERIENCE IT YOURSELF"
                    title="Ready to create your own memories?"
                    description="Book your stay at Villa Mosta and see why our guests keep coming back."
                    ctaText="Book Now"
                    ctaHref="/book"
                />
            </main>
            <Footer />
        </>
    );
}
