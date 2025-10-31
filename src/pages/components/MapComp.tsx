// components/MapComp.tsx
import React from "react";
import { Current } from "react-use-current";

interface Props {
  data: Current<any>;
}

export default function MapComp({ data }: Props) {
  return (
    <div>
      <h4>Map</h4>
      <p>{data.current.map.get("a")}</p>
      <button onClick={() => data.current.map.set("a", Math.random())}>Mutate Map</button>
    </div>
  );
}
