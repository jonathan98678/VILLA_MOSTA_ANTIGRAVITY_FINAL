import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "blog.json");

async function savePosts(posts: any[]) {
    const dir = path.dirname(DATA_FILE);
    try {
        await fs.access(dir);
    } catch {
        await fs.mkdir(dir, { recursive: true });
    }
    await fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2));
}

const SEED_POSTS = [
    {
        id: uuidv4(),
        title: "Top 10 Hidden Gems in Mosta",
        slug: "top-10-hidden-gems-mosta",
        excerpt: "Discover the secret spots only locals know about in the heart of Malta.",
        content: "Mosta is famous for its Rotunda, but there's so much more...",
        featured_image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800",
        category: "Travel",
        meta_title: "Hidden Gems in Mosta | Villa Mosta Blog",
        meta_description: "Explore Mosta beyond the Rotunda.",
        is_published: true,
        author: "Villa Mosta",
        created_at: new Date().toISOString()
    },
    {
        id: uuidv4(),
        title: "A Guide to Traditional Maltese Cuisine",
        slug: "guide-maltese-cuisine",
        excerpt: "From Pastizzi to Rabbit Stew, here's what you must eat in Malta.",
        content: "Maltese food is a delicious blend of Mediterranean influences...",
        featured_image: "https://images.unsplash.com/photo-1529312266912-b33cf6227e2f?auto=format&fit=crop&q=80&w=800",
        category: "Food & Drink",
        meta_title: "Maltese Cuisine Guide",
        meta_description: "Best food to eat in Malta.",
        is_published: true,
        author: "Villa Mosta",
        created_at: new Date(Date.now() - 86400000).toISOString()
    },
    {
        id: uuidv4(),
        title: "Best Beaches Near Mosta",
        slug: "best-beaches-near-mosta",
        excerpt: "The golden sands are just a short bus ride away.",
        content: "While Mosta is inland, it's perfectly positioned to reach Golden Bay...",
        featured_image: "https://images.unsplash.com/photo-1543743322-1d573f08b532?auto=format&fit=crop&q=80&w=800",
        category: "Activities",
        meta_title: "Beaches Near Mosta",
        meta_description: "Best beaches accessible from Mosta.",
        is_published: true,
        author: "Villa Mosta",
        created_at: new Date(Date.now() - 172800000).toISOString()
    },
    {
        id: uuidv4(),
        title: "History of the Mosta Dome",
        slug: "history-mosta-dome",
        excerpt: "The miracle of World War II and the architectural wonder.",
        content: "The Rotunda of Mosta is the third largest unsupported dome in the world...",
        featured_image: "https://images.unsplash.com/photo-1628628280145-8c0a8760a781?auto=format&fit=crop&q=80&w=800",
        category: "History",
        meta_title: "History of Mosta Dome",
        meta_description: "Learn about the Miracle of Mosta.",
        is_published: true,
        author: "Villa Mosta",
        created_at: new Date(Date.now() - 259200000).toISOString()
    },
    {
        id: uuidv4(),
        title: "Day Trip to Mdina",
        slug: "day-trip-mdina",
        excerpt: "Explore the Silent City, just 10 minutes from Villa Mosta.",
        content: "Mdina, the old capital of Malta, is a medieval walled city...",
        featured_image: "https://images.unsplash.com/photo-1605650125556-c7379f8c67c7?auto=format&fit=crop&q=80&w=800",
        category: "Travel",
        meta_title: "Mdina Day Trip Guide",
        meta_description: "Visiting Mdina from Mosta.",
        is_published: true,
        author: "Villa Mosta",
        created_at: new Date(Date.now() - 432000000).toISOString()
    }
];

export async function POST() {
    try {
        await savePosts(SEED_POSTS);
        return NextResponse.json({ success: true, count: SEED_POSTS.length });
    } catch (error) {
        return NextResponse.json({ error: "Failed to seed blog" }, { status: 500 });
    }
}
