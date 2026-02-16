"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

// This would be fetched from Supabase in production
const faqs = [
    {
        id: "1",
        category: "Booking & Reservations",
        question: "How do I make a reservation?",
        answer: "You can book directly through our website by selecting your preferred room and dates, or contact us via email or phone for personalized assistance. We recommend booking at least 2-3 months in advance during peak season (June-September).",
    },
    {
        id: "2",
        category: "Booking & Reservations",
        question: "What is your cancellation policy?",
        answer: "We offer free cancellation up to 7 days before your check-in date. Cancellations within 7 days of arrival are subject to a charge equal to the first night's stay. No-shows are charged the full booking amount.",
    },
    {
        id: "3",
        category: "Booking & Reservations",
        question: "Is a deposit required?",
        answer: "Yes, we require a 30% deposit at the time of booking to secure your reservation. The remaining balance is due upon check-in.",
    },
    {
        id: "4",
        category: "Arrival & Departure",
        question: "What are the check-in and check-out times?",
        answer: "Check-in is from 3:00 PM and check-out is by 11:00 AM. If you need to arrange early check-in or late check-out, please contact us in advance and we'll do our best to accommodate your request (subject to availability).",
    },
    {
        id: "5",
        category: "Arrival & Departure",
        question: "Do you provide airport transfers?",
        answer: "Yes, we can arrange private airport transfers from Malta International Airport. The journey takes approximately 20 minutes. Please let us know your flight details at least 48 hours before arrival.",
    },
    {
        id: "6",
        category: "Amenities & Services",
        question: "Is breakfast included?",
        answer: "Yes! All bookings include our signature Mediterranean breakfast, served each morning from 8:00 AM to 10:30 AM. We feature fresh local produce, homemade pastries, and seasonal fruits. Please inform us of any dietary requirements.",
    },
    {
        id: "7",
        category: "Amenities & Services",
        question: "Is there WiFi available?",
        answer: "Yes, complimentary high-speed WiFi is available throughout the villa, including all rooms, common areas, and the pool terrace.",
    },
    {
        id: "8",
        category: "Amenities & Services",
        question: "Can you accommodate dietary restrictions?",
        answer: "Absolutely. We cater to vegetarian, vegan, gluten-free, and other dietary requirements. Please inform us at the time of booking so we can prepare accordingly.",
    },
    {
        id: "9",
        category: "Property & Location",
        question: "Is the villa suitable for children?",
        answer: "Villa Mosta welcomes families with children. The Sunset Chamber can accommodate a family with its sofa bed option. Please note that the pool is not fenced, so children should be supervised at all times.",
    },
    {
        id: "10",
        category: "Property & Location",
        question: "Is parking available?",
        answer: "Yes, we offer free private parking on the property for all guests. The parking area is secure and can accommodate multiple vehicles.",
    },
    {
        id: "11",
        category: "Property & Location",
        question: "Are pets allowed?",
        answer: "We regret that we cannot accommodate pets at Villa Mosta, as we aim to maintain a pristine environment for all guests, including those with allergies.",
    },
];

export default function FAQPage() {
    const [openId, setOpenId] = React.useState<string | null>(null);

    // Group FAQs by category
    const groupedFaqs = faqs.reduce((acc, faq) => {
        if (!acc[faq.category]) {
            acc[faq.category] = [];
        }
        acc[faq.category].push(faq);
        return acc;
    }, {} as Record<string, typeof faqs>);

    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="section bg-stone text-cream-100">
                    <div className="container text-center">
                        <span className="text-overline text-cream-300 block mb-4">
                            HELP CENTER
                        </span>
                        <h1 className="font-serif text-display mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-body-lg text-cream-200 max-w-2xl mx-auto">
                            Find answers to common questions about staying at Villa Mosta.
                            Can&apos;t find what you&apos;re looking for? Get in touch.
                        </p>
                    </div>
                </section>

                {/* FAQ Content */}
                <section className="section bg-cream-100">
                    <div className="container max-w-3xl">
                        {Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
                            <div key={category} className="mb-12 last:mb-0">
                                <h2 className="font-serif text-heading-2 text-text mb-6 pb-4 border-b border-cream-300">
                                    {category}
                                </h2>

                                <div className="space-y-4">
                                    {categoryFaqs.map((faq) => (
                                        <div
                                            key={faq.id}
                                            className="bg-cream-200 rounded-lg overflow-hidden"
                                        >
                                            <button
                                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                                className="w-full px-6 py-4 flex items-center justify-between text-left"
                                            >
                                                <span className="text-body font-medium text-text pr-4">
                                                    {faq.question}
                                                </span>
                                                <ChevronDown
                                                    className={cn(
                                                        "w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-300",
                                                        openId === faq.id && "rotate-180"
                                                    )}
                                                />
                                            </button>

                                            <div
                                                className={cn(
                                                    "grid transition-all duration-300",
                                                    openId === faq.id
                                                        ? "grid-rows-[1fr] opacity-100"
                                                        : "grid-rows-[0fr] opacity-0"
                                                )}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="px-6 pb-4">
                                                        <p className="text-body text-text-muted leading-relaxed">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Still Have Questions */}
                <section className="section bg-cream-200">
                    <div className="container text-center max-w-2xl">
                        <h2 className="font-serif text-heading-2 text-text mb-4">
                            Still have questions?
                        </h2>
                        <p className="text-body-lg text-text-muted mb-8">
                            We&apos;re here to help. Reach out to us directly and we&apos;ll get back to you as soon as possible.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:info@villamosta.com"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone text-cream-100 rounded hover:bg-stone/90 transition-colors"
                            >
                                Email Us
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-stone text-stone rounded hover:bg-stone hover:text-cream-100 transition-colors"
                            >
                                Contact Form
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
