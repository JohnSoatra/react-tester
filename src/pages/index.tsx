
// DeepTester.tsx
import React, { useEffect } from 'react';
import { p } from 'react-router/dist/development/index-react-server-client-BbRcBjrA';
import useCurrent, { Current } from 'react-use-current';
import posts from '../assets/large_posts_10k.json';

// const FirstPost = {
//   "id": "-1",
//   "title": "Post title 0",
//   "description": "This is the description of post 0. It provides information about the post content and metadata.",
//   "src": "https://example.com/videos/video_0.mp4",
//   "thumbnail": "https://example.com/thumbnails/thumb_0.jpg",
//   "author": "Author 0",
//   "createdAt": "2025-01-01T12:00:00Z",
//   "likes": 0,
//   "views": 0,
//   "tags": [
//     "tag0",
//     "tag1"
//   ]
// }

const g = {}

export default function DeepTester() {
  const data = useCurrent({
    // arr: [1, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3],
    // map: new Map([['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42], ['key', 42]]),
    // set: new Set([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,'2d']),
    // nested: {
    //   users: [
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //   ],
    //   users1: [
    //     { name: 'Alice', age: 25, tags: ['admin', 'editor'] },
    //     { name: 'Bob', age: 30, tags: ['user'] },
    //   ],
    //   metrics: {
    //     scores: [10, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, {sdfsdf: 'ss'}],
    //     stats: { clicks: 100, views: 200,  cwlicks: 100, viewws: 200 },

    //   },
    //   map2: new Map([['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100], ['x', 100]]),
    // },
    // date: new Date(),
    // typedArray: new Float32Array([0.1, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3]),
    // users: [{name: 'sdf'}]
    // map: new Map((posts as any[]).map((each, i) => [i, each])),
    // posts: posts as any[],
    sets: new Set<any>([g])
  });

  useEffect(() => {
    // console.log(data.current.posts);
    // console.log('Current state:', data.current);
    // console.log('Signal updated:', data.signal);
  }, [data.signal]);

  // console.log('data.current.map = ', data.current.sets);

  return (
    <div style={{ lineHeight: 1.6 }}>
      {/* <h3>Deep useCurrent Demo</h3>

      <p>Array: {data.current.arr.join(', ')}</p>
      <p>Map(key): {data.current.map.get('key')}</p>
      <p>Set size: {data.current.set.size}</p>

      <h4>Nested Users</h4>
      {data.current.nested.users.map((user, i) => (
        <p key={i}>
          {console.log(user) as any}
          {user.name} ({user.age}) — Tags: {user.tags.join(', ')}
        </p>
      ))}

      <h4>Nested Metrics</h4>
      <p>Scores: {data.current.nested.metrics.scores.join(', ')}</p>
      <p>Clicks: {data.current.nested.metrics.stats.clicks}</p>
      <p>Views: {data.current.nested.metrics.stats.views}</p>

      <p>Date: {data.current.date.toLocaleTimeString()}</p>
      <p>TypedArray: {data.current.typedArray.join(', ')}</p>

      <button onClick={() => data.current.arr.push(Math.random())}>Mutate Array</button>
      <button onClick={() => data.current.map.set('key', Math.random())}>Mutate Map</button>
      <button onClick={() => data.current.set.add(Math.random())}>Mutate Set</button>
      <button
        onClick={() => data.current.nested.users[0].tags.push('new')}
      >
        Add Tag to First User
      </button>
      <button
        onClick={() =>
          data.current.nested.metrics.scores.push(Math.floor(Math.random() * 100))
        }
      >
        Add Score
      </button>
      <button onClick={() => data.current.date.setSeconds(data.current.date.getSeconds() + 10)}>
        +10 seconds
      </button>
      <button
        onClick={() => data.current.typedArray.set([Math.random(), Math.random()])}
      >
        Mutate TypedArray
      </button>
      <button
        onClick={() => data.current.nested.users = []}
      >
        Add Tag to First User
      </button>
      <button
                onClick={() => data.current.nested.users.push({ age: 1, name: 'sdf', tags: [] })}

      >
        Set VAcksdf
      </button> */}
      <p>has data = {data.current.sets.has(g) ? 'true' : 'false'}</p>
      {/* <p>data {data.current.map.get(0).title}</p>
      <p>set has first {data.current.sets.has(FirstPost) ? 'true' : 'false'}</p>
      <div>
        {
          data.current.posts.slice(0, 1).map(each => (
            <p key={each.id} onClick={() => each.title += '1'}>
              {each.title}
            </p>
          ))
        }
      </div>
      <button onClick={() => {
        // console.log(data.current.map);
        // data.current.map.set('dog', { name: 'Lucky' });
        data.current.map.set(0, {
          "id": "0",
          "title": data.current.map.get(0).title + '1',
          "description": "This is the description of post 0. It provides information about the post content and metadata.",
          "src": "https://example.com/videos/video_0.mp4",
          "thumbnail": "https://example.com/thumbnails/thumb_0.jpg",
          "author": "Author 0",
          "createdAt": "2025-01-01T12:00:00Z",
          "likes": 0,
          "views": 0,
          "tags": [
            "tag0",
            "tag1"
          ]
        })
      }}>change</button> */}
      <button onClick={() => {
        // console.log(data.current.map);
        // data.current.map.set('dog', { name: 'Lucky' });
        data.current.sets.add(g);
      }}>change</button>
      {/* <button onClick={() => {
        data.current.posts[0].title += '1';
        // console.log('data', data.current.array.get(0));
      }}>Change array</button>
      <button onClick={() => {
        console.log('data', data.current.map.get(0));
      }}>Get data</button> */}
      {/* <p>{data.current.users.map(each => each.name)}</p>
      <div>{data.current.users.map(each => (
        <button key={each.name} onClick={() => each.name += '1'}>{each.name}</button>
      ))}</div>
      <button onClick={() => {
        data.current.users.push({ name: ", now" });
      }}>change</button>
      <button onClick={() => {
        data.current.users[1] = {
          name: '444'
        }
      }}>update</button> */}
    </div>
  );
}
