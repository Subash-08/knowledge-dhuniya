"use client";

interface LearningOutcomesProps {
    data: {
        heading: string;
        subheading: string;
        outcomes: Array<{
            title: string;
            description: string;
            icon: string;
        }>;
    };
}

export default function LearningOutcomes({ data }: LearningOutcomesProps) {
    return (
        <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-gray-600">{data.subheading}</p>
                </div>

                {/* Outcomes Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.outcomes && data.outcomes.map((outcome, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                                <i className={`fas fa-${outcome.icon} text-white text-2xl`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {outcome.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {outcome.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
