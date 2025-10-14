function NameWatcher() {
  tools.watch(t => t.name);

  console.log('re-render name');

  return (
    <div>
      <p>name = {tools.name}</p>
      <button onClick={() => tools.setName()}>Change</button>
    </div>
  );
}

function AgeWatcher() {
  tools.watch(t => t.age);

  console.log('re-render age');

  return (
    <div>
      <p>age = {tools.age}</p>
      <button onClick={() => tools.age += 1}>Change</button>
    </div>
  );
}

export default function TestPage() {
  return (
    <div>
      <NameWatcher />
      <AgeWatcher />
      <button onClick={() => tools.navigate({ pathname: '/error' })} >to Error</button>
    </div>
  );
}
