"use client";

import * as React from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Check, CreditCard, Lock, Users } from "lucide-react";
import { format, addDays, isBefore, isAfter, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval, getDay, addMonths, subMonths } from "date-fns";

// Room data (would be fetched from Supabase)
const rooms = [
    { id: "1", slug: "terrace-suite", name: "The Terrace Suite", basePrice: 280, maxGuests: 2, image: "/images/rooms/terrace-suite.jpg" },
    { id: "2", slug: "garden-room", name: "The Garden Room", basePrice: 220, maxGuests: 2, image: "/images/rooms/garden-room.jpg" },
    { id: "3", slug: "sunset-chamber", name: "The Sunset Chamber", basePrice: 260, maxGuests: 3, image: "/images/rooms/sunset-chamber.jpg" },
    { id: "4", slug: "heritage-room", name: "The Heritage Room", basePrice: 200, maxGuests: 2, image: "/images/rooms/heritage-room.jpg" },
];

// Simulated booked dates (would come from database)
const bookedDates = [
    { roomId: "1", start: addDays(new Date(), 5), end: addDays(new Date(), 8) },
    { roomId: "2", start: addDays(new Date(), 10), end: addDays(new Date(), 14) },
];

type BookingStep = "dates" | "details" | "payment" | "confirmation";

