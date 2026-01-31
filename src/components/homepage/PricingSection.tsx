"use client";

import Link from "next/link";

interface PricingProps {
    data: {
        heading: string;
        subheading: string;
        plan: {
            name: string;
            price: string;
            originalPrice: string;
            discount: string;
            features: string[];
            cta: string;
            guarantee: string;
        };
        trustBadges: string[];
    };
}

export default function PricingSection({ data }: PricingProps) {
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
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto">
                    {/* Plan Name & Discount */}
                    <div className="text-center mb-8">
                        <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                            {data.plan.discount}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            {data.plan.name}
                        </h3>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <span className="text-gray-400 line-through text-2xl">
                                ₹{data.plan.originalPrice}
                            </span>
                            <span className="text-5xl font-bold text-blue-600">
                                ₹{data.plan.price}
                            </span>
                        </div>
                        <p className="text-gray-600">One-time payment only</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                        {data.plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-green-500 text-xl mt-0.5"></i>
                                <span className="text-gray-700">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                        href="/courses"
                        className="block w-full bg-blue-600 text-white text-center px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
                    >
                        {data.plan.cta}
                    </Link>

                    {/* Guarantee */}
                    <p className="text-center text-sm text-gray-600">
                        <i className="fas fa-shield-alt mr-2 text-green-500"></i>
                        {data.plan.guarantee}
                    </p>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
                    {data.trustBadges.map((badge, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg p-4 text-center"
                        >
                            <i className="fas fa-check text-green-500 mb-2"></i>
                            <p className="text-sm font-medium text-gray-700">{badge}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
