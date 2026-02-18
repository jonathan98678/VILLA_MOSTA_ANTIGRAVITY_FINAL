"use client";

import * as React from "react";
import { Upload, X, Image as ImageIcon, Loader2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
    value: string[];
    onChange: (value: string[]) => void;
    onRemove: (value: string) => void;
    disabled?: boolean;
    maxFiles?: number;
}

export function ImageUpload({
    value,
    onChange,
    onRemove,
    disabled,
    maxFiles = 5
}: ImageUploadProps) {
    const [isMounted, setIsMounted] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        try {
            setLoading(true);
            const files = Array.from(e.target.files);

            // Create FormData
            const formData = new FormData();
            files.forEach((file) => {
                formData.append("file", file);
            });

            // Upload via API
            const response = await fetch("/api/admin/upload", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Upload failed");
            }

            const data = await response.json();

            // Update parent state with new URLs
            // Assuming API returns { urls: string[] }
            onChange([...value, ...data.urls]);
        } catch (error) {
            console.error("Upload error:", error);
            alert("Something went wrong with the upload.");
        } finally {
            setLoading(false);
            // Reset input
            e.target.value = "";
        }
    };

    if (!isMounted) return null;

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {value.map((url) => (
                    <div key={url} className="relative aspect-square rounded-lg overflow-hidden group border border-stone-200 bg-stone-100">
                        <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                type="button"
                                onClick={() => onRemove(url)}
                                className="p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-sm"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </div>
                        <Image
                            fill
                            className="object-cover"
                            alt="Image"
                            src={url}
                        />
                    </div>
                ))}

                {value.length < maxFiles && (
                    <label
                        className={cn(
                            "relative aspect-square rounded-lg border-2 border-dashed border-stone-300 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-stone-50 hover:border-amber-400 transition-colors",
                            (disabled || loading) && "opacity-50 cursor-not-allowed pointer-events-none"
                        )}
                    >
                        <div className="p-2 bg-stone-100 rounded-full text-stone-500">
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
                        </div>
                        <div className="text-center px-2">
                            <span className="text-xs font-medium text-stone-600">Click to upload</span>
                            <span className="block text-[10px] text-stone-400 mt-1">First {maxFiles} images</span>
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            multiple={maxFiles > 1}
                            disabled={disabled || loading}
                            onChange={onUpload}
                            className="hidden"
                        />
                    </label>
                )}
            </div>
        </div>
    );
}
