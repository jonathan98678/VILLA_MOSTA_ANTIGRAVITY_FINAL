-- Villa Booking Site - Seed Data
-- Run this after schema.sql to populate initial content
-- ============================================
-- ROOMS
-- ============================================
INSERT INTO public.rooms (
        slug,
        name,
        short_description,
        long_description,
        base_price,
        max_guests,
        size,
        features,
        images,
        display_order
    )
VALUES (
        'deluxe-double-room',
        'Deluxe Double Room with Shower',
        'Elegant room with city views and modern amenities.',
        ARRAY [
            'Experience comfort in our Deluxe Double Room. This air-conditioned room features a private balcony with city views, perfect for enjoying the local atmosphere.',
            'The room includes a private bathroom with a walk-in shower, free toiletries, and a hairdryer. Entertainment is provided via a flat-screen TV with streaming services.',
            'Guests can enjoy the convenience of a tea and coffee maker, minibar, and free WiFi throughout their stay.'
        ],
        120.00,
        2,
        '25m²',
        ARRAY ['Balcony', 'City View', 'Air Conditioning', 'Private Bathroom', 'Flat-screen TV', 'Minibar', 'Free WiFi', 'Non-smoking'],
        ARRAY ['/images/rooms/deluxe-double-1.jpg', '/images/rooms/deluxe-double-2.jpg', '/images/rooms/deluxe-double-3.jpg'],
        1
    ),
    (
        'double-twin-garden',
        'Double or Twin Room with Garden View',
        'Peaceful retreat overlooking the lush garden.',
        ARRAY [
            'Relax in our Double or Twin Room, offering serene views of the garden. This room provides a flexible sleeping arrangement with either a large double bed or two single beds.',
            'Enjoy the fresh air from your private balcony or terrace. The room is equipped with air conditioning, a desk, and a private bathroom with a shower.',
            'Additional amenities include a wardrobe, electric kettle, and access to the shared sun terrace.'
        ],
        135.00,
        2,
        '28m²',
        ARRAY ['Garden View', 'Terrace', 'Air Conditioning', 'Private Bathroom', 'Flat-screen TV', 'Soundproofing', 'Free WiFi', 'Outdoor Furniture'],
        ARRAY ['/images/rooms/garden-view-1.jpg', '/images/rooms/garden-view-2.jpg', '/images/rooms/garden-view-3.jpg'],
        2
    ),
    (
        'family-room-terrace',
        'Family Room with Terrace',
        'Spacious accommodation for families with private outdoor space.',
        ARRAY [
            'Our Family Room is designed for comfort and space, featuring a large double bed and a sofa bed, accommodating up to 4 guests.',
            'The highlight is the private terrace with outdoor furniture, ideal for family gatherings. The room includes soundproofing, air conditioning, and a private entrance.',
            'A modern private bathroom, flat-screen TV, and minibar ensure a relaxing stay for the whole family.'
        ],
        180.00,
        4,
        '35m²',
        ARRAY ['Private Terrace', 'Sofa Bed', 'Air Conditioning', 'Private Bathroom', 'Flat-screen TV', 'Minibar', 'Free WiFi', 'Family Friendly'],
        ARRAY ['/images/rooms/family-room-1.jpg', '/images/rooms/family-room-2.jpg', '/images/rooms/family-room-3.jpg'],
        3
    );
-- ============================================
-- REVIEWS
-- ============================================
INSERT INTO public.reviews (
        guest_name,
        guest_country,
        source,
        rating,
        review_text,
        stay_type,
        review_date,
        is_featured
    )
