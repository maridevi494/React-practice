// // import React, { useState } from 'react'
// // import Child from "./task/child";

// // export default function task() {
// //     const[name,setName]=useState('React ')
// //   return (
// //     <child title={name} />
   
// //   )
// // }

// import React,{useState} from "react";
// import Child from "./task/child";



// export default function Task() {
//     const [name,setName] = useState("hello")
//   return (
//     <child title={name} />
//   )
// }


import { useState } from 'react';

let datas = [
  { id: 0, name: 'Form 1' },
  { id: 1, name: 'Form2'},
  { id: 2, name: 'Form 3'},
];

export default function List() {
  const [del, setDel] = useState(
    datas
  );

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {del.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setDel(
                del.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}





      

