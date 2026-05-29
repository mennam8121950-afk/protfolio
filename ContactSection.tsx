export default function ContactSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden px-10 md:px-16 lg:px-24 py-24" style={{ background: "#6A1B2A" }}>
      <div className="absolute bottom-0 right-0 select-none pointer-events-none" style={{ fontSize: "clamp(200px, 30vw, 380px)", color: "#7d2233", fontFamily: "Georgia, serif", lineHeight: 1 }} aria-hidden>
        MA
      </div>
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <p className="uppercase tracking-[0.3em] text-xs mb-6" style={{ color: "#D496A7", opacity: 0.8 }}>Get in Touch</p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl mb-16 leading-[1.05]" style={{ color: "#FDF6F0", fontFamily: "Georgia, serif" }}>
          Let's Build <em style={{ color: "#D496A7", fontStyle: "italic" }}>Together</em>
        </h2>
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: "#D496A7", opacity: 0.7 }}>Email</p>
              <a href="mailto:Mennam8121950@gmail.com" className="text-xl hover:opacity-80 transition-opacity" style={{ color: "#FDF6F0", fontFamily: "Georgia, serif" }}>
                Mennam8121950@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: "#D496A7", opacity: 0.7 }}>Phone</p>
              <a href="tel:01009996634" className="text-xl hover:opacity-80 transition-opacity" style={{ color: "#FDF6F0", fontFamily: "Georgia, serif" }}>
                01009996634
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: "#D496A7", opacity: 0.7 }}>LinkedIn</p>
              <a href="https://www.linkedin.com/in/menna-ashraf" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-80 transition-opacity" style={{ color: "#FDF6F0", fontFamily: "Georgia, serif" }}>
                LinkedIn Profile ↗
              </a>
            </div>
            <div className="mt-2">
              <a href="/src/imports/Resume.pdf" download className="inline-block px-7 py-3 text-xs tracking-[0.25em] uppercase border hover:bg-white hover:text-[#6A1B2A] transition-colors" style={{ color: "#FDF6F0", borderColor: "#FDF6F0" }}>
                Download My CV ↓
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center max-w-xs">
            <p className="text-xl italic leading-relaxed mb-4" style={{ color: "#D496A7", fontFamily: "Georgia, serif" }}>
              "Building systems that think, designing futures that feel."
            </p>
            <div className="w-8 h-px mb-3" style={{ background: "#D496A7" }} />
            <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "#FDF6F0", opacity: 0.6 }}>Menna Ashraf</p>
          </div>
        </div>
      </div>
    </section>
  );
}
