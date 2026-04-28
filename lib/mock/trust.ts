import { TrustLevelConfig, EmergencyResource } from '@/lib/types';

export const trustLevels: TrustLevelConfig[] = [
  {
    level: 'Listener',
    minPoints: 0,
    maxPoints: 99,
    color: '#7ab8c8',
    description:
      'You\'ve joined the circle. You\'re here, present, and that matters. Take your time. Read, listen, and when you\'re ready — share.',
    perks: [
      'Full access to all community posts',
      'Can upvote helpful responses',
      'Can save resources',
      'Receive a warm welcome from the community',
    ],
  },
  {
    level: 'Contributor',
    minPoints: 100,
    maxPoints: 499,
    color: '#e0b848',
    description:
      'You\'ve begun to give as well as receive. Your presence is being felt. The community is learning from you.',
    perks: [
      'All Listener perks',
      'Can reply to support posts',
      'Can create your own support posts',
      'Access to private contributor threads',
      'Unlock ability to suggest community resources',
    ],
  },
  {
    level: 'Guide',
    minPoints: 500,
    maxPoints: 1499,
    color: '#9b7fd4',
    description:
      'You\'ve walked enough miles to help others find their footing. Your lived experience is a gift. People seek you out.',
    perks: [
      'All Contributor perks',
      'Guide badge displayed on your profile',
      'Can mentor new Listeners',
      'Access to the Guide\'s Circle (private space for peer support providers)',
      'Early access to new podcast episodes',
      'Discounts in the store',
    ],
  },
  {
    level: 'Trusted Guide',
    minPoints: 1500,
    maxPoints: 2999,
    color: '#d4607a',
    description:
      'The community trusts you. Not because you\'re perfect, but because you\'ve been consistent, humble, and genuinely helpful over time.',
    perks: [
      'All Guide perks',
      'Trusted Guide badge with special visual treatment',
      'Can flag posts for urgent attention',
      'Can nominate others for badges',
      'Featured in the "Voices of the Community" section',
      'Invited to contribute to community newsletter',
    ],
  },
  {
    level: 'Community Steward',
    minPoints: 3000,
    maxPoints: null,
    color: '#f0c060',
    description:
      'You are the community. You\'ve shown over time that you are here not for recognition, but for the work. You help hold this space so others can heal.',
    perks: [
      'All Trusted Guide perks',
      'Community Steward badge (rare)',
      'Helps shape community guidelines',
      'Invited to host live community events',
      'Co-authorship opportunities for community resources',
      'Input on store partnerships and giveback programs',
    ],
  },
];

export const emergencyResources: EmergencyResource[] = [
  {
    name: '988 Suicide & Crisis Lifeline',
    description: 'Free, confidential support for people in distress. Call or text 988 anytime.',
    phone: '988',
    text: '988',
    url: 'https://988lifeline.org',
    hours: '24 hours, 7 days a week',
  },
  {
    name: 'Crisis Text Line',
    description: 'Text HOME to 741741 to connect with a trained crisis counselor.',
    text: '741741',
    url: 'https://crisistextline.org',
    hours: '24 hours, 7 days a week',
  },
  {
    name: 'NAMI Helpline',
    description:
      'National Alliance on Mental Illness. For family members and people seeking mental health support.',
    phone: '1-800-950-6264',
    url: 'https://nami.org',
    hours: 'Mon–Fri, 10am–10pm ET',
  },
  {
    name: 'SAMHSA Helpline',
    description: 'Free, confidential help for substance use and mental health disorders.',
    phone: '1-800-662-4357',
    url: 'https://samhsa.gov/find-help/national-helpline',
    hours: '24 hours, 7 days a week',
  },
  {
    name: 'Trans Lifeline',
    description: 'Peer support for trans people in crisis, run by trans people.',
    phone: '877-565-8860',
    url: 'https://translifeline.org',
    hours: '24 hours, 7 days a week',
  },
];
