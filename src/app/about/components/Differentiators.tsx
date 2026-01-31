"use client";

interface DifferentiatorsProps {
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

export default function Differentiators({ data }: DifferentiatorsProps) {
    return (
        <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-purple-50">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-gray-600">{data.subheading}</p>
                </div>

                {/* Differentiators Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.points && data.points.map((point, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                                <i className={`fas fa-${point.icon} text-white text-2xl`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {point.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
