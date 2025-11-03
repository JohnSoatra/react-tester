
// DeepTester.tsx
import React, { useEffect } from 'react';
import useCurrent from 'react-use-current';
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

const g = {g: 'g'}

export default function DeepTester() {
  const data = useCurrent({
    // array: undefined as undefined | any[],
    array: new Int8Array(new ArrayBuffer(4))
  });

  useEffect(() => {
    data.value.array[0] = 5;
    data.value.array[data.value.array.length - 1] = 1;
  }, []);

  // console.log('data.value.map = ', data.value.sets);

  return (
    <div style={{ lineHeight: 1.6 }}>
      <p>sdfdsf = {data.value.array.map(each => each)}</p>
      <button onClick={() => data.value.array.sort()}>change</button>
      {/* <p>Data = {data.value.sets.has(g) ? 'true' : 'false'}</p>
      <button onClick={() => data.value.sets.add(g)}>change</button> */}
      {/* <h3>Deep useCurrent Demo</h3>

      <p>Array: {data.value.arr.join(', ')}</p>
      <p>Map(key): {data.value.map.get('key')}</p>
      <p>Set size: {data.value.set.size}</p>

      <h4>Nested Users</h4>
      {data.value.nested.users.map((user, i) => (
        <p key={i}>
          {console.log(user) as any}
          {user.name} ({user.age}) — Tags: {user.tags.join(', ')}
        </p>
      ))}

      <h4>Nested Metrics</h4>
      <p>Scores: {data.value.nested.metrics.scores.join(', ')}</p>
      <p>Clicks: {data.value.nested.metrics.stats.clicks}</p>
      <p>Views: {data.value.nested.metrics.stats.views}</p>

      <p>Date: {data.value.date.toLocaleTimeString()}</p>
      <p>TypedArray: {data.value.typedArray.join(', ')}</p>

      <button onClick={() => data.value.arr.push(Math.random())}>Mutate Array</button>
      <button onClick={() => data.value.map.set('key', Math.random())}>Mutate Map</button>
      <button onClick={() => data.value.set.add(Math.random())}>Mutate Set</button>
      <button
        onClick={() => data.value.nested.users[0].tags.push('new')}
      >
        Add Tag to First User
      </button>
      <button
        onClick={() =>
          data.value.nested.metrics.scores.push(Math.floor(Math.random() * 100))
        }
      >
        Add Score
      </button>
      <button onClick={() => data.value.date.setSeconds(data.value.date.getSeconds() + 10)}>
        +10 seconds
      </button>
      <button
        onClick={() => data.value.typedArray.set([Math.random(), Math.random()])}
      >
        Mutate TypedArray
      </button>
      <button
        onClick={() => data.value.nested.users = []}
      >
        Add Tag to First User
      </button>
      <button
                onClick={() => data.value.nested.users.push({ age: 1, name: 'sdf', tags: [] })}

      >
        Set VAcksdf
      </button> */}
      {/* <p>has data = {data.value.sets.includes(data.value.sets[data.value.sets.length - 1]) ? 'true' : 'false'}</p> */}
      {/* <div>
        {
          data.value.array?.slice(0, 1000).map(each => (
            <p key={each.id} onClick={() => each.title += '1'}>
              {each.title}
            </p>
          ))
        }
        <p></p>
      </div> */}
      {/* <p>data {data.value.map.get(0).title}</p>
      <p>set has first {data.value.sets.has(FirstPost) ? 'true' : 'false'}</p>
      <div>
        {
          data.value.posts.slice(0, 1).map(each => (
            <p key={each.id} onClick={() => each.title += '1'}>
              {each.title}
            </p>
          ))
        }
      </div>
      <button onClick={() => {
        // console.log(data.value.map);
        // data.value.map.set('dog', { name: 'Lucky' });
        data.value.map.set(0, {
          "id": "0",
          "title": data.value.map.get(0).title + '1',
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

      {/* <button onClick={() => data.value.array = posts as any[]}>give it</button>
      <button onClick={() => {
        // console.log(data.value.map);
        // data.value.map.set('dog', { name: 'Lucky' });
        if (data.value.array?.includes(0)) {
          data.value.array.pop();
        } else {
          data.value.array?.push(0);
        }
      }}>change</button> */}
      {/* <button onClick={() => {
        data.value.posts[0].title += '1';
        // console.log('data', data.value.array.get(0));
      }}>Change array</button>
      <button onClick={() => {
        console.log('data', data.value.map.get(0));
      }}>Get data</button> */}
      {/* <p>{data.value.users.map(each => each.name)}</p>
      <div>{data.value.users.map(each => (
        <button key={each.name} onClick={() => each.name += '1'}>{each.name}</button>
      ))}</div>
      <button onClick={() => {
        data.value.users.push({ name: ", now" });
      }}>change</button>
      <button onClick={() => {
        data.value.users[1] = {
          name: '444'
        }
      }}>update</button> */}
    </div>
  );
}
