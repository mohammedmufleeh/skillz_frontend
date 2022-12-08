import React, { useContext, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'
import Swal from 'sweetalert2'
import BaseUrl from '../../BaseUrl'
import axios from 'axios'
import Theader from './Theader'
import AuthContext from '../../context/AuthContext'

function AddAssignment() {

    const {teacher} =useContext(AuthContext)
    const teacher_id = teacher.teacher_id
    const navigate = useNavigate();
    const {course_id,student_id} = useParams()
    const [assignment,setAssignment]= useState({'course':`${course_id}`,'student':`${student_id}`,'teacher':`${teacher_id}`})

    const handleChange = ((event)=>{
        setAssignment({
            ...assignment,[event.target.name] :event.target.value
        })
    })

    const handleFileChange = ((event)=>{
        setAssignment({
            ...assignment,[event.target.name] : event.target.files[0]
        })
    })
    
   

    const handleSubmit = ((event)=>{
        event.preventDefault();
        const TeacherToken=JSON.parse(localStorage.getItem('teacherToken')).token
        console.log(TeacherToken)
      
        

        const form_Data = new FormData();
          
              
          
          form_Data.append('course',course_id);
          form_Data.append('student',student_id);
          form_Data.append('teacher',teacher_id);
          form_Data.append('title',assignment.title);
          form_Data.append('discription',assignment.detail);
          form_Data.append('file',assignment.file);  
          
         
        
           
          

        axios.post(BaseUrl+'add_assignment/',form_Data,
        { headers: {"Authorization" : `Bearer ${TeacherToken}`,
        'Content-Type': 'multipart/form-data' 
        } }).then((response)=>{
            console.log(response.data)
            console.log("assigment added successfully");
                        
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Assigment added successfully',
                showConfirmButton: false,
                timer: 2000
                })
                window.location.reload();
                navigate(-1)

        }).catch((error)=>{
            
            console.log(error.response.data)
        })
    })

  return (
    <div style={{minHeight:'100vh'}}>

    <Theader/>
    <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <TeacherSidebar/>

            </aside>
            <section className='col-md-9'>
                <div >
                    {/* <h5 className="">Add Course</h5> */}
                    <div className="card-body">
                        <form action="">
                        
                            <div className="mb-3">
                                <label for='title' className="form-labe">Title</label>
                                <input type="text"id='title' onChange={handleChange}  name='title' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for='file' className="form-label">Assignment File</label>
                                <input type="file"id='file' name="file" onChange={handleFileChange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for='detail' className="form-label">Description</label>
                                <textarea type="text" name='detail' onChange={handleChange} id='discription' className="form-control" ></textarea> 
                            </div>
                            
                           
                            <button type='sumbit' onClick={handleSubmit}  className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>
          
            </section>

         </div>
      
    </div>
    </div>
  )
}

export default AddAssignment