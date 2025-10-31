// components/SetComp.tsx
import React from "react";
import { Current } from "react-use-current";

interface Props {
  data: Current<any>;
}

export default function SetComp({ data }: Props) {
  return (
    <div>
      <h4>Set</h4>
      <p>Size: {data.current.set.size}</p>
      <button onClick={() => data.current.set.add(Math.random())}>Mutate Set</button>
    </div>
  );
}
