import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import { getEntrolledCourse,removeEntrollCourse } from '../../user_axios/user_axios'
import Head from '../home/Head'
import Sidebar from './Sidebar'

function MyCourses() {

  const {user}=useContext(AuthContext)
  
  const [load,setLoad] = useState(false)
  const [entrollCourse, setEntrollCourse] = useState([]);
    
  
  useEffect(()=>{
    getEntrolledCourse(user.user_id).then((course)=>{
      setEntrollCourse(course)
      
    })




  },[load])
  
  console.log(entrollCourse);
  console.log(user.user_id);
  console.log(load);
  return (

<div style={{minHeight:'100vh'}}>
  <Head/>

<div className='container mt-4'>
<div className='row'>
  <aside className='col-md-3'>
    <Sidebar/>

  </aside>
  <section className='col-md-9 my-3'>

  {/* <div>
        <div className='card'>
            <h5 className='card-header'>My Courses</h5>
            <div className='card-body '>
              <table className='table table-borderless'>
                <thead className='thead-dark'>
                  <th>Name</th>
                  <th>Created By</th>
                  <th>Action</th>
                </thead>
                <tbody className=''>
                  <td>php Development</td>
                  <td><Link to='/'>Suraj Kumar</Link></td>
                  <td>
                    <button className=" btn btn-outline-danger ">Delete</button>
                  </td>
                </tbody>
                  
              </table> 

            </div>
          </div>
    </div> */}

<table class="table">
  <thead>
  {/* <h5 className='table-header '>My Courses</h5> */}
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Created By</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {entrollCourse.map((entroll,index)=>{
                   return(
    <tr key={index}>
      <th scope="row">{entroll.id}</th>
      <td>{entroll.course.title}</td>
      <td>{entroll.course.teacher.email}</td>
      <td><button onClick={()=>{removeEntrollCourse(entroll.id);setLoad(!load)}} className=" btn btn-outline-danger ">Delete</button></td>
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

export default MyCourses