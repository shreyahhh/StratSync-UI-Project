import React from "react";
import Navbar from "../components/Navbar";
import DynamicCard from "../components/DynamicCard";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { FaSlack, FaHubspot, FaMicrosoft, FaPhone, FaLinkedin } from "react-icons/fa";
import { SiZendesk, SiXero, SiZoho, SiSalesforce } from "react-icons/si";
import { MdBusinessCenter } from "react-icons/md";

const mainGreen = "#00c896";
const lightGreen = "#b2ffe7";
const darkGreen = "#008c6e";
const gradient = `linear-gradient(90deg, ${mainGreen} 0%, #5fffa1 100%)`;

const useCases = [
  {
    icon: "⚠️",
    title: "Churn Risk Detection",
    desc: "A commodities trading client shows declining API usage and missed SLA thresholds. StratSync alerts the CS team 30 days before contract renewal with specific retention actions.",
    stat: "✔ 85% success rate in retaining at-risk accounts",
  },
  {
    icon: "$",
    title: "Billing Anomaly Recovery",
    desc: "Freight invoices with 60+ day delays trigger automated workflows. StratSync coordinates between collections, ops, and CS to resolve disputes and recover $2M+ in overdue revenue.",
    stat: "✔ 40% faster collections resolution",
  },
  {
    icon: "⏰",
    title: "SLA Breach Prevention",
    desc: "Critical shipment delays detected across multiple accounts. StratSync prioritizes CS interventions and proactive client communication before SLA penalties kick in.",
    stat: "✔ 70% reduction in SLA breach incidents",
  },
  {
    icon: "📊",
    title: "Account Health Scoring",
    desc: "AI combines usage data, payment history, and support tickets to identify accounts sliding toward churn. CS teams get weekly action plans prioritized by revenue impact.",
    stat: "✔ 25% improvement in retention rates",
  },
  {
    icon: "🔄",
    title: "Cross-sell Opportunities",
    desc: "High-performing accounts using only basic services get flagged for expansion. StratSync suggests optimal timing and approach based on account health and engagement patterns.",
    stat: "✔ 30% increase in expansion revenue",
  },
  {
    icon: "📄",
    title: "Contract Renewal Intelligence",
    desc: "90 days before contract expiration, StratSync analyzes project performance, billing accuracy, and relationship health to guide renewal strategy and pricing discussions.",
    stat: "✔ 92% renewal rate for managed accounts",
  },
];

