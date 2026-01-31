"use client";

interface MissionVisionProps {
    data: {
        mission: {
            title: string;
            statement: string;
            description: string;
            points: string[];
        };
        vision: {
            title: string;
            statement: string;
            description: string;
            points: string[];
        };
    };
}

export default function MissionVision({ data }: MissionVisionProps) {
    return (
        <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                <i className="fas fa-bullseye text-white text-xl"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                {data.mission.title}
                            </h2>
                        </div>

                        <p className="text-lg font-semibold text-blue-600 mb-4">
                            {data.mission.statement}
                        </p>

                        <p className="text-gray-700 mb-4">
                            {data.mission.description}
                        </p>

                        <ul className="space-y-3">
                            {data.mission.points && data.mission.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <i className="fas fa-arrow-right text-blue-600 mt-1"></i>
                                    <span className="text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Vision */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                <i className="fas fa-eye text-white text-xl"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                {data.vision.title}
                            </h2>
                        </div>

                        <p className="text-lg font-semibold text-purple-600 mb-4">
                            {data.vision.statement}
                        </p>

                        <p className="text-gray-700 mb-4">
                            {data.vision.description}
                        </p>

                        <ul className="space-y-3">
                            {data.vision.points && data.vision.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <i className="fas fa-arrow-right text-purple-600 mt-1"></i>
                                    <span className="text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
