"use client";

interface ImpactStatsProps {
    data: {
        heading: string;
        subheading: string;
        mainStats: Array<{
            icon: string;
            number: string;
            label: string;
            color: string;
        }>;
        regions: {
            title: string;
            list: string[];
        };
        outcomes: {
            title: string;
            stats: Array<{
                percentage: string;
                description: string;
            }>;
        };
    };
}

export default function ImpactStats({ data }: ImpactStatsProps) {
    const colorMap: Record<string, string> = {
        blue: "from-blue-600 to-blue-700",
        purple: "from-purple-600 to-purple-700",
        yellow: "from-yellow-500 to-orange-500",
        green: "from-green-600 to-green-700",
    };

    return (
        <section className="py-16 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-blue-100">{data.subheading}</p>
                </div>

                {/* Main Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {data.mainStats && data.mainStats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                                <i className={`fas fa-${stat.icon} text-4xl mb-3`}></i>
                                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                                <p className="text-sm text-blue-100">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Regions & Outcomes */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Regions Served */}
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <i className="fas fa-map-marker-alt"></i>
                            {data.regions.title}
                        </h3>
                        <ul className="space-y-3">
                            {data.regions.list && data.regions.list.map((region, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <i className="fas fa-check-circle text-green-300 mt-1"></i>
                                    <span className="text-blue-100">{region}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Learning Outcomes */}
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <i className="fas fa-chart-line"></i>
                            {data.outcomes.title}
                        </h3>
                        <div className="space-y-6">
                            {data.outcomes.stats && data.outcomes.stats.map((stat, index) => (
                                <div key={index}>
                                    <div className="flex items-baseline gap-3 mb-2">
                                        <span className="text-3xl font-bold text-yellow-300">
                                            {stat.percentage}
                                        </span>
                                        <span className="text-blue-100">of students</span>
                                    </div>
                                    <p className="text-blue-100 text-sm">{stat.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
