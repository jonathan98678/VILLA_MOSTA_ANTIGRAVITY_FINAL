"use client";

import * as React from "react";
import { Plus, Edit2, Trash2, Loader2, X, Save, Eye, EyeOff, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { ImageUpload } from "@/components/admin/ImageUpload";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featured_image: string;
    category: string;
    meta_title: string;
    meta_description: string;
    is_published: boolean;
    author: string;
    created_at: string;
}

const categories = ["Travel", "Food & Drink", "Culture", "Tips", "Activities", "History"];

export default function AdminBlogPage() {
    const [posts, setPosts] = React.useState<BlogPost[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [editingPost, setEditingPost] = React.useState<BlogPost | null>(null);
    const [isNew, setIsNew] = React.useState(false);
    const [saving, setSaving] = React.useState(false);
    const [saveMessage, setSaveMessage] = React.useState<{ type: "success" | "error"; text: string } | null>(null);

    const fetchPosts = React.useCallback(async () => {
        try {
            const res = await fetch("/api/admin/blog");
            if (res.ok) {
                const data = await res.json();
                setPosts(data);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    React.useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const showMessage = (type: "success" | "error", text: string) => {
        setSaveMessage({ type, text });
        setTimeout(() => setSaveMessage(null), 3000);
    };

    const handleNewPost = () => {
        setIsNew(true);
        setEditingPost({
            id: "",
            title: "",
            slug: "",
            excerpt: "",
            content: "",
            featured_image: "",
            category: "Travel",
            meta_title: "",
            meta_description: "",
            is_published: false,
            author: "Villa Mosta",
            created_at: new Date().toISOString(),
        });
    };

    const handleEdit = (post: BlogPost) => {
        setIsNew(false);
        setEditingPost({ ...post });
    };

    const handleClose = () => {
        setEditingPost(null);
        setIsNew(false);
    };

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
    };

    const handleTitleChange = (title: string) => {
        if (!editingPost) return;
        setEditingPost({
            ...editingPost,
            title,
            slug: isNew ? generateSlug(title) : editingPost.slug,
            meta_title: editingPost.meta_title || title,
        });
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingPost) return;

        setSaving(true);
        try {
            const method = isNew ? "POST" : "PUT";
            const res = await fetch("/api/admin/blog", {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editingPost),
            });

            if (res.ok) {
                await fetchPosts();
                handleClose();
                showMessage("success", isNew ? "Post created!" : "Post updated!");
            } else {
                showMessage("error", "Failed to save post");
            }
        } catch (error) {
            console.error("Error saving post:", error);
            showMessage("error", "Failed to save post");
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this post?")) return;

        const prev = [...posts];
        setPosts(posts.filter((p) => p.id !== id));

        try {
            const res = await fetch("/api/admin/blog", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            if (!res.ok) throw new Error("Failed");
            showMessage("success", "Post deleted");
        } catch {
            setPosts(prev);
            showMessage("error", "Failed to delete post");
        }
    };

    const handleTogglePublish = async (post: BlogPost) => {
        setPosts(posts.map((p) => (p.id === post.id ? { ...p, is_published: !p.is_published } : p)));
        try {
            await fetch("/api/admin/blog", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: post.id, is_published: !post.is_published }),
            });
        } catch {
            setPosts(posts.map((p) => (p.id === post.id ? { ...p, is_published: post.is_published } : p)));
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-[var(--admin-text-muted)]" />
            </div>
        );
    }

    return (
        <>
            {/* Save feedback toast */}
            {saveMessage && (
                <div
                    className={cn(
                        "fixed top-6 right-6 z-[200] px-5 py-3 rounded-xl shadow-lg text-sm font-medium flex items-center gap-2 animate-fade-in",
                        saveMessage.type === "success"
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                    )}
                >
                    {saveMessage.type === "success" ? "✓" : "✗"} {saveMessage.text}
                </div>
            )}

            <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-serif text-[var(--admin-text)]">Blog</h1>
                    <p className="text-[var(--admin-text-muted)] text-sm mt-1">
                        Create and manage blog posts for the website.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full border border-amber-200">
                        {posts.filter((p) => p.is_published).length} Published
                    </div>
                    <button
                        onClick={handleNewPost}
                        className="flex items-center gap-2 bg-[var(--admin-text)] text-[var(--admin-bg)] px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                    >
                        <Plus className="w-4 h-4" />
                        <span>New Post</span>
                    </button>
                </div>
            </header>

            {/* Posts List */}
            {posts.length === 0 ? (
                <div className="admin-card rounded-xl p-12 text-center">
                    <FileText className="w-12 h-12 text-[var(--admin-text-muted)] mx-auto mb-4 opacity-40" />
                    <h3 className="text-lg font-medium text-[var(--admin-text)] mb-2">No blog posts yet</h3>
                    <p className="text-[var(--admin-text-muted)] text-sm mb-6">
                        Create your first post to appear on the website blog page.
                    </p>
                    <button
                        onClick={handleNewPost}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--admin-accent)] text-white rounded-lg hover:bg-[var(--admin-accent-hover)] transition-colors text-sm font-medium"
                    >
                        <Plus className="w-4 h-4" />
                        Create First Post
                    </button>
                </div>
            ) : (
                <div className="space-y-4">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="admin-card rounded-xl p-5 flex items-center gap-5 group"
                        >
                            {/* Featured image thumbnail */}
                            <div className="w-20 h-14 rounded-lg bg-stone-100 dark:bg-stone-800 overflow-hidden flex-shrink-0">
                                {post.featured_image ? (
                                    <img
                                        src={post.featured_image}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-stone-400">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-semibold text-[var(--admin-text)] truncate">
                                        {post.title || "Untitled"}
                                    </h3>
                                    <span
                                        className={cn(
                                            "flex-shrink-0 px-2 py-0.5 text-[10px] font-medium rounded-full",
                                            post.is_published
                                                ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                                                : "bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400"
                                        )}
                                    >
                                        {post.is_published ? "Published" : "Draft"}
                                    </span>
                                </div>
                                <p className="text-sm text-[var(--admin-text-muted)] truncate">
                                    {post.excerpt || "No excerpt"}
                                </p>
                                <div className="flex items-center gap-3 mt-1 text-xs text-[var(--admin-text-muted)]">
                                    <span>{post.category}</span>
                                    <span>·</span>
                                    <span>{new Date(post.created_at).toLocaleDateString()}</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2 flex-shrink-0">
                                <button
                                    onClick={() => handleTogglePublish(post)}
                                    className="p-2 rounded-lg text-[var(--admin-text-muted)] hover:bg-[var(--admin-bg)] transition-colors"
                                    title={post.is_published ? "Unpublish" : "Publish"}
                                >
                                    {post.is_published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                                <button
                                    onClick={() => handleEdit(post)}
                                    className="p-2 rounded-lg text-[var(--admin-text-muted)] hover:text-[var(--admin-accent)] hover:bg-[var(--admin-bg)] transition-colors"
                                    title="Edit"
                                >
                                    <Edit2 className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => handleDelete(post.id)}
                                    className="p-2 rounded-lg text-[var(--admin-text-muted)] hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                    title="Delete"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Edit/Create Modal */}
            {editingPost && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
                    <div className="relative w-full max-w-5xl max-h-[90vh] bg-[var(--admin-card)] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-[var(--admin-border)] flex items-center justify-between bg-[var(--admin-bg)]">
                            <h2 className="text-lg font-semibold text-[var(--admin-text)]">
                                {isNew ? "New Blog Post" : `Edit: ${editingPost.title}`}
                            </h2>
                            <button onClick={handleClose} className="text-[var(--admin-text-muted)] hover:text-[var(--admin-text)] transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Scrollable Form */}
                        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                            <form id="blog-form" onSubmit={handleSave} className="space-y-8">
                                {/* Basic Info */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium text-[var(--admin-text-muted)] uppercase tracking-wider">
                                        Post Details
                                    </h3>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-[var(--admin-text)]">Title</label>
                                        <input
                                            type="text"
                                            required
                                            value={editingPost.title}
                                            onChange={(e) => handleTitleChange(e.target.value)}
                                            placeholder="Enter post title..."
                                            className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] focus:border-transparent outline-none transition-all text-lg"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-[var(--admin-text)]">Slug (URL)</label>
                                            <input
                                                type="text"
                                                value={editingPost.slug}
                                                onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
                                                className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] focus:border-transparent outline-none transition-all font-mono text-sm"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-[var(--admin-text)]">Category</label>
                                            <select
                                                value={editingPost.category}
                                                onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                                                className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] outline-none transition-all"
                                            >
                                                {categories.map((cat) => (
                                                    <option key={cat} value={cat}>{cat}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-[var(--admin-text)]">Excerpt</label>
                                        <textarea
                                            value={editingPost.excerpt}
                                            onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                                            placeholder="Brief summary shown on blog listing page..."
                                            rows={2}
                                            className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-[var(--admin-text)]">Featured Image</label>
                                        <ImageUpload
                                            value={editingPost.featured_image ? [editingPost.featured_image] : []}
                                            onChange={(urls) => setEditingPost({ ...editingPost, featured_image: urls[0] || "" })}
                                            onRemove={() => setEditingPost({ ...editingPost, featured_image: "" })}
                                            maxFiles={1}
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium text-[var(--admin-text-muted)] uppercase tracking-wider border-t border-[var(--admin-border)] pt-6">
                                        Content
                                    </h3>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-[var(--admin-text)]">Body (Markdown supported)</label>
                                        <textarea
                                            value={editingPost.content}
                                            onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                                            placeholder="Write your blog post content here..."
                                            rows={12}
                                            className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] focus:border-transparent outline-none transition-all font-mono text-sm leading-relaxed"
                                        />
                                    </div>
                                </div>

                                {/* SEO */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium text-[var(--admin-text-muted)] uppercase tracking-wider border-t border-[var(--admin-border)] pt-6">
                                        SEO
                                    </h3>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-[var(--admin-text)]">Meta Title</label>
                                            <input
                                                type="text"
                                                value={editingPost.meta_title}
                                                onChange={(e) => setEditingPost({ ...editingPost, meta_title: e.target.value })}
                                                placeholder="SEO page title"
                                                className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] focus:border-transparent outline-none transition-all"
                                            />
                                            <p className="text-xs text-[var(--admin-text-muted)]">
                                                {(editingPost.meta_title || "").length}/60 characters
                                            </p>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-[var(--admin-text)]">Meta Description</label>
                                            <textarea
                                                value={editingPost.meta_description}
                                                onChange={(e) => setEditingPost({ ...editingPost, meta_description: e.target.value })}
                                                placeholder="SEO meta description"
                                                rows={2}
                                                className="w-full px-3 py-2 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-bg)] focus:ring-2 focus:ring-[var(--admin-accent)] focus:border-transparent outline-none transition-all"
                                            />
                                            <p className="text-xs text-[var(--admin-text-muted)]">
                                                {(editingPost.meta_description || "").length}/155 characters
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 border-t border-[var(--admin-border)] bg-[var(--admin-bg)] flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm text-[var(--admin-text)]">
                                <input
                                    type="checkbox"
                                    checked={editingPost.is_published}
                                    onChange={(e) => setEditingPost({ ...editingPost, is_published: e.target.checked })}
                                    className="w-4 h-4 rounded border-stone-300 text-[var(--admin-accent)] focus:ring-[var(--admin-accent)]"
                                />
                                Publish immediately
                            </label>
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="px-4 py-2 text-sm font-medium text-[var(--admin-text)] hover:bg-[var(--admin-border)] rounded-lg transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    form="blog-form"
                                    disabled={saving}
                                    className="px-6 py-2 text-sm font-medium text-white bg-[var(--admin-accent)] hover:bg-[var(--admin-accent-hover)] rounded-lg shadow-lg shadow-amber-900/20 transition-all flex items-center gap-2 disabled:opacity-50"
                                >
                                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                    {isNew ? "Create Post" : "Save Changes"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
