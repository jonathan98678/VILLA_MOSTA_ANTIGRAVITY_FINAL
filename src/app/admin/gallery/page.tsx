"use client";

import * as React from "react";
import Image from "next/image";
import { Upload, Trash2, GripVertical, Loader2 } from "lucide-react";
import { ImageUpload } from "@/components/admin/ImageUpload";

interface GalleryImage {
    id: string;
    src: string;
    alt: string;
}

export default function AdminGalleryPage() {
    const [images, setImages] = React.useState<GalleryImage[]>([]);
    const [loading, setLoading] = React.useState(true);

    // Fetch images
    React.useEffect(() => {
        fetch("/api/admin/gallery")
            .then(res => res.json())
            .then(data => {
                setImages(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load gallery", err);
                setLoading(false);
            });
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Remove this image from the gallery?")) return;

        try {
            const res = await fetch("/api/admin/gallery", {
                method: "DELETE",
                body: JSON.stringify({ id }),
            });
            if (res.ok) {
                const updated = await res.json();
                setImages(updated);
            }
        } catch (error) {
            console.error("Delete failed", error);
        }
    };

    const handleUpload = async (urls: string[]) => {
        // For each new URL, add it to gallery via API
        // This is a bit inefficient (N requests) but simple for now
        // A better way would be a bulk add endpoint or modifying the logic

        // Since ImageUpload returns all URLs including existing ones if used as a controlled input,
        // but here we are using it as an "Add New" button effectively.
        // Actually, ImageUpload is designed to manage a list of URLs. 
        // Let's create a wrapper or just direct usage.

        // Strategy: "Upload" just uploads the file and gives us a URL.
        // Then we POST that URL to /api/admin/gallery to create a record.

        for (const url of urls) {
            // Check if already exists to avoid duplicates (naive check)
            if (images.some(img => img.src === url)) continue;

            try {
                const res = await fetch("/api/admin/gallery", {
                    method: "POST",
                    body: JSON.stringify({
                        src: url,
                        alt: "Gallery Image" // Default alt
                    }),
                });
                if (res.ok) {
                    const newImages = await res.json();
                    setImages(newImages);
                }
            } catch (e) {
                console.error(e);
            }
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
            <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-serif text-[var(--admin-text)]">Gallery</h1>
                    <p className="text-[var(--admin-text-muted)] text-sm mt-1">Manage website images and photos.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full border border-amber-200">
                        {images.length} Images
                    </div>
                </div>
            </header>

            {/* Upload Section */}
            <div className="mb-8 p-6 bg-[var(--admin-card-muted)] rounded-xl border border-[var(--admin-border)]">
                <h3 className="text-sm font-medium text-[var(--admin-text)] mb-4 flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Upload New Images
                </h3>
                <ImageUpload
                    value={[]}
                    onChange={handleUpload}
                    onRemove={() => { }}
                    maxFiles={5}
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="group relative aspect-[4/3] admin-card rounded-xl overflow-hidden"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <button
                                    onClick={() => handleDelete(image.id)}
                                    className="p-1.5 bg-red-500 rounded-lg text-white hover:bg-red-600 transition-colors"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                            <p className="text-white text-xs font-medium truncate">{image.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
