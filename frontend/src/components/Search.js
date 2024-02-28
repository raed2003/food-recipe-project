import axios from 'axios'
import React, { useState } from 'react'
import RecipeDetails from './Recipedetails'
import { Card } from 'react-bootstrap'


function Search({hits,search}) {
  
   
  return (
    <div style={{position:"relative",width:"100%",height:'100vh'}}>
      <img style={{width:"100%",height:"100%",objectFit:"cover",position:"fixed",top:"0",left:"0",zIndex:"-1"}} src='https://images.pexels.com/photos/8715589/pexels-photo-8715589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <div >
      <Card style={{width:"100%",backgroundColor:"white"}}> <p style={{color:'black',fontSize:"30px",textAlign:'center',width:"100%"}}>ARE YOU BORED OF YOUR TYPICAL FOOD.WE PRESENT A SOLUTION FOR YOU IN THIS WEBSITE YOU CAN SEARCH FOR NEW RECEPIES TO MAKE WITH FULL DESCRIPTION AND CALORIES INTAKE AND A BMI CALCULATOR</p> </Card>
<div style={{position:"absolute",top:"45%",display:'flex',flexWrap:'wrap',gap:"30px",justifyContent:"center"}}>
{hits.map(e=><RecipeDetails recipe={e.recipe} search={search}/>)}

</div>
    
    </div>
    </div>

 
  )
}


export default Search

