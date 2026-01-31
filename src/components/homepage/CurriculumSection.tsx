"use client";

interface CurriculumProps {
    data: {
        heading: string;
        subheading: string;
        modules: Array<{
            level: string;
            duration: string;
            topics: string[];
        }>;
    };
}

export default function CurriculumSection({ data }: CurriculumProps) {
    return (
        <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-gray-600">{data.subheading}</p>
                </div>

                {/* Modules */}
                <div className="space-y-6">
                    {data.modules.map((module, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                <h3 className="text-2xl font-bold text-slate-900">
                                    {module.level}
                                </h3>
                                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mt-2 md:mt-0 inline-block">
                                    {module.duration}
                                </span>
                            </div>

                            <ul className="grid md:grid-cols-2 gap-3">
                                {module.topics.map((topic, topicIndex) => (
                                    <li key={topicIndex} className="flex items-start gap-3">
                                        <i className="fas fa-check-circle text-green-500 mt-1"></i>
                                        <span className="text-gray-700">{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
