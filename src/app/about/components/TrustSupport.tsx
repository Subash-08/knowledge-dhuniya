"use client";

interface TrustSupportProps {
    data: {
        heading: string;
        subheading: string;
        points: Array<{
            icon: string;
            title: string;
            description: string;
        }>;
    };
}

export default function TrustSupport({ data }: TrustSupportProps) {
    return (
        <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-green-50">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-gray-600">{data.subheading}</p>
                </div>

                {/* Trust Points Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.points && data.points.map((point, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className={`fas fa-${point.icon} text-white text-xl`}></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 mb-2">
                                        {point.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        <div className="text-center">
                            <i className="fas fa-shield-alt text-green-600 text-3xl mb-2"></i>
                            <p className="text-sm font-semibold text-gray-700">Secure Payment</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-lock text-blue-600 text-3xl mb-2"></i>
                            <p className="text-sm font-semibold text-gray-700">Data Protected</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-certificate text-purple-600 text-3xl mb-2"></i>
                            <p className="text-sm font-semibold text-gray-700">Certified Instructor</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-undo text-yellow-600 text-3xl mb-2"></i>
                            <p className="text-sm font-semibold text-gray-700">7-Day Refund</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
