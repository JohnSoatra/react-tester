// 
import { useEffect, useState } from 'react';
import useCurrent from 'react-use-current';

// export default useReactive;
const g = {};
export default function Tester() {
  // const a = useReactive({ name: 'sdf', age: 20, person: { test: 20 } });
  // const b = useReactive([1, [0]]);
  // const props = useCurrent(new WeakMap([[g, '']]));
  // const state = useCurrent({ score: [1, 2, 3], name: '22', b: { test: 'sdf' } });
  const state = useCurrent({ score: [1, 2, 3], name: '22', job: { year: 250 }, b: { test: 'sdf' } });
  const [state1, setState] = useState(1)


  useEffect(() => {
    console.log(state.tick);
    // console.log('change', state);
  }, [state.tick]);

  console.log(state.tick);

  return (
    <div>
      {/* <p>state = {state.current.score}</p> */}
      <p>job = {state.current.job.year}</p>
      <button onClick={() => {
        // state.current.job.year += 1;
        setState(a => a + 1);
      }}>change</button>
      {/* <p>a = {b.current.score}</p>
      <p>name = {b.current.job.year}</p>
      <p>bb = {b.current.b.test}</p>
      <button onClick={() => {
        b.current.score.push(1);
      }}>change</button>
      <br /> */}
      {/* <button onClick={() => b.current.job.year += 3}>change job</button> */}
    </div>
  );
}
