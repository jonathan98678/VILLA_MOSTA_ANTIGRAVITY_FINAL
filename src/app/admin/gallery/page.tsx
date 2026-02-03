"use client";

import * as React from "react";
import Image from "next/image";
import { Upload, Trash2, GripVertical } from "lucide-react";

const initialImages = [
    { id: "1", src: "/images/villa/room-1.jpg", alt: "Deluxe Double Room" },
    { id: "2", src: "/images/villa/room-2.jpg", alt: "Cozy Double Room" },
    { id: "3", src: "/images/villa/room-3.jpg", alt: "Family Room" },
    { id: "4", src: "/images/villa/terrace-view.jpg", alt: "Terrace View" },
    { id: "5", src: "/images/villa/terrace.jpg", alt: "Rooftop Terrace" },
];

export default function AdminGalleryPage() {
    const [images, setImages] = React.useState(initialImages);

    const handleDelete = (id: string) => {
        if (confirm("Remove this image from the gallery?")) {
            setImages(images.filter(img => img.id !== id));
        }
    };

    return (
        <>
            <header className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-stone-800">Gallery</h1>
                    <p className="text-stone-500 text-sm">Manage website images</p>
                </div>
                <button className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                    <Upload className="w-4 h-4" />
                    <span>Upload Images</span>
                </button>
            </header>

            <div className="p-6">
                <p className="text-stone-500 text-sm mb-6">
                    Drag to reorder. Images are stored in <code className="bg-stone-100 px-1 rounded">public/images/villa/</code>
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((image) => (
                        <div
                            key={image.id}
                            className="group relative aspect-[4/3] bg-stone-200 rounded-lg overflow-hidden"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors">
                                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-1.5 bg-white/90 rounded cursor-grab">
                                        <GripVertical className="w-4 h-4 text-stone-600" />
                                    </button>
                                </div>
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => handleDelete(image.id)}
                                        className="p-1.5 bg-red-500 rounded text-white hover:bg-red-600"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                                <p className="text-white text-xs truncate">{image.alt}</p>
                            </div>
                        </div>
                    ))}

                    {/* Upload placeholder */}
                    <label className="aspect-[4/3] border-2 border-dashed border-stone-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition-colors">
                        <Upload className="w-8 h-8 text-stone-400 mb-2" />
                        <span className="text-stone-500 text-sm">Add Image</span>
                        <input type="file" accept="image/*" className="hidden" />
                    </label>
                </div>
            </div>
        </>
    );
}
