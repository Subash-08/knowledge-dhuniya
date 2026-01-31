"use client";

interface SocialProofProps {
    data: {
        items: Array<{
            number: string;
            label: string;
        }>;
    };
}

export default function SocialProofStrip({ data }: SocialProofProps) {
    return (
        <section className="bg-slate-50 py-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {data.items.map((item, index) => (
                        <div key={index} className="text-center">
                            <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                                {item.number}
                            </p>
                            <p className="text-sm text-gray-600">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
