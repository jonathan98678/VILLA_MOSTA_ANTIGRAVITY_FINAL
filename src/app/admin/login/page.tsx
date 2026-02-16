"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const router = useRouter();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/admin/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (res.ok) {
                router.push("/admin");
                router.refresh();
            } else {
                setError("Invalid username or password");
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200">
            <div className="w-full max-w-md px-8">
                {/* Logo / Title */}
                <div className="text-center mb-8">
                    <h1 className="font-serif text-3xl text-stone-800 mb-2">
                        Villa Mosta
                    </h1>
                    <p className="text-stone-500 text-sm tracking-wide uppercase">
                        Admin Dashboard
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-200">
                    <h2 className="font-serif text-xl text-stone-800 mb-6 text-center">
                        Sign In
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-stone-700 mb-1.5"
                            >
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-stone-50 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow"
                                placeholder="Enter username"
                                required
                                autoComplete="username"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-stone-700 mb-1.5"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-stone-50 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow"
                                placeholder="Enter password"
                                required
                                autoComplete="current-password"
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-stone-800 text-white rounded-lg font-medium hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>
                </div>

                <p className="text-center text-stone-400 text-xs mt-6">
                    &copy; {new Date().getFullYear()} Villa Mosta. All rights reserved.
                </p>
            </div>
        </div>
    );
}
