"use client";

import RazorpayCheckout from "./RazorpayCheckout";

interface FinalCTAProps {
    data: {
        heading: string;
        subheading: string;
        benefits: string[];
        cta: {
            primary: string;
            secondary: string;
        };
        trust: {
            heading: string;
            points: Array<{
                icon: string;
                title: string;
                description: string;
            }>;
        };
        razorpayInfo: {
            heading: string;
            steps: string[];
        };
    };
}

export default function FinalCTA({ data }: FinalCTAProps) {
    return (
        <section className="py-16 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{data.heading}</h2>
                    <p className="text-xl text-blue-100">{data.subheading}</p>
                </div>

                {/* Benefits Checklist */}
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
                    <ul className="space-y-4">
                        {data.benefits && data.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <i className="fas fa-check-circle text-green-300 text-xl"></i>
                                <span className="text-lg">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    <RazorpayCheckout
                        amount={2999}
                        courseName="Complete Hindi Speaking Course"
                        buttonText={data.cta.primary}
                        className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:scale-105"
                    />
                    <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2"
                    >
                        <i className="fab fa-whatsapp text-2xl"></i>
                        {data.cta.secondary}
                    </a>
                </div>

                {/* Trust Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8">{data.trust.heading}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.trust.points && data.trust.points.map((point, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className={`fas fa-${point.icon} text-3xl`}></i>
                                </div>
                                <h4 className="font-bold text-lg mb-2">{point.title}</h4>
                                <p className="text-sm text-blue-100">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Razorpay Checkout Process */}
                <div className="bg-white text-slate-900 rounded-2xl p-8 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        {data.razorpayInfo.heading}
                    </h3>
                    <div className="space-y-4">
                        {data.razorpayInfo.steps && data.razorpayInfo.steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                    {index + 1}
                                </div>
                                <p className="text-gray-700 pt-1">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
