import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow the login page and auth API through
    if (
        pathname === "/admin/login" ||
        pathname.startsWith("/api/admin/auth")
    ) {
        return NextResponse.next();
    }

    // Protect all other /admin routes and /api/admin routes
    if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
        const sessionCookie = request.cookies.get("admin_session");

        if (!sessionCookie?.value) {
            // Redirect to login page
            const loginUrl = new URL("/admin/login", request.url);
            return NextResponse.redirect(loginUrl);
        }

        // Validate the session token is valid base64 JSON
        try {
            const decoded = JSON.parse(
                Buffer.from(sessionCookie.value, "base64").toString()
            );

            // Check token isn't older than 24 hours
            if (Date.now() - decoded.ts > 24 * 60 * 60 * 1000) {
                const loginUrl = new URL("/admin/login", request.url);
                const response = NextResponse.redirect(loginUrl);
                response.cookies.delete("admin_session");
                return response;
            }
        } catch {
            // Invalid token, redirect to login
            const loginUrl = new URL("/admin/login", request.url);
            const response = NextResponse.redirect(loginUrl);
            response.cookies.delete("admin_session");
            return response;
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/api/admin/:path*"],
};
