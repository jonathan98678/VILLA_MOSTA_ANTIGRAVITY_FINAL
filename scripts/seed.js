const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load .env.local manually
const envPath = path.resolve(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
        envVars[key.trim()] = value.trim();
    }
});

const supabaseUrl = envVars.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = envVars.SUPABASE_SERVICE_ROLE_KEY || envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
    console.log('Seeding database...');

    try {
        // 1. Clear existing data
        console.log('Clearing existing data...');
        await supabase.from("reviews").delete().neq("id", "00000000-0000-0000-0000-000000000000");
        await supabase.from("rooms").delete().neq("id", "00000000-0000-0000-0000-000000000000");
        await supabase.from("site_settings").delete().neq("id", "00000000-0000-0000-0000-000000000000");

        // 2. Insert Settings
        console.log('Inserting settings...');
        const settings = [
            { setting_key: 'site_name', setting_value: 'Villa Mosta', setting_type: 'string', description: 'Name of the property' },
            { setting_key: 'site_tagline', setting_value: 'A Traditional Maltese Home', setting_type: 'string', description: 'Tagline appearing in hero/header' },
            { setting_key: 'contact_email', setting_value: 'info@villamosta.com', setting_type: 'string', description: 'Main contact email' },
            { setting_key: 'contact_phone', setting_value: '', setting_type: 'string', description: 'Contact phone (hidden)' },
            { setting_key: 'address_line_1', setting_value: 'Mosta, Malta', setting_type: 'string', description: 'Property address' },
            { setting_key: 'check_in_time', setting_value: '14:00', setting_type: 'string', description: 'Standard check-in time' },
            { setting_key: 'check_out_time', setting_value: '10:00', setting_type: 'string', description: 'Standard check-out time' },
            { setting_key: 'hero_title', setting_value: 'VILLA MOSTA', setting_type: 'string', description: 'Hero section title' },
            { setting_key: 'hero_subtitle', setting_value: 'A Traditional Maltese Home', setting_type: 'string', description: 'Hero section subtitle' },
            { setting_key: 'hero_description', setting_value: 'Experience authentic Maltese hospitality in the heart of Mosta.', setting_type: 'string', description: 'Hero section description' },
            { setting_key: 'hero_video_id', setting_value: '9mg8FOQi6bI', setting_type: 'string', description: 'YouTube video ID for hero background' },
            { setting_key: 'hero_video_start', setting_value: '121', setting_type: 'number', description: 'Video start time in seconds' },
            { setting_key: 'hero_video_end', setting_value: '124', setting_type: 'number', description: 'Video end time in seconds' }
        ];

        const { error: settingsError } = await supabase.from("site_settings").insert(settings);
        if (settingsError) throw settingsError;

        // 3. Insert Rooms
        console.log('Inserting rooms...');
        const rooms = [
            {
                slug: 'deluxe-double-room',
                name: 'Deluxe Double Room with Shower',
                short_description: 'Elegant room with city views and modern amenities.',
                long_description: [
                    'Experience comfort in our Deluxe Double Room. This air-conditioned room features a private balcony with city views, perfect for enjoying the local atmosphere.',
                    'The room includes a private bathroom with a walk-in shower, free toiletries, and a hairdryer. Entertainment is provided via a flat-screen TV with streaming services.',
                    'Guests can enjoy the convenience of a tea and coffee maker, minibar, and free WiFi throughout their stay.'
                ],
                base_price: 120.00,
                max_guests: 2,
                size: '25m²',
                features: ['Balcony', 'City View', 'Air Conditioning', 'Private Bathroom', 'Flat-screen TV', 'Minibar', 'Free WiFi', 'Non-smoking'],
                images: ['/images/rooms/deluxe-double-1.jpg', '/images/rooms/deluxe-double-2.jpg', '/images/rooms/deluxe-double-3.jpg'],
                display_order: 1,
                is_active: true
            },
            {
                slug: 'double-twin-garden',
                name: 'Double or Twin Room with Garden View',
                short_description: 'Peaceful retreat overlooking the lush garden.',
                long_description: [
                    'Relax in our Double or Twin Room, offering serene views of the garden. This room provides a flexible sleeping arrangement with either a large double bed or two single beds.',
                    'Enjoy the fresh air from your private balcony or terrace. The room is equipped with air conditioning, a desk, and a private bathroom with a shower.',
                    'Additional amenities include a wardrobe, electric kettle, and access to the shared sun terrace.'
                ],
                base_price: 135.00,
                max_guests: 2,
                size: '28m²',
                features: ['Garden View', 'Terrace', 'Air Conditioning', 'Private Bathroom', 'Flat-screen TV', 'Soundproofing', 'Free WiFi', 'Outdoor Furniture'],
                images: ['/images/rooms/garden-view-1.jpg', '/images/rooms/garden-view-2.jpg', '/images/rooms/garden-view-3.jpg'],
                display_order: 2,
                is_active: true
            },
            {
                slug: 'family-room-terrace',
                name: 'Family Room with Terrace',
                short_description: 'Spacious accommodation for families with private outdoor space.',
                long_description: [
                    'Our Family Room is designed for comfort and space, featuring a large double bed and a sofa bed, accommodating up to 4 guests.',
                    'The highlight is the private terrace with outdoor furniture, ideal for family gatherings. The room includes soundproofing, air conditioning, and a private entrance.',
                    'A modern private bathroom, flat-screen TV, and minibar ensure a relaxing stay for the whole family.'
                ],
                base_price: 180.00,
                max_guests: 4,
                size: '35m²',
                features: ['Private Terrace', 'Sofa Bed', 'Air Conditioning', 'Private Bathroom', 'Flat-screen TV', 'Minibar', 'Free WiFi', 'Family Friendly'],
                images: ['/images/rooms/family-room-1.jpg', '/images/rooms/family-room-2.jpg', '/images/rooms/family-room-3.jpg'],
                display_order: 3,
                is_active: true
            }
        ];

        const { error: roomsError } = await supabase.from("rooms").insert(rooms);
        if (roomsError) throw roomsError;

        // 4. Insert Reviews
        console.log('Inserting reviews...');
        const reviews = [
            { guest_name: 'Elizabeth', guest_country: 'United Kingdom', rating: 10, review_text: 'Very welcoming host. Well equipped. Great location. Quiet.', source: 'Booking.com', review_date: '2025-01-15', is_featured: true, is_published: true },
            { guest_name: 'Inge', guest_country: 'Belgium', rating: 10, review_text: 'Wonderful hospitable owners! Beautiful rooms with a lovely terrace. Mosta is a charming town. We can only praise our stay highly.', source: 'Booking.com', review_date: '2025-01-12', is_featured: true, is_published: true },
            { guest_name: 'Julie', guest_country: 'United Kingdom', rating: 10, review_text: 'Location very central and easy to catch buses. The rooftop is perfect for chilling and relaxing. A beautiful traditional Maltese villa.', source: 'Booking.com', review_date: '2025-01-10', is_featured: true, is_published: true },
            { guest_name: 'Bridie', guest_country: 'Australia', rating: 10, review_text: 'Great location. Really friendly and helpful hosts. I would definitely stay again.', source: 'Booking.com', review_date: '2025-01-05', is_featured: true, is_published: true },
            { guest_name: 'Shane', guest_country: 'Canada', rating: 10, review_text: 'The hosts were amazing. Great restaurant recommendations with authentic Maltese cuisine. Friendliness was more than expected.', source: 'Booking.com', review_date: '2024-12-28', is_featured: true, is_published: true },
            { guest_name: 'Jamie', guest_country: 'United Kingdom', rating: 10, review_text: 'Hosts were very friendly, hospitable and extremely helpful.', source: 'Booking.com', review_date: '2024-12-20', is_featured: true, is_published: true },
            { guest_name: 'Olivera', guest_country: 'Serbia', rating: 10, review_text: 'Great location to explore everything. The house is lovely, very clean, had a great view from my room and the owner is amazing!', source: 'Booking.com', review_date: '2024-12-15', is_featured: true, is_published: true },
            { guest_name: 'Tamara', guest_country: 'Slovakia', rating: 10, review_text: 'We loved everything! Host was kind and helpful with great recommendations. The room is spacious and terrace is outstanding.', source: 'Booking.com', review_date: '2024-12-10', is_featured: true, is_published: true },
            { guest_name: 'Agnė', guest_country: 'Lithuania', rating: 10, review_text: 'The host was incredibly nice, offered guidance and accommodated our needs. The place was clean and spacious.', source: 'Booking.com', 'review_date': '2024-12-05', is_featured: true, is_published: true },
            { guest_name: 'Emmanouil', guest_country: 'United Kingdom', rating: 10, review_text: 'Host was really friendly, providing recommendations and proactively communicating throughout the process.', source: 'Booking.com', review_date: '2024-11-30', is_featured: true, is_published: true }
        ];

        const { error: reviewsError } = await supabase.from("reviews").insert(reviews);
        if (reviewsError) throw reviewsError;

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', JSON.stringify(error, null, 2));
        if (error.cause) console.error('Caused by:', error.cause);
        if (error.message) console.error('Message:', error.message);
        if (error.details) console.error('Details:', error.details);
        if (error.hint) console.error('Hint:', error.hint);
        process.exit(1);
    }
}

seed();
