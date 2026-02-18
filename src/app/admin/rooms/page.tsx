"use client";

import * as React from "react";
import Image from "next/image";
import { Edit2, Save, X, Loader2, Users, Maximize, Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { ImageUpload } from "@/components/admin/ImageUpload";

interface Room {
    id: string;
    name: string;
    slug: string;
    short_description: string;
    long_description: string[];
    base_price: number;
    max_guests: number;
    size: string;
    images: string[];
    features: string[];
    is_active: boolean;
}

export default function AdminRoomsPage() {
    const [rooms, setRooms] = React.useState<Room[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [editingRoom, setEditingRoom] = React.useState<Room | null>(null);
    const [saving, setSaving] = React.useState(false);

    // Form state helpers
    const [formContent, setFormContent] = React.useState<{
        featuresString: string;
        images: string[];
        longDescString: string;
    }>({ featuresString: "", images: [], longDescString: "" });

    // Load rooms from API
    React.useEffect(() => {
        async function fetchRooms() {
            try {
                const res = await fetch("/api/admin/rooms");
                if (res.ok) {
                    const data = await res.json();
                    setRooms(data.sort((a: Room, b: Room) => a.name.localeCompare(b.name)));
                }
            } catch (error) {
                console.error("Error fetching rooms:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchRooms();
    }, []);

    const handleEdit = (room: Room) => {
        setEditingRoom(room);
        setFormContent({
            featuresString: room.features?.join(", ") || "",
            images: room.images || [],
            longDescString: room.long_description?.join("\n\n") || "",
        });
    };

    const handleCloseEdit = () => {
        setEditingRoom(null);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingRoom) return;

        setSaving(true);

        // Process form data back into arrays
        const updatedRoom = {
            ...editingRoom,
            features: formContent.featuresString.split(",").map(s => s.trim()).filter(Boolean),
            images: formContent.images,
            long_description: formContent.longDescString.split("\n\n").map(s => s.trim()).filter(Boolean),
        };

        try {
            const res = await fetch("/api/admin/rooms", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedRoom),
            });

            if (res.ok) {
                setRooms(rooms.map(r => r.id === updatedRoom.id ? updatedRoom : r));
                setEditingRoom(null);
            } else {
                alert("Failed to save room");
            }
        } catch (error) {
            console.error("Error saving room:", error);
            alert("Failed to save room");
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
        <>
            <header className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-serif text-[var(--admin-text)]">Rooms</h1>
                    <p className="text-[var(--admin-text-muted)] text-sm mt-1">Manage room details, pricing, and content.</p>
                </div>
                <div className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full border border-amber-200">
                    {rooms.length} Active Rooms
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {rooms.map((room) => (
                    <div key={room.id} className="admin-card rounded-xl overflow-hidden flex flex-col group">
                        {/* Image Preview */}
                        <div className="relative h-48 bg-[var(--admin-bg)] border-b border-[var(--admin-border)]">
                            {room.images?.[0] ? (
                                <Image
                                    src={room.images[0]}
                                    alt={room.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-[var(--admin-text-muted)] opacity-50">
                                    <Info className="w-8 h-8" />
                                </div>
                            )}
                            <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                                €{room.base_price}/night
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col">
                            <h3 className="font-semibold text-lg text-[var(--admin-text)] mb-2 line-clamp-1" title={room.name}>
                                {room.name}
                            </h3>
                            <p className="text-[var(--admin-text-muted)] text-sm line-clamp-2 mb-4 flex-1">
                                {room.short_description}
                            </p>

                            <div className="flex items-center gap-4 text-xs text-[var(--admin-text-muted)] mb-5">
                                <div className="flex items-center gap-1.5">
                                    <Users className="w-3.5 h-3.5" />
                                    <span>Max {room.max_guests}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Maximize className="w-3.5 h-3.5" />
                                    <span>{room.size}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => handleEdit(room)}
                                className="w-full py-2.5 flex items-center justify-center gap-2 border border-[var(--admin-border)] rounded-lg hover:border-[var(--admin-accent)] hover:text-[var(--admin-accent)] transition-colors text-sm font-medium"
                            >
                                <Edit2 className="w-4 h-4" />
                                Edit Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Edit Modal */}
            {editingRoom && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleCloseEdit} />
                    <div className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--admin-card)] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up">
                        {/* Modal Header */}
                        <div className="px-6 py-4 border-b border-[var(--admin-border)] flex items-center justify-between bg-[var(--admin-bg)]">
                            <h2 className="text-lg font-semibold text-[var(--admin-text)]">Edit {editingRoom.name}</h2>
                            <button onClick={handleCloseEdit} className="text-[var(--admin-text-muted)] hover:text-[var(--admin-text)] transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Scrollable Form Content */}
                        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                            <form id="edit-room-form" onSubmit={handleSave} className="space-y-8">
                                {/* Section 1: Basic Info */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium text-[var(--admin-text-muted)] uppercase tracking-wider">Basic Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-[var(--admin-text)]">Room Name</label>
                                            <input
                                                type="text"
                                                value={editingRoom.name}
                                                onChange={(e) => setEditingRoom({ ...editingRoom, name: e.target.value })}
                                                className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] focus:border-transparent outline-none transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-[var(--admin-text)]">Slug (URL)</label>
                                            <input
                                                type="text"
                                                value={editingRoom.slug}
                                                disabled
                                                className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] opacity-50 text-[var(--admin-text-muted)] cursor-not-allowed"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-[var(--admin-text)]">Short Description</label>
                                        <textarea
                                            value={editingRoom.short_description}
                                            onChange={(e) => setEditingRoom({ ...editingRoom, short_description: e.target.value })}
                                            className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] focus:border-transparent outline-none transition-all min-h-[80px]"
                                        />
                                    </div>
                                </div>

                                {/* Section 2: Pricing & Specs */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium text-[var(--admin-text-muted)] uppercase tracking-wider border-t border-[var(--admin-border)] pt-6">Pricing & Specifications</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-[var(--admin-text)]">Base Price (€)</label>
                                            <input
                                                type="number"
                                                value={editingRoom.base_price}
                                                onChange={(e) => setEditingRoom({ ...editingRoom, base_price: Number(e.target.value) })}
                                                className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-[var(--admin-text)]">Max Guests</label>
                                            <input
                                                type="number"
                                                value={editingRoom.max_guests}
                                                onChange={(e) => setEditingRoom({ ...editingRoom, max_guests: Number(e.target.value) })}
                                                className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-[var(--admin-text)]">Size</label>
                                            <input
                                                type="text"
                                                value={editingRoom.size}
                                                onChange={(e) => setEditingRoom({ ...editingRoom, size: e.target.value })}
                                                className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3: Detailed Content */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium text-[var(--admin-text-muted)] uppercase tracking-wider border-t border-[var(--admin-border)] pt-6">Detailed Content</h3>

                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-[var(--admin-text)]">Long Description (Paragraphs)</label>
                                        <p className="text-xs text-[var(--admin-text-muted)] mb-2">Separate paragraphs with a double new line.</p>
                                        <textarea
                                            value={formContent.longDescString}
                                            onChange={(e) => setFormContent({ ...formContent, longDescString: e.target.value })}
                                            className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] focus:border-transparent outline-none transition-all min-h-[150px]"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-[var(--admin-text)]">Features</label>
                                            <p className="text-xs text-[var(--admin-text-muted)] mb-2">Comma-separated list (e.g. WiFi, AC, Balcony)</p>
                                            <textarea
                                                value={formContent.featuresString}
                                                onChange={(e) => setFormContent({ ...formContent, featuresString: e.target.value })}
                                                className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] focus:border-transparent outline-none transition-all min-h-[120px]"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-[var(--admin-text)]">Room Images</label>
                                            <p className="text-xs text-[var(--admin-text-muted)] mb-2">Upload or manage images.</p>
                                            <ImageUpload
                                                value={formContent.images}
                                                onChange={(urls) => setFormContent({ ...formContent, images: urls })}
                                                onRemove={(url) => setFormContent({ ...formContent, images: formContent.images.filter((current) => current !== url) })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Footer Actions */}
                        <div className="px-6 py-4 border-t border-[var(--admin-border)] bg-[var(--admin-bg)] flex justify-end gap-3 safe-area-bottom">
                            <button
                                type="button"
                                onClick={handleCloseEdit}
                                className="px-4 py-2 text-sm font-medium text-[var(--admin-text)] hover:bg-[var(--admin-border)] rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                form="edit-room-form"
                                disabled={saving}
                                className="px-6 py-2 text-sm font-medium text-white bg-[var(--admin-accent)] hover:bg-[var(--admin-accent-hover)] rounded-lg shadow-lg shadow-amber-900/20 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
