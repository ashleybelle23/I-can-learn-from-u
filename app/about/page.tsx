import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "About — I Can Learn From You",
  description: "The story and belief behind I Can Learn From You.",
};

export default function AboutPage() {
  return (
    <div className="bg-[transparent] min-h-screen">
      <div className="border-b border-[#ffffff]/60 bg-[#fff8f0]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHeader
            eyebrow="About"
            title="Why this exists"
            titleGradient="lavender"
            description="A project born from the belief that the most profound teachers in our lives are often the people right beside us."
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Origin */}
        <section className="prose-brand space-y-4">
          <h2 className="text-2xl font-bold text-[#ffffff]">The origin</h2>
          <p>
            There&apos;s a moment in ODESZA&apos;s &ldquo;Line of Sight&rdquo; — you know it if you&apos;ve felt it — where the music opens like a door and you&apos;re suddenly aware of everyone around you, their lives running parallel to yours, carrying things you&apos;ve never had to carry, seeing things you&apos;ve never seen.
          </p>
          <p>
            That feeling is the seed of this project. The humbling, beautiful recognition that you are not the center of all wisdom. That the person next to you on the train, the elder in your grandmother&apos;s village, the stranger in a support group at 11pm — they know things you don&apos;t. They&apos;ve been places you haven&apos;t. And if you&apos;re willing to listen, really listen, they can change you.
          </p>
          <p>
            I Can Learn From You is an attempt to build a space worthy of that kind of listening.
          </p>
        </section>

        {/* What we believe */}
        <section>
          <h2 className="text-2xl font-bold text-[#ffffff] mb-6">What we believe</h2>
          <div className="space-y-4">
            {[
              {
                icon: "◎",
                belief: "Every person is a teacher",
                description: "Not just the credentialed, the famous, or the polished. Everyone who has lived has learned something worth sharing.",
              },
              {
                icon: "⬡",
                belief: "Healing is not linear or individual",
                description: "We heal in community, through story, through being witnessed, and through witnessing others. Isolation compounds pain. Connection transforms it.",
              },
              {
                icon: "✦",
                belief: "Cultural wisdom is not a trend",
                description: "Indigenous practices, Eastern philosophy, ancestral medicine — these are not aesthetic accessories. They are living systems of knowledge that deserve deep respect and real reciprocity.",
              },
              {
                icon: "◈",
                belief: "Trust is earned, not assigned",
                description: "In a world full of noise, what we most need is trustworthy voices. We built a system to help surface people who have earned the right to be trusted — through consistency, humility, and genuine care.",
              },
            ].map((item) => (
              <div
                key={item.belief}
                className="flex gap-5 p-6 rounded-2xl border border-[#ffffff]/60 bg-[#fff8f0]/40"
              >
                <div className="text-[#231890] text-xl mt-1 flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-base font-semibold text-[#ffffff] mb-2">{item.belief}</h3>
                  <p className="text-sm text-[#231890] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety */}
        <section className="p-7 rounded-2xl border border-[#231890]/25 bg-[#231890]/06">
          <h2 className="text-xl font-bold text-[#ffffff] mb-4">On safety and limits</h2>
          <div className="space-y-3 text-sm text-[#fff0dc] leading-relaxed">
            <p>
              We are a peer support community, not a mental health service. The people here are not therapists, counselors, or crisis workers — they are humans with hard-won experience who chose to show up.
            </p>
            <p>
              We take safety seriously. We have emergency resource panels on high-urgency posts. We have a trust system designed to surface reliable voices. We have community guidelines and a reporting mechanism.
            </p>
            <p>
              But if you or someone you know is in immediate danger, please call{" "}
              <strong className="text-[#ffffff]">911</strong> or the Suicide &amp; Crisis Lifeline at{" "}
              <strong className="text-[#ffffff]">988</strong>. No community platform replaces that.
            </p>
          </div>
        </section>

        {/* Contact / contribute */}
        <section id="contact">
          <h2 className="text-2xl font-bold text-[#ffffff] mb-6">Get involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "Become a podcast guest",
                description: "Have a story worth telling? We want to hear it. You don't need to be famous or fully healed — just honest.",
                cta: "Submit your story",
                href: "#contact",
              },
              {
                title: "Contribute to the community",
                description: "Join as a Listener, show up consistently, and let your presence and care do the work over time.",
                cta: "Join the community",
                href: "/community",
              },
              {
                title: "Suggest a product",
                description: "Know of a cultural artisan, cooperative, or small producer whose work belongs here? Let us know.",
                cta: "Suggest a maker",
                href: "#contact",
              },
              {
                title: "Partner or collaborate",
                description: "We're open to thoughtful partnerships with organizations whose values align with genuine community care.",
                cta: "Reach out",
                href: "#contact",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-[#ffffff]/60 bg-[#fff8f0]/40"
              >
                <h3 className="text-base font-semibold text-[#ffffff] mb-2">{item.title}</h3>
                <p className="text-sm text-[#231890] leading-relaxed mb-4">{item.description}</p>
                <Link
                  href={item.href}
                  className="inline-flex text-sm font-medium text-[#231890] hover:text-[#231890] transition-colors items-center gap-1"
                >
                  {item.cta}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
