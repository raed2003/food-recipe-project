import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/Action/Action';
import Alerterror from './Alerterror';
function Signup() {
  const dispatch =useDispatch()
  const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
      dispatch(login({
        email: data.get('email'),
        password: data.get('password'),
      },navigate))
      
  
  };
  return (
    <div id='login'>
    <div className="login-box" >
  <h2> Login</h2>
  <form>
    <div className="user-box">
      <input type="text" email="email" required="" />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" />
      <label>Password</label>
    </div>
    <a href="#" onClick={handleSubmit}>
      <span />
      <span />
      <span />
      <span />
      Submit
    </a>
  </form>
  <Alerterror/>
</div>
</div>
  )
}

export default Signup