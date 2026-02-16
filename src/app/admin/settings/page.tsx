"use client";

import * as React from "react";
import { Save, Loader2, Globe, CreditCard, Mail, Calendar, Eye, EyeOff } from "lucide-react";

export default function AdminSettingsPage() {
    const [settings, setSettings] = React.useState<Record<string, string>>({});
    const [loading, setLoading] = React.useState(true);
    const [saving, setSaving] = React.useState(false);
    const [showSecret, setShowSecret] = React.useState(false);

    // Load settings
    React.useEffect(() => {
        async function fetchSettings() {
            try {
                const res = await fetch("/api/admin/settings");
                if (res.ok) {
                    const data = await res.json();
                    setSettings(data);
                }
            } catch (error) {
                console.error("Error fetching settings:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchSettings();
    }, []);

    const handleChange = (key: string, value: string) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            const res = await fetch("/api/admin/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(settings),
            });

            if (res.ok) {
                // Success feedback (could be a toast)
                alert("Settings saved successfully");
            } else {
                alert("Failed to save settings");
            }
        } catch (error) {
            console.error("Error saving settings:", error);
            alert("Failed to save settings");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-[var(--admin-text-muted)]" />
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto pb-10">
            <header className="mb-8">
                <h1 className="text-2xl font-serif text-[var(--admin-text)]">Settings</h1>
                <p className="text-[var(--admin-text-muted)] text-sm mt-1">Configure your website and integrations.</p>
            </header>

            <form onSubmit={handleSave} className="space-y-8">
                {/* General Settings */}
                <section className="admin-card rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-stone-100 dark:bg-stone-800 rounded-lg text-stone-600 dark:text-stone-400">
                            <Globe className="w-5 h-5" />
                        </div>
                        <h2 className="text-lg font-semibold text-[var(--admin-text)]">General Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--admin-text)]">Contact Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--admin-text-muted)]" />
                                <input
                                    type="email"
                                    value={settings['contact_email'] || ""}
                                    onChange={(e) => handleChange('contact_email', e.target.value)}
                                    placeholder="info@villamosta.com"
                                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] outline-none"
                                />
                            </div>
                            <p className="text-xs text-[var(--admin-text-muted)]">Displayed on the Contact page.</p>
                        </div>
                        {/* Removed Phone Number as requested */}
                    </div>
                </section>

                {/* Integration Settings (Stripe) */}
                <section className="admin-card rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400">
                            <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-[var(--admin-text)]">Payment Integration</h2>
                            <p className="text-xs text-[var(--admin-text-muted)]">Connect Stripe to accept payments.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--admin-text)]">Stripe Publishable Key</label>
                            <input
                                type="text"
                                value={settings['stripe_publishable_key'] || ""}
                                onChange={(e) => handleChange('stripe_publishable_key', e.target.value)}
                                placeholder="pk_test_..."
                                className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] outline-none font-mono text-sm"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--admin-text)]">Stripe Secret Key</label>
                            <div className="relative">
                                <input
                                    type={showSecret ? "text" : "password"}
                                    value={settings['stripe_secret_key'] || ""}
                                    onChange={(e) => handleChange('stripe_secret_key', e.target.value)}
                                    placeholder="sk_test_..."
                                    className="w-full pl-3 pr-10 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] outline-none font-mono text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowSecret(!showSecret)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--admin-text-muted)] hover:text-[var(--admin-text)]"
                                >
                                    {showSecret ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                            <p className="text-xs text-amber-600 mt-1">
                                Warning: Keep this key secret. Never share it.
                            </p>
                        </div>
                    </div>
                </section>

                {/* iCal Settings */}
                <section className="admin-card rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-600 dark:text-amber-500">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-[var(--admin-text)]">Calendar Sync</h2>
                            <p className="text-xs text-[var(--admin-text-muted)]">Manage default calendar settings.</p>
                        </div>
                    </div>

                    <div className="bg-stone-50 dark:bg-stone-900/50 p-4 rounded-lg border border-[var(--admin-border)] text-sm text-[var(--admin-text-muted)]">
                        <p>
                            To manage iCal import URLs for specific rooms, please visit the <a href="/admin/bookings" className="text-[var(--admin-accent)] hover:underline">Bookings</a> page.
                        </p>
                    </div>
                </section>

                {/* Save Button */}
                <div className="fixed bottom-6 right-6 z-40">
                    <button
                        type="submit"
                        disabled={saving}
                        className="flex items-center gap-2 px-6 py-3 bg-[var(--admin-accent)] text-white rounded-full shadow-lg shadow-amber-900/20 hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100 font-medium"
                    >
                        {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}
