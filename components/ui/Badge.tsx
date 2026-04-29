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
  Listener: 'text-[#2cd4f0] border-[#2cd4f0]/30 bg-[#2cd4f0]/08',
  Contributor: 'text-[#5090e8] border-[#5090e8]/30 bg-[#5090e8]/08',
  Guide: 'text-[#9070e8] border-[#9070e8]/30 bg-[#9070e8]/08',
  'Trusted Guide': 'text-[#c89040] border-[#c89040]/30 bg-[#c89040]/08',
  'Community Steward': 'text-[#e8e4f8] border-[#e8e4f8]/30 bg-[#e8e4f8]/05',
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
    <span className="inline-flex px-2.5 py-0.5 text-xs font-medium text-[#a898d8] bg-[#1a1640]/60 border border-[#3a2d78]/60 rounded-full">
      {children}
    </span>
  );
}
