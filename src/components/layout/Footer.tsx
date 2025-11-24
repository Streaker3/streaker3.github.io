"use client";

import React from "react";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/5 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-medium text-white mb-2">Felix Giering</h3>
                        <p className="text-text-muted text-sm">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="/about" className="text-text-muted hover:text-white text-sm transition-colors">
                            About
                        </a>
                        <a href="/#work" className="text-text-muted hover:text-white text-sm transition-colors">
                            Work
                        </a>
                        <a href="/blog" className="text-text-muted hover:text-white text-sm transition-colors">
                            Blog
                        </a>
                        <a href="/contact" className="text-text-muted hover:text-white text-sm transition-colors">
                            Contact
                        </a>
                    </div>
                </div>


            </div>
        </footer>
    );
}
