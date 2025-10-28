export default function ErrorPage() {
  tools.watch(t => t.job.title, {
    reRender: true,
    callback(value) {
      console.log('update', value);
    },
  });

  return (
    <div>
      <button>job = { tools.job.title }</button>
      <button onClick={() => tools.setJob('test job')}>change job</button>
      {/* <button onClick={() => tools.navigate({ pathname: '/' })} >to Error</button> */}
    </div>
  );
}
