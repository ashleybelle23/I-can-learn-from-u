'use client';

import { useState } from 'react';

export function ReplyForm({ postId }: { postId: string }) {
  const [body, setBody] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Connect to backend/API to post reply, associate with postId
    console.log('Reply to post', postId, body);
    setSubmitted(true);
    setBody('');
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#e8b030]/20 bg-[#e8b030]/5 p-5 text-center">
        <p className="text-sm text-[#6a3858]">Your response has been shared. Thank you for showing up.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-3 text-xs text-[#e8b030] hover:underline"
        >
          Reply again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="reply-body" className="block text-sm font-medium text-[#6a3858] mb-2">
          Offer your support
        </label>
        <textarea
          id="reply-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Share what you know, what you've experienced, or simply that you hear them. Speak from your own story where possible."
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-[#fce8f0] border border-[#e8b8cc] text-[#1e1428] placeholder-[#b890a0] text-sm focus:outline-none focus:border-[#48c8b0] transition-colors resize-none"
        />
      </div>

      <div className="p-3 rounded-xl bg-[#fce8f0]/50 border border-[#e8b8cc]/30">
        <p className="text-xs text-[#b890a0]">
          Responses that share lived experience, offer practical resources, or simply witness with care earn community trust. Avoid advising from theory alone.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#e8b030] to-[#c89020] text-[#fdf5f8] hover:opacity-90 transition-opacity"
        >
          Share response
        </button>
        <button
          type="button"
          onClick={() => setBody('')}
          className="px-4 py-3 rounded-xl text-sm text-[#b890a0] border border-[#e8b8cc] hover:border-[#e8b8cc] hover:text-[#6a3858] transition-colors"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
