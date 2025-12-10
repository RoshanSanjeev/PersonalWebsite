"use client";

import { useTheme, colorThemes, backgroundColors } from '../contexts/ThemeContext';
import { useState } from 'react';

export default function ColorThemeSelector({ compact = false, stacked = false, raw = false }) {
  const { currentTheme, setCurrentTheme, gradient, currentBackground, setCurrentBackground, glassColor, borderColor, secondaryTextColor, boxColor, navColor } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  if (raw && stacked) {
    return (
      <div className="flex flex-col gap-1.5 items-end pr-1">
        {/* Gradient theme buttons - Row 1 */}
        <div className="flex items-center gap-2">
          {colorThemes.map((theme, index) => (
            <button
              key={index}
              onClick={() => setCurrentTheme(index)}
              className="rounded-full transition-transform hover:scale-110 w-5 h-5"
              style={{
                background: `linear-gradient(135deg, ${theme.colors[0]} 0%, ${theme.colors[1]} 25%, ${theme.colors[2]} 50%, ${theme.colors[3]} 75%, ${theme.colors[4]} 100%)`,
                border: currentTheme === index ? '2px solid white' : 'none',
                boxShadow: currentTheme === index ? '0 0 10px rgba(255,255,255,0.5)' : 'none'
              }}
              aria-label={theme.name}
            />
          ))}
        </div>

        {/* Background color buttons - Row 2 */}
        <div className="flex items-center gap-2">
          {backgroundColors.map((bg, index) => (
            <button
              key={index}
              onClick={() => setCurrentBackground(index)}
              className="rounded-full transition-transform hover:scale-110 border border-white/20 w-5 h-5"
              style={{
                backgroundColor: bg.color,
                boxShadow: currentBackground === index ? '0 0 0 2px white, 0 0 10px rgba(255,255,255,0.3)' : 'none'
              }}
              aria-label={bg.name}
            />
          ))}
        </div>
      </div>
    );
  }

  if (raw) {
    return (
      <div className="flex items-center gap-2">
        {/* Gradient theme buttons */}
        {colorThemes.map((theme, index) => (
          <button
            key={index}
            onClick={() => setCurrentTheme(index)}
            className={`rounded-full transition-transform hover:scale-110 ${compact ? 'w-4 h-4' : 'w-6 h-6'}`}
            style={{
              background: `linear-gradient(135deg, ${theme.colors[0]} 0%, ${theme.colors[1]} 25%, ${theme.colors[2]} 50%, ${theme.colors[3]} 75%, ${theme.colors[4]} 100%)`,
              border: currentTheme === index ? '2px solid white' : 'none',
              boxShadow: currentTheme === index ? '0 0 10px rgba(255,255,255,0.5)' : 'none'
            }}
            aria-label={theme.name}
          />
        ))}

        {/* Separator */}
        <div
          className={`${compact ? 'h-4 w-[1px]' : 'h-6 w-[2px]'} rounded-full`}
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        />

        {/* Background color buttons */}
        {backgroundColors.map((bg, index) => (
          <button
            key={index}
            onClick={() => setCurrentBackground(index)}
            className={`rounded-full transition-transform hover:scale-110 border border-white/20 ${compact ? 'w-4 h-4' : 'w-6 h-6'}`}
            style={{
              backgroundColor: bg.color,
              boxShadow: currentBackground === index ? '0 0 0 2px white, 0 0 10px rgba(255,255,255,0.3)' : 'none'
            }}
            aria-label={bg.name}
          />
        ))}
      </div>
    );
  }

  if (stacked) {
    return (
      <div className="relative z-50 flex flex-col items-center gap-2">
        {/* Gradient Row */}
        <div className="relative group rounded-full">
          <span
            className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-100 animate-gradient pointer-events-none"
            style={{
              background: gradient,
              padding: '2px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
          <div
            className="backdrop-blur-sm shadow-2xl border rounded-full relative z-10 flex items-center px-2 py-1 gap-2"
            style={{ backgroundColor: glassColor, borderColor: borderColor }}
          >
            {colorThemes.map((theme, index) => (
              <button
                key={index}
                onClick={() => setCurrentTheme(index)}
                className="rounded-full transition-transform hover:scale-110 w-5 h-5"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors[0]} 0%, ${theme.colors[1]} 25%, ${theme.colors[2]} 50%, ${theme.colors[3]} 75%, ${theme.colors[4]} 100%)`,
                  border: currentTheme === index ? '2px solid white' : 'none',
                  boxShadow: currentTheme === index ? '0 0 10px rgba(255,255,255,0.5)' : 'none'
                }}
                aria-label={theme.name}
              />
            ))}
          </div>
        </div>

        {/* Background Row */}
        <div className="relative group rounded-full">
          <span
            className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-100 animate-gradient pointer-events-none"
            style={{
              background: gradient,
              padding: '2px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
          <div
            className="backdrop-blur-sm shadow-2xl border rounded-full relative z-10 flex items-center px-2 py-1 gap-2"
            style={{ backgroundColor: glassColor, borderColor: borderColor }}
          >
            {backgroundColors.map((bg, index) => (
              <button
                key={index}
                onClick={() => setCurrentBackground(index)}
                className="rounded-full transition-transform hover:scale-110 border border-white/20 w-5 h-5"
                style={{
                  backgroundColor: bg.color,
                  boxShadow: currentBackground === index ? '0 0 0 2px white, 0 0 10px rgba(255,255,255,0.3)' : 'none'
                }}
                aria-label={bg.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-50 flex flex-col items-end">
      {/* Collapsed Toggle Button (Pill) */}
      <div className="relative group rounded-full">
        <span
          className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-100 animate-gradient pointer-events-none"
          style={{
            background: gradient,
            padding: '2px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`backdrop-blur-sm shadow-2xl border rounded-full relative z-10 flex items-center px-4 py-3 gap-4 transition-all duration-300 active:scale-95`}
          style={{ backgroundColor: glassColor, borderColor: borderColor }}
          aria-label="Toggle Color Theme Selection"
        >
          <div className="flex items-center gap-4">
            {/* Current Gradient Theme */}
            <div
              className="rounded-full w-5 h-5 shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${colorThemes[currentTheme].colors[0]} 0%, ${colorThemes[currentTheme].colors[1]} 25%, ${colorThemes[currentTheme].colors[2]} 50%, ${colorThemes[currentTheme].colors[3]} 75%, ${colorThemes[currentTheme].colors[4]} 100%)`,
                border: '1.5px solid white',
              }}
            />
            {/* Current Background Color */}
            <div
              className="rounded-full w-5 h-5 border border-white/30 shadow-lg"
              style={{
                backgroundColor: backgroundColors[currentBackground].color,
              }}
            />
          </div>

          {/* Chevron Arrow */}
          <svg
            className={`w-4 h-4 text-[var(--text-secondary)] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Expanded Dropdown (Ultra Compact - No Text) */}
      <div
        className={`absolute top-full right-0 mt-4 transition-all duration-300 origin-top-right ${isExpanded ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}
      >
        <div className="relative rounded-3xl overflow-hidden group">
          {/* Gradient Border for Dropdown */}
          <span
            className="absolute inset-0 rounded-3xl transition-opacity duration-300 opacity-100 animate-gradient pointer-events-none z-20"
            style={{
              background: gradient,
              padding: '2px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
          {/* Dropdown Content */}
          <div
            className="backdrop-blur-xl rounded-3xl p-3 shadow-2xl relative z-10 flex flex-row gap-3 hover:cursor-default border"
            style={{ backgroundColor: navColor, borderColor: borderColor }}
          >
            {/* Left Column: Color Theme */}
            <div className="flex flex-col gap-3 items-center">
              {colorThemes.map((theme, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTheme(index)}
                  className="rounded-full transition-transform hover:scale-110 w-6 h-6"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors[0]} 0%, ${theme.colors[1]} 25%, ${theme.colors[2]} 50%, ${theme.colors[3]} 75%, ${theme.colors[4]} 100%)`,
                    border: currentTheme === index ? '2px solid white' : 'none',
                    boxShadow: currentTheme === index ? '0 0 10px rgba(255,255,255,0.5)' : 'none'
                  }}
                  aria-label={theme.name}
                />
              ))}
            </div>

            {/* Vertical Divider */}
            <div className="w-[1px] bg-white/10 self-stretch my-1" />

            {/* Right Column: Background */}
            <div className="flex flex-col gap-3 items-center">
              {backgroundColors.map((bg, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBackground(index)}
                  className="rounded-full transition-transform hover:scale-110 border border-white/20 w-6 h-6"
                  style={{
                    backgroundColor: bg.color,
                    boxShadow: currentBackground === index ? '0 0 0 2px white, 0 0 10px rgba(255,255,255,0.3)' : 'none'
                  }}
                  aria-label={bg.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
