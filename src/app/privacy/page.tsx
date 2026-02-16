import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for Villa Mosta. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main className="pt-24 pb-20 bg-stone-50">
                <div className="container max-w-3xl px-4 py-12 bg-white shadow-sm rounded-xl my-8">
                    <h1 className="font-serif text-3xl sm:text-4xl text-stone-800 mb-8">Privacy Policy</h1>
                    <p className="text-stone-500 mb-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-stone max-w-none text-stone-600">
                        <p>
                            At Villa Mosta, accessible from villamosta.com, one of our main priorities is the privacy of our visitors.
                            This Privacy Policy document contains types of information that is collected and recorded by Villa Mosta and how we use it.
                        </p>

                        <h3>Information We Collect</h3>
                        <p>
                            We collect information that you strictly provide to us for the purpose of making a reservation or contacting us. This includes:
                        </p>
                        <ul>
                            <li>Name and contact information (email, phone number)</li>
                            <li>Booking details and dates</li>
                            <li>Payment information (processed securely via Stripe)</li>
                        </ul>

                        <h3>How We Use Your Information</h3>
                        <p>
                            We use the information we collect in various ways, including to:
                        </p>
                        <ul>
                            <li>Process and manage your reservations</li>
                            <li>Communicate with you regarding your stay</li>
                            <li>Improve our website and services</li>
                            <li>Send you emails relating to your booking</li>
                        </ul>

                        <h3>Data Protection</h3>
                        <p>
                            We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
                        </p>

                        <h3>Third-Party Disclosure</h3>
                        <p>
                            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users.
                        </p>

                        <h3>Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at info@villamosta.com.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
