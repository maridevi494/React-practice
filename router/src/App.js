
import React,{useReducer} from "react";
import Header from './header/header';
import Home from './home/home'
import Content from './Content'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./add details/addtask";
import { initialState, setReducder } from "./Reducer";
import { stateContext } from "./context/context";
import Headertop from "./Headertop";


export default function App() {
  const [state,dispatch]=useReducer(setReducder,initialState)
  return (
    <stateContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <><Headertop/>
    <Routes>
        <Route>
          <Route path="/home" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/cotent" element={<Content />} />
          <Route path="/" element={<Login/>}/>
          <Route path="*" element={<h1>page not found!!</h1>}/>
        </Route>
      </Routes>
</>
      
    </BrowserRouter>
    </stateContext.Provider>

   
  );
}
