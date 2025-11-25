"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";

export default function DraggableGT3RS() {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: -40 }); // Start further left, partially off-screen
  const [isDragging, setIsDragging] = useState(false);
  const [trail, setTrail] = useState([]);
  const [facingLeft, setFacingLeft] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isHoveringCar, setIsHoveringCar] = useState(false);
  const carRef = useRef(null);
  const lastX = useRef(0);
  const carWidth = 100; // Smaller car size

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const container = carRef.current?.parentElement?.parentElement;
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const minX = containerRect.left - 40; // Allow car to go to starting position (-40)
        const maxX = containerRect.right - carWidth - 30; // End earlier so car doesn't hang out

        // Calculate new position with drag offset
        const newX = Math.max(minX, Math.min(maxX, e.clientX - dragOffset));

        // Determine direction for flipping
        if (newX < lastX.current) {
          setFacingLeft(true);
        } else if (newX > lastX.current) {
          setFacingLeft(false);
        }
        lastX.current = newX;

        setPosition({ x: newX - containerRect.left }); // Store relative position

        // Add to rainbow trail from back of car
        const trailX = facingLeft ? newX + carWidth : newX;
        setTrail((prevTrail) => [
          ...prevTrail,
          {
            x: trailX - containerRect.left,
            id: Date.now() + Math.random(),
          },
        ]);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, carWidth, dragOffset, facingLeft]);

  // Clean up old trail segments
  useEffect(() => {
    if (trail.length > 30) {
      setTrail((prevTrail) => prevTrail.slice(-30));
    }
  }, [trail]);

  // Auto-fade trail segments only while dragging
  useEffect(() => {
    if (!isDragging) return;

    const interval = setInterval(() => {
      setTrail((prevTrail) => prevTrail.slice(1));
    }, 30);

    return () => clearInterval(interval);
  }, [isDragging]);

  // Clear trail immediately when stopping drag
  useEffect(() => {
    if (!isDragging) {
      setTrail([]);
    }
  }, [isDragging]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    setDragOffset(offsetX);
    lastX.current = e.clientX - offsetX;

    // Clear any existing trail when starting new drag
    setTrail([]);

    setIsDragging(true);
  };

  return (
    <>
      {/* Rainbow trail - starts from back of car */}
      {trail.map((point, index) => {
        const opacity = (index / trail.length) * 0.7;
        const size = 6 + (index / trail.length) * 10; // Smaller trail

        return (
          <div
            key={point.id}
            className="pointer-events-none absolute rounded-full animate-gradient"
            style={{
              left: point.x - size / 2,
              bottom: -25 + size / 2, // Fixed at bottom, slightly higher
              width: size,
              height: size,
              background: `linear-gradient(135deg,
                ${theme.trailColors[0]} 0%,
                ${theme.trailColors[1]} 25%,
                ${theme.trailColors[2]} 50%,
                ${theme.trailColors[3]} 75%,
                ${theme.trailColors[4]} 100%)`,
              opacity: opacity,
              filter: "blur(4px)",
              zIndex: 999,
            }}
          />
        );
      })}

      {/* GT3RS Car - Smaller and constrained to screen width */}
      <div
        ref={carRef}
        className="absolute pointer-events-none"
        style={{
          left: position.x,
          bottom: -50,
          width: `${carWidth}px`,
          height: "auto",
          zIndex: 1000,
          transition: isDragging ? "none" : "left 0.1s ease-out, transform 0.2s ease-out",
          transform: facingLeft ? "scaleX(-1)" : "scaleX(1)",
        }}
      >
        {/* Draggable hint - pulsing rainbow glow - tighter fit */}
        {!isDragging && (
          <div
            className="absolute pointer-events-none"
            style={{
              left: "-4px",
              right: "-4px",
              top: "52px",
              bottom: "16px",
              borderRadius: "12px",
              boxShadow: "0 0 15px 3px rgba(100, 160, 255, 0.5), 0 0 15px 3px rgba(255, 130, 180, 0.3)",
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          />
        )}

        {/* Clickable car image area */}
        <div
          className="cursor-grab active:cursor-grabbing pointer-events-auto"
          onMouseDown={handleMouseDown}
          onMouseEnter={() => setIsHoveringCar(true)}
          onMouseLeave={() => setIsHoveringCar(false)}
          style={{
            paddingTop: "42px",
            paddingBottom: "7px",
          }}
        >
          <Image
            src="/GT3RS.png"
            alt="GT3RS"
            width={carWidth}
            height={carWidth}
            className="select-none hover:scale-105 transition-transform duration-200"
            draggable={false}
          />
        </div>

        {/* Drag me text hint - counter-flip to keep text readable */}
        {!isDragging && isHoveringCar && (
          <div
            className="absolute left-1/2 transition-opacity duration-300 pointer-events-none"
            style={{
              transform: facingLeft ? "translateX(-50%) scaleX(-1)" : "translateX(-50%)",
              top: "30px",
            }}
          >
            <span className="text-xs text-white bg-black/70 px-3 py-1 rounded-full whitespace-nowrap backdrop-blur-sm border border-white/20">
              Drag me!
            </span>
          </div>
        )}
      </div>
    </>
  );
}
