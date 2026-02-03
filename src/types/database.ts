// Database Types for Villa Booking Site
// These types mirror the Supabase database schema

export interface Room {
    id: string;
    slug: string;
    name: string;
    short_description: string | null;
    long_description: string[] | null;
    base_price: number;
    max_guests: number;
    size: string | null;
    features: string[];
    images: string[];
    is_active: boolean;
    display_order: number;
    created_at: string;
    updated_at: string;
}

export interface SeasonalPricing {
    id: string;
    room_id: string;
    name: string;
    start_date: string;
    end_date: string;
    price_modifier: number;
    is_active: boolean;
    created_at: string;
}

export interface Booking {
    id: string;
    room_id: string | null;
    confirmation_code: string;
    guest_first_name: string;
    guest_last_name: string;
    guest_email: string;
    guest_phone: string | null;
    check_in: string;
    check_out: string;
    num_guests: number;
    special_requests: string | null;
    subtotal: number;
    service_fee: number;
    total_price: number;
    currency: string;
    stripe_payment_intent_id: string | null;
    payment_status: "pending" | "paid" | "refunded" | "failed";
    booking_status: "confirmed" | "cancelled" | "completed" | "no_show";
    created_at: string;
    updated_at: string;
}

export interface BlockedDate {
    id: string;
    room_id: string;
    start_date: string;
    end_date: string;
    reason: string | null;
    created_at: string;
}

export interface Review {
    id: string;
    booking_id: string | null;
    room_id: string | null;
    guest_name: string;
    guest_country: string | null;
    source: "direct" | "booking.com" | "airbnb" | "google";
    rating: 1 | 2 | 3 | 4 | 5;
    review_text: string;
    stay_type: string | null;
    review_date: string;
    is_featured: boolean;
    is_published: boolean;
    created_at: string;
    updated_at: string;
}

export interface SiteContent {
    id: string;
    page: string;
    section: string;
    content_key: string;
    content_value: string | null;
    content_type: "text" | "html" | "image" | "array";
    display_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface SiteImage {
    id: string;
    filename: string;
    url: string;
    alt_text: string | null;
    category: string | null;
    room_id: string | null;
    display_order: number;
    is_active: boolean;
    created_at: string;
}

export interface FAQ {
    id: string;
    category: string;
    question: string;
    answer: string;
    display_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    subject: string | null;
    message: string;
    is_read: boolean;
    is_archived: boolean;
    replied_at: string | null;
    created_at: string;
}

export interface SiteSetting {
    id: string;
    setting_key: string;
    setting_value: string | null;
    setting_type: "text" | "number" | "boolean" | "json";
    description: string | null;
    created_at: string;
    updated_at: string;
}

export interface AdminProfile {
    id: string;
    email: string;
    full_name: string | null;
    role: "admin" | "super_admin";
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

// API Response Types
export interface ApiResponse<T> {
    data: T | null;
    error: string | null;
    success: boolean;
}

// Booking Form Data
export interface BookingFormData {
    roomId: string;
    checkIn: Date;
    checkOut: Date;
    guests: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    specialRequests?: string;
}

// Room with calculated pricing
export interface RoomWithPricing extends Room {
    calculatedPrice?: number;
    nights?: number;
    totalPrice?: number;
}

// Date range for availability
export interface DateRange {
    start: Date;
    end: Date;
}

// Availability check result
export interface AvailabilityResult {
    isAvailable: boolean;
    bookedDates: DateRange[];
    blockedDates: DateRange[];
}
