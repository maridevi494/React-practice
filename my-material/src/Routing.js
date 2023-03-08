import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Myrocket from "./Myrockets";



const Routing = () => {
  return (
   <BrowserRouter>
        <Routes>
    <Route path='/myrockets' element={<Myrocket/>}></Route>
         </Routes>
   </BrowserRouter>
  )
}

export default Routing