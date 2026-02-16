import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { format } from "date-fns";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const roomId = searchParams.get("roomId");

        // 1. Fetch Bookings (Confirmed only)
        let bookingsQuery = supabase
            .from("bookings")
            .select("check_in, check_out, id")
            .neq("booking_status", "cancelled");

        if (roomId) {
            bookingsQuery = bookingsQuery.eq("room_id", roomId);
        }

        const { data: bookings, error: bookingsError } = await bookingsQuery;
        if (bookingsError) throw bookingsError;

        // 2. Fetch Blocked Dates
        let blockedQuery = supabase
            .from("blocked_dates")
            .select("start_date, end_date, reason, id");

        if (roomId) {
            blockedQuery = blockedQuery.eq("room_id", roomId);
        }

        const { data: blocks, error: blocksError } = await blockedQuery;
        if (blocksError) throw blocksError;

        // 3. Generate iCal string
        const events: string[] = [];

        // Add Bookings
        bookings?.forEach(b => {
            events.push(createEvent(b.check_in, b.check_out, "Booked", b.id));
        });

        // Add Blocks
        blocks?.forEach(b => {
            events.push(createEvent(b.start_date, b.end_date, b.reason || "Blocked", b.id));
        });

        // iCal Header
        let icsContent = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//Villa Mosta//Bookings//EN",
            "CALSCALE:GREGORIAN",
            "METHOD:PUBLISH",
            ...events,
            "END:VCALENDAR"
        ].join("\r\n");

        return new NextResponse(icsContent, {
            headers: {
                "Content-Type": "text/calendar; charset=utf-8",
                "Content-Disposition": `attachment; filename="calendar-${roomId || 'all'}.ics"`,
            },
        });

    } catch (error) {
        console.error("Error generating iCal:", error);
        return NextResponse.json({ error: "Failed to generate iCal" }, { status: 500 });
    }
}

function createEvent(startDate: string, endDate: string, summary: string, uid: string) {
    // Format dates to YYYYMMDD
    const start = startDate.replace(/-/g, "");
    const end = endDate.replace(/-/g, "");
    const now = format(new Date(), "yyyyMMdd'T'HHmmss'Z'");

    return [
        "BEGIN:VEVENT",
        `UID:${uid}`,
        `DTSTAMP:${now}`,
        `DTSTART;VALUE=DATE:${start}`,
        `DTEND;VALUE=DATE:${end}`,
        `SUMMARY:${summary}`,
        "END:VEVENT"
    ].join("\r\n");
}
