'use client';

import { useState } from 'react';
import { mockCategories } from '@/lib/mock/community';
import { UrgencyLevel } from '@/lib/types';

const urgencyOptions: { value: UrgencyLevel; label: string; description: string }[] = [
  {
    value: 'high',
    label: 'High — I need support now',
    description: 'This feels urgent or overwhelming',
  },
  {
    value: 'medium',
    label: 'Medium — Processing something hard',
    description: 'Not an emergency, but I need support',
  },
  {
    value: 'low',
    label: 'Low — Looking for perspective',
    description: 'Reflection, questions, or general support',
  },
];

export function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const [urgency, setUrgency] = useState<UrgencyLevel>('medium');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Connect to backend/API to create post
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#231890]/30 bg-[#231890]/5 p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-[#231890]/20 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✦</span>
        </div>
        <h3 className="text-lg font-semibold text-[#1a1060] mb-2">Your post has been shared</h3>
        <p className="text-sm text-[#231890]">
          The community will receive it with care. You are not alone.
        </p>
        <button
          onClick={() => { setSubmitted(false); setTitle(''); setBody(''); setCategory(''); setUrgency('medium'); }}
          className="mt-5 text-sm text-[#231890] hover:underline"
        >
          Post again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="post-title" className="block text-sm font-medium text-[#2a1a70] mb-2">
          What are you navigating?
        </label>
        <input
          id="post-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Give your post a brief, honest title"
          required
          className="w-full px-4 py-3 rounded-xl bg-[#fff8f0] border border-[#ffffff] text-[#1a1060] placeholder-[#ffd8b8] text-sm focus:outline-none focus:border-[#231890] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="post-body" className="block text-sm font-medium text-[#2a1a70] mb-2">
          Share as much or as little as you&apos;re ready to
        </label>
        <textarea
          id="post-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="What's happening? What do you need? This is a safe space."
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-[#fff8f0] border border-[#ffffff] text-[#1a1060] placeholder-[#ffd8b8] text-sm focus:outline-none focus:border-[#231890] transition-colors resize-none"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-[#2a1a70] mb-2">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl bg-[#fff8f0] border border-[#ffffff] text-[#1a1060] text-sm focus:outline-none focus:border-[#231890] transition-colors"
        >
          <option value="" disabled>Select the closest category</option>
          {mockCategories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <p className="text-sm font-medium text-[#2a1a70] mb-3">Urgency level</p>
        <div className="space-y-2">
          {urgencyOptions.map((opt) => (
            <label
              key={opt.value}
              className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                urgency === opt.value
                  ? 'border-[#231890]/50 bg-[#fff0e8]/30'
                  : 'border-[#ffffff] hover:border-[#ffffff]'
              }`}
            >
              <input
                type="radio"
                name="urgency"
                value={opt.value}
                checked={urgency === opt.value}
                onChange={() => setUrgency(opt.value)}
                className="mt-0.5 accent-[#231890]"
              />
              <div>
                <p className="text-sm font-medium text-[#1a1060]">{opt.label}</p>
                <p className="text-xs text-[#3a2a80]">{opt.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-xl bg-[#fff8f0]/60 border border-[#ffffff]/40">
        <p className="text-xs text-[#3a2a80] leading-relaxed">
          <strong className="text-[#2a1a70]">Community reminder:</strong> This is peer support — people who care, not licensed professionals. For emergencies, please call 911 or 988. Be kind with yourself and others.
        </p>
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#231890] to-[#231890] text-[transparent] hover:opacity-90 transition-opacity"
      >
        Share with the community
      </button>
    </form>
  );
}
