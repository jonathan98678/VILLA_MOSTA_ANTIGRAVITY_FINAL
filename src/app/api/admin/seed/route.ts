import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST() {
    try {
        // Clear existing rooms
        const { error: deleteError } = await supabase
            .from("rooms")
            .delete()
            .neq("id", "00000000-0000-0000-0000-000000000000"); // Delete all

        if (deleteError) throw deleteError;

        // Insert new rooms from seed data
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
                display_order: 1
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
                display_order: 2
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
                display_order: 3
            }
        ];

        const { error: insertError } = await supabase
            .from("rooms")
            .insert(rooms);

        if (insertError) throw insertError;

        return NextResponse.json({ message: "Database seeded successfully" });
    } catch (error) {
        console.error("Error seeding database:", error);
        return NextResponse.json(
            { error: "Failed to seed database" },
            { status: 500 }
        );
    }
}
