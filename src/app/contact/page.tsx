"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Send, CheckCircle, Globe } from "lucide-react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setIsSubmitted(true);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Error sending message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main className="pt-20 min-h-screen">
                {/* Hero */}
                <section className="page-hero text-center">
                    <div className="container max-w-3xl mx-auto">
                        <span
                            className={cn(
                                "section-overline text-amber-400 transition-all duration-700",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            )}
                        >
                            GET IN TOUCH
                        </span>
                        <h1
                            className={cn(
                                "font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 transition-all duration-700 delay-100",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            )}
                        >
                            Contact Us
                        </h1>
                        <p
                            className={cn(
                                "text-base sm:text-lg text-stone-300 max-w-2xl mx-auto transition-all duration-700 delay-200",
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
                    <div className="container max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                            {/* Contact Form */}
                            <div className="lg:col-span-3">
                                <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-8">
                                    Send us a message
                                </h2>

                                {isSubmitted ? (
                                    <div className="card-premium p-10 sm:p-14 text-center">
                                        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-5" />
                                        <h3 className="font-serif text-2xl text-stone-800 mb-3">
                                            Message Sent!
                                        </h3>
                                        <p className="text-base text-stone-500 mb-8">
                                            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="px-7 py-3 bg-stone-800 text-white text-sm font-medium rounded-full hover:bg-stone-700 transition-colors"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                                                    Your Name *
                                                </label>
                                                <input
                                                    type="text" id="name" name="name" required
                                                    className="w-full px-5 py-3.5 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-honey)] focus:border-transparent transition-all"
                                                    placeholder="John Smith"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email" id="email" name="email" required
                                                    className="w-full px-5 py-3.5 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-honey)] focus:border-transparent transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                                                Subject *
                                            </label>
                                            <select
                                                id="subject" name="subject" required
                                                className="w-full px-5 py-3.5 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-honey)] focus:border-transparent transition-all"
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
                                            <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                                                Your Message *
                                            </label>
                                            <textarea
                                                id="message" name="message" rows={5} required
                                                className="w-full px-5 py-3.5 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-honey)] focus:border-transparent transition-all resize-none"
                                                placeholder="Tell us about your plans or any questions you have..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-sm font-medium uppercase tracking-wider rounded-full hover:from-amber-500 hover:to-amber-400 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                                        >
                                            {isSubmitting ? "Sending..." : (
                                                <><Send className="w-4 h-4" /> Send Message</>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>

                            {/* Contact Info */}
                            <div className="lg:col-span-2">
                                <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-8">
                                    Contact Information
                                </h2>

                                <div className="space-y-6 mb-10">
                                    <div className="card-premium p-6 flex gap-5">
                                        <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-[var(--color-accent)]" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-stone-800 mb-1.5">Email</h3>
                                            <a
                                                href="mailto:info@villamosta.com"
                                                className="text-base text-stone-500 hover:text-[var(--color-accent)] transition-colors"
                                            >
                                                info@villamosta.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="card-premium p-6 flex gap-5">
                                        <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-stone-800 mb-1.5">Address</h3>
                                            <address className="not-italic text-base text-stone-500 leading-relaxed">
                                                Villa Mosta<br />
                                                51 Triq Il-Kungress Ewkaristiku<br />
                                                Mosta, MST 2201, Malta
                                            </address>
                                        </div>
                                    </div>

                                    <div className="card-premium p-6 flex gap-5">
                                        <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Globe className="w-5 h-5 text-[var(--color-accent)]" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-stone-800 mb-1.5">Languages</h3>
                                            <p className="text-base text-stone-500">
                                                English, German, French, Bosnian, Croatian, Serbian, Swedish
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Host info */}
                                <div className="card-premium p-7">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-honey)] to-amber-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-serif text-sm font-medium">M&A</span>
                                        </div>
                                        <div>
                                            <h3 className="text-base font-medium text-stone-800">Minja & Andreas</h3>
                                            <p className="text-xs text-stone-400">Your hosts</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-stone-500 leading-relaxed">
                                        We typically respond to all inquiries within 24 hours. For urgent
                                        matters regarding an existing booking, please email us directly.
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
