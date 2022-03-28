
import { ADDITEM, REMOVEITEM, SEARCH} from '../actions/types'

const initstate={
    items:[
        {id:1,name:"wajdi",age:45},
        {id:2,name:"ibrahim",age:45},
        {id:3,name:"zied",age:45}]
 
    }

export const rootReducer=(state=initstate,action)=>{

switch(action.type){
    case REMOVEITEM:
        return {
            items:state.items.filter(el=>el.id!==action.payload)
             }
case ADDITEM:
    return {
      items:  [...state.items,action.payload]

    }
    case SEARCH:
        return {
            items:state.items.filter(el=>el.name.includes(action.payload))

        }
       
    default : return state
}

}

    
   
