"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "phosphor-react";
import Link from "next/link";

import { GlowingShadow } from "@/components/ui/glowing-shadow";
import { GlassButton } from "@/components/ui/glass-button";

const projects = [
    {
        title: "AI Analytics Dashboard",
        category: "Product Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        description: "Redesigning the core analytics experience for a Series B data platform.",
        stats: ["40% increase in engagement", "2x faster load times"],
    },
    {
        title: "Fintech Mobile App",
        category: "Mobile Design",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
        description: "0-1 design for a new neobank targeting Gen Z users.",
        stats: ["50k users in 6 months", "4.8 App Store rating"],
    },
    {
        title: "Healthcare Portal",
        category: "UX / UI",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        description: "Streamlining patient intake and record management for a hospital network.",
        stats: ["30% reduction in admin time", "95% patient satisfaction"],
    },
];

export function SelectedWork() {
    return (
        <section id="work" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
                            Selected Work
                        </h2>
                        <p className="text-text-muted max-w-xl">
                            A collection of projects where design meets data.
                        </p>
                    </div>
                    <div className="hidden md:flex">
                        <GlassButton onClick={() => window.location.href = '/work'}>
                            View all projects <ArrowRight className="ml-2 inline-block" />
                        </GlassButton>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <GlowingShadow className="h-full">
                                <div className="flex flex-col h-full p-6">
                                    <div className="aspect-video w-full overflow-hidden rounded-lg mb-6 relative group">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <GlassButton size="sm">View Case Study</GlassButton>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-accent text-xs font-bold uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-medium text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-text-muted text-sm mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 mt-auto">
                                        {project.stats.map((stat, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/70 border border-white/10"
                                            >
                                                {stat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </GlowingShadow>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <GlassButton onClick={() => window.location.href = '/work'}>
                        View all projects <ArrowRight className="ml-2 inline-block" />
                    </GlassButton>
                </div>
            </div>
        </section>
    );
}
