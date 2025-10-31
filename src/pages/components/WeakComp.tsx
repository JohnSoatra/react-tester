// components/WeakComp.tsx
import React from "react";
import { Current } from "react-use-current";

interface Props {
  data: Current<any>;
  g: any;
}

export default function WeakComp({ data, g }: Props) {
  return (
    <div>
      <h4>WeakMap & WeakSet</h4>
      <p>WeakMap has g: {String(data.current.weakMap.has(g))}</p>
      <p>WeakSet has g: {String(data.current.weakSet.has(g))}</p>
      <button onClick={() => data.current.weakMap.set(g, Math.random())}>Mutate WeakMap</button>
      <button onClick={() => data.current.weakSet.delete(g)}>Mutate WeakSet</button>
    </div>
  );
}
