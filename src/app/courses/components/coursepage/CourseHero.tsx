"use client";

import Link from "next/link";
import RazorpayCheckout from "./RazorpayCheckout";

interface CourseHeroProps {
    data: {
        badge: string;
        h1: string;
        valueProposition: string;
        trustBadges: Array<{
            icon: string;
            text: string;
        }>;
        rating: {
            stars: number;
            count: string;
        };
        price: {
            current: string;
            original: string;
            discount: string;
        };
        cta: {
            primary: string;
            secondary: string;
        };
    };
}

export default function CourseHero({ data }: CourseHeroProps) {
    return (
        <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white py-16 px-6 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400 opacity-10 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div>
                        {/* Badge */}
                        <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                            <i className="fas fa-star mr-2"></i>
                            {data.badge}
                        </div>

                        {/* H1 */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            {data.h1}
                        </h1>

                        {/* Value Proposition */}
                        <p className="text-xl text-blue-100 mb-6">{data.valueProposition}</p>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {data.trustBadges && data.trustBadges.map((badge, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 bg-white bg-opacity-10 px-4 py-3 rounded-lg backdrop-blur-sm"
                                >
                                    <i className={`fas fa-${badge.icon} text-xl`}></i>
                                    <span className="text-sm font-medium">{badge.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <i
                                        key={i}
                                        className={`fas fa-star ${i < Math.floor(data.rating.stars)
                                            ? "text-yellow-400"
                                            : "text-gray-400"
                                            }`}
                                    ></i>
                                ))}
                            </div>
                            <span className="text-lg font-semibold">{data.rating.stars}/5</span>
                            <span className="text-blue-200">({data.rating.count})</span>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <RazorpayCheckout
                                amount={parseInt(data.price.current)}
                                courseName="Complete Hindi Speaking Course"
                                buttonText={data.cta.primary}
                                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:scale-105"
                            />
                            <Link
                                href="#demo-video"
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 text-center"
                            >
                                {data.cta.secondary}
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Pricing Card */}
                    <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl">
                        {/* Discount Badge */}
                        <div className="bg-red-500 text-white px-4 py-2 rounded-lg inline-block mb-4 font-bold">
                            {data.price.discount}
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-gray-400 line-through text-2xl">
                                    ₹{data.price.original}
                                </span>
                                <span className="text-5xl font-bold text-blue-600">
                                    ₹{data.price.current}
                                </span>
                            </div>
                            <p className="text-gray-600">One-time payment, lifetime access</p>
                        </div>

                        {/* What's Included Preview */}
                        <div className="border-t border-gray-200 pt-6 mb-6">
                            <h3 className="font-bold text-lg mb-4">This Course Includes:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <i className="fas fa-check-circle text-green-500"></i>
                                    <span>100+ Video Lessons</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fas fa-check-circle text-green-500"></i>
                                    <span>Lifetime Access</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fas fa-check-circle text-green-500"></i>
                                    <span>Completion Certificate</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fas fa-check-circle text-green-500"></i>
                                    <span>Mobile & Laptop Support</span>
                                </li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <RazorpayCheckout
                            amount={parseInt(data.price.current)}
                            courseName="Complete Hindi Speaking Course"
                            buttonText={data.cta.primary}
                            className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
                        />

                        {/* Trust Badge */}
                        <p className="text-center text-sm text-gray-500 mt-4">
                            <i className="fas fa-lock mr-2"></i>
                            Secure payment via Razorpay
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
