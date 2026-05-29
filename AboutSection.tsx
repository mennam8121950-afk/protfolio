export default function AboutSection() {
  const gpa = 3.07;
  const maxGpa = 4.0;
  const ratio = gpa / maxGpa;
  const cx = 120, cy = 120, outerR = 100;
  const innerR = outerR * ratio;
  const sides = 7;

  const getPoints = (r: number) =>
    Array.from({ length: sides }, (_, i) => {
      const angle = (2 * Math.PI * i) / sides - Math.PI / 2;
      return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
    });

  const outerPts = getPoints(outerR);
  const innerPts = getPoints(innerR);
  const toPolyStr = (pts: number[][]) => pts.map((p) => p.join(",")).join(" ");

  return (
    <section className="w-full py-24 px-10 md:px-16 lg:px-24" style={{ background: "#FDEBD2" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-16">
        <div className="flex-1">
          <p className="uppercase tracking-[0.25em] text-xs mb-6" style={{ color: "#2A676D" }}>About Me</p>
          <h2 className="text-4xl md:text-5xl leading-[1.1] mb-2" style={{ color: "#6A1B2A", fontFamily: "Georgia, serif" }}>
            Engineering with purpose,
          </h2>
          <h2 className="text-4xl md:text-5xl leading-[1.1] mb-6 italic" style={{ color: "#D496A7", fontFamily: "Georgia, serif" }}>
            for the intelligent future.
          </h2>
          <div className="w-48 h-px mb-8" style={{ background: "#D496A7" }} />
          <p className="text-sm leading-relaxed max-w-lg" style={{ color: "#6A1B2A", opacity: 0.8 }}>
            Intelligent Systems Engineering student at Helwan National University, class of 2026.
            I don't just study systems; I analyze them, design them, and bring them to life.
            By merging AI-driven logic with purpose-driven hardware, I build technology that bridges
            the gap between raw data and human experience. Here, circuits meet creativity, and every
            line of code is a step toward designing a smarter future.
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center">
          <svg width={240} height={240} viewBox="0 0 240 240">
            <polygon points={toPolyStr(outerPts)} fill="none" stroke="#D496A7" strokeWidth="1.5" opacity="0.4" />
            <polygon points={toPolyStr(innerPts)} fill="#D496A7" fillOpacity="0.15" stroke="#D496A7" strokeWidth="1.5" />
            {outerPts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={3} fill="#D496A7" opacity="0.6" />)}
            {innerPts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={2.5} fill="#D496A7" />)}
            <text x={cx} y={cy - 6} textAnchor="middle" fontSize="32" fontFamily="Georgia, serif" fill="#6A1B2A">{gpa}</text>
            <text x={cx} y={cy + 16} textAnchor="middle" fontSize="10" letterSpacing="3" fontFamily="sans-serif" fill="#6A1B2A" opacity="0.6">GPA</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
