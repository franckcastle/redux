import React from 'react'
import './App.css';
import AddItem from './components/AddItem';
import ListItems from './components/ListItems';
import Search from './components/Search';



function App() {

  return (

    <div className="App">

<Search />
    <ListItems />
    <AddItem />
   
    
  
    
    </div>
  );
}



export default App;
