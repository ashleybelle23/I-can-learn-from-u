import { notFound } from "next/navigation";
import Link from "next/link";
import { mockEpisodes } from "@/lib/mock/podcasts";
import { mockPosts } from "@/lib/mock/community";
import { EpisodePlayer } from "@/components/podcast/EpisodePlayer";
import { EpisodeCard } from "@/components/podcast/EpisodeCard";
import { Tag } from "@/components/ui/Badge";
import { PostCard } from "@/components/community/PostCard";

export async function generateStaticParams() {
  return mockEpisodes.map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const episode = mockEpisodes.find((ep) => ep.slug === slug);
  if (!episode) return {};
  return {
    title: `${episode.title} — I Can Learn From You Podcast`,
    description: episode.description,
  };
}

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const episode = mockEpisodes.find((ep) => ep.slug === slug);
  if (!episode) notFound();

  const relatedPost = episode.relatedDiscussionId
    ? mockPosts.find((p) => p.id === episode.relatedDiscussionId)
    : null;

  const moreEpisodes = mockEpisodes.filter((ep) => ep.id !== episode.id).slice(0, 3);

  return (
    <div className="bg-[#09071c] min-h-screen">
      {/* Back nav */}
      <div className="border-b border-[#3c3070]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/podcast"
            className="inline-flex items-center gap-2 text-sm text-[#9080c0] hover:text-[#c8b8f0] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All episodes
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Episode header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-[#d4a843] font-semibold tracking-wide uppercase">
                  Season {episode.season} · Episode {episode.episodeNumber}
                </span>
                <span className="text-[#9080c0]">·</span>
                <span className="text-xs text-[#9080c0]">
                  {new Date(episode.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#ede8f8] leading-tight mb-4">
                {episode.title}
              </h1>

              <p className="text-lg text-[#8aaa74] mb-5">with {episode.guest}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {episode.themes.map((theme) => (
                  <Tag key={theme}>{theme}</Tag>
                ))}
              </div>
            </div>

            {/* Player */}
            <EpisodePlayer episode={episode} />

            {/* Description */}
            <div className="rounded-2xl border border-[#3c3070]/60 bg-[#181440]/40 p-6">
              <h2 className="text-sm font-semibold text-[#c8b8f0] mb-4">About this episode</h2>
              <p className="text-[#8aaa74] leading-relaxed">{episode.description}</p>
            </div>

            {/* Guest bio */}
            <div className="rounded-2xl border border-[#3c3070]/60 bg-[#181440]/40 p-6">
              <h2 className="text-sm font-semibold text-[#c8b8f0] mb-4">About {episode.guest}</h2>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#201c48] flex items-center justify-center text-lg font-semibold text-[#c8b8f0] flex-shrink-0">
                  {episode.guest.charAt(0)}
                </div>
                <p className="text-[#8aaa74] leading-relaxed">{episode.guestBio}</p>
              </div>
            </div>

            {/* Related discussion */}
            {relatedPost && (
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4a843] mb-4">
                  Related community discussion
                </p>
                <PostCard post={relatedPost} />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4a843] mb-5">
                More episodes
              </p>
              <div className="space-y-4">
                {moreEpisodes.map((ep) => (
                  <EpisodeCard key={ep.id} episode={ep} />
                ))}
              </div>
            </div>

            {/* Share invitation */}
            <div className="rounded-2xl border border-[#3c3070]/60 bg-[#181440]/40 p-5">
              <p className="text-sm font-semibold text-[#c8b8f0] mb-3">Did this resonate?</p>
              <p className="text-xs text-[#9080c0] leading-relaxed mb-4">
                Join the community to discuss this episode, share what moved you, or ask questions.
              </p>
              <Link
                href="/community"
                className="block text-center py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#d4a843] to-[#bf8030] text-[#09071c] hover:opacity-90 transition-opacity"
              >
                Join the conversation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
