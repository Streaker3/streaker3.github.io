"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CaretDown } from "phosphor-react";

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: "Small projects: 1–2 weeks. Larger prototypes: 3–6 weeks.",
    },
    {
        question: "Do you work with early-stage teams?",
        answer: "Yes, especially small teams and student-led projects.",
    },
    {
        question: "What tools do you use?",
        answer: "React Native (Expo), JS, R, GitHub, LaTeX, Figma",
    },
    {
        question: "Can you help with front-end development?",
        answer: "Yes. I build simple front-end features and prototypes.",
    },
    {
        question: "Do you offer design systems?",
        answer: "Yes, including tokens, components, and documentation.",
    },
    {
        question: "What's your working timezone?",
        answer: "Central European Time (CET).",
    },
];



export function FAQ() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                        Common Questions
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="w-full border border-white/5 rounded-xl bg-surface/50 hover:bg-surface/80 hover:border-electric-violet/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all duration-300">
                            <div className="w-full overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className="text-lg font-medium text-white">
                                        {faq.question}
                                    </span>
                                    <CaretDown
                                        size={20}
                                        className={`text-text-muted transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                                    />
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openIndex === index ? "auto" : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-text-muted leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
