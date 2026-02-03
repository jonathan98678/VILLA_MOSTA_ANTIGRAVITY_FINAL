import { NextResponse } from "next/server";
import { getRooms, updateRoom, deleteRoom } from "@/lib/db";

export async function GET() {
    try {
        const rooms = await getRooms();
        return NextResponse.json(rooms);
    } catch (error) {
        console.error("Error fetching rooms:", error);
        return NextResponse.json({ error: "Failed to fetch rooms" }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const { id, ...updates } = await request.json();
        const success = await updateRoom(id, updates);

        if (success) {
            return NextResponse.json({ message: "Room updated successfully" });
        } else {
            return NextResponse.json({ error: "Failed to update room" }, { status: 500 });
        }
    } catch (error) {
        console.error("Error updating room:", error);
        return NextResponse.json({ error: "Failed to update room" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        const success = await deleteRoom(id);

        if (success) {
            return NextResponse.json({ message: "Room deleted successfully" });
        } else {
            return NextResponse.json({ error: "Failed to delete room" }, { status: 500 });
        }
    } catch (error) {
        console.error("Error deleting room:", error);
        return NextResponse.json({ error: "Failed to delete room" }, { status: 500 });
    }
}
