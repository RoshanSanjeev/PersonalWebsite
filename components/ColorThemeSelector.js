"use client";

import { useTheme, colorThemes, backgroundColors } from '../contexts/ThemeContext';
import { useState } from 'react';

export default function ColorThemeSelector() {
  const { currentTheme, setCurrentTheme, gradient, currentBackground, setCurrentBackground } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="absolute top-8 left-8 z-30 flex flex-col gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 animate-fadeInUp"
      style={{ animationDelay: '0.1s' }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Gradient Color Selector */}
      <div className="relative group rounded-full">
        <span
          className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-50 group-hover:opacity-100 animate-gradient"
          style={{
            background: gradient,
            padding: '2px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
          }}
        />
        <div className="bg-white/5 backdrop-blur-sm rounded-full px-3 py-2 border border-white/10 relative z-10 flex items-center gap-2">
          {/* Color theme buttons */}
          {colorThemes.map((theme, index) => (
            <button
              key={theme.name}
              onClick={() => setCurrentTheme(index)}
              className={`w-6 h-6 rounded-full transition-all duration-200 ${
                currentTheme === index
                  ? 'ring-1 ring-white/60 ring-offset-1 ring-offset-black/30 scale-105'
                  : 'hover:scale-110 opacity-60 hover:opacity-100'
              }`}
              style={{
                background: `linear-gradient(135deg, ${theme.colors[0]} 0%, ${theme.colors[2]} 50%, ${theme.colors[4]} 100%)`,
              }}
              title={theme.name}
            />
          ))}
        </div>
      </div>

      {/* Background Color Selector */}
      <div className="flex flex-col gap-1">
        <div className="relative group rounded-full">
          <span
            className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-50 group-hover:opacity-100 animate-gradient"
            style={{
              background: gradient,
              padding: '2px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              pointerEvents: 'none',
            }}
          />
          <div className="bg-white/5 backdrop-blur-sm rounded-full px-3 py-2 border border-white/10 relative z-10 flex items-center gap-2">
            {/* Background color buttons */}
            {backgroundColors.map((bg, index) => (
              <button
                key={bg.name}
                onClick={() => setCurrentBackground(index)}
                className={`w-6 h-6 rounded-full transition-all duration-200 border ${
                  currentBackground === index
                    ? 'ring-1 ring-white/60 ring-offset-1 ring-offset-black/30 scale-105 border-white/50'
                    : 'hover:scale-110 opacity-60 hover:opacity-100 border-white/20'
                }`}
                style={{
                  backgroundColor: bg.color,
                }}
                title={bg.name}
              />
            ))}
          </div>
        </div>
        <p className="text-gray-400 text-xs text-center opacity-70">Choose to your liking</p>
      </div>
    </div>
  );
}
