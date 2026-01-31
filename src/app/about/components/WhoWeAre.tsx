"use client";

interface WhoWeAreProps {
    data: {
        heading: string;
        brandIdentity: string;
        philosophy: {
            title: string;
            points: string[];
        };
        experience: string[];
        commitment: string[];
    };
}

export default function WhoWeAre({ data }: WhoWeAreProps) {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                    {data.heading}
                </h2>

                {/* Brand Identity */}
                <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                    {data.brandIdentity}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Teaching Philosophy */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <i className="fas fa-lightbulb text-yellow-500 text-2xl"></i>
                            {data.philosophy.title}
                        </h3>
                        <ol className="space-y-4">
                            {data.philosophy.points && data.philosophy.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                        {index + 1}
                                    </span>
                                    <span className="text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Experience */}
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <i className="fas fa-award text-green-600 text-2xl"></i>
                            Our Experience
                        </h3>
                        <ul className="space-y-4">
                            {data.experience && data.experience.map((exp, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <i className="fas fa-check text-green-600 mt-1"></i>
                                    <span className="text-gray-700">{exp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Commitment */}
                <div className="bg-slate-900 text-white rounded-xl p-8">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <i className="fas fa-handshake text-blue-400 text-2xl"></i>
                        Our Commitment
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {data.commitment && data.commitment.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-green-400 mt-1"></i>
                                <span className="text-blue-100">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
