import { Metadata } from 'next';
import { metadata as englishMetadata } from '@/content/course-english';
import MultiLanguageCoursePage from '../components/coursepage/MultiLanguageCoursePage';
import Script from 'next/script';

export const metadata: Metadata = {
    title: englishMetadata.title,
    description: englishMetadata.description,
    keywords: englishMetadata.keywords,
    openGraph: {
        title: englishMetadata.title,
        description: englishMetadata.description,
        type: 'website',
    },
};

export default function CourseDetailPage() {
    // Course Schema for SEO
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Complete Hindi Speaking Course Online",
        "description": "Learn Hindi from scratch with recorded video lessons. Beginner-friendly course with lifetime access and certificate.",
        "provider": {
            "@type": "Organization",
            "name": "Knowledge Duniya",
            "sameAs": "https://knowledgeduniya.com"
        },
        "courseMode": "online",
        "educationalLevel": "beginner",
        "language": "hi",
        "timeRequired": "P14W",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "5000",
            "bestRating": "5",
            "worstRating": "1"
        },
        "offers": {
            "@type": "Offer",
            "price": "2999",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://knowledgeduniya.com/courses/detail",
            "validFrom": "2024-01-01"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "online",
            "courseWorkload": "PT100H"
        }
    };

    // FAQ Schema for AEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is this Hindi course good for beginners?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, absolutely. This course is specifically designed for complete beginners with zero Hindi knowledge. We start from basic alphabets and pronunciation, then gradually build your skills to conversational fluency."
                }
            },
            {
                "@type": "Question",
                "name": "Can I learn Hindi through recorded videos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, recorded videos are highly effective for language learning. You can watch lessons multiple times, pause and replay difficult sections, and learn at your own comfortable pace."
                }
            },
            {
                "@type": "Question",
                "name": "Which Hindi course is best in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our Complete Hindi Speaking Course is designed specifically for South Indian learners and focuses on practical conversational skills. It includes 100+ video lessons, lifetime access, and completion certificate."
                }
            },
            {
                "@type": "Question",
                "name": "Does this Hindi course provide certificate?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you will receive a verified completion certificate after successfully completing all course modules."
                }
            }
        ]
    };

    // Review Schema
    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Complete Hindi Speaking Course Online",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "500"
        },
        "review": [
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Priya Ramesh"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "reviewBody": "Best course for learning Hindi online. The recorded video format was perfect for my busy schedule."
            }
        ]
    };

    return (
        <>
            {/* Schema Markup for SEO/AEO */}
            <Script
                id="course-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="review-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />

            <MultiLanguageCoursePage />
        </>
    );
}
