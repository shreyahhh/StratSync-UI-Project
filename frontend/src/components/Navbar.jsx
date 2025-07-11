"use client";

import React, { useEffect, useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#problem", label: "Problem" },
  { href: "#action", label: "Action" },
  { href: "#usecases", label: "Use Cases" },
  { href: "#expect", label: "Results" },
  { href: "#integrations", label: "Integrations" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.querySelector(link.href);
        if (!el) return { href: link.href, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { href: link.href, top: rect.top };
      });
      // Find the last section above the top of the viewport (or closest to it)
      const active = offsets.filter(o => o.top <= 80).sort((a, b) => b.top - a.top)[0];
      if (active && active.href !== activeSection) setActiveSection(active.href);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 100,
        boxShadow: "0 2px 12px #14213d22",
        padding: "0 0 0 0",
        background: "none",
        overflow: "visible"
      }}
    >
      {/* Background image and overlay for navbar (no blobs) */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 64, zIndex: 0, background: `url('/landingpage.png') center center / cover no-repeat` }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 64, background: 'rgba(20,33,61,0.95)', zIndex: 1, pointerEvents: 'none' }} />
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          padding: "0 24px",
          position: 'relative',
          zIndex: 3
        }}
      >
        <img src="/logo.png" alt="StratSync.ai Logo" style={{ display: 'block', height: 35, width: 'auto', marginRight: 8 }} />
        <div style={{ display: "flex", gap: 32 }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: activeSection === link.href ? "#00c896" : "#fff",
                fontWeight: 600,
                fontSize: 17,
                textDecoration: "none",
                position: "relative",
                padding: "4px 0",
                transition: "color 0.18s",
              }}
              className={"nav-link" + (activeSection === link.href ? " active" : "")}
            >
              {link.label}
              <span
                className="nav-underline"
                style={{
                  display: "block",
                  height: 3,
                  borderRadius: 2,
                  background: "linear-gradient(90deg, #00c896 0%, #225588 100%)",
                  width: activeSection === link.href ? "100%" : 0,
                  transition: "width 0.22s cubic-bezier(.25,.8,.25,1)",
                  position: "absolute",
                  left: 0,
                  bottom: -2,
                }}
              />
            </a>
          ))}
        </div>
        <style jsx global>{`
          .nav-link:hover, .nav-link:focus {
            color: #00c896 !important;
          }
          .nav-link:hover .nav-underline, .nav-link:focus .nav-underline {
            width: 100% !important;
          }
        `}</style>
      </div>
    </nav>
  );
} 