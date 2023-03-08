import React, { useContext,useEffect,useState } from 'react'
import { stateContext } from './context/context'
import Header from './header/header'



const Content = () => {
    const {state,dispatch} = useContext(stateContext)
    
    const[priorityfill,setPriorityFil]=useState(false);
    const[completeFill,setCompleteFil]=useState(false);
    const [filter,setFilter]=useState([...state.products])
    console.log('filter',priorityfill,completeFill)
    var [remove, setRemove]=useState([""]);

    useEffect(()=>{
        setFilter(state.products)
    },[state.products])

    useEffect(()=>{
        applayFilter();
    },[priorityfill,completeFill])
    
    const applayFilter = () =>{
        var filterValue;
        if(priorityfill===true && completeFill==true){
            filterValue=[...state.products].filter((value)=>{
                return value.priority===true && value.complete===true
            })

            setFilter(filterValue)
        }
        else if(priorityfill===true && completeFill==false){
            filterValue=[...state.products].filter((value)=>{
                return value.priority===true
            })

            setFilter(filterValue)
        }
        else if(priorityfill===false && completeFill==true){
            filterValue=[...state.products].filter((value)=>{
                return value.complete===true
            })

            setFilter(filterValue)
        }
        else{
            setFilter([...state.products])
        }
    }

    const handleDelete=(index)=>{
        remove=[...state.products]
        state.products.splice(index,1);
        setRemove(remove);
    }

    const updateValues = (event,index) =>{
        if(event.target.name==='isPriority'){
            dispatch({type:'priority',payload:{index,value:event.target.checked}})
        }
        else{
            dispatch({type:'complete',payload:{index,value:event.target.checked}})
        }
    }
    
  return (
    <div>
        <Header/>
        <form>
                <input type={'checkbox'} name="priority" checked={priorityfill} onChange={(element) => setPriorityFil(element.target.checked)} /> IsPriority<br/>
                <input type={'checkbox'} name="complete" checked={completeFill} onChange={(element) => setCompleteFil(element.target.checked)} /> IsComplete<br/>
            </form>
        
           
            <h1>Task</h1>
            
                <div>
                    {filter.map((value,index) =>{
                        return(
                            <div key={index}>
                                <p><h2>{value.taskName} </h2></p>
                                <p><h2>{value.description}</h2></p>
                                <p>priority :<input type="checkbox" name="isPriority"  onChange={(event)=>updateValues(event,index)} checked={value.priority}/></p>
                                <p>complete :<input type="checkbox" name="iscompleted" onChange={(event)=>updateValues(event,index)} checked={value.complete}/></p>                       
                                <button onClick={()=>handleDelete(index)} className="btn">Delete</button>
                            </div>
                        );
                    })
                    }
                </div>
    </div>
  )}

           

export default Content