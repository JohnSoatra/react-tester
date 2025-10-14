import { useEffect, useRef, useState } from 'react';

export function useDeepWatch<T extends object, B>(tools: T, tracker: (obj: T) => B, callback: (value: B) => void) {
  const previousValue = useRef<any>(undefined);

  useEffect(() => {
    const value = tracker(tools);

    if (previousValue.current !== value) {
      previousValue.current = value;
      callback(value);
    }
  }, [tools, callback, tracker]);
}

export default function VariousComponent() {
  const [tools, setTools] = useState({ name: 'some name', age: 20, job: { year: 20 } });

  useDeepWatch(
    tools,
    (_tools) => _tools.job,
    (changes) => {
      console.log('changes', changes);
    }
  );

  return (
    <>
      <div>name = {tools.name}</div>
      <button onClick={() => setTools(o => ({ ...o, name: 'some name' + Date.now() }))}>Change Name</button>
      <br />
      <button onClick={() => setTools(o => ({ ...o, age: Date.now() }))}>Change Age</button>
      <br />
      <button onClick={() => setTools(o => ({ ...o, job: { year: 20 } }))}>Change Job</button>
    </>
  );
}