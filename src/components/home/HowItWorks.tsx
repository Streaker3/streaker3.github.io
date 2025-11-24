"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlugsConnected, Sliders, RocketLaunch, Lightbulb, Strategy } from "phosphor-react";

const steps = [
    {
        number: "01",
        title: "Understanding & Structuring",
        description: "Clarifying goals, requirements, and constraints to ensure the solution is technically feasible and aligned with user needs.",
        icon: <Lightbulb size={40} weight="thin" />,
    },
    {
        number: "02",
        title: "Designing & Building",
        description: "Creating clean UI, functional prototypes, and AI-driven logic with a strong focus on clarity and efficient interaction.",
        icon: <Strategy size={40} weight="thin" />,
    },
    {
        number: "03",
        title: "Delivery & Support",
        description: "Implementation guidance, code-ready assets, documentation, and optional ongoing iteration.",
        icon: <RocketLaunch size={40} weight="thin" />,
    },
];

import { GlowingShadow } from "@/components/ui/glowing-shadow";

export function HowItWorks() {
    return (
        <section id="process" className="py-32 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
                        Process
                    </h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">
                        From concept to code-ready design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="h-full"
                        >
                            <GlowingShadow className="h-full" disableHoverGlow>
                                <div className="p-8 flex flex-col h-full group">
                                    <div className="mb-8 text-accent origin-left">
                                        {step.icon}
                                    </div>
                                    <div className="text-4xl font-light text-white/30 mb-4 font-mono">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-medium text-white mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-text-muted leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </GlowingShadow>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
