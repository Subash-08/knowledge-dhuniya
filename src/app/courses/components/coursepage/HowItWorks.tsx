"use client";

interface HowItWorksProps {
    data: {
        heading: string;
        subheading: string;
        steps: Array<{
            number: string;
            title: string;
            description: string;
            icon: string;
        }>;
    };
}

export default function HowItWorks({ data }: HowItWorksProps) {
    return (
        <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-gray-600">{data.subheading}</p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 to-purple-300 -translate-y-1/2"></div>

                    {/* Steps Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
                        {data.steps && data.steps.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Number Circle */}
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 relative z-10 shadow-lg">
                                    {step.number}
                                </div>

                                {/* Content Card */}
                                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <i className={`fas fa-${step.icon} text-blue-600 text-xl`}></i>
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-900 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
