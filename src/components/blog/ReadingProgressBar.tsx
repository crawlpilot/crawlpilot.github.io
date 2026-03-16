"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ReadingProgressBar() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!mounted) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
            style={{ scaleX }}
        />
    );
}
