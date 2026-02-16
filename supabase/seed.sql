-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- Clear existing data
DELETE FROM reviews;
DELETE FROM rooms;
DELETE FROM site_settings;
-- 1. Site Settings
INSERT INTO site_settings (
        setting_key,
        setting_value,
        setting_type,
        description
    )
VALUES (
        'site_name',
        'Villa Mosta',
        'string',
        'Name of the property'
    ),
    (
        'site_tagline',
        'A Traditional Maltese Home',
        'string',
        'Tagline appearing in hero/header'
    ),
    (
        'contact_email',
        'info@villamosta.com',
        'string',
        'Main contact email'
    ),
    (
        'contact_phone',
        '',
        'string',
        'Contact phone (hidden)'
    ),
    (
        'address_line_1',
        'Mosta, Malta',
        'string',
        'Property address'
    ),
    (
        'check_in_time',
        '14:00',
        'string',
        'Standard check-in time'
    ),
    (
        'check_out_time',
        '10:00',
        'string',
        'Standard check-out time'
    ),
    (
        'hero_title',
        'VILLA MOSTA',
        'string',
        'Hero section title'
    ),
    (
        'hero_subtitle',
        'A Traditional Maltese Home',
        'string',
        'Hero section subtitle'
    ),
    (
        'hero_description',
        'Experience authentic Maltese hospitality in the heart of Mosta.',
        'string',
        'Hero section description'
    ),
    (
        'hero_video_id',
        '9mg8FOQi6bI',
        'string',
        'YouTube video ID for hero background'
    ),
    (
        'hero_video_start',
        '121',
        'number',
        'Video start time in seconds'
    ),
    (
        'hero_video_end',
        '124',
        'number',
        'Video end time in seconds'
    );
-- 2. Rooms
INSERT INTO rooms (
        id,
        slug,
        name,
        short_description,
        long_description,
        base_price,
        max_guests,
        size,
        features,
        images,
        display_order,
        is_active
    )
VALUES (
        uuid_generate_v4(),
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
        1,
        true
    ),
    (
        uuid_generate_v4(),
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
        2,
        true
    ),
    (
        uuid_generate_v4(),
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
        3,
        true
    );
-- 3. Reviews
INSERT INTO reviews (
        id,
        guest_name,
        guest_country,
        rating,
        review_text,
        source,
        review_date,
        is_featured,
        is_published
    )
VALUES (
        uuid_generate_v4(),
        'Elizabeth',
        'United Kingdom',
        10,
        'Very welcoming host. Well equipped. Great location. Quiet.',
        'Booking.com',
        '2025-01-15',
        true,
        true
    ),
    (
        uuid_generate_v4(),
        'Inge',
        'Belgium',
        10,
        'Wonderful hospitable owners! Beautiful rooms with a lovely terrace. Mosta is a charming town. We can only praise our stay highly.',
        'Booking.com',
        '2025-01-12',
        true,
        true
    ),
    (
        uuid_generate_v4(),
        'Julie',
        'United Kingdom',
        10,
        'Location very central and easy to catch buses. The rooftop is perfect for chilling and relaxing. A beautiful traditional Maltese villa.',
        'Booking.com',
        '2025-01-10',
        true,
        true
    ),
    (
        uuid_generate_v4(),
        'Bridie',
        'Australia',
        10,
        'Great location. Really friendly and helpful hosts. I would definitely stay again.',
        'Booking.com',
        '2025-01-05',
        true,
        true
    ),
    (
        uuid_generate_v4(),
        'Shane',
        'Canada',
        10,
        'The hosts were amazing. Great restaurant recommendations with authentic Maltese cuisine. Friendliness was more than expected.',
        'Booking.com',
        '2024-12-28',
        true,
        true
    ),
    (
        uuid_generate_v4(),
        'Jamie',
        'United Kingdom',
        10,
        'Hosts were very friendly, hospitable and extremely helpful.',
        'Booking.com',
        '2024-12-20',
        true,
        true
    ),
    (
        uuid_generate_v4(),
        'Olivera',
        'Serbia',
        10,
        'Great location to explore everything. The house is lovely, very clean, had a great view from my room and the owner is amazing!',
        'Booking.com',
        '2024-12-15',
        true,
        true
    ),
    (
        uuid_generate_v4(),
        'Tamara',
        'Slovakia',
        10,
        'We loved everything! Host was kind and helpful with great recommendations. The room is spacious and terrace is outstanding.',
        'Booking.com',
        '2024-12-10',
        true,
        true
    ),
    (
        uuid_generate_v4(),
        'Agnė',
        'Lithuania',
        10,
        'The host was incredibly nice, offered guidance and accommodated our needs. The place was clean and spacious.',
        'Booking.com',
        '2024-12-05',
        true,
        true
    ),
    (
        uuid_generate_v4(),
        'Emmanouil',
        'United Kingdom',
        10,
        'Host was really friendly, providing recommendations and proactively communicating throughout the process.',
        'Booking.com',
        '2024-11-30',
        true,
        true
    );