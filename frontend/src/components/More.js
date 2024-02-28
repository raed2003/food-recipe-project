import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Moredetails from "./Moredetails"
import { useParams } from 'react-router-dom'
export const searchrecipe=async(search)=>{
  
  
    const res=  await axios.post(`https://api.edamam.com/search?q=${search}$&app_id=8a888ecb&app_key=5fba4a439eed4be8151d338d297e90ff`)
   

  return res.data.hits
}
function More() {
  const {search}=useParams()
  console.log(search)
    const[hits,setHits]=useState([])
    
   useEffect(async() => {
    setHits(await searchrecipe(search))
   }, [])
   console.log(hits)
  return (
    <div style={{position:"relative",width:"100%",height:'100vh'}}>
      <img style={{width:"100%",height:"100%",objectFit:"cover",position:"fixed",top:"0",left:"0",zIndex:"-1"}} src='https://images.pexels.com/photos/8715589/pexels-photo-8715589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <div >
       
  <div style={{position:"absolute",top:"0",display:'flex',flexWrap:'wrap',gap:"30px",justifyContent:"center"}}>
  {hits.map(e=><Moredetails recipe={e.recipe} search={search}/>)}
  
  </div>
    
    </div>
    </div>
  
  
  )
  } 
  
  export default More