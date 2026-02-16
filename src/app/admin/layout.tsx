"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
    X,
    Moon,
    Sun,
    LayoutDashboard
} from "lucide-react";
import { cn } from "@/lib/utils";
import "./admin.css";

const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
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
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [theme, setTheme] = React.useState<"light" | "dark">("light");
    const [mounted, setMounted] = React.useState(false);

    // Initialize theme from localStorage
    React.useEffect(() => {
        const savedTheme = localStorage.getItem("admin-theme") as "light" | "dark" | null;
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        }
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("admin-theme", newTheme);
    };

    // Skip admin layout for login page
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    const handleLogout = async () => {
        await fetch("/api/admin/auth", { method: "DELETE" });
        router.push("/admin/login");
        router.refresh();
    };

    if (!mounted) return null; // Prevent hydration mismatch

    return (
        <div className="min-h-screen admin-bg transition-theme font-sans" data-theme={theme}>
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Mobile Header */}
            <header className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-stone-900/90 backdrop-blur-md text-white px-4 py-3 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-white hover:text-amber-400 transition-colors"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <span className="font-serif text-lg tracking-wide">Villa Mosta</span>
                </div>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                    {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
                </button>
            </header>

            {/* Sidebar */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 w-72 glass-sidebar transform transition-transform duration-300 ease-out",
                "lg:translate-x-0",
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="h-full flex flex-col">
                    <div className="p-8 flex items-center justify-between">
                        <div>
                            <a href="https://villamosta.com" target="_blank" rel="noopener noreferrer" className="font-serif text-2xl text-white tracking-wide hover:text-amber-400 transition-colors">
                                Villa Mosta
                            </a>
                            <p className="text-stone-400 text-xs mt-1 uppercase tracking-wider">Admin Dashboard</p>
                        </div>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden text-stone-400 hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href ||
                                (item.href !== "/admin" && pathname.startsWith(item.href));

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 group relative",
                                        isActive
                                            ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-900/20"
                                            : "text-stone-400 hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    <item.icon className={cn(
                                        "w-5 h-5 transition-colors",
                                        isActive ? "text-white" : "text-stone-500 group-hover:text-amber-400"
                                    )} />
                                    <span>{item.label}</span>
                                    {isActive && (
                                        <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t border-white/5 space-y-2 bg-black/20">
                        <div className="flex items-center justify-between px-4 py-2">
                            <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Preferences</span>
                            <button
                                onClick={toggleTheme}
                                className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
                                title="Toggle Theme"
                            >
                                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
                            </button>
                        </div>
                        <a
                            href="https://villamosta.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-2.5 text-stone-400 hover:text-white hover:bg-white/5 rounded-xl transition-all text-sm"
                        >
                            <Home className="w-4 h-4" />
                            <span>View Live Website</span>
                            <div className="ml-auto flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] text-green-400 font-medium">Live</span>
                            </div>
                        </a>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-4 py-2.5 text-stone-400 hover:text-red-400 hover:bg-red-950/30 rounded-xl transition-all w-full text-sm group"
                        >
                            <LogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            <span>Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="lg:ml-72 min-h-screen transition-all duration-300">
                <div className="h-16 lg:hidden" /> {/* Spacer for mobile header */}
                <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in">
                    {children}
                </main>
            </div>
        </div>
    );
}
