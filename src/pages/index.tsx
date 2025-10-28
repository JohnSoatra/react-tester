import useCurrent from 'react-use-current';

export default function Tester() {
  const test = useCurrent<{ name: string, age: {name: string}[] }>();
  const a = useCurrent<number>(3);
  return (
    <div>
      <p>ssdf = {test.current?.name}</p>
      <p>ssdfff = {test.current?.age[0].name}</p>
      <p>a = {a.current}</p>
      <button onClick={() => {
        test.current = { name: 'sdf', age: [{ name: 'v' }] }
      }}>change</button>
      <br />
      <button onClick={() => {
        test.current && test.current.age.push({name: '3'});
      }}>change</button>
      <br />
      <button onClick={() => a.current += 1}>sdf</button>
    </div>
  )
}