"use client";

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const colorThemes = [
  {
    name: 'Chroma',
    colors: ['rgb(64, 115, 191)', 'rgb(153, 128, 191)', 'rgb(191, 89, 128)', 'rgb(217, 115, 89)', 'rgb(230, 153, 77)'],
    trailColors: ['rgb(100, 160, 255)', 'rgb(200, 170, 255)', 'rgb(255, 130, 180)', 'rgb(255, 150, 110)', 'rgb(255, 200, 120)'],
  },
  {
    name: 'Ocean',
    colors: ['rgb(0, 119, 182)', 'rgb(0, 180, 216)', 'rgb(72, 202, 228)', 'rgb(144, 224, 239)', 'rgb(173, 232, 244)'],
    trailColors: ['rgb(30, 144, 255)', 'rgb(0, 191, 255)', 'rgb(135, 206, 250)', 'rgb(176, 224, 230)', 'rgb(173, 216, 230)'],
  },
  {
    name: 'Sunset',
    colors: ['rgb(255, 94, 77)', 'rgb(255, 154, 88)', 'rgb(255, 183, 77)', 'rgb(255, 214, 102)', 'rgb(252, 234, 146)'],
    trailColors: ['rgb(255, 120, 100)', 'rgb(255, 170, 110)', 'rgb(255, 200, 100)', 'rgb(255, 220, 130)', 'rgb(255, 240, 170)'],
  },
  {
    name: 'Forest',
    colors: ['rgb(34, 139, 34)', 'rgb(60, 179, 113)', 'rgb(102, 205, 170)', 'rgb(144, 238, 144)', 'rgb(152, 251, 152)'],
    trailColors: ['rgb(50, 160, 50)', 'rgb(80, 200, 140)', 'rgb(120, 220, 190)', 'rgb(160, 240, 160)', 'rgb(180, 255, 180)'],
  },
  {
    name: 'Purple Dream',
    colors: ['rgb(138, 43, 226)', 'rgb(153, 50, 204)', 'rgb(186, 85, 211)', 'rgb(216, 191, 216)', 'rgb(221, 160, 221)'],
    trailColors: ['rgb(160, 70, 240)', 'rgb(180, 90, 220)', 'rgb(200, 120, 230)', 'rgb(220, 160, 240)', 'rgb(230, 190, 250)'],
  },
  {
    name: 'Fire',
    colors: ['rgb(139, 0, 0)', 'rgb(220, 20, 60)', 'rgb(255, 69, 0)', 'rgb(255, 140, 0)', 'rgb(255, 215, 0)'],
    trailColors: ['rgb(180, 30, 30)', 'rgb(240, 50, 80)', 'rgb(255, 100, 30)', 'rgb(255, 160, 50)', 'rgb(255, 230, 50)'],
  },
  {
    name: 'Mint',
    colors: ['rgb(0, 128, 128)', 'rgb(32, 178, 170)', 'rgb(64, 224, 208)', 'rgb(127, 255, 212)', 'rgb(175, 238, 238)'],
    trailColors: ['rgb(30, 150, 150)', 'rgb(60, 200, 190)', 'rgb(90, 240, 220)', 'rgb(150, 255, 230)', 'rgb(190, 250, 240)'],
  },
];

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(5); // Fire theme (index 5)

  const getGradient = (colors) => {
    return `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 25%, ${colors[2]} 50%, ${colors[3]} 75%, ${colors[4]} 100%)`;
  };

  const value = {
    currentTheme,
    setCurrentTheme,
    theme: colorThemes[currentTheme],
    gradient: getGradient(colorThemes[currentTheme].colors),
    trailGradient: getGradient(colorThemes[currentTheme].trailColors),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
