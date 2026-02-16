import * as React from "react";
import Link from "next/link";
import { createServerClient } from "@/lib/supabase";
import {
    Bell,
    TrendingUp,
    TrendingDown,
    Calendar,
    Users,
    CreditCard,
    Star,
    ExternalLink,
    Smartphone,
    Monitor
} from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
    const supabase = createServerClient();

    // Fetch Bookings Count
    const { count: bookingsCount } = await supabase
        .from("bookings")
        .select("*", { count: "exact", head: true });

    // Fetch Reviews Count & Avg Rating
    const { data: reviews } = await supabase
        .from("reviews")
        .select("rating");

    const reviewCount = reviews?.length || 0;
    const avgRating = reviewCount > 0
        ? (reviews!.reduce((acc, r) => acc + r.rating, 0) / reviewCount).toFixed(1)
        : "—";

    // Fetch Rooms Count
    const { count: roomsCount } = await supabase
        .from("rooms")
        .select("*", { count: "exact", head: true });

    const stats = [
        {
            label: "Total Bookings",
            value: bookingsCount || 0,
            change: "+12%", // Placeholder for now
            positive: true,
            icon: Calendar,
            color: "text-blue-600",
            bg: "bg-blue-100 dark:bg-blue-900/20"
        },
        {
            label: "Total Revenue",
            value: "€0.00", // Need real data from bookings sum
            change: "+8%", // Placeholder
            positive: true,
            icon: CreditCard,
            color: "text-emerald-600",
            bg: "bg-emerald-100 dark:bg-emerald-900/20"
        },
        {
            label: "Avg. Rating",
            value: avgRating,
            subtext: `from ${reviewCount} reviews`,
            change: "+0.1",
            positive: true,
            icon: Star,
            color: "text-amber-600",
            bg: "bg-amber-100 dark:bg-amber-900/20"
        },
        {
            label: "Active Rooms",
            value: roomsCount || 0,
            change: null,
            icon: Users,
            color: "text-purple-600",
            bg: "bg-purple-100 dark:bg-purple-900/20"
        },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-serif text-[var(--admin-text)]">Dashboard</h1>
                    <p className="text-[var(--admin-text-muted)] mt-1">Welcome back, Admin</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="p-2 text-[var(--admin-text-muted)] hover:bg-[var(--admin-card)] rounded-lg transition-colors relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[var(--admin-bg)]"></span>
                    </button>
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-[var(--admin-text)] text-[var(--admin-bg)] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                        <ExternalLink className="w-4 h-4" />
                        <span>Visit Site</span>
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <div key={stat.label} className="admin-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            {stat.change && (
                                <span className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${stat.positive ? "text-green-600 bg-green-100 dark:bg-green-900/20" : "text-red-600 bg-red-100"}`}>
                                    {stat.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                    {stat.change}
                                </span>
                            )}
                        </div>
                        <h3 className="text-[var(--admin-text-muted)] text-sm font-medium">{stat.label}</h3>
                        <p className="text-2xl font-semibold text-[var(--admin-text)] mt-1">{stat.value}</p>
                        {stat.subtext && <p className="text-xs text-[var(--admin-text-muted)] mt-1">{stat.subtext}</p>}
                    </div>
                ))}
            </div>

            {/* Live Preview Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="admin-card rounded-xl overflow-hidden border border-[var(--admin-border)]">
                        <div className="bg-[var(--admin-card)] border-b border-[var(--admin-border)] p-4 flex items-center justify-between">
                            <h2 className="font-medium text-[var(--admin-text)]">Live Website Preview</h2>
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-video bg-stone-100 dark:bg-stone-900">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-stone-400 text-sm">Preview available on deployment</p>
                            </div>
                            <iframe
                                src="https://villamosta.com" // Use production URL or relative '/' if standard
                                className="absolute inset-0 w-full h-full opacity-50 hover:opacity-100 transition-opacity duration-500"
                                style={{ pointerEvents: 'none' }} // Disable interaction to prevent navigation trap
                                title="Live Preview"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Quick Actions */}
                    <div className="admin-card p-6 rounded-xl">
                        <h2 className="font-serif text-lg text-[var(--admin-text)] mb-4">Quick Actions</h2>
                        <div className="space-y-3">
                            <Link href="/admin/rooms" className="block w-full p-3 text-left rounded-lg hover:bg-[var(--admin-bg)] transition-colors border border-[var(--admin-border)] hover:border-[var(--admin-accent)] group">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-purple-100 dark:bg-purple-900/20 text-purple-600 rounded-md">
                                        <Users className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-[var(--admin-text)] group-hover:text-[var(--admin-accent)] transition-colors">Manage Guests</p>
                                        <p className="text-xs text-[var(--admin-text-muted)]">Looking for booking details?</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/admin/bookings" className="block w-full p-3 text-left rounded-lg hover:bg-[var(--admin-bg)] transition-colors border border-[var(--admin-border)] hover:border-[var(--admin-accent)] group">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-md">
                                        <Calendar className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-[var(--admin-text)] group-hover:text-[var(--admin-accent)] transition-colors">Block Dates</p>
                                        <p className="text-xs text-[var(--admin-text-muted)]">Update availability calendar</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
