"use client";

import React from "react";
import { GlassButton } from "@/components/ui/glass-button";

export function ContactStrip() {
    return (
        <section className="py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                    Ready to build something extraordinary?
                </h2>
                <p className="text-text-muted mb-10 max-w-2xl mx-auto">
                    Whether you have a clear vision or just a rough idea, let's chat about how we can bring it to life.
                </p>
                <GlassButton size="lg" variant="primary" onClick={() => window.location.href = '/contact'}>
                    Start a project
                </GlassButton>
            </div>
        </section>
    );
}