const integrations = [
  { name: "Slack", icon: <FaSlack size={48} color="#4A154B" /> },
  { name: "Salesforce", icon: <SiSalesforce size={48} color="#00A1E0" /> },
  { name: "HubSpot", icon: <FaHubspot size={48} color="#FF7A59" /> },
  { name: "Zendesk", icon: <SiZendesk size={48} color="#03363D" /> },
  { name: "Xero", icon: <SiXero size={48} color="#13B5EA" /> },
  { name: "NetSuite", icon: <MdBusinessCenter size={48} color="#1A1918" /> },
  { name: "Zoho", icon: <SiZoho size={48} color="#C8202F" /> },
  { name: "Microsoft Teams", icon: <FaMicrosoft size={48} color="#6264A7" /> },
];

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', width: '100%', fontFamily: 'Inter, Arial, sans-serif' }}>
      <Navbar />
      {/* Hero Section */}
      <section id="hero" style={{
        width: '100vw',
        minHeight: '92vh',
        padding: '64px 0 32px 0',
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'none',
      }}>
        {/* Background image absolutely positioned at the bottom */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, background: `url('/landingpage.png') center center / cover no-repeat` }} />
        {/* Dark blue overlay above the image */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(20,33,61,0.95)', zIndex: 1, pointerEvents: 'none' }} />
        {/* Logo2.png left and right */}
        <img src="/logo2.png" alt="Logo left" style={{ position: 'absolute', left: 120, top: '50%', transform: 'translateY(-50%)', height: 220, zIndex: 2, opacity: 0.85 }} />
        <img src="/logo2.png" alt="Logo right" style={{ position: 'absolute', right: 120, top: '50%', transform: 'translateY(-50%)', height: 220, zIndex: 2, opacity: 0.85 }} />
        {/* Animated color blobs above overlay, below content */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', overflow: 'hidden' }}>
          <div className="blob blob1" />
          <div className="blob blob2" />
          <div className="blob blob3" />
        </div>
        <style>{`
          .blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(48px);
            opacity: 0.45;
            background: #00c896;
            mix-blend-mode: lighten;
            pointer-events: none;
            animation-timing-function: ease-in-out;
          }
          .blob1 {
            width: 260px; height: 260px;
            left: -60px; top: -40px;
            animation: blob1move 10s infinite alternate;
          }
          .blob2 {
            width: 200px; height: 200px;
            right: -40px; top: 80px;
            animation: blob2move 12s infinite alternate;
          }
          .blob3 {
            width: 180px; height: 180px;
            left: 55%; bottom: -60px;
            animation: blob3move 14s infinite alternate;
          }
          @keyframes blob1move {
            0% { transform: translateY(0) scale(1); }
            100% { transform: translateY(60px) scale(1.08); }
          }
          @keyframes blob2move {
            0% { transform: translate(0,0) scale(1); }
            100% { transform: translate(-40px, 40px) scale(1.12); }
          }
          @keyframes blob3move {
            0% { transform: translateX(0) scale(1); }
            100% { transform: translateX(-60px) scale(1.13); }
          }
        `}</style>
        <div style={{ maxWidth: 1100, width: '100%', margin: '0 auto', padding: '0 16px', boxSizing: 'border-box',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', zIndex: 3 }}>
          <AnimateOnScroll delay={0}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
              <span style={{ background: lightGreen, color: darkGreen, fontWeight: 600, borderRadius: 16, padding: '8px 28px', fontSize: 20, letterSpacing: 0.5 }}>
            AI-Powered Revenue Retention
          </span>
        </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={120}>
            <h1 style={{ fontSize: 44, fontWeight: 900, margin: 0, color: '#fff', lineHeight: 1.12, letterSpacing: -0.5, textAlign: 'center' }}>
          Your Revenue Retention<br />
              <span style={{ color: mainGreen, fontSize: 38 }}>Copilot for Customer Success</span>
        </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={240}>
            <p style={{ color: '#fff', fontSize: 20, margin: '24px 0 36px 0', fontWeight: 400, maxWidth: 700, lineHeight: 1.35, textAlign: 'center' }}>
          Agentic AI that empowers CS teams to detect risks early, retain more revenue, and<br />
          drive better customer outcomes in complex B2B operations.
        </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={360}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 40, width: '100%' }}>
              <button className="cta-demo-btn-green">
                Book a Demo
          </button>
                <button className="waitlist-btn">
            Join Waitlist
          </button>
        </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={480}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginTop: 32, zIndex: 2, width: '100%' }}>
              <div style={{ textAlign: 'center', opacity: 0.85 }}>
                <span role="img" aria-label="CRM Data" style={{ fontSize: 40, color: mainGreen, display: 'block', margin: '0 auto 10px auto' }}>👥</span>
                <div style={{ fontSize: 18, color: '#fff', fontWeight: 600 }}>CRM Data</div>
            </div>
              <div style={{ textAlign: 'center', opacity: 0.85 }}>
                <span role="img" aria-label="StratSync AI" style={{ fontSize: 40, color: mainGreen, display: 'block', margin: '0 auto 10px auto' }}>🤖</span>
                <div style={{ fontSize: 18, color: '#fff', fontWeight: 600 }}>StratSync AI</div>
          </div>
              <div style={{ textAlign: 'center', opacity: 0.85 }}>
                <span role="img" aria-label="Insights" style={{ fontSize: 40, color: mainGreen, display: 'block', margin: '0 auto 10px auto' }}>📈</span>
                <div style={{ fontSize: 18, color: '#fff', fontWeight: 600 }}>Insights</div>
          </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem" style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 16px 0 16px', textAlign: 'center' }}>
        <AnimateOnScroll>
        <h2 style={{ fontSize: 40, fontWeight: 800, color: '#18181b', marginBottom: 12 }}>
          Customer Success is Broken <span style={{ color: '#00b894' }}>in Complex Ops</span>
        </h2>
        <p style={{ color: '#555', fontSize: 20, marginBottom: 40 }}>
          In logistics, trading, and B2B operations, CS teams manage 25–30 accounts. They're drowning in dashboards, chasing overdue collections, and reacting to churn too late.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            {/* Signals buried in silos */}
            <DynamicCard style={{ background: 'linear-gradient(135deg, #1de9b6 0%, #99FF00 100%)', borderRadius: 24, boxShadow: '0 6px 24px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 #00c89633', minWidth: 260, maxWidth: 320, flex: 1, margin: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, position: 'relative', overflow: 'hidden' }}>
              {/* White overlay */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,255,255,0.3)', zIndex: 1, pointerEvents: 'none' }} />
              {/* Wavy pattern image overlay */}
              <img src="/wavy_2.jpg" alt="wavy pattern" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.13, zIndex: 0, pointerEvents: 'none' }} />
              <span style={{ fontSize: 56, marginTop: 40, marginBottom: 32, filter: 'drop-shadow(0 2px 8px #00c89644)', zIndex: 2, position: 'relative' }}>⚠️</span>
              <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8, color: '#18181b', zIndex: 2, position: 'relative' }}>Signals buried in silos</div>
              <div style={{ color: '#222', fontSize: 16, marginBottom: 40, opacity: 0.85, padding: '0 16px', textAlign: 'center', zIndex: 2, position: 'relative' }}>Critical data scattered across CRM, ticketing, and billing systems</div>
            </DynamicCard>
            {/* No visibility into billing issues */}
            <DynamicCard style={{ background: 'linear-gradient(135deg, #99FF00 0%, #1de9b6 100%)', borderRadius: 24, boxShadow: '0 6px 24px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 #00c89633', minWidth: 260, maxWidth: 320, flex: 1, margin: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, position: 'relative', overflow: 'hidden' }}>
              {/* White overlay */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,255,255,0.3)', zIndex: 1, pointerEvents: 'none' }} />
              {/* Wavy pattern image overlay */}
              <img src="/wavy_2.jpg" alt="wavy pattern" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.13, zIndex: 0, pointerEvents: 'none' }} />
              <span style={{ fontSize: 56, marginTop: 40, marginBottom: 32, filter: 'drop-shadow(0 2px 8px #00c89644)', zIndex: 2, position: 'relative' }}>❌</span>
              <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8, color: '#18181b', zIndex: 2, position: 'relative' }}>No visibility into billing issues</div>
              <div style={{ color: '#222', fontSize: 16, marginBottom: 40, opacity: 0.85, padding: '0 16px', textAlign: 'center', zIndex: 2, position: 'relative' }}>Risk-prone accounts and overdue collections go unnoticed</div>
            </DynamicCard>
            {/* Spreadsheets & firefighting */}
            <DynamicCard style={{ background: 'linear-gradient(135deg, #1de9b6 0%, #99FF00 100%)', borderRadius: 24, boxShadow: '0 6px 24px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 #00c89633', minWidth: 260, maxWidth: 320, flex: 1, margin: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, position: 'relative', overflow: 'hidden' }}>
              {/* White overlay */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,255,255,0.3)', zIndex: 1, pointerEvents: 'none' }} />
              {/* Wavy pattern image overlay */}
              <img src="/wavy_2.jpg" alt="wavy pattern" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.13, zIndex: 0, pointerEvents: 'none' }} />
              <span style={{ fontSize: 56, marginTop: 40, marginBottom: 32, filter: 'drop-shadow(0 2px 8px #00c89644)', zIndex: 2, position: 'relative' }}>📋</span>
              <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8, color: '#18181b', zIndex: 2, position: 'relative' }}>Spreadsheets & firefighting</div>
              <div style={{ color: '#222', fontSize: 16, marginBottom: 40, opacity: 0.85, padding: '0 16px', textAlign: 'center', zIndex: 2, position: 'relative' }}>Manual processes lead to retention roulette and reactive responses</div>
            </DynamicCard>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Guided Action Section */}
      <section id="action" style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 16px 0 16px', textAlign: 'center' }}>
        <AnimateOnScroll>
        <h2 style={{ fontSize: 40, fontWeight: 800, color: '#18181b', marginBottom: 12 }}>
          From Guesswork to <span style={{ color: mainGreen }}>Guided Action</span>
        </h2>
        <p style={{ color: '#555', fontSize: 20, marginBottom: 40 }}>
          StratSync brings agentic AI into your customer success stack to surface signals and suggest actions—before revenue slips away.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            {/* Signal Engine */}
            <DynamicCard style={{ background: 'linear-gradient(135deg, #00CCFF 0%, #225588 100%)', borderRadius: 24, boxShadow: '0 6px 24px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 #00c89633', minWidth: 260, maxWidth: 320, flex: 1, margin: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, position: 'relative', overflow: 'hidden' }}>
              {/* White overlay */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,255,255,0.3)', zIndex: 1, pointerEvents: 'none' }} />
              <img src="/wavy_2.jpg" alt="wavy pattern" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.13, zIndex: 0, pointerEvents: 'none' }} />
              <span style={{ fontSize: 56, marginTop: 40, marginBottom: 32, filter: 'drop-shadow(0 2px 8px #00c89644)', zIndex: 2, position: 'relative' }}>🔍</span>
              <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8, color: '#18181b', zIndex: 2, position: 'relative' }}>Signal Engine</div>
              <div style={{ color: '#222', fontSize: 16, marginBottom: 40, opacity: 0.85, padding: '0 16px', textAlign: 'center', zIndex: 2, position: 'relative' }}>Detect early churn, billing anomalies, and SLA breaks before they impact revenue</div>
            </DynamicCard>
            {/* Agentic Playbooks */}
            <DynamicCard style={{ background: 'linear-gradient(135deg, #225588 0%, #00CCFF 100%)', borderRadius: 24, boxShadow: '0 6px 24px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 #00c89633', minWidth: 260, maxWidth: 320, flex: 1, margin: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, position: 'relative', overflow: 'hidden' }}>
              {/* White overlay */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,255,255,0.3)', zIndex: 1, pointerEvents: 'none' }} />
              <img src="/wavy_2.jpg" alt="wavy pattern" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.13, zIndex: 0, pointerEvents: 'none' }} />
              <span style={{ fontSize: 56, marginTop: 40, marginBottom: 32, filter: 'drop-shadow(0 2px 8px #00c89644)', zIndex: 2, position: 'relative' }}>🤖</span>
              <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8, color: '#18181b', zIndex: 2, position: 'relative' }}>Agentic Playbooks</div>
              <div style={{ color: '#222', fontSize: 16, marginBottom: 40, opacity: 0.85, padding: '0 16px', textAlign: 'center', zIndex: 2, position: 'relative' }}>CS agents prioritize the right actions automatically with AI-driven workflows</div>
            </DynamicCard>
            {/* System Integrator */}
            <DynamicCard style={{ background: 'linear-gradient(135deg, #00CCFF 0%, #225588 100%)', borderRadius: 24, boxShadow: '0 6px 24px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 #00c89633', minWidth: 260, maxWidth: 320, flex: 1, margin: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, position: 'relative', overflow: 'hidden' }}>
              {/* White overlay */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,255,255,0.3)', zIndex: 1, pointerEvents: 'none' }} />
              <img src="/wavy_2.jpg" alt="wavy pattern" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.13, zIndex: 0, pointerEvents: 'none' }} />
              <span style={{ fontSize: 56, marginTop: 40, marginBottom: 32, filter: 'drop-shadow(0 2px 8px #00c89644)', zIndex: 2, position: 'relative' }}>⚡</span>
              <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8, color: '#18181b', zIndex: 2, position: 'relative' }}>System Integrator</div>
              <div style={{ color: '#222', fontSize: 16, marginBottom: 40, opacity: 0.85, padding: '0 16px', textAlign: 'center', zIndex: 2, position: 'relative' }}>Seamlessly connects CRM, billing, ticketing, and ops into one intelligence layer</div>
            </DynamicCard>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Use Cases Section with marquee */}
      <section id="usecases" style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 16px 0 16px', textAlign: 'center' }}>
        <AnimateOnScroll>
        <h2 style={{ fontSize: 40, fontWeight: 800, color: '#18181b', marginBottom: 12 }}>
          Real-World Use Cases
        </h2>
        <p style={{ color: '#18181b', fontSize: 20, marginBottom: 40 }}>
          See how StratSync transforms customer success operations across logistics, trading, and complex B2B industries
        </p>
        <div style={{ overflow: 'hidden', width: '100%', position: 'relative', height: 320, marginBottom: 24 }}>
          <div
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'marquee 32s linear infinite',
              gap: 32,
            }}
          >
            {[...useCases, ...useCases].map((card, i) => (
                <DynamicCard key={i} style={{
                  background: '#f6fffa',
                  borderRadius: 16,
                    boxShadow: '0 2px 8px #00c89611',
                  padding: 32,
                  minWidth: 320,
                  maxWidth: 360,
                  flex: '0 0 320px',
                  margin: 8,
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  }}>
                <div style={{ fontSize: 32, color: mainGreen, marginBottom: 12 }}>{card.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8, color: '#18181b' }}>{card.title}</div>
                <div style={{ color: '#18181b', fontSize: 16, marginBottom: 12 }}>{card.desc}</div>
                <div style={{ color: darkGreen, fontWeight: 600, fontSize: 15 }}>{card.stat}</div>
                </DynamicCard>
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
        </AnimateOnScroll>
      </section>

      {/* What You Can Expect Section */}
      <section id="expect" style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 16px 0 16px', textAlign: 'center' }}>
        <AnimateOnScroll>
        <h2 style={{ fontSize: 40, fontWeight: 800, color: '#18181b', marginBottom: 12 }}>
          What You Can Expect
        </h2>
        <p style={{ color: '#18181b', fontSize: 20, marginBottom: 40 }}>
          Real results from CS teams using StratSync AI
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
            <DynamicCard style={{ background: '#fff', borderRadius: 16, boxShadow: '0 6px 24px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 #00c89633', padding: 32, minWidth: 220, maxWidth: 260, flex: 1, margin: 8, textAlign: 'center' }}>
            <div style={{ fontSize: 32, color: mainGreen, marginBottom: 12 }}>📈</div>
            <div style={{ fontWeight: 700, fontSize: 24, marginBottom: 4, color: '#18181b' }}>20%</div>
            <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8, color: '#18181b' }}>Higher retention</div>
            <div style={{ color: '#18181b', fontSize: 15 }}>of at-risk accounts through early intervention</div>
            </DynamicCard>
            <DynamicCard style={{ background: '#fff', borderRadius: 16, boxShadow: '0 6px 24px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 #00c89633', padding: 32, minWidth: 220, maxWidth: 260, flex: 1, margin: 8, textAlign: 'center' }}>
            <div style={{ fontSize: 32, color: mainGreen, marginBottom: 12 }}>⏱️</div>
            <div style={{ fontWeight: 700, fontSize: 24, marginBottom: 4, color: '#18181b' }}>40%</div>
            <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8, color: '#18181b' }}>Faster CS response</div>
            <div style={{ color: '#18181b', fontSize: 15 }}>on critical tickets and customer issues</div>
            </DynamicCard>
            <DynamicCard style={{ background: '#fff', borderRadius: 16, boxShadow: '0 6px 24px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 #00c89633', padding: 32, minWidth: 220, maxWidth: 260, flex: 1, margin: 8, textAlign: 'center' }}>
            <div style={{ fontSize: 32, color: mainGreen, marginBottom: 12 }}>$</div>
            <div style={{ fontWeight: 700, fontSize: 24, marginBottom: 4, color: '#18181b' }}>Better</div>
            <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8, color: '#18181b' }}>Revenue alignment</div>
            <div style={{ color: '#18181b', fontSize: 15 }}>between collections, ops & customer success</div>
            </DynamicCard>
            <DynamicCard style={{ background: '#fff', borderRadius: 16, boxShadow: '0 6px 24px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 #00c89633', padding: 32, minWidth: 220, maxWidth: 260, flex: 1, margin: 8, textAlign: 'center' }}>
            <div style={{ fontSize: 32, color: mainGreen, marginBottom: 12 }}>🔔</div>
            <div style={{ fontWeight: 700, fontSize: 24, marginBottom: 4, color: '#18181b' }}>Real-time</div>
            <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8, color: '#18181b' }}>Proactive alerts</div>
            <div style={{ color: '#18181b', fontSize: 15 }}>not post-mortems and reactive firefighting</div>
            </DynamicCard>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Integrations Section with marquee */}
      <section id="integrations" style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 16px 0 16px', textAlign: 'center', position: 'relative' }}>
        <AnimateOnScroll>
        <h2 style={{ fontSize: 40, fontWeight: 800, color: '#18181b', marginBottom: 12, position: 'relative', zIndex: 1 }}>
          Works with What You Already Use
        </h2>
        <p style={{ color: '#555', fontSize: 20, marginBottom: 40, position: 'relative', zIndex: 1 }}>
          Seamlessly integrates with your existing customer success stack
        </p>
        <div style={{ overflow: 'hidden', width: '100%', position: 'relative', height: 90, marginBottom: 24, zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'marquee 28s linear infinite',
              gap: 48,
              alignItems: 'center',
              height: 90,
            }}
          >
            {[...integrations, ...integrations].map((integration, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 120, margin: '0 16px' }}>
                {integration.icon}
                <span style={{ fontSize: 16, color: '#222', fontWeight: 600, marginTop: 8 }}>{integration.name}</span>
              </div>
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
        <div style={{ color: '#555', fontSize: 16, marginTop: 8, position: 'relative', zIndex: 1, marginBottom: 48 }}>
          Don't see your stack? <span style={{ color: mainGreen, cursor: 'pointer', textDecoration: 'underline' }}>Talk to us</span> about custom integrations.
        </div>
        </AnimateOnScroll>
      </section>

      {/* Call to Action Section */}
      <section style={{ minHeight: 320, background: gradient, marginTop: 64, color: '#fff', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '64px 16px' }}>
        <AnimateOnScroll>
        <div style={{ background: 'rgba(255,255,255,0.12)', color: '#14213d', fontWeight: 500, borderRadius: 16, padding: '6px 18px', fontSize: 16, display: 'inline-block', marginBottom: 24 }}>
          Limited Early Access
        </div>
        <h2 style={{ fontSize: 40, fontWeight: 800, margin: 0, color: '#14213d', lineHeight: 1.1, marginBottom: 16 }}>
          We're Live with Select Customers
        </h2>
        <p style={{ color: '#14213d', fontSize: 20, marginBottom: 32 }}>
          We're onboarding high-growth CS teams in logistics, trading, and project-led industries. Want to be next?
        </p>
        <button className="cta-demo-btn-blue">
          Book Early Access Demo →
        </button>
        <style>{`
          .cta-demo-btn-blue {
            background: linear-gradient(90deg, #14213d 0%, #225588 100%);
            color: #fff;
            font-weight: 800;
            font-size: 22px;
            border: 2px solid #14213d;
            border-radius: 14px;
            padding: 20px 48px;
            cursor: pointer;
            box-shadow:
              0 6px 24px #14213d55,
              0 2px 8px #22558833,
              0 1.5px 0 #fff4 inset,
              0 1.5px 0 #ffffff22 inset;
            letter-spacing: 0.5px;
            transition: box-shadow 0.22s cubic-bezier(.25,.8,.25,1), transform 0.22s cubic-bezier(.25,.8,.25,1), background 0.22s, border-color 0.22s;
            position: relative;
            z-index: 1;
            outline: none;
            overflow: hidden;
          }
          .cta-demo-btn-blue::before {
            content: '';
            position: absolute;
            left: 0; right: 0; top: 0;
            height: 38%;
            border-radius: 14px 14px 40% 40%;
            background: linear-gradient(180deg, #fff8 0%, #fff2 100%, transparent 100%);
            opacity: 0.18;
            pointer-events: none;
            z-index: 2;
          }
          .cta-demo-btn-blue:hover, .cta-demo-btn-blue:focus {
            box-shadow:
              0 14px 40px #22558877,
              0 4px 24px #14213d44,
              0 2px 8px #22558833,
              0 1.5px 0 #fff4 inset,
              0 1.5px 0 #ffffff22 inset;
            transform: translateY(-5px) scale(1.045);
            background: linear-gradient(90deg, #225588 0%, #14213d 100%);
          }
          .cta-demo-btn-blue:active {
            box-shadow:
              0 2px 8px #14213d44,
              0 1px 2px #22558833,
              0 0.5px 0 #fff4 inset,
              0 1.5px 0 #ffffff22 inset;
            transform: translateY(2px) scale(0.98);
          }

          .cta-demo-btn-green {
            background: linear-gradient(90deg, #008c6e 0%, #00c896 100%);
            color: #fff;
            font-weight: 800;
            font-size: 22px;
            border: 2px solid #008c6e;
            border-radius: 14px;
            padding: 20px 48px;
            cursor: pointer;
            box-shadow:
              0 6px 24px #008c6e55,
              0 2px 8px #00c89633,
              0 1.5px 0 #fff4 inset,
              0 1.5px 0 #ffffff22 inset;
            letter-spacing: 0.5px;
            transition: box-shadow 0.22s cubic-bezier(.25,.8,.25,1), transform 0.22s cubic-bezier(.25,.8,.25,1), background 0.22s, border-color 0.22s;
            position: relative;
            z-index: 1;
            outline: none;
            overflow: hidden;
          }
          .cta-demo-btn-green::before {
            content: '';
            position: absolute;
            left: 0; right: 0; top: 0;
            height: 38%;
            border-radius: 14px 14px 40% 40%;
            background: linear-gradient(180deg, #fff8 0%, #fff2 100%, transparent 100%);
            opacity: 0.18;
            pointer-events: none;
            z-index: 2;
          }
          .cta-demo-btn-green:hover, .cta-demo-btn-green:focus {
            box-shadow:
              0 14px 40px #00c89677,
              0 4px 24px #008c6e44,
              0 2px 8px #00c89633,
              0 1.5px 0 #fff4 inset,
              0 1.5px 0 #ffffff22 inset;
            transform: translateY(-5px) scale(1.045);
            background: linear-gradient(90deg, #00c896 0%, #008c6e 100%);
          }
          .cta-demo-btn-green:active {
            box-shadow:
              0 2px 8px #008c6e44,
              0 1px 2px #00c89633,
              0 0.5px 0 #fff4 inset,
              0 1.5px 0 #ffffff22 inset;
            transform: translateY(2px) scale(0.98);
          }
        `}</style>
        <style>{`
          .waitlist-btn {
            background: linear-gradient(90deg, #fff 0%, #e0fff2 100%);
            color: #008c6e;
            font-weight: 800;
            font-size: 20px;
            border: 2px solid #b2ffe7;
            border-radius: 14px;
            padding: 16px 40px;
            cursor: pointer;
            box-shadow: 0 2px 12px #00c89622, 0 1.5px 6px #00c89611;
            letter-spacing: 0.5px;
            transition: box-shadow 0.22s cubic-bezier(.25,.8,.25,1), transform 0.22s cubic-bezier(.25,.8,.25,1), background 0.22s, border-color 0.22s, color 0.22s;
            position: relative;
            z-index: 1;
            outline: none;
            overflow: hidden;
          }
          .waitlist-btn:hover, .waitlist-btn:focus {
            box-shadow: 0 8px 32px #00c89644, 0 2px 16px #b2ffe744;
            background: linear-gradient(90deg, #e0fff2 0%, #b2ffe7 100%);
            color: #00c896;
            transform: translateY(-3px) scale(1.035);
            border-color: #00c896;
          }
        `}</style>
        </AnimateOnScroll>
      </section>

      {/* Footer */}
      <footer id="footer" style={{ minHeight: 200, background: '#14213d', color: '#fff', marginTop: 0, padding: '48px 0 24px 0' }}>
        <AnimateOnScroll>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32 }}>
          <div style={{ flex: 2, minWidth: 220 }}>
            <div style={{ fontWeight: 800, fontSize: 22, marginBottom: 8 }}>StratSync.ai</div>
            <div style={{ color: '#b2ffe7', fontSize: 16, marginBottom: 16 }}>
              Your revenue retention copilot for customer success teams in complex B2B operations.
            </div>
            <div style={{ color: '#b2ffe7', fontSize: 16, marginBottom: 8, display: 'flex', gap: 16 }}>
              <a href="tel:+1234567890" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <FaPhone style={{ fontSize: 18 }} /> Contact Us
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <FaLinkedin style={{ fontSize: 18 }} /> LinkedIn
              </a>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 160 }}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Product</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <a href="#" className="footer-link">Signal Engine</a>
              <a href="#" className="footer-link">Agentic Playbooks</a>
              <a href="#" className="footer-link">Integrations</a>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 160 }}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Company</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#b2ffe7', fontSize: 15, marginTop: 32 }}>
          © 2024 StratSync.ai. All rights reserved.
        </div>
        </AnimateOnScroll>
      </footer>
      <style>{`
        .dynamic-card {
          transition: transform 0.25s cubic-bezier(.25,.8,.25,1), box-shadow 0.25s cubic-bezier(.25,.8,.25,1);
          will-change: transform, box-shadow;
          box-shadow: 0 2px 16px #00c89622;
          cursor: pointer;
          perspective: 800px;
        }
        .dynamic-card:hover {
          transform: scale(1.045) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));
          box-shadow: 0 12px 32px #00c89655, 0 2px 16px #00c89622;
          z-index: 10;
        }
      `}</style>
      <style>{`
        .footer-link {
          color: #b2ffe7;
          font-size: 16px;
          margin-bottom: 8px;
          text-decoration: none;
          display: block;
          transition: color 0.18s, text-decoration 0.18s;
        }
        .footer-link:hover, .footer-link:focus {
          color: #225588;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
} 