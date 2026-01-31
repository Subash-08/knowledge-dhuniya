"use client";

interface WhyChooseProps {
    data: {
        heading: string;
        subheading: string;
        benefits: Array<{
            title: string;
            description: string;
            icon: string;
        }>;
    };
}

export default function WhyChooseSection({ data }: WhyChooseProps) {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {data.subheading}
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                                <i className={`fas fa-${benefit.icon} text-white text-2xl`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
