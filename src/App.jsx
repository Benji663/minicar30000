import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-[#050505] text-white overflow-hidden">
      
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        
        {/* Background Image */}
        <img
          src="/hero.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,215,0,0.15),_transparent_40%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-6 pb-16">

          {/* NAVBAR */}
          <div className="border border-white/10 bg-black/40 backdrop-blur-xl rounded-3xl px-6 py-5 flex items-center justify-between">

            <div>
              <h1 className="text-3xl font-black">
                Minicar <span className="text-yellow-400">30000</span>
              </h1>

              <p className="text-gray-400 text-sm">
                Wetzlar • Seit über 25 Jahren
              </p>
            </div>

            <div className="hidden lg:flex gap-8 text-sm text-gray-300">
              <a href="#about" className="hover:text-yellow-400 transition">
                Über uns
              </a>

              <a href="#services" className="hover:text-yellow-400 transition">
                Unsere Leistungen
              </a>

              <a href="#contact" className="hover:text-yellow-400 transition">
                Vorbestellung
              </a>

              <a href="#reviews" className="hover:text-yellow-400 transition">
                Bewertungen
              </a>

              <a href="#impressum" className="hover:text-yellow-400 transition">
                Impressum
              </a>
            </div>

            <a
              href="tel:0644130000"
              className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-2xl hover:scale-105 transition"
            >
              ☎ 06441 30000
            </a>
          </div>

          {/* HERO CONTENT */}
          <div className="pt-16 sm:pt-24 pb-10 max-w-4xl">

            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full text-sm text-gray-300 mb-8">
              <span className="text-yellow-400">★</span>
              Ihr zuverlässiger Fahrdienst in Wetzlar
            </div>

            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.95] mb-8">
              Schnell.
              <br />
              Sicher.
              <br />
              <span className="text-yellow-400">30Tausend.</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
              Moderner Fahrservice – zuverlässig und rund um die Uhr erreichbar.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">

              <a
                href="tel:0644130000"
                className="bg-yellow-400 text-black font-bold px-10 py-5 rounded-3xl text-lg hover:scale-105 transition"
              >
                Jetzt anrufen
              </a>

              <a
                href="#contact"
                className="border border-white/10 bg-white/5 px-10 py-5 rounded-3xl text-lg hover:bg-white/10 transition"
              >
                Vorbestellung anfragen
              </a>
            </div>

            <div className="flex gap-8 text-gray-300">
              <div>📍 Wetzlar & Umgebung</div>
              <div>☎ 24h erreichbar</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,215,0,0.08),_transparent_45%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <p className="text-yellow-400 tracking-[0.35em] uppercase text-sm mb-6">
              Seit über 25 Jahren in Wetzlar
            </p>

            <h2 className="text-6xl font-black leading-tight mb-8">
              Persönlich.
              <br />
              Ortsnah.
              <br />
              Zuverlässig.
            </h2>

            <p className="text-gray-300 text-xl leading-relaxed mb-10">
              Minicar 30000 steht seit über 25 Jahren für zuverlässigen Fahrservice in Wetzlar und Umgebung.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                "24 Stunden erreichbar",
                "Vorbestellungen möglich",
                "Ortskundige Fahrer",
                "Zuverlässiger Service",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-3xl px-6 py-5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <img
              src="/vito.jpg"
              alt="Mercedes Vito Taxi"
              className="rounded-[40px] w-full h-[650px] object-cover"
            />

            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 lg:px-8 py-24"
      >
        <div className="text-center mb-16">

          <p className="text-yellow-400 tracking-[0.35em] uppercase text-sm mb-4">
            Unsere Leistungen
          </p>

          <h2 className="text-5xl font-black">
            Unsere Fahrten & Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "PKW & 9-Sitzer",
            "Flughafentransfer",
            "Krankenfahrten",
            "Kurierfahrten",
            "Schülerbeförderung",
            "Limousinenservice",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8 hover:border-yellow-400/30 transition"
            >
              <p className="text-2xl font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
