"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function SmoothCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - (isHovered ? 40 : 12));
            cursorY.set(e.clientY - (isHovered ? 40 : 12));
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.classList.contains("cursor-pointer")
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, isHovered]);

    // Hide cursor on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <motion.div
            className={cn(
                "fixed top-0 left-0 w-6 h-6 rounded-full border border-white z-[9999] pointer-events-none mix-blend-difference bg-white/10 backdrop-blur-[1px]",
                isHovered ? "w-20 h-20 bg-white mix-blend-difference border-none" : "w-6 h-6"
            )}
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
    );
}