function BookingContent() {
    const searchParams = useSearchParams();
    const preselectedRoom = searchParams.get("room");

    const [currentStep, setCurrentStep] = React.useState<BookingStep>("dates");
    const [selectedRoom, setSelectedRoom] = React.useState<string | null>(
        preselectedRoom || null
    );
    const [checkIn, setCheckIn] = React.useState<Date | null>(null);
    const [checkOut, setCheckOut] = React.useState<Date | null>(null);
    const [guests, setGuests] = React.useState(2);
    const [currentMonth, setCurrentMonth] = React.useState(new Date());
    const [selectingCheckOut, setSelectingCheckOut] = React.useState(false);

    // Guest details
    const [guestDetails, setGuestDetails] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        specialRequests: "",
    });

    const selectedRoomData = rooms.find((r) => r.slug === selectedRoom);
    const nights = checkIn && checkOut
        ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
        : 0;
    const subtotal = selectedRoomData ? selectedRoomData.basePrice * nights : 0;
    const serviceFee = Math.round(subtotal * 0.05);
    const total = subtotal + serviceFee;

    // Calendar helpers
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const calendarDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
    const startPadding = getDay(monthStart);

    const isDateBooked = (date: Date, roomId: string) => {
        return bookedDates.some(
            (booking) =>
                booking.roomId === roomId &&
                !isBefore(date, booking.start) &&
                !isAfter(date, booking.end)
        );
    };

    const isDateDisabled = (date: Date) => {
        if (isBefore(date, new Date())) return true;
        if (selectedRoom && isDateBooked(date, selectedRoomData?.id || "")) return true;
        return false;
    };

    const handleDateClick = (date: Date) => {
        if (isDateDisabled(date)) return;

        if (!checkIn || (checkIn && checkOut)) {
            setCheckIn(date);
            setCheckOut(null);
            setSelectingCheckOut(true);
        } else if (selectingCheckOut && isAfter(date, checkIn)) {
            setCheckOut(date);
            setSelectingCheckOut(false);
        } else {
            setCheckIn(date);
            setCheckOut(null);
            setSelectingCheckOut(true);
        }
    };

    const isDateInRange = (date: Date) => {
        if (!checkIn || !checkOut) return false;
        return isAfter(date, checkIn) && isBefore(date, checkOut);
    };

    const steps: { key: BookingStep; label: string }[] = [
        { key: "dates", label: "Select Dates" },
        { key: "details", label: "Guest Details" },
        { key: "payment", label: "Payment" },
        { key: "confirmation", label: "Confirmation" },
    ];

    const canProceedFromDates = selectedRoom && checkIn && checkOut && nights >= 1;
    const canProceedFromDetails =
        guestDetails.firstName &&
        guestDetails.lastName &&
        guestDetails.email;

    return (
        <>
            {/* Progress Steps */}
            <div className="border-b border-cream-300 bg-cream-200">
                <div className="container py-4">
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        {steps.map((step, index) => (
                            <React.Fragment key={step.key}>
                                <div className="flex items-center gap-2">
                                    <div
                                        className={cn(
                                            "w-8 h-8 rounded-full flex items-center justify-center text-body-sm font-medium transition-colors",
                                            currentStep === step.key
                                                ? "bg-stone text-cream-100"
                                                : steps.findIndex((s) => s.key === currentStep) > index
                                                    ? "bg-accent text-cream-100"
                                                    : "bg-cream-300 text-text-muted"
                                        )}
                                    >
                                        {steps.findIndex((s) => s.key === currentStep) > index ? (
                                            <Check className="w-4 h-4" />
                                        ) : (
                                            index + 1
                                        )}
                                    </div>
                                    <span
                                        className={cn(
                                            "hidden md:block text-body-sm",
                                            currentStep === step.key
                                                ? "text-text font-medium"
                                                : "text-text-muted"
                                        )}
                                    >
                                        {step.label}
                                    </span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="w-8 md:w-16 h-px bg-cream-400" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    {/* Step 1: Dates & Room Selection */}
                    {currentStep === "dates" && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Calendar & Room Selection */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Room Selection */}
                                <div>
                                    <h2 className="font-serif text-heading-2 text-text mb-6">
                                        Select Your Room
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {rooms.map((room) => (
                                            <button
                                                key={room.id}
                                                onClick={() => setSelectedRoom(room.slug)}
                                                className={cn(
                                                    "text-left p-4 rounded-lg border-2 transition-all",
                                                    selectedRoom === room.slug
                                                        ? "border-stone bg-cream-200"
                                                        : "border-cream-300 hover:border-cream-400"
                                                )}
                                            >
                                                <div className="flex gap-4">
                                                    <div className="w-20 h-20 bg-cream-300 rounded flex-shrink-0" />
                                                    <div>
                                                        <h3 className="font-serif text-body font-medium text-text">
                                                            {room.name}
                                                        </h3>
                                                        <p className="text-body-sm text-text-muted">
                                                            Up to {room.maxGuests} guests
                                                        </p>
                                                        <p className="text-body font-medium text-stone mt-1">
                                                            €{room.basePrice}/night
                                                        </p>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Calendar */}
                                <div>
                                    <h2 className="font-serif text-heading-2 text-text mb-6">
                                        Choose Your Dates
                                    </h2>
                                    <div className="bg-cream-200 rounded-lg p-6">
                                        {/* Month Navigation */}
                                        <div className="flex items-center justify-between mb-6">
                                            <button
                                                onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                                                className="p-2 hover:bg-cream-300 rounded-full transition-colors"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                            <h3 className="font-serif text-heading-3 text-text">
                                                {format(currentMonth, "MMMM yyyy")}
                                            </h3>
                                            <button
                                                onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                                                className="p-2 hover:bg-cream-300 rounded-full transition-colors"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </div>

                                        {/* Day headers */}
                                        <div className="grid grid-cols-7 mb-2">
                                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                                <div
                                                    key={day}
                                                    className="text-center text-caption text-text-muted py-2"
                                                >
                                                    {day}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Calendar grid */}
                                        <div className="grid grid-cols-7 gap-1">
                                            {/* Padding for start of month */}
                                            {Array.from({ length: startPadding }).map((_, i) => (
                                                <div key={`padding-${i}`} className="h-10" />
                                            ))}

                                            {calendarDays.map((day) => {
                                                const disabled = isDateDisabled(day);
                                                const isCheckIn = checkIn && isSameDay(day, checkIn);
                                                const isCheckOut = checkOut && isSameDay(day, checkOut);
                                                const inRange = isDateInRange(day);

                                                return (
                                                    <button
                                                        key={day.toISOString()}
                                                        onClick={() => handleDateClick(day)}
                                                        disabled={disabled}
                                                        className={cn(
                                                            "h-10 rounded text-body-sm transition-colors",
                                                            disabled
                                                                ? "text-cream-400 cursor-not-allowed"
                                                                : "hover:bg-cream-300",
                                                            isCheckIn && "bg-stone text-cream-100",
                                                            isCheckOut && "bg-stone text-cream-100",
                                                            inRange && "bg-cream-300",
                                                            !disabled && !isCheckIn && !isCheckOut && !inRange && "text-text"
                                                        )}
                                                    >
                                                        {format(day, "d")}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        {/* Legend */}
                                        <div className="flex items-center gap-6 mt-6 text-caption text-text-muted">
                                            <span className="flex items-center gap-2">
                                                <div className="w-4 h-4 bg-stone rounded" />
                                                Selected
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <div className="w-4 h-4 bg-cream-300 rounded" />
                                                In range
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <div className="w-4 h-4 bg-cream-100 border border-cream-400 rounded" />
                                                Unavailable
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Guest Count */}
                                <div>
                                    <h2 className="font-serif text-heading-2 text-text mb-6">
                                        Number of Guests
                                    </h2>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setGuests(Math.max(1, guests - 1))}
                                            className="w-10 h-10 border border-cream-400 rounded-full flex items-center justify-center hover:bg-cream-200 transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="text-heading-3 font-serif w-8 text-center">
                                            {guests}
                                        </span>
                                        <button
                                            onClick={() =>
                                                setGuests(
                                                    Math.min(selectedRoomData?.maxGuests || 4, guests + 1)
                                                )
                                            }
                                            className="w-10 h-10 border border-cream-400 rounded-full flex items-center justify-center hover:bg-cream-200 transition-colors"
                                        >
                                            +
                                        </button>
                                        <span className="text-body-sm text-text-muted">
                                            {selectedRoomData
                                                ? `Max ${selectedRoomData.maxGuests} guests`
                                                : "Select a room first"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Summary Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-28 bg-cream-200 rounded-lg p-6">
                                    <h3 className="font-serif text-heading-3 text-text mb-6">
                                        Booking Summary
                                    </h3>

                                    {selectedRoomData ? (
                                        <>
                                            <div className="mb-4">
                                                <p className="text-body font-medium text-text">
                                                    {selectedRoomData.name}
                                                </p>
                                                <p className="text-body-sm text-text-muted">
                                                    Up to {selectedRoomData.maxGuests} guests
                                                </p>
                                            </div>

                                            {checkIn && checkOut ? (
                                                <>
                                                    <div className="space-y-2 mb-4 text-body-sm">
                                                        <div className="flex justify-between">
                                                            <span className="text-text-muted">Check-in</span>
                                                            <span className="text-text">
                                                                {format(checkIn, "MMM d, yyyy")}
                                                            </span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-text-muted">Check-out</span>
                                                            <span className="text-text">
                                                                {format(checkOut, "MMM d, yyyy")}
                                                            </span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-text-muted">Guests</span>
                                                            <span className="text-text">{guests}</span>
                                                        </div>
                                                    </div>

                                                    <div className="border-t border-cream-400 pt-4 space-y-2 text-body-sm">
                                                        <div className="flex justify-between">
                                                            <span className="text-text-muted">
                                                                €{selectedRoomData.basePrice} × {nights} nights
                                                            </span>
                                                            <span className="text-text">€{subtotal}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-text-muted">Service fee</span>
                                                            <span className="text-text">€{serviceFee}</span>
                                                        </div>
                                                        <div className="flex justify-between pt-2 border-t border-cream-400">
                                                            <span className="font-medium text-text">Total</span>
                                                            <span className="font-medium text-text">€{total}</span>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <p className="text-body-sm text-text-muted mb-4">
                                                    Select dates to see pricing
                                                </p>
                                            )}

                                            <Button
                                                size="lg"
                                                className="w-full mt-6"
                                                disabled={!canProceedFromDates}
                                                onClick={() => setCurrentStep("details")}
                                            >
                                                Continue
                                            </Button>
                                        </>
                                    ) : (
                                        <p className="text-body text-text-muted">
                                            Select a room to continue
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Guest Details */}
                    {currentStep === "details" && (
                        <div className="max-w-2xl mx-auto">
                            <h2 className="font-serif text-display text-text mb-8 text-center">
                                Guest Details
                            </h2>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-body-sm font-medium text-text mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={guestDetails.firstName}
                                            onChange={(e) =>
                                                setGuestDetails({ ...guestDetails, firstName: e.target.value })
                                            }
                                            className="w-full px-4 py-3 bg-cream-200 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-body-sm font-medium text-text mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={guestDetails.lastName}
                                            onChange={(e) =>
                                                setGuestDetails({ ...guestDetails, lastName: e.target.value })
                                            }
                                            className="w-full px-4 py-3 bg-cream-200 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-body-sm font-medium text-text mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        value={guestDetails.email}
                                        onChange={(e) =>
                                            setGuestDetails({ ...guestDetails, email: e.target.value })
                                        }
                                        className="w-full px-4 py-3 bg-cream-200 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-body-sm font-medium text-text mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        value={guestDetails.phone}
                                        onChange={(e) =>
                                            setGuestDetails({ ...guestDetails, phone: e.target.value })
                                        }
                                        className="w-full px-4 py-3 bg-cream-200 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-body-sm font-medium text-text mb-2">
                                        Special Requests
                                    </label>
                                    <textarea
                                        value={guestDetails.specialRequests}
                                        onChange={(e) =>
                                            setGuestDetails({ ...guestDetails, specialRequests: e.target.value })
                                        }
                                        rows={4}
                                        className="w-full px-4 py-3 bg-cream-200 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                                        placeholder="Any dietary requirements, celebration occasions, or special needs..."
                                    />
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <Button
                                        variant="secondary"
                                        size="lg"
                                        onClick={() => setCurrentStep("dates")}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        size="lg"
                                        className="flex-1"
                                        disabled={!canProceedFromDetails}
                                        onClick={() => setCurrentStep("payment")}
                                    >
                                        Continue to Payment
                                    </Button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Step 3: Payment */}
                    {currentStep === "payment" && (
                        <div className="max-w-2xl mx-auto">
                            <h2 className="font-serif text-display text-text mb-8 text-center">
                                Payment
                            </h2>

                            {/* Order Summary */}
                            <div className="bg-cream-200 rounded-lg p-6 mb-8">
                                <h3 className="font-serif text-heading-3 text-text mb-4">
                                    Order Summary
                                </h3>
                                <div className="space-y-3 text-body">
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">{selectedRoomData?.name}</span>
                                        <span className="text-text">€{subtotal}</span>
                                    </div>
                                    <div className="flex justify-between text-body-sm">
                                        <span className="text-text-muted">
                                            {checkIn && checkOut && `${format(checkIn, "MMM d")} - ${format(checkOut, "MMM d, yyyy")} (${nights} nights)`}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">Service fee</span>
                                        <span className="text-text">€{serviceFee}</span>
                                    </div>
                                    <div className="flex justify-between pt-3 border-t border-cream-400 font-medium">
                                        <span className="text-text">Total</span>
                                        <span className="text-text">€{total}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Form Placeholder */}
                            <div className="bg-cream-200 rounded-lg p-6 mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <CreditCard className="w-5 h-5 text-stone" />
                                    <h3 className="font-serif text-heading-3 text-text">
                                        Card Details
                                    </h3>
                                </div>

                                <p className="text-body text-text-muted mb-4">
                                    Stripe payment form would be integrated here in production.
                                </p>

                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Card number"
                                        className="w-full px-4 py-3 bg-cream-100 border border-cream-400 rounded-lg"
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            className="w-full px-4 py-3 bg-cream-100 border border-cream-400 rounded-lg"
                                        />
                                        <input
                                            type="text"
                                            placeholder="CVC"
                                            className="w-full px-4 py-3 bg-cream-100 border border-cream-400 rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mt-4 text-caption text-text-muted">
                                    <Lock className="w-4 h-4" />
                                    Your payment is secured with SSL encryption
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    onClick={() => setCurrentStep("details")}
                                >
                                    Back
                                </Button>
                                <Button
                                    size="lg"
                                    className="flex-1"
                                    onClick={() => setCurrentStep("confirmation")}
                                >
                                    Pay €{total}
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Confirmation */}
                    {currentStep === "confirmation" && (
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-10 h-10 text-green-600" />
                            </div>

                            <h2 className="font-serif text-display text-text mb-4">
                                Booking Confirmed!
                            </h2>

                            <p className="text-body-lg text-text-muted mb-8">
                                Thank you, {guestDetails.firstName}! Your reservation at Villa Mosta
                                has been confirmed. We&apos;ve sent a confirmation email to {guestDetails.email}.
                            </p>

                            <div className="bg-cream-200 rounded-lg p-6 text-left mb-8">
                                <h3 className="font-serif text-heading-3 text-text mb-4">
                                    Reservation Details
                                </h3>
                                <div className="space-y-3 text-body">
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">Confirmation #</span>
                                        <span className="text-text font-mono">VM-{Date.now().toString(36).toUpperCase()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">Room</span>
                                        <span className="text-text">{selectedRoomData?.name}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">Check-in</span>
                                        <span className="text-text">{checkIn && format(checkIn, "EEEE, MMMM d, yyyy")}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">Check-out</span>
                                        <span className="text-text">{checkOut && format(checkOut, "EEEE, MMMM d, yyyy")}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">Guests</span>
                                        <span className="text-text">{guests}</span>
                                    </div>
                                    <div className="flex justify-between pt-3 border-t border-cream-400 font-medium">
                                        <span className="text-text">Total Paid</span>
                                        <span className="text-text">€{total}</span>
                                    </div>
                                </div>
                            </div>

                            <Button size="lg" asChild>
                                <a href="/">Return to Homepage</a>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

// Loading fallback
function BookingLoading() {
    return (
        <div className="section">
            <div className="container">
                <div className="flex items-center justify-center min-h-[400px]">
                    <div className="text-center">
                        <div className="w-12 h-12 border-4 border-cream-300 border-t-stone rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-body text-text-muted">Loading booking...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function BookingPage() {
    return (
        <>
            <Header />
            <main className="pt-20 min-h-screen bg-cream-100">
                <Suspense fallback={<BookingLoading />}>
                    <BookingContent />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}
