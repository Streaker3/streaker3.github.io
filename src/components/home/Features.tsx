"use client";

import React from "react";
import { motion } from "framer-motion";
import { PenNib, Aperture, Brain, Code, Layout, Lightning } from "phosphor-react";

const features = [
    {
        title: "UX & Interface Design",
        description: "Clear, functional user flows with a strong logical foundation.",
        icon: <Layout size={28} />,
    },
    {
        title: "Interaction & Motion",
        description: "Modern UI patterns and smooth micro-interactions.",
        icon: <Lightning size={28} />,
    },
    {
        title: "AI Product Integration",
        description: "Practical AI features focusing on clarity, reliability, and trust.",
        icon: <Brain size={28} />,
    },
    {
        title: "Prototyping & Support",
        description: "Developer-ready components, tokens, and handoff packages.",
        icon: <Code size={28} />,
    },
];

export function Features() {
    return (
        <section className="py-24 border-y border-white/5 bg-surface/30 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-start"
                        >
                            <div className="mb-4 text-accent-2 p-3 bg-white/5 rounded-lg">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
