import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-[#050505] text-white overflow-hidden">
      
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        {/* HERO IMAGE */}
        <div className="absolute inset-0 overflow-hidden">
 <img
    src="/hero.jpg"
    alt="Minicar 30000"
    className="absolute inset-y-0 right-0 w-[100%] h-full object-cover object-center"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />

</div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* GOLD GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,215,0,0.18),_transparent_40%)]" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-14 pt-6 pb-20">

          {/* NAVBAR */}
          <div className="backdrop-blur-xl bg-black/35 border border-white/10 rounded-3xl px-6 lg:px-8 py-5 flex items-center justify-between">

            <div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                Minicar <span className="text-yellow-400">30000</span>
              </h1>

              <p className="text-gray-400 text-sm mt-1">
                Wetzlar • Seit über 25 Jahren
              </p>
            </div>

            <div className="hidden xl:flex items-center gap-8 text-sm text-gray-300">

              <a
                href="#about"
                className="text-white hover:text-yellow-400 transition"
              >
                Über uns
              </a>

              <a
                href="#services"
                className="text-white hover:text-yellow-400 transition"
              >
                Leistungen
              </a>

              <a
                href="#contact"
                className="text-white hover:text-yellow-400 transition"
              >
                Vorbestellung
              </a>

              <a
                href="#reviews"
                className="text-white hover:text-yellow-400 transition"
              >
                Bewertungen
              </a>

              <a
                href="#impressum"
                className="text-white hover:text-yellow-400 transition"
              >
                Impressum
              </a>
            </div>

            <a
              href="tel:0644130000"
              className="bg-yellow-400 text-black font-bold px-5 sm:px-7 py-3 rounded-2xl hover:scale-105 transition duration-300 shadow-2xl"
            >
              ☎ 06441 30000
            </a>
          </div>

          {/* HERO CONTENT */}
         <div className="pt-10 sm:pt-14 lg:pt-16 pb-6 max-w-[560px]">

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md px-5 py-3 rounded-full text-sm text-gray-300 mb-10">
              <span className="text-yellow-400">★</span>
              Ihr zuverlässiger Fahrdienst in Wetzlar
            </div>

            <h2 className="text-[2.7rem] sm:text-[4rem] lg:text-[5rem] font-black leading-[0.98] tracking-tight mb-10">
              Schnell.
              <br />
              Pünktlich.
              <br />
              Zuverlässig.
              <br />
              <span className="text-yellow-400">
                30tausend.
              </span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-3xl mb-14">
              Moderner Fahrservice in Wetzlar – zuverlässig,
              komfortabel und rund um die Uhr erreichbar.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-14">

              <a
                href="tel:0644130000"
                className="bg-yellow-400 text-black text-center font-bold text-lg px-10 py-5 rounded-3xl hover:scale-105 transition duration-300"
              >
                Jetzt anrufen
              </a>

              <a
                href="#contact"
                className="border border-white/10 bg-white/5 backdrop-blur-md text-white text-center text-lg px-10 py-5 rounded-3xl hover:bg-white/10 transition duration-300"
              >
                Vorbestellung anfragen
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-gray-300 text-lg">

              <div className="flex items-center gap-2">
                📍 Wetzlar & Umgebung
              </div>

              <div className="flex items-center gap-2">
                ☎ 24 Stunden erreichbar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative py-16 lg:py-24 overflow-hidden -mt-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,215,0,0.08),_transparent_45%)]" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* TEXT */}
          <div>

            <p className="text-yellow-400 tracking-[0.35em] uppercase text-sm mb-6">
              Seit über 25 Jahren in Wetzlar
            </p>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-relaxed mb-10">
              Persönlich.
              <br />
              Ortsnah.
              <br />
              Zuverlässig.
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl">
              Minicar 30000 steht seit über 25 Jahren für zuverlässigen
              Fahrservice in Wetzlar und Umgebung.
              Ob Flughafentransfer, Krankenfahrt oder Vorbestellung –
              wir bringen unsere Fahrgäste sicher ans Ziel.
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
                  className="bg-white/5 border border-white/10 rounded-3xl px-6 py-5 backdrop-blur-md"
                >
                  <p className="text-lg font-semibold">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">

            <img
              src="/vito.jpg"
              alt="Mercedes Vito"
              className="w-full h-[500px] lg:h-[750px] object-cover rounded-[40px]"
            />

            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 lg:py-32"
      >
        <div className="text-center mb-20">

          <p className="text-yellow-400 tracking-[0.35em] uppercase text-sm mb-4">
            Unsere Leistungen
          </p>

          <h2 className="text-5xl sm:text-6xl font-black">
            Unsere Fahrten & Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

          {[
            "PKW & 9-Sitzer",
            "Flughafentransfer",
            "Kranken- & Dialysefahrten",
            "Kurierfahrten",
            "Schülerbeförderung",
            "Limousinenservice",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[32px] p-10 hover:border-yellow-400/30 hover:-translate-y-1 transition duration-300 backdrop-blur-md"
            >
              <p className="text-2xl font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 lg:py-32"
      >
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-4 sm:p-8 lg:p-16 backdrop-blur-xl overflow-hidden">

          <div className="text-center mb-14">

            <p className="text-yellow-400 tracking-[0.35em] uppercase text-sm mb-4">
              Vorbestellung
            </p>

            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              Fahrt einfach vorbestellen
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Nutzen Sie das Formular für geplante Fahrten,
              Flughafentransfers oder Krankenfahrten.
            </p>
          </div>
<form
  action="https://formsubmit.co/info@minicar30000.de"
  method="POST"
  className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-5xl mx-auto"
>
    

          >

            <input type="hidden" name="_captcha" value="false" />

            <input
              required
              type="text"
              name="name"
              placeholder="Name *"
              className="bg-black/30 text-white placeholder:text-gray-400 border border-white/10 rounded-3xl px-6 py-5 outline-none focus:border-yellow-400"
            />

            <input
              required
              type="tel"
              name="telefon"
              placeholder="Telefonnummer *"
              className="bg-black/30 text-white placeholder:text-gray-400 border border-white/10 rounded-3xl px-6 py-5 outline-none focus:border-yellow-400"
            />

            <input
              required
              type="text"
              name="abholort"
              placeholder="Abholort *"
              className="bg-black/30 text-white placeholder:text-gray-400 border border-white/10 rounded-3xl px-6 py-5 outline-none focus:border-yellow-400"
            />

            <input
              required
              type="text"
              name="zielort"
              placeholder="Zielort *"
              className="bg-black/30 text-white placeholder:text-gray-400 border border-white/10 rounded-3xl px-6 py-5 outline-none focus:border-yellow-400"
            />

            <input
              required
              type="date"
              name="datum"
              className="bg-black/30 text-white placeholder:text-gray-400 border border-white/10 rounded-3xl px-6 py-5 outline-none focus:border-yellow-400"
            />

            <input
              required
              type="time"
              name="uhrzeit"
              className="bg-black/30 text-white placeholder:text-gray-400 border border-white/10 rounded-3xl px-6 py-5 outline-none focus:border-yellow-400"
            />

            <textarea
              rows="5"
              name="nachricht"
              placeholder="Weitere Informationen (optional)"
              className="md:col-span-2 bg-black/30 border border-white/10 rounded-3xl px-6 py-5 outline-none focus:border-yellow-400"
            />

            <div className="md:col-span-2 flex items-start gap-3 bg-black/20 border border-white/10 rounded-2xl px-5 py-4">
              <input
                required
                type="checkbox"
                className="mt-1 accent-yellow-400"
              />

              <p className="text-sm text-gray-400">
                Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.
              </p>
            </div>

            <button
              type="submit"
              className="md:col-span-2 bg-yellow-400 text-black font-bold text-lg py-5 rounded-3xl hover:scale-[1.01] transition"
            >
              Anfrage senden
            </button>
          </form>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        id="reviews"
        className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 lg:py-32"
      >
        <div className="text-center mb-20">

          <p className="text-yellow-400 tracking-[0.35em] uppercase text-sm mb-4">
            Bewertungen
          </p>

          <h2 className="text-5xl sm:text-6xl font-black">
            Das sagen unsere Fahrgäste
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          {[
            {
              name: "Serdalabi",
              text: "Immer pünktlich und unschlagbare Preise.",
            },
            {
              name: "Jürgen B.",
              text: "Sehr nette Fahrer. Man fühlt sich sicher und wohl.",
            },
            {
              name: "Damjan Dajovic",
              text: "Sympathische Fahrer und sehr zuverlässiger Service.",
            },
            {
              name: "Baro",
              text: "Einer der besten Fahrdienste in Wetzlar.",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-md"
            >
              <div className="text-yellow-400 text-2xl mb-5">
                ★★★★★
              </div>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                “{review.text}”
              </p>

              <p className="font-semibold text-lg">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="impressum"
        className="border-t border-white/10 py-28 px-6 lg:px-12"
      >
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16">

          <div>
            <h3 className="text-5xl font-black mb-8">
              Minicar <span className="text-yellow-400">30000</span>
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              Moderner Fahrservice – zuverlässig,
              sicher und rund um die Uhr erreichbar.
            </p>

            <a
              href="tel:0644130000"
              className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition"
            >
              ☎ 06441 30000
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">

            <div>
              <h4 className="text-2xl font-bold mb-6">
                Kontakt
              </h4>

              <div className="space-y-3 text-gray-400">
                <p>VPW GmbH · Minicar 30000</p>
                <p>Bahnhof Nordseite 10</p>
                <p>35576 Wetzlar</p>
                <p>06441 30000</p>
                <p>info@minicar30000.de</p>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6">
                Unternehmen
              </h4>

              <div className="space-y-3 text-gray-400">
                <p>Geschäftsführer: S. R. Salavati</p>
                <p>HRB 6427</p>
                <p>Amtsgericht Wetzlar</p>
                <p>Finanzamt Gießen</p>
              </div>
            </div>
          </div>
        </div>

      <div className="border-t border-white/10 mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">

  <p>
    © 2026 Minicar 30000
  </p>

  <div className="flex items-center gap-6">

    <a
      href="#impressum"
      className="text-white hover:text-yellow-400 transition"
    >
      Impressum
    </a>

    <a
      href="https://www.e-recht24.de"
target="_blank"
      className="text-white hover:text-yellow-400 transition"
    >
      Datenschutzerklärung
    </a>

  </div>
</div>
            </footer>
    </div>
  );
}
     
