import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

export const metadata = {
    title: "Blog - Malta Travel Tips, Local Culture & Villa Mosta Stories",
    description: "Explore Malta through our travel guides, local food recommendations, hidden gems in Mosta, and tips for your Mediterranean holiday at Villa Mosta.",
    keywords: [
        "malta travel blog",
        "mosta travel guide",
        "things to do in malta",
        "maltese food guide",
        "villa mosta blog",
        "malta hidden gems",
        "mediterranean travel tips",
    ],
};

const categories = [
    { name: "All", slug: "all" },
    { name: "Local Guide", slug: "local-guide" },
    { name: "Travel Itinerary", slug: "travel-itinerary" },
    { name: "Food & Drink", slug: "food-drink" },
    { name: "Villa Life", slug: "villa-life" },
    { name: "Malta Culture", slug: "malta-culture" },
];

const blogPosts = [
    {
        id: 1,
        title: "Top 5 Hidden Gems in Mosta You Must Visit",
        excerpt: "Mosta is famous for its Rotunda, but there is so much more to discover. From hidden chapels to century-old bakeries, here are five local favorites most tourists miss.",
        image: "/images/villa/hero-rotunda.jpg",
        date: "October 15, 2025",
        author: "Minja & Andreas",
        category: "Local Guide",
        readTime: "5 min read",
    },
    {
        id: 2,
        title: "A Weekend Guide to Malta's Beautiful North",
        excerpt: "Villa Mosta puts you in the perfect position to explore the stunning northern coast. Golden Bay, Mellieha, and the Gozo ferry are all within easy reach.",
        image: "/images/villa/terrace.jpg",
        date: "September 28, 2025",
        author: "Minja & Andreas",
        category: "Travel Itinerary",
        readTime: "7 min read",
    },
    {
        id: 3,
        title: "Traditional Maltese Cuisine: A Complete Food Guide",
        excerpt: "From Pastizzi to Rabbit Stew and Timpana, discover the rich flavors of Maltese cooking. We share our favorite local restaurants and street food spots near Mosta.",
        image: "/images/villa/room-3.jpg",
        date: "September 10, 2025",
        author: "Minja & Andreas",
        category: "Food & Drink",
        readTime: "6 min read",
    },
    {
        id: 4,
        title: "Why Mosta Is the Best Base for Exploring Malta",
        excerpt: "Centrally located and well-connected, Mosta gives you easy access to every corner of Malta. Here is why experienced travelers choose to stay in the heart of the island.",
        image: "/images/villa/entrence.jpg",
        date: "August 22, 2025",
        author: "Minja & Andreas",
        category: "Travel Itinerary",
        readTime: "4 min read",
    },
    {
        id: 5,
        title: "Life at Villa Mosta: What Makes Our Home Special",
        excerpt: "Step inside our traditional Maltese home. Beautiful terraces, original character, and the kind of hospitality that turns strangers into lifelong friends.",
        image: "/images/villa/terrace-view.jpg",
        date: "August 5, 2025",
        author: "Minja & Andreas",
        category: "Villa Life",
        readTime: "5 min read",
    },
    {
        id: 6,
        title: "Festa Season in Malta: A Celebration Like No Other",
        excerpt: "Every summer, Maltese villages come alive with fireworks, marching bands, and street decorations. The Mosta festa is one of the island's most spectacular events.",
        image: "/images/villa/hero-rotunda.jpg",
        date: "July 18, 2025",
        author: "Minja & Andreas",
        category: "Malta Culture",
        readTime: "6 min read",
    },
];

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="pt-20 min-h-screen">
                {/* Hero Header */}
                <section className="page-hero text-center">
                    <div className="container max-w-4xl mx-auto">
                        <span className="section-overline text-amber-400">JOURNAL</span>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8">
                            Stories from Malta
                        </h1>
                        <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                            Travel guides, local secrets, and updates from Villa Mosta.
                            Discover the authentic side of the Mediterranean.
                        </p>
                    </div>
                </section>

                {/* Category Filter */}
                <div className="bg-[var(--color-warm-cream)] border-b border-stone-200">
                    <div className="container">
                        <div className="flex items-center gap-2 overflow-x-auto py-5 scrollbar-hide">
                            {categories.map((cat) => (
                                <button
                                    key={cat.slug}
                                    className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${cat.slug === "all"
                                            ? "bg-stone-800 text-white"
                                            : "bg-white text-stone-600 border border-stone-200 hover:border-[var(--color-honey)] hover:text-[var(--color-accent)]"
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Featured Post */}
                <section className="section bg-[var(--color-warm-cream)]">
                    <div className="container">
                        <article className="group card-premium overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                                    <Image
                                        src={blogPosts[0].image}
                                        alt={blogPosts[0].title}
                                        fill
                                        className="object-cover card-image-zoom"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full text-stone-800">
                                        Featured
                                    </div>
                                </div>
                                <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-xs text-stone-400 mb-5">
                                        <div className="flex items-center gap-1.5">
                                            <Tag className="w-3.5 h-3.5" />
                                            {blogPosts[0].category}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {blogPosts[0].date}
                                        </div>
                                    </div>
                                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-800 mb-5 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                                        {blogPosts[0].title}
                                    </h2>
                                    <p className="text-stone-500 text-base sm:text-lg leading-relaxed mb-8">
                                        {blogPosts[0].excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm text-stone-400">
                                            <User className="w-4 h-4" />
                                            {blogPosts[0].author}
                                        </div>
                                        <span className="inline-flex items-center text-sm font-medium text-[var(--color-accent)] uppercase tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                                            Read Article <ArrowRight className="w-4 h-4 ml-2" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="text-center mb-12 sm:mb-16">
                            <span className="section-overline">LATEST STORIES</span>
                            <h2 className="section-title">More from our journal</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                            {blogPosts.slice(1).map((post) => (
                                <article key={post.id} className="group cursor-pointer flex flex-col h-full">
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100 mb-6">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover card-image-zoom"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full text-stone-800">
                                            {post.category}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-xs text-stone-400 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {post.date}
                                        </div>
                                        <span className="text-stone-300">-</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h3 className="font-serif text-xl sm:text-2xl text-stone-800 mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300 leading-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-stone-500 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center text-sm font-medium uppercase tracking-wide text-stone-800 group-hover:text-[var(--color-accent)] transition-colors duration-300 mt-auto">
                                        Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter / CTA */}
                <section className="section bg-[var(--color-warm-cream)]">
                    <div className="container max-w-4xl mx-auto">
                        <div className="card-premium p-10 sm:p-16 text-center">
                            <span className="section-overline">STAY CONNECTED</span>
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-800 mb-5 mt-2">
                                Subscribe to our newsletter
                            </h2>
                            <p className="text-stone-500 text-base sm:text-lg mb-10 max-w-lg mx-auto">
                                Get the latest travel tips and exclusive offers from Villa Mosta delivered directly to your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 px-5 py-3.5 rounded-full border border-stone-200 focus:outline-none focus:border-[var(--color-honey)] focus:ring-1 focus:ring-[var(--color-honey)]/30 transition-all"
                                />
                                <button className="px-7 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium rounded-full hover:from-amber-500 hover:to-amber-400 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98]">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEO Internal Links */}
                <section className="py-12 bg-white border-t border-stone-100">
                    <div className="container">
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <Link href="/villa" className="text-stone-500 hover:text-[var(--color-accent)] transition-colors">Explore the Villa</Link>
                            <Link href="/rooms" className="text-stone-500 hover:text-[var(--color-accent)] transition-colors">Our Rooms</Link>
                            <Link href="/location" className="text-stone-500 hover:text-[var(--color-accent)] transition-colors">Location in Malta</Link>
                            <Link href="/reviews" className="text-stone-500 hover:text-[var(--color-accent)] transition-colors">Guest Reviews</Link>
                            <Link href="/contact" className="text-stone-500 hover:text-[var(--color-accent)] transition-colors">Contact Us</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
