const footerLinks = {
  Organization: ['About Us', 'Our Team', 'Annual Report', 'Press'],
  Programs: ['After-School Clinics', 'Equipment Drive', 'Summer Camp', 'Scholar-Athlete'],
  'Get Involved': ['Donate', 'Volunteer', 'Corporate Sponsors', 'Events'],
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-gray-300">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Stay in the Loop</h3>
            <p className="text-gray-400 text-sm">
              Get updates on programs, events, and impact stories.
            </p>
          </div>
          <form
            className="flex w-full md:w-auto gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-64 bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-lime"
            />
            <button
              type="submit"
              className="bg-brand-lime text-brand-dark font-semibold text-sm px-5 py-2.5 rounded-full hover:brightness-105 transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🎾</span>
            <span className="text-xl font-extrabold text-white">
              Tennis <span className="text-brand-yellow">Four</span> All
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            A 501(c)(3) non-profit providing free tennis programs and equipment
            to underserved youth across the country.
          </p>
          <div className="flex gap-3">
            {['Instagram', 'Twitter', 'Facebook'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-xs text-gray-500 hover:text-white transition"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-white text-sm font-semibold mb-4">{heading}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 text-sm hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} Tennis Four All. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
