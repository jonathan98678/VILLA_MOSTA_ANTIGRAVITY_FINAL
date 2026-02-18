"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface BookButtonProps {
    href?: string;
    variant?: "primary" | "outline";
    size?: "sm" | "default" | "lg";
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export function BookButton({
    href = "/book",
    variant = "primary",
    size = "default",
    children = "Book Now",
    className,
    onClick,
}: BookButtonProps) {
    const baseStyles = cn(
        "relative inline-flex items-center justify-center font-medium uppercase tracking-[0.2em] overflow-hidden",
        "rounded-full transition-all duration-500 ease-out",
        "transform hover:scale-[1.03] active:scale-[0.98]",
        // Size variants
        size === "sm" && "text-[10px] xl:text-[11px] px-5 xl:px-6 py-2 xl:py-2.5",
        size === "default" && "text-[11px] sm:text-xs px-6 sm:px-8 py-3 sm:py-3.5",
        size === "lg" && "text-xs sm:text-sm px-8 sm:px-10 py-3.5 sm:py-4",
        // Variant styles
        variant === "primary" && [
            "bg-gradient-to-r from-amber-600 to-amber-500 text-white",
            "shadow-md hover:shadow-lg hover:shadow-amber-500/25",
            "hover:from-amber-500 hover:to-amber-400",
        ],
        variant === "outline" && [
            "border border-white/40 text-white backdrop-blur-sm bg-white/5",
            "hover:bg-white/15 hover:border-white/70",
            "hover:shadow-lg hover:shadow-white/10",
        ],
        className
    );

    if (onClick) {
        return (
            <button onClick={onClick} className={cn(baseStyles, "group")}>
                <span className="relative z-10">{children}</span>
                {variant === "primary" && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/0 via-amber-300/20 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
            </button>
        );
    }

    return (
        <Link href={href} className={cn(baseStyles, "group")}>
            <span className="relative z-10">{children}</span>
            {variant === "primary" && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/0 via-amber-300/20 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}
        </Link>
    );
}
