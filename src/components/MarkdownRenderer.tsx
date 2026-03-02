"use client";
import React from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkdownRendererProps {
    content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
    return (
        <div className="prose prose-invert prose-zinc max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight
            prose-p:text-zinc-400 prose-p:leading-relaxed
            prose-li:text-zinc-400
            prose-strong:text-white
            prose-img:rounded-2xl prose-img:border prose-img:border-border/40">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, inline, className, children, ...props }: any) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <div className="relative my-8 group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-primary/50 to-blue-500/50 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative">
                                    <SyntaxHighlighter
                                        style={vscDarkPlus}
                                        language={match[1]}
                                        PreTag="div"
                                        className="rounded-xl border border-border/40 !bg-zinc-950/80 backdrop-blur-sm !p-6"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        ) : (
                            <code className="bg-zinc-800/50 rounded px-1.5 py-0.5 text-blue-300 font-mono text-sm" {...props}>
                                {children}
                            </code>
                        );
                    },
                    h1: ({ children }) => <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-white tracking-tight leading-tight">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl sm:text-3xl font-bold mt-16 mb-6 text-white tracking-tight border-l-4 border-primary pl-6 py-1">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl sm:text-2xl font-semibold mt-10 mb-4 text-blue-100/90 tracking-tight">{children}</h3>,
                    a: ({ href, children }) => (
                        <a href={href} className="text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-4 transition-all" target="_blank" rel="noopener noreferrer">
                            {children}
                        </a>
                    ),
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-primary bg-primary/5 rounded-r-2xl p-8 my-10 italic text-xl text-zinc-300">
                            {children}
                        </blockquote>
                    ),
                    ul: ({ children }) => (
                        <ul className="my-8 space-y-3 list-none p-0">
                            {React.Children.map(children, (child) => (
                                <li className="flex gap-3">
                                    <span className="text-primary mt-1.5 flex-shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </span>
                                    <span>{child}</span>
                                </li>
                            ))}
                        </ul>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
