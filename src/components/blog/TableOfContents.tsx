"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function TableOfContents() {
    const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
    const [activeId, setActiveId] = useState<string>("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const elements = Array.from(document.querySelectorAll("h2, h3"))
            .map((elem) => ({
                id: elem.id,
                text: elem.textContent || "",
                level: Number(elem.tagName.substring(1)),
            }))
            .filter((h) => h.id);

        setHeadings(elements);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0% -80% 0%" }
        );

        document.querySelectorAll("h2, h3").forEach((elem) => observer.observe(elem));

        return () => observer.disconnect();
    }, []);

    if (!mounted || headings.length === 0) return null;

    return (
        <nav className="hidden lg:block sticky top-32 max-h-[calc(100vh-160px)] overflow-y-auto w-64 flex-shrink-0">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6">Contents</h4>
            <ul className="space-y-4">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        style={{ paddingLeft: `${(heading.level - 2) * 16}px` }}
                    >
                        <a
                            href={`#${heading.id}`}
                            className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-primary ${activeId === heading.id
                                ? "text-primary border-l-2 border-primary pl-4 -ml-4"
                                : "text-zinc-500"
                                }`}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
