import Link from "next/link";

const footerLinks = {
    explore: [
        { label: "The Villa", href: "/villa" },
        { label: "Our Rooms", href: "/rooms" },
        { label: "Location", href: "/location" },
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
        <footer className="bg-stone-800 text-white">
            {/* Main */}
            <div className="container py-14 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="font-serif text-2xl block mb-5">
                            Villa Mosta
                        </Link>
                        <p className="text-stone-300 max-w-md mb-6 leading-relaxed">
                            A charming Maltese home offering elegant accommodations with
                            stunning terraces and personalized service.
                        </p>
                        <p className="text-stone-400 text-sm mb-4">
                            51 Triq Il-Kungress Ewkaristiku, Mosta, Malta
                        </p>
                        <div className="space-y-1.5 text-sm text-stone-300">
                            <p>
                                <span className="text-white">Email:</span>{" "}
                                <a href="mailto:info@villamosta.com" className="hover:text-white transition-colors">
                                    info@villamosta.com
                                </a>
                            </p>
                            <p>
                                <span className="text-white">Phone:</span>{" "}
                                <a href="tel:+35699123456" className="hover:text-white transition-colors">
                                    +356 99 123 456
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 mb-5">
                            Explore
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.explore.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white text-sm hover:text-amber-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 mb-5">
                            Information
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.info.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white text-sm hover:text-amber-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-stone-700">
                <div className="container py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-stone-400">
                    <p>© {currentYear} Villa Mosta. All rights reserved.</p>
                    <div className="flex gap-5">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
