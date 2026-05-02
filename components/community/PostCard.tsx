import Link from 'next/link';
import { CommunityPost } from '@/lib/types';
import { TrustBadge, UrgencyBadge, CategoryBadge, Tag } from '@/components/ui/Badge';

interface PostCardProps {
  post: CommunityPost;
  compact?: boolean;
}

function timeAgo(dateStr: string): string {
  const now = new Date();
  const then = new Date(dateStr);
  const diffMs = now.getTime() - then.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor(diffMs / (1000 * 60));

  if (diffDays > 14) return then.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  if (diffDays > 0) return `${diffDays}d ago`;
  if (diffHours > 0) return `${diffHours}h ago`;
  return `${diffMins}m ago`;
}

export function PostCard({ post, compact = false }: PostCardProps) {
  return (
    <Link
      href={`/community/${post.id}`}
      className={`block rounded-2xl border bg-[#fff8f0]/60 hover:bg-[#fff8f0] transition-all duration-200 group ${
        post.urgency === 'high'
          ? 'border-red-800/40 urgency-high'
          : post.urgency === 'medium'
          ? 'border-[#ffffff] urgency-medium'
          : 'border-[#ffffff] urgency-low'
      }`}
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <UrgencyBadge urgency={post.urgency} />
            <CategoryBadge>{post.category}</CategoryBadge>
            {post.pinned && (
              <span className="text-xs text-[#231890] font-medium flex items-center gap-1">
                ✦ Pinned
              </span>
            )}
          </div>
          <span className="text-xs text-[#3a2a80] flex-shrink-0">{timeAgo(post.createdAt)}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-[#1a1060] group-hover:text-[#231890] transition-colors leading-snug mb-2">
          {post.title}
        </h3>

        {/* Body excerpt */}
        {!compact && (
          <p className="text-sm text-[#3a2a80] leading-relaxed line-clamp-2 mb-4">
            {post.body}
          </p>
        )}

        {/* Tags */}
        {!compact && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 4).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[#ffffff]/40">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#fff0e8] flex items-center justify-center text-xs font-semibold text-[#2a1a70] flex-shrink-0">
              {post.author.name.charAt(0)}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-[#231890] font-medium">{post.author.name}</span>
              <TrustBadge level={post.author.trustLevel} />
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-[#3a2a80]">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {post.replyCount}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {post.upvotes}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
