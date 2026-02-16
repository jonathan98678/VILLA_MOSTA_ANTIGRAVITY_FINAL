"use client";

import * as React from "react";
import { Star, ExternalLink, Plus, Trash2, Loader2, Check, X, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface Review {
    id: string;
    guest_name: string;
    guest_country: string;
    rating: number;
    review_text: string;
    source: string;
    review_date: string;
    is_featured: boolean;
    is_published: boolean;
}

export default function AdminReviewsPage() {
    const [reviews, setReviews] = React.useState<Review[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [showAddForm, setShowAddForm] = React.useState(false);
    const [saving, setSaving] = React.useState(false);
    const [seeding, setSeeding] = React.useState(false);

    // Add Form State
    const [newReview, setNewReview] = React.useState<Partial<Review>>({
        rating: 5,
        source: "Booking.com",
        is_featured: false,
        is_published: true,
    });

    const fetchReviews = React.useCallback(async () => {
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
    }, []);

    React.useEffect(() => {
        fetchReviews();
    }, [fetchReviews]);

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
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
                await fetchReviews();
                setNewReview({ rating: 5, source: "Booking.com", is_featured: false, is_published: true });
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
    };

    const handleToggle = async (id: string, field: 'is_featured' | 'is_published', currentValue: boolean) => {
        // Optimistic update
        setReviews(reviews.map(r => r.id === id ? { ...r, [field]: !currentValue } : r));

        try {
            await fetch("/api/admin/reviews", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, [field]: !currentValue }),
            });
        } catch (error) {
            console.error("Error updating review:", error);
            // Revert on error
            setReviews(reviews.map(r => r.id === id ? { ...r, [field]: currentValue } : r));
            alert("Failed to update status");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this review?")) return;

        // Optimistic update
        const previousReviews = [...reviews];
        setReviews(reviews.filter(r => r.id !== id));

        try {
            const res = await fetch("/api/admin/reviews", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            if (!res.ok) throw new Error("Failed to delete");
        } catch (error) {
            console.error("Error deleting review:", error);
            setReviews(previousReviews);
            alert("Failed to delete review");
        }
    };

    const handleSeed = async () => {
        setSeeding(true);
        try {
            const res = await fetch("/api/admin/seed", { method: "POST" });
            if (res.ok) {
                await fetchReviews();
            } else {
                alert("Failed to seed reviews");
            }
        } catch (error) {
            console.error("Error seeding:", error);
            alert("Failed to seed reviews");
        } finally {
            setSeeding(false);
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
            <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-serif text-[var(--admin-text)]">Reviews</h1>
                    <p className="text-[var(--admin-text-muted)] text-sm mt-1">Manage guest testimonials.</p>
                </div>
                <div className="flex items-center gap-3">
                    {reviews.length === 0 && (
                        <button
                            onClick={handleSeed}
                            disabled={seeding}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--admin-accent)] border border-[var(--admin-accent)] rounded-lg hover:bg-[var(--admin-accent)] hover:text-white transition-colors disabled:opacity-50"
                        >
                            {seeding ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
                            Seed Real Reviews
                        </button>
                    )}
                    <button
                        onClick={() => setShowAddForm(true)}
                        className="flex items-center gap-2 bg-[var(--admin-text)] text-[var(--admin-bg)] px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                    >
                        <Plus className="w-4 h-4" />
                        <span>Add Review</span>
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review) => (
                    <div key={review.id} className="admin-card rounded-xl p-6 flex flex-col gap-4 group">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-lg shadow-inner">
                                    {/* Country Flag Emoji (Simple mapping or fallback) */}
                                    {getFlagEmoji(review.guest_country)}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[var(--admin-text)] leading-none">{review.guest_name}</h3>
                                    <span className="text-xs text-[var(--admin-text-muted)]">{review.guest_country}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500 px-2 py-1 rounded text-xs font-bold">
                                {review.rating}
                                <Star className="w-3 h-3 fill-current" />
                            </div>
                        </div>

                        <p className="text-[var(--admin-text-muted)] text-sm italic line-clamp-4 flex-1">
                            &ldquo;{review.review_text}&rdquo;
                        </p>

                        <div className="flex items-center justify-between text-xs text-[var(--admin-text-muted)] border-t border-[var(--admin-border)] pt-4 mt-auto">
                            <span>via {review.source}</span>
                            <span>{new Date(review.review_date).toLocaleDateString()}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <button
                                onClick={() => handleToggle(review.id, 'is_published', review.is_published)}
                                className={cn(
                                    "px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center justify-center gap-1.5",
                                    review.is_published
                                        ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400"
                                        : "bg-stone-50 text-stone-500 border-stone-200 dark:bg-stone-900 dark:border-stone-800"
                                )}
                            >
                                <div className={cn("w-1.5 h-1.5 rounded-full", review.is_published ? "bg-green-500" : "bg-stone-400")} />
                                {review.is_published ? "Published" : "Hidden"}
                            </button>

                            <button
                                onClick={() => handleToggle(review.id, 'is_featured', review.is_featured)}
                                className={cn(
                                    "px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center justify-center gap-1.5",
                                    review.is_featured
                                        ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400"
                                        : "bg-stone-50 text-stone-500 border-stone-200 dark:bg-stone-900 dark:border-stone-800 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200"
                                )}
                            >
                                <Star className={cn("w-3 h-3", review.is_featured && "fill-current")} />
                                {review.is_featured ? "Featured" : "Feature"}
                            </button>
                        </div>

                        <button
                            onClick={() => handleDelete(review.id)}
                            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-2 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-all"
                            title="Delete Review"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Add Review Slide-over */}
            {showAddForm && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowAddForm(false)} />
                    <div className="relative w-full max-w-md bg-[var(--admin-card)] h-full shadow-2xl p-6 overflow-y-auto animate-in slide-in-from-right duration-300 border-l border-[var(--admin-border)]">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-serif text-[var(--admin-text)]">Add New Review</h2>
                            <button onClick={() => setShowAddForm(false)}>
                                <X className="w-6 h-6 text-[var(--admin-text-muted)]" />
                            </button>
                        </div>

                        <form onSubmit={handleAdd} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--admin-text)]">Guest Name</label>
                                <input
                                    required
                                    type="text"
                                    value={newReview.guest_name || ""}
                                    onChange={(e) => setNewReview({ ...newReview, guest_name: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--admin-text)]">Country</label>
                                <input
                                    type="text"
                                    value={newReview.guest_country || ""}
                                    onChange={(e) => setNewReview({ ...newReview, guest_country: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--admin-text)]">Rating</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setNewReview({ ...newReview, rating: star })}
                                            className={cn(
                                                "p-2 rounded-lg border transition-all",
                                                (newReview.rating || 0) >= star
                                                    ? "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-900/20"
                                                    : "border-[var(--admin-border)] text-[var(--admin-text-muted)]"
                                            )}
                                        >
                                            <Star className={cn("w-5 h-5", (newReview.rating || 0) >= star && "fill-current")} />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--admin-text)]">Review Text</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={newReview.review_text || ""}
                                    onChange={(e) => setNewReview({ ...newReview, review_text: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--admin-text)]">Source</label>
                                <select
                                    value={newReview.source}
                                    onChange={(e) => setNewReview({ ...newReview, source: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] outline-none"
                                >
                                    <option value="Booking.com">Booking.com</option>
                                    <option value="Airbnb">Airbnb</option>
                                    <option value="Google">Google</option>
                                    <option value="Direct">Direct</option>
                                </select>
                            </div>

                            <div className="flex items-center gap-3 pt-2">
                                <input
                                    type="checkbox"
                                    id="featured"
                                    checked={newReview.is_featured || false}
                                    onChange={(e) => setNewReview({ ...newReview, is_featured: e.target.checked })}
                                    className="w-4 h-4 rounded border-stone-300 text-[var(--admin-accent)] focus:ring-[var(--admin-accent)]"
                                />
                                <label htmlFor="featured" className="text-sm font-medium text-[var(--admin-text)]">Mark as Featured</label>
                            </div>

                            <div className="pt-4 flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setShowAddForm(false)}
                                    className="flex-1 py-2.5 border border-[var(--admin-border)] rounded-lg text-[var(--admin-text)] hover:bg-[var(--admin-bg)] transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="flex-1 py-2.5 bg-[var(--admin-accent)] text-white rounded-lg hover:bg-[var(--admin-accent-hover)] transition-colors disabled:opacity-50 font-medium"
                                >
                                    {saving ? "Saving..." : "Save Review"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

// Simple helper for flags (could use a library or extensive map)
function getFlagEmoji(country: string) {
    const code = getCountryCode(country);
    if (!code) return "🌍";
    const codePoints = code
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}

function getCountryCode(countryName: string) {
    // Basic mapping for common countries in reviews
    const map: Record<string, string> = {
        "United Kingdom": "GB", "UK": "GB",
        "Germany": "DE",
        "France": "FR",
        "Italy": "IT",
        "Spain": "ES",
        "United States": "US", "USA": "US",
        "Canada": "CA",
        "Netherlands": "NL",
        "Belgium": "BE",
        "Switzerland": "CH",
        "Austria": "AT",
        "Poland": "PL",
        "Sweden": "SE",
        "Norway": "NO",
        "Denmark": "DK",
        "Malta": "MT"
    };
    return map[countryName] || null;
}
