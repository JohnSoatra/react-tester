import React from 'react';
export default function Reply({ reply }: { reply: any }) {
  return <div className="mb-1"><span className="font-semibold">{reply.author}:</span> {reply.content}</div>;
}
