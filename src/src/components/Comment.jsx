import React from 'react';
import Reply from './Reply';
import useCurrent from 'react-use-current';

export default function Comment({ comment, onAddReply }) {
  const state = useCurrent({ replies: comment.replies || [] });

  return (
    <div className="mb-2">
      <div className="font-semibold">{comment.author}</div>
      <div>{comment.content}</div>
      <div className="ml-4">
        {state.value.replies.map(r => <Reply key={r.id} reply={r} />)}
        <input
          type="text"
          placeholder="Reply..."
          className="w-full p-1 border rounded text-sm"
          onKeyDown={e => {
            if (e.key === 'Enter') {
              const txt = e.currentTarget.value.trim();
              if (!txt) return;
              const reply = { id: 'reply-' + Date.now(), author: 'You', content: txt };
              state.value.replies.push(reply);
              if (onAddReply) onAddReply(comment.id, reply);
              e.currentTarget.value = '';
            }
          }}
        />
      </div>
    </div>
  );
}
