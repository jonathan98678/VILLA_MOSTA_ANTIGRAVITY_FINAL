"use client";

import * as React from "react";
import Link from "next/link";
import { Bell, ChevronRight, TrendingUp, TrendingDown } from "lucide-react";

// This would come from your database in production
const stats = [
    { label: "Total Bookings", value: "—", change: null },
    { label: "Revenue (MTD)", value: "—", change: null },
    { label: "Avg. Rating", value: "9.3", change: "+0.2", positive: true },
    { label: "Occupancy", value: "—", change: null },
];

export default function AdminDashboard() {
    return (
        <>
            {/* Top Bar */}
            <header className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-stone-800">Dashboard</h1>
                    <p className="text-stone-500 text-sm">Overview of your property</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="relative p-2 text-stone-500 hover:text-stone-700">
                        <Bell className="w-5 h-5" />
                    </button>
                </div>
            </header>

            <div className="p-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
                            <p className="text-stone-500 text-sm mb-1">{stat.label}</p>
                            <div className="flex items-end justify-between">
                                <p className="text-2xl font-semibold text-stone-800">{stat.value}</p>
                                {stat.change && (
                                    <span className={`text-sm flex items-center gap-1 ${stat.positive ? "text-green-600" : "text-red-500"}`}>
                                        {stat.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                        {stat.change}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Setup Notice */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                    <h2 className="font-semibold text-amber-800 mb-2">Setup Required</h2>
                    <p className="text-amber-700 text-sm mb-4">
                        Connect a database to see real booking data. The admin dashboard will display live information once connected.
                    </p>
                    <Link
                        href="/admin/settings"
                        className="inline-flex items-center gap-1 text-amber-800 font-medium text-sm hover:underline"
                    >
                        Go to Settings <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Quick Links */}
                <h2 className="font-semibold text-stone-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link
                        href="/admin/rooms"
                        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="font-semibold text-stone-800 mb-1">Manage Rooms</h3>
                        <p className="text-stone-500 text-sm">Edit room details, pricing, and availability</p>
                    </Link>
                    <Link
                        href="/admin/bookings"
                        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="font-semibold text-stone-800 mb-1">View Bookings</h3>
                        <p className="text-stone-500 text-sm">See upcoming and past reservations</p>
                    </Link>
                    <Link
                        href="/admin/gallery"
                        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="font-semibold text-stone-800 mb-1">Update Gallery</h3>
                        <p className="text-stone-500 text-sm">Add or remove photos from the website</p>
                    </Link>
                </div>
            </div>
        </>
    );
}
