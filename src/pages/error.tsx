import { useEffect } from "react";
import useCurrent from "react-use-current";

export default function ErrorPage() {
  const { current: { job }, signal } = useCurrent({ job: { title: 'sdf' } });

  useEffect(() => {
    console.log(job);
  }, [signal]);

  return (
    <div>
      <p>job = {job.title}</p>
      <button onClick={() => {
        job.title += '1';
      }}>Change</button>
      {/* <p>a = {a.current}</p>
      <button onClick={() => a.current ? a.current += 1 : a.current = 1}>change</button> */}
    </div>
  )
}
