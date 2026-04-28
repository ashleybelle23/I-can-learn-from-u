import { Badge } from '@/lib/types';

const rarityColors = {
  common: '#38c8b0',
  uncommon: '#e8b030',
  rare: '#f090a8',
  legendary: '#f0c040',
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
          : 'border-[#e8b8cc]/40 bg-[#fce8f0]/20 opacity-40 grayscale'
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
            : { backgroundColor: '#e8b8cc', color: '#9a6880' }
        }
      >
        {badge.icon}
      </div>
      <h4 className="text-xs font-semibold text-[#1e1428] mb-1">{badge.name}</h4>
      <p className="text-xs text-[#b890a0] leading-relaxed mb-2">{badge.description}</p>
      <span
        className="text-xs font-medium px-2 py-0.5 rounded-full"
        style={
          earned
            ? { color, backgroundColor: `${color}15` }
            : { color: '#9a6880', backgroundColor: '#fce8f0' }
        }
      >
        {rarityLabels[badge.rarity]}
      </span>
      {!earned && (
        <p className="text-xs text-[#9a6880] mt-2">Not yet earned</p>
      )}
    </div>
  );
}
