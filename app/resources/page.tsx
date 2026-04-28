import { emergencyResources } from "@/lib/mock/trust";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Resources — I Can Learn From You",
  description: "Crisis support, community guidelines, and helpful resources.",
};

const communityGuidelines = [
  {
    title: "Speak from your own experience",
    body: "Share what you have lived through. Avoid speaking in generalities or projecting your experience onto others. \"In my experience...\" is more valuable than \"you should...\"",
  },
  {
    title: "Witness first, advise second",
    body: "Often people need to be heard before they need to be helped. Read fully before responding. Acknowledge the person's experience before offering any perspective.",
  },
  {
    title: "Hold confidentiality",
    body: "What is shared in this community stays here. Do not share others' stories, even anonymized, outside this space without explicit permission.",
  },
  {
    title: "No diagnosis or prescriptions",
    body: "You are not a doctor. Do not diagnose mental health conditions, suggest medications, or offer clinical assessments. Share resources, but acknowledge your limits.",
  },
  {
    title: "Acknowledge your limits and offer resources",
    body: "If someone's situation is beyond peer support, say so with care. Pointing to professional resources is an act of support, not rejection.",
  },
  {
    title: "Report harmful content",
    body: "If you see content that promotes self-harm, targets individuals, shares dangerous misinformation, or violates community values, report it immediately. Every report is reviewed.",
  },
  {
    title: "No promotion or solicitation",
    body: "This is not a place to sell services, drive traffic to your platform, or build an audience. Trusted Guides may share relevant resources, but only when directly relevant and non-promotional.",
  },
  {
    title: "Be patient with new members",
    body: "Everyone starts as a Listener. Remember what it felt like to first share something vulnerable. Greet new voices with warmth.",
  },
];

const additionalResources = [
  {
    category: "Mental Health",
    resources: [
      { name: "Psychology Today Therapist Finder", url: "https://www.psychologytoday.com/us/therapists", description: "Find a therapist near you or via telehealth." },
      { name: "Open Path Collective", url: "https://openpathcollective.org", description: "Reduced-cost therapy ($30–$80/session) for those in need." },
      { name: "7 Cups", url: "https://www.7cups.com", description: "Free emotional support and online therapy." },
    ],
  },
  {
    category: "Grief",
    resources: [
      { name: "What's Your Grief", url: "https://whatsyourgrief.com", description: "Education and community for grief of all kinds." },
      { name: "The Dinner Party", url: "https://www.thedinnerparty.org", description: "Community for people in their 20s–30s who have experienced significant loss." },
    ],
  },
  {
    category: "Addiction & Recovery",
    resources: [
      { name: "SMART Recovery", url: "https://www.smartrecovery.org", description: "Science-based, non-12-step recovery support groups." },
      { name: "In The Rooms", url: "https://www.intherooms.com", description: "Online recovery meetings." },
    ],
  },
  {
    category: "Spiritual Support",
    resources: [
      { name: "Spiritual Directors International", url: "https://www.sdicompanions.org", description: "Find a spiritual director across traditions." },
      { name: "Faith & Mental Health", url: "https://namigc.org/faith-community", description: "NAMI guide for navigating faith and mental health." },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-[#09071c] min-h-screen">
      <div className="border-b border-[#3c3070]/60 bg-[#181440]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHeader
            eyebrow="Resources"
            title="Support beyond our community"
            description="Peer support is powerful. It also has limits. Here are resources to help when you need more than we can offer."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Crisis resources */}
        <section id="crisis">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-red-400 mb-6">
            Crisis support — always available
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyResources.map((resource) => (
              <div
                key={resource.name}
                className="rounded-2xl border border-red-900/30 bg-red-950/10 p-5"
              >
                <h3 className="text-base font-semibold text-red-200 mb-1">{resource.name}</h3>
                <p className="text-sm text-red-300/70 mb-3">{resource.description}</p>
                <div className="flex flex-wrap gap-2">
                  {resource.phone && (
                    <a
                      href={`tel:${resource.phone}`}
                      className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-red-600/20 text-red-300 border border-red-700/30 hover:bg-red-600/40 transition-colors"
                    >
                      Call {resource.phone}
                    </a>
                  )}
                  {resource.text && resource.text !== resource.phone && (
                    <a
                      href={`sms:${resource.text}`}
                      className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-red-600/20 text-red-300 border border-red-700/30 hover:bg-red-600/40 transition-colors"
                    >
                      Text {resource.text}
                    </a>
                  )}
                </div>
                <p className="text-xs text-red-400/60 mt-2">{resource.hours}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional resources by category */}
        <section>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4a843] mb-6">
            Additional support resources
          </p>
          <div className="space-y-8">
            {additionalResources.map((category) => (
              <div key={category.category}>
                <h3 className="text-sm font-semibold text-[#c8b8f0] mb-4">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.resources.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-5 rounded-xl border border-[#3c3070]/60 bg-[#181440]/40 hover:bg-[#181440] hover:border-[#3c3070] transition-all group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-sm font-semibold text-[#ede8f8] group-hover:text-[#d4a843] transition-colors mb-1">
                            {resource.name}
                          </h4>
                          <p className="text-xs text-[#9080c0] leading-relaxed">{resource.description}</p>
                        </div>
                        <svg className="w-4 h-4 text-[#9080c0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community guidelines */}
        <section id="guidelines">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4a843] mb-6">
            Community guidelines
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {communityGuidelines.map((guide) => (
              <div
                key={guide.title}
                className="p-5 rounded-2xl border border-[#3c3070]/60 bg-[#181440]/40"
              >
                <h3 className="text-sm font-semibold text-[#c8b8f0] mb-2">{guide.title}</h3>
                <p className="text-xs text-[#8aaa74] leading-relaxed">{guide.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Report section */}
        <section id="report" className="rounded-2xl border border-[#3c3070]/60 bg-[#181440]/40 p-8">
          <h2 className="text-xl font-bold text-[#ede8f8] mb-3">Report harmful content</h2>
          <p className="text-[#8aaa74] leading-relaxed mb-6">
            If you see content that promotes self-harm, bullying, dangerous advice, or hate — please report it. Every report is reviewed. Your safety and the community&apos;s safety matter to us.
          </p>
          {/* TODO: Connect to moderation/report submission form and backend */}
          <button className="px-6 py-3 rounded-xl text-sm font-semibold bg-red-900/40 text-red-300 border border-red-800/40 hover:bg-red-900/60 transition-colors">
            Submit a report
          </button>
          <p className="text-xs text-[#9080c0] mt-4">
            All reports are confidential. Reporting does not automatically remove content — our team reviews each one.
          </p>
        </section>
      </div>
    </div>
  );
}
