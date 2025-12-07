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
    name: 'Forest',
    colors: ['rgb(34, 139, 34)', 'rgb(60, 179, 113)', 'rgb(102, 205, 170)', 'rgb(144, 238, 144)', 'rgb(152, 251, 152)'],
    trailColors: ['rgb(50, 160, 50)', 'rgb(80, 200, 140)', 'rgb(120, 220, 190)', 'rgb(160, 240, 160)', 'rgb(180, 255, 180)'],
  },
  {
    name: 'Fire',
    colors: ['rgb(139, 0, 0)', 'rgb(220, 20, 60)', 'rgb(255, 69, 0)', 'rgb(255, 140, 0)', 'rgb(255, 215, 0)'],
    trailColors: ['rgb(180, 30, 30)', 'rgb(240, 50, 80)', 'rgb(255, 100, 30)', 'rgb(255, 160, 50)', 'rgb(255, 230, 50)'],
  },
];


export const backgroundColors = [
  { name: 'Black', color: '#000000', textColor: '#ffffff', secondaryTextColor: '#d1d5db', glassColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)', boxColor: 'rgba(255, 255, 255, 0.15)', navColor: 'rgba(0, 0, 0, 0.85)' },
  { name: 'White', color: '#ffffff', textColor: '#000000', secondaryTextColor: '#4b5563', glassColor: 'rgba(0, 0, 0, 0.05)', borderColor: 'rgba(0, 0, 0, 0.1)', boxColor: 'rgba(0, 0, 0, 0.1)', navColor: 'rgba(255, 255, 255, 0.85)' },
  { name: 'Pastel Gray', color: '#d3d3d3', textColor: '#1f2937', secondaryTextColor: '#374151', glassColor: 'rgba(0, 0, 0, 0.05)', borderColor: 'rgba(0, 0, 0, 0.1)', boxColor: 'rgba(0, 0, 0, 0.1)', navColor: 'rgba(211, 211, 211, 0.85)' },
  { name: 'Navy', color: '#0a1628', textColor: '#ffffff', secondaryTextColor: '#d1d5db', glassColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)', boxColor: 'rgba(255, 255, 255, 0.15)', navColor: 'rgba(10, 22, 40, 0.85)' },
];


export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(0); // Chroma theme (index 0)
  const [currentBackground, setCurrentBackground] = useState(0); // Black (index 0)

  const getGradient = (colors) => {
    return `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 25%, ${colors[2]} 50%, ${colors[3]} 75%, ${colors[4]} 100%)`;
  };

  const value = {
    currentTheme,
    setCurrentTheme,
    theme: colorThemes[currentTheme],
    gradient: getGradient(colorThemes[currentTheme].colors),
    trailGradient: getGradient(colorThemes[currentTheme].trailColors),
    currentBackground,
    setCurrentBackground,
    backgroundColor: backgroundColors[currentBackground].color,
    textColor: backgroundColors[currentBackground].textColor,
    secondaryTextColor: backgroundColors[currentBackground].secondaryTextColor,
    glassColor: backgroundColors[currentBackground].glassColor,
    borderColor: backgroundColors[currentBackground].borderColor,
    boxColor: backgroundColors[currentBackground].boxColor,
    navColor: backgroundColors[currentBackground].navColor,
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
