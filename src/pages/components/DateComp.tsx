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
      <p>{data.value.date.toLocaleTimeString()}</p>
      <button onClick={() => data.value.date.setSeconds(data.value.date.getSeconds() + 5)}>+5 seconds</button>
      <button onClick={() => (data.value.date = new Date())}>Reset Date</button>
    </div>
  );
}
