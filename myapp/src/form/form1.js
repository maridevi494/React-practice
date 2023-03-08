import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name,setName] = useState('');
  const [description,setDescription]=useState(' ')
  const [complete, setComplete]=useState(' ')
  const [priority, setPriority]=useState(' ')
  const [allDetails,changeAllDetails]=useState([])
  const [forms, setForms] = useState([]);

  const handleInputValues=(inputValue) =>{
    if(inputValue.target.name==="name"){
      setName(inputValue.target.value)
    }
    else if(inputValue.target.name==="description"){
      setDescription(inputValue.target.value)
    }
    else if(inputValue.target.name==="priority"){
      setPriority(inputValue.target.checked)
    }
    else if(inputValue.target.name==="complete"){
      setComplete(inputValue.target.checked)
    }
  }

  const handleAllDetails = (details) => {
    details.preventDefault();

    var object={
      name:name,
      description:description,
      priority:priority,
      complete:complete
    }
    var array=allDetails;
    array.push(object)

    changeAllDetails(array)

    setName('');
    setDescription('');
    setPriority(false);
    setComplete(false);
    details.target[2].checked=false;
    details.target[3].checked=false;
    
  }

  

  return (
    <form onSubmit={(e) => {handleAllDetails(e);}}>
      <h2>Task name</h2>
      <input
        value={name}
        onChange={(e) => handleInputValues(e)} type={"text"}  name="name"/>
      <br/>
      <h2>Description</h2>
      <input 
        
        onChange={(e) => handleInputValues(e)} type={"text"} value={description} name="description" />
      <br/>
      <input type="checkbox"
         onChange={(e) => handleInputValues(e)} value={priority} name="priority" />
      
            
      priority<br/>
      <input type="checkbox"
         onChange={(e) => handleInputValues(e)} value={complete} />
      completed<br/>

      
      <button onClick={() => {
        // setName('');
        // setDescription('');
        // setComplete('');
        // setPriority('');
        
        // e.preventDefault();

        forms.push({
          id: nextId++,
          name: name,
          description:description,
          complete:complete
        });
      }}>Add</button>
      <ul>
        {forms.map(result => (
          <li key={result.id}>
            <p>{result.name}</p>
            <p>{result.description}</p>
            
            <p>Priority: {priority.checked ?  (<input type="checkbox" name="priority" checked/>) : ( <input type="checkbox" name="priority"/>)}</p>
          <p>Complete: {complete.checked ? (<input type="checkbox" name="complete" checked/>): (<input type="checkbox" name="complete"/>)}</p>
          </li>
          
         
        ))}
      </ul> 
      
    </form>
    
  );
}
