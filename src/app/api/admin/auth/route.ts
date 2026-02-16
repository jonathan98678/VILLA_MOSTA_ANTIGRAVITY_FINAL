import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { username, password } = await request.json();

        const validUsername = process.env.ADMIN_USERNAME || "VillaMosta";
        const validPassword = process.env.ADMIN_PASSWORD || "VillaMosta1!";

        if (username === validUsername && password === validPassword) {
            // Create a simple session token
            const token = Buffer.from(
                JSON.stringify({ user: username, ts: Date.now() })
            ).toString("base64");

            const response = NextResponse.json({ success: true });

            // Set HTTP-only cookie valid for 24 hours
            response.cookies.set("admin_session", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 60 * 60 * 24, // 24 hours
                path: "/",
            });

            return response;
        }

        return NextResponse.json(
            { error: "Invalid credentials" },
            { status: 401 }
        );
    } catch {
        return NextResponse.json(
            { error: "Invalid request" },
            { status: 400 }
        );
    }
}

export async function DELETE() {
    const response = NextResponse.json({ success: true });
    response.cookies.delete("admin_session");
    return response;
}
