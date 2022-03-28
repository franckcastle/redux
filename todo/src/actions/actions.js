import { ADDITEM,REMOVEITEM, SEARCH} from "./types"


export const removeItem=(id)=>{

     return {type:REMOVEITEM,
        payload:id} 
   
    }


export const addItem=(item)=>{
    return {
        type:ADDITEM,
        payload:item
    }
}
export const searchItem=(searchitem)=>{
    return {
        type:SEARCH,
        payload:searchitem
    }
}

