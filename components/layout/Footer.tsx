import Link from 'next/link';

const footerLinks = {
  Explore: [
    { label: 'Podcast', href: '/podcast' },
    { label: 'Community', href: '/community' },
    { label: 'Store', href: '/store' },
    { label: 'Trust & Rewards', href: '/trust' },
  ],
  Learn: [
    { label: 'About the Project', href: '/about' },
    { label: 'Resources', href: '/resources' },
    { label: 'Community Guidelines', href: '/resources#guidelines' },
    { label: 'Community Giveback', href: '/store#giveback' },
  ],
  Support: [
    { label: 'Crisis Resources', href: '/resources#crisis' },
    { label: 'Report Content', href: '/resources#report' },
    { label: 'Join the Community', href: '/community' },
    { label: 'Contact', href: '/about#contact' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#3a2d78]/60 bg-[#f4ece0] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-[#c89040] text-lg font-bold">I Can Learn</span>
              <span className="text-[#2cd4f0] text-lg font-light">From You</span>
            </div>
            <p className="text-[#6858a8] text-sm leading-relaxed">
              A living community built on the belief that every person carries wisdom worth sharing and a story worth hearing.
            </p>
            <div className="mt-6 p-3 rounded-xl bg-[#130f30]/60 border border-[#3a2d78]/40">
              <p className="text-xs text-[#6858a8] leading-relaxed">
                This is a peer support community, not a substitute for professional mental health care or emergency services.
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#c89040] mb-4">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6858a8] hover:text-[#a898d8] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#3a2d78]/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6858a8]">
            © 2024 I Can Learn From You. Built with care.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c89040] animate-pulse" />
            <span className="text-xs text-[#6858a8]">
              A portion of every store purchase supports source communities.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
