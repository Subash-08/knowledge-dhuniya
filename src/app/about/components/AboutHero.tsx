"use client";

interface AboutHeroProps {
    data: {
        h1: string;
        tagline: string;
        intro: string;
        stats: Array<{
            number: string;
            label: string;
        }>;
    };
}

export default function AboutHero({ data }: AboutHeroProps) {
    return (
        <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white py-20 px-6 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Tagline Badge */}
                <div className="text-center mb-6">
                    <span className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold">
                        {data.tagline}
                    </span>
                </div>

                {/* H1 Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
                    {data.h1}
                </h1>

                {/* Intro Paragraph */}
                <p className="text-lg md:text-xl text-center mb-12 leading-relaxed max-w-4xl mx-auto text-blue-50">
                    {data.intro}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto">
                    {data.stats && data.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                                <p className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</p>
                                <p className="text-sm md:text-base text-blue-100">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div className="text-center mt-16">
                    <i className="fas fa-chevron-down text-2xl animate-bounce text-blue-200"></i>
                </div>
            </div>
        </section>
    );
}
