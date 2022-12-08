import React, { useState,useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';

import { getUserAssigments } from '../../user_axios/user_axios';
import Head from '../home/Head';

import Sidebar from './Sidebar';


function UserAssignment() {
    const {user} = useContext(AuthContext)

    const [assigment, setAssignment] = useState([]);
    
  
    useEffect(()=>{
      getUserAssigments(user.user_id).then((res)=>{
        setAssignment(res)
        assigment.forEach((res)=>{
           
          
        })
      })
  
  
  
  
    },[])
    // console.log(entrollStudent);
  

    
    console.log('uygj');  


    // console.log(students);
  return (
    <div style={{minHeight:'100vh'}}>
    <Head/>
    <div className='container mt-4'>
    <div className='row'>
      <aside className='col-md-3'>
        <Sidebar/>
    
      </aside>
      <section className='col-md-9 my-3'>
    
      
    
    <table class="table">
      <thead>
      {/* <h5 className='table-header '>My Courses</h5> */}
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Course</th>
          <th scope="col">Entrolled Course</th>
          <th scope="col">Assignments</th>
        </tr>
      </thead>
      <tbody>
      {assigment.map((assigment,index)=>{
                   return(
                   <tr key={index}>
                    <th scope="row">{index}</th>
                    <th >{assigment.title}</th>
                    <td>{assigment.course.title}</td>
                    
                    {/* <td>{entroll.student.email}</td>
                    <td>{entroll.course.title}</td>
                     */}
                    
    
    
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

export default UserAssignment