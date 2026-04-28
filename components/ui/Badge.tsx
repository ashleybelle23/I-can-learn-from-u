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
  Listener: 'text-[#38c8b0] border-[#38c8b0]/30 bg-[#38c8b0]/10',
  Contributor: 'text-[#e8b030] border-[#e8b030]/30 bg-[#e8b030]/10',
  Guide: 'text-[#f090a8] border-[#f090a8]/30 bg-[#f090a8]/10',
  'Trusted Guide': 'text-[#e06080] border-[#e06080]/30 bg-[#e06080]/10',
  'Community Steward': 'text-[#f0c040] border-[#f0c040]/30 bg-[#f0c040]/10',
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
    <span className="inline-flex px-2.5 py-0.5 text-xs font-medium text-[#6a3858] bg-[#f8dce8]/40 border border-[#f8dce8] rounded-full">
      {children}
    </span>
  );
}
