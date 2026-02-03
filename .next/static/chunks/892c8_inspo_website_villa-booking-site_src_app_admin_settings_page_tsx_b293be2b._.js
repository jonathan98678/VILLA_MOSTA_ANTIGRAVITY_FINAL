(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminSettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Antigravity_inspo_website/villa-booking-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Antigravity_inspo_website/villa-booking-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Desktop/Antigravity_inspo_website/villa-booking-site/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Desktop/Antigravity_inspo_website/villa-booking-site/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Desktop/Antigravity_inspo_website/villa-booking-site/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/Antigravity_inspo_website/villa-booking-site/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const defaultSettings = {
    propertyName: "Villa Mosta",
    tagline: "A Traditional Maltese Home",
    email: "info@villamosta.com",
    phone: "+356 99 123 456",
    address: "Mosta, Malta",
    checkInTime: "14:00",
    checkOutTime: "10:00",
    heroTitle: "VILLA MOSTA",
    heroSubtitle: "A Traditional Maltese Home",
    heroDescription: "Experience authentic Maltese hospitality in the heart of Mosta.",
    heroVideoId: "9mg8FOQi6bI",
    heroVideoStart: 121,
    heroVideoEnd: 124,
    introLabel: "WELCOME TO VILLA MOSTA",
    introTitle: "Your Home in Malta",
    introDescription: "Nestled in the heart of Mosta, our traditional Maltese townhouse offers a unique blend of authentic charm and modern comfort. Just steps from the magnificent Mosta Rotunda, you'll experience the true essence of Maltese living.",
    introFeature1Title: "Prime Location",
    introFeature1Text: "Steps from the Mosta Rotunda and local amenities",
    introFeature2Title: "Rooftop Terrace",
    introFeature2Text: "Stunning views of the dome and Maltese skyline",
    introFeature3Title: "Personal Touch",
    introFeature3Text: "Warm hospitality and local insider tips",
    ctaTitle: "Ready to Experience Malta?",
    ctaDescription: "Book your stay at Villa Mosta and discover the authentic charm of Maltese hospitality.",
    ctaButtonText: "Check Availability",
    footerDescription: "A charming Maltese home offering elegant accommodations with stunning terraces and personalized service.",
    bookingComUrl: "https://www.booking.com/hotel/mt/villa-mosta.html",
    airbnbUrl: "",
    icalBookingCom: "",
    icalAirbnb: "",
    icalCustom: "",
    seoTitle: "Villa Mosta | Authentic Maltese Accommodation",
    seoDescription: "Experience authentic Maltese hospitality at Villa Mosta. Traditional townhouse with rooftop terrace, steps from the famous Mosta Rotunda.",
    seoKeywords: "Villa Mosta, Malta accommodation, Mosta Rotunda, Maltese hospitality, Malta holiday"
};
function SettingsSection(param) {
    let { title, description, isOpen, onToggle, children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-sm overflow-hidden mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggle,
                className: "w-full px-6 py-4 flex items-center justify-between hover:bg-stone-50 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-stone-800",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                lineNumber: 114,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-stone-500 text-sm",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                lineNumber: 115,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                        lineNumber: 113,
                        columnNumber: 17
                    }, this),
                    isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-5 h-5 text-stone-400"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                        lineNumber: 117,
                        columnNumber: 27
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "w-5 h-5 text-stone-400"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                        lineNumber: 117,
                        columnNumber: 80
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                lineNumber: 109,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pb-6 border-t border-stone-100 pt-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                lineNumber: 120,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
        lineNumber: 108,
        columnNumber: 9
    }, this);
}
_c = SettingsSection;
function AdminSettingsPage() {
    _s();
    const [settings, setSettings] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](defaultSettings);
    const [saved, setSaved] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [openSections, setOpenSections] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        property: true
    });
    // Load from localStorage on mount
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "AdminSettingsPage.useEffect": ()=>{
            const stored = localStorage.getItem("villamosta-settings");
            if (stored) {
                try {
                    setSettings({
                        ...defaultSettings,
                        ...JSON.parse(stored)
                    });
                } catch (e) {
                // Use defaults
                }
            }
        }
    }["AdminSettingsPage.useEffect"], []);
    const toggleSection = (key)=>{
        setOpenSections((prev)=>({
                ...prev,
                [key]: !prev[key]
            }));
    };
    const handleSave = ()=>{
        localStorage.setItem("villamosta-settings", JSON.stringify(settings));
        setSaved(true);
        setTimeout(()=>setSaved(false), 2000);
    };
    const updateField = (field, value)=>{
        setSettings((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-semibold text-stone-800",
                                children: "Settings"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                lineNumber: 165,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-stone-500 text-sm",
                                children: "Edit all website content"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                lineNumber: 166,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                        lineNumber: 164,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSave,
                        className: "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ".concat(saved ? "bg-green-600 text-white" : "bg-amber-600 text-white hover:bg-amber-700"),
                        children: [
                            saved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                lineNumber: 175,
                                columnNumber: 30
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                lineNumber: 175,
                                columnNumber: 62
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: saved ? "Saved!" : "Save All Changes"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                lineNumber: 176,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                        lineNumber: 168,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                lineNumber: 163,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 max-w-3xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsSection, {
                        title: "Property Information",
                        description: "Basic contact and property details",
                        isOpen: openSections.property,
                        onToggle: ()=>toggleSection("property"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm text-stone-600 mb-1",
                                                    children: "Property Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: settings.propertyName,
                                                    onChange: (e)=>updateField("propertyName", e.target.value),
                                                    className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm text-stone-600 mb-1",
                                                    children: "Tagline"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: settings.tagline,
                                                    onChange: (e)=>updateField("tagline", e.target.value),
                                                    className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm text-stone-600 mb-1",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: settings.email,
                                                    onChange: (e)=>updateField("email", e.target.value),
                                                    className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm text-stone-600 mb-1",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    value: settings.phone,
                                                    onChange: (e)=>updateField("phone", e.target.value),
                                                    className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 209,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Address"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: settings.address,
                                            onChange: (e)=>updateField("address", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 231,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm text-stone-600 mb-1",
                                                    children: "Check-in Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "time",
                                                    value: settings.checkInTime,
                                                    onChange: (e)=>updateField("checkInTime", e.target.value),
                                                    className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 239,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm text-stone-600 mb-1",
                                                    children: "Check-out Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "time",
                                                    value: settings.checkOutTime,
                                                    onChange: (e)=>updateField("checkOutTime", e.target.value),
                                                    className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                            lineNumber: 188,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                        lineNumber: 182,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsSection, {
                        title: "Hero Section",
                        description: "Homepage hero video and text",
                        isOpen: openSections.hero,
                        onToggle: ()=>toggleSection("hero"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Hero Title"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: settings.heroTitle,
                                            onChange: (e)=>updateField("heroTitle", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 271,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 269,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Subtitle"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 279,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: settings.heroSubtitle,
                                            onChange: (e)=>updateField("heroSubtitle", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 278,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: settings.heroDescription,
                                            onChange: (e)=>updateField("heroDescription", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2",
                                            rows: 2
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-stone-50 p-4 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-medium text-stone-700 mb-3",
                                            children: "Video Settings"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-stone-600 mb-1",
                                                            children: "YouTube Video ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: settings.heroVideoId,
                                                            onChange: (e)=>updateField("heroVideoId", e.target.value),
                                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-stone-600 mb-1",
                                                            children: "Start (seconds)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: settings.heroVideoStart,
                                                            onChange: (e)=>updateField("heroVideoStart", Number(e.target.value)),
                                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-stone-600 mb-1",
                                                            children: "End (seconds)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: settings.heroVideoEnd,
                                                            onChange: (e)=>updateField("heroVideoEnd", Number(e.target.value)),
                                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 296,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                            lineNumber: 268,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                        lineNumber: 262,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsSection, {
                        title: "Introduction Section",
                        description: "Welcome text and feature highlights",
                        isOpen: openSections.intro,
                        onToggle: ()=>toggleSection("intro"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Section Label"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 340,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: settings.introLabel,
                                            onChange: (e)=>updateField("introLabel", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 341,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 339,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Title"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 349,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: settings.introTitle,
                                            onChange: (e)=>updateField("introTitle", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 350,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 348,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 358,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: settings.introDescription,
                                            onChange: (e)=>updateField("introDescription", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2",
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 359,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 357,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-stone-50 p-4 rounded-lg space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-medium text-stone-700",
                                            children: "Feature 1"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 367,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Title",
                                                    value: settings.introFeature1Title,
                                                    onChange: (e)=>updateField("introFeature1Title", e.target.value),
                                                    className: "border border-stone-300 rounded-lg px-3 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Description",
                                                    value: settings.introFeature1Text,
                                                    onChange: (e)=>updateField("introFeature1Text", e.target.value),
                                                    className: "border border-stone-300 rounded-lg px-3 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 368,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 366,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-stone-50 p-4 rounded-lg space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-medium text-stone-700",
                                            children: "Feature 2"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 386,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Title",
                                                    value: settings.introFeature2Title,
                                                    onChange: (e)=>updateField("introFeature2Title", e.target.value),
                                                    className: "border border-stone-300 rounded-lg px-3 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Description",
                                                    value: settings.introFeature2Text,
                                                    onChange: (e)=>updateField("introFeature2Text", e.target.value),
                                                    className: "border border-stone-300 rounded-lg px-3 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 387,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-stone-50 p-4 rounded-lg space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-medium text-stone-700",
                                            children: "Feature 3"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 405,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Title",
                                                    value: settings.introFeature3Title,
                                                    onChange: (e)=>updateField("introFeature3Title", e.target.value),
                                                    className: "border border-stone-300 rounded-lg px-3 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Description",
                                                    value: settings.introFeature3Text,
                                                    onChange: (e)=>updateField("introFeature3Text", e.target.value),
                                                    className: "border border-stone-300 rounded-lg px-3 py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 406,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                            lineNumber: 338,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                        lineNumber: 332,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsSection, {
                        title: "Call to Action Section",
                        description: "Bottom of page booking prompt",
                        isOpen: openSections.cta,
                        onToggle: ()=>toggleSection("cta"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Title"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 435,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: settings.ctaTitle,
                                            onChange: (e)=>updateField("ctaTitle", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 436,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 434,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 444,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: settings.ctaDescription,
                                            onChange: (e)=>updateField("ctaDescription", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2",
                                            rows: 2
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 445,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 443,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Button Text"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 453,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: settings.ctaButtonText,
                                            onChange: (e)=>updateField("ctaButtonText", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                            lineNumber: 433,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                        lineNumber: 427,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsSection, {
                        title: "Footer",
                        description: "Footer description text",
                        isOpen: openSections.footer,
                        onToggle: ()=>toggleSection("footer"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-stone-600 mb-1",
                                    children: "Footer Description"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 472,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: settings.footerDescription,
                                    onChange: (e)=>updateField("footerDescription", e.target.value),
                                    className: "w-full border border-stone-300 rounded-lg px-3 py-2",
                                    rows: 2
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 473,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                            lineNumber: 471,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                        lineNumber: 465,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsSection, {
                        title: "Booking Channels",
                        description: "External booking platform links",
                        isOpen: openSections.booking,
                        onToggle: ()=>toggleSection("booking"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Booking.com URL"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 491,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "url",
                                            value: settings.bookingComUrl,
                                            onChange: (e)=>updateField("bookingComUrl", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2",
                                            placeholder: "https://www.booking.com/hotel/..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 492,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 490,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Airbnb URL"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 501,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "url",
                                            value: settings.airbnbUrl,
                                            onChange: (e)=>updateField("airbnbUrl", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2",
                                            placeholder: "https://www.airbnb.com/rooms/..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 502,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 500,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                            lineNumber: 489,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                        lineNumber: 483,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsSection, {
                        title: "Calendar Sync (iCal)",
                        description: "Sync availability across booking platforms",
                        isOpen: openSections.ical,
                        onToggle: ()=>toggleSection("ical"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-blue-800 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "How iCal sync works:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                                lineNumber: 523,
                                                columnNumber: 33
                                            }, this),
                                            " Paste the iCal URL from each booking platform below. Your calendar will automatically sync availability to prevent double bookings."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                        lineNumber: 522,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 521,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Booking.com iCal URL"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 528,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "url",
                                            value: settings.icalBookingCom,
                                            onChange: (e)=>updateField("icalBookingCom", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2 font-mono text-sm",
                                            placeholder: "https://admin.booking.com/hotel/..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 529,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-stone-400 mt-1",
                                            children: "Find this in Booking.com Extranet → Calendar → Sync"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 536,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 527,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Airbnb iCal URL"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 539,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "url",
                                            value: settings.icalAirbnb,
                                            onChange: (e)=>updateField("icalAirbnb", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2 font-mono text-sm",
                                            placeholder: "https://www.airbnb.com/calendar/ical/..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 540,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-stone-400 mt-1",
                                            children: "Find this in Airbnb → Listing → Pricing and availability → Sync calendars"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 547,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 538,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Custom iCal URL"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 550,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "url",
                                            value: settings.icalCustom,
                                            onChange: (e)=>updateField("icalCustom", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2 font-mono text-sm",
                                            placeholder: "https://..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 551,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 549,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                            lineNumber: 520,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                        lineNumber: 514,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsSection, {
                        title: "SEO Settings",
                        description: "Search engine optimization",
                        isOpen: openSections.seo,
                        onToggle: ()=>toggleSection("seo"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Page Title"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 571,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: settings.seoTitle,
                                            onChange: (e)=>updateField("seoTitle", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 572,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-stone-400 mt-1",
                                            children: [
                                                settings.seoTitle.length,
                                                "/60 characters"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 578,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 570,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Meta Description"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 581,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: settings.seoDescription,
                                            onChange: (e)=>updateField("seoDescription", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2",
                                            rows: 2
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 582,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-stone-400 mt-1",
                                            children: [
                                                settings.seoDescription.length,
                                                "/160 characters"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 588,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 580,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-stone-600 mb-1",
                                            children: "Keywords"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 591,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: settings.seoKeywords,
                                            onChange: (e)=>updateField("seoKeywords", e.target.value),
                                            className: "w-full border border-stone-300 rounded-lg px-3 py-2",
                                            placeholder: "keyword1, keyword2, keyword3"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                            lineNumber: 592,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 590,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                            lineNumber: 569,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                        lineNumber: 563,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-amber-800 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Note:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                                    lineNumber: 605,
                                    columnNumber: 25
                                }, this),
                                " Settings are saved to your browser's local storage. Connect a database (Supabase recommended) to persist settings across devices and enable real-time updates to the live website."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                            lineNumber: 604,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                        lineNumber: 603,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/admin/settings/page.tsx",
                lineNumber: 180,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(AdminSettingsPage, "+0Xn729uiZRa4tTicPXWJABekLs=");
_c1 = AdminSettingsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "SettingsSection");
__turbopack_context__.k.register(_c1, "AdminSettingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=892c8_inspo_website_villa-booking-site_src_app_admin_settings_page_tsx_b293be2b._.js.map