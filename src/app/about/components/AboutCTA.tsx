"use client";

import Link from "next/link";

interface AboutCTAProps {
    data: {
        heading: string;
        subheading: string;
        readonly ctas: ReadonlyArray<{
            text: string;
            link: string;
            style: 'primary' | 'secondary' | 'tertiary';
            icon: string;
        }>;
    };
}

export default function AboutCTA({ data }: AboutCTAProps) {
    const getButtonStyle = (style: string) => {
        switch (style) {
            case 'primary':
                return 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl';
            case 'secondary':
                return 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50';
            case 'tertiary':
                return 'bg-green-500 text-white hover:bg-green-600';
            default:
                return '';
        }
    };

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white">
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {data.heading}
                </h2>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-12">
                    {data.subheading}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {data.ctas && data.ctas.map((cta, index) => (
                        <Link
                            key={index}
                            href={cta.link}
                            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 ${getButtonStyle(cta.style)}`}
                        >
                            <i className={`fab fa-${cta.icon} text-xl`}></i>
                            {cta.text}
                        </Link>
                    ))}
                </div>

                {/* Additional Trust Message */}
                <div className="mt-12 text-center">
                    <p className="text-blue-100 mb-4">
                        <i className="fas fa-users text-2xl mr-2"></i>
                        Join 5,000+ successful Hindi learners today
                    </p>
                    <div className="flex justify-center items-center gap-6 text-sm text-blue-200">
                        <span><i className="fas fa-check-circle mr-2"></i>Lifetime Access</span>
                        <span><i className="fas fa-check-circle mr-2"></i>7-Day Refund</span>
                        <span><i className="fas fa-check-circle mr-2"></i>24/7 Support</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
