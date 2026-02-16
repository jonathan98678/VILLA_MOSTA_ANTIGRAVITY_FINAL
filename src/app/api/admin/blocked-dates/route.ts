import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const roomId = searchParams.get("roomId");

        let query = supabase.from("blocked_dates").select("*");

        if (roomId) {
            query = query.eq("room_id", roomId);
        }

        const { data, error } = await query;

        if (error) throw error;

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching blocked dates:", error);
        return NextResponse.json({ error: "Failed to fetch blocked dates" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { room_id, start_date, end_date, reason } = body;

        if (!start_date || !end_date) {
            return NextResponse.json({ error: "Start and end dates are required" }, { status: 400 });
        }

        const { data, error } = await supabase
            .from("blocked_dates")
            .insert([{ room_id: room_id || null, start_date, end_date, reason }])
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error creating blocked date:", error);
        return NextResponse.json({ error: "Failed to create blocked date" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }

        const { error } = await supabase
            .from("blocked_dates")
            .delete()
            .eq("id", id);

        if (error) throw error;

        return NextResponse.json({ message: "Blocked date deleted successfully" });
    } catch (error) {
        console.error("Error deleting blocked date:", error);
        return NextResponse.json({ error: "Failed to delete blocked date" }, { status: 500 });
    }
}
