"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Cursor tracking blob state
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [blob, setBlob] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setTarget({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  // Animate blob position with lerp
  useEffect(() => {
    let frame: number;
    const animate = () => {
      setBlob(prev => {
        const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
        return {
          x: lerp(prev.x, target.x, 0.18),
          y: lerp(prev.y, target.y, 0.18),
        };
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [target]);
  // Generate random positions for blobs on each render
  function randomPos(minPercent: number, maxPercent: number) {
    return `${Math.random() * (maxPercent - minPercent) + minPercent}%`;
  }
  // Each blob gets a random top/left/right/bottom
  const blobs = [
    {
      style: {
        width: 260, height: 260,
        left: randomPos(-10, 60),
        top: randomPos(-10, 60),
      },
      className: 'blob blob1',
    },
    {
      style: {
        width: 200, height: 200,
        right: randomPos(-10, 60),
        top: randomPos(-10, 60),
      },
      className: 'blob blob2',
    },
    {
      style: {
        width: 180, height: 180,
        left: randomPos(40, 90),
        bottom: randomPos(-10, 40),
      },
      className: 'blob blob3',
    },
  ];
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Cursor-following blob */}
        <div
          style={{
            position: "fixed",
            left: blob.x - 60,
            top: blob.y - 60,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(0,200,150,0.7)",
            filter: "blur(24px)",
            opacity: 0.28,
            border: "2px solid #14213d",
            boxShadow: "0 4px 32px 0 rgba(20,33,61,0.18), 0 1.5px 6px 0 #00c89633",
            pointerEvents: "none",
            // zIndex 0 ensures blob is behind cards (cards use z-index 2+ on hover)
            zIndex: 0,
          }}
        />
        {/* Removed global animated green blobs background. Blobs now only appear in the landing page. */}
        {children}
      </body>
    </html>
  );
}
