import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { url } = await request.json();

        if (!url) {
            return NextResponse.json({ error: "URL is required" }, { status: 400 });
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch iCal URL: ${response.statusText}`);
        }

        const icsData = await response.text();
        const events = parseIcal(icsData);

        return NextResponse.json(events);
    } catch (error) {
        console.error("Error fetching/parsing iCal:", error);
        return NextResponse.json({ error: "Failed to fetch/parse iCal" }, { status: 500 });
    }
}

function parseIcal(data: string) {
    const events: any[] = [];
    const lines = data.split(/\r\n|\n|\r/);
    let currentEvent: any = null;

    for (const line of lines) {
        if (line.startsWith("BEGIN:VEVENT")) {
            currentEvent = {};
        } else if (line.startsWith("END:VEVENT")) {
            if (currentEvent) {
                events.push(currentEvent);
                currentEvent = null;
            }
        } else if (currentEvent) {
            if (line.startsWith("DTSTART")) {
                currentEvent.start = parseDate(line);
            } else if (line.startsWith("DTEND")) {
                currentEvent.end = parseDate(line);
            } else if (line.startsWith("SUMMARY")) {
                currentEvent.summary = line.split(":")[1] || "Booked";
            }
        }
    }

    return events;
}

function parseDate(line: string) {
    // Handle DTSTART;VALUE=DATE:20231025
    // Handle DTSTART:20231025T120000Z
    const parts = line.split(":");
    const value = parts[1];

    if (!value) return null;

    // Basic YYYYMMDD parsing
    if (value.length >= 8) {
        const year = value.substring(0, 4);
        const month = value.substring(4, 6);
        const day = value.substring(6, 8);
        return `${year}-${month}-${day}`;
    }

    return value;
}
