import React, {useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "./slice";

import Header from "./header";
const Home = () => {
  
  const[taskName,setTaskName]=useState('');
  const[description,setdescription]=useState('');
  const[priority,setPriority]=useState(false);
  const[complete,setCompleteted]=useState(false);
  // var [remove, setRemove]=useState([""]);
  //var [filter,setFilter]=useState([...tasks])
  const dispatch=useDispatch();
  const state =useSelector(({sample}) => sample)
  console.log(state);

  const handleSubmit =(e) =>{
    e.preventDefault();
    var task=[];
    
    task=[...state.products,{taskName,description,priority,complete}]

    
    dispatch(addToCart(task))
    
    setTaskName('')
    setdescription('')
    setCompleteted(false)
    setPriority(false)

    //  setTask([...tasks, newTask]);

    //         elmt.target.name.value = "";
    //         elmt.target.description.value = "";
    //         elmt.target.isPriority.checked = false;
    //         elmt.target.isComplete.checked = false;
    //     };

        
    
  }

    return (
        <div className='container'>
          <Header/>
    <div className='background'>
    <h1>Form</h1>
    <form onSubmit={handleSubmit}>
    <label className='clr' >Task Name : </label><br/>
    <input type="text" value={taskName} name="name" className='box' onChange={(e) => setTaskName (e.target.value)}/> <br />
    <label className='clr'>Description : </label><br/>
    <input type="text" name="description" value={description} className='box' onChange={(e) => setdescription (e.target.value)}/><br />
    <input type="checkbox" name="isPriority" checked={priority}  onChange={(e) => setPriority (e.target.checked)}/><span className='clr'/>Is Priority<br />
    <input type="checkbox" name="isComplete" checked={complete} onChange={(e) => setCompleteted (e.target.checked)}/><span className='clr' />Is Completed<br/>
    
    <input type="submit" value="Add Task" className='button' />
    </form>
    </div>
    </div>
    )

  };
  
  export default Home;