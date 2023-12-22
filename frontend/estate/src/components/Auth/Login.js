import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MetaData from '../Layout/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, login } from '../../actions/userActions';
import { toast } from 'react-toastify';

const Login = () => {

const [formData,setForm]=useState({
    email:"",
    password:""
})

const { loading, error, isAuthenticated } = useSelector(state => state.authState)
const dispatch=useDispatch();
const navigate=useNavigate();

const handleChange=(e)=>{
const {name,value}=e.target;
setForm((previousstate)=>({...previousstate,[name]:value}))
}

const handleSumbit=(e)=>{
e.preventDefault();
dispatch(login(formData.email,formData.password))
}

useEffect(() => {
  if(isAuthenticated) {
      navigate('/')
  }

  if(error)  {
      toast(error, {
          position: toast.POSITION.BOTTOM_CENTER,
          type: 'error',
          onOpen: ()=> { dispatch(clearAuthError) }
      })
      return
  }
},[error, isAuthenticated, dispatch, navigate])


  return (
<Fragment>
  <MetaData title={'Login Page'}/>
         <form className="Rform" onSubmit={handleSumbit}>
          <h2 className="text-center">Login Form</h2>
        <div className="col-auto form-group">
          <input type="text" placeholder="email or email" name='email' value={formData.email} onChange={handleChange} className="form-control mt-2" />
        </div>
        <div className="col-auto form-group">
          <input type="password" placeholder="Enter your Password" name='password' value={formData.password} onChange={handleChange}  className="form-control mt-2" />
        </div>
        <div className="col-auto form-group text-center mt-4">
        <Link to={'/forgot'} className="links">ForgotPassword</Link>

        <button 
        type="submit" className="btn btn-primary"
        disabled={loading}
        >Submit</button>
        </div>
        <Link to={'/register'} className="links">Register page</Link>

      </form>
      </Fragment> 
  
  )
}

export default Login;