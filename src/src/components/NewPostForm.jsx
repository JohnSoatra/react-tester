import React from 'react';
import useCurrent from 'react-use-current';

export default function NewPostForm({ onPost }) {
  const input = useCurrent({ author: '', content: '', image: null });

  const handleFile = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = ev => input.value.image = ev.target.result;
    r.readAsDataURL(f);
  };

  return (
    <div className="p-4 bg-white border rounded mb-4">
      <input
        name="author"
        placeholder="Your name"
        className="w-full mb-2 border p-2 rounded"
        value={input.value.author}
        onChange={e => (input.value.author = e.target.value)}
      />
      <textarea
        name="content"
        placeholder="Write something..."
        className="w-full mb-2 border p-2 rounded"
        value={input.value.content}
        onChange={e => (input.value.content = e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handleFile} className="mb-2" />
      <div className="flex gap-2">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => {
            if (!input.value.content.trim()) return;
            onPost({
              author: input.value.author || 'You',
              content: input.value.content,
              image: input.value.image
            });
            input.value.author = '';
            input.value.content = '';
            input.value.image = null;
          }}
        >
          Post
        </button>
        {input.value.image && <img src={input.value.image} alt="preview" className="h-12 rounded" />}
      </div>
    </div>
  );
}
