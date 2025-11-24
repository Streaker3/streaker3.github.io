import React from "react";
import Link from "next/link";
import { ArrowLeft, CalendarBlank, Clock, Tag } from "@/components/ui/Icons";
import { blogPosts } from "@/data/blog-posts";
import { notFound } from "next/navigation";

// This is a server component
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pt-20 pb-32">
            <article className="container mx-auto px-6 max-w-3xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-text-muted hover:text-white transition-colors mb-12"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to writing
                </Link>

                <header className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-accent"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center space-x-6 text-sm text-text-muted border-b border-white/10 pb-8">
                        <span className="flex items-center">
                            <CalendarBlank size={16} className="mr-2" />
                            {post.date}
                        </span>
                        <span className="flex items-center">
                            <Clock size={16} className="mr-2" />
                            {post.readTime}
                        </span>
                        <span className="flex items-center">
                            By Felix Giering
                        </span>
                    </div>
                </header>

                {/* Post Content */}
                <div
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-light prose-headings:text-white prose-p:text-text-muted prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-li:text-text-muted"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Footer / CTA */}
                <div className="mt-20 pt-12 border-t border-white/10">
                    <h3 className="text-2xl font-light text-white mb-4">
                        Want to discuss this topic?
                    </h3>
                    <p className="text-text-muted mb-8">
                        I'm always open to chatting about design, AI, and product strategy.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-surface border border-white/10 text-white hover:border-accent/30 hover:shadow-[0_0_15px_rgba(158,231,255,0.3)] transition-all duration-300"
                    >
                        Get in touch
                    </Link>
                </div>
            </article>
        </div>
    );
}
