import { ALERTERROR, CLEARERROR } from "../Actiontype/Actiontypeerror"

export const alerterror=(msg)=> async (dispatch)=>{
     const id=Math.random()
     dispatch({type:ALERTERROR,payload:{msg,id}})
     setTimeout(()=>{
        dispatch({type:CLEARERROR,payload:id}) 
     
    },5000)}
