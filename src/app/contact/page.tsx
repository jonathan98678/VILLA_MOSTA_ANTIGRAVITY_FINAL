"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="section bg-stone text-cream-100">
                    <div className="container text-center">
                        <span className="text-overline text-cream-300 block mb-4">
                            GET IN TOUCH
                        </span>
                        <h1 className="font-serif text-display mb-6">Contact Us</h1>
                        <p className="text-body-lg text-cream-200 max-w-2xl mx-auto">
                            Have questions about your stay or want to arrange something special?
                            We&apos;re here to help make your experience unforgettable.
                        </p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="section bg-cream-100">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Contact Form */}
                            <div>
                                <h2 className="font-serif text-heading-2 text-text mb-6">
                                    Send us a message
                                </h2>

                                {isSubmitted ? (
                                    <div className="bg-cream-200 rounded-lg p-8 text-center">
                                        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                                        <h3 className="font-serif text-heading-3 text-text mb-2">
                                            Message Sent!
                                        </h3>
                                        <p className="text-body text-text-muted mb-6">
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
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block text-body-sm font-medium text-text mb-2"
                                                >
                                                    Your Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    className="w-full px-4 py-3 bg-cream-200 border border-transparent rounded-lg text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                                    placeholder="John Smith"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-body-sm font-medium text-text mb-2"
                                                >
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    className="w-full px-4 py-3 bg-cream-200 border border-transparent rounded-lg text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-body-sm font-medium text-text mb-2"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="w-full px-4 py-3 bg-cream-200 border border-transparent rounded-lg text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                                placeholder="+1 234 567 890"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="subject"
                                                className="block text-body-sm font-medium text-text mb-2"
                                            >
                                                Subject *
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                required
                                                className="w-full px-4 py-3 bg-cream-200 border border-transparent rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="booking">Booking Inquiry</option>
                                                <option value="availability">Availability Question</option>
                                                <option value="special">Special Request</option>
                                                <option value="event">Event or Celebration</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-body-sm font-medium text-text mb-2"
                                            >
                                                Your Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={6}
                                                required
                                                className="w-full px-4 py-3 bg-cream-200 border border-transparent rounded-lg text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                                                placeholder="Tell us about your plans or any questions you have..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={isSubmitting}
                                            className="w-full md:w-auto"
                                        >
                                            {isSubmitting ? (
                                                "Sending..."
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h2 className="font-serif text-heading-2 text-text mb-6">
                                    Contact Information
                                </h2>

                                <div className="space-y-8 mb-12">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-cream-200 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-stone" />
                                        </div>
                                        <div>
                                            <h3 className="text-body font-medium text-text mb-1">Email</h3>
                                            <a
                                                href="mailto:hello@villamosta.com"
                                                className="text-body-lg text-text-muted hover:text-accent transition-colors"
                                            >
                                                hello@villamosta.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-cream-200 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-stone" />
                                        </div>
                                        <div>
                                            <h3 className="text-body font-medium text-text mb-1">Phone</h3>
                                            <a
                                                href="tel:+35699123456"
                                                className="text-body-lg text-text-muted hover:text-accent transition-colors"
                                            >
                                                +356 99 123 456
                                            </a>
                                            <p className="text-body-sm text-text-light mt-1">
                                                Available 9am - 8pm (CET)
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-cream-200 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-stone" />
                                        </div>
                                        <div>
                                            <h3 className="text-body font-medium text-text mb-1">Address</h3>
                                            <p className="text-body-lg text-text-muted">
                                                Villa Mosta<br />
                                                123 Mediterranean Lane<br />
                                                Mosta, Malta
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Response Time */}
                                <div className="bg-cream-200 rounded-lg p-6">
                                    <h3 className="text-body font-medium text-text mb-2">
                                        Response Time
                                    </h3>
                                    <p className="text-body text-text-muted">
                                        We typically respond to all inquiries within 24 hours. For urgent
                                        matters regarding an existing booking, please call us directly.
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
