"use client";

import * as React from "react";
import { Calendar, Filter } from "lucide-react";

export default function AdminBookingsPage() {
    return (
        <>
            <header className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-stone-800">Bookings</h1>
                    <p className="text-stone-500 text-sm">Manage reservations</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 border border-stone-300 text-stone-700 px-4 py-2 rounded-lg hover:bg-stone-50 transition-colors">
                        <Filter className="w-4 h-4" />
                        <span>Filter</span>
                    </button>
                    <button className="flex items-center gap-2 border border-stone-300 text-stone-700 px-4 py-2 rounded-lg hover:bg-stone-50 transition-colors">
                        <Calendar className="w-4 h-4" />
                        <span>Calendar View</span>
                    </button>
                </div>
            </header>

            <div className="p-6">
                {/* Integration notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h2 className="font-semibold text-blue-800 mb-2">Booking Integration</h2>
                    <p className="text-blue-700 text-sm mb-4">
                        Connect your booking channels to see reservations here:
                    </p>
                    <ul className="text-blue-700 text-sm space-y-2 mb-4">
                        <li>• <strong>Booking.com</strong> - Sync via their Partner API</li>
                        <li>• <strong>Airbnb</strong> - Connect via iCal or API</li>
                        <li>• <strong>Direct bookings</strong> - Use Stripe for payments</li>
                    </ul>
                    <p className="text-blue-600 text-xs">
                        Currently, bookings from your channels are managed directly on those platforms.
                    </p>
                </div>

                {/* Empty state */}
                <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                    <Calendar className="w-12 h-12 text-stone-300 mx-auto mb-4" />
                    <h3 className="font-semibold text-stone-800 mb-2">No bookings yet</h3>
                    <p className="text-stone-500 text-sm max-w-md mx-auto">
                        When you receive bookings through your connected channels or direct website,
                        they will appear here.
                    </p>
                </div>
            </div>
        </>
    );
}
