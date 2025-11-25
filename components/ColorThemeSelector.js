"use client";

import { useTheme, colorThemes } from '../contexts/ThemeContext';

export default function ColorThemeSelector() {
  const { currentTheme, setCurrentTheme, gradient } = useTheme();

  return (
    <div className="absolute top-8 left-8 z-30">
      <div className="relative group rounded-full">
        <span
          className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-100 animate-gradient"
          style={{
            background: gradient,
            padding: '3px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
          }}
        />
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-3 border border-white/20 relative z-10 flex items-center gap-3">
          {/* Color theme buttons */}
          {colorThemes.map((theme, index) => (
            <button
              key={theme.name}
              onClick={() => setCurrentTheme(index)}
              className={`w-8 h-8 rounded-full transition-all duration-300 ${
                currentTheme === index
                  ? 'ring-2 ring-white ring-offset-2 ring-offset-black/50 scale-110'
                  : 'hover:scale-125 hover:shadow-lg hover:shadow-white/30 opacity-70 hover:opacity-100'
              }`}
              style={{
                background: `linear-gradient(135deg, ${theme.colors[0]} 0%, ${theme.colors[2]} 50%, ${theme.colors[4]} 100%)`,
              }}
              title={theme.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
