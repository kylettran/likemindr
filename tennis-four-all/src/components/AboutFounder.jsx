export default function AboutFounder() {
  return (
    <section id="founder" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-green text-sm font-bold uppercase tracking-widest">Our Story</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Meet the Founder</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Placeholder avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-brand-green to-brand-lime flex items-center justify-center shadow-xl">
                <span className="text-white text-7xl font-extrabold tracking-tight">KT</span>
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -right-4 bg-brand-yellow text-brand-dark text-xs font-bold px-4 py-2 rounded-full shadow-md">
                Founder &amp; Director
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-1">Kyle Thanh Tran</h3>
            <p className="text-brand-green font-semibold mb-6">Founder, Tennis Four All</p>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Kyle's relationship with tennis started at age six — sandwiched between tee ball
                seasons and basketball practice. It never quite stuck. Then asthma made the
                decision for him, forcing him away from high-intensity sports and, for a long
                time, away from the courts altogether.
              </p>
              <p>
                It was his father who brought him back. During the COVID-19 pandemic, Kyle
                picked up a racket again to help his dad get active and lose weight. What started
                as a small act of love quickly reignited a deep passion. His dad remains his
                greatest source of motivation — the reason Kyle pushes himself on the court every
                single day.
              </p>
              <p>
                As Kyle's game grew and he began competing in USTA and UTR tournaments, a
                realization hit him hard: the tennis world he was entering was a world of
                privilege. The coaching fees, equipment costs, court reservations, hitting
                partners, string jobs, and mental coaching — none of it is cheap. He was able to
                compete because his family could absorb those costs. Many kids never get that
                chance.
              </p>
              <p>
                That realization became a calling. With the support of a dedicated board of
                directors and angel investors, Kyle founded <strong className="text-gray-900">Tennis Four All</strong> —
                a non-profit built to break down the financial barriers that keep low-income youth
                off the court, and to share the sport that changed his life with the kids who
                deserve it most.
              </p>
            </div>

            <blockquote className="mt-8 border-l-4 border-brand-lime pl-5 italic text-gray-700">
              "I had parents and the luxury of affording tennis without worrying about the next
              meal on the table. Not every kid does. That's exactly why Tennis Four All exists."
              <span className="block mt-2 not-italic text-sm font-semibold text-brand-green">
                — Kyle Thanh Tran
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
