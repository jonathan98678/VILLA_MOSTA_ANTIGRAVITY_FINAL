import { NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import { join } from "path";

// Simple JSON file based persistence for gallery since it's just a list of images
const DB_PATH = join(process.cwd(), "data", "gallery.json");

async function getGallery() {
    try {
        const data = await readFile(DB_PATH, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        // Return default if file doesn't exist
        return [
            { id: "1", src: "/images/villa/room-1.jpg", alt: "Deluxe Double Room" },
            { id: "2", src: "/images/villa/room-2.jpg", alt: "Cozy Double Room" },
            { id: "3", src: "/images/villa/room-3.jpg", alt: "Family Room" },
            { id: "4", src: "/images/villa/terrace-view.jpg", alt: "Terrace View" },
            { id: "5", src: "/images/villa/terrace.jpg", alt: "Rooftop Terrace" },
        ];
    }
}

async function saveGallery(images: any[]) {
    try {
        const dir = join(process.cwd(), "data");
        try {
            await (await import("fs/promises")).mkdir(dir, { recursive: true });
        } catch (e) { }
        await writeFile(DB_PATH, JSON.stringify(images, null, 2));
        return true;
    } catch (error) {
        console.error("Error saving gallery:", error);
        return false;
    }
}

export async function GET() {
    const images = await getGallery();
    return NextResponse.json(images);
}

export async function POST(request: Request) {
    try {
        const image = await request.json();
        const images = await getGallery();
        const newImages = [...images, { ...image, id: Date.now().toString() }];
        await saveGallery(newImages);
        return NextResponse.json(newImages);
    } catch (error) {
        return NextResponse.json({ error: "Failed to add image" }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const updatedImages = await request.json(); // Expects full array for reordering
        await saveGallery(updatedImages);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update gallery" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        const images = await getGallery();
        const newImages = images.filter((img: any) => img.id !== id);
        await saveGallery(newImages);
        return NextResponse.json(newImages); // Return updated list
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete image" }, { status: 500 });
    }
}
