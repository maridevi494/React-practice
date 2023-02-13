import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './Header/Header';
import {About} from './About/about'
import { Footer } from './Footer/footer';
import {Content} from './Content/content';
import Form from './form/form';

import Task from './task/task';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Main(){
  return(
    <div className='container'>
       <Header/>
      <About/>
      <Content />
      <Footer /> 
       {/* <Task />  */}
      {/* /* <Form />  */}
    </div>
  )
}

root.render(<Main />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
