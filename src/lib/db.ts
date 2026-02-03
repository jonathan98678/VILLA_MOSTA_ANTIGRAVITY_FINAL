import { supabase, createServerClient } from "./supabase";

// ============================================
// TYPES
// ============================================

export interface Room {
    id: string;
    slug: string;
    name: string;
    short_description: string;
    long_description: string[];
    base_price: number;
    max_guests: number;
    size: string;
    features: string[];
    images: string[];
    is_active: boolean;
    display_order: number;
}

export interface Review {
    id: string;
    guest_name: string;
    guest_country: string;
    source: string;
    rating: number;
    review_text: string;
    stay_type: string;
    review_date: string;
    is_featured: boolean;
    is_published: boolean;
}

export interface SiteSetting {
    id: string;
    setting_key: string;
    setting_value: string;
    setting_type: string;
    description: string;
}

export interface SiteContent {
    id: string;
    page: string;
    section: string;
    content_key: string;
    content_value: string;
    content_type: string;
    display_order: number;
}

// ============================================
// SETTINGS
// ============================================

export async function getSettings(): Promise<Record<string, string>> {
    const { data, error } = await supabase
        .from("site_settings")
        .select("setting_key, setting_value");

    if (error) {
        console.error("Error fetching settings:", error);
        return {};
    }

    const settings: Record<string, string> = {};
    data?.forEach((item) => {
        settings[item.setting_key] = item.setting_value || "";
    });
    return settings;
}

export async function updateSetting(key: string, value: string): Promise<boolean> {
    const serverClient = createServerClient();
    const { error } = await serverClient
        .from("site_settings")
        .update({ setting_value: value })
        .eq("setting_key", key);

    if (error) {
        console.error("Error updating setting:", error);
        return false;
    }
    return true;
}

export async function updateSettings(settings: Record<string, string>): Promise<boolean> {
    const serverClient = createServerClient();

    const updates = Object.entries(settings).map(([key, value]) => ({
        setting_key: key,
        setting_value: value,
    }));

    for (const update of updates) {
        const { error } = await serverClient
            .from("site_settings")
            .upsert(update, { onConflict: "setting_key" });

        if (error) {
            console.error("Error updating settings:", error);
            return false;
        }
    }
    return true;
}

// ============================================
// ROOMS
// ============================================

export async function getRooms(): Promise<Room[]> {
    const { data, error } = await supabase
        .from("rooms")
        .select("*")
        .order("display_order", { ascending: true });

    if (error) {
        console.error("Error fetching rooms:", error);
        return [];
    }
    return data || [];
}

export async function getActiveRooms(): Promise<Room[]> {
    const { data, error } = await supabase
        .from("rooms")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

    if (error) {
        console.error("Error fetching active rooms:", error);
        return [];
    }
    return data || [];
}

export async function getRoomBySlug(slug: string): Promise<Room | null> {
    const { data, error } = await supabase
        .from("rooms")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error) {
        console.error("Error fetching room:", error);
        return null;
    }
    return data;
}

export async function updateRoom(id: string, updates: Partial<Room>): Promise<boolean> {
    const serverClient = createServerClient();
    const { error } = await serverClient
        .from("rooms")
        .update(updates)
        .eq("id", id);

    if (error) {
        console.error("Error updating room:", error);
        return false;
    }
    return true;
}

export async function deleteRoom(id: string): Promise<boolean> {
    const serverClient = createServerClient();
    const { error } = await serverClient
        .from("rooms")
        .delete()
        .eq("id", id);

    if (error) {
        console.error("Error deleting room:", error);
        return false;
    }
    return true;
}

// ============================================
// REVIEWS
// ============================================

export async function getReviews(): Promise<Review[]> {
    const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("review_date", { ascending: false });

    if (error) {
        console.error("Error fetching reviews:", error);
        return [];
    }
    return data || [];
}

export async function getPublishedReviews(): Promise<Review[]> {
    const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("is_published", true)
        .order("review_date", { ascending: false });

    if (error) {
        console.error("Error fetching published reviews:", error);
        return [];
    }
    return data || [];
}

export async function getFeaturedReviews(): Promise<Review[]> {
    const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("is_published", true)
        .eq("is_featured", true)
        .order("review_date", { ascending: false })
        .limit(6);

    if (error) {
        console.error("Error fetching featured reviews:", error);
        return [];
    }
    return data || [];
}

export async function addReview(review: Omit<Review, "id">): Promise<boolean> {
    const serverClient = createServerClient();
    const { error } = await serverClient
        .from("reviews")
        .insert(review);

    if (error) {
        console.error("Error adding review:", error);
        return false;
    }
    return true;
}

export async function deleteReview(id: string): Promise<boolean> {
    const serverClient = createServerClient();
    const { error } = await serverClient
        .from("reviews")
        .delete()
        .eq("id", id);

    if (error) {
        console.error("Error deleting review:", error);
        return false;
    }
    return true;
}

// ============================================
// SITE CONTENT
// ============================================

export async function getSiteContent(page: string): Promise<Record<string, Record<string, string>>> {
    const { data, error } = await supabase
        .from("site_content")
        .select("*")
        .eq("page", page)
        .eq("is_active", true)
        .order("display_order", { ascending: true });

    if (error) {
        console.error("Error fetching site content:", error);
        return {};
    }

    const content: Record<string, Record<string, string>> = {};
    data?.forEach((item) => {
        if (!content[item.section]) {
            content[item.section] = {};
        }
        content[item.section][item.content_key] = item.content_value || "";
    });
    return content;
}

export async function updateSiteContent(
    page: string,
    section: string,
    key: string,
    value: string
): Promise<boolean> {
    const serverClient = createServerClient();
    const { error } = await serverClient
        .from("site_content")
        .upsert(
            {
                page,
                section,
                content_key: key,
                content_value: value,
            },
            { onConflict: "page,section,content_key" }
        );

    if (error) {
        console.error("Error updating site content:", error);
        return false;
    }
    return true;
}
