import React ,{useState}from 'react'
import { useDispatch } from 'react-redux'
import {searchItem} from '../actions/actions'

function Search() {

const [searchname,setsearchname]= useState("");

const dispatch = useDispatch();

const handlSearch=(e)=>{
    setsearchname(e.target.value);
    dispatch(searchItem(searchname.toLocaleLowerCase()))

}

  return (
    <div>
    search :<input type="text" onChange={handlSearch} />{searchname}

</div>
  )
}

export default Search