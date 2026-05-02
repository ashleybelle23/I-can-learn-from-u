import { Reply } from '@/lib/types';
import { TrustBadge } from '@/components/ui/Badge';

interface ReplyCardProps {
  reply: Reply;
}

function timeAgo(dateStr: string): string {
  const now = new Date();
  const then = new Date(dateStr);
  const diffMs = now.getTime() - then.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffDays > 14) return then.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  if (diffDays > 0) return `${diffDays}d ago`;
  if (diffHours > 0) return `${diffHours}h ago`;
  return 'just now';
}

export function ReplyCard({ reply }: ReplyCardProps) {
  return (
    <div
      className={`rounded-2xl border p-5 transition-colors ${
        reply.markedHelpful
          ? 'border-[#231890]/30 bg-[#231890]/5'
          : 'border-[#ffffff]/60 bg-[#fff8f0]/40'
      }`}
    >
      {/* Marked helpful indicator */}
      {reply.markedHelpful && (
        <div className="flex items-center gap-1.5 mb-3">
          <span className="text-[#231890] text-xs">✦</span>
          <span className="text-xs font-semibold text-[#231890]">Marked as helpful</span>
        </div>
      )}

      {/* Resource indicator */}
      {reply.isResource && (
        <div className="flex items-center gap-1.5 mb-3">
          <span className="text-[#34d399] text-xs">◈</span>
          <span className="text-xs font-medium text-[#34d399]">Includes resources</span>
        </div>
      )}

      {/* Author */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[#fff0e8] flex items-center justify-center text-sm font-semibold text-[#2a1a70] flex-shrink-0">
            {reply.author.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-[#1a1060]">{reply.author.name}</span>
              <TrustBadge level={reply.author.trustLevel} />
            </div>
            <span className="text-xs text-[#3a2a80]">{timeAgo(reply.createdAt)}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="prose-brand text-sm whitespace-pre-line leading-relaxed">
        {reply.body}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 mt-4 pt-3 border-t border-[#ffffff]/40">
        <button className="flex items-center gap-1.5 text-xs text-[#3a2a80] hover:text-[#231890] transition-colors">
          {/* TODO: Connect to upvote action */}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          {reply.upvotes} helpful
        </button>
        <button className="text-xs text-[#3a2a80] hover:text-[#2a1a70] transition-colors">
          {/* TODO: Connect to save/bookmark action */}
          Save
        </button>
        <button className="text-xs text-[#3a2a80] hover:text-red-400 transition-colors ml-auto">
          {/* TODO: Connect to report moderation flow */}
          Report
        </button>
      </div>
    </div>
  );
}
