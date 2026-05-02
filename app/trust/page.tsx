import { trustLevels } from "@/lib/mock/trust";
import { mockUsers } from "@/lib/mock/users";
import { mockBadges } from "@/lib/mock/users";
import { TrustLevelCard } from "@/components/trust/TrustLevelCard";
import { BadgeCard } from "@/components/trust/BadgeCard";
import { TrustBadge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Trust & Reputation — I Can Learn From You",
  description: "A reputation system that rewards care, consistency, and genuine helpfulness.",
};

const exampleUser = mockUsers[0];

const earnPointsExamples = [
  { action: "Post thoughtful support that helps someone", points: "+15–30 pts" },
  { action: "Receive a 'helpful' vote on your response", points: "+5 pts" },
  { action: "Share lived experience that resonates with others", points: "+10 pts" },
  { action: "Add a vetted resource the community saves", points: "+8 pts" },
  { action: "Welcome a new member with warmth", points: "+3 pts" },
  { action: "Complete a learning journey or course", points: "+25 pts" },
  { action: "Contribute consistently for 7 days", points: "+20 pts" },
  { action: "Have a post marked 'resolved' by original poster", points: "+40 pts" },
];

export default function TrustPage() {
  return (
    <div className="bg-[transparent] min-h-screen">
      {/* Header */}
      <div className="border-b border-[#ffffff]/60 bg-[#fff8f0]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHeader
            eyebrow="Community trust"
            title="Reputation earned through care"
            titleGradient="gold"
            description="We don't reward volume, virality, or performance. We reward showing up, staying present, and genuinely helping — especially when it's hard."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Trust levels */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#231890] mb-8">
            Trust levels
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {trustLevels.map((level) => (
              <TrustLevelCard
                key={level.level}
                config={level}
                current={level.level === exampleUser.trustLevel}
                userPoints={level.level === exampleUser.trustLevel ? exampleUser.points : undefined}
              />
            ))}
          </div>
        </div>

        {/* How to earn points */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#231890] mb-6">
              How to earn trust
            </p>
            <div className="space-y-3">
              {earnPointsExamples.map((item) => (
                <div
                  key={item.action}
                  className="flex items-center justify-between p-4 rounded-xl border border-[#ffffff]/60 bg-[#fff8f0]/40"
                >
                  <p className="text-sm text-[#2a1a70] leading-snug">{item.action}</p>
                  <span className="text-xs font-semibold text-[#34d399] ml-4 flex-shrink-0">
                    {item.points}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#231890] mb-6">
                What we don&apos;t reward
              </p>
              <div className="rounded-2xl border border-[#ffffff]/60 bg-[#fff8f0]/40 p-6 space-y-3">
                {[
                  "Volume without quality",
                  "Posting frequently but unhelpfully",
                  "Self-promotion or seeking recognition",
                  "Giving unsolicited advice without lived experience",
                  "Dismissing or minimizing others' experiences",
                  "Behavior that harms community safety",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5 text-sm">×</span>
                    <p className="text-sm text-[#231890]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#231890]/20 bg-[#231890]/5">
              <p className="text-sm font-semibold text-[#231890] mb-3">
                A note on this system
              </p>
              <p className="text-sm text-[#231890] leading-relaxed">
                We built this system knowing that any reputation mechanic can be gamed. We&apos;re watching for that. High trust levels are not trophies — they are community recognition of genuine, consistent care. They come with responsibility, not just perks.
              </p>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#231890] mb-2">
            Community badges
          </p>
          <p className="text-sm text-[#3a2a80] mb-8 max-w-2xl">
            Badges recognize specific acts of community care. They are rare by design and mean something.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockBadges.map((badge) => (
              <BadgeCard
                key={badge.id}
                badge={badge}
                earned={exampleUser.badges.some((b) => b.id === badge.id)}
              />
            ))}
          </div>
        </div>

        {/* Community leaders */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#231890] mb-6">
            Voices of the community
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockUsers.map((user) => (
              <div
                key={user.id}
                className="rounded-2xl border border-[#ffffff]/60 bg-[#fff8f0]/40 p-5"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#fff0e8] flex items-center justify-center text-base font-semibold text-[#2a1a70] flex-shrink-0">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-[#1a1060]">{user.name}</span>
                    </div>
                    <TrustBadge level={user.trustLevel} />
                  </div>
                </div>

                <p className="text-xs text-[#231890] leading-relaxed mb-4">{user.bio}</p>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-2 rounded-lg bg-[transparent]/60 border border-[#ffffff]/30">
                    <p className="text-base font-bold text-[#231890]">{user.points.toLocaleString()}</p>
                    <p className="text-xs text-[#3a2a80]">points</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[transparent]/60 border border-[#ffffff]/30">
                    <p className="text-base font-bold text-[#2a1a70]">{user.contributions}</p>
                    <p className="text-xs text-[#3a2a80]">contributions</p>
                  </div>
                </div>

                {user.badges.length > 0 && (
                  <div className="flex items-center gap-1.5 mt-3 flex-wrap">
                    {user.badges.slice(0, 4).map((badge) => (
                      <span
                        key={badge.id}
                        className="w-7 h-7 rounded-full bg-[#fff0e8] flex items-center justify-center text-sm"
                        title={badge.name}
                      >
                        {badge.icon}
                      </span>
                    ))}
                    {user.badges.length > 4 && (
                      <span className="text-xs text-[#3a2a80]">+{user.badges.length - 4}</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
