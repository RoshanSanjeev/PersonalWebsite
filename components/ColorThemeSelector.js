"use client";

import { useState, useRef } from 'react';
import { useTheme, colorThemes } from '../contexts/ThemeContext';

export default function ColorThemeSelector() {
  const { currentTheme, setCurrentTheme } = useTheme();
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    const themeIndex = Math.floor(percentage * colorThemes.length);
    const clampedIndex = Math.max(0, Math.min(themeIndex, colorThemes.length - 1));

    setCurrentTheme(clampedIndex);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = (e) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const themeIndex = Math.floor(percentage * colorThemes.length);
    const clampedIndex = Math.max(0, Math.min(themeIndex, colorThemes.length - 1));

    setCurrentTheme(clampedIndex);
  };

  // Add global mouse event listeners when dragging
  if (typeof window !== 'undefined') {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
  }

  const sliderPosition = (currentTheme / (colorThemes.length - 1)) * 100;

  return (
    <div className="fixed top-8 left-8 z-30">
      <div className="relative group rounded-full">
        <span
          className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-100 animate-gradient"
          style={{
            background: 'linear-gradient(135deg, rgb(64, 115, 191) 0%, rgb(153, 128, 191) 25%, rgb(191, 89, 128) 50%, rgb(217, 115, 89) 75%, rgb(230, 153, 77) 100%)',
            padding: '3px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
          }}
        />
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-3 border border-white/20 relative z-10">
          {/* Color slider track */}
          <div
            ref={sliderRef}
            className="relative w-64 h-8 rounded-full cursor-pointer overflow-hidden"
            style={{
              background: `linear-gradient(to right, ${colorThemes.map((theme, idx) =>
                `${theme.colors[2]} ${(idx / (colorThemes.length - 1)) * 100}%`
              ).join(', ')})`,
            }}
            onClick={handleClick}
          >
            {/* Draggable indicator */}
            <div
              className="absolute top-0 bottom-0 w-2 bg-white shadow-lg cursor-grab active:cursor-grabbing transition-all"
              style={{
                left: `calc(${sliderPosition}% - 4px)`,
              }}
              onMouseDown={handleMouseDown}
            />
          </div>

          {/* Theme name label */}
          <div className="text-center mt-2 text-xs text-white font-medium">
            {colorThemes[currentTheme].name}
          </div>
        </div>
      </div>
    </div>
  );
}
