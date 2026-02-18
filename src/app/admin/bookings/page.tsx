"use client";

import * as React from "react";
import { Calendar, Filter, ExternalLink, Info, CalendarDays, ArrowUpRight } from "lucide-react";

import { Plus } from "lucide-react";
import { ManualBookingModal } from "@/components/admin/ManualBookingModal";

export default function AdminBookingsPage() {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-serif text-[var(--admin-text)]">Bookings</h1>
                    <p className="text-[var(--admin-text-muted)] text-sm mt-1">Manage reservations and availability.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 border border-[var(--admin-border)] text-[var(--admin-text)] px-4 py-2 rounded-lg hover:bg-[var(--admin-bg)] transition-colors text-sm font-medium">
                        <Filter className="w-4 h-4" />
                        <span>Filter</span>
                    </button>
                    <button className="flex items-center gap-2 border border-[var(--admin-border)] text-[var(--admin-text)] px-4 py-2 rounded-lg hover:bg-[var(--admin-bg)] transition-colors text-sm font-medium">
                        <Calendar className="w-4 h-4" />
                        <span>Calendar View</span>
                    </button>
                </div>
            </header>

            {/* Integration notice */}
            <div className="admin-card rounded-xl p-8 mb-6 border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                        <CalendarDays className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                        <h2 className="font-semibold text-[var(--admin-text)] text-lg mb-2">Booking Integration</h2>
                        <p className="text-[var(--admin-text-muted)] text-sm mb-5 leading-relaxed">
                            Connect your booking channels to see reservations here. Currently, bookings from external platforms are managed directly on those platforms.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <a
                                href="https://partner.booking.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="admin-card rounded-xl p-4 hover:border-[var(--admin-accent)] transition-colors group"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-[var(--admin-text)]">Booking.com</span>
                                    <ArrowUpRight className="w-4 h-4 text-[var(--admin-text-muted)] group-hover:text-[var(--admin-accent)] transition-colors" />
                                </div>
                                <p className="text-xs text-[var(--admin-text-muted)]">Sync via Partner API</p>
                                <div className="mt-3 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    <span className="text-[10px] text-green-600 dark:text-green-400 font-medium">Connected</span>
                                </div>
                            </a>
                            <a
                                href="https://www.airbnb.com/hosting"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="admin-card rounded-xl p-4 hover:border-[var(--admin-accent)] transition-colors group"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-[var(--admin-text)]">Airbnb</span>
                                    <ArrowUpRight className="w-4 h-4 text-[var(--admin-text-muted)] group-hover:text-[var(--admin-accent)] transition-colors" />
                                </div>
                                <p className="text-xs text-[var(--admin-text-muted)]">Connect via iCal or API</p>
                                <div className="mt-3 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">Pending</span>
                                </div>
                            </a>
                            <div className="admin-card rounded-xl p-4 opacity-60">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-[var(--admin-text)]">Direct Bookings</span>
                                </div>
                                <p className="text-xs text-[var(--admin-text-muted)]">Stripe integration</p>
                                <div className="mt-3 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                                    <span className="text-[10px] text-[var(--admin-text-muted)] font-medium">Coming Soon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Empty state */}
            <div className="admin-card rounded-xl p-12 text-center">
                <Calendar className="w-12 h-12 text-[var(--admin-text-muted)] mx-auto mb-4 opacity-40" />
                <h3 className="text-lg font-medium text-[var(--admin-text)] mb-2">No bookings to display</h3>
                <p className="text-[var(--admin-text-muted)] text-sm mb-6 max-w-md mx-auto">
                    Once your booking integrations are connected, reservations will appear here. You can also manually log a booking.
                </p>
                <button
                    onClick={() => alert("Manual booking modal would open here")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--admin-text)] text-[var(--admin-bg)] rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                >
                    <Plus className="w-4 h-4" />
                    Log Manual Booking
                </button>
            </div>
        </>
    );
}

import { Plus } from "lucide-react";
