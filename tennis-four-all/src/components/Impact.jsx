const stats = [
  { value: '1,200+', label: 'Youth Served', icon: '👦' },
  { value: '3,500+', label: 'Rackets Donated', icon: '🎾' },
  { value: '18', label: 'Cities Reached', icon: '📍' },
  { value: '85+', label: 'Volunteer Coaches', icon: '🏅' },
]

export default function Impact() {
  return (
    <section id="impact" className="bg-brand-green py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-white mb-4">Our Impact So Far</h2>
          <p className="text-brand-lime text-lg max-w-2xl mx-auto">
            Since our founding, we've been working to level the playing field —
            one racket, one lesson, and one community at a time.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-brand-lime text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
