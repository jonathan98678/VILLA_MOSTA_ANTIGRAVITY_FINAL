import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Villa Mosta Blog | Explore Malta",
    description: "Read our latest stories, travel tips, and guides to exploring Malta from the heart of Mosta.",
};

const blogPosts = [
    {
        id: 1,
        title: "Top 5 Hidden Gems in Mosta",
        excerpt: "Mosta is famous for its Rotunda, but there's so much more to discover in this historic town. From hidden chapels to local bakeries...",
        image: "/images/villa/hero-rotunda.jpg",
        date: "October 15, 2025",
        author: "Andreas",
        category: "Local Guide"
    },
    {
        id: 2,
        title: "A Weekend Guide to Malta's North",
        excerpt: "Staying at Villa Mosta puts you in the perfect position to explore the stunning northern beaches and the silent city of Mdina.",
        image: "/images/villa/terrace.jpg",
        date: "September 28, 2025",
        author: "Andreas",
        category: "Travel Itinerary"
    },
    {
        id: 3,
        title: "Traditional Maltese Cuisine: What to Eat",
        excerpt: "Don't leave the island without trying Pastizzi, Rabbit Stew, and Timpana. Here are our favorite local spots to taste them all.",
        image: "/images/villa/room-3.jpg", // Using existing image as placeholder
        date: "September 10, 2025",
        author: "Andreas",
        category: "Food & Drink"
    }
];

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="pt-24 pb-20 bg-white">
                {/* Header */}
                <div className="container text-center max-w-3xl mb-16 px-4">
                    <span className="text-xs font-medium tracking-[0.3em] uppercase text-stone-400 block mb-4">
                        JOURNAL
                    </span>
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-800 mb-6">
                        Stories from Malta
                    </h1>
                    <p className="text-stone-500 text-lg leading-relaxed">
                        Travel guides, local secrets, and updates from Villa Mosta.
                        Discover the authentic side of the Mediterranean.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="group cursor-pointer flex flex-col h-full">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-100 mb-6">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium uppercase tracking-wide rounded-full text-stone-800">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-xs text-stone-400 mb-3">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-3.5 h-3.5" />
                                        {post.author}
                                    </div>
                                </div>

                                <h2 className="font-serif text-2xl text-stone-800 mb-3 group-hover:text-amber-600 transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-stone-800 text-sm font-medium uppercase tracking-wide group-hover:text-amber-600 transition-colors mt-auto">
                                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Newsletter / CTA */}
                <div className="container mt-24 px-4">
                    <div className="bg-stone-100 rounded-2xl p-8 sm:p-16 text-center">
                        <h3 className="font-serif text-3xl text-stone-800 mb-4">Subscribe to our newsletter</h3>
                        <p className="text-stone-500 mb-8 max-w-lg mx-auto">Get the latest travel tips and exclusive offers from Villa Mosta delivered directly to your inbox.</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-stone-400"
                            />
                            <button className="px-6 py-3 bg-stone-800 text-white font-medium rounded-lg hover:bg-stone-700 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
