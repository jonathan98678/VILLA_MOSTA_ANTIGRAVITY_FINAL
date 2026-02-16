import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getRooms } from "@/lib/db";
import { BookingContent, BookingRoom } from "@/components/booking/BookingContent";

// Loading fallback
function BookingLoading() {
    return (
        <div className="section">
            <div className="container">
                <div className="flex items-center justify-center min-h-[400px]">
                    <div className="text-center">
                        <div className="w-12 h-12 border-4 border-cream-300 border-t-stone rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-body text-text-muted">Loading booking...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const metadata = {
    title: "Book Your Stay",
    description: "Reserve your perfect Mediterranean getaway at Villa Mosta.",
};

export default async function BookingPage() {
    const dbRooms = await getRooms();

    const rooms: BookingRoom[] = dbRooms.map((room) => ({
        id: room.id,
        slug: room.slug,
        name: room.name,
        basePrice: room.base_price,
        maxGuests: room.max_guests,
        image: room.images[0] || "/images/placeholder.jpg",
    }));

    return (
        <>
            <Header />
            <main className="pt-20 min-h-screen bg-cream-100">
                <Suspense fallback={<BookingLoading />}>
                    <BookingContent rooms={rooms} />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}
