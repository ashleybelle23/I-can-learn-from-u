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
      <div className="rounded-2xl border border-[#c89040]/20 bg-[#c89040]/5 p-5 text-center">
        <p className="text-sm text-[#a898d8]">Your response has been shared. Thank you for showing up.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-3 text-xs text-[#c89040] hover:underline"
        >
          Reply again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="reply-body" className="block text-sm font-medium text-[#a898d8] mb-2">
          Offer your support
        </label>
        <textarea
          id="reply-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Share what you know, what you've experienced, or simply that you hear them. Speak from your own story where possible."
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-[#130f30] border border-[#3a2d78] text-[#e8e4f8] placeholder-[#6858a8] text-sm focus:outline-none focus:border-[#2cd4f0] transition-colors resize-none"
        />
      </div>

      <div className="p-3 rounded-xl bg-[#130f30]/50 border border-[#3a2d78]/30">
        <p className="text-xs text-[#6858a8]">
          Responses that share lived experience, offer practical resources, or simply witness with care earn community trust. Avoid advising from theory alone.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#c89040] to-[#a87828] text-[#07051a] hover:opacity-90 transition-opacity"
        >
          Share response
        </button>
        <button
          type="button"
          onClick={() => setBody('')}
          className="px-4 py-3 rounded-xl text-sm text-[#6858a8] border border-[#3a2d78] hover:border-[#3a2d78] hover:text-[#a898d8] transition-colors"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
