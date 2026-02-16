import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Basic validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Save to Supabase
        const { error } = await supabase
            .from("messages")
            .insert({
                name,
                email,
                subject,
                message,
                read: false,
                created_at: new Date().toISOString(),
            });

        if (error) {
            console.error("Supabase Error:", error);
            return NextResponse.json(
                { error: "Failed to save message" },
                { status: 500 }
            );
        }

        // TODO: Send email notification (requires SendGrid/Resend API key)
        // For now, we just save to DB as requested.

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
