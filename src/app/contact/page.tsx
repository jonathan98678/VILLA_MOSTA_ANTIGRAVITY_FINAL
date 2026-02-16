"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="section bg-stone-800 text-white">
                    <div className="container text-center">
                        <span
                            className={cn(
                                "text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-stone-400 block mb-3 sm:mb-4 transition-all duration-700",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            )}
                        >
                            GET IN TOUCH
                        </span>
                        <h1
                            className={cn(
                                "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 transition-all duration-700 delay-100",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            )}
                        >
                            Contact Us
                        </h1>
                        <p
                            className={cn(
                                "text-sm sm:text-base md:text-lg text-stone-300 max-w-2xl mx-auto transition-all duration-700 delay-200",
                                isVisible ? "opacity-100" : "opacity-0"
                            )}
                        >
                            Have questions about your stay or want to arrange something special?
                            We&apos;re here to help make your experience unforgettable.
                        </p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="section bg-[var(--color-warm-cream)]">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
                            {/* Contact Form */}
                            <div>
                                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-800 mb-5 sm:mb-6">
                                    Send us a message
                                </h2>

                                {isSubmitted ? (
                                    <div className="bg-white rounded-lg p-6 sm:p-8 text-center border border-stone-100">
                                        <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-4" />
                                        <h3 className="font-serif text-lg sm:text-xl text-stone-800 mb-2">
                                            Message Sent!
                                        </h3>
                                        <p className="text-sm sm:text-base text-stone-500 mb-6">
                                            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                                        </p>
                                        <Button
                                            variant="secondary"
                                            onClick={() => setIsSubmitted(false)}
                                        >
                                            Send Another Message
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-stone-700 mb-1.5 sm:mb-2">
                                                    Your Name *
                                                </label>
                                                <input
                                                    type="text" id="name" name="name" required
                                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-stone-200 text-stone-800 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-honey)] focus:border-transparent transition-all"
                                                    placeholder="John Smith"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-stone-700 mb-1.5 sm:mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email" id="email" name="email" required
                                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-stone-200 text-stone-800 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-honey)] focus:border-transparent transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-stone-700 mb-1.5 sm:mb-2">
                                                Subject *
                                            </label>
                                            <select
                                                id="subject" name="subject" required
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-stone-200 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-honey)] focus:border-transparent transition-all"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="booking">Booking Inquiry</option>
                                                <option value="availability">Availability Question</option>
                                                <option value="special">Special Request</option>
                                                <option value="tour">Private Car Tour</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-stone-700 mb-1.5 sm:mb-2">
                                                Your Message *
                                            </label>
                                            <textarea
                                                id="message" name="message" rows={5} required
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-stone-200 text-stone-800 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-honey)] focus:border-transparent transition-all resize-none"
                                                placeholder="Tell us about your plans or any questions you have..."
                                            />
                                        </div>

                                        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                                            {isSubmitting ? "Sending..." : (
                                                <><Send className="w-4 h-4" /> Send Message</>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-800 mb-5 sm:mb-6">
                                    Contact Information
                                </h2>

                                <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
                                    <div className="flex gap-3 sm:gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-stone-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm sm:text-base font-medium text-stone-800 mb-1">Email</h3>
                                            <a
                                                href="mailto:info@villamosta.com"
                                                className="text-base sm:text-lg text-stone-500 hover:text-[var(--color-accent)] transition-colors"
                                            >
                                                info@villamosta.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 sm:gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-stone-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm sm:text-base font-medium text-stone-800 mb-1">Address</h3>
                                            <p className="text-base sm:text-lg text-stone-500">
                                                Villa Mosta<br />
                                                51 Triq Il-Kungress Ewkaristiku<br />
                                                Mosta, Malta
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Host info */}
                                <div className="bg-white border border-stone-100 p-5 sm:p-6">
                                    <h3 className="text-sm sm:text-base font-medium text-stone-800 mb-2">
                                        Your Host — Andreas
                                    </h3>
                                    <p className="text-sm text-stone-500 leading-relaxed mb-3">
                                        We typically respond to all inquiries within 24 hours. For urgent
                                        matters regarding an existing booking, please email us directly.
                                    </p>
                                    <p className="text-xs text-stone-400">
                                        Languages: English, German, French, Bosnian, Croatian, Serbian, Swedish
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
