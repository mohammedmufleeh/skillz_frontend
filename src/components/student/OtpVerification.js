import axios from 'axios';
import React, { useState } from 'react'
import { useContext } from 'react';
import BaseUrl from '../../BaseUrl';
import AuthContext from '../../context/AuthContext';

function OtpVerification() {

    
    const {verifyUser,teacherMobile} =useContext(AuthContext)
    const [otpDetails, setOtpDetails] = useState({mobile:`${teacherMobile}`,code:''});
    const [error,setError]=useState('')
    
    const handleChanges=((event)=>{
        setOtpDetails({
          ...otpDetails,[event.target.name] : event.target.value
        })
      })

      const handleSubmit =(event)=>{
        console.log(otpDetails)
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    
        axios.post(BaseUrl+'user/verify/',otpDetails).then((response) => {
          verifyUser(otpDetails,response)
          
          
         
        }).catch((error) => {
          console.log(error.response.data.detail);
          setError(error.response.data.detail);
          
          
        });
    
    
      }
    
console.log(teacherMobile);

  return (
    <div style={{minHeight:'100vh'}}>
      <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" >
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Mobile Phone Verification</h2>
              <p className="text-white-50 mb-5">Please enter your Mobile Number </p>
                <form onSubmit={handleSubmit}>
              {/* <div className="form-outline form-white mb-4">
                <input type="number" name='mobile' onChange={handleChanges} value={otpDetails.mobile} placeholder='Mobile Number'  className="form-control form-control-lg" />
                
              </div> */}

              <div className="form-outline form-white mb-4">
                <input type="text" name='code' onChange={handleChanges} value={otpDetails.code}  id="typePasswordX" placeholder='Otp' className="form-control form-control-lg" />
                
              </div>
              <button className="btn btn-outline-light btn-lg px-5"  type="submit">Verify</button>
              {error && <p className='text-danger'>{error}</p>}

              
              </form>
            </div>
            

            <div>
              <p className="mb-0">Didn't get the code? <a href="#!" className="text-white-50 fw-bold">Resent</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default OtpVerification