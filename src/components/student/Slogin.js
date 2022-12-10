import React, { useContext, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import './Login.css'
import AuthContext from '../../context/AuthContext'
import axios from 'axios'
import BaseUrl from '../../BaseUrl'
import Head from '../home/Head'

function Slogin() {

  const location = useLocation()
  console.log(location.state);


  let {loginUser,user,error,verify} = useContext(AuthContext)
  console.log(error);
  const [userDetails, setUserDetails] = useState({email:'',password:''});

  const [resError,setResError] =useState('')

  const handleChanges=((event)=>{
    setUserDetails({
      ...userDetails,[event.target.name] : event.target.value
    })
  })

  const handleSubmit =(event)=>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post(BaseUrl+'token/',userDetails).then((response) => {
      loginUser(userDetails,response)
      console.log(response.data.detail);
     
    }).catch((error) => {
      console.log(error.response.data.detail);
      setResError('incorrect email or password ');
      
      
    });

  }
  console.log('mufli');
  console.log(error);
  return (
    <div>
  <Head/>
<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://main.d1qye2yc6hthn1.amplifyapp.com/images.jpeg"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        {location.data && <div class="alert alert-primary" role="alert">
  Verification success..pls Login
</div>}
        <form onSubmit={handleSubmit}>
            <h5>User Login</h5>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
          
            
          </div>

          <div class="divider d-flex align-items-center my-4">
            
          </div>

          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input type="email"
            name='email' id="form3Example3" class="form-control form-control-lg"
            onChange={handleChanges}
            value={userDetails.email}
              placeholder="Enter a valid email address" />
            
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
           onChange={handleChanges}
           value={userDetails.password}
           name='password'
              placeholder="Enter password" />
           
          </div>

          <div class="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div class="form-check mb-0">
              
            {resError && <p className='text-danger'>{resError}</p>}
            </div>
            {/* <a href="#!" class="text-body">Forgot password?</a> */}
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit"  class="btn btn-primary btn-lg btnl "
              >Login</button>
              {error && <p className='text-dark'>{error}</p>}
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to='/user-register'
                class="link-danger">Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 ">
    {/* <!-- Copyright --> */}
   
    {/* <!-- Copyright --> */}

    {/* <!-- Right --> */}
    <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
    {/* <!-- Right --> */}
  </div>
</section>
      
    </div>
  )
}

export default Slogin