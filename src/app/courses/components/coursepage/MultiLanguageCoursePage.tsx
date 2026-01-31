"use client";

import { useState, useEffect } from "react";
import CourseHero from "./CourseHero";
import WhoIsThisFor from "./WhoIsThisFor";
import LearningOutcomes from "./LearningOutcomes";
import CourseCurriculum from "./CourseCurriculum";
import HowItWorks from "./HowItWorks";
import InstructorSection from "./InstructorSection";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";

export default function MultiLanguageCoursePage() {
    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        const loadContent = async () => {
            // Always load English content
            const module = await import("@/content/course-english");
            setContent(module);
        };
        loadContent();
    }, []);

    if (!content) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg">Loading course details...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <CourseHero data={content.courseHero} />
            <WhoIsThisFor data={content.whoIsThisFor} />
            <LearningOutcomes data={content.learningOutcomes} />
            <CourseCurriculum data={content.curriculum} />
            <HowItWorks data={content.howItWorks} />
            <InstructorSection data={content.instructor} />
            <TestimonialsSection data={content.testimonials} />
            <PricingSection data={content.pricing} />
            <FAQSection data={content.faqs} />
            <FinalCTA data={content.finalCTA} />
        </div>
    );
}
