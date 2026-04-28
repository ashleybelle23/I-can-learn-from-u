import Link from "next/link";
import { mockPosts } from "@/lib/mock/community";
import { PostCard } from "@/components/community/PostCard";
import { EmergencyPanel } from "@/components/community/EmergencyPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PostForm } from "@/components/community/PostForm";

export const metadata = {
  title: "Community — I Can Learn From You",
  description: "A peer support space where real people show up for one another.",
};

export default function CommunityPage() {
  const highUrgency = mockPosts.filter((p) => p.urgency === "high");
  const rest = mockPosts.filter((p) => p.urgency !== "high");

  return (
    <div className="bg-[#fdf5f8] min-h-screen">
      {/* Header */}
      <div className="border-b border-[#e8b8cc]/60 bg-[#fce8f0]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHeader
            eyebrow="Community"
            title="You are not alone in this"
            description="This is peer support — people who have walked through hard things showing up for others walking through them now. Not prescriptions. Presence."
          />
          <div className="mt-6 p-4 rounded-xl border border-amber-400/40 bg-amber-50/80 max-w-2xl">
            <p className="text-sm text-amber-800/80 leading-relaxed">
              <strong className="text-amber-800">Important:</strong> This community provides peer support, not professional mental health care. If you or someone you know is in immediate danger, please call 911 or 988 (Suicide &amp; Crisis Lifeline).
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main feed */}
          <div className="lg:col-span-2 space-y-10">
            {/* High urgency posts */}
            {highUrgency.length > 0 && (
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-red-400 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  Needs support now
                </p>
                <div className="space-y-4">
                  {highUrgency.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}

            {/* All posts */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#e8b030] mb-4">
                Community posts
              </p>
              <div className="space-y-4">
                {rest.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Emergency resources */}
            <EmergencyPanel />

            {/* Post form */}
            <div className="rounded-2xl border border-[#e8b8cc]/60 bg-[#fce8f0]/40 p-6">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#e8b030] mb-1">
                Share your situation
              </p>
              <p className="text-sm text-[#b890a0] mb-5">
                The community is here. You don&apos;t have to carry this alone.
              </p>
              <PostForm />
            </div>

            {/* Community guidelines */}
            <div className="rounded-2xl border border-[#e8b8cc]/40 bg-[#fce8f0]/30 p-5">
              <p className="text-xs font-semibold text-[#6a3858] mb-3">Community values</p>
              <ul className="space-y-2 text-xs text-[#b890a0]">
                {[
                  "Speak from your own experience",
                  "Witness first, advise second",
                  "Hold confidentiality",
                  "No diagnosis or prescriptions",
                  "Acknowledge limits, offer resources",
                  "Report harmful content immediately",
                ].map((v) => (
                  <li key={v} className="flex items-start gap-2">
                    <span className="text-[#e8b030] mt-0.5">·</span>
                    {v}
                  </li>
                ))}
              </ul>
              <Link
                href="/resources#guidelines"
                className="mt-4 block text-xs text-[#48c8b0] hover:text-[#6a3858] transition-colors"
              >
                Read full community guidelines →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
