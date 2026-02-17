"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookButton } from "@/components/ui/BookButton";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        id: "1",
        category: "Booking & Reservations",
        question: "How do I make a reservation?",
        answer: "You can book directly through our website by selecting your preferred room and dates, or contact us via email for personalized assistance. We recommend booking at least 2-3 months in advance during peak season (June-September).",
    },
    {
        id: "2",
        category: "Booking & Reservations",
        question: "What is your cancellation policy?",
        answer: "Cancellation and prepayment policies vary according to accommodation type. Please check what conditions apply when making your selection.",
    },
    {
        id: "3",
        category: "Booking & Reservations",
        question: "Is a deposit required?",
        answer: "Booking.com takes your payment on behalf of the property for this stay, but make sure you have cash for any extras once you get there.",
    },
    {
        id: "4",
        category: "Arrival & Departure",
        question: "What are the check-in and check-out times?",
        answer: "Check-in is from 14:00 to 20:00. Check-out is from 07:00 to 11:00. Guests are required to show photo identification and credit card upon check-in. Free check-in is from 11:00 to 20:00. Check-ins after 22:00 carry an extra charge of 50 EUR.",
    },
    {
        id: "5",
        category: "Arrival & Departure",
        question: "How do I get to the property?",
        answer: "You can use the Bolt app or eCabs for a taxi ride which takes approximately 20 minutes from the airport. Or use public transport (bus route 958). The nearest bus stop is at the doorstep.",
    },
    {
        id: "6",
        category: "Amenities & Services",
        question: "Is there WiFi available?",
        answer: "Yes, complimentary high-speed WiFi is available in all rooms and throughout the property.",
    },
    {
        id: "7",
        category: "Amenities & Services",
        question: "How does the air conditioning work?",
        answer: "Air conditioning is available in all rooms and runs on a coin meter. When you insert 1 EUR, the unit stays on for 3-5 hours.",
    },
    {
        id: "8",
        category: "Amenities & Services",
        question: "Is kitchen use available?",
        answer: "Kitchen use is not available. Instead, all rooms are equipped with an electric kettle, cutlery, plates, microwave, refrigerator, and complimentary coffee and sugar.",
    },
    {
        id: "9",
        category: "Property & Location",
        question: "Is the villa suitable for children?",
        answer: "Yes! Children of any age are welcome. Children 11 years and above will be charged as adults. Cots are available upon request for children aged 0-2 years, free of charge. Toddler-safe stairs are installed.",
    },
    {
        id: "10",
        category: "Property & Location",
        question: "Is parking available?",
        answer: "No parking is available at the property. We recommend using taxis (Bolt or eCabs) or public transport.",
    },
    {
        id: "11",
        category: "Property & Location",
        question: "Are pets allowed?",
        answer: "Pets are not allowed at Villa Mosta.",
    },
];

export default function FAQPage() {
    const [openId, setOpenId] = React.useState<string | null>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

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
            <main className="pt-20 min-h-screen">
                {/* Hero */}
                <section className="page-hero text-center">
                    <div className="container">
                        <span
                            className={cn(
                                "section-overline text-amber-400 transition-all duration-700",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            )}
                        >
                            HELP CENTER
                        </span>
                        <h1
                            className={cn(
                                "font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 transition-all duration-700 delay-100",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            )}
                        >
                            Frequently Asked Questions
                        </h1>
                        <p
                            className={cn(
                                "text-base sm:text-lg text-stone-300 max-w-2xl mx-auto transition-all duration-700 delay-200",
                                isVisible ? "opacity-100" : "opacity-0"
                            )}
                        >
                            Find answers to common questions about staying at Villa Mosta.
                            Can&apos;t find what you&apos;re looking for?{" "}
                            <Link href="/contact" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                                Get in touch
                            </Link>.
                        </p>
                    </div>
                </section>

                {/* FAQ Content */}
                <section className="section bg-[var(--color-warm-cream)]">
                    <div className="container max-w-4xl">
                        {Object.entries(groupedFaqs).map(([category, categoryFaqs], catIdx) => (
                            <div
                                key={category}
                                className={cn(
                                    "mb-10 sm:mb-14 last:mb-0 transition-all duration-700",
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                )}
                                style={{ transitionDelay: `${300 + catIdx * 150}ms` }}
                            >
                                <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-6 sm:mb-8 pb-4 border-b border-stone-200">
                                    {category}
                                </h2>

                                <div className="space-y-4">
                                    {categoryFaqs.map((faq) => (
                                        <div
                                            key={faq.id}
                                            className="card-premium overflow-hidden"
                                        >
                                            <button
                                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                                className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left group"
                                            >
                                                <span className="text-base sm:text-lg font-medium text-stone-800 pr-6 group-hover:text-[var(--color-accent)] transition-colors">
                                                    {faq.question}
                                                </span>
                                                <ChevronDown
                                                    className={cn(
                                                        "w-5 h-5 text-stone-400 flex-shrink-0 transition-transform duration-300",
                                                        openId === faq.id && "rotate-180 text-[var(--color-accent)]"
                                                    )}
                                                />
                                            </button>

                                            <div
                                                className={cn(
                                                    "grid transition-all duration-300 ease-in-out",
                                                    openId === faq.id
                                                        ? "grid-rows-[1fr] opacity-100"
                                                        : "grid-rows-[0fr] opacity-0"
                                                )}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="px-6 sm:px-8 pb-6 sm:pb-7 pt-0">
                                                        <p className="text-base text-stone-500 leading-relaxed">
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
                <section className="section bg-white">
                    <div className="container text-center max-w-2xl">
                        <span className="section-overline">NEED MORE HELP?</span>
                        <h2 className="section-title mb-5">Still have questions?</h2>
                        <p className="text-base sm:text-lg text-stone-500 mb-10">
                            We&apos;re here to help. Reach out to us directly and we&apos;ll get back to you as soon as possible.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:info@villamosta.com"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-stone-800 text-white text-sm font-medium rounded-full hover:bg-stone-700 transition-all duration-300 hover:shadow-lg"
                            >
                                Email Us
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-stone-300 text-stone-700 text-sm font-medium rounded-full hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-300"
                            >
                                Contact Form
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
