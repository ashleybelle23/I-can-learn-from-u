import { TrustLevel, UrgencyLevel } from '@/lib/types';

type BadgeVariant = 'trust' | 'urgency' | 'tag' | 'category' | 'rarity';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  trustLevel?: TrustLevel;
  urgency?: UrgencyLevel;
  className?: string;
}

const trustColors: Record<TrustLevel, string> = {
  Listener: 'text-[#7ab8c8] border-[#7ab8c8]/30 bg-[#7ab8c8]/10',
  Contributor: 'text-[#e0b848] border-[#e0b848]/30 bg-[#e0b848]/10',
  Guide: 'text-[#9b7fd4] border-[#9b7fd4]/30 bg-[#9b7fd4]/10',
  'Trusted Guide': 'text-[#d4607a] border-[#d4607a]/30 bg-[#d4607a]/10',
  'Community Steward': 'text-[#f0c060] border-[#f0c060]/30 bg-[#f0c060]/10',
};

const urgencyStyles: Record<UrgencyLevel, string> = {
  high: 'text-red-400 border-red-400/30 bg-red-400/10',
  medium: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
  low: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
};

const urgencyLabels: Record<UrgencyLevel, string> = {
  high: 'High urgency',
  medium: 'Medium urgency',
  low: 'Low urgency',
};

export function TrustBadge({ level }: { level: TrustLevel }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium border rounded-full ${trustColors[level]}`}
    >
      {level}
    </span>
  );
}

export function UrgencyBadge({ urgency }: { urgency: UrgencyLevel }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold border rounded-full ${urgencyStyles[urgency]}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          urgency === 'high' ? 'bg-red-400 animate-pulse' :
          urgency === 'medium' ? 'bg-amber-400' : 'bg-emerald-400'
        }`}
      />
      {urgencyLabels[urgency]}
    </span>
  );
}

export function Tag({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`tag-pill ${className}`}>
      {children}
    </span>
  );
}

export function CategoryBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex px-2.5 py-0.5 text-xs font-medium text-[#c8b8f0] bg-[#201c48]/40 border border-[#201c48] rounded-full">
      {children}
    </span>
  );
}
