-- Villa Booking Site - Supabase Database Schema
-- Run this SQL in your Supabase SQL Editor to create all tables
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- ============================================
-- ROOMS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.rooms (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(200) NOT NULL,
    short_description TEXT,
    long_description TEXT [],
    base_price DECIMAL(10, 2) NOT NULL,
    max_guests INTEGER NOT NULL DEFAULT 2,
    size VARCHAR(20),
    features TEXT [] DEFAULT '{}',
    images TEXT [] DEFAULT '{}',
    is_active BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
-- ============================================
-- SEASONAL PRICING TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.seasonal_pricing (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    room_id UUID REFERENCES public.rooms(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    price_modifier DECIMAL(5, 2) NOT NULL,
    -- multiplier, e.g., 1.2 = 20% increase
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
-- ============================================
-- BOOKINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    room_id UUID REFERENCES public.rooms(id) ON DELETE
    SET NULL,
        confirmation_code VARCHAR(20) UNIQUE NOT NULL,
        -- Guest Information
        guest_first_name VARCHAR(100) NOT NULL,
        guest_last_name VARCHAR(100) NOT NULL,
        guest_email VARCHAR(255) NOT NULL,
        guest_phone VARCHAR(50),
        -- Booking Details
        check_in DATE NOT NULL,
        check_out DATE NOT NULL,
        num_guests INTEGER NOT NULL DEFAULT 1,
        special_requests TEXT,
        -- Pricing
        subtotal DECIMAL(10, 2) NOT NULL,
        service_fee DECIMAL(10, 2) DEFAULT 0,
        total_price DECIMAL(10, 2) NOT NULL,
        currency VARCHAR(3) DEFAULT 'EUR',
        -- Payment
        stripe_payment_intent_id VARCHAR(255),
        payment_status VARCHAR(50) DEFAULT 'pending',
        -- pending, paid, refunded, failed
        -- Status
        booking_status VARCHAR(50) DEFAULT 'confirmed',
        -- confirmed, cancelled, completed, no_show
        -- Timestamps
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
);
-- ============================================
-- BLOCKED DATES TABLE (for owner blocks)
-- ============================================
CREATE TABLE IF NOT EXISTS public.blocked_dates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    room_id UUID REFERENCES public.rooms(id) ON DELETE CASCADE,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    reason VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
-- ============================================
-- REVIEWS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_id UUID REFERENCES public.bookings(id) ON DELETE
    SET NULL,
        room_id UUID REFERENCES public.rooms(id) ON DELETE
    SET NULL,
        guest_name VARCHAR(200) NOT NULL,
        guest_country VARCHAR(100),
        source VARCHAR(50) DEFAULT 'direct',
        -- direct, booking.com, airbnb, google
        rating INTEGER NOT NULL CHECK (
            rating >= 1
            AND rating <= 5
        ),
        review_text TEXT NOT NULL,
        stay_type VARCHAR(50),
        -- solo, couple, family, friends
        review_date DATE DEFAULT CURRENT_DATE,
        is_featured BOOLEAN DEFAULT false,
        is_published BOOLEAN DEFAULT true,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
);
-- ============================================
-- SITE CONTENT TABLE (CMS)
-- ============================================
CREATE TABLE IF NOT EXISTS public.site_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    page VARCHAR(50) NOT NULL,
    -- home, villa, location, etc.
    section VARCHAR(100) NOT NULL,
    -- hero, about, features, etc.
    content_key VARCHAR(100) NOT NULL,
    -- title, description, overline, etc.
    content_value TEXT,
    content_type VARCHAR(50) DEFAULT 'text',
    -- text, html, image, array
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(page, section, content_key)
);
-- ============================================
-- SITE IMAGES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.site_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    filename VARCHAR(255) NOT NULL,
    url TEXT NOT NULL,
    alt_text VARCHAR(255),
    category VARCHAR(50),
    -- hero, rooms, features, gallery, etc.
    room_id UUID REFERENCES public.rooms(id) ON DELETE
    SET NULL,
        display_order INTEGER DEFAULT 0,
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMPTZ DEFAULT NOW()
);
-- ============================================
-- FAQ TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.faqs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category VARCHAR(100) NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
-- ============================================
-- CONTACT SUBMISSIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(100),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    is_archived BOOLEAN DEFAULT false,
    replied_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
-- ============================================
-- SITE SETTINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.site_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value TEXT,
    setting_type VARCHAR(50) DEFAULT 'text',
    -- text, number, boolean, json
    description VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
