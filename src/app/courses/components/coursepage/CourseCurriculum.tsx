"use client";

import { useState } from "react";

interface CourseCurriculumProps {
    data: {
        heading: string;
        subheading: string;
        totalModules: number;
        totalLessons: string;
        totalDuration: string;
        modules: Array<{
            level: string;
            duration: string;
            lessons: number;
            topics: Array<{
                title: string;
                subtopics: string[];
            }>;
        }>;
    };
}

export default function CourseCurriculum({ data }: CourseCurriculumProps) {
    const [expandedModule, setExpandedModule] = useState<number>(0);

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">{data.subheading}</p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-blue-600">{data.totalModules}</p>
                            <p className="text-gray-600">Modules</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-blue-600">{data.totalLessons}</p>
                            <p className="text-gray-600">Lessons</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-blue-600">{data.totalDuration}</p>
                            <p className="text-gray-600">Duration</p>
                        </div>
                    </div>
                </div>

                {/* Modules Accordion */}
                <div className="space-y-4">
                    {data.modules && data.modules.map((module, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl overflow-hidden border border-gray-200"
                        >
                            {/* Module Header */}
                            <button
                                onClick={() =>
                                    setExpandedModule(expandedModule === index ? -1 : index)
                                }
                                className="w-full px-8 py-6 flex items-center justify-between hover:bg-white hover:bg-opacity-50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        {index + 1}
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-xl font-bold text-slate-900">
                                            {module.level}
                                        </h3>
                                        <p className="text-gray-600">
                                            {module.lessons} lessons • {module.duration}
                                        </p>
                                    </div>
                                </div>
                                <i
                                    className={`fas fa-chevron-down text-blue-600 transition-transform duration-300 ${expandedModule === index ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </button>

                            {/* Module Content */}
                            {expandedModule === index && (
                                <div className="px-8 pb-6 bg-white">
                                    <div className="space-y-6">
                                        {module.topics && module.topics.map((topic, topicIndex) => (
                                            <div key={topicIndex}>
                                                <h4 className="font-bold text-lg text-slate-900 mb-3">
                                                    {topic.title}
                                                </h4>
                                                <ul className="space-y-2">
                                                    {topic.subtopics && topic.subtopics.map((subtopic, subIndex) => (
                                                        <li key={subIndex} className="flex items-start gap-3">
                                                            <i className="fas fa-check-circle text-green-500 mt-1"></i>
                                                            <span className="text-gray-700">{subtopic}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