VALUES (
        'Sarah & Michael',
        'United Kingdom',
        'Booking.com',
        5,
        'An absolutely magical experience. From the moment we arrived, we felt completely at home. The attention to detail is extraordinary—fresh flowers in every room, handmade soaps, and the most incredible breakfast we''ve ever had. We''ve already booked our return.',
        'Couple',
        '2023-12-15',
        true
    ),
    (
        'Marco Rossi',
        'Italy',
        'Google',
        5,
        'Villa Mosta exceeded all expectations. The hosts are warm and attentive without being intrusive. Perfect for anyone seeking a peaceful retreat with stunning views.',
        'Solo traveler',
        '2023-11-20',
        false
    ),
    (
        'Emma Thompson',
        'Australia',
        'Airbnb',
        5,
        'We celebrated our anniversary here and couldn''t have chosen a more romantic setting. The terrace suite offered breathtaking sunsets, and the local wine recommendations were perfect.',
        'Couple',
        '2023-10-10',
        true
    ),
    (
        'Pierre & Marie Dubois',
        'France',
        'Booking.com',
        5,
        'Exceptional in every way. The breakfast alone is worth the trip—fresh local ingredients prepared with such care. The villa itself is a perfect blend of history and modern comfort.',
        'Couple',
        '2023-09-25',
        false
    ),
    (
        'Hans Mueller',
        'Germany',
        'Direct',
        5,
        'Third visit and it keeps getting better. The team remembers our preferences, our favorite room was ready, and they''d even stocked our preferred wine. This is what true hospitality looks like.',
        'Couple',
        '2023-08-18',
        true
    ),
    (
        'The Williams Family',
        'USA',
        'Airbnb',
        5,
        'Traveled with our two teenagers who are usually hard to impress. They loved the pool, the gardens, and even put their phones down at dinner! A rare family vacation where everyone was happy.',
        'Family',
        '2023-07-22',
        false
    );
-- ============================================
-- FAQs
-- ============================================
INSERT INTO public.faqs (category, question, answer, display_order)
VALUES (
        'Booking & Reservations',
        'How do I make a reservation?',
        'You can book directly through our website by selecting your preferred room and dates, or contact us via email or phone for personalized assistance. We recommend booking at least 2-3 months in advance during peak season (June-September).',
        1
    ),
    (
        'Booking & Reservations',
        'What is your cancellation policy?',
        'We offer free cancellation up to 7 days before your check-in date. Cancellations within 7 days of arrival are subject to a charge equal to the first night''s stay. No-shows are charged the full booking amount.',
        2
    ),
    (
        'Booking & Reservations',
        'Is a deposit required?',
        'Yes, we require a 30% deposit at the time of booking to secure your reservation. The remaining balance is due upon check-in.',
        3
    ),
    (
        'Arrival & Departure',
        'What are the check-in and check-out times?',
        'Check-in is from 3:00 PM and check-out is by 11:00 AM. If you need to arrange early check-in or late check-out, please contact us in advance and we''ll do our best to accommodate your request (subject to availability).',
        4
    ),
    (
        'Arrival & Departure',
        'Do you provide airport transfers?',
        'Yes, we can arrange private airport transfers from Malta International Airport. The journey takes approximately 20 minutes. Please let us know your flight details at least 48 hours before arrival.',
        5
    ),
    (
        'Amenities & Services',
        'Is breakfast included?',
        'Yes! All bookings include our signature Mediterranean breakfast, served each morning from 8:00 AM to 10:30 AM. We feature fresh local produce, homemade pastries, and seasonal fruits. Please inform us of any dietary requirements.',
        6
    ),
    (
        'Amenities & Services',
        'Is there WiFi available?',
        'Yes, complimentary high-speed WiFi is available throughout the villa, including all rooms, common areas, and the pool terrace.',
        7
    ),
    (
        'Amenities & Services',
        'Can you accommodate dietary restrictions?',
        'Absolutely. We cater to vegetarian, vegan, gluten-free, and other dietary requirements. Please inform us at the time of booking so we can prepare accordingly.',
        8
    ),
    (
        'Property & Location',
        'Is the villa suitable for children?',
        'Villa Mosta welcomes families with children. The Sunset Chamber can accommodate a family with its sofa bed option. Please note that the pool is not fenced, so children should be supervised at all times.',
        9
    ),
    (
        'Property & Location',
        'Is parking available?',
        'Yes, we offer free private parking on the property for all guests. The parking area is secure and can accommodate multiple vehicles.',
        10
    ),
    (
        'Property & Location',
        'Are pets allowed?',
        'We regret that we cannot accommodate pets at Villa Mosta, as we aim to maintain a pristine environment for all guests, including those with allergies.',
        11
    );
-- ============================================
-- SITE SETTINGS
-- ============================================
INSERT INTO public.site_settings (
        setting_key,
        setting_value,
        setting_type,
        description
    )
