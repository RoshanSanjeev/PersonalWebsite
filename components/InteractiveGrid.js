"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTheme } from "../contexts/ThemeContext";
import * as THREE from "three";

function Grid({ themeColors }) {
  const meshRef = useRef();
  const mousePos = useRef(new THREE.Vector2(0, 0));
  const targetMousePos = useRef(new THREE.Vector2(0, 0));
  const { viewport, size } = useThree();

  // Track mouse movement globally
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Convert mouse position to normalized device coordinates (-1 to +1)
      const x = (event.clientX / size.width) * 2 - 1;
      const y = -(event.clientY / size.height) * 2 + 1;

      targetMousePos.current.x = x;
      targetMousePos.current.y = y;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size]);

  // Create grid pattern with balanced square size - only horizontal and vertical lines
  const geometry = useMemo(() => {
    const segments = 25;
    const size = 30;
    const step = size / segments;

    const positions = [];
    const colors = [];

    // Helper function to get gradient color from theme
    const getGradientColor = (x, y) => {
      const normalizedX = (x + size/2) / size;
      const numColors = themeColors.length;
      const segmentSize = 1 / (numColors - 1);

      // Find which two colors to interpolate between
      const colorIndex = Math.floor(normalizedX / segmentSize);
      const nextColorIndex = Math.min(colorIndex + 1, numColors - 1);
      const t = (normalizedX - colorIndex * segmentSize) / segmentSize;

      // Parse RGB from theme colors
      const parseRGB = (colorStr) => {
        const match = colorStr.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        return match ? [match[1] / 255, match[2] / 255, match[3] / 255] : [1, 1, 1];
      };

      const color1 = parseRGB(themeColors[colorIndex]);
      const color2 = parseRGB(themeColors[nextColorIndex]);

      // Interpolate
      const r = color1[0] + (color2[0] - color1[0]) * t;
      const g = color1[1] + (color2[1] - color1[1]) * t;
      const b = color1[2] + (color2[2] - color1[2]) * t;

      return [r, g, b];
    };

    // Create horizontal lines
    for (let i = 0; i <= segments; i++) {
      const y = -size/2 + i * step;
      for (let j = 0; j < segments; j++) {
        const x1 = -size/2 + j * step;
        const x2 = -size/2 + (j + 1) * step;

        positions.push(x1, y, 0);
        positions.push(x2, y, 0);

        const color1 = getGradientColor(x1, y);
        const color2 = getGradientColor(x2, y);
        colors.push(...color1, ...color2);
      }
    }

    // Create vertical lines
    for (let i = 0; i <= segments; i++) {
      const x = -size/2 + i * step;
      for (let j = 0; j < segments; j++) {
        const y1 = -size/2 + j * step;
        const y2 = -size/2 + (j + 1) * step;

        positions.push(x, y1, 0);
        positions.push(x, y2, 0);

        const color1 = getGradientColor(x, y1);
        const color2 = getGradientColor(x, y2);
        colors.push(...color1, ...color2);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geo.userData.originalPositions = new Float32Array(positions);

    return geo;
  }, [themeColors]);

  // Track mouse position
  useFrame((state) => {
    if (!meshRef.current) return;

    // Smooth mouse tracking with lerp
    mousePos.current.x += (targetMousePos.current.x - mousePos.current.x) * 0.1;
    mousePos.current.y += (targetMousePos.current.y - mousePos.current.y) * 0.1;

    const positions = meshRef.current.geometry.attributes.position.array;
    const originalPositions = meshRef.current.geometry.userData.originalPositions;

    // Convert mouse position to world space
    const mouseX = mousePos.current.x * (viewport.width / 2);
    const mouseY = mousePos.current.y * (viewport.height / 2);

    // Deform vertices based on distance from cursor
    for (let i = 0; i < positions.length; i += 3) {
      const x = originalPositions[i];
      const y = originalPositions[i + 1];

      // Calculate distance from cursor
      const dx = x - mouseX;
      const dy = y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Influence radius (affects how far the cursor's effect reaches)
      const influenceRadius = 2.5; // Larger influence area

      if (distance < influenceRadius) {
        // Gaussian falloff for smooth influence
        const influence = Math.exp(-(distance * distance) / (influenceRadius * 0.5));

        // Displacement amount (very subtle for background effect)
        const displacement = influence * 0.15;

        // Apply displacement toward cursor (z-axis for depth effect)
        positions[i + 2] = originalPositions[i + 2] + displacement;
      } else {
        // Spring back to original position smoothly
        positions[i + 2] += (originalPositions[i + 2] - positions[i + 2]) * 0.1;
      }
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <lineSegments ref={meshRef} geometry={geometry}>
      <lineBasicMaterial
        vertexColors={true}
        opacity={1.0}
        transparent
        linewidth={15}
      />
    </lineSegments>
  );
}

export default function InteractiveGrid() {
  const { theme } = useTheme();

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />
      <Grid themeColors={theme.colors} />
    </Canvas>
  );
}
