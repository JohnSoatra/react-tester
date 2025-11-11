import React, { useEffect } from "react";
import useCurrent, { Updated } from "react-use-current";
class Person {
  name?: string;
  age?: number;
  public test(this: any) {
    console.log(this);
    this.age = 20;
  }
}
const instance = new Person();
// console.log(Object.keys(instance));
const g = {
  name: 'test',
  update() {
    this.name += '1'
  }
  }
export default function App() {
  const obj = useCurrent(g);

  useEffect(() => {
    console.log('changed', obj.value);
  }, [obj[Updated]])
  return (
    <div>
      <p>Date = {JSON.stringify(obj.value)}</p>
      <button onClick={() => {
        obj.value.update.apply(new Proxy(obj.value, {}))
        // const a = obj.value.getTime.apply(new Proxy(new Date(), {}));
        // console.log(a);
        // obj.value.update()
        // obj.value.getDate.apply(new Date())
        // const s = obj.value.test.apply(obj.value);
        // console.log(obj.value);
        // fn.apply(obj.value)
        // class Person {
        //   name?: string;
        //   age?: number;
        //   test(this: any) {
        //     console.log(this);
        //     this.age = 20;
        //   }
        // }
        // const person = new Person();
        // const fn = person.test;
        // fn.apply(null);
      }}>Change</button>
    </div>
  )
}