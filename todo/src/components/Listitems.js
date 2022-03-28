import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeItem } from '../actions/actions';


function ListItems() {
  

    const itemstate = useSelector(state => state.items);
    const dispatch = useDispatch();

    const handldelete=(id)=>{
        dispatch(removeItem(id));
    }
   



    const list=itemstate.length?(itemstate.map(el=>{ 
      return (
        <div key={el.id}>
        <h3>{el.name}</h3>
        <h3>{el.age}</h3>
        <button onClick={()=>handldelete(el.id)}>delete</button>
        </div>
        )
    })):(<h1>no data</h1>)

  return (

    <div>
    {list}
    </div>
    
  )
}


export default  ListItems