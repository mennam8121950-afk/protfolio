import { ImageWithFallback } from "./figma/ImageWithFallback";
import cert1 from "@/imports/photo_1_2026-05-28_18-43-04.jpg";
import cert2 from "@/imports/photo_6_2026-05-28_18-43-04.jpg";
import cert3 from "@/imports/photo_2_2026-05-28_18-43-04.jpg";
import cert4 from "@/imports/photo_8_2026-05-28_18-43-04.jpg";
import cert5 from "@/imports/photo_5_2026-05-28_18-43-04.jpg";

const credentials = [
  { title: "AI Career Essentials (AICE)", issuer: "ALX Africa · 2024" },
  { title: "AI & ML Summer Camp", issuer: "Sprints × Microsoft" },
  { title: "Mobile Dev by Flutter", issuer: "Sprints" },
  { title: "Networking Basics", issuer: "Cisco Networking Academy" },
  { title: "Freelance Training Program", issuer: "ITIDA & EYouth" },
  { title: "AI Ambassadors Program", issuer: "NTI & Ministry of Communications · 2024" },
];

const certImages = [
  { src: cert1, alt: "ALX AI Career Essentials Certificate" },
  { src: cert2, alt: "Sprints x Microsoft Certificate" },
  { src: cert3, alt: "Sprints Flutter Certificate" },
  { src: cert4, alt: "Cisco Networking Certificate" },
  { src: cert5, alt: "ITIDA Freelance Certificate" },
];

const rotations = [-2, 1.5, -1, 2, -1.5];

export default function CredentialsSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
      <div className="absolute inset-0 flex" aria-hidden>
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className="flex-1 h-full" style={{ background: i % 2 === 0 ? "#6A1B2A" : "#2A676D" }} />
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4">
        <div className="w-full max-w-2xl px-12 py-14" style={{ background: "#FDEBD2" }}>
          <p className="text-center uppercase tracking-[0.3em] text-xs mb-6" style={{ color: "#2A676D" }}>What I've Earned</p>
          <h2 className="text-center text-3xl md:text-4xl italic mb-10" style={{ color: "#6A1B2A", fontFamily: "Georgia, serif" }}>
            Here's what's in my credential stack:
          </h2>
          <div className="flex flex-col gap-0">
            {credentials.map((c, i) => (
              <div key={c.title}>
                <div className="py-5 text-center">
                  <p className="text-base md:text-lg" style={{ color: "#6A1B2A", fontFamily: "Georgia, serif" }}>{c.title}</p>
                  <p className="text-xs tracking-[0.2em] uppercase mt-1" style={{ color: "#2A676D" }}>{c.issuer}</p>
                </div>
                {i < credentials.length - 1 && (
                  <div className="w-full h-px" style={{ background: "#D496A7", opacity: 0.5 }} />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          {certImages.map((c, i) => (
            <div key={i} className="w-28 h-20 overflow-hidden shadow-lg"
              style={{ background: "#fff", border: "3px solid #fff", transform: `rotate(${rotations[i] ?? 0}deg)` }}>
              <ImageWithFallback src={c.src} alt={c.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
