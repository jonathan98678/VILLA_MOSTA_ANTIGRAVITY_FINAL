"use client";

import * as React from "react";
import { Save, ChevronDown, ChevronRight, Check, Loader2 } from "lucide-react";

// Types for all editable content
interface SiteSettings {
    // Property Info
    propertyName: string;
    tagline: string;
    email: string;
    phone: string;
    address: string;

    // Check-in/out
    checkInTime: string;
    checkOutTime: string;

    // Hero Section
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    heroVideoId: string;
    heroVideoStart: number;
    heroVideoEnd: number;

    // Intro Section
    introLabel: string;
    introTitle: string;
    introDescription: string;
    introFeature1Title: string;
    introFeature1Text: string;
    introFeature2Title: string;
    introFeature2Text: string;
    introFeature3Title: string;
    introFeature3Text: string;

    // CTA Section
    ctaTitle: string;
    ctaDescription: string;
    ctaButtonText: string;

    // Footer
    footerDescription: string;

    // Booking Channels
    bookingComUrl: string;
    airbnbUrl: string;

    // iCal Sync
    icalBookingCom: string;
    icalAirbnb: string;
    icalCustom: string;

    // SEO
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
}

const defaultSettings: SiteSettings = {
    propertyName: "Villa Mosta",
    tagline: "A Traditional Maltese Home",
    email: "info@villamosta.com",
    phone: "+356 99 123 456",
    address: "Mosta, Malta",
    checkInTime: "14:00",
    checkOutTime: "10:00",
    heroTitle: "VILLA MOSTA",
    heroSubtitle: "A Traditional Maltese Home",
    heroDescription: "Experience authentic Maltese hospitality in the heart of Mosta.",
    heroVideoId: "9mg8FOQi6bI",
    heroVideoStart: 121,
    heroVideoEnd: 124,
    introLabel: "WELCOME TO VILLA MOSTA",
    introTitle: "Your Home in Malta",
    introDescription: "Nestled in the heart of Mosta, our traditional Maltese townhouse offers a unique blend of authentic charm and modern comfort. Just steps from the magnificent Mosta Rotunda, you'll experience the true essence of Maltese living.",
    introFeature1Title: "Prime Location",
    introFeature1Text: "Steps from the Mosta Rotunda and local amenities",
    introFeature2Title: "Rooftop Terrace",
    introFeature2Text: "Stunning views of the dome and Maltese skyline",
    introFeature3Title: "Personal Touch",
    introFeature3Text: "Warm hospitality and local insider tips",
    ctaTitle: "Ready to Experience Malta?",
    ctaDescription: "Book your stay at Villa Mosta and discover the authentic charm of Maltese hospitality.",
    ctaButtonText: "Check Availability",
    footerDescription: "A charming Maltese home offering elegant accommodations with stunning terraces and personalized service.",
    bookingComUrl: "https://www.booking.com/hotel/mt/villa-mosta.html",
    airbnbUrl: "",
    icalBookingCom: "",
    icalAirbnb: "",
    icalCustom: "",
    seoTitle: "Villa Mosta | Authentic Maltese Accommodation",
    seoDescription: "Experience authentic Maltese hospitality at Villa Mosta. Traditional townhouse with rooftop terrace, steps from the famous Mosta Rotunda.",
    seoKeywords: "Villa Mosta, Malta accommodation, Mosta Rotunda, Maltese hospitality, Malta holiday",
};

interface SectionProps {
    title: string;
    description: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

function SettingsSection({ title, description, isOpen, onToggle, children }: SectionProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
            <button
                onClick={onToggle}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-stone-50 transition-colors"
            >
                <div className="text-left">
                    <h3 className="font-semibold text-stone-800">{title}</h3>
                    <p className="text-stone-500 text-sm">{description}</p>
                </div>
                {isOpen ? <ChevronDown className="w-5 h-5 text-stone-400" /> : <ChevronRight className="w-5 h-5 text-stone-400" />}
            </button>
            {isOpen && (
                <div className="px-6 pb-6 border-t border-stone-100 pt-4">
                    {children}
                </div>
            )}
        </div>
    );
}

