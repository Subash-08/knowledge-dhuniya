"use client";

import { useState } from "react";

interface FAQSectionProps {
    data: {
        heading: string;
        subheading: string;
        questions: Array<{
            question: string;
            answer: string;
        }>;
    };
}

export default function FAQSection({ data }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-gray-600">{data.subheading}</p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {data.questions && data.questions.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-slate-900 pr-4 text-lg">
                                    {item.question}
                                </span>
                                <i
                                    className={`fas fa-chevron-down text-blue-600 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Still Have Questions CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
                    >
                        <i className="fab fa-whatsapp text-xl"></i>
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
