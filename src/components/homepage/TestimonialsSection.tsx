"use client";

interface TestimonialsProps {
    data: {
        heading: string;
        subheading: string;
        reviews: Array<{
            name: string;
            location: string;
            rating: number;
            text: string;
            course: string;
        }>;
    };
}

export default function TestimonialsSection({ data }: TestimonialsProps) {
    return (
        <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-gray-600">{data.subheading}</p>
                </div>

                {/* Reviews Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {data.reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <i key={i} className="fas fa-star text-yellow-400"></i>
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-700 leading-relaxed mb-6 italic">
                                "{review.text}"
                            </p>

                            {/* Reviewer Info */}
                            <div className="flex items-center justify-between border-t pt-4">
                                <div>
                                    <p className="font-bold text-slate-900">{review.name}</p>
                                    <p className="text-sm text-gray-500">
                                        <i className="fas fa-map-marker-alt mr-1"></i>
                                        {review.location}
                                    </p>
                                </div>
                                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                                    <i className="fas fa-check-circle mr-1"></i>
                                    {review.course}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
