import React from "react";

import {BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from './home'
import Header from "./header";
import Content from './add'
import { Redux } from "./redux";
import Login from "./login";
import { Provider } from "react-redux";

const Routed =() =>{
    // const state= useSelector(({sample}) => sample) ;
    return (
    
        <BrowserRouter>
    
        <Routes>
            <Route>
              <Route path="/home" element={<Home />} />
              <Route path="/header" element={<Header />} />
              <Route path="/content" element={<Content />} />
               <Route path="/" element={<Login/>}/> 
              <Route path="*" element={<Navigate to={'/'}/>}/>
            </Route>
          </Routes>
     </BrowserRouter>
    )
}





 function App() {
//   const [state,dispatch]=useReducer(setReducder,initialState)
console.log("hi");

  return (
    <div>
      i am rendered
      <Provider store={Redux}>
        <Routed/>
      </Provider>
    </div>
    

   
  );
}

export default App
