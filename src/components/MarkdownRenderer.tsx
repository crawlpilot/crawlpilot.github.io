"use client";
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy, Info, AlertTriangle, Lightbulb, Zap } from 'lucide-react';

interface MarkdownRendererProps {
    content: string;
}

const CopyButton = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={copy}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-primary transition-all backdrop-blur-sm z-10"
            title="Copy code"
        >
            {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
        </button>
    );
};

const Callout = ({ type, children }: { type: string; children: React.ReactNode }) => {
    const iconMap: Record<string, React.ReactNode> = {
        tip: <Lightbulb className="h-5 w-5 text-amber-400" />,
        warning: <AlertTriangle className="h-5 w-5 text-red-400" />,
        info: <Info className="h-5 w-5 text-blue-400" />,
        insight: <Zap className="h-5 w-5 text-primary" />,
    };

    const bgMap: Record<string, string> = {
        tip: "bg-amber-500/5 border-amber-500/20",
        warning: "bg-red-500/5 border-red-500/20",
        info: "bg-blue-500/5 border-blue-500/20",
        insight: "bg-primary/5 border-primary/20",
    };

    const titleMap: Record<string, string> = {
        tip: "Pro Tip",
        warning: "Warning",
        info: "Note",
        insight: "Intelligence Insight",
    };

    return (
        <div className={`my-8 p-6 rounded-2xl border ${bgMap[type] || bgMap.info} flex gap-4 items-start`}>
            <div className="mt-1 flex-shrink-0">{iconMap[type] || iconMap.info}</div>
            <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                    {titleMap[type] || titleMap.info}
                </span>
                <div className="text-zinc-300 font-medium leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
    // Custom logic to handle [!TIP] style callouts in markdown
    // For now, we'll keep it simple and use a regex during rendering if needed, 
    // but better to use a remark plugin. For this task, I'll use component mapping.

    return (
        <div className="prose prose-invert prose-zinc max-w-none 
            prose-headings:font-heading prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
            prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:text-lg
            prose-li:text-zinc-400 prose-li:text-lg
            prose-strong:text-foreground prose-strong:font-black
            prose-img:rounded-3xl prose-img:border prose-img:border-white/5 prose-img:shadow-2xl">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: 'wrap' }]
                ]}
                components={{
                    code({ node, inline, className, children, ...props }: any) {
                        const match = /language-(\w+)/.exec(className || '');
                        const codeString = String(children).replace(/\n$/, '');

                        return !inline && match ? (
                            <div className="relative my-10 group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-500/50 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden">
                                    <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-white/5">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">{match[1]}</span>
                                        <CopyButton text={codeString} />
                                    </div>
                                    <SyntaxHighlighter
                                        style={vscDarkPlus}
                                        language={match[1]}
                                        PreTag="div"
                                        className="!m-0 !bg-transparent !p-6 !pt-4 scrollbar-hide"
                                        {...props}
                                    >
                                        {codeString}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        ) : (
                            <code className="bg-primary/10 text-primary rounded-md px-1.5 py-0.5 font-mono text-sm border border-primary/20" {...props}>
                                {children}
                            </code>
                        );
                    },
                    h1: ({ children }) => <h1 className="text-4xl md:text-5xl lg:text-6xl mb-12 mt-20 first:mt-0 leading-[0.9]">{children}</h1>,
                    h2: ({ children, id }: any) => (
                        <h2 id={id} className="text-2xl md:text-3xl mt-20 mb-8 border-b border-white/5 pb-4 group scroll-mt-32">
                            {children}
                        </h2>
                    ),
                    h3: ({ children, id }: any) => (
                        <h3 id={id} className="text-xl md:text-2xl mt-12 mb-6 group scroll-mt-32">
                            {children}
                        </h3>
                    ),
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-primary bg-primary/5 rounded-r-3xl p-8 my-12 italic text-xl text-zinc-300 font-medium">
                            {children}
                        </blockquote>
                    ),
                    ul: ({ children }) => (
                        <ul className="my-10 space-y-4 list-none p-0">
                            {React.Children.map(children, (child: any) => {
                                if (!child || !child.props) return child;
                                return (
                                    <li className="flex gap-4 items-start">
                                        <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                        <div className="flex-1">{child.props.children}</div>
                                    </li>
                                );
                            })}
                        </ul>
                    ),
                    // Adding custom callout support via specific syntax or mapping
                    // For now, if a paragraph starts with [!TIP], etc., we could wrap it
                    p: ({ children }: any) => {
                        if (typeof children === 'string') {
                            if (children.startsWith('[!TIP]')) return <Callout type="tip">{children.replace('[!TIP]', '').trim()}</Callout>;
                            if (children.startsWith('[!WARNING]')) return <Callout type="warning">{children.replace('[!WARNING]', '').trim()}</Callout>;
                            if (children.startsWith('[!NOTE]')) return <Callout type="info">{children.replace('[!NOTE]', '').trim()}</Callout>;
                            if (children.startsWith('[!INSIGHT]')) return <Callout type="insight">{children.replace('[!INSIGHT]', '').trim()}</Callout>;
                        }
                        return <p className="mb-8">{children}</p>;
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
