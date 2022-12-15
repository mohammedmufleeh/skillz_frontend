import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BaseUrl from '../../BaseUrl'
import AuthContext from '../../context/AuthContext'
import Head from '../home/Head'
import './Login.css'

function Sregister() {
  
  const {setTeacherMobile} = useContext(AuthContext)
  const navigate =useNavigate()
  const [emailError,setEmailError]=useState('')
  const [mobileError,setMobileError]=useState('')
  const [userDetails,setUserDetails] = useState(
    {
    'email':'',
    'username':'',
    'password':'',
    'mobile':'',
    'interests':'',
    'status':'',}
  );

  //states for form validation
  const [usernameErr, setusernameErr] = useState({})
  const [emailErr, setEmailErr] = useState({})
  const [mobileErr, setMobileErr] = useState({})
  const [passwordErr, setPasswordErr] = useState({})

  console.log(usernameErr);

  const handleChange = (event)=>{
    setUserDetails({
        ...userDetails,[event.target.name] :event.target.value
    })
    
  }

  // console.log(teacherData);
  const submitForm =()=>{
    console.log(userDetails);
    const isValid = formValidation()

    if (isValid){
    const Form_Data = new FormData();
    Form_Data.append("email", userDetails.email)
    Form_Data.append("username", userDetails.username)
    Form_Data.append("mobile", userDetails.mobile)
    Form_Data.append("password", userDetails.password)
    Form_Data.append("interests", userDetails.interests)
   
    try{
      axios.post(BaseUrl+'user/register/',{"email": userDetails.email,"username": userDetails.username,"mobile": userDetails.mobile,"password": userDetails.password,"interests" :userDetails.interests}).then((response)=>{
        setUserDetails({
          'uername':'',
          'email':'',
          'password':'',
          'mobile':'',
          'interests':'',
          'status':'success',

        })
        console.log(response.data)
        console.log(response.data.mobile);
        setTeacherMobile(response.data.mobile)
        navigate('/user/otp')
        
      }
      ).catch((error) => {
        console.log(error);

        console.log(error.response.data);
        setEmailError(error.response.data.email);
        setMobileError(error.response.data.mobile);
        
        
      });
    }catch(error){
      console.log(error);
      
      setUserDetails({
        'status':'error'
      })
    }
  };
}
  
   //validation of form from frontend
   const formValidation=()=>{    
    
    const usernameErr={}
    const emailErr={}
    const mobileErr={}
    const passwordErr={}
    let isValid = true

    //firstname validation
    if (!userDetails.username){
      usernameErr.short_fname = '*user name is a required field'
      isValid = false
    }else if(userDetails.username.trim().length <3){
      usernameErr.short_fname = '*user name is too short'
      isValid = false
    }
    //email validation
    if (!userDetails.email){

      emailErr.short_email= '*email is a required field'
      isValid = false
    }
    //mobile validation
    if (!userDetails.mobile){
      mobileErr.short_mobile= '*mobile no. is a required field'
      isValid = false
    }else if(userDetails.mobile.trim().length != 10){
      mobileErr.short_mobile= '*enter a valid mobile no.'
      isValid = false
    }else if( /^[a-zA-Z()]+$/.test(userDetails.mobile)){
      mobileErr.short_mobile= '*enter a valid mobile no.'
      isValid = false
    }
    //password validation
    if(!userDetails.password ){
      passwordErr.short_password= '*password is a required field'
      isValid = false
    }else if(userDetails.password.length <8  ) {
      passwordErr.short_password= '*minimum 8 characters are required for password'
      isValid = false
    }
    setusernameErr(usernameErr)
    setEmailErr(emailErr)
    setMobileErr(mobileErr)
    setPasswordErr(passwordErr)

    return isValid
  }

  return (
    <div>
      <Head/>
      <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="/images.jpeg"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form >
        <h5>User Register</h5>
      
          {/* <!-- Email input --> */}
          <div class="form-outline mb-4 mt-3">
            <input type="text" id="form3Example3" class="form-control form-control-lg"
              placeholder="Full Name"
              name='username'
              onChange={handleChange}/>
              {Object.keys(usernameErr).map((key)=>{
                return <div style={{color:'red'}} >{usernameErr[key]}</div>
              })}
            
          </div>

          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" 
              name='email'
              onChange={handleChange}
              />
               {Object.keys(emailErr).map((key)=>{
                return <div style={{color:'red'}} >{emailErr[key]}</div>
              })}
          </div>

          <div class="form-outline mb-4">
            <input type="number" id="form3Example3" class="form-control form-control-lg"
              placeholder="Mobile Number"
              name='mobile'
              onChange={handleChange}
             />
              {Object.keys(mobileErr).map((key)=>{
                return <div style={{color:'red'}} >{mobileErr[key]}</div>
              })}
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-3">
            <input type="password" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter password"
              name='password'
              onChange={handleChange}
               />
               {Object.keys(passwordErr).map((key)=>{
                return <div style={{color:'red'}} >{passwordErr[key]}</div>
              })}
            
          </div>

          <div class="form-outline mb-4">
            <input type="text" id="form3Example3" class="form-control form-control-lg"
              placeholder="Interests"
              name='interests'
              onChange={handleChange}
               />
              <label>php,python,etc</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div class="form-check mb-0">
            {mobileError && <p className='text-danger'>{mobileError}</p>}
            {emailError && <p className='text-danger'>{emailError}</p>}
            </div>
            
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg btnl"
              onClick={submitForm}>Register</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to='/login'
                class="link-danger">Login</Link></p>
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

export default Sregister