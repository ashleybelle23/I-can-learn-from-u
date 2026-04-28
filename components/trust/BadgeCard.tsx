import { Badge } from '@/lib/types';

const rarityColors = {
  common: '#7ab8c8',
  uncommon: '#e0b848',
  rare: '#9b7fd4',
  legendary: '#f0c060',
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
          : 'border-[#3c3070]/40 bg-[#181440]/20 opacity-40 grayscale'
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
            : { backgroundColor: '#3c3070', color: '#a890d8' }
        }
      >
        {badge.icon}
      </div>
      <h4 className="text-xs font-semibold text-[#ede8f8] mb-1">{badge.name}</h4>
      <p className="text-xs text-[#9080c0] leading-relaxed mb-2">{badge.description}</p>
      <span
        className="text-xs font-medium px-2 py-0.5 rounded-full"
        style={
          earned
            ? { color, backgroundColor: `${color}15` }
            : { color: '#a890d8', backgroundColor: '#181440' }
        }
      >
        {rarityLabels[badge.rarity]}
      </span>
      {!earned && (
        <p className="text-xs text-[#a890d8] mt-2">Not yet earned</p>
      )}
    </div>
  );
}
