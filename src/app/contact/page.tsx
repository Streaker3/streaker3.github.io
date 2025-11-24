"use client";

import React from "react";
import { motion } from "framer-motion";
import { Envelope, MapPin, LinkedinLogo, GithubLogo, EnvelopeSimple, PaperPlaneRight } from "phosphor-react";
import { GlassButton } from "@/components/ui/glass-button";
import { ShaderBackground } from "@/components/ui/shader-background";

export default function Contact() {
    return (
        <main className="pt-32 pb-20 min-h-screen relative overflow-hidden">
            <ShaderBackground shiftY={0.1} />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-text-muted max-w-2xl mx-auto">
                            Have a project in mind or just want to say hi? I'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-surface p-8 rounded-2xl border border-white/5">
                                <h3 className="text-xl font-medium text-white mb-6">Contact Details</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <EnvelopeSimple size={24} className="text-accent mt-1" />
                                        <div>
                                            <p className="text-sm text-text-muted mb-1">Email</p>
                                            <a href="mailto:felix.m.giering@gmail.com" className="text-white hover:text-accent transition-colors">
                                                felix.m.giering@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <MapPin size={24} className="text-accent mt-1" />
                                        <div>
                                            <p className="text-sm text-text-muted mb-1">Location</p>
                                            <p className="text-white">Tübingen, Germany (Remote Worldwide)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-surface p-8 rounded-2xl border border-white/5">
                                <h3 className="text-xl font-medium text-white mb-6">Socials</h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/Streaker3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/5 rounded-full text-white hover:bg-accent hover:text-white transition-all"
                                    >
                                        <GithubLogo size={24} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/felix-giering-198649387"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/5 rounded-full text-white hover:bg-accent hover:text-white transition-all"
                                    >
                                        <LinkedinLogo size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-surface p-8 rounded-2xl border border-white/5">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-text-muted">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-text-muted">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-text-muted">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                        placeholder="Project Inquiry"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-text-muted">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                <GlassButton type="submit" variant="primary" fullWidth className="justify-center">
                                    Send Message <PaperPlaneRight className="ml-2" />
                                </GlassButton>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
