import React, { useEffect } from "react";
import useCurrent, { Updated } from "react-use-current";
import NewPostForm from "./components/NewPostForm";
import Post from "./components/Post";
import { fetchJson } from "./utils/fetchWithFallback";

export default function App() {
  const updated = useCurrent(false);
  const app = useCurrent({ posts: [], limit: 5, sort: "newest", filter: "" });

  // useEffect(() => {
  //   (async () => {
  //     const posts = await fetchJson(
  //       `https://jsonplaceholder.typicode.com/posts?_limit=${app.value.limit}`
  //     );
  //     app.value.posts = posts.map((p) => ({
  //       id: "post-" + p.id,
  //       author: "User " + p.userId,
  //       content: p.title,
  //       image: "https://picsum.photos/seed/" + p.id + "/800/400",
  //       likes: Math.floor(Math.random() * 100),
  //       createdAt: Date.now() - Math.floor(Math.random() * 10000000),
  //       comments: [],
  //     }));
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // sort whenever app.updated (reacts to changes)
  // useEffect(() => {
  //   console.log('sort', app.value.sort);
  //   if (!updated.value) return;
  //   const posts = app.value.posts || [];
  //   const cloned = posts.slice();
  //   const s = app.value.sort;
  //   if (s === "likes") cloned.sort((a,b) => b.likes - a.likes);
  //   else if (s === "author") cloned.sort((a,b) => a.author.localeCompare(b.author));
  //   else cloned.sort((a,b) => b.createdAt - a.createdAt);
  //   // Guard: compare id order to avoid reassigning the same ordering
  //   // const same = cloned.length === posts.length && cloned.every((p, idx) => p.id === posts[idx].id);
  //   console.log('original = ', app.value.posts, 'cloned = ', cloned);
  //   app.value.posts = cloned;
  //   // dependency list: watch only sort (and maybe posts length)
  // }, [app.value.sort, updated.value]);

  // refetch when limit changes
  useEffect(() => {
    (async () => {
      const newPosts = await fetchJson(
        `https://jsonplaceholder.typicode.com/posts?_limit=${app.value.limit}`
      );
      app.value.posts = newPosts.map((p) => ({
        id: "post-" + p.id,
        author: "User " + p.userId,
        content: p.title,
        image: "https://picsum.photos/seed/" + p.id + "/800/400",
        likes: Math.floor(Math.random() * 100),
        createdAt: Date.now() - Math.floor(Math.random() * 10000000),
        comments: [],
      }));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app.value.limit]);

  useEffect(() => {
    console.log(app.value.posts.length, updated.value);
    if (app.value.posts.length > 0 && updated.value === false) {
      console.log('in change', app.value.posts);
      updated.value = true;
      const newValue = app.value.posts.map((a, i) => ({
        ...a,
        author: a.author + ' ' + i
      }));
      app.value.posts = newValue;
      console.log('app.value.posts = ', app.value.posts, 'new value = ', newValue);
    }
  }, [app.value.posts, updated.value]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("in change", app.value.posts);
  //     updated.value = true;
  //     const newValue = app.value.posts.map((a, i) => ({
  //       ...a,
  //       author: a.author + " " + i,
  //     }));
  //     app.value.posts = newValue;
  //     console.log(
  //       "app.value.posts = ",
  //       app.value.posts,
  //       "new value = ",
  //       newValue
  //     );
  //   }, 3000);
  // }, []);
  useEffect(() => {
    console.log('app.value.posts = ', app.value.posts);
  }, [app[Updated]]);

  const addPost = (data) => {
    const newP = {
      id: "post-" + Date.now(),
      ...data,
      likes: 0,
      createdAt: Date.now(),
      comments: [],
    };
    app.value.posts.unshift(newP);
  };

  const removePost = (id) => {
    app.value.posts = app.value.posts.filter((p) => p.id !== id);
  };

  const filtered = app.value.posts.filter((p) =>
    p.content.toLowerCase().includes((app.value.filter || "").toLowerCase())
  );

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex gap-2 mb-4 items-center">
        <select
          className="border p-1 rounded"
          value={app.value.sort}
          onChange={(e) => (app.value.sort = e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="likes">Most Liked</option>
          <option value="author">By Author</option>
        </select>

        <label className="ml-2">Limit:</label>
        <input
          type="number"
          min="1"
          max="20"
          value={app.value.limit}
          onChange={(e) => (app.value.limit = Number(e.target.value))}
          className="w-20 border p-1 rounded ml-1"
        />

        <input
          placeholder="Filter title..."
          className="ml-auto border p-1 rounded flex-1"
          value={app.value.filter}
          onChange={(e) => (app.value.filter = e.target.value)}
        />
      </div>

      <NewPostForm onPost={addPost} />

      {filtered.map((p) => (
        <Post key={p.id} post={p} onRemove={removePost} />
      ))}
    </div>
  );
}
