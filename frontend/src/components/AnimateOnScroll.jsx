"use client";

import React, { useRef, useEffect } from "react";

export default function AnimateOnScroll({ children, delay = 0, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        node.classList.add("animate-in");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        transition: `opacity 0.7s ${delay}ms cubic-bezier(.25,.8,.25,1), transform 0.7s ${delay}ms cubic-bezier(.25,.8,.25,1)`,
      }}
      onAnimationEnd={e => {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "none";
      }}
    >
      {children}
      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>
    </div>
  );
} 