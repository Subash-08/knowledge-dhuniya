"use client";

import { whyChooseContent } from "./content";
import Image from "next/image";
import Link from "next/link";

export default function WhyChooseSection() {
    return (
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Features & Stats */}
                    <div className="space-y-6">
                        {/* Why Choose Us Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                                {whyChooseContent.heading}
                            </h2>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {whyChooseContent.features.map((feature) => (
                                    <div key={feature.id} className="flex items-center gap-2">
                                        {feature.icon === "check-circle" && feature.highlighted && (
                                            <i className="fas fa-check-circle text-purple-500 text-lg"></i>
                                        )}
                                        {feature.icon === "check-circle" && !feature.highlighted && (
                                            <i className="fas fa-check-circle text-green-500 text-lg"></i>
                                        )}
                                        {feature.icon === "heart" && (
                                            <i className="fas fa-heart text-blue-500 text-lg"></i>
                                        )}
                                        {feature.icon === "circle" && (
                                            <i className="far fa-circle text-gray-400 text-lg"></i>
                                        )}
                                        <span
                                            className={`text-sm ${feature.highlighted
                                                    ? "text-slate-700 font-medium"
                                                    : "text-gray-400"
                                                }`}
                                        >
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Group Photo & Stats Card */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="relative h-48 md:h-56">
                                <Image
                                    src="/images/student-group.png"
                                    alt="Happy Students"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-200">
                                {whyChooseContent.stats.map((stat) => (
                                    <div key={stat.id} className="text-center py-6">
                                        <p className="text-3xl font-bold text-slate-800">
                                            {stat.number}
                                        </p>
                                        <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Video & Demo */}
                    <div className="space-y-6">
                        {/* Video Card */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="relative h-64 md:h-72 group cursor-pointer">
                                <Image
                                    src="/images/online-class.png"
                                    alt="Online Learning Experience"
                                    fill
                                    className="object-cover"
                                />
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                        <i className="fas fa-play text-blue-600 text-xl ml-1"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Demo Class Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                {whyChooseContent.demoClass.heading}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {whyChooseContent.demoClass.description}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                {whyChooseContent.demoClass.buttons.map((button, index) => (
                                    <Link
                                        key={index}
                                        href={button.link}
                                        className={`
                      px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300
                      ${button.primary
                                                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:scale-105"
                                                : "bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                                            }
                    `}
                                    >
                                        {!button.primary && (
                                            <i className="fab fa-whatsapp text-xl"></i>
                                        )}
                                        {button.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
