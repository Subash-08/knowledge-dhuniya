"use client";

import { useState } from "react";

interface DemoVideoProps {
    data: {
        heading: string;
        subheading: string;
        description: string;
        cta: string;
    };
}

export default function DemoVideoSection({ data }: DemoVideoProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section id="demo-video" className="py-16 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-gray-600 mb-2">{data.subheading}</p>
                    <p className="text-gray-500">{data.description}</p>
                </div>

                {/* Video Player */}
                <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-2xl">
                    {!isPlaying ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900 bg-opacity-50">
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="group w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
                                aria-label={data.cta}
                            >
                                <i className="fas fa-play text-blue-600 text-3xl ml-1"></i>
                            </button>
                        </div>
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white text-lg">Video Player Placeholder</p>
                            {/* Replace with actual video player component */}
                        </div>
                    )}

                    {/* Thumbnail Background */}
                    <div className="flex items-center justify-center h-full">
                        <div className="text-center text-gray-400">
                            <i className="fas fa-video text-6xl mb-4 opacity-30"></i>
                            <p className="text-sm">Demo Video</p>
                        </div>
                    </div>
                </div>

                {/* CTA Below Video */}
                <div className="text-center mt-8">
                    <p className="text-gray-600">
                        <i className="fas fa-info-circle mr-2"></i>
                        No registration required to watch the demo
                    </p>
                </div>
            </div>
        </section>
    );
}
