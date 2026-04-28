import { mockEpisodes } from "@/lib/mock/podcasts";
import { EpisodeCard } from "@/components/podcast/EpisodeCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Podcast — I Can Learn From You",
  description: "Long-form conversations with people who have lived through something worth learning from.",
};

export default function PodcastPage() {
  const featured = mockEpisodes[0];
  const rest = mockEpisodes.slice(1);

  return (
    <div className="bg-[#fdf5f8] min-h-screen">
      {/* Header */}
      <div className="border-b border-[#e8b8cc]/60 bg-[#fce8f0]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHeader
            eyebrow="Podcast"
            title="Conversations worth having"
            titleGradient="lavender"
            description="We invite people who have walked through something — trauma, transformation, addiction, grief, spiritual crisis — and ask them to share what they learned. Not advice. Stories."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Featured episode */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#e8b030] mb-5">
            Latest episode
          </p>
          <EpisodeCard episode={featured} featured />
        </div>

        {/* All episodes */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#e8b030] mb-5">
            All episodes
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </div>

        {/* Guest invitation */}
        <div className="rounded-2xl border border-[#e8b8cc]/60 bg-[#fce8f0]/40 p-8 md:p-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#e8b030] mb-4">
              Share your story
            </p>
            <h2 className="text-2xl font-bold text-[#1e1428] mb-4">
              Have something worth teaching?
            </h2>
            <p className="text-[#48c8b0] leading-relaxed mb-6">
              We&apos;re always looking for guests who have walked through something and found their way — or are still finding it. You don&apos;t have to have all the answers. We just ask for honesty.
            </p>
            <a
              href="/about#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#e8b030] to-[#c89020] text-[#fdf5f8] hover:opacity-90 transition-opacity"
            >
              Reach out to us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
