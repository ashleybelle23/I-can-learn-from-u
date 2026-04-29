import Link from "next/link";
import { mockEpisodes } from "@/lib/mock/podcasts";
import { mockPosts } from "@/lib/mock/community";
import { mockProducts } from "@/lib/mock/products";
import { mockUsers } from "@/lib/mock/users";
import { EpisodeCard } from "@/components/podcast/EpisodeCard";
import { PostCard } from "@/components/community/PostCard";
import { ProductCard } from "@/components/store/ProductCard";
import { TrustBadge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";

const featuredEpisode = mockEpisodes[0];
const featuredPost = mockPosts[2];
const featuredProduct = mockProducts[0];

export default function HomePage() {
  return (
    <div className="bg-[#07051a]">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden gradient-hero min-h-[90vh] flex items-center">
        {/* Background glow circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#1a1640]/30 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-[#c89040]/8 blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c89040] mb-6">
              Community · Podcast · Store
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8">
              <span className="text-[#e8e4f8]">Learn from the lives,</span>
              <br />
              <span className="text-gradient-gold">stories, and wisdom</span>
              <br />
              <span className="text-[#e8e4f8]">of others.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#2cd4f0] leading-relaxed mb-10 max-w-2xl">
              I Can Learn From You is a living community built on a simple truth: every person carries wisdom worth sharing, and every story has something to teach. Come to listen, to share, to heal, and to grow.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-semibold bg-gradient-to-r from-[#c89040] to-[#a87828] text-[#07051a] hover:opacity-90 transition-opacity"
              >
                Enter the community
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/podcast"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-medium border border-[#3a2d78] text-[#a898d8] hover:border-[#2cd4f0] hover:text-[#e8e4f8] transition-all"
              >
                Listen to the podcast
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 mt-12">
              <div className="flex -space-x-2">
                {mockUsers.slice(0, 4).map((user) => (
                  <div
                    key={user.id}
                    className="w-9 h-9 rounded-full bg-[#1a1640] border-2 border-[#07051a] flex items-center justify-center text-xs font-semibold text-[#a898d8]"
                  >
                    {user.name.charAt(0)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#6858a8]">
                Join a growing community of{" "}
                <span className="text-[#a898d8] font-medium">trusted guides</span>
                {" "}and honest voices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pillars ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '◎',
              title: 'Podcast',
              description: 'Long-form conversations with people who have lived through something worth learning from.',
              href: '/podcast',
              cta: 'Listen',
            },
            {
              icon: '⬡',
              title: 'Community',
              description: 'A peer support space where real people show up for one another — with presence, not prescriptions.',
              href: '/community',
              cta: 'Join',
            },
            {
              icon: '✦',
              title: 'Store',
              description: 'Curated spiritual and wellness items from cultures worldwide, with proceeds flowing back to source communities.',
              href: '/store',
              cta: 'Explore',
            },
          ].map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group rounded-2xl border border-[#3a2d78]/80 bg-[#130f30]/40 p-7 hover:bg-[#130f30] hover:border-[#3a2d78] transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1a1640]/60 flex items-center justify-center text-[#c89040] text-xl mb-5 group-hover:bg-[#1a1640] transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-[#e8e4f8] mb-3 group-hover:text-[#c89040] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#6858a8] leading-relaxed mb-5">
                {pillar.description}
              </p>
              <span className="text-sm font-medium text-[#2cd4f0] group-hover:text-[#a898d8] transition-colors flex items-center gap-1">
                {pillar.cta}
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── Featured Podcast ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex items-end justify-between mb-8">
          <SectionHeader
            eyebrow="Latest episode"
            title="From the podcast"
            titleGradient="lavender"
            description="Stories of healing, growth, and hard-won wisdom."
          />
          <Link href="/podcast" className="hidden md:inline-flex text-sm text-[#2cd4f0] hover:text-[#a898d8] transition-colors items-center gap-1">
            All episodes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <EpisodeCard episode={featuredEpisode} featured />
      </section>

      {/* ─── Featured Community Post ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex items-end justify-between mb-8">
          <SectionHeader
            eyebrow="Community support"
            title="Real people, real support"
            description="This is not a forum. It's a circle. People show up here when they need to be witnessed — and when they're ready to witness others."
          />
          <Link href="/community" className="hidden md:inline-flex text-sm text-[#2cd4f0] hover:text-[#a898d8] transition-colors items-center gap-1">
            All posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="max-w-2xl">
          <PostCard post={featuredPost} />
        </div>
      </section>

      {/* ─── Featured Product ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex items-end justify-between mb-8">
          <SectionHeader
            eyebrow="From the store"
            title="Objects that carry meaning"
            titleGradient="gold"
            description="Sourced from cultures worldwide. Chosen for quality, story, and care."
          />
          <Link href="/store" className="hidden md:inline-flex text-sm text-[#2cd4f0] hover:text-[#a898d8] transition-colors items-center gap-1">
            All products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="max-w-xs">
          <ProductCard product={featuredProduct} featured />
        </div>
      </section>

      {/* ─── Trust system preview ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-2xl border border-[#3a2d78]/60 bg-[#130f30]/40 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c89040] mb-4">
                Community trust
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#e8e4f8] mb-4">
                Reputation earned through care
              </h2>
              <p className="text-[#2cd4f0] leading-relaxed mb-6">
                Our trust system rewards what actually matters — showing up consistently, sharing lived experience honestly, and supporting others with humility. Not clout. Not volume. Care.
              </p>
              <Link
                href="/trust"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#c89040] hover:text-[#a87828] transition-colors"
              >
                Learn about trust levels
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Community leaders preview */}
            <div className="flex-1 space-y-3">
              {mockUsers.slice(0, 3).map((user) => (
                <div
                  key={user.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#07051a]/60 border border-[#3a2d78]/40"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1a1640] flex items-center justify-center text-sm font-semibold text-[#a898d8] flex-shrink-0">
                    {user.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-medium text-[#e8e4f8] truncate">{user.name}</span>
                      <TrustBadge level={user.trustLevel} />
                    </div>
                    <p className="text-xs text-[#6858a8] truncate">{user.bio}</p>
                  </div>
                  <span className="text-xs text-[#c89040] font-semibold flex-shrink-0">
                    {user.points.toLocaleString()} pts
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Giveback banner ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-2xl border border-[#c89040]/15 bg-gradient-to-r from-[#130f30]/80 via-[#1a1640]/20 to-[#130f30]/80 p-8 md:p-12 text-center">
          <span className="text-3xl mb-4 block">◈</span>
          <h2 className="text-xl md:text-2xl font-bold text-[#e8e4f8] mb-3">
            A portion of every store purchase supports source communities
          </h2>
          <p className="text-[#2cd4f0] max-w-xl mx-auto mb-6 leading-relaxed">
            {"We don't extract from the communities we carry. Cultural wisdom, craft, and care deserve reciprocity."}
          </p>
          <Link
            href="/store#giveback"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#c89040] hover:text-[#a87828] transition-colors"
          >
            Learn about community giveback
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
