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
      <p>WeakMap has g: {String(data.value.weakMap.has(g))}</p>
      <p>WeakSet has g: {String(data.value.weakSet.has(g))}</p>
      <button onClick={() => data.value.weakMap.set(g, Math.random())}>Mutate WeakMap</button>
      <button onClick={() => data.value.weakSet.delete(g)}>Mutate WeakSet</button>
    </div>
  );
}
