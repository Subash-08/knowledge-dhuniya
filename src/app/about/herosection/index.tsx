"use client";

import { heroContent } from "./content";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 py-20 px-6 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-10 right-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-1/3 right-1/2 w-4 h-4 bg-blue-300 rounded-full opacity-40"></div>
            <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-purple-300 rounded-full opacity-40"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-50"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                            {heroContent.heading.prefix}{" "}
                            <span className="text-blue-600">
                                {heroContent.heading.highlight}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            {heroContent.description}
                        </p>

                        <Link
                            href={heroContent.cta.link}
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            {heroContent.cta.text}
                        </Link>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative h-[300px] md:h-[400px]">
                        <Image
                            src="/images/about-hero.png"
                            alt="Knowledge Duniya Learning Platform"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
