"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/homepage/HeroSection";
import SocialProofStrip from "@/components/homepage/SocialProofStrip";
import WhyChooseSection from "@/components/homepage/WhyChooseSection";
import CurriculumSection from "@/components/homepage/CurriculumSection";
import DemoVideoSection from "@/components/homepage/DemoVideoSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import PricingSection from "@/components/homepage/PricingSection";
import FAQSection from "@/components/homepage/FAQSection";
import FooterTrustSection from "@/components/homepage/FooterTrustSection";

export default function MultiLanguageHomepage() {
    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        const loadContent = async () => {
            // Always load English content
            const module = await import("@/content/homepage-english");
            setContent(module);
        };
        loadContent();
    }, []);

    if (!content) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <i className="fas fa-spinner fa-spin text-4xl text-blue-600 mb-4"></i>
                    <p className="text-gray-600">Loading content...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <HeroSection data={content.hero} />
            <SocialProofStrip data={content.socialProof} />
            <WhyChooseSection data={content.whyChoose} />
            <CurriculumSection data={content.curriculum} />
            <DemoVideoSection data={content.demoVideo} />
            <TestimonialsSection data={content.testimonials} />
            <PricingSection data={content.pricing} />
            <FAQSection data={content.faq} />
            <FooterTrustSection data={content.footer} />
        </>
    );
}
