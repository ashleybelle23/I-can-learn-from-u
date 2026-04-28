import { notFound } from "next/navigation";
import Link from "next/link";
import { mockPosts } from "@/lib/mock/community";
import { ReplyCard } from "@/components/community/ReplyCard";
import { ReplyForm } from "@/components/community/ReplyForm";
import { EmergencyPanel } from "@/components/community/EmergencyPanel";
import { TrustBadge, UrgencyBadge, CategoryBadge, Tag } from "@/components/ui/Badge";

export async function generateStaticParams() {
  return mockPosts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = mockPosts.find((p) => p.id === id);
  if (!post) return {};
  return {
    title: `${post.title} — I Can Learn From You Community`,
    description: post.body.slice(0, 160),
  };
}

function timeAgo(dateStr: string): string {
  const now = new Date();
  const then = new Date(dateStr);
  const diffMs = now.getTime() - then.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffDays > 14) return then.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  if (diffDays > 0) return `${diffDays} days ago`;
  if (diffHours > 0) return `${diffHours} hours ago`;
  return "just now";
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = mockPosts.find((p) => p.id === id);
  if (!post) notFound();

  return (
    <div className="bg-[#09071c] min-h-screen">
      {/* Back nav */}
      <div className="border-b border-[#3c3070]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/community"
            className="inline-flex items-center gap-2 text-sm text-[#9080c0] hover:text-[#c8b8f0] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Community
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Post */}
            <div
              className={`rounded-2xl border bg-[#181440]/60 p-7 ${
                post.urgency === "high"
                  ? "border-red-800/40 urgency-high"
                  : post.urgency === "medium"
                  ? "border-[#3c3070] urgency-medium"
                  : "border-[#3c3070] urgency-low"
              }`}
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <UrgencyBadge urgency={post.urgency} />
                <CategoryBadge>{post.category}</CategoryBadge>
                {post.pinned && (
                  <span className="text-xs text-[#d4a843] font-medium">✦ Pinned</span>
                )}
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-[#ede8f8] leading-tight mb-5">
                {post.title}
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#201c48] flex items-center justify-center text-sm font-semibold text-[#c8b8f0] flex-shrink-0">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-[#ede8f8]">{post.author.name}</span>
                    <TrustBadge level={post.author.trustLevel} />
                  </div>
                  <span className="text-xs text-[#9080c0]">{timeAgo(post.createdAt)}</span>
                </div>
              </div>

              <div className="prose-brand text-base leading-relaxed whitespace-pre-line mb-5">
                {post.body}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {post.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-4 border-t border-[#3c3070]/40">
                <button className="flex items-center gap-1.5 text-sm text-[#9080c0] hover:text-[#d4a843] transition-colors">
                  {/* TODO: Connect to upvote action */}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  {post.upvotes} people relate
                </button>
                <button className="text-sm text-[#9080c0] hover:text-[#c8b8f0] transition-colors">
                  {/* TODO: Connect to save action */}
                  Save
                </button>
                <button className="text-sm text-[#9080c0] hover:text-red-400 transition-colors ml-auto">
                  {/* TODO: Connect to report moderation flow */}
                  Report
                </button>
              </div>
            </div>

            {/* Replies */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4a843] mb-5">
                {post.replyCount} {post.replyCount === 1 ? "response" : "responses"}
              </p>

              {post.replies.length > 0 ? (
                <div className="space-y-4">
                  {post.replies.map((reply) => (
                    <ReplyCard key={reply.id} reply={reply} />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-[#3c3070]/40 bg-[#181440]/30 p-8 text-center">
                  <p className="text-[#9080c0] text-sm">
                    No responses yet. Be the first to show up for this person.
                  </p>
                </div>
              )}
            </div>

            {/* Reply form */}
            <div className="rounded-2xl border border-[#3c3070]/60 bg-[#181440]/40 p-6">
              <p className="text-sm font-semibold text-[#c8b8f0] mb-1">Add your voice</p>
              <p className="text-xs text-[#9080c0] mb-5">
                Speak from your experience. You don&apos;t have to have answers — you just have to be present.
              </p>
              <ReplyForm postId={post.id} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {post.urgency === "high" && <EmergencyPanel />}

            {/* Stats */}
            <div className="rounded-2xl border border-[#3c3070]/40 bg-[#181440]/30 p-5">
              <p className="text-xs font-semibold text-[#c8b8f0] mb-4">About this post</p>
              <dl className="space-y-3">
                {[
                  { label: "Category", value: post.category },
                  { label: "Responses", value: post.replyCount.toString() },
                  { label: "People helped", value: `${post.upvotes}+` },
                  { label: "Saves", value: post.saves.toString() },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between">
                    <dt className="text-xs text-[#9080c0]">{label}</dt>
                    <dd className="text-xs text-[#c8b8f0] font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Guidelines reminder */}
            <div className="rounded-2xl border border-[#3c3070]/40 bg-[#181440]/30 p-5">
              <p className="text-xs font-semibold text-[#c8b8f0] mb-3">
                Responding with care
              </p>
              <ul className="space-y-2 text-xs text-[#9080c0]">
                {[
                  "Share what you know from experience",
                  "Don't diagnose or prescribe",
                  "Offer resources where relevant",
                  "It's okay to simply witness",
                ].map((v) => (
                  <li key={v} className="flex items-start gap-2">
                    <span className="text-[#d4a843] mt-0.5">·</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
