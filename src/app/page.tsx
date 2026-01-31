import type { Metadata } from 'next';
import MultiLanguageHomepage from '@/components/MultiLanguageHomepage';
import { metadata as englishMetadata } from '@/content/homepage-english';
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

// Server Component with metadata and schema
export default function Home() {
  // FAQ Schema for AEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to learn Hindi online from home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our course provides recorded video lessons that you can access anytime from your mobile or laptop. Simply enroll, get instant access, and start learning at your own pace."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best Hindi course in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our online Hindi course is designed specifically for beginners with zero knowledge. It includes lifetime access, practical speaking focus, and a verified completion certificate."
        }
      },
      {
        "@type": "Question",
        "name": "Can beginners learn Hindi online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our course starts from basic Hindi alphabets and gradually builds to conversational fluency. No prior Hindi knowledge is required."
        }
      }
    ]
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Complete Hindi Speaking Course Online",
    "description": "Learn Hindi online from scratch with recorded video lessons. Beginner-friendly course with lifetime access and certificate.",
    "provider": {
      "@type": "Organization",
      "name": "Knowledge Duniya"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "5000"
    },
    "offers": {
      "@type": "Offer",
      "price": "2999",
      "priceCurrency": "INR"
    }
  };

  return (
    <>
      {/* Schema Markup for SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <MultiLanguageHomepage />

    </>
  );
}
