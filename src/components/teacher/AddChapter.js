import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'
import Swal from 'sweetalert2'
import BaseUrl from '../../BaseUrl'
import axios from 'axios'
import Theader from './Theader'

function AddChapter() {

    const navigate = useNavigate();
    const {course_id} = useParams()
    const [chapter,setChapter]= useState({'course':`${course_id}`})

    const handleChange = ((event)=>{
        setChapter({
            ...chapter,[event.target.name] :event.target.value
        })
    })
    const handleFileChange = ((event)=>{
        setChapter({
            ...chapter,[event.target.name] : event.target.files[0]
        })
    
    })

    const handleSubmit = ((event)=>{
        event.preventDefault();
        const TeacherToken=JSON.parse(localStorage.getItem('teacherToken')).token
        console.log(TeacherToken)
        console.log(chapter)
        

        const form_Data = new FormData();
          
          form_Data.append('video',chapter.video);    
          
          form_Data.append('course',course_id);
          form_Data.append('title',chapter.title);
          form_Data.append('discription',chapter.discription);
          
          form_Data.append('used_techs',chapter.remark);
        
           
          console.log("========")

        axios.post(BaseUrl+'create_chapter/',form_Data,
        { headers: {"Authorization" : `Bearer ${TeacherToken}`,
        'Content-Type': 'multipart/form-data' 
        } }).then((response)=>{
            console.log(response.data)
            console.log("Chapter added successfully");
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Chapter added successfully',
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
                                <label for='description' className="form-label">Description</label>
                                <textarea type="text" name='discription' onChange={handleChange} id='discription' className="form-control" ></textarea> 
                            </div>
                            <div className="mb-3">
                                <label for='video' className="form-label">Featured image</label>
                                <input type="file"id='video' name="video" onChange={handleFileChange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for='techs' className="form-label">Remark</label>
                                <textarea   name="remark" onChange={handleChange} className="form-control"></textarea>  
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

export default AddChapter