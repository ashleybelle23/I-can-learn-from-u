export function GivebackSection() {
  const streams = [
    {
      icon: '◈',
      title: 'Artisan Communities',
      description:
        'A portion of each sale returns directly to the craftspeople, cooperatives, and communities who create what we carry.',
    },
    {
      icon: '⬡',
      title: 'Mental Health Access',
      description:
        'A portion of store proceeds fund mental health resources and crisis support access in underserved communities.',
    },
    {
      icon: '✦',
      title: 'Cultural Preservation',
      description:
        'We support organizations working to preserve indigenous practices, languages, and knowledge systems.',
    },
    {
      icon: '◎',
      title: 'Community Learning',
      description:
        'Profits fund free community programs, learning resources, and events hosted on this platform.',
    },
  ];

  return (
    <div id="giveback" className="rounded-2xl border border-[#d4a843]/20 bg-gradient-to-br from-[#181440] to-[#201c48]/20 p-8">
      <div className="text-center mb-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4a843] mb-3">
          Community Giveback
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#ede8f8] mb-4">
          Every purchase is a form of reciprocity
        </h2>
        <p className="text-[#8aaa74] text-base max-w-2xl mx-auto">
          We don&apos;t extract from the communities whose wisdom and craft we carry. A meaningful portion of every sale flows back to the people and places that made it possible.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {streams.map((stream) => (
          <div
            key={stream.title}
            className="p-5 rounded-xl border border-[#3c3070]/60 bg-[#09071c]/40"
          >
            <div className="text-[#d4a843] text-lg mb-3">{stream.icon}</div>
            <h3 className="text-sm font-semibold text-[#ede8f8] mb-2">{stream.title}</h3>
            <p className="text-xs text-[#9080c0] leading-relaxed">{stream.description}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-[#9080c0] mt-6">
        {/* TODO: Add link to transparent impact reporting page when available */}
        Impact reports and fund allocation details published quarterly.
      </p>
    </div>
  );
}
