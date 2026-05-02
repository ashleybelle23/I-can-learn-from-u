import { PodcastEpisode } from '@/lib/types';

export function EpisodePlayer({ episode }: { episode: PodcastEpisode }) {
  return (
    <div className="rounded-2xl border border-[#ffffff] bg-[#fff8f0]/60 p-5">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#fff0e8] to-[transparent] flex items-center justify-center flex-shrink-0 border border-[#ffffff]/40">
          <svg className="w-7 h-7 text-[#231890]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-[#231890] font-semibold tracking-wide uppercase mb-1">
            Season {episode.season} · Episode {episode.episodeNumber}
          </p>
          <h3 className="text-sm font-semibold text-[#1a1060] leading-snug">{episode.title}</h3>
          <p className="text-xs text-[#231890]">with {episode.guest}</p>
        </div>
      </div>

      {/* Audio player placeholder */}
      {/* TODO: Replace with real audio player component (e.g. Howler.js, native audio, or podcast platform embed) */}
      <div className="space-y-3">
        {/* Progress bar */}
        <div className="h-1.5 w-full bg-[#ffffff] rounded-full overflow-hidden">
          <div className="h-full w-[0%] bg-gradient-to-r from-[#231890] to-[#231890] rounded-full" />
        </div>

        {/* Time */}
        <div className="flex justify-between text-xs text-[#3a2a80]">
          <span>0:00</span>
          <span>{episode.duration}</span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button className="p-2 text-[#3a2a80] hover:text-[#2a1a70] transition-colors" aria-label="Rewind 15 seconds">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
            </svg>
          </button>

          <button
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#231890] to-[#231890] flex items-center justify-center hover:opacity-90 transition-opacity"
            aria-label="Play episode"
          >
            <svg className="w-5 h-5 text-[transparent] ml-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </button>

          <button className="p-2 text-[#3a2a80] hover:text-[#2a1a70] transition-colors" aria-label="Fast forward 15 seconds">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
            </svg>
          </button>
        </div>
      </div>

      <p className="text-center text-xs text-[#3a2a80] mt-4 italic">
        Audio player — connect your podcast host here
      </p>
    </div>
  );
}
