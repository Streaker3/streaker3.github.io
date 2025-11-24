"use client";

import React from "react";
import { motion } from "framer-motion";
import { DownloadSimple, Briefcase, GraduationCap } from "phosphor-react";
import { GlassButton } from "@/components/ui/glass-button";
import { ShaderBackground } from "@/components/ui/shader-background";
import { Highlight } from "@/components/ui/hero-highlight";

const experience = [
    {
        year: "2025 — Present",
        role: "Lab Assistance Analytical Development",
        company: "CureVac",
        description: "Working student position supporting analytical development processes.",
    },
    {
        year: "2022",
        role: "Project Assistance",
        company: "wpd GmbH",
        description: "4-week role supporting organizational tasks and document management.",
    },
    {
        year: "2021",
        role: "Internship",
        company: "Bosch",
        description: "One-week engineering-focused internship gaining insights into technical workflows.",
    },
];

const skills = {
    "Product Strategy": ["User Research", "Competitive Analysis", "Problem Structuring"],
    "Design": ["UI/UX", "Prototyping", "Figma", "Photoshop", "Design Systems"],
    "Technical": ["Java", "R", "Scala", "React Native (Expo)", "Git/GitHub", "API basics"],
    "AI & Emerging": ["Prompt Design", "LLM Integration", "AI UX Patterns"],
};

export default function About() {
    return (
        <main className="pt-32 pb-20 min-h-screen relative overflow-hidden">
            <ShaderBackground shiftY={0.2} />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            About Me
                        </h1>
                        <div className="w-20 h-1 bg-accent rounded-full mb-8" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                        <div className="md:col-span-1">
                            <div className="aspect-square rounded-2xl overflow-hidden relative mb-6 bg-gradient-to-br from-electric-violet via-soft-neon-purple to-gentle-lavender p-1">
                                <div className="w-full h-full bg-surface rounded-xl overflow-hidden relative">
                                    {/* Placeholder for Avatar */}
                                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
                                        FG
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <GlassButton onClick={() => window.location.href = '/contact'}>
                                    Get in touch
                                </GlassButton>
                            </div>
                        </div>

                        <div className="md:col-span-2 space-y-6 text-white leading-relaxed text-lg">
                            <p>
                                I'm Felix Giering, a <Highlight className="text-white font-bold" delay={0.5}>Product Designer and Developer</Highlight> with a background in bioinformatics. I bridge the gap between complex data logic and intuitive user experiences.
                            </p>
                            <p>
                                My journey started in school learning about IT, and creating my first games. I then found my second passion in biology. This led me to study <Highlight className="text-white font-bold" delay={1.0}>bioinformatics</Highlight> and learn about the power of data.
                            </p>
                            <p>
                                I have <Highlight className="text-white font-bold" delay={1.5}>experience working with companies</Highlight> like CureVac, wpd GmbH, and Bosch, where I was able to learn a lot about the industry and the power of data.
                            </p>
                            <p>
                                When I'm not coding or designing, you can find me exploring new tech, reading about <Highlight className="text-white font-bold" delay={2.0}>AI advancements</Highlight>, or enjoying the outdoors in Tübingen.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Experience */}
                <div className="max-w-4xl mx-auto mb-24">
                    <h2 className="text-2xl font-light text-white mb-12 flex items-center">
                        <Briefcase size={24} className="mr-3 text-accent" />
                        Experience
                    </h2>
                    <div className="space-y-12 border-l border-white/10 pl-8 md:pl-12 relative">
                        {experience.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative"
                            >
                                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-background border-2 border-accent" />
                                <div className="relative z-10">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-accent mb-2">
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl font-medium text-white mb-1">{item.company}</h3>
                                    <div className="text-lg text-text-muted mb-4">{item.role}</div>
                                    <p className="text-text-muted leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-light text-white mb-12 flex items-center">
                        <GraduationCap size={24} className="mr-3 text-accent-2" />
                        Skills & Capabilities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Object.entries(skills).map(([category, items], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: "rgba(124, 58, 237, 0.8)",
                                    boxShadow: "0 0 30px rgba(124, 58, 237, 0.3)"
                                }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.3,
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17
                                }}
                                className="bg-surface/30 border border-white/5 rounded-xl p-6 cursor-default"
                            >
                                <h3 className="text-lg font-medium text-white mb-4">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-text-muted"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
