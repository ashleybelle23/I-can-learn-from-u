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
      <div className="rounded-2xl border border-[#231890]/20 bg-[#231890]/5 p-5 text-center">
        <p className="text-sm text-[#fff0dc]">Your response has been shared. Thank you for showing up.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-3 text-xs text-[#231890] hover:underline"
        >
          Reply again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="reply-body" className="block text-sm font-medium text-[#fff0dc] mb-2">
          Offer your support
        </label>
        <textarea
          id="reply-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Share what you know, what you've experienced, or simply that you hear them. Speak from your own story where possible."
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-[#fff8f0] border border-[#ffffff] text-[#ffffff] placeholder-[#ffd8b8] text-sm focus:outline-none focus:border-[#231890] transition-colors resize-none"
        />
      </div>

      <div className="p-3 rounded-xl bg-[#fff8f0]/50 border border-[#ffffff]/30">
        <p className="text-xs text-[#ffd8b8]">
          Responses that share lived experience, offer practical resources, or simply witness with care earn community trust. Avoid advising from theory alone.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#231890] to-[#231890] text-[transparent] hover:opacity-90 transition-opacity"
        >
          Share response
        </button>
        <button
          type="button"
          onClick={() => setBody('')}
          className="px-4 py-3 rounded-xl text-sm text-[#ffd8b8] border border-[#ffffff] hover:border-[#ffffff] hover:text-[#fff0dc] transition-colors"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
