"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "phosphor-react";
import { Button } from "@/components/ui/Button";

const plans = [
    {
        name: "Hourly",
        description: "Perfect for quick consultations, audits, or small fixes.",
        price: "$150",
        unit: "/hour",
        features: [
            "Design audits",
            "UX consultation",
            "Quick prototyping",
            "Code review",
        ],
        cta: "Book a session",
        recommended: false,
    },
    {
        name: "Project",
        description: "Fixed-scope engagement for defined product initiatives.",
        price: "Custom",
        unit: "starting at $5k",
        features: [
            "End-to-end product design",
            "Design system creation",
            "Interactive prototypes",
            "Developer handoff",
        ],
        cta: "Request proposal",
        recommended: false,
    },
    {
        name: "Retainer",
        description: "Ongoing partnership for startups needing a lead designer.",
        price: "$8k",
        unit: "/month",
        features: [
            "Dedicated design lead",
            "Unlimited requests",
            "Priority support",
            "Strategic planning",
            "Slack integration",
        ],
        cta: "Apply for spot",
        recommended: true,
    },
];

export function Pricing() {
    return null;
}
