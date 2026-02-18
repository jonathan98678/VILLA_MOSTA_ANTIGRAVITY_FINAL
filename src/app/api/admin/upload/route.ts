import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Ensure uploads directory exists
        const uploadDir = join(process.cwd(), "public", "uploads");
        try {
            await mkdir(uploadDir, { recursive: true });
        } catch (error) {
            // Ignore if exists
        }

        // Generate unique filename
        const uniqueSuffix = uuidv4();
        const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, ""); // Sanitize
        const filename = `${uniqueSuffix}-${originalName}`;
        const filepath = join(uploadDir, filename);

        // Write file
        await writeFile(filepath, buffer);

        // Return public URL
        const publicUrl = `/uploads/${filename}`;

        return NextResponse.json({ urls: [publicUrl] });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
