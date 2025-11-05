// components/ArrayComp.tsx
import React from "react";
import { Current } from "react-use-current";

interface Props {
  data: Current<any>;
}

export default function ArrayComp({ data }: Props) {
  return (
    <div>
      <h4>Array</h4>
      <p>{data.value.arr.join(", ")}</p>
      <button onClick={() => data.value.arr.push(Math.random())}>Mutate Array</button>
    </div>
  );
}
