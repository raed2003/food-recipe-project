import { GETCURRENT } from "../Actiontype/Actiontype"
import { ALERTERROR, CLEARERROR } from "../Actiontype/Actiontypeerror"

const initialState = []

export const Reducererror= (state = initialState, { type, payload }) => {
  switch (type) {

  case ALERTERROR:
    return [...state,payload ]
    case CLEARERROR:
    return state.filter(e=>e.id!==payload)
   
       
  default:
    return state
  }
}
