"use client";

interface OurStoryProps {
    data: {
        heading: string;
        sections: Array<{
            title: string;
            content?: string;
            points?: string[];
        }>;
    };
}

export default function OurStory({ data }: OurStoryProps) {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                    {data.heading}
                </h2>

                {/* Story Sections */}
                <div className="space-y-12">
                    {data.sections && data.sections.map((section, index) => (
                        <div key={index} className="relative">
                            {/* Timeline Dot (decorative) */}
                            <div className="absolute left-0 top-2 hidden md:block">
                                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                                {index < data.sections.length - 1 && (
                                    <div className="w-0.5 h-full bg-blue-200 ml-1.5 mt-2"></div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="md:ml-12">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <i className="fas fa-bookmark text-blue-600"></i>
                                    {section.title}
                                </h3>

                                {section.content && (
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        {section.content}
                                    </p>
                                )}

                                {section.points && section.points.length > 0 && (
                                    <ul className="space-y-3">
                                        {section.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                                                <span className="text-gray-700">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
