"use client";

import { useState } from "react";

interface FAQProps {
    data: {
        heading: string;
        subheading: string;
        questions: Array<{
            question: string;
            answer: string;
        }>;
    };
}

export default function FAQSection({ data }: FAQProps) {
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
                    {data.questions.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-slate-900 pr-4">
                                    {item.question}
                                </span>
                                <i
                                    className={`fas fa-chevron-down text-blue-600 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <div className="px-6 pb-5 pt-2">
                                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
