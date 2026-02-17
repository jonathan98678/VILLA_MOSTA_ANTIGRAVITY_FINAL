import Link from "next/link";
import { BookButton } from "@/components/ui/BookButton";

const footerLinks = {
    explore: [
        { label: "The Villa", href: "/villa" },
        { label: "Our Rooms", href: "/rooms" },
        { label: "Location", href: "/location" },
        { label: "Blog", href: "/blog" },
        { label: "Reviews", href: "/reviews" },
    ],
    info: [
        { label: "Contact Us", href: "/contact" },
        { label: "FAQ", href: "/faq" },
        { label: "Book Now", href: "/book" },
    ],
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-stone-dark)] text-white">
            {/* Main */}
            <div className="container py-16 sm:py-20 lg:py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-10">
                    {/* Brand */}
                    <div className="sm:col-span-2">
                        <Link href="/" className="font-serif text-2xl sm:text-3xl block mb-5 sm:mb-6 tracking-tight">
                            Villa Mosta
                        </Link>
                        <p className="text-stone-400 text-sm sm:text-base max-w-md mb-6 sm:mb-8 leading-relaxed">
                            A spacious traditional Maltese home with beautiful terraces,
                            central location, and genuine hospitality. Hosted by Minja and Andreas.
                        </p>
                        <address className="not-italic text-stone-500 text-sm mb-5 leading-relaxed">
                            51 Triq Il-Kungress Ewkaristiku<br />
                            Mosta, MST 2201, Malta
                        </address>
                        <div className="text-sm text-stone-400 space-y-1.5">
                            <p>
                                <span className="text-stone-300 font-medium">Email:</span>{" "}
                                <a href="mailto:info@villamosta.com" className="hover:text-[var(--color-honey)] transition-colors">
                                    info@villamosta.com
                                </a>
                            </p>
                        </div>

                        {/* Footer CTA */}
                        <div className="mt-8">
                            <BookButton size="sm">
                                Book Your Stay
                            </BookButton>
                        </div>
                    </div>

                    {/* Explore */}
                    <nav aria-label="Explore Villa Mosta">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-500 mb-5 sm:mb-6">
                            Explore
                        </h4>
                        <ul className="space-y-3 sm:space-y-3.5">
                            {footerLinks.explore.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-stone-300 text-sm hover:text-[var(--color-honey)] transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Info */}
                    <nav aria-label="Information">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-500 mb-5 sm:mb-6">
                            Information
                        </h4>
                        <ul className="space-y-3 sm:space-y-3.5">
                            {footerLinks.info.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-stone-300 text-sm hover:text-[var(--color-honey)] transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-stone-700/50">
                <div className="container py-6 sm:py-7 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
                    <p>&copy; {currentYear} Villa Mosta. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-stone-300 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-stone-300 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
