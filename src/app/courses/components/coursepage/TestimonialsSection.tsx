"use client";

interface TestimonialsSectionProps {
    data: {
        heading: string;
        subheading: string;
        averageRating: number;
        totalReviews: string;
        reviews: Array<{
            name: string;
            location: string;
            occupation: string;
            rating: number;
            date: string;
            review: string;
            helpful: number;
        }>;
    };
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
    return (
        <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">{data.subheading}</p>

                    {/* Overall Rating */}
                    <div className="flex items-center justify-center gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-5xl font-bold text-blue-600">
                                    {data.averageRating}
                                </span>
                                <i className="fas fa-star text-yellow-400 text-3xl"></i>
                            </div>
                            <p className="text-gray-600">{data.totalReviews} verified reviews</p>
                        </div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {data.reviews && data.reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <i
                                        key={i}
                                        className={`fas fa-star ${i < review.rating ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                    ></i>
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-700 leading-relaxed mb-6 italic">
                                "{review.review}"
                            </p>

                            {/* Reviewer Info */}
                            <div className="flex items-start justify-between border-t pt-4">
                                <div>
                                    <p className="font-bold text-slate-900">{review.name}</p>
                                    <p className="text-sm text-gray-500">{review.occupation}</p>
                                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                        <i className="fas fa-map-marker-alt text-xs"></i>
                                        {review.location}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400">{review.date}</p>
                                    <p className="text-xs text-gray-500 mt-2">
                                        <i className="fas fa-thumbs-up text-blue-600 mr-1"></i>
                                        {review.helpful} helpful
                                    </p>
                                </div>
                            </div>

                            {/* Verified Badge */}
                            <div className="mt-4">
                                <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                                    <i className="fas fa-check-circle"></i>
                                    Verified Student
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
