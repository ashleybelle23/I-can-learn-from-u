import Link from 'next/link';
import { PodcastEpisode } from '@/lib/types';
import { Tag } from '@/components/ui/Badge';

interface EpisodeCardProps {
  episode: PodcastEpisode;
  featured?: boolean;
}

export function EpisodeCard({ episode, featured = false }: EpisodeCardProps) {
  if (featured) {
    return (
      <Link
        href={`/podcast/${episode.slug}`}
        className="block rounded-2xl border border-[#231890]/20 bg-gradient-to-br from-[#fff8f0] to-[#fff0e8]/40 p-6 group hover:border-[#231890]/40 transition-all duration-200"
      >
        <div className="flex items-start gap-4">
          {/* Episode art placeholder */}
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#fff0e8] to-[transparent] flex items-center justify-center flex-shrink-0 border border-[#ffffff]/40">
            <svg className="w-8 h-8 text-[#231890]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-[#231890] font-semibold tracking-wide uppercase">
                S{episode.season} · E{episode.episodeNumber}
              </span>
              <span className="text-xs text-[#ffd8b8]">·</span>
              <span className="text-xs text-[#ffd8b8]">{episode.duration}</span>
            </div>
            <h3 className="text-base font-semibold text-[#ffffff] group-hover:text-[#231890] transition-colors leading-snug mb-1">
              {episode.title}
            </h3>
            <p className="text-xs text-[#231890] mb-3">with {episode.guest}</p>
            <p className="text-sm text-[#ffd8b8] leading-relaxed line-clamp-2">{episode.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {episode.themes.slice(0, 3).map((theme) => (
                <Tag key={theme}>{theme}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/podcast/${episode.slug}`}
      className="block rounded-2xl border border-[#ffffff]/80 bg-[#fff8f0]/40 p-5 group hover:bg-[#fff8f0] hover:border-[#ffffff] transition-all duration-200"
    >
      <div className="flex items-center gap-3 mb-3">
        {/* Play button */}
        <div className="w-10 h-10 rounded-full bg-[#fff0e8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#ffffff] transition-colors">
          <svg className="w-4 h-4 text-[#231890] ml-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-[#231890] font-semibold tracking-wide uppercase">
            S{episode.season} · E{episode.episodeNumber}
          </p>
          <p className="text-xs text-[#ffd8b8]">{episode.duration} · with {episode.guest}</p>
        </div>
      </div>

      <h3 className="text-sm font-semibold text-[#ffffff] group-hover:text-[#231890] transition-colors leading-snug mb-2">
        {episode.title}
      </h3>

      <p className="text-xs text-[#ffd8b8] leading-relaxed line-clamp-2 mb-3">
        {episode.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {episode.themes.slice(0, 3).map((theme) => (
          <Tag key={theme}>{theme}</Tag>
        ))}
      </div>
    </Link>
  );
}
