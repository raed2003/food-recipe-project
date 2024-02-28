import { GETCURRENT, LOGIN, LOGOUT, REGISTER } from "../Actiontype/Actiontype"

const initialState = {user:{}}

export const userreducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case REGISTER:
    localStorage.setItem("token", payload.token)
    return { ...state,user:payload.newuser} 
  case LOGIN:
  localStorage.setItem("token", payload.token)
  return { ...state,user:payload.user}
  case GETCURRENT:
    return{...state,user:payload.user}
  case LOGOUT:
    localStorage.removeItem("token")
    return{...state,user:{}}
  default:
    return state
  }
}
