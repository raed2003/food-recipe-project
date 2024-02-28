import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../redux/Action/Action'
import Alerterror from './Alerterror'

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  console.log(email, password)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = () => {

    dispatch(register({ email, password }, navigate))
  };

  return (
    <div className='register'>


      <div style={{ backgroundColor: "#141e30" }} className="login-box">
        <h2>Register</h2>
        <>
          <div className="user-box">
            <input onChange={(e) => setEmail(e.target.value)} type="text" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input onChange={(e) => setPassword(e.target.value)} type="password" />
            <label>Password</label>
          </div>
          <button href="#" onClick={handleSubmit}>

            Submit
          </button>
        </>
        <Alerterror/>
      </div>
    </div>
  )
}

export default Register