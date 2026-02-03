"use client";

import * as React from "react";
import Image from "next/image";
import { Plus, Edit2, Trash2, Save, X, Loader2 } from "lucide-react";

interface Room {
    id: string;
    name: string;
    slug: string;
    short_description: string;
    base_price: number;
    max_guests: number;
    images: string[];
    features: string[];
}

export default function AdminRoomsPage() {
    const [rooms, setRooms] = React.useState<Room[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [editingId, setEditingId] = React.useState<string | null>(null);
    const [editForm, setEditForm] = React.useState<Partial<Room>>({});
    const [saving, setSaving] = React.useState(false);

    // Load rooms from API
    React.useEffect(() => {
        async function fetchRooms() {
            try {
                const res = await fetch("/api/admin/rooms");
                if (res.ok) {
                    const data = await res.json();
                    setRooms(data);
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
        setEditingId(room.id);
        setEditForm(room);
    };

    const handleSave = async () => {
        if (editingId && editForm) {
            setSaving(true);
            try {
                const res = await fetch("/api/admin/rooms", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id: editingId, ...editForm }),
                });

                if (res.ok) {
                    setRooms(rooms.map(r => r.id === editingId ? { ...r, ...editForm } as Room : r));
                    setEditingId(null);
                    setEditForm({});
                } else {
                    alert("Failed to save room");
                }
            } catch (error) {
                console.error("Error saving room:", error);
                alert("Failed to save room");
            } finally {
                setSaving(false);
            }
        }
    };

    const handleCancel = () => {
        setEditingId(null);
        setEditForm({});
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this room?")) {
            try {
                const res = await fetch("/api/admin/rooms", {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id }),
                });

                if (res.ok) {
                    setRooms(rooms.filter(r => r.id !== id));
                } else {
                    alert("Failed to delete room");
                }
            } catch (error) {
                console.error("Error deleting room:", error);
                alert("Failed to delete room");
            }
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-stone-400" />
            </div>
        );
    }

    return (
        <>
            <header className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-stone-800">Rooms</h1>
                    <p className="text-stone-500 text-sm">Manage your room listings</p>
                </div>
                <button className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span>Add Room</span>
                </button>
            </header>

            <div className="p-6">
                {rooms.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                        <p className="text-stone-500">No rooms found. Run the database seed to add initial rooms.</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-stone-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Room</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Price/Night</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Max Guests</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {rooms.map((room) => (
                                    <tr key={room.id} className="hover:bg-stone-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="relative w-16 h-12 rounded overflow-hidden flex-shrink-0 bg-stone-100">
                                                    {room.images?.[0] && (
                                                        <Image
                                                            src={room.images[0]}
                                                            alt={room.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    )}
                                                </div>
                                                <div>
                                                    {editingId === room.id ? (
                                                        <input
                                                            type="text"
                                                            value={editForm.name || ""}
                                                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                                            className="border border-stone-300 rounded px-2 py-1 text-sm w-full"
                                                        />
                                                    ) : (
                                                        <p className="font-medium text-stone-800">{room.name}</p>
                                                    )}
                                                    <p className="text-stone-500 text-sm truncate max-w-xs">{room.short_description}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {editingId === room.id ? (
                                                <input
                                                    type="number"
                                                    value={editForm.base_price || ""}
                                                    onChange={(e) => setEditForm({ ...editForm, base_price: Number(e.target.value) })}
                                                    className="border border-stone-300 rounded px-2 py-1 text-sm w-20"
                                                />
                                            ) : (
                                                <span className="text-stone-800">€{room.base_price}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {editingId === room.id ? (
                                                <input
                                                    type="number"
                                                    value={editForm.max_guests || ""}
                                                    onChange={(e) => setEditForm({ ...editForm, max_guests: Number(e.target.value) })}
                                                    className="border border-stone-300 rounded px-2 py-1 text-sm w-16"
                                                />
                                            ) : (
                                                <span className="text-stone-600">{room.max_guests}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                {editingId === room.id ? (
                                                    <>
                                                        <button
                                                            onClick={handleSave}
                                                            disabled={saving}
                                                            className="p-2 text-green-600 hover:bg-green-50 rounded disabled:opacity-50"
                                                        >
                                                            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                                        </button>
                                                        <button
                                                            onClick={handleCancel}
                                                            className="p-2 text-stone-500 hover:bg-stone-100 rounded"
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() => handleEdit(room)}
                                                            className="p-2 text-stone-500 hover:bg-stone-100 rounded"
                                                        >
                                                            <Edit2 className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(room.id)}
                                                            className="p-2 text-red-500 hover:bg-red-50 rounded"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">
                        <strong>✓ Connected to Supabase:</strong> Room changes are saved to your database.
                    </p>
                </div>
            </div>
        </>
    );
}
