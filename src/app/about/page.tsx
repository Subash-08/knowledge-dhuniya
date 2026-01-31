import { Metadata } from 'next';
import Script from 'next/script';
import AboutHero from './components/AboutHero';
import OurStory from './components/OurStory';
import MissionVision from './components/MissionVision';
import WhoWeAre from './components/WhoWeAre';
import Differentiators from './components/Differentiators';
import AudienceSection from './components/AudienceSection';
import ImpactStats from './components/ImpactStats';
import FounderProfile from './components/FounderProfile';
import TrustSupport from './components/TrustSupport';
import AboutCTA from './components/AboutCTA';
import {
    aboutHero,
    ourStory,
    missionVision,
    whoWeAre,
    differentiators,
    audience,
    impactStats,
    founderProfile,
    trustSupport,
    aboutCTA,
    metadata as aboutMetadata
} from '@/content/about-english';

export const metadata: Metadata = {
    title: aboutMetadata.title,
    description: aboutMetadata.description,
    keywords: aboutMetadata.keywords,
    openGraph: {
        title: 'About Knowledge Duniya - India\'s Trusted Hindi Learning Platform',
        description: '10+ years of experience helping 5000+ South Indian learners speak Hindi confidently.',
        type: 'website',
        url: 'https://knowledgeduniya.com/about',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Knowledge Duniya - Trusted Hindi Online Course',
        description: 'Learn about India\'s leading beginner-friendly Hindi course platform.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AboutPage() {
    // Organization Schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Knowledge Duniya",
        "alternateName": "Knowledge Duniya Hindi Course",
        "url": "https://knowledgeduniya.com",
        "logo": "https://knowledgeduniya.com/logo.png",
        "description": "India's leading online Hindi learning platform designed for South Indian learners. Beginner-friendly recorded video courses with lifetime access.",
        "foundingDate": "2014",
        "founder": {
            "@type": "Person",
            "name": "Rajesh Kumar Sharma",
            "jobTitle": "Certified Hindi Language Instructor"
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "areaServed": [
            { "@type": "State", "name": "Tamil Nadu" },
            { "@type": "State", "name": "Karnataka" },
            { "@type": "State", "name": "Telangana" },
            { "@type": "State", "name": "Andhra Pradesh" },
            { "@type": "State", "name": "Kerala" }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "500",
            "bestRating": "5"
        }
    };

    // AboutPage Schema
    const aboutPageSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Us - Knowledge Duniya Hindi Course",
        "url": "https://knowledgeduniya.com/about",
        "description": aboutMetadata.description,
        "mainEntity": {
            "@type": "EducationalOrganization",
            "name": "Knowledge Duniya"
        },
        "specialty": "Hindi Language Education for Beginners"
    };

    // Person Schema (Founder)
    const founderSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rajesh Kumar Sharma",
        "jobTitle": "Certified Hindi Language Instructor",
        "description": "Lead instructor at Knowledge Duniya with 10+ years of experience teaching Hindi to non-native speakers, specializing in South Indian learners.",
        "affiliation": {
            "@type": "EducationalOrganization",
            "name": "Knowledge Duniya"
        },
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Delhi University"
        },
        "hasCredential": [
            {
                "@type": "EducationalOccupationalCredential",
                "name": "Certified Hindi Language Instructor",
                "recognizedBy": {
                    "@type": "Organization",
                    "name": "National Institute of Open Schooling"
                }
            },
            {
                "@type": "EducationalOccupationalCredential",
                "name": "Master's Degree in Hindi Literature",
                "recognizedBy": {
                    "@type": "CollegeOrUniversity",
                    "name": "Delhi University"
                }
            }
        ]
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://knowledgeduniya.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://knowledgeduniya.com/about"
            }
        ]
    };

    return (
        <>
            {/* Schema Markup */}
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                strategy="beforeInteractive"
            />
            <Script
                id="aboutpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
                strategy="beforeInteractive"
            />
            <Script
                id="founder-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
                strategy="beforeInteractive"
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                strategy="beforeInteractive"
            />

            {/* Page Content - All 10 Sections */}
            <main>
                <AboutHero data={aboutHero} />
                <OurStory data={ourStory} />
                <MissionVision data={missionVision} />
                <WhoWeAre data={whoWeAre} />
                <Differentiators data={differentiators} />
                <AudienceSection data={audience} />
                <ImpactStats data={impactStats} />
                <FounderProfile data={founderProfile} />
                <TrustSupport data={trustSupport} />
                <AboutCTA data={aboutCTA} />
            </main>
        </>
    );
}
