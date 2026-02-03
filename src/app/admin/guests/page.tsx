"use client";

import { Users } from "lucide-react";

export default function AdminGuestsPage() {
    return (
        <>
            <header className="bg-white border-b border-stone-200 px-6 py-4">
                <h1 className="text-xl font-semibold text-stone-800">Guests</h1>
                <p className="text-stone-500 text-sm">Guest information from bookings</p>
            </header>

            <div className="p-6">
                <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                    <Users className="w-12 h-12 text-stone-300 mx-auto mb-4" />
                    <h3 className="font-semibold text-stone-800 mb-2">No guest data yet</h3>
                    <p className="text-stone-500 text-sm max-w-md mx-auto">
                        Guest information will appear here once you connect a booking system
                        and start receiving reservations.
                    </p>
                </div>
            </div>
        </>
    );
}
