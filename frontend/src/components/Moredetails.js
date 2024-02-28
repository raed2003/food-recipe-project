import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Moredetails({ recipe }) {

  return (
    <div>
 <Card style={{ width: '30rem', marginBottom: "50px",backgroundColor: "#F8F8FF",opacity:".8" }}>

<Card.Body>
<img src={recipe.image} alt={recipe.label} />
    <li>{recipe?.dietLabels}</li>
    <li>{recipe?.healthLabels}</li> 
   
   
    
</Card.Body>
</Card>
    </div>
  )
}

export default Moredetails