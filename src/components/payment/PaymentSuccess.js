import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Head from '../home/Head'
import './paymentSuccess.css'

function PaymentSuccess() {

  const state  = useLocation();
  const [courseId, setCourse] = useState(state.state?.course_id);
  console.log(courseId);
  return (
    <div style={{minHeight:'100vh'}}>
        <Head/>
         <div class=" mt-5">
      <div className='success' >
        <i class="checkmark">✓</i>
      </div>
        <h1>Success</h1> 
        <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
        <Link to={`/mychapter/${courseId}/`} className='btn btn-outline-success btn-lg'>Go to Course</Link>
      </div>
    </div>
  )
}

export default PaymentSuccess