// components/DateComp.tsx
import React from "react";
import { Current } from "react-use-current";

interface Props {
  data: Current<any>;
}

export default function DateComp({ data }: Props) {
  return (
    <div>
      <h4>Date</h4>
      <p>{data.current.date.toLocaleTimeString()}</p>
      <button onClick={() => data.current.date.setSeconds(data.current.date.getSeconds() + 5)}>+5 seconds</button>
      <button onClick={() => (data.current.date = new Date())}>Reset Date</button>
    </div>
  );
}
