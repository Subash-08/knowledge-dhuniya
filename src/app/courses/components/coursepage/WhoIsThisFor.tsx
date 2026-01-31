"use client";

interface WhoIsThisForProps {
    data: {
        heading: string;
        description: string;
        audience: Array<{
            title: string;
            description: string;
            icon: string;
        }>;
        reassurance: string;
    };
}

export default function WhoIsThisFor({ data }: WhoIsThisForProps) {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {data.description}
                    </p>
                </div>

                {/* Audience Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {data.audience && data.audience.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                                <i className={`fas fa-${item.icon} text-white text-2xl`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Reassurance */}
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                        <i className="fas fa-info-circle text-green-600 text-2xl mt-1"></i>
                        <p className="text-gray-700 text-lg">{data.reassurance}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
