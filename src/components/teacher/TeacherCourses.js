import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/AuthContext';
import { getAllTeacherCourses } from '../../teacher_axios/teacher_axios';
import { imageFolder } from '../../BaseUrl';

import TeacherSidebar from './TeacherSidebar'
import Theader from './Theader';
import Pagination from '../Pagination';


function TeacherCourses() {
  const {teacher} = useContext(AuthContext)

  const [courses, setCourses] = useState([]);
  const [active, setActive] = useState(null)
 
  const [currentPage,setCurrentPage] =useState(1);
  const [postsPerPage,setPostPerPage] = useState(5)


  useEffect(()=>{
    getAllTeacherCourses(teacher.teacher_id).then((courses)=>{
      setCourses(courses)
      courses.forEach((course)=>{
        console.log(course.title)
        
      })
    })




  },[])

    const lastPostIndex  = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex- postsPerPage
    const currentPosts = courses.slice(firstPostIndex,lastPostIndex)
  return (
    <div style={{minHeight:'100vh'}}>
<Theader/>
<div className='container mt-4'>
<div className='row'>
  <aside className='col-md-3'>
    <TeacherSidebar/>

  </aside>
  <section className='col-md-9 my-3'>

  

<table class="table" style={{minHeight:'70vh'}}>
  <thead>
  {/* <h5 className='table-header '>My Courses</h5> */}
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {currentPosts.map((course,index)=>{
               return(
               <tr key={index} onClick={() => setActive(course)}
               className={`table-${active == course && 'active'}`}  >
                <th scope="row">{index+1}</th>
                <td>{course.title}</td>
                
                <td><img src={imageFolder+course.feature_image} width='80' className='rounded' /></td>
                <td><Link to={`chapters/${course.id}`} ><button className=" btn btn-outline-info ">Chapters</button></Link><button className=" btn btn-outline-danger mx-1">Delete</button></td>
                


               </tr>
               )
       })}
   
   
  </tbody>
  
</table>

  </section>
  <Pagination totalPosts={courses.length} 
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage = {currentPage}

        />

</div>
</div>

</div>
  )
}

export default TeacherCourses