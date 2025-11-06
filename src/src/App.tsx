import React, { JSX, useEffect } from 'react';
import useCurrent, {  } from 'react-use-current';
import NewPostForm from './components/NewPostForm';
import Post from './components/Post';
import { fetchJson } from './utils/fetchWithFallback';

type PostItem = {
  id: string;
  author: string;
  content: string;
  image?: string | null;
  likes: number;
  createdAt: number;
  comments: any[];
};

export default function App(): JSX.Element {
  // useCurrent returns an object where state is in .value and Updated symbol used as key
  const app = useCurrent<{ posts: PostItem[]; limit: number; sort: string; filter: string } | undefined>(undefined);

  // Initialize after mount (simulate loading)




  // Derived list computed without mutating app.value.posts (safe)

  // Refetch when limit changes using dependency on app.value.limit and app[Updated]
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const addPost = (data: { author?: string; content: string; image?: string | null }) => {
    const newP: PostItem = {
      id: 'post-' + Date.now(),
      author: data.author || 'You',
      content: data.content,
      image: data.image || null,
      likes: 0,
      createdAt: Date.now(),
      comments: []
    };
    app.value!.posts = [newP, ...app.value!.posts];
  };

  const removePost = (id: string) => {
    app.value!.posts = app.value!.posts.filter(p => p.id !== id);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const t = setTimeout(async () => {
      const posts = await fetchJson(`https://jsonplaceholder.typicode.com/posts?_limit=5`);
      app.value = {
        posts: posts.map((p: any) => ({
          id: 'post-' + p.id,
          author: 'User ' + p.userId,
          content: p.title,
          image: `https://picsum.photos/seed/${p.id}/800/400`,
          likes: Math.floor(Math.random() * 100),
          createdAt: Date.now() - Math.floor(Math.random() * 10000000),
          comments: []
        })),
        limit: 5,
        sort: 'newest',
        filter: ''
      };
    }, 800); // small loading delay
    return () => clearTimeout(t);
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let mounted = true;
    if (app.value) {
      (async () => {
        const limit = app.value!.limit;
        const posts = await fetchJson(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        if (!mounted) return;
        app.value!.posts = posts.map((p: any) => ({
          id: 'post-' + p.id,
          author: 'User ' + p.userId,
          content: p.title,
          image: `https://picsum.photos/seed/${p.id}/800/400`,
          likes: Math.floor(Math.random() * 100),
          createdAt: Date.now() - Math.floor(Math.random() * 10000000),
          comments: []
        }));
      })();
    }
    return () => { mounted = false; };
    // Dependency: react to changes in limit (fine-grained) and Updated to ensure reactivity doesn't miss
  }, [app.value?.limit]);

  if (!app.value) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  const displayed = (() => {
    const posts = [...app.value!.posts];
    const s = app.value!.sort;
    if (s === 'likes') posts.sort((a, b) => b.likes - a.likes);
    else if (s === 'author') posts.sort((a, b) => a.author.localeCompare(b.author));
    else posts.sort((a, b) => b.createdAt - a.createdAt);
    const filter = (app.value!.filter || '').toLowerCase();
    return posts.filter(p => p.content.toLowerCase().includes(filter));
  })();

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex gap-2 mb-4 items-center">
        <select className="border p-1 rounded" value={app.value.sort} onChange={e => (app.value!.sort = e.target.value)}>
          <option value="newest">Newest</option>
          <option value="likes">Most Liked</option>
          <option value="author">By Author</option>
        </select>

        <label className="ml-2">Limit:</label>
        <input
          type="number"
          min={1}
          max={20}
          value={app.value.limit}
          onChange={e => (app.value!.limit = Number(e.target.value))}
          className="w-20 border p-1 rounded ml-1"
        />

        <input
          placeholder="Filter title..."
          className="ml-auto border p-1 rounded flex-1"
          value={app.value.filter}
          onChange={e => (app.value!.filter = e.target.value)}
        />
      </div>

      <NewPostForm onPost={addPost} />

      {displayed.map(p => (
        <Post key={p.id} post={p} onRemove={removePost} />
      ))}
    </div>
  );
}
