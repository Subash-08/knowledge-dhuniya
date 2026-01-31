export const whyChooseContent = {
    heading: "Why Choose Us?",
    features: [
        {
            id: 1,
            text: "Proven Results",
            icon: "check-circle",
            highlighted: true,
        },
        {
            id: 2,
            text: "Engaging Expertise",
            icon: "check-circle",
            highlighted: true,
        },
        {
            id: 3,
            text: "Interest in Basics",
            icon: "heart",
            highlighted: true,
        },
        {
            id: 4,
            text: "Focus on Timings",
            icon: "circle",
            highlighted: false,
        },
        {
            id: 5,
            text: "See as Benefits",
            icon: "circle",
            highlighted: false,
        },
        {
            id: 6,
            text: "Well Cater Convenco",
            icon: "circle",
            highlighted: false,
        },
        {
            id: 7,
            text: "Restricted Teaching",
            icon: "circle",
            highlighted: false,
        },
        {
            id: 8,
            text: "000000 Sharing Courses",
            icon: "circle",
            highlighted: false,
        },
    ],
    stats: [
        {
            id: 1,
            number: "1000+",
            label: "Diverse Courses",
        },
        {
            id: 2,
            number: "5000+",
            label: "Verified Classes",
        },
    ],
    demoClass: {
        heading: "Demo Class",
        description:
            "Osservidiya siri siya na spelindh compsrt, sserrivatigelise consumstiosttisistiation.",
        buttons: [
            {
                text: "Enroll Now",
                link: "/courses",
                primary: true,
            },
            {
                text: "WhatsApp Enquiry",
                link: "https://wa.me/",
                primary: false,
            },
        ],
    },
} as const;
