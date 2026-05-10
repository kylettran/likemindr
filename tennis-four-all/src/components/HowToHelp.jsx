const ways = [
  {
    icon: '💛',
    title: 'Donate',
    description:
      '$25 provides a racket and ball kit for one child. $100 sponsors a month of after-school clinics. Every dollar goes directly to the kids.',
    cta: 'Give Today',
    href: '#donate',
    highlight: true,
  },
  {
    icon: '🤝',
    title: 'Volunteer',
    description:
      'Share your time as a coach, mentor, or event organizer. No tennis experience required — just a passion for helping youth thrive.',
    cta: 'Sign Up to Volunteer',
    href: '#volunteer',
    highlight: false,
  },
  {
    icon: '🏢',
    title: 'Corporate Sponsor',
    description:
      'Partner with us to fund programs, equipment drives, and camps. We offer recognition, co-branding opportunities, and impact reports.',
    cta: 'Become a Sponsor',
    href: '#sponsor',
    highlight: false,
  },
]

export default function HowToHelp() {
  return (
    <section id="get-involved" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-green text-sm font-bold uppercase tracking-widest">Get Involved</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">How You Can Help</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whether you give $5 or five hours, your contribution makes a real
            difference in a young athlete's life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ways.map((way) => (
            <div
              key={way.title}
              className={`rounded-3xl p-8 flex flex-col ${
                way.highlight
                  ? 'bg-brand-green text-white'
                  : 'bg-gray-50 border border-gray-100'
              }`}
            >
              <div className="text-5xl mb-5">{way.icon}</div>
              <h3
                className={`text-2xl font-bold mb-3 ${
                  way.highlight ? 'text-white' : 'text-gray-900'
                }`}
              >
                {way.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-8 flex-1 ${
                  way.highlight ? 'text-green-100' : 'text-gray-600'
                }`}
              >
                {way.description}
              </p>
              <a
                href={way.href}
                className={`inline-block text-center font-semibold px-6 py-3 rounded-full transition ${
                  way.highlight
                    ? 'bg-brand-yellow text-brand-dark hover:brightness-105'
                    : 'bg-brand-green text-white hover:bg-brand-dark'
                }`}
              >
                {way.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
