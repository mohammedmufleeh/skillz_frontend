import React, { useState,useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import { getAssigments, getAssigmentsAnswer, getEntrolledStudent } from '../../teacher_axios/teacher_axios';
import Theader from './Theader';
import TeacherSidebar from './TeacherSidebar';

function Assignments() {
    const {student_id,course_id} =useParams()
    const {teacher} = useContext(AuthContext)
    const teacher_id=teacher.teacher_id

    const [assigment, setAssignment] = useState([]);
    const [answer, setAnswer] = useState([]);
    
  
    useEffect(()=>{
      getAssigments(course_id,student_id).then((res)=>{
        setAssignment(res)

        assigment.forEach((res)=>{
           
          
        })
      })
     
  
  
  
  
    },[])
    console.log(assigment);
  

    
    console.log('uygj');  


    // console.log(students);
  return (
    <div style={{minHeight:'100vh'}}>
    <Theader/>
    <div className='container mt-4'>
    <div className='row'>
      <aside className='col-md-3'>
        <TeacherSidebar/>
    
      </aside>
      <section className='col-md-9 my-3'>
    
      
    
    <table class="table">
      <thead>
      {/* <h5 className='table-header '>My Courses</h5> */}
        <tr>
          <th scope="col">No</th>
          <th scope="col">title</th>
          <th scope="col">Add time</th>
          <th scope="col">Status</th>
          
        </tr>
      </thead>
      <tbody>
      {assigment.map((assigment,index)=>{
                   return(
                   <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{assigment.title}</td>
                    
                    <td>{assigment.add_time}</td>
                    <td >
                      {assigment.is_submitted === true ?
                       <p className='text-success'>Completed</p>:
                       <p className='text-danger'>Not Completed</p>
                    }
                     
                      </td>
                    
                   </tr>
                   )
           })}
       
        
      </tbody>
    </table>
        
      </section>
    
    </div>
    </div>
    </div>
  )
}

export default Assignments