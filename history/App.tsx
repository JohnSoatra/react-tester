// import React, { useEffect } from "react";
// import useCurrent, { Updated } from "react-use-current";

// export default function App() {
//   const obj = useCurrent([{ id: '0', name: 'nano', age: 20 }]);

//   useEffect(() => {
//     console.log('changed', obj.value);
//     if (obj.value[1]) {
//       // obj.value[1] = {
//       //   age: 40,
//       //   name: '34345'
//       // }
//     }
//   }, [obj[Updated]])
//   return (
//     <div>
//       <div className="flex flex-col gap-y-[10px] bg-orange-300 rounded-md p-8">
//         {
//           obj.value.map(each => <p key={each.id}>
//             item = {JSON.stringify(each)}
//           </p>)
//         }
//       </div>
//       <button onClick={() => {
//         Object.defineProperty(obj.value, 1, {
//           value: {
//             name: 'tester',
//             age: 25,
//           },
//           enumerable: true,
//           configurable: true,
//           writable: true,
//         });
//         // console.log(obj.value);
//         // delete obj.value.age;
//       }}>Change</button>
//       <br />
//       <button onClick={() => {
//         obj.value.push({
//           id: (obj.value.length + 1).toString(),
//           age: Math.floor(Math.random() * 100 )+ 1,
//           name: obj.value.slice(-1)[0].name + Date.now().toString()
//         })
//       }}>Add</button>
//     </div>
//   )
// }