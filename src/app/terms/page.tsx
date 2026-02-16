import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
    title: "Terms of Service",
    description: "Terms and Conditions for staying at Villa Mosta.",
};

export default function TermsPage() {
    return (
        <>
            <Header />
            <main className="pt-24 pb-20 bg-stone-50">
                <div className="container max-w-3xl px-4 py-12 bg-white shadow-sm rounded-xl my-8">
                    <h1 className="font-serif text-3xl sm:text-4xl text-stone-800 mb-8">Terms of Service</h1>
                    <p className="text-stone-500 mb-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-stone max-w-none text-stone-600">
                        <h3>1. Agreement to Terms</h3>
                        <p>
                            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Villa Mosta (“we,” “us” or “our”), concerning your access to and use of the villamosta.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                        </p>

                        <h3>2. Booking and Reservations</h3>
                        <p>
                            By making a reservation with specific dates, you agree to the rates and charges associated with that booking. All bookings are subject to availability and acceptance by Villa Mosta.
                        </p>

                        <h3>3. Cancellation Policy</h3>
                        <p>
                            Cancellations made 30 days or more prior to the arrival date will receive a full refund. Cancellations made within 30 days of the arrival date may be subject to a cancellation fee equivalent to the first night's stay. No-shows will be charged the full amount of the reservation.
                        </p>

                        <h3>4. House Rules</h3>
                        <ul>
                            <li><strong>Check-in:</strong> 14:00 - 20:00</li>
                            <li><strong>Check-out:</strong> 07:00 - 11:00</li>
                            <li><strong>Smoking:</strong> Strictly prohibited inside the villa.</li>
                            <li><strong>Parties:</strong> Events and parties are not allowed.</li>
                            <li><strong>Quiet Hours:</strong> Please respect our neighbors and keep noise to a minimum between 23:00 and 07:00.</li>
                        </ul>

                        <h3>5. Liability</h3>
                        <p>
                            Villa Mosta is not liable for any loss, damage, or theft of personal property. Guests are responsible for their own safety and the safety of their belongings. Any damage caused to the property by guests will be charged to the guest's credit card.
                        </p>

                        <h3>6. Governing Law</h3>
                        <p>
                            These Terms shall be governed by and defined following the laws of Malta. Villa Mosta and yourself irrevocably consent that the courts of Malta shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
