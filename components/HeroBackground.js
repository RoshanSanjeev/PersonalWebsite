"use client";

import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export default function HeroBackground() {
    const { gradient } = useTheme();

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base background */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />

            {/* Animated Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-30"
                style={{ background: gradient }}
            />

            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -150, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
                style={{ background: gradient }}
            />

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                    x: [0, 50, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
                className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full blur-[90px] opacity-20"
                style={{ background: gradient }}
            />
        </div>
    );
}
