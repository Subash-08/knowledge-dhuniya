"use client";

import Link from "next/link";

interface HeroProps {
    data: {
        superheading: string;
        heading: string;
        subheading: string;
        benefits: string[];
        stats: {
            students: string;
            studentsLabel: string;
            experience: string;
            experienceLabel: string;
            rating: string;
            ratingLabel: string;
        };
        cta: {
            primary: string;
            secondary: string;
        };
    };
}

export default function HeroSection({ data }: HeroProps) {
    return (
        <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white py-20 px-6 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400 opacity-10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Superheading */}
                    <p className="text-blue-200 font-semibold mb-3">{data.superheading}</p>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        {data.heading}
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                        {data.subheading}
                    </p>

                    {/* Benefits List */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                        {data.benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-lg backdrop-blur-sm"
                            >
                                <i className="fas fa-check-circle text-green-300"></i>
                                <span className="text-sm md:text-base">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <Link
                            href="/courses"
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
                        >
                            {data.cta.primary}
                        </Link>
                        <Link
                            href="#demo-video"
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                        >
                            {data.cta.secondary}
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                        <div className="text-center">
                            <p className="text-4xl font-bold mb-2">{data.stats.students}</p>
                            <p className="text-blue-200">{data.stats.studentsLabel}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold mb-2">{data.stats.experience}</p>
                            <p className="text-blue-200">{data.stats.experienceLabel}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold mb-2">{data.stats.rating}</p>
                            <p className="text-blue-200">{data.stats.ratingLabel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
