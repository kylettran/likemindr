const programs = [
  {
    icon: '🏫',
    title: 'After-School Clinics',
    description:
      'Free weekly tennis clinics held at local schools in underserved neighborhoods. Kids ages 6–18 learn fundamentals, teamwork, and sportsmanship.',
    tag: 'Year-Round',
  },
  {
    icon: '🎒',
    title: 'Equipment Drive',
    description:
      'We collect and distribute rackets, balls, shoes, and apparel to youth who cannot afford gear. No child should sit out because of cost.',
    tag: 'Ongoing',
  },
  {
    icon: '☀️',
    title: 'Summer Tennis Camp',
    description:
      'A full-week immersive camp experience — free of charge — covering technique, fitness, nutrition, and college prep for aspiring student-athletes.',
    tag: 'Summer',
  },
  {
    icon: '🎓',
    title: 'Scholar-Athlete Program',
    description:
      'Mentorship and academic support alongside tennis training. We partner with coaches and educators to help youth succeed on and off the court.',
    tag: 'Select',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-green text-sm font-bold uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Our Programs</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From first-time beginners to competitive juniors, our programs meet
            young athletes wherever they are.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <span className="inline-block text-xs font-semibold text-brand-green bg-brand-lime/20 px-2 py-0.5 rounded-full mb-3">
                {program.tag}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
