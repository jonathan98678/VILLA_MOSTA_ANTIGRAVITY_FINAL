import { NextResponse } from "next/server";
import { getReviews, addReview, deleteReview, createServerClient } from "@/lib/db";

export async function GET() {
    try {
        const reviews = await getReviews();
        return NextResponse.json(reviews);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const review = await request.json();
        const success = await addReview(review);

        if (success) {
            return NextResponse.json({ message: "Review added successfully" });
        } else {
            return NextResponse.json({ error: "Failed to add review" }, { status: 500 });
        }
    } catch (error) {
        console.error("Error adding review:", error);
        return NextResponse.json({ error: "Failed to add review" }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const { id, ...updates } = await request.json();

        // We'll use direct supabase update here or add a helper in db.ts
        // Since we didn't check for updateReview in db.ts, let's use createServerClient directly here
        // to ensure it works without modifying db.ts again
        const supabase = createServerClient();

        const { error } = await supabase
            .from("reviews")
            .update(updates)
            .eq("id", id);

        if (error) throw error;

        return NextResponse.json({ message: "Review updated successfully" });
    } catch (error) {
        console.error("Error updating review:", error);
        return NextResponse.json({ error: "Failed to update review" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        const success = await deleteReview(id);

        if (success) {
            return NextResponse.json({ message: "Review deleted successfully" });
        } else {
            return NextResponse.json({ error: "Failed to delete review" }, { status: 500 });
        }
    } catch (error) {
        console.error("Error deleting review:", error);
        return NextResponse.json({ error: "Failed to delete review" }, { status: 500 });
    }
}
