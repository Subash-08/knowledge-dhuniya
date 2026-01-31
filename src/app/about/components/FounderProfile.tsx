"use client";

interface FounderProfileProps {
    data: {
        heading: string;
        name: string;
        title: string;
        subtitle: string;
        image: string;
        background: string;
        approach: {
            title: string;
            quote: string;
            points: string[];
        };
        motivation: string;
        credentials: string[];
    };
}

export default function FounderProfile({ data }: FounderProfileProps) {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                    {data.heading}
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Image & Basic Info */}
                    <div>
                        {/* Placeholder for founder image */}
                        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 mb-6 text-center">
                            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold mb-4">
                                {data.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                {data.name}
                            </h3>
                            <p className="text-blue-600 font-semibold mb-1">{data.title}</p>
                            <p className="text-gray-600">{data.subtitle}</p>
                        </div>

                        {/* Background */}
                        <div className="bg-slate-50 rounded-xl p-6">
                            <h4 className="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                                <i className="fas fa-user-tie text-blue-600"></i>
                                Background & Experience
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                                {data.background}
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Approach, Motivation, Credentials */}
                    <div className="space-y-6">
                        {/* Teaching Approach */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                            <h4 className="font-bold text-lg text-slate-900 mb-4">
                                {data.approach.title}
                            </h4>
                            <div className="bg-white rounded-lg p-6 mb-4">
                                <i className="fas fa-quote-left text-blue-600 text-2xl mb-3 block"></i>
                                <p className="text-lg italic text-gray-700 mb-3">
                                    {data.approach.quote}
                                </p>
                                <i className="fas fa-quote-right text-blue-600 text-2xl text-right block"></i>
                            </div>
                            <ul className="space-y-3">
                                {data.approach.points && data.approach.points.map((point, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <i className="fas fa-arrow-right text-blue-600 mt-1"></i>
                                        <span className="text-gray-700">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Personal Motivation */}
                        <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6">
                            <h4 className="font-bold text-lg text-green-900 mb-3">
                                Personal Motivation
                            </h4>
                            <p className="text-green-800 leading-relaxed">
                                "{data.motivation}"
                            </p>
                        </div>

                        {/* Credentials */}
                        <div className="bg-slate-900 text-white rounded-xl p-6">
                            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <i className="fas fa-certificate text-yellow-400"></i>
                                Credentials & Authority
                            </h4>
                            <ul className="space-y-3">
                                {data.credentials && data.credentials.map((cred, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <i className="fas fa-check-circle text-green-400 mt-1"></i>
                                        <span className="text-blue-100">{cred}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
