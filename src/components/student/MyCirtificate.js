import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import BaseUrl, { imageFolder } from '../../BaseUrl';
import AuthContext from '../../context/AuthContext';
import { completeStatus, genereteCirtificate, getEntrolledCourse, getUserAssigments, postCompleteAssigmentStatus } from '../../user_axios/user_axios';
import Head from '../home/Head';
import CourseSlidebar from './CourseSlidebar';
import Swal from 'sweetalert2'

function MyCirtificate() {
    const {user,setCourseId} = useContext(AuthContext)
    let {course_id} = useParams()
    let user_id =user.user_id

    const [cirtificate,setCirtificate] = useState('');
    const [status,setStatus] =useState('')
    const [count,setCount] =useState('')
  
    useEffect(()=>{



      genereteCirtificate(user_id,course_id).then((cirtificate)=>{
        setCirtificate(cirtificate.path)
        
      })

      completeStatus(user_id,course_id).then((res)=>{
        console.log(res);
        setStatus(res.bool)
        setCount(res.assigmets)
        
      })

      const items = JSON.parse(localStorage.getItem('cource',course_id));
        if (items) {
        setCourseId(items);
        }
      
        
  
  
  
  
    },[])
    console.log(cirtificate);
    console.log(status);
  return (
    <div style={{minHeight:'100vh'}}>
        <Head/>
        <CourseSlidebar/>
        <section className='col-md-9 my-3 container'>
    
      
    
    <table className="table">
      <thead>
      {/* <h5 classNameName='table-header '>My Courses</h5> */}
        <tr>
          
          <th scope="col">title</th>
          
          <th scope="col">status</th>
          
          
        </tr>
      </thead>
      <tbody>
      
                   <tr >
                    <th >certificate</th>
                    
                    <td>
                      {status && count >0 ? 

                      <p>Open a PDF file <a href={'http://15.206.93.94'+cirtificate} target='_blank' rel='noopener noreferrer'>Open</a></p>
                        :
                        <p className='text-danger'>You are Not completed</p>
                    }
                      </td>
                    
                    
                    
                   
                    
                    {/* <td>{entroll.course.title}</td> */}
                     
                    
    
    
                   </tr>
                
      </tbody>
    </table>
    
        
      </section>

    </div>
  )
}

export default MyCirtificate