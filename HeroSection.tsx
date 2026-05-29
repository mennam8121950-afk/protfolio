import { useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profilePhoto from "@/imports/photo_2026-05-28_19-43-04.jpg";

const codeLines = [
  "import numpy as np",
  "import tensorflow as tf",
  "from sklearn.ensemble import RandomForest",
  "def build_model(layers, lr=0.001):",
  "    model = tf.keras.Sequential()",
  "    model.compile(optimizer='adam')",
  "subnet_mask = '255.255.255.0'",
  "TCP/IP  DNS  DHCP  Routing",
  "ip_address = '192.168.1.1'",
  "router.configure(protocol='OSPF')",
  "X_train, X_test = train_test_split(df)",
  "accuracy = model.evaluate(X_test)",
  "feature_importances = forest.feature_",
  "broadcast = '255.255.255.255'",
  "OSI Layers  Physical  Network  Transport",
  "for epoch in range(100):",
  "    loss = criterion(outputs, labels)",
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = codeLines.map((line) => ({
      text: line,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.2 + Math.random() * 0.3,
      opacity: 0.07 + Math.random() * 0.1,
      fontSize: 10 + Math.floor(Math.random() * 4),
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.font = `${p.fontSize}px monospace`;
        ctx.fillStyle = `rgba(253,235,210,${p.opacity})`;
        ctx.fillText(p.text, p.x, p.y);
        p.y -= p.speed;
        if (p.y < -20) {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
        }
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden">
      <div className="relative flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20 w-full md:w-1/2 z-10" style={{ background: "#FDF6F0" }}>
        <p className="uppercase tracking-[0.25em] text-xs mb-8" style={{ color: "#6A1B2A" }}>
          menna ashraf
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-8" style={{ color: "#6A1B2A", fontFamily: "Georgia, serif" }}>
          The go-to student engineer for{" "}
          <em style={{ color: "#D496A7", fontStyle: "italic" }}>AI systems,</em>{" "}
          smart design, and what the future needs.
        </h1>
        <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#6A1B2A", opacity: 0.7 }}>
          Engineering is not copy &amp; paste — every system is different and
          deserves to be built with intention. I'm here to help you think smart,
          design purposefully, and build things that actually matter.
        </p>
      </div>

      <div className="relative flex items-center justify-center w-full md:w-1/2 min-h-[50vh] md:min-h-screen overflow-hidden" style={{ background: "#2A676D" }}>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }} />
        <div className="absolute top-6 right-8 text-xs tracking-widest uppercase opacity-20 pointer-events-none" style={{ color: "#FDEBD2", fontFamily: "monospace" }}>
          TCP/IP · OSI · DNS
        </div>
        <div className="absolute bottom-10 left-8 text-xs tracking-widest uppercase opacity-20 pointer-events-none" style={{ color: "#FDEBD2", fontFamily: "monospace" }}>
          DHCP · Routing · Subnet
        </div>
        <div className="relative z-10 w-64 h-80 md:w-80 md:h-[420px] lg:w-96 lg:h-[500px] overflow-hidden">
          <ImageWithFallback src={profilePhoto} alt="Menna Ashraf" className="w-full h-full object-cover object-top" />
        </div>
      </div>
    </section>
  );
}
