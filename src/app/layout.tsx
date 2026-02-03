import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Font configurations
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair",
    weight: ["400", "500", "600", "700"],
});

// Site metadata
export const metadata: Metadata = {
    title: {
        default: "Villa Mosta | Luxury Boutique Accommodation",
        template: "%s | Villa Mosta",
    },
    description:
        "Experience unparalleled luxury at Villa Mosta. A boutique villa offering elegant accommodations, stunning views, and personalized service for an unforgettable stay.",
    keywords: [
        "luxury villa",
        "boutique accommodation",
        "vacation rental",
        "villa booking",
        "luxury stay",
        "boutique hotel",
    ],
    authors: [{ name: "Villa Mosta" }],
    creator: "Villa Mosta",
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Villa Mosta",
        title: "Villa Mosta | Luxury Boutique Accommodation",
        description:
            "Experience unparalleled luxury at Villa Mosta. A boutique villa offering elegant accommodations, stunning views, and personalized service.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Villa Mosta | Luxury Boutique Accommodation",
        description:
            "Experience unparalleled luxury at Villa Mosta. A boutique villa offering elegant accommodations and personalized service.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export const viewport: Viewport = {
    themeColor: "#f5f1ec",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className="font-sans antialiased">
                {children}
            </body>
        </html>
    );
}
