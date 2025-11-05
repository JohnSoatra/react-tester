import React, { useEffect } from 'react';
import useCurrent, { Updated } from 'react-use-current';
import PostMenu from './PostMenu';
import Comment from './Comment';
import { fetchJson } from '../utils/fetchWithFallback';

type PostItem = {
  id: string;
  author: string;
  content: string;
  image?: string | null;
  likes: number;
  createdAt: number;
  comments: any[];
};

export default function Post({ post, onRemove }: { post: PostItem; onRemove: (id: string) => void }) {
  const state = useCurrent<{ likes: number; comments: any[] }>({ likes: post.likes || 0, comments: post.comments || [] });

  useEffect(() => {
    (async () => {
      const num = String(post.id).split('-')[1] || 0;
      const data = await fetchJson(`https://jsonplaceholder.typicode.com/comments?postId=${num}`);
      if (data && data.length) {
        const mapped = data.map((c: any) => ({ id: 'comment-' + c.id, author: c.email || 'anon', content: c.body || c.name, replies: [] }));
        state.value.comments.push(...mapped);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white border rounded p-4 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <div className="font-bold">{post.author}</div>
          <div className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleString()}</div>
        </div>
        <div className="flex items-start gap-2">
          <button className="text-red-500" onClick={() => state.value.likes++}>❤ {state.value.likes}</button>
          <PostMenu onEdit={() => {
            const v = prompt('Edit post content:', post.content);
            if (v !== null) post.content = v;
          }} onDelete={() => onRemove(post.id)} />
        </div>
      </div>

      <div className="mt-2 mb-2">{post.content}</div>
      {post.image && <img src={post.image} alt="" className="rounded mb-2 max-h-96 w-full object-cover" />}
      <div className="ml-2">
        {state.value.comments.map(c => <Comment key={c.id} comment={c} onAddReply={() => {}} />)}
        <input
          type="text"
          placeholder="Add comment..."
          className="w-full p-1 border rounded text-sm"
          onKeyDown={e => {
            if (e.key === 'Enter') {
              const txt = e.currentTarget.value.trim();
              if (!txt) return;
              state.value.comments.push({ id: 'comment-' + Date.now(), author: 'You', content: txt, replies: [] });
              e.currentTarget.value = '';
            }
          }}
        />
      </div>
    </div>
  );
}
