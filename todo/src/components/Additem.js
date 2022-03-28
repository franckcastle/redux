import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {addItem} from '../actions/actions'


 
function AddItem() {
     const dispatch = useDispatch();

    const [name,setname]=useState("");
    const [age,setage]=useState("");
    const handlSubmit=(e)=>{
        e.preventDefault()
        dispatch(addItem({
            id:Math.random(),
            name:name,
            age:age
        }
        ));
       
    }
  return (

    <form onSubmit={handlSubmit}>
                    <input type="text" onChange={(e)=>setname(e.target.value)} />
                     <input type="number" onChange={(e)=>setage(e.target.value)} />  
                     <input type="submit" value="ajouter" />  
                     </form>
   
  )
}

export default  AddItem