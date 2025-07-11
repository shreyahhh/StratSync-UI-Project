"use client";

import React, { useRef } from "react";

export default function DynamicCard({ children, style, ...rest }) {
  const ref = useRef(null);

  // 3D hover effect
  const handleMouseMove = (e) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    node.style.setProperty("--rx", `${-y / 18}deg`);
    node.style.setProperty("--ry", `${x / 18}deg`);
  };
  const handleMouseLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--rx", "0deg");
    node.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      className="dynamic-card"
      style={{
        borderRadius: 16,
        background: "#fff",
        boxShadow: "0 2px 16px #00c89622",
        padding: 24,
        transition: "transform 0.25s cubic-bezier(.25,.8,.25,1), box-shadow 0.25s cubic-bezier(.25,.8,.25,1)",
        willChange: "transform, box-shadow",
        cursor: "pointer",
        perspective: 800,
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </div>
  );
} 