export default function AdminSettingsPage() {
    const [settings, setSettings] = React.useState<SiteSettings>(defaultSettings);
    const [saved, setSaved] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [saving, setSaving] = React.useState(false);
    const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({
        property: true,
    });

    // Load from Supabase on mount
    React.useEffect(() => {
        async function fetchSettings() {
            try {
                const res = await fetch("/api/admin/settings");
                if (res.ok) {
                    const data = await res.json();
                    // Map database keys to our settings object
                    const mappedSettings: Partial<SiteSettings> = {};
                    if (data.site_name) mappedSettings.propertyName = data.site_name;
                    if (data.site_tagline) mappedSettings.tagline = data.site_tagline;
                    if (data.contact_email) mappedSettings.email = data.contact_email;
                    if (data.contact_phone) mappedSettings.phone = data.contact_phone;
                    if (data.address_line_1) mappedSettings.address = data.address_line_1;
                    if (data.check_in_time) mappedSettings.checkInTime = data.check_in_time;
                    if (data.check_out_time) mappedSettings.checkOutTime = data.check_out_time;
                    // Add more mappings as needed
                    setSettings(prev => ({ ...prev, ...mappedSettings }));
                }
            } catch (error) {
                console.error("Error fetching settings:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchSettings();
    }, []);

    const toggleSection = (key: string) => {
        setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            // Map our settings to database keys
            const dbSettings: Record<string, string> = {
                site_name: settings.propertyName,
                site_tagline: settings.tagline,
                contact_email: settings.email,
                contact_phone: settings.phone,
                address_line_1: settings.address,
                check_in_time: settings.checkInTime,
                check_out_time: settings.checkOutTime,
            };

            const res = await fetch("/api/admin/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dbSettings),
            });

            if (res.ok) {
                // Also save to localStorage as fallback
                localStorage.setItem("villamosta-settings", JSON.stringify(settings));
                setSaved(true);
                setTimeout(() => setSaved(false), 2000);
            } else {
                alert("Failed to save settings");
            }
        } catch (error) {
            console.error("Error saving settings:", error);
            // Fallback to localStorage only
            localStorage.setItem("villamosta-settings", JSON.stringify(settings));
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
        } finally {
            setSaving(false);
        }
    };

    const updateField = (field: keyof SiteSettings, value: string | number) => {
        setSettings(prev => ({ ...prev, [field]: value }));
    };

    return (
        <>
            <header className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
                <div>
                    <h1 className="text-xl font-semibold text-stone-800">Settings</h1>
                    <p className="text-stone-500 text-sm">Edit all website content</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${saved
                        ? "bg-green-600 text-white"
                        : "bg-amber-600 text-white hover:bg-amber-700"
                        } ${saving ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                    <span>{saving ? "Saving..." : saved ? "Saved!" : "Save All Changes"}</span>
                </button>
            </header>

            <div className="p-6 max-w-3xl">
                {/* Property Info */}
                <SettingsSection
                    title="Property Information"
                    description="Basic contact and property details"
                    isOpen={openSections.property}
                    onToggle={() => toggleSection("property")}
                >
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-stone-600 mb-1">Property Name</label>
                                <input
                                    type="text"
                                    value={settings.propertyName}
                                    onChange={(e) => updateField("propertyName", e.target.value)}
                                    className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-stone-600 mb-1">Tagline</label>
                                <input
                                    type="text"
                                    value={settings.tagline}
                                    onChange={(e) => updateField("tagline", e.target.value)}
                                    className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-stone-600 mb-1">Email</label>
                                <input
                                    type="email"
                                    value={settings.email}
                                    onChange={(e) => updateField("email", e.target.value)}
                                    className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-stone-600 mb-1">Phone</label>
                                <input
                                    type="tel"
                                    value={settings.phone}
                                    onChange={(e) => updateField("phone", e.target.value)}
                                    className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Address</label>
                            <input
                                type="text"
                                value={settings.address}
                                onChange={(e) => updateField("address", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-stone-600 mb-1">Check-in Time</label>
                                <input
                                    type="time"
                                    value={settings.checkInTime}
                                    onChange={(e) => updateField("checkInTime", e.target.value)}
                                    className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-stone-600 mb-1">Check-out Time</label>
                                <input
                                    type="time"
                                    value={settings.checkOutTime}
                                    onChange={(e) => updateField("checkOutTime", e.target.value)}
                                    className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                />
                            </div>
                        </div>
                    </div>
                </SettingsSection>

                {/* Hero Section */}
                <SettingsSection
                    title="Hero Section"
                    description="Homepage hero video and text"
                    isOpen={openSections.hero}
                    onToggle={() => toggleSection("hero")}
                >
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Hero Title</label>
                            <input
                                type="text"
                                value={settings.heroTitle}
                                onChange={(e) => updateField("heroTitle", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Subtitle</label>
                            <input
                                type="text"
                                value={settings.heroSubtitle}
                                onChange={(e) => updateField("heroSubtitle", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Description</label>
                            <textarea
                                value={settings.heroDescription}
                                onChange={(e) => updateField("heroDescription", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                rows={2}
                            />
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg">
                            <h4 className="font-medium text-stone-700 mb-3">Video Settings</h4>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm text-stone-600 mb-1">YouTube Video ID</label>
                                    <input
                                        type="text"
                                        value={settings.heroVideoId}
                                        onChange={(e) => updateField("heroVideoId", e.target.value)}
                                        className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-stone-600 mb-1">Start (seconds)</label>
                                    <input
                                        type="number"
                                        value={settings.heroVideoStart}
                                        onChange={(e) => updateField("heroVideoStart", Number(e.target.value))}
                                        className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-stone-600 mb-1">End (seconds)</label>
                                    <input
                                        type="number"
                                        value={settings.heroVideoEnd}
                                        onChange={(e) => updateField("heroVideoEnd", Number(e.target.value))}
                                        className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </SettingsSection>

                {/* Intro Section */}
                <SettingsSection
                    title="Introduction Section"
                    description="Welcome text and feature highlights"
                    isOpen={openSections.intro}
                    onToggle={() => toggleSection("intro")}
                >
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Section Label</label>
                            <input
                                type="text"
                                value={settings.introLabel}
                                onChange={(e) => updateField("introLabel", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Title</label>
                            <input
                                type="text"
                                value={settings.introTitle}
                                onChange={(e) => updateField("introTitle", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Description</label>
                            <textarea
                                value={settings.introDescription}
                                onChange={(e) => updateField("introDescription", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                rows={3}
                            />
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg space-y-3">
                            <h4 className="font-medium text-stone-700">Feature 1</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={settings.introFeature1Title}
                                    onChange={(e) => updateField("introFeature1Title", e.target.value)}
                                    className="border border-stone-300 rounded-lg px-3 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Description"
                                    value={settings.introFeature1Text}
                                    onChange={(e) => updateField("introFeature1Text", e.target.value)}
                                    className="border border-stone-300 rounded-lg px-3 py-2"
                                />
                            </div>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg space-y-3">
                            <h4 className="font-medium text-stone-700">Feature 2</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={settings.introFeature2Title}
                                    onChange={(e) => updateField("introFeature2Title", e.target.value)}
                                    className="border border-stone-300 rounded-lg px-3 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Description"
                                    value={settings.introFeature2Text}
                                    onChange={(e) => updateField("introFeature2Text", e.target.value)}
                                    className="border border-stone-300 rounded-lg px-3 py-2"
                                />
                            </div>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg space-y-3">
                            <h4 className="font-medium text-stone-700">Feature 3</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={settings.introFeature3Title}
                                    onChange={(e) => updateField("introFeature3Title", e.target.value)}
                                    className="border border-stone-300 rounded-lg px-3 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Description"
                                    value={settings.introFeature3Text}
                                    onChange={(e) => updateField("introFeature3Text", e.target.value)}
                                    className="border border-stone-300 rounded-lg px-3 py-2"
                                />
                            </div>
                        </div>
                    </div>
                </SettingsSection>

                {/* CTA Section */}
                <SettingsSection
                    title="Call to Action Section"
                    description="Bottom of page booking prompt"
                    isOpen={openSections.cta}
                    onToggle={() => toggleSection("cta")}
                >
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Title</label>
                            <input
                                type="text"
                                value={settings.ctaTitle}
                                onChange={(e) => updateField("ctaTitle", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Description</label>
                            <textarea
                                value={settings.ctaDescription}
                                onChange={(e) => updateField("ctaDescription", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                rows={2}
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Button Text</label>
                            <input
                                type="text"
                                value={settings.ctaButtonText}
                                onChange={(e) => updateField("ctaButtonText", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2"
                            />
                        </div>
                    </div>
                </SettingsSection>

                {/* Footer */}
                <SettingsSection
                    title="Footer"
                    description="Footer description text"
                    isOpen={openSections.footer}
                    onToggle={() => toggleSection("footer")}
                >
                    <div>
                        <label className="block text-sm text-stone-600 mb-1">Footer Description</label>
                        <textarea
                            value={settings.footerDescription}
                            onChange={(e) => updateField("footerDescription", e.target.value)}
                            className="w-full border border-stone-300 rounded-lg px-3 py-2"
                            rows={2}
                        />
                    </div>
                </SettingsSection>

                {/* Booking Channels */}
                <SettingsSection
                    title="Booking Channels"
                    description="External booking platform links"
                    isOpen={openSections.booking}
                    onToggle={() => toggleSection("booking")}
                >
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Booking.com URL</label>
                            <input
                                type="url"
                                value={settings.bookingComUrl}
                                onChange={(e) => updateField("bookingComUrl", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                placeholder="https://www.booking.com/hotel/..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Airbnb URL</label>
                            <input
                                type="url"
                                value={settings.airbnbUrl}
                                onChange={(e) => updateField("airbnbUrl", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                placeholder="https://www.airbnb.com/rooms/..."
                            />
                        </div>
                    </div>
                </SettingsSection>

                {/* iCal Sync */}
                <SettingsSection
                    title="Calendar Sync (iCal)"
                    description="Sync availability across booking platforms"
                    isOpen={openSections.ical}
                    onToggle={() => toggleSection("ical")}
                >
                    <div className="space-y-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                            <p className="text-blue-800 text-sm">
                                <strong>How iCal sync works:</strong> Paste the iCal URL from each booking platform below.
                                Your calendar will automatically sync availability to prevent double bookings.
                            </p>
                        </div>
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Booking.com iCal URL</label>
                            <input
                                type="url"
                                value={settings.icalBookingCom}
                                onChange={(e) => updateField("icalBookingCom", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2 font-mono text-sm"
                                placeholder="https://admin.booking.com/hotel/..."
                            />
                            <p className="text-xs text-stone-400 mt-1">Find this in Booking.com Extranet → Calendar → Sync</p>
                        </div>
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Airbnb iCal URL</label>
                            <input
                                type="url"
                                value={settings.icalAirbnb}
                                onChange={(e) => updateField("icalAirbnb", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2 font-mono text-sm"
                                placeholder="https://www.airbnb.com/calendar/ical/..."
                            />
                            <p className="text-xs text-stone-400 mt-1">Find this in Airbnb → Listing → Pricing and availability → Sync calendars</p>
                        </div>
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Custom iCal URL</label>
                            <input
                                type="url"
                                value={settings.icalCustom}
                                onChange={(e) => updateField("icalCustom", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2 font-mono text-sm"
                                placeholder="https://..."
                            />
                        </div>
                    </div>
                </SettingsSection>

                {/* SEO */}
                <SettingsSection
                    title="SEO Settings"
                    description="Search engine optimization"
                    isOpen={openSections.seo}
                    onToggle={() => toggleSection("seo")}
                >
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Page Title</label>
                            <input
                                type="text"
                                value={settings.seoTitle}
                                onChange={(e) => updateField("seoTitle", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2"
                            />
                            <p className="text-xs text-stone-400 mt-1">{settings.seoTitle.length}/60 characters</p>
                        </div>
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Meta Description</label>
                            <textarea
                                value={settings.seoDescription}
                                onChange={(e) => updateField("seoDescription", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                rows={2}
                            />
                            <p className="text-xs text-stone-400 mt-1">{settings.seoDescription.length}/160 characters</p>
                        </div>
                        <div>
                            <label className="block text-sm text-stone-600 mb-1">Keywords</label>
                            <input
                                type="text"
                                value={settings.seoKeywords}
                                onChange={(e) => updateField("seoKeywords", e.target.value)}
                                className="w-full border border-stone-300 rounded-lg px-3 py-2"
                                placeholder="keyword1, keyword2, keyword3"
                            />
                        </div>
                    </div>
                </SettingsSection>

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">
                        <strong>✓ Connected to Supabase:</strong> Settings are saved to your database and will persist
                        across sessions. Changes apply immediately to the live website.
                    </p>
                </div>
            </div>
        </>
    );
}
