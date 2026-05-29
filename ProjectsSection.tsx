import { useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import mlProject from "@/imports/photo_3_2026-05-28_18-43-04.jpg";
import biProject from "@/imports/photo_2026-05-28_19-42-34.jpg";
import logicProject from "@/imports/photo_9_2026-05-28_18-43-04.jpg";

const projects = [
  {
    tag: "AI & MACHINE LEARNING",
    title: "AI & Machine Learning",
    description: "Heart disease prediction using ML models — Random Forest, SVM, KNN. Feature selection, PCA dimensionality reduction, and ROC curve analysis. Built during Sprints x Microsoft Summer Camp.",
    image: mlProject,
    alt: "ML Feature Importance chart",
  },
  {
    tag: "DATA VISUALIZATION",
    title: "Data Visualization",
    description: "Interactive Power BI dashboards for business intelligence. Sales analytics, multi-channel data, and KPI tracking across global markets.",
    image: biProject,
    alt: "Power BI dashboard",
  },
  {
    tag: "HARDWARE",
    title: "Digital Logic Design",
    description: "Logic gate circuit design and simulation using Proteus 8. Built complete digital systems from truth tables through schematic capture.",
    image: logicProject,
    alt: "Digital logic schematic capture",
  },
];

type ComponentProps = { x: number; y: number; scale?: number; color: string; delay: number };

const FLOATING_COMPONENTS: Array<ComponentProps & { type: string }> = [
  { type: "diode",    x: 4,  y: 8,  scale: 1.2, color: "#D496A7", delay: 0 },
  { type: "resistor", x: 88, y: 12, scale: 1.0, color: "#6A1B2A", delay: 0.5 },
  { type: "and",      x: 6,  y: 55, scale: 1.3, color: "#2A676D", delay: 1.2 },
  { type: "diode",    x: 85, y: 60, scale: 1.1, color: "#D496A7", delay: 0.3 },
  { type: "capacitor",x: 2,  y: 30, scale: 1.0, color: "#2A676D", delay: 0.8 },
  { type: "or",       x: 90, y: 35, scale: 1.2, color: "#6A1B2A", delay: 1.5 },
  { type: "resistor", x: 48, y: 3,  scale: 0.9, color: "#6A1B2A", delay: 0.2 },
  { type: "nand",     x: 10, y: 80, scale: 1.1, color: "#2A676D", delay: 1.0 },
  { type: "diode",    x: 78, y: 82, scale: 1.0, color: "#D496A7", delay: 0.6 },
  { type: "capacitor",x: 55, y: 90, scale: 1.2, color: "#2A676D", delay: 1.8 },
  { type: "and",      x: 35, y: 5,  scale: 0.9, color: "#2A676D", delay: 0.9 },
  { type: "or",       x: 70, y: 7,  scale: 1.0, color: "#6A1B2A", delay: 1.3 },
];

function FloatingComponent({ item }: { item: typeof FLOATING_COMPONENTS[0] }) {
  const s = item.scale ?? 1;
  const animName = `float-${item.delay.toString().replace(".", "")}`;

  const baseStyle: React.CSSProperties = {
    position: "absolute",
    left: `${item.x}%`,
    top: `${item.y}%`,
    animation: `floatEl 4s ease-in-out ${item.delay}s infinite alternate`,
    opacity: 0.22,
    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.08))",
  };

  if (item.type === "resistor") return (
    <svg width={60 * s} height={24 * s} viewBox="0 0 60 24" style={baseStyle}>
      <line x1="0" y1="12" x2="12" y2="12" stroke={item.color} strokeWidth="1.8" />
      <rect x="12" y="5" width="36" height="14" fill="none" stroke={item.color} strokeWidth="1.8" rx="1" />
      <line x1="48" y1="12" x2="60" y2="12" stroke={item.color} strokeWidth="1.8" />
    </svg>
  );

  if (item.type === "capacitor") return (
    <svg width={36 * s} height={36 * s} viewBox="0 0 36 36" style={baseStyle}>
      <line x1="0" y1="18" x2="14" y2="18" stroke={item.color} strokeWidth="1.8" />
      <line x1="14" y1="6" x2="14" y2="30" stroke={item.color} strokeWidth="2.5" />
      <line x1="22" y1="6" x2="22" y2="30" stroke={item.color} strokeWidth="2.5" />
      <line x1="22" y1="18" x2="36" y2="18" stroke={item.color} strokeWidth="1.8" />
    </svg>
  );

  if (item.type === "diode") return (
    <svg width={52 * s} height={28 * s} viewBox="0 0 52 28" style={baseStyle}>
      <line x1="0" y1="14" x2="14" y2="14" stroke={item.color} strokeWidth="1.8" />
      <polygon points="14,5 14,23 32,14" fill={item.color} fillOpacity="0.7" />
      <line x1="32" y1="5" x2="32" y2="23" stroke={item.color} strokeWidth="2.2" />
      <line x1="32" y1="14" x2="52" y2="14" stroke={item.color} strokeWidth="1.8" />
      <circle cx="6" cy="14" r="2" fill={item.color} />
      <circle cx="46" cy="14" r="2" fill={item.color} />
    </svg>
  );

  if (item.type === "and") return (
    <svg width={60 * s} height={44 * s} viewBox="0 0 60 44" style={baseStyle}>
      <line x1="0" y1="12" x2="20" y2="12" stroke={item.color} strokeWidth="1.6" />
      <line x1="0" y1="32" x2="20" y2="32" stroke={item.color} strokeWidth="1.6" />
      <line x1="48" y1="22" x2="60" y2="22" stroke={item.color} strokeWidth="1.6" />
      <path d="M20 6 L20 38 Q50 38 50 22 Q50 6 20 6 Z" fill="none" stroke={item.color} strokeWidth="1.8" />
      <text x="28" y="26" fontSize="9" fill={item.color} fontFamily="monospace">AND</text>
    </svg>
  );

  if (item.type === "or") return (
    <svg width={60 * s} height={44 * s} viewBox="0 0 60 44" style={baseStyle}>
      <line x1="0" y1="14" x2="18" y2="14" stroke={item.color} strokeWidth="1.6" />
      <line x1="0" y1="30" x2="18" y2="30" stroke={item.color} strokeWidth="1.6" />
      <line x1="50" y1="22" x2="60" y2="22" stroke={item.color} strokeWidth="1.6" />
      <path d="M14 6 Q22 22 14 38 Q34 32 50 22 Q34 12 14 6 Z" fill="none" stroke={item.color} strokeWidth="1.8" />
      <text x="24" y="26" fontSize="9" fill={item.color} fontFamily="monospace">OR</text>
    </svg>
  );

  if (item.type === "nand") return (
    <svg width={68 * s} height={44 * s} viewBox="0 0 68 44" style={baseStyle}>
      <line x1="0" y1="12" x2="20" y2="12" stroke={item.color} strokeWidth="1.6" />
      <line x1="0" y1="32" x2="20" y2="32" stroke={item.color} strokeWidth="1.6" />
      <line x1="56" y1="22" x2="68" y2="22" stroke={item.color} strokeWidth="1.6" />
      <path d="M20 6 L20 38 Q48 38 48 22 Q48 6 20 6 Z" fill="none" stroke={item.color} strokeWidth="1.8" />
      <circle cx="52" cy="22" r="4" fill="none" stroke={item.color} strokeWidth="1.6" />
      <text x="26" y="26" fontSize="8" fill={item.color} fontFamily="monospace">NAND</text>
    </svg>
  );

  return null;
}

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-24 px-10 md:px-16 lg:px-24 overflow-hidden" style={{ background: "#FDF6F0" }}>
      <style>{`
        @keyframes floatEl {
          0%   { transform: translateX(0px) rotate(0deg); }
          40%  { transform: translateX(18px) rotate(4deg); }
          100% { transform: translateX(8px) rotate(-3deg); }
        }
      `}</style>
      {FLOATING_COMPONENTS.map((item, i) => (
        <FloatingComponent key={i} item={item} />
      ))}

      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.25em] text-xs mb-4" style={{ color: "#2A676D" }}>My Projects</p>
        <h2 className="text-4xl md:text-5xl mb-14" style={{ color: "#6A1B2A", fontFamily: "Georgia, serif" }}>
          My Engineering <em style={{ color: "#D496A7", fontStyle: "italic" }}>Lab</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="flex flex-col" style={{ background: "#FDEBD2" }}>
              <div className="w-full h-48 overflow-hidden">
                <ImageWithFallback src={p.image} alt={p.alt} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#2A676D" }}>{p.tag}</span>
                <h3 className="text-lg mb-3" style={{ color: "#6A1B2A", fontFamily: "Georgia, serif" }}>{p.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6A1B2A", opacity: 0.75 }}>{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
