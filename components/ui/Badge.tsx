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
  Listener:            'text-[#e888a0] border-[#e888a0]/40 bg-[#e888a0]/10',
  Contributor:         'text-[#e06038] border-[#e06038]/40 bg-[#e06038]/10',
  Guide:               'text-[#8030c0] border-[#8030c0]/40 bg-[#8030c0]/10',
  'Trusted Guide':     'text-[#231890] border-[#231890]/40 bg-[#231890]/10',
  'Community Steward': 'text-white border-white/40 bg-white/10',
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
    <span className="inline-flex px-2.5 py-0.5 text-xs font-medium text-[#2a1a70] bg-[#fff0e8]/60 border border-[#ffffff]/60 rounded-full">
      {children}
    </span>
  );
}
