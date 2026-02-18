"use client";

import { Users } from "lucide-react";

export default function AdminGuestsPage() {
    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-serif text-[var(--admin-text)]">Guests</h1>
                    <p className="text-[var(--admin-text-muted)] text-sm mt-1">Guest information from bookings</p>
                </div>
            </header>

            <div className="admin-card rounded-xl p-12 text-center">
                <Users className="w-12 h-12 text-[var(--admin-text-muted)] mx-auto mb-4 opacity-40" />
                <h3 className="font-semibold text-[var(--admin-text)] mb-2">No guest data yet</h3>
                <p className="text-[var(--admin-text-muted)] text-sm max-w-md mx-auto">
                    Guest information will appear here once you connect a booking system
                    and start receiving reservations.
                </p>
            </div>
        </div>
    );
}
