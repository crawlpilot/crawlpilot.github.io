"use client";

interface CategoryPillProps {
    category: string;
}

export function CategoryPill({ category }: CategoryPillProps) {
    return (
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-[0.2em] text-primary shadow-[0_0_20px_rgba(99,102,241,0.1)]">
            {category}
        </span>
    );
}
