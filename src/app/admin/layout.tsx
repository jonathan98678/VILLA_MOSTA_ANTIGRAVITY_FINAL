"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    Bed,
    Calendar,
    MessageSquare,
    Settings,
    Users,
    Image as ImageIcon,
    LogOut,
    Menu,
    X
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { icon: Home, label: "Dashboard", href: "/admin" },
    { icon: Bed, label: "Rooms", href: "/admin/rooms" },
    { icon: Calendar, label: "Bookings", href: "/admin/bookings" },
    { icon: MessageSquare, label: "Reviews", href: "/admin/reviews" },
    { icon: ImageIcon, label: "Gallery", href: "/admin/gallery" },
    { icon: Users, label: "Guests", href: "/admin/guests" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-stone-100">
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Fixed Top Header for Mobile */}
            <header className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-stone-800 text-white px-4 py-3 flex items-center gap-4">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="text-white"
                >
                    <Menu className="w-6 h-6" />
                </button>
                <span className="font-serif text-lg">Villa Mosta Admin</span>
            </header>

            {/* Sidebar - Fixed on desktop */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 w-64 bg-stone-800 text-white transform transition-transform duration-300",
                "lg:translate-x-0",
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-6 flex items-center justify-between">
                    <div>
                        <Link href="/" className="font-serif text-xl">Villa Mosta</Link>
                        <p className="text-stone-400 text-xs mt-1">Admin Dashboard</p>
                    </div>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden text-stone-400 hover:text-white"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <nav className="mt-4">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href ||
                            (item.href !== "/admin" && pathname.startsWith(item.href));

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-6 py-3 text-sm transition-colors",
                                    isActive
                                        ? "bg-stone-700 text-white border-l-2 border-amber-500"
                                        : "text-stone-300 hover:bg-stone-700 hover:text-white border-l-2 border-transparent"
                                )}
                            >
                                <item.icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 left-0 w-full p-4 border-t border-stone-700">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-stone-400 hover:text-white text-sm transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        <span>Back to Site</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content - offset by sidebar width on desktop */}
            <div className="lg:ml-64 min-h-screen">
                {/* Spacer for mobile header */}
                <div className="h-14 lg:hidden" />

                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}
