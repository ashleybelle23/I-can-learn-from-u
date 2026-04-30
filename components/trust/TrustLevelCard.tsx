import { TrustLevelConfig } from '@/lib/types';

interface TrustLevelCardProps {
  config: TrustLevelConfig;
  current?: boolean;
  userPoints?: number;
}

export function TrustLevelCard({ config, current = false, userPoints }: TrustLevelCardProps) {
  const progressPercent =
    current && userPoints !== undefined && config.maxPoints
      ? Math.min(
          ((userPoints - config.minPoints) / (config.maxPoints - config.minPoints)) * 100,
          100
        )
      : null;

  return (
    <div
      className={`rounded-2xl border p-6 transition-all ${
        current
          ? 'border-[#231890]/40 bg-gradient-to-br from-[#fff8f0] to-[#fff0e8]/30 glow-gold'
          : 'border-[#ffffff]/60 bg-[#fff8f0]/40'
      }`}
    >
      {current && (
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#231890] animate-pulse" />
          <span className="text-xs font-semibold text-[#231890] tracking-wide uppercase">Your level</span>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold" style={{ color: config.color }}>
            {config.level}
          </h3>
          <p className="text-xs text-[#ffd8b8] mt-0.5">
            {config.minPoints.toLocaleString()}
            {config.maxPoints ? ` – ${config.maxPoints.toLocaleString()}` : '+'} points
          </p>
        </div>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
          style={{ backgroundColor: `${config.color}20`, color: config.color }}
        >
          {config.level === 'Listener' ? '◎' :
           config.level === 'Contributor' ? '◈' :
           config.level === 'Guide' ? '⬡' :
           config.level === 'Trusted Guide' ? '✦' : '✺'}
        </div>
      </div>

      <p className="text-sm text-[#231890] leading-relaxed mb-5">{config.description}</p>

      {/* Progress bar (only for current level) */}
      {progressPercent !== null && (
        <div className="mb-5">
          <div className="flex justify-between text-xs text-[#ffd8b8] mb-1.5">
            <span>{userPoints?.toLocaleString()} pts</span>
            <span>{config.maxPoints?.toLocaleString()} pts</span>
          </div>
          <div className="h-1.5 w-full bg-[#ffffff] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progressPercent}%`,
                background: `linear-gradient(90deg, ${config.color}, ${config.color}cc)`,
              }}
            />
          </div>
        </div>
      )}

      {/* Perks */}
      <ul className="space-y-2">
        {config.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2 text-xs text-[#ffd8b8]">
            <span className="text-[#231890] mt-0.5">·</span>
            {perk}
          </li>
        ))}
      </ul>
    </div>
  );
}
