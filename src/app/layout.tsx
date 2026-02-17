import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothCursor } from "@/components/ui/SmoothCursor";

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
        default: "Villa Mosta | Traditional Maltese Holiday Home in Mosta, Malta",
        template: "%s | Villa Mosta",
    },
    description:
        "Stay at Villa Mosta, a charming traditional Maltese home in the heart of Mosta. Beautiful terraces, Rotunda views, authentic hospitality by Minja and Andreas. Rated 9.4 on Booking.com.",
    keywords: [
        "villa mosta",
        "malta accommodation",
        "mosta malta",
        "holiday home malta",
        "traditional maltese house",
        "malta vacation rental",
        "boutique accommodation malta",
        "mosta rotunda",
        "stay in mosta",
        "malta travel",
        "family holiday malta",
        "bed and breakfast malta",
    ],
    authors: [{ name: "Villa Mosta" }],
    creator: "Villa Mosta",
    openGraph: {
        type: "website",
        locale: "en_MT",
        siteName: "Villa Mosta",
        title: "Villa Mosta | Traditional Maltese Holiday Home",
        description:
            "Experience authentic Malta at Villa Mosta. A spacious traditional home with terraces, Rotunda views, and warm hospitality. Rated 9.4 from 90+ reviews.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Villa Mosta | Traditional Maltese Holiday Home",
        description:
            "Stay in a charming Maltese home in Mosta. Beautiful terraces, central location, rated 9.4 on Booking.com.",
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
        <html lang="en">
            <body className={cn("font-sans antialiased", inter.variable, playfair.variable)}>
                <SmoothCursor />
                {children}
            </body>
        </html>
    );
}
