import { useEffect, useState } from "react";
import useCurrent from "react-use-current";

let a = Symbol();

export default function ErrorPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('a change = ', a);
  }, [a]);

  return (
    <div>
      <p>a = {a.description}</p>
      <button onClick={() => {a = Symbol(); setCount(c => c + 1)}}>Change</button>
    </div>
  )
}
