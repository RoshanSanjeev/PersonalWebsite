"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Grid() {
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

    // Helper function to get gradient color
    const getGradientColor = (x, y) => {
      const normalizedX = (x + size/2) / size;
      let r, g, b;

      if (normalizedX < 0.25) {
        const t = normalizedX / 0.25;
        r = 0.25 + t * 0.35;
        g = 0.45 + t * 0.05;
        b = 0.75 - t * 0.10;
      } else if (normalizedX < 0.5) {
        const t = (normalizedX - 0.25) / 0.25;
        r = 0.60 + t * 0.15;
        g = 0.50 - t * 0.15;
        b = 0.65 - t * 0.15;
      } else if (normalizedX < 0.75) {
        const t = (normalizedX - 0.5) / 0.25;
        r = 0.75 + t * 0.10;
        g = 0.35 + t * 0.10;
        b = 0.50 - t * 0.15;
      } else {
        const t = (normalizedX - 0.75) / 0.25;
        r = 0.85 + t * 0.05;
        g = 0.45 + t * 0.15;
        b = 0.35 - t * 0.15;
      }

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
  }, []);

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
        opacity={0.5}
        transparent
      />
    </lineSegments>
  );
}

export default function InteractiveGrid() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />
      <Grid />
    </Canvas>
  );
}
