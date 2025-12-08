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
    <div className="relative z-50 flex flex-col items-center gap-2">
      {/* Combined Color Selector */}
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
          className={`backdrop-blur-sm shadow-2xl border rounded-full relative z-10 flex items-center ${compact ? 'px-2 py-1 gap-1' : 'px-3 py-2 gap-2'}`}
          style={{ backgroundColor: glassColor, borderColor: borderColor }}
        >
          {/* Gradient theme buttons */}
          {colorThemes.map((theme, index) => (
            <button
              key={index}
              onClick={() => setCurrentTheme(index)}
              className={`rounded-full transition-transform hover:scale-110 ${compact ? 'w-4 h-4' : 'w-5 h-5'}`}
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
      </div>
      {!compact && <p className="text-xs opacity-70" style={{ color: secondaryTextColor }}>Choose to your liking</p>}
    </div>
  );
}
