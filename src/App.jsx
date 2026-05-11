import { motion } from "framer-motion";

export default function TaxiFunkWebsite() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white overflow-hidden scroll-smooth">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-[#0B0B0F] min-h-screen"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#FFD700,_transparent_35%)] blur-3xl" />

        <img
          src="./public/hero.jpg"
          alt="Minicar 30000 Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45] scale-[1.05]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[#0B0B0F]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 relative z-10">
          <div className="sticky top-3 sm:top-0 z-50 bg-black/70 supports-[backdrop-filter]:bg-black/25 backdrop-blur-xl border border-white/10 rounded-2xl px-3 sm:px-6 py-3 sm:py-4 mb-8 sm:mb-12 flex items-center justify-between gap-3 sm:gap-4">
            <div className="hidden xl:flex items-center gap-6 text-sm text-gray-300 absolute left-1/2 -translate-x-1/2">
              <a href="#ueberuns" className="relative hover:text-yellow-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">
                Über uns
              </a>
              <a href="#leistungen" className="relative hover:text-yellow-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">
                Unsere Leistungen
              </a>
              <a href="#kontaktformular" className="relative hover:text-yellow-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">
                Vorbestellung
              </a>
              <a href="#bewertungen" className="relative hover:text-yellow-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">
                Bewertungen
              </a>
              <a href="#impressum" className="relative hover:text-yellow-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">
                Impressum
              </a>
            </div>

            <div className="xl:hidden flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300 overflow-x-auto whitespace-nowrap scrollbar-hide flex-1 pr-2">
              <a
                href="#ueberuns"
                className="hover:text-yellow-400 transition shrink-0"
              >
                Über uns
              </a>

              <a
                href="#leistungen"
                className="hover:text-yellow-400 transition shrink-0"
              >
                Unsere Leistungen
              </a>

              <a
                href="#kontaktformular"
                className="hover:text-yellow-400 transition shrink-0"
              >
                Vorbestellung
              </a>

              <a
                href="#bewertungen"
                className="hover:text-yellow-400 transition shrink-0"
              >
                Bewertungen
              </a>

              <a
                href="#impressum"
                className="hover:text-yellow-400 transition shrink-0"
              >
                Impressum
              </a>
            </div>

            <div className="flex items-center justify-between w-full gap-4">
              <div>
                <h2 className="text-lg sm:text-2xl font-bold tracking-wide">
                  <span className="tracking-wide">Minicar</span>{" "}
                  <span className="text-yellow-400 font-extrabold tracking-wider">
                    30000
                  </span>
                </h2>
              <p className="text-gray-400 text-xs sm:text-sm">Wetzlar • Seit über 25 Jahren</p>
              </div>

              <a
              href="tel:0644130000"
              className="hidden sm:flex items-center gap-2 bg-yellow-400 text-black px-4 sm:px-5 py-3 rounded-2xl font-semibold hover:scale-105 hover:shadow-yellow-400/20 hover:shadow-xl transition-all duration-300 shrink-0"
            >
              <span>☎️</span>
              06441 30000
            </a>
            </div>
          </div>

          <div className="min-h-[48vh] sm:min-h-[58vh] flex items-center max-w-3xl">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm mb-6 sm:mb-8">
                <span className="text-yellow-400">★</span>
                Ihr zuverlässiger Fahrdienst in Wetzlar
              </div>

              <h1 className="text-[2.7rem] leading-[0.98] sm:text-5xl lg:text-7xl font-black sm:leading-[1.05] mb-6 sm:mb-8 tracking-tight">
                Schnell.
                <br />
                Sicher.
                <br />
                <span className="text-yellow-400">30Tausend.</span>
              </h1>

              <p className="text-base sm:text-xl text-gray-300 leading-relaxed mb-8 sm:mb-10 max-w-xl pr-2 sm:pr-0">
                Moderner Fahrservice – zuverlässig und rund um die Uhr erreichbar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-12">
                <a
                  href="tel:0644130000"
                  className="bg-yellow-400 text-center text-black px-6 sm:px-8 py-4 rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:scale-105 transition"
                >
                  Jetzt anrufen
                </a>

                <a
                  href="#kontaktformular"
                  className="border border-white/20 bg-white/5 backdrop-blur-md text-center px-6 sm:px-8 py-4 rounded-2xl text-base sm:text-lg text-white/90 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  Vorbestellung anfragen
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-gray-300 text-sm mb-0">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">📍</span>
                  Wetzlar & Umgebung
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">☎️</span>
                  24h erreichbar
                </div>
              </div>

              <div className="fixed bottom-4 right-4 z-50 md:hidden">
                <a
                  href="tel:0644130000"
                  className="bg-yellow-400 text-black px-5 py-3 rounded-full shadow-2xl text-sm font-bold hover:scale-105 transition"
                >
                  ☎️ Anrufen
                </a>
              </div>
            </div>

            </div>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        id="ueberuns"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-0 sm:py-4 bg-[#0B0B0F] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#FFD700,_transparent_45%)] blur-3xl" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Seit über 25 Jahren in Wetzlar
            </p>

            <h2 className="text-3xl sm:text-5xl font-black leading-tight mb-6 sm:mb-8">
              Persönlich.
              <br />
              Ortsnah.
              <br />
              Zuverlässig.
            </h2>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 sm:mb-10">
              Minicar 30000 steht seit über 25 Jahren für zuverlässigen Fahrservice in Wetzlar und Umgebung. Ob Flughafentransfer, Krankenfahrt oder Vorbestellung – wir bringen unsere Fahrgäste sicher ans Ziel.
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
                  className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] shadow-2xl">
            <div className="absolute bottom-[76px] right-[88px] w-[118px] h-[34px] bg-[#0B0B0F]/90 backdrop-blur-xl rounded-lg z-20" />

            <img
              src="./public/hero.jpg"
              alt="Mercedes Vito Taxi"
              className="w-full h-[340px] sm:h-[540px] object-cover brightness-[0.88] contrast-[1.08] saturate-[0.95]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        id="leistungen"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-14 sm:py-20 bg-transparent overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#FFD700,_transparent_40%)] blur-3xl" />

        <div className="text-center mb-16 relative z-10">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Unsere Leistungen
          </p>

          <h2 className="text-3xl sm:text-5xl font-black mb-5 sm:mb-6">
            Unsere Fahrten & Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 relative z-10">
          {[
            "PKW & 9-Sitzer",
            "Flughafentransfer zum Festpreis",
            "Kranken- & Dialysefahrten",
            "Kurierfahrten",
            "Schülerbeförderung",
            "Limousinenservice",
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-[28px] p-8 hover:border-yellow-400/40 hover:-translate-y-1 hover:bg-white/[0.07] transition-all duration-500"
            >
              <p className="text-xl font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="kontaktformular"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-18 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom,_#FFD700,_transparent_40%)] blur-3xl" />

        <div className="bg-white/10 supports-[backdrop-filter]:bg-white/5 border border-white/10 rounded-[28px] sm:rounded-[40px] p-5 sm:p-10 md:p-16 backdrop-blur-xl shadow-2xl relative z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400/5 blur-3xl rounded-full" />

          <div className="text-center mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-yellow-400 mb-6">
              ✦ Vorbestellung
            </div>

            <h2 className="text-3xl sm:text-5xl font-black mb-5 sm:mb-6">
              Fahrt einfach vorbestellen
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Nutzen Sie das Formular für Flughafentransfers, Krankenfahrten oder geplante Fahrten.
            </p>
          </div>

          <form
            action="https://formsubmit.co/info@minicar30000.de"
            method="POST"
            acceptCharset="UTF-8"
            target="_blank"
            className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto relative z-10"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://minicar30000.de" />
            <input
              type="hidden"
              name="_subject"
              value="Neue Vorbestellung - Minicar 30000"
            />

            <input
              required
              type="text"
              name="name"
              placeholder="Name *"
              className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-5 outline-none focus:border-yellow-400 focus:bg-black/30 transition-all duration-300"
            />

            <input
              required
              type="tel"
              name="telefon"
              placeholder="Telefonnummer *"
              className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-5 outline-none focus:border-yellow-400 focus:bg-black/30 transition-all duration-300"
            />

            <input
              required
              type="text"
              name="abholadresse"
              placeholder="Abholadresse *"
              className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-5 outline-none focus:border-yellow-400 focus:bg-black/30 transition-all duration-300"
            />

            <input
              required
              type="text"
              name="zieladresse"
              placeholder="Zieladresse *"
              className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-5 outline-none focus:border-yellow-400 focus:bg-black/30 transition-all duration-300"
            />

            <input
              required
              name="datum"
              type="date"
              className="bg-black/30 text-gray-300 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-5 outline-none focus:border-yellow-400 focus:bg-black/50 transition-all duration-300"
            />

            <div className="relative">
              <input
                required
                name="uhrzeit"
                type="time"
                className="w-full bg-black/20 text-gray-300 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-5 pr-20 outline-none focus:border-yellow-400 focus:bg-black/30 transition-all duration-300"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>

            <textarea
              name="nachricht"
              placeholder="Besondere Wünsche oder zusätzliche Informationen (optional)"
              rows={5}
              className="md:col-span-2 bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-5 outline-none focus:border-yellow-400 focus:bg-black/30 transition-all duration-300"
            />

            <div className="md:col-span-2 flex items-start gap-3 bg-black/20 border border-white/10 rounded-2xl px-5 py-4">
              <input
                required
                type="checkbox"
                id="datenschutz"
                className="mt-1 accent-yellow-400 w-4 h-4"
              />

              <label
                htmlFor="datenschutz"
                className="text-sm text-gray-400 leading-relaxed cursor-pointer"
              >
                Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.
              </label>
            </div>

            <button
              type="submit"
              className="md:col-span-2 bg-yellow-400 text-black py-5 rounded-3xl font-bold text-lg hover:scale-[1.01] transition-all duration-300"
            >
              Anfrage senden
            </button>

            <p className="text-sm text-gray-500 md:col-span-2">
              * Pflichtfeld
            </p>
          </form>
        </div>
      </motion.section>

      {/* Reviews */}
      <motion.section
        id="bewertungen"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-14 sm:py-20"
      >
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Google Bewertungen
          </p>

          <h2 className="text-3xl sm:text-5xl font-black mb-5 sm:mb-6">
            Das sagen unsere Fahrgäste
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {[
            {
              name: "Serdalabi",
              text: "Immer pünktlich und unschlagbare Preise",
            },
            {
              name: "Jürgen B.",
              text: "Sehr nette Fahrer. Stets freundlich und hilfsbereit. Man hat sich sehr wohl und sicher gefühlt. Wetzlars 1. Adresse.",
            },
            {
              name: "Damjan Dajovic",
              text: "Cristoph bester und sympathischster Taxi-Fahrer in Deutschland! Beförderung notwendig!",
            },
            {
              name: "Baro",
              text: "Der Fahrer Maschine ist einer der besten Fahrer in Wetzlar. Fahre gerne mit ihm und euch!",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="bg-white/10 supports-[backdrop-filter]:bg-white/5 border border-white/10 rounded-[28px] p-8 backdrop-blur-xl hover:border-yellow-400/30 transition"
            >
              <div className="flex items-center gap-1 text-yellow-400 text-xl mb-5">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                “{review.text}”
              </p>

              <p className="font-semibold text-white">
                {review.name}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Google Bewertung
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#0B0B0F] text-gray-300 pt-10 pb-16"
      >
        <div className="max-w-6xl mx-auto px-6 pb-14 text-center border-b border-white/10">
          <h3 className="text-4xl font-black mb-5">
            <span className="tracking-wide">Minicar</span>{" "}
            <span className="text-yellow-400 font-extrabold tracking-wider">
              30000
            </span>
          </h3>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Moderner Fahrservice – zuverlässig, sicher und 24 Stunden erreichbar.
          </p>

          <a
            href="tel:0644130000"
            className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition"
          >
            <span>☎️</span>
              06441 30000
            </a>
        </div>

        <section id="impressum" className="max-w-6xl mx-auto px-6 py-20 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white/10 supports-[backdrop-filter]:bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl shadow-2xl">
              <h2 className="text-4xl font-black mb-10 text-white">
                Impressum
              </h2>

              <div className="space-y-8 text-gray-300">
                <div>
                  <h4 className="text-white font-semibold text-xl mb-4">
                    Kontakt
                  </h4>

                  <div className="space-y-2 leading-relaxed">
                    <p>VPW GmbH · Minicar 30000</p>
                    <p>Bahnhof Nordseite 10</p>
                    <p>35576 Wetzlar</p>
                    <p>Telefon: 06441 30000</p>
                    <p>Fax: 06441 36449</p>
                    <p>E-Mail: info@minicar30000.de</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-xl mb-4">
                    Unternehmen
                  </h4>

                  <div className="space-y-2 leading-relaxed">
                    <p>Geschäftsführer: Dipl. Betriebswirt S. R. Salavati</p>
                    <p>Handelsregister: HRB 6427</p>
                    <p>Registergericht: Amtsgericht Wetzlar</p>
                    <p>Steuernummer: 2024790418</p>
                    <p>Finanzamt: Gießen</p>
                    <p>Gerichtsstand: Amtsgericht Wetzlar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 supports-[backdrop-filter]:bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl shadow-2xl">
              <h4 className="text-white text-3xl font-black mb-8">
                Datenschutzerklärung
              </h4>

              <div className="space-y-4 text-gray-300">
                {[
                  {
                    title: "Verantwortliche Stelle",
                    text: "VPW GmbH · Minicar 30000 · Bahnhof Nordseite 10 · 35576 Wetzlar · Telefon: 06441 30000 · E-Mail: info@minicar30000.de",
                  },
                  {
                    title: "Datenverarbeitung",
                    text: "Personenbezogene Daten werden nur im Rahmen Ihrer Anfrage oder Formularübermittlung verarbeitet.",
                  },
                  {
                    title: "Zweck der Verarbeitung",
                    text: "Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und zur Durchführung unserer Fahrdienstleistungen.",
                  },
                  {
                    title: "Ihre Rechte",
                    text: "Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer personenbezogenen Daten.",
                  },
                ].map((item, index) => (
                  <details
                    key={index}
                    className="group bg-black/20 border border-white/10 rounded-2xl p-5"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-white">
                      {item.title}

                      <span className="text-yellow-400 transition group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p className="text-gray-400 leading-relaxed mt-4">
                      {item.text}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="text-center text-gray-600 text-sm pt-4 pb-10">
          © 2026 Minicar 30000
        </div>
      </motion.footer>
    </div>
  );
}
