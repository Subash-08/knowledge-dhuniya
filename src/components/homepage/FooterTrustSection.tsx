"use client";

import Link from "next/link";

interface FooterTrustProps {
    data: {
        heading: string;
        subheading: string;
        trust: Array<{
            icon: string;
            title: string;
            description: string;
        }>;
        cta: {
            primary: string;
            secondary: string;
        };
    };
}

export default function FooterTrustSection({ data }: FooterTrustProps) {
    return (
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-xl text-blue-100">{data.subheading}</p>
                </div>

                {/* Trust Grid */}
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {data.trust.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className={`fas fa-${item.icon} text-2xl`}></i>
                            </div>
                            <h3 className="font-bold mb-2">{item.title}</h3>
                            <p className="text-sm text-blue-100">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/courses"
                        className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl text-center"
                    >
                        {data.cta.primary}
                    </Link>
                    <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                    >
                        <i className="fab fa-whatsapp text-xl"></i>
                        {data.cta.secondary}
                    </a>
                </div>
            </div>
        </section>
    );
}
