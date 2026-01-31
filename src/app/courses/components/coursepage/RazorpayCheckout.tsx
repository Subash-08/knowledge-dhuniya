"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface RazorpayCheckoutProps {
    amount: number;
    courseName: string;
    buttonText: string;
    className?: string;
}

// Razorpay script loader
const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
        if (typeof window !== "undefined" && (window as any).Razorpay) {
            resolve(true);
            return;
        }

        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

export default function RazorpayCheckout({
    amount,
    courseName,
    buttonText,
    className,
}: RazorpayCheckoutProps) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handlePayment = async () => {
        setLoading(true);

        try {
            // Load Razorpay script
            const res = await loadRazorpayScript();

            if (!res) {
                alert("Razorpay SDK failed to load. Please check your internet connection.");
                setLoading(false);
                return;
            }

            // For now, we'll use a demo order ID
            // In production, you'd call your API to create an order
            const demoOrderId = `order_demo_${Date.now()}`;

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_demo",
                amount: amount * 100, // Amount in paise
                currency: "INR",
                name: "Knowledge Duniya",
                description: courseName,
                order_id: demoOrderId,
                theme: {
                    color: "#2563eb", // Blue-600
                },
                handler: async function (response: any) {
                    // Payment successful
                    console.log("Payment successful", response);

                    // In production, verify payment on server
                    // For now, redirect to a success page
                    router.push("/courses/enrollment-success");
                },
                prefill: {
                    name: "",
                    email: "",
                    contact: "",
                },
                modal: {
                    ondismiss: function () {
                        setLoading(false);
                    },
                },
            };

            const razorpay = new (window as any).Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error("Payment error:", error);
            alert("Payment failed. Please try again.");
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handlePayment}
            disabled={loading}
            className={
                className ||
                "bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all duration-300"
            }
        >
            {loading ? (
                <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Processing...
                </>
            ) : (
                buttonText
            )}
        </button>
    );
}
