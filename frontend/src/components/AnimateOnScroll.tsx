"use client";

import React, { useRef, useEffect } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimateOnScroll({ children, delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

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
        (e.currentTarget as HTMLDivElement).style.opacity = "1";
        (e.currentTarget as HTMLDivElement).style.transform = "none";
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