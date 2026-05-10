const testimonials = [
  {
    quote:
      "I never thought I'd be playing tennis. My family couldn't afford a racket, let alone lessons. Tennis Four All changed everything — I'm now ranked in my state for my age group.",
    name: 'Marcus T.',
    role: 'Program Participant, Age 15',
    initials: 'MT',
  },
  {
    quote:
      "As a parent, watching my daughter gain confidence on the court has been incredible. She used to be so shy. Now she's a team captain. This program gave her a community.",
    name: 'Diane R.',
    role: 'Parent of Program Participant',
    initials: 'DR',
  },
  {
    quote:
      "Volunteering as a coach here is the most rewarding thing I do. These kids are hungry to learn and incredibly resilient. Tennis Four All is filling a huge gap in our community.",
    name: 'Coach James L.',
    role: 'Volunteer Coach, 3 Years',
    initials: 'JL',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-green text-sm font-bold uppercase tracking-widest">Stories</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Voices From Our Community</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The real measure of our work is in the lives we touch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              <svg
                className="w-8 h-8 text-brand-lime mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
