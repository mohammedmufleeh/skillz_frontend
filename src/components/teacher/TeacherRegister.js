import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import BaseUrl from '../../BaseUrl';
import Theader from './Theader';

function TeacherRegister() {

  const baseUrl=BaseUrl+'teacher/'
  const [teacherData,setteacherData]=useState({
    'full_name':'',
    'email':'',
    'password':'',
    'qualification':'',
    'mobile_no':'',
    'skills':'',
    'status':'',

  });

  //states for form validation
  const [fullnameErr, setfullnameErr] = useState({})
  const [emailErr, setEmailErr] = useState({})
  const [mobileErr, setMobileErr] = useState({})
  const [passwordErr, setPasswordErr] = useState({})
  
  // console.log(fullnameErr);
  console.log(emailErr);
  console.log(fullnameErr);

  const handleChange =(event)=>{
    setteacherData({
        ...teacherData,
        [event.target.name]:event.target.value
    });
  }

  // console.log(teacherData);
  const submitForm =()=>{

    const isValid = formValidation()
    if (isValid){
    const teacherFormData = new FormData();
    teacherFormData.append("full_name", teacherData.full_name)
    teacherFormData.append("email", teacherData.email)
    teacherFormData.append("password", teacherData.password)
    teacherFormData.append("qualification", teacherData.qualification)
    teacherFormData.append("mobile_no", teacherData.mobile_no)
    teacherFormData.append("skills", teacherData.skills)
    console.log(teacherFormData)

    try{
      axios.post(baseUrl,teacherFormData).then((response)=>{
        setteacherData({
          'full_name':'',
          'email':'',
          'password':'',
          'qualification':'',
          'mobile_no':'',
          'skills':'',
          'status':'success',

        })
        console.log(response.data)
      })
    }catch(error){
      console.log(error);
      setteacherData({
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
    if (!teacherData.full_name){
      fullnameErr.short_fname = '*user name is a required field'
      isValid = false
    }else if(teacherData.full_name.trim().length <3){
      fullnameErr.short_fname = '*user name is too short'
      isValid = false
    }
    //email validation
    if (!teacherData.email){

      emailErr.short_email= '*email is a required field'
      isValid = false
    }
    //mobile validation
    if (!teacherData.mobile){
      mobileErr.short_mobile= '*mobile no. is a required field'
      isValid = false
    }else if(teacherData.mobile.trim().length != 10){
      mobileErr.short_mobile= '*enter a valid mobile no.'
      isValid = false
    }else if( /^[a-zA-Z()]+$/.test(teacherData.mobile)){
      mobileErr.short_mobile= '*enter a valid mobile no.'
      isValid = false
    }
    //password validation
    if(!teacherData.password ){
      passwordErr.short_password= '*password is a required field'
      isValid = false
    }else if(teacherData.password.length <8  ) {
      passwordErr.short_password= '*minimum 8 characters are required for password'
      isValid = false
    }
    setfullnameErr(fullnameErr)
    setEmailErr(emailErr)
    setMobileErr(mobileErr)
    setPasswordErr(passwordErr)

    return isValid

  }
  


  return (
    <div >
      <Theader/>
      
      <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="/images.jpeg"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          {teacherData.status == 'success' && <p className='text-success'>Thanks for Registration </p>}
          {teacherData.status == 'success' && <p className='text-success'>Please Wait for confirmation </p>}
          {teacherData.status == 'error' && <p className='text-danger'>Something wrong happened</p>}
        <h5>Teacher Register</h5> 
          {/* <!-- Email input --> */}
          <div class="form-outline mb-4 mt-3">
            <input type="text" id="form3Example3" class="form-control form-control-lg"
            onChange={handleChange}
            name='full_name'
              placeholder="Full Name" />
              {Object.keys(fullnameErr).map((key)=>{
                return <div style={{color:'red'}} >{fullnameErr[key]}</div>
              })}
            
          </div>

          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
            onChange={handleChange}
            name='email'
              placeholder="Enter a valid email address" />
              {Object.keys(emailErr).map((key)=>{
                return <div style={{color:'red'}} >{emailErr[key]}</div>
              })}
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
            onChange={handleChange}
            name='password'
              placeholder="Enter password" />
              
               {Object.keys(passwordErr).map((key)=>{
                return <div style={{color:'red'}} >{passwordErr[key]}</div>
              })}
            
          </div>

          <div class="form-outline mb-4">
            <input type="number" id="form3Example3" class="form-control form-control-lg"
            onChange={handleChange}
            name='mobile_no'
              placeholder="Mobile Number" />
               {Object.keys(mobileErr).map((key)=>{
                return <div style={{color:'red'}} >{mobileErr[key]}</div>
              })}
          </div>

          <div class="form-outline mb-4">
            <input type="text" id="form3Example3" class="form-control form-control-lg"
            onChange={handleChange}
            name='qualification'
              placeholder="Qualification" />
          </div>

          {/* <!-- Password input --> */}
          

          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
            onChange={handleChange}
            name='skills'
              placeholder="Skills" />
              <label>php,python,etc</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg btnl"
            onClick={submitForm}
              >Register</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to='/teacher/login'
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

export default TeacherRegister