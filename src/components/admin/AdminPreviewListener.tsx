"use client";

import { useEffect } from "react";

export function AdminPreviewListener() {
    useEffect(() => {
        // Only active if inside an iframe (in the admin dashboard)
        const inIframe = typeof window !== "undefined" && window.self !== window.parent;
        if (!inIframe) return;

        const handleDoubleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const editTarget = target.closest("[data-admin-edit]");

            if (editTarget) {
                e.preventDefault();
                e.stopPropagation();

                const path = editTarget.getAttribute("data-admin-edit");
                if (path) {
                    console.log("Navigating admin to:", path);
                    window.parent.postMessage({ type: "ADMIN_NAVIGATE", path }, "*");
                }
            }
        };

        // Add visual cues for editable elements
        const addVisualCues = () => {
            const editableElements = document.querySelectorAll("[data-admin-edit]");
            editableElements.forEach((el) => {
                (el as HTMLElement).style.cursor = "context-menu";
                (el as HTMLElement).title = "Double-click to edit in Admin";
            });
        };

        // Run initially and observe DOM changes (for dynamic content)
        addVisualCues();
        const observer = new MutationObserver(addVisualCues);
        observer.observe(document.body, { childList: true, subtree: true });

        document.addEventListener("dblclick", handleDoubleClick);

        return () => {
            document.removeEventListener("dblclick", handleDoubleClick);
            observer.disconnect();
        };
    }, []);

    return null;
}
