// components/TypedArrayComp.tsx
import React from "react";
import { Current } from "react-use-current";

interface Props {
  data: Current<any>;
}

export default function TypedArrayComp({ data }: Props) {
  return (
    <div>
      <h4>TypedArray</h4>
      <p>{data.value.typedArray.join(", ")}</p>
      <button
        onClick={() =>
          data.value.typedArray.set([Math.random(), Math.random(), Math.random()])
        }
      >
        Mutate TypedArray
      </button>
    </div>
  );
}
