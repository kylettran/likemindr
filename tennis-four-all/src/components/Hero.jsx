export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden pt-16"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-brand-lime blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-brand-yellow blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="inline-block bg-brand-yellow text-brand-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Non-Profit Organization
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
            Tennis Is a Sport{' '}
            <span className="text-brand-lime">For Every Child.</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
            Tennis Four All provides free equipment, coaching, and structured
            programs to underserved youth who deserve the same opportunities as
            everyone else — regardless of their zip code or income.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#programs"
              className="bg-brand-lime text-brand-dark font-semibold px-7 py-3 rounded-full hover:brightness-110 transition"
            >
              Our Programs
            </a>
            <a
              href="#donate"
              className="border border-white text-white font-semibold px-7 py-3 rounded-full hover:bg-white hover:text-brand-dark transition"
            >
              Donate Now
            </a>
          </div>
        </div>

        {/* Visual card */}
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-sm w-full text-center">
            <div className="text-7xl mb-4">🎾</div>
            <blockquote className="text-white text-lg font-medium italic leading-relaxed mb-4">
              "Every child deserves a chance to learn, compete, and grow through
              the sport of tennis."
            </blockquote>
            <p className="text-brand-lime text-sm font-semibold">— Tennis Four All Mission</p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 text-xs animate-bounce">
        <span>Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
