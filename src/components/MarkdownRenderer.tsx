"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkdownRendererProps {
    content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
    return (
        <div className="prose prose-invert prose-blue max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, inline, className, children, ...props }: any) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                    // Style other elements if needed, or rely on Tailwind prose
                    h1: ({ children }) => <h1 className="text-3xl font-bold mb-6 text-primary">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl font-semibold mt-8 mb-4 border-b border-border pb-2">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-medium mt-6 mb-3 text-blue-200">{children}</h3>,
                    a: ({ href, children }) => <a href={href} className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">{children}</a>,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
