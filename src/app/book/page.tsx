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
                        <div className="w-12 h-12 border-4 border-stone-200 border-t-stone-800 rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-sm text-stone-400">Loading booking...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const metadata = {
    title: "Book Your Stay | Villa Mosta",
    description: "Reserve your stay at Villa Mosta, Mosta, Malta. Choose from three unique rooms and book directly.",
};

export default async function BookingPage() {
    let dbRooms: Awaited<ReturnType<typeof getRooms>> = [];
    try {
        dbRooms = await getRooms();
    } catch (e) {
        console.error("Failed to fetch rooms:", e);
    }

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
            <main className="pt-20 min-h-screen bg-[var(--color-warm-cream)]">
                <Suspense fallback={<BookingLoading />}>
                    <BookingContent rooms={rooms} />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}
