import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - Knowledge Duniya',
    description: 'Get in touch with Knowledge Duniya. Book a free demo, ask questions, or speak with our learning consultants about Hindi courses.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        We'd love to hear from you. Get in touch with our team!
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="+1 234 567 8900"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Tell us how we can help you..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-envelope text-blue-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                                        <p className="text-slate-600">support@knowledgeduniya.com</p>
                                        <p className="text-slate-600">info@knowledgeduniya.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-phone text-purple-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                                        <p className="text-slate-600">+1 (555) 123-4567</p>
                                        <p className="text-slate-600 text-sm">Mon-Fri 9am-6pm EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-map-marker-alt text-green-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                                        <p className="text-slate-600">123 Learning Street</p>
                                        <p className="text-slate-600">New York, NY 10001</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                            <h3 className="text-xl font-bold mb-4">Book a Free Demo</h3>
                            <p className="text-blue-100 mb-6">
                                Experience our teaching style with a complimentary trial class
                            </p>
                            <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 transition">
                                Schedule Demo Class
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'What are your class timings?',
                                a: 'We offer flexible timings to accommodate different time zones. Classes are available morning, afternoon, and evening.'
                            },
                            {
                                q: 'Do you offer trial classes?',
                                a: 'Yes! We offer a free 30-minute trial class for all new students.'
                            },
                            {
                                q: 'What is your refund policy?',
                                a: 'We offer a 7-day money-back guarantee if you\'re not satisfied with our courses.'
                            }
                        ].map((faq, i) => (
                            <details key={i} className="bg-slate-50 rounded-xl p-6 cursor-pointer">
                                <summary className="font-bold text-slate-900 cursor-pointer">
                                    {faq.q}
                                </summary>
                                <p className="text-slate-600 mt-3">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
