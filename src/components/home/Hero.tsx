"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassButton } from "@/components/ui/glass-button";
import { CaretDown } from "phosphor-react";
import { ShaderBackground } from "@/components/ui/shader-background";
import { Highlight } from "@/components/ui/hero-highlight";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-32 overflow-hidden">
            {/* Shader Background */}
            <ShaderBackground shiftY={-0.4} />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h1
                        className="text-5xl md:text-8xl tracking-tight text-white mb-8 leading-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <motion.span
                            className="text-4xl md:text-6xl font-[family-name:var(--font-outfit)] font-light text-transparent bg-clip-text bg-gradient-to-r from-electric-violet via-soft-neon-purple to-gentle-lavender block mb-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Hi, I'm
                        </motion.span>
                        <motion.span
                            className="font-[family-name:var(--font-space-grotesk)] font-bold text-white"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Felix
                        </motion.span>{" "}
                        <motion.span
                            className="font-[family-name:var(--font-dm-serif)] italic font-normal text-white"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            Giering
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto font-light leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                    >
                        I design and build clean, <Highlight className="text-white font-bold" delay={1.0}>AI-driven interfaces and tools</Highlight> that focus on clarity, performance, and practical user impact. My work brings together product thinking, bioinformatics logic, and <Highlight className="text-white font-bold" delay={2.0}>modern development</Highlight>.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        <GlassButton size="lg" variant="primary" onClick={() => window.location.href = '/contact'}>
                            Get started
                        </GlassButton>
                        <GlassButton size="lg" onClick={() => window.location.href = '/about'}>
                            My Background
                        </GlassButton>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted animate-bounce"
            >
                <CaretDown size={24} />
            </motion.div>
        </section>
    );
}
