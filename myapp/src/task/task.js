// import React, { useState } from 'react'
// import Child from "./task/child";

// export default function task() {
//     const[name,setName]=useState('React ')
//   return (
//     <child title={name} />
   
//   )
// }

import React,{useState} from "react";
import Child from "./task/child";



export default function Task() {
    const [name,setName] = useState("hello")
  return (
    <child title={name} />
  )
}




      