-- ============================================
-- ADMIN USERS (uses Supabase Auth, this is for roles)
-- ============================================
CREATE TABLE IF NOT EXISTS public.admin_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL,
    full_name VARCHAR(200),
    role VARCHAR(50) DEFAULT 'admin',
    -- admin, super_admin
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
-- ============================================
-- INDEXES for performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_bookings_dates ON public.bookings(check_in, check_out);
CREATE INDEX IF NOT EXISTS idx_bookings_room ON public.bookings(room_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON public.bookings(booking_status);
CREATE INDEX IF NOT EXISTS idx_bookings_email ON public.bookings(guest_email);
CREATE INDEX IF NOT EXISTS idx_blocked_dates ON public.blocked_dates(room_id, start_date, end_date);
CREATE INDEX IF NOT EXISTS idx_reviews_room ON public.reviews(room_id);
CREATE INDEX IF NOT EXISTS idx_reviews_featured ON public.reviews(is_featured)
WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_site_content_page ON public.site_content(page, section);
CREATE INDEX IF NOT EXISTS idx_rooms_active ON public.rooms(is_active)
WHERE is_active = true;
-- ============================================
-- ROW LEVEL SECURITY (RLS) Policies
-- ============================================
-- Enable RLS on all tables
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seasonal_pricing ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blocked_dates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;
-- PUBLIC READ policies (for frontend)
CREATE POLICY "Public can view active rooms" ON public.rooms FOR
SELECT USING (is_active = true);
CREATE POLICY "Public can view seasonal pricing" ON public.seasonal_pricing FOR
SELECT USING (is_active = true);
CREATE POLICY "Public can view published reviews" ON public.reviews FOR
SELECT USING (is_published = true);
CREATE POLICY "Public can view active content" ON public.site_content FOR
SELECT USING (is_active = true);
CREATE POLICY "Public can view active images" ON public.site_images FOR
SELECT USING (is_active = true);
CREATE POLICY "Public can view active FAQs" ON public.faqs FOR
SELECT USING (is_active = true);
-- Bookings policies
CREATE POLICY "Users can view their own bookings" ON public.bookings FOR
SELECT USING (
        guest_email = current_setting('request.jwt.claims')::json->>'email'
    );
CREATE POLICY "Anon can insert bookings" ON public.bookings FOR
INSERT WITH CHECK (true);
-- Contact submissions - anyone can submit
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions FOR
INSERT WITH CHECK (true);
-- Admin policies (requires authenticated admin)
CREATE POLICY "Admins can do anything with rooms" ON public.rooms FOR ALL USING (
    EXISTS (
        SELECT 1
        FROM public.admin_profiles
        WHERE id = auth.uid()
            AND is_active = true
    )
);
CREATE POLICY "Admins can do anything with bookings" ON public.bookings FOR ALL USING (
    EXISTS (
        SELECT 1
        FROM public.admin_profiles
        WHERE id = auth.uid()
            AND is_active = true
    )
);
CREATE POLICY "Admins can do anything with reviews" ON public.reviews FOR ALL USING (
    EXISTS (
        SELECT 1
        FROM public.admin_profiles
        WHERE id = auth.uid()
            AND is_active = true
    )
);
CREATE POLICY "Admins can do anything with content" ON public.site_content FOR ALL USING (
    EXISTS (
        SELECT 1
        FROM public.admin_profiles
        WHERE id = auth.uid()
            AND is_active = true
    )
);
CREATE POLICY "Admins can do anything with settings" ON public.site_settings FOR ALL USING (
    EXISTS (
        SELECT 1
        FROM public.admin_profiles
        WHERE id = auth.uid()
            AND is_active = true
    )
);
CREATE POLICY "Admins can view contact submissions" ON public.contact_submissions FOR ALL USING (
    EXISTS (
        SELECT 1
        FROM public.admin_profiles
        WHERE id = auth.uid()
            AND is_active = true
    )
);
-- ============================================
-- FUNCTIONS
-- ============================================
-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = NOW();
RETURN NEW;
END;
$$ language 'plpgsql';
-- Add triggers for updated_at
CREATE TRIGGER update_rooms_updated_at BEFORE
UPDATE ON public.rooms FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE
UPDATE ON public.bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_reviews_updated_at BEFORE
UPDATE ON public.reviews FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_site_content_updated_at BEFORE
UPDATE ON public.site_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_faqs_updated_at BEFORE
UPDATE ON public.faqs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_site_settings_updated_at BEFORE
UPDATE ON public.site_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_admin_profiles_updated_at BEFORE
UPDATE ON public.admin_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
-- Function to generate confirmation code
CREATE OR REPLACE FUNCTION generate_confirmation_code() RETURNS VARCHAR AS $$ BEGIN RETURN 'VM-' || UPPER(
        SUBSTRING(
            MD5(RANDOM()::TEXT)
            FROM 1 FOR 8
        )
    );
END;
$$ language 'plpgsql';
-- Function to check room availability
CREATE OR REPLACE FUNCTION check_room_availability(
        p_room_id UUID,
        p_check_in DATE,
        p_check_out DATE
    ) RETURNS BOOLEAN AS $$
DECLARE is_available BOOLEAN;
BEGIN -- Check for overlapping bookings
SELECT NOT EXISTS (
        SELECT 1
        FROM public.bookings
        WHERE room_id = p_room_id
            AND booking_status NOT IN ('cancelled')
            AND (
                (
                    check_in <= p_check_in
                    AND check_out > p_check_in
                )
                OR (
                    check_in < p_check_out
                    AND check_out >= p_check_out
                )
                OR (
                    check_in >= p_check_in
                    AND check_out <= p_check_out
                )
            )
    )
    AND NOT EXISTS (
        SELECT 1
        FROM public.blocked_dates
        WHERE room_id = p_room_id
            AND (
                (
                    start_date <= p_check_in
                    AND end_date > p_check_in
                )
                OR (
                    start_date < p_check_out
                    AND end_date >= p_check_out
                )
                OR (
                    start_date >= p_check_in
                    AND end_date <= p_check_out
                )
            )
    ) INTO is_available;
RETURN is_available;
END;
$$ language 'plpgsql';
-- ============================================
-- SUCCESS MESSAGE
-- ============================================
DO $$ BEGIN RAISE NOTICE 'Villa Booking Site database schema created successfully!';
END $$;