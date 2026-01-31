"use client";

import RazorpayCheckout from "./RazorpayCheckout";

interface PricingSectionProps {
    data: {
        heading: string;
        subheading: string;
        featured: {
            name: string;
            tagline: string;
            price: {
                current: string;
                original: string;
                discount: string;
                currency: string;
            };
            paymentNote: string;
            cta: string;
        };
        included: {
            heading: string;
            features: Array<{
                icon: string;
                text: string;
                highlight: boolean;
            }>;
        };
        guarantee: {
            heading: string;
            description: string;
            icon: string;
        };
        paymentMethods: {
            heading: string;
            methods: string[];
            note: string;
        };
    };
}

export default function PricingSection({ data }: PricingSectionProps) {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-gray-600">{data.subheading}</p>
                </div>

                {/* Pricing Card */}
                <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-2xl">
                    {/* Discount Badge */}
                    <div className="text-center mb-8">
                        <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                            {data.featured.price.discount}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">
                            {data.featured.name}
                        </h3>
                        <p className="text-gray-600">{data.featured.tagline}</p>
                    </div>

                    {/* Price Display */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-4 mb-2">
                            <span className="text-gray-400 line-through text-3xl">
                                ₹{data.featured.price.original}
                            </span>
                            <span className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                ₹{data.featured.price.current}
                            </span>
                        </div>
                        <p className="text-gray-600 text-lg">{data.featured.paymentNote}</p>
                    </div>

                    {/* What's Included */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 mb-6">
                        <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">
                            {data.included.heading}
                        </h4>
                        <ul className="space-y-4">
                            {data.included.features && data.included.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className={`flex items-center gap-3 ${feature.highlight ? "bg-blue-50 p-3 rounded -lg" : ""
                                        }`}
                                >
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center ${feature.highlight
                                            ? "bg-gradient-to-br from-blue-600 to-purple-600"
                                            : "bg-green-100"
                                            }`}
                                    >
                                        <i
                                            className={`fas fa-${feature.icon} ${feature.highlight ? "text-white" : "text-green-600"
                                                }`}
                                        ></i>
                                    </div>
                                    <span
                                        className={`${feature.highlight
                                            ? "font-semibold text-slate-900"
                                            : "text-gray-700"
                                            }`}
                                    >
                                        {feature.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Button */}
                    <RazorpayCheckout
                        amount={parseInt(data.featured.price.current)}
                        courseName={data.featured.name}
                        buttonText={data.featured.cta}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-5 rounded-xl font-bold text-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 mb-4"
                    />

                    {/* Guarantee */}
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <i className={`fas fa-${data.guarantee.icon} text-white text-xl`}></i>
                            </div>
                            <div>
                                <h5 className="font-bold text-lg text-green-900 mb-2">
                                    {data.guarantee.heading}
                                </h5>
                                <p className="text-green-800 text-sm leading-relaxed">
                                    {data.guarantee.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="text-center">
                        <p className="text-sm font-semibold text-gray-700 mb-3">
                            {data.paymentMethods.heading}
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mb-3">
                            {data.paymentMethods.methods && data.paymentMethods.methods.map((method, index) => (
                                <span
                                    key={index}
                                    className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 border border-gray-200"
                                >
                                    {method}
                                </span>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500">
                            <i className="fas fa-lock mr-1 text-green-600"></i>
                            {data.paymentMethods.note}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
