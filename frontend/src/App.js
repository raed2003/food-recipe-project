import './App.css';
import Signup from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import More from './components/More';
import Diet from './components/Diet';
import Register from './components/Register';
import Navbar1 from './components/Navbar';
import { useState } from 'react';



function App() {
  const[hits,setHits]=useState([])
  const[search,setSearch]=useState("")
  return (

    <div className="App" >
      <Navbar1 setHits={setHits} search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/login' element={< Signup/>} />
        <Route path='/' element={<Register/>} />
        <Route path='/search'element={<Search hits={hits} search={search}/>} />
        <Route path='/search/details/:search'element={<More/>}/>
        <Route path='/diet' element={<Diet/>} />
      </Routes>
   
    
    
    </div>
  );
}

export default App;
