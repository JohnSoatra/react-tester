// components/NestedComp.tsx
import React from "react";
import useCurrent, { Current } from "react-use-current";

interface Props {
  data: Current<any>;
}

export default function NestedComp({ data }: Props) {
  return (
    <div>
      <h4>Nested</h4>
      <p>arr2: {data.value.nested.arr2.join(", ")}</p>
      <p>Deep value: {data.value.nested.obj.deep.value}</p>
      <button onClick={() => data.value.nested.arr2.push(Math.random())}>Mutate Nested Array</button>
    </div>
  );
}
