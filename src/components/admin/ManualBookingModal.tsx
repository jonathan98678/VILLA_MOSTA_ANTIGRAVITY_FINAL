"use client";

import * as React from "react";
import { X, Save, Calendar, User, Mail, CreditCard } from "lucide-react";

interface ManualBookingModalProps {
    onClose: () => void;
}

export function ManualBookingModal({ onClose }: ManualBookingModalProps) {
    const [saving, setSaving] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSaving(false);
        onClose();
        alert("Booking created manually (Mock)");
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-lg bg-[var(--admin-card)] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up">
                {/* Header */}
                <div className="px-6 py-4 border-b border-[var(--admin-border)] flex items-center justify-between bg-[var(--admin-bg)]">
                    <h2 className="text-lg font-semibold text-[var(--admin-text)]">Log Manual Booking</h2>
                    <button onClick={onClose} className="text-[var(--admin-text-muted)] hover:text-[var(--admin-text)] transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-[var(--admin-text)] flex items-center gap-2">
                            <User className="w-4 h-4" /> Guest Name
                        </label>
                        <input type="text" required className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] outline-none focus:ring-2 focus:ring-[var(--admin-accent)]" placeholder="John Doe" />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-[var(--admin-text)] flex items-center gap-2">
                            <Mail className="w-4 h-4" /> Email
                        </label>
                        <input type="email" required className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] outline-none focus:ring-2 focus:ring-[var(--admin-accent)]" placeholder="john@example.com" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-[var(--admin-text)] flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> Check-in
                            </label>
                            <input type="date" required className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] outline-none focus:ring-2 focus:ring-[var(--admin-accent)]" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-[var(--admin-text)] flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> Check-out
                            </label>
                            <input type="date" required className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] outline-none focus:ring-2 focus:ring-[var(--admin-accent)]" />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-[var(--admin-text)] flex items-center gap-2">
                            <CreditCard className="w-4 h-4" /> Payment Status
                        </label>
                        <select className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] outline-none focus:ring-2 focus:ring-[var(--admin-accent)]">
                            <option>Pending</option>
                            <option>Paid (Cash)</option>
                            <option>Paid (Transfer)</option>
                        </select>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={saving}
                            className="w-full py-2.5 bg-[var(--admin-accent)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        >
                            {saving ? "Saving..." : <><Save className="w-4 h-4" /> Create Booking</>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
