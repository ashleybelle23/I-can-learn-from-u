import { Badge } from '@/lib/types';

const rarityColors = {
  common: '#2cd4f0',
  uncommon: '#5090e8',
  rare: '#9070e8',
  legendary: '#c89040',
};

const rarityLabels = {
  common: 'Common',
  uncommon: 'Uncommon',
  rare: 'Rare',
  legendary: 'Legendary',
};

export function BadgeCard({ badge, earned = false }: { badge: Badge; earned?: boolean }) {
  const color = rarityColors[badge.rarity];

  return (
    <div
      className={`rounded-xl border p-4 text-center transition-all ${
        earned
          ? 'border-opacity-40 bg-opacity-10'
          : 'border-[#3a2d78]/40 bg-[#130f30]/40 opacity-40 grayscale'
      }`}
      style={
        earned
          ? {
              borderColor: `${color}40`,
              backgroundColor: `${color}08`,
            }
          : undefined
      }
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mx-auto mb-3"
        style={
          earned
            ? { backgroundColor: `${color}20`, color }
            : { backgroundColor: '#3a2d78', color: '#7868b8' }
        }
      >
        {badge.icon}
      </div>
      <h4 className="text-xs font-semibold text-[#e8e4f8] mb-1">{badge.name}</h4>
      <p className="text-xs text-[#6858a8] leading-relaxed mb-2">{badge.description}</p>
      <span
        className="text-xs font-medium px-2 py-0.5 rounded-full"
        style={
          earned
            ? { color, backgroundColor: `${color}15` }
            : { color: '#7868b8', backgroundColor: '#130f30' }
        }
      >
        {rarityLabels[badge.rarity]}
      </span>
      {!earned && (
        <p className="text-xs text-[#7868b8] mt-2">Not yet earned</p>
      )}
    </div>
  );
}