VALUES (
        'site_name',
        'Villa Mosta',
        'text',
        'The name of the villa/website'
    ),
    (
        'site_tagline',
        'A Boutique Mediterranean Retreat',
        'text',
        'Short tagline for the site'
    ),
    (
        'contact_email',
        'hello@villamosta.com',
        'text',
        'Primary contact email'
    ),
    (
        'contact_phone',
        '+356 99 123 456',
        'text',
        'Primary contact phone'
    ),
    (
        'address_line_1',
        '123 Mediterranean Lane',
        'text',
        'Address line 1'
    ),
    (
        'address_line_2',
        'Mosta MST 1234',
        'text',
        'Address line 2'
    ),
    ('address_country', 'Malta', 'text', 'Country'),
    (
        'service_fee_percent',
        '5',
        'number',
        'Service fee percentage added to bookings'
    ),
    (
        'min_nights',
        '2',
        'number',
        'Minimum nights per booking'
    ),
    (
        'max_advance_booking_days',
        '365',
        'number',
        'How far in advance guests can book'
    ),
    (
        'check_in_time',
        '15:00',
        'text',
        'Check-in time'
    ),
    (
        'check_out_time',
        '11:00',
        'text',
        'Check-out time'
    ),
    ('currency', 'EUR', 'text', 'Default currency'),
    (
        'timezone',
        'Europe/Malta',
        'text',
        'Villa timezone'
    ),
    (
        'social_instagram',
        'https://instagram.com/villamosta',
        'text',
        'Instagram URL'
    ),
    (
        'social_facebook',
        'https://facebook.com/villamosta',
        'text',
        'Facebook URL'
    );
-- ============================================
-- SITE CONTENT (Homepage)
-- ============================================
INSERT INTO public.site_content (
        page,
        section,
        content_key,
        content_value,
        content_type,
        display_order
    )
VALUES -- Hero
    (
        'home',
        'hero',
        'title',
        'Villa Mosta',
        'text',
        1
    ),
    (
        'home',
        'hero',
        'subtitle',
        'A Boutique Mediterranean Retreat',
        'text',
        2
    ),
    (
        'home',
        'hero',
        'description',
        'Discover a sanctuary where timeless elegance meets Mediterranean charm. An intimate villa experience designed for those who seek beauty, calm, and authentic hospitality.',
        'text',
        3
    ),
    (
        'home',
        'hero',
        'background_image',
        '/images/hero.jpg',
        'image',
        4
    ),
    -- About
    (
        'home',
        'about',
        'overline',
        'WHAT LIVES HERE',
        'text',
        1
    ),
    (
        'home',
        'about',
        'title',
        'Villa Mosta is more than a home — it''s a living rhythm.',
        'text',
        2
    ),
    (
        'home',
        'about',
        'paragraph_1',
        'Perched on the gentle slopes of the Mediterranean, Villa Mosta offers an escape from the ordinary. Here, time moves differently—mornings begin with golden light filtering through ancient olive trees, and evenings end with the soft whisper of sea breezes.',
        'text',
        3
    ),
    (
        'home',
        'about',
        'paragraph_2',
        'Every corner of our villa has been thoughtfully curated to create moments of quiet luxury. From the hand-selected linens to the locally sourced breakfast ingredients, we believe true hospitality lies in the details.',
        'text',
        4
    ),
    -- Rooms Section
    (
        'home',
        'rooms',
        'overline',
        'ACCOMMODATIONS',
        'text',
        1
    ),
    (
        'home',
        'rooms',
        'title',
        'Thoughtfully designed spaces',
        'text',
        2
    ),
    (
        'home',
        'rooms',
        'description',
        'Each room at Villa Mosta has been crafted with intention—combining local materials, artisan touches, and modern comforts to create spaces where you can truly unwind.',
        'text',
        3
    ),
    -- CTA
    (
        'home',
        'cta',
        'overline',
        'BEGIN YOUR JOURNEY',
        'text',
        1
    ),
    (
        'home',
        'cta',
        'title',
        'Ready to experience Villa Mosta?',
        'text',
        2
    ),
    (
        'home',
        'cta',
        'description',
        'Book your stay and discover why our guests return year after year. Whether you''re seeking romance, adventure, or simply a place to breathe—we''re ready to welcome you.',
        'text',
        3
    );
-- ============================================
-- SUCCESS MESSAGE
-- ============================================
DO $$ BEGIN RAISE NOTICE 'Seed data inserted successfully!';
END $$;