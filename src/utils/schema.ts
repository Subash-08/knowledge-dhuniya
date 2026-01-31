// Schema Markup Generator for SEO/AEO Optimization
// Use this to generate JSON-LD structured data for better search visibility

export const generateFAQSchema = (faqData: any) => {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.questions.map((item: any) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };
};

export const generateCourseSchema = (courseData: any) => {
    return {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Complete Hindi Speaking Course Online",
        description: "Learn Hindi online from scratch with recorded video lessons. Beginner-friendly course with lifetime access and certificate.",
        provider: {
            "@type": "Organization",
            name: "Knowledge Duniya",
            sameAs: "https://knowledgeduniya.com",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "5000",
            bestRating: "5",
            worstRating: "1",
        },
        offers: {
            "@type": "Offer",
            category: "Paid",
            price: courseData.price,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
        },
        educationalLevel: "Beginner to Advanced",
        inLanguage: "hi",
        courseMode: "Online",
        hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "Online",
            courseWorkload: "PT14W",
        },
    };
};

export const generateOrganizationSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Knowledge Duniya",
        description: "Online Hindi learning platform offering recorded video courses for beginners",
        url: "https://knowledgeduniya.com",
        logo: "https://knowledgeduniya.com/logo.png",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "5000",
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            availableLanguage: ["en", "hi", "ta"],
        },
    };
};

export const generateBreadcrumbSchema = (page: string) => {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://knowledgeduniya.com",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: page,
                item: `https://knowledgeduniya.com/${page.toLowerCase()}`,
            },
        ],
    };
};

export const generateReviewSchema = (reviews: any[]) => {
    return reviews.map((review) => ({
        "@context": "https://schema.org",
        "@type": "Review",
        author: {
            "@type": "Person",
            name: review.name,
        },
        reviewRating: {
            "@type": "Rating",
            ratingValue: review.rating,
            bestRating: "5",
            worstRating: "1",
        },
        reviewBody: review.text,
        itemReviewed: {
            "@type": "Course",
            name: "Complete Hindi Speaking Course Online",
        },
    }));
};

// Helper function to inject schema into page
export const injectSchema = (schema: object) => {
    if (typeof window !== "undefined") {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
    }
};
