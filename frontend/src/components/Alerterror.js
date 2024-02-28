import React from 'react'
import { useSelector } from 'react-redux'
function Alerterror() {
    const errors=useSelector(state=>state.Reducererror)
    console.log(errors)
  return (
    <div>
{errors.map(e=><div>
    <span style={{color:"red"}}>{e.msg} </span>
</div>)}
    </div>
  )
}

export default Alerterror