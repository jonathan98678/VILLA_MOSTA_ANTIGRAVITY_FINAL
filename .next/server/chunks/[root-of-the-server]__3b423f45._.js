module.exports = [
"[project]/Desktop/Antigravity_inspo_website/villa-booking-site/.next-internal/server/app/api/admin/rooms/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createServerClient",
    ()=>createServerClient,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Antigravity_inspo_website/villa-booking-site/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
const createServerClient = ()=>{
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseServiceKey);
};
}),
"[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addReview",
    ()=>addReview,
    "deleteReview",
    ()=>deleteReview,
    "deleteRoom",
    ()=>deleteRoom,
    "getActiveRooms",
    ()=>getActiveRooms,
    "getFeaturedReviews",
    ()=>getFeaturedReviews,
    "getPublishedReviews",
    ()=>getPublishedReviews,
    "getReviews",
    ()=>getReviews,
    "getRoomBySlug",
    ()=>getRoomBySlug,
    "getRooms",
    ()=>getRooms,
    "getSettings",
    ()=>getSettings,
    "getSiteContent",
    ()=>getSiteContent,
    "updateRoom",
    ()=>updateRoom,
    "updateSetting",
    ()=>updateSetting,
    "updateSettings",
    ()=>updateSettings,
    "updateSiteContent",
    ()=>updateSiteContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/lib/supabase.ts [app-route] (ecmascript)");
;
async function getSettings() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("site_settings").select("setting_key, setting_value");
    if (error) {
        console.error("Error fetching settings:", error);
        return {};
    }
    const settings = {};
    data?.forEach((item)=>{
        settings[item.setting_key] = item.setting_value || "";
    });
    return settings;
}
async function updateSetting(key, value) {
    const serverClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])();
    const { error } = await serverClient.from("site_settings").update({
        setting_value: value
    }).eq("setting_key", key);
    if (error) {
        console.error("Error updating setting:", error);
        return false;
    }
    return true;
}
async function updateSettings(settings) {
    const serverClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])();
    const updates = Object.entries(settings).map(([key, value])=>({
            setting_key: key,
            setting_value: value
        }));
    for (const update of updates){
        const { error } = await serverClient.from("site_settings").upsert(update, {
            onConflict: "setting_key"
        });
        if (error) {
            console.error("Error updating settings:", error);
            return false;
        }
    }
    return true;
}
async function getRooms() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("rooms").select("*").order("display_order", {
        ascending: true
    });
    if (error) {
        console.error("Error fetching rooms:", error);
        return [];
    }
    return data || [];
}
async function getActiveRooms() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("rooms").select("*").eq("is_active", true).order("display_order", {
        ascending: true
    });
    if (error) {
        console.error("Error fetching active rooms:", error);
        return [];
    }
    return data || [];
}
async function getRoomBySlug(slug) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("rooms").select("*").eq("slug", slug).single();
    if (error) {
        console.error("Error fetching room:", error);
        return null;
    }
    return data;
}
async function updateRoom(id, updates) {
    const serverClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])();
    const { error } = await serverClient.from("rooms").update(updates).eq("id", id);
    if (error) {
        console.error("Error updating room:", error);
        return false;
    }
    return true;
}
async function deleteRoom(id) {
    const serverClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])();
    const { error } = await serverClient.from("rooms").delete().eq("id", id);
    if (error) {
        console.error("Error deleting room:", error);
        return false;
    }
    return true;
}
async function getReviews() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("reviews").select("*").order("review_date", {
        ascending: false
    });
    if (error) {
        console.error("Error fetching reviews:", error);
        return [];
    }
    return data || [];
}
async function getPublishedReviews() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("reviews").select("*").eq("is_published", true).order("review_date", {
        ascending: false
    });
    if (error) {
        console.error("Error fetching published reviews:", error);
        return [];
    }
    return data || [];
}
async function getFeaturedReviews() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("reviews").select("*").eq("is_published", true).eq("is_featured", true).order("review_date", {
        ascending: false
    }).limit(6);
    if (error) {
        console.error("Error fetching featured reviews:", error);
        return [];
    }
    return data || [];
}
async function addReview(review) {
    const serverClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])();
    const { error } = await serverClient.from("reviews").insert(review);
    if (error) {
        console.error("Error adding review:", error);
        return false;
    }
    return true;
}
async function deleteReview(id) {
    const serverClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])();
    const { error } = await serverClient.from("reviews").delete().eq("id", id);
    if (error) {
        console.error("Error deleting review:", error);
        return false;
    }
    return true;
}
async function getSiteContent(page) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("site_content").select("*").eq("page", page).eq("is_active", true).order("display_order", {
        ascending: true
    });
    if (error) {
        console.error("Error fetching site content:", error);
        return {};
    }
    const content = {};
    data?.forEach((item)=>{
        if (!content[item.section]) {
            content[item.section] = {};
        }
        content[item.section][item.content_key] = item.content_value || "";
    });
    return content;
}
async function updateSiteContent(page, section, key, value) {
    const serverClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])();
    const { error } = await serverClient.from("site_content").upsert({
        page,
        section,
        content_key: key,
        content_value: value
    }, {
        onConflict: "page,section,content_key"
    });
    if (error) {
        console.error("Error updating site content:", error);
        return false;
    }
    return true;
}
}),
"[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/app/api/admin/rooms/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Antigravity_inspo_website/villa-booking-site/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Antigravity_inspo_website/villa-booking-site/src/lib/db.ts [app-route] (ecmascript)");
;
;
async function GET() {
    try {
        const rooms = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRooms"])();
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(rooms);
    } catch (error) {
        console.error("Error fetching rooms:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch rooms"
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    try {
        const { id, ...updates } = await request.json();
        const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateRoom"])(id, updates);
        if (success) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Room updated successfully"
            });
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Failed to update room"
            }, {
                status: 500
            });
        }
    } catch (error) {
        console.error("Error updating room:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to update room"
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    try {
        const { id } = await request.json();
        const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteRoom"])(id);
        if (success) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Room deleted successfully"
            });
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Failed to delete room"
            }, {
                status: 500
            });
        }
    } catch (error) {
        console.error("Error deleting room:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Antigravity_inspo_website$2f$villa$2d$booking$2d$site$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to delete room"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3b423f45._.js.map