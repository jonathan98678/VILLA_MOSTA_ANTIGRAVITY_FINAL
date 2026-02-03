"use client";

import * as React from "react";
import { Star, ExternalLink, Plus, Trash2, Loader2 } from "lucide-react";

interface Review {
    id: string;
    guest_name: string;
    guest_country: string;
    rating: number;
    review_text: string;
    source: string;
    review_date: string;
    is_featured: boolean;
}

export default function AdminReviewsPage() {
    const [reviews, setReviews] = React.useState<Review[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [showAddForm, setShowAddForm] = React.useState(false);
    const [saving, setSaving] = React.useState(false);
    const [newReview, setNewReview] = React.useState<Partial<Review>>({
        rating: 5,
        source: "Booking.com",
        is_featured: false,
    });

    // Load reviews from API
    React.useEffect(() => {
        async function fetchReviews() {
            try {
                const res = await fetch("/api/admin/reviews");
                if (res.ok) {
                    const data = await res.json();
                    setReviews(data);
                }
            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchReviews();
    }, []);

    const handleAdd = async () => {
        if (newReview.guest_name && newReview.review_text) {
            setSaving(true);
            try {
                const reviewData = {
                    guest_name: newReview.guest_name,
                    guest_country: newReview.guest_country || "Unknown",
                    rating: newReview.rating || 5,
                    review_text: newReview.review_text,
                    source: newReview.source || "Direct",
                    review_date: new Date().toISOString().split("T")[0],
                    is_featured: newReview.is_featured || false,
                    is_published: true,
                };

                const res = await fetch("/api/admin/reviews", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(reviewData),
                });

                if (res.ok) {
                    // Refresh list
                    const refreshRes = await fetch("/api/admin/reviews");
                    if (refreshRes.ok) {
                        setReviews(await refreshRes.json());
                    }
                    setNewReview({ rating: 5, source: "Booking.com", is_featured: false });
                    setShowAddForm(false);
                } else {
                    alert("Failed to add review");
                }
            } catch (error) {
                console.error("Error adding review:", error);
                alert("Failed to add review");
            } finally {
                setSaving(false);
            }
        }
    };

    const handleDelete = async (id: string) => {
        if (confirm("Remove this review from display?")) {
            try {
                const res = await fetch("/api/admin/reviews", {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id }),
                });

                if (res.ok) {
                    setReviews(reviews.filter(r => r.id !== id));
                } else {
                    alert("Failed to delete review");
                }
            } catch (error) {
                console.error("Error deleting review:", error);
                alert("Failed to delete review");
            }
        }
    };

    const formatDate = (dateStr: string) => {
        try {
            return new Date(dateStr).toLocaleDateString("en-US", { month: "short", year: "numeric" });
        } catch {
            return dateStr;
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
                    <h1 className="text-xl font-semibold text-stone-800">Reviews</h1>
                    <p className="text-stone-500 text-sm">Manage guest testimonials displayed on site</p>
                </div>
                <div className="flex items-center gap-3">
                    <a
                        href="https://www.booking.com/hotel/mt/villa-mosta.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-stone-300 text-stone-700 px-4 py-2 rounded-lg hover:bg-stone-50 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        <span>Booking.com</span>
                    </a>
                    <button
                        onClick={() => setShowAddForm(true)}
                        className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        <span>Add Review</span>
                    </button>
                </div>
            </header>

            <div className="p-6">
                {/* Add Review Form */}
                {showAddForm && (
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                        <h3 className="font-semibold text-stone-800 mb-4">Add New Review</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Guest Name"
                                value={newReview.guest_name || ""}
                                onChange={(e) => setNewReview({ ...newReview, guest_name: e.target.value })}
                                className="border border-stone-300 rounded-lg px-3 py-2"
                            />
                            <input
                                type="text"
                                placeholder="Country"
                                value={newReview.guest_country || ""}
                                onChange={(e) => setNewReview({ ...newReview, guest_country: e.target.value })}
                                className="border border-stone-300 rounded-lg px-3 py-2"
                            />
                        </div>
                        <textarea
                            placeholder="Review text..."
                            value={newReview.review_text || ""}
                            onChange={(e) => setNewReview({ ...newReview, review_text: e.target.value })}
                            className="w-full border border-stone-300 rounded-lg px-3 py-2 mb-4"
                            rows={3}
                        />
                        <div className="flex items-center gap-4">
                            <select
                                value={newReview.rating}
                                onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                                className="border border-stone-300 rounded-lg px-3 py-2"
                            >
                                {[5, 4, 3, 2, 1].map(n => (
                                    <option key={n} value={n}>{n} stars</option>
                                ))}
                            </select>
                            <select
                                value={newReview.source}
                                onChange={(e) => setNewReview({ ...newReview, source: e.target.value })}
                                className="border border-stone-300 rounded-lg px-3 py-2"
                            >
                                <option value="Booking.com">Booking.com</option>
                                <option value="Airbnb">Airbnb</option>
                                <option value="Google">Google</option>
                                <option value="Direct">Direct</option>
                            </select>
                            <label className="flex items-center gap-2 text-sm text-stone-600">
                                <input
                                    type="checkbox"
                                    checked={newReview.is_featured || false}
                                    onChange={(e) => setNewReview({ ...newReview, is_featured: e.target.checked })}
                                />
                                Featured
                            </label>
                            <div className="flex-1" />
                            <button
                                onClick={() => setShowAddForm(false)}
                                className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAdd}
                                disabled={saving}
                                className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:opacity-50"
                            >
                                {saving ? "Adding..." : "Add Review"}
                            </button>
                        </div>
                    </div>
                )}

                {/* Reviews List */}
                {reviews.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                        <p className="text-stone-500">No reviews found. Run the database seed to add initial reviews.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white rounded-lg shadow-sm p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="font-medium text-stone-800">{review.guest_name}</p>
                                            {review.is_featured && (
                                                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded">Featured</span>
                                            )}
                                        </div>
                                        <p className="text-stone-500 text-sm">{review.guest_country} • {formatDate(review.review_date)}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1 bg-stone-100 px-2 py-1 rounded">
                                            <Star className="w-4 h-4 text-amber-500 fill-current" />
                                            <span className="font-semibold text-stone-800">{review.rating}</span>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(review.id)}
                                            className="p-1 text-stone-400 hover:text-red-500"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-stone-600 text-sm mb-2">&ldquo;{review.review_text}&rdquo;</p>
                                <p className="text-stone-400 text-xs">via {review.source}</p>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">
                        <strong>✓ Connected to Supabase:</strong> Review changes are saved to your database.
                    </p>
                </div>
            </div>
        </>
    );
}
