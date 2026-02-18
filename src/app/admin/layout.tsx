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
    LayoutDashboard,
    FileText,
    Monitor,
    ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";
import "./admin.css";

const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
    { icon: Bed, label: "Rooms", href: "/admin/rooms" },
    { icon: Calendar, label: "Bookings", href: "/admin/bookings" },
    { icon: MessageSquare, label: "Reviews", href: "/admin/reviews" },
    { icon: ImageIcon, label: "Gallery", href: "/admin/gallery" },
    { icon: FileText, label: "Blog", href: "/admin/blog" },
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

    const [showPreview, setShowPreview] = React.useState(true);

    // Handle messages from the preview iframe
    React.useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // Security check - ensure message is from expected origin if possible, 
            // but for same-domain iframe it's less critical.
            if (event.data && event.data.type === 'ADMIN_NAVIGATE') {
                const targetPath = event.data.path;
                if (targetPath) {
                    router.push(targetPath);
                    // Optionally flash the preview border or show a toast
                }
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [router]);

    if (!mounted) return null; // Prevent hydration mismatch

    return (
        <div className="min-h-screen admin-bg transition-theme font-sans flex overflow-hidden" data-theme={theme}>
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 w-64 glass-sidebar transform transition-transform duration-300 ease-out lg:relative lg:translate-x-0",
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="h-full flex flex-col">
                    <div className="p-6 flex items-center justify-between">
                        <div>
                            <span className="font-serif text-xl text-[var(--admin-sidebar-text)] tracking-wide">Villa Mosta</span>
                            <p className="text-[var(--admin-sidebar-text)] opacity-60 text-xs mt-0.5 uppercase tracking-wider">Admin</p>
                        </div>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden text-stone-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href ||
                                (item.href !== "/admin" && pathname.startsWith(item.href));

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                                        isActive
                                            ? "bg-[var(--admin-accent)] text-white shadow-md shadow-[var(--admin-accent)]/20"
                                            : "text-[var(--admin-sidebar-text)] opacity-70 hover:bg-white/5 hover:opacity-100"
                                    )}
                                >
                                    <item.icon className={cn(
                                        "w-4 h-4 transition-colors",
                                        isActive ? "text-white" : "text-stone-500 group-hover:text-amber-400"
                                    )} />
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t border-white/5 space-y-2 bg-black/20 text-xs">
                        <div className="flex items-center justify-between px-2 mb-2">
                            <span className="text-stone-500 font-semibold uppercase tracking-wider">Display</span>
                            <button
                                onClick={toggleTheme}
                                className="p-1.5 rounded-md hover:bg-white/10 text-stone-400 hover:text-amber-400 transition-colors"
                            >
                                {theme === "light" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
                            </button>
                        </div>

                        <div className="flex items-center justify-between px-2 mb-2">
                            <span className="text-stone-500 font-semibold uppercase tracking-wider">Preview</span>
                            <button
                                onClick={() => setShowPreview(!showPreview)}
                                className={cn(
                                    "p-1.5 rounded-md transition-colors",
                                    showPreview ? "text-green-400 bg-green-900/20" : "text-stone-400 hover:text-white"
                                )}
                            >
                                <Monitor className="w-3.5 h-3.5" />
                            </button>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-3 py-2 text-[var(--admin-sidebar-text)] opacity-70 hover:opacity-100 hover:text-red-400 hover:bg-red-950/30 rounded-lg transition-all w-full group"
                        >
                            <LogOut className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            <span>Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">

                {/* Mobile Header */}
                <header className="lg:hidden flex-none bg-stone-900/95 backdrop-blur-md text-white px-4 py-3 flex items-center justify-between border-b border-white/10 z-30">
                    <div className="flex items-center gap-3">
                        <button onClick={() => setSidebarOpen(true)}>
                            <Menu className="w-5 h-5" />
                        </button>
                        <span className="font-serif tracking-wide">Mosta Admin</span>
                    </div>
                    <button onClick={() => setShowPreview(!showPreview)}>
                        <Monitor className={cn("w-5 h-5", showPreview ? "text-amber-400" : "text-stone-400")} />
                    </button>
                </header>

                <div className="flex-1 flex overflow-hidden">
                    {/* Admin Page Content */}
                    <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth hover:scroll-auto">
                        <div className="max-w-4xl mx-auto animate-fade-in">
                            {children}
                        </div>
                    </main>

                    {/* Live Preview Pane */}
                    {showPreview && (
                        <div className="hidden md:flex w-[400px] xl:w-[480px] flex-col border-l border-[var(--admin-border)] bg-[var(--admin-bg)] shadow-2xl z-20 transition-all duration-300 transform">
                            <div className="flex-none p-2 border-b border-[var(--admin-border)] flex items-center justify-between bg-[var(--admin-card)]">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5 px-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <span className="text-xs font-medium text-[var(--admin-text-muted)]">Live Interactive View</span>
                                </div>
                                <a href="/" target="_blank" className="text-[var(--admin-text-muted)] hover:text-[var(--admin-text)]">
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                            <div className="flex-1 bg-stone-100 dark:bg-stone-950 relative">
                                <iframe
                                    src="/" // Loads the homepage
                                    className="absolute inset-0 w-full h-full"
                                    title="Live Website"
                                // Sandbox attributes if needed, but same-origin is fine
                                />
                                {/* Overlay hint */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[10px] pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                                    Double-click elements to edit
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
