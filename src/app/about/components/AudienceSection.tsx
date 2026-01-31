"use client";

interface AudienceSectionProps {
    data: {
        heading: string;
        subheading: string;
        segments: Array<{
            emoji: string;
            title: string;
            description: string;
        }>;
        reassurance: {
            title: string;
            description: string;
        };
    };
}

export default function AudienceSection({ data }: AudienceSectionProps) {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-gray-600">{data.subheading}</p>
                </div>

                {/* Audience Segments */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {data.segments && data.segments.map((segment, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-4xl flex-shrink-0">
                                    {segment.emoji}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        {segment.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {segment.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Beginner Reassurance */}
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center max-w-3xl mx-auto">
                    <i className="fas fa-user-graduate text-green-600 text-4xl mb-4"></i>
                    <h3 className="text-2xl font-bold text-green-900 mb-4">
                        {data.reassurance.title}
                    </h3>
                    <p className="text-lg text-green-800 leading-relaxed">
                        {data.reassurance.description}
                    </p>
                </div>
            </div>
        </section>
    );
}
