import axios from "axios"
import { GETCURRENT, LOGIN, LOGOUT, REGISTER } from "../Actiontype/Actiontype"

import { alerterror } from "./Actionerror"
export const register =(data,navigate)=>async(dispatch)=>{
    try {
        await axios.post("/user/register",data).then(res=>
        dispatch({type:REGISTER,payload:res.data}))
        navigate("/search")
    } catch (error) {
        console.log(error)
      error.response.data.errors.forEach(element => {
        dispatch(alerterror(element.msg))
      });
    }
}
export const login =(data,Navigate)=>async(dispatch)=>{
    try {
        await axios.post("/user/login", data).then(res=>dispatch({type:LOGIN,payload:res.data}))
        Navigate("/search")
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(alerterror(element.msg))
          })
    }
}
export const getcurrent=()=>async(dispatch)=>{
    const config={
       headers:{token:localStorage.getItem("token")}
    }
    try {
        await axios.get("/user/getcurrent",config).then((res)=>dispatch({type:GETCURRENT,payload:res.data}))
    } catch (error) {
        console.log(error)
    }
}
export const logout=(navigate)=>{
    navigate("/login")
    return{type:LOGOUT}
}