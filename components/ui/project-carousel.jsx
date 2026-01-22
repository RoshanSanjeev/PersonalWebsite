"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProjectCarousel = ({ media, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
    };

    const nextSlide = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index, e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex(index);
    };

    if (!media || media.length === 0) return null;

    return (
        <div className={`relative group w-full h-full overflow-hidden ${className}`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                >
                    {media[currentIndex].type === "video" ? (
                        <video
                            src={media[currentIndex].src}
                            poster={media[currentIndex].poster}
                            controls
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="relative w-full h-full">
                            <Image
                                src={media[currentIndex].src}
                                alt={media[currentIndex].alt || "Project media"}
                                fill
                                className={media[currentIndex].imageClassName || "object-cover"}
                                style={media[currentIndex].imageStyle || {}}
                            />
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Only show if more than 1 item */}
            {media.length > 1 && (
                <>
                    <div className="absolute inset-0 flex items-center justify-between p-2 pointer-events-none z-20">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={prevSlide}
                            className="pointer-events-auto h-9 w-9 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm shadow-lg border border-white/10 cursor-pointer"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={nextSlide}
                            className="pointer-events-auto h-9 w-9 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm shadow-lg border border-white/10 cursor-pointer"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                        {media.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => goToSlide(index, e)}
                                className={`h-2 rounded-full transition-all duration-300 shadow-sm cursor-pointer ${currentIndex === index
                                    ? "bg-white w-4"
                                    : "bg-white/60 hover:bg-white/90 w-2"
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
