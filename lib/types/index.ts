export type UrgencyLevel = 'high' | 'medium' | 'low';

export type TrustLevel =
  | 'Listener'
  | 'Contributor'
  | 'Guide'
  | 'Trusted Guide'
  | 'Community Steward';

export type CommunityCategory =
  | 'Mental Health Crisis'
  | 'Trauma Support'
  | 'Family Support'
  | 'Addiction'
  | 'Grief'
  | 'Spiritual Growth'
  | 'Relationships'
  | 'Personal Transformation';

export interface User {
  id: string;
  name: string;
  avatar: string;
  trustLevel: TrustLevel;
  points: number;
  badges: Badge[];
  joinedAt: string;
  contributions: number;
  bio: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt?: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
}

export interface PodcastEpisode {
  id: string;
  slug: string;
  title: string;
  description: string;
  guest: string;
  guestBio: string;
  themes: string[];
  duration: string;
  publishedAt: string;
  episodeNumber: number;
  season: number;
  imageUrl: string;
  audioUrl: string;
  transcript?: string;
  relatedDiscussionId?: string;
  featured: boolean;
}

export interface CommunityPost {
  id: string;
  title: string;
  body: string;
  author: User;
  category: CommunityCategory;
  urgency: UrgencyLevel;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  replyCount: number;
  upvotes: number;
  saves: number;
  pinned: boolean;
  resolved: boolean;
  replies: Reply[];
}

export interface Reply {
  id: string;
  postId: string;
  body: string;
  author: User;
  createdAt: string;
  upvotes: number;
  isResource: boolean;
  markedHelpful: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  origin: string;
  culturalContext: string;
  price: number;
  imageUrl: string;
  category: string;
  communityImpactNote: string;
  inStock: boolean;
  featured: boolean;
  tags: string[];
}

export interface TrustLevelConfig {
  level: TrustLevel;
  minPoints: number;
  maxPoints: number | null;
  color: string;
  description: string;
  perks: string[];
}

export interface EmergencyResource {
  name: string;
  description: string;
  phone?: string;
  text?: string;
  url?: string;
  hours: string;
}
