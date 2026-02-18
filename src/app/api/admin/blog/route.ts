import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

// In-memory store for blog posts (since we are likely ensuring it works first before DB)
// User wanted "relevant free stock images". I'll configure some defaults.
// Actually, this should probably use fs/promises to read/write to a file like gallery.

import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "blog.json");

// Ensure data directory exists
async function ensureDataDir() {
    const dir = path.dirname(DATA_FILE);
    try {
        await fs.access(dir);
    } catch {
        await fs.mkdir(dir, { recursive: true });
    }
}

async function getPosts() {
    await ensureDataDir();
    try {
        const data = await fs.readFile(DATA_FILE, "utf-8");
        return JSON.parse(data);
    } catch {
        return [];
    }
}

async function savePosts(posts: any[]) {
    await ensureDataDir();
    await fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2));
}

export async function GET() {
    const posts = await getPosts();
    return NextResponse.json(posts);
}

export async function POST(req: Request) {
    const body = await req.json();
    const posts = await getPosts();

    const newPost = {
        id: uuidv4(),
        ...body,
        created_at: new Date().toISOString(),
    };

    posts.unshift(newPost);
    await savePosts(posts);

    return NextResponse.json(newPost);
}

export async function PUT(req: Request) {
    const body = await req.json();
    const posts = await getPosts();

    const index = posts.findIndex((p: any) => p.id === body.id);
    if (index === -1) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    posts[index] = { ...posts[index], ...body };
    await savePosts(posts);

    return NextResponse.json(posts[index]);
}

export async function DELETE(req: Request) {
    const body = await req.json();
    const posts = await getPosts();

    const filtered = posts.filter((p: any) => p.id !== body.id);
    await savePosts(filtered);

    return NextResponse.json({ success: true });
}
