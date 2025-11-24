"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretLeft, CaretRight, Quotes } from "phosphor-react";

const testimonials = [
    {
        id: 1,
        quote: "Felix transformed our complex data into a clean, intuitive interface. His understanding of AI workflows is unmatched.",
        author: "Sarah Chen",
        role: "CTO",
        company: "DataFlow AI",
        impact: "+28% user activation",
    },
    {
        id: 2,
        quote: "The design system Felix built allowed us to scale our product team from 2 to 10 designers without losing consistency.",
        author: "Mark Davis",
        role: "VP of Product",
        company: "FinTech Solutions",
        impact: "3x faster feature shipping",
    },
    {
        id: 3,
        quote: "Exceptional attention to detail. The motion design added a layer of polish that set our app apart from competitors.",
        author: "Elena Rodriguez",
        role: "Founder",
        company: "HealthTech Inc.",
        impact: "Featured in App Store",
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(next, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-surface/30 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute -top-10 -left-10 text-accent/10">
                        <Quotes size={120} weight="fill" />
                    </div>

                    <div className="relative z-10 min-h-[300px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-center"
                            >
                                <p className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
                                    "{testimonials[currentIndex].quote}"
                                </p>

                                <div className="flex flex-col items-center space-y-2">
                                    <h4 className="text-lg font-medium text-white">
                                        {testimonials[currentIndex].author}
                                    </h4>
                                    <p className="text-text-muted text-sm">
                                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                                    </p>
                                    <div className="mt-4 inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                                        {testimonials[currentIndex].impact}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center items-center space-x-4 mt-12">
                        <button
                            onClick={prev}
                            className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-text-muted hover:text-white transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <CaretLeft size={24} />
                        </button>
                        <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-accent" : "bg-white/20 hover:bg-white/40"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-text-muted hover:text-white transition-colors"
                            aria-label="Next testimonial"
                        >
                            <CaretRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
