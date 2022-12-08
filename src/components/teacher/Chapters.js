import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAllCourseChapters ,removeChapter} from '../../teacher_axios/teacher_axios';
import TeacherSidebar from './TeacherSidebar'
import { imageFolder } from '../../BaseUrl';
import Theader from './Theader';


function Chapters() {
    const {course_id} =useParams()
    const [chapters, setChapters] = useState([]);
    const[courseName,setCourseName] = useState('')
    const [load,setLoad] =useState(false)

    useEffect(()=>{
        getAllCourseChapters(course_id).then((chapters)=>{
          setChapters(chapters)
          chapters.forEach((chapter)=>{
            console.log(chapter.title)
            console.log(imageFolder+chapter.video)
            setCourseName(chapter)
          })
        })

      },[load])

  return (
    <div style={{minHeight:'100vh'}}>
        <Theader/>
    <div className='container mt-4'>
    <div className='row'>
    <aside className='col-md-3'>
        <TeacherSidebar/>

    </aside>
    <section className='col-md-9 my-3'>
        <h2>Chapters</h2>

  
    <table class="table">
    <thead>
    {/* <h5 className='table-header '>My Courses</h5> */}
        <tr>
        <th scope="col">#</th>
        <th scope="col">Chapters</th>
        <th scope="col">video</th>
        
        <th scope="col">Action</th>
        <th scope="col"><Link to={`addchapter/${course_id}`} ><button className=" btn btn-outline-info ">Add Chapter</button></Link></th>
        </tr>
    </thead>
    <tbody>
    {chapters.map((chapter,index)=>{
                return(
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{chapter.title}</td>
                    <td>
                    {/* <p className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal1">intro</p>
                                                            {/* Video Modal
                                                                    <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                    <div className="modal-dialog modal-xl">
                                                                        <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h5 className="modal-title" id="exampleModalLabel">Video Title</h5>
                                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                        <div className="ratio ratio-16x9">
                                                                        
                                                                        <iframe class="embed-responsive-item" src={imageFolder+chapter.video} allowfullscreen></iframe>
                                                                        </div>
                                                                        </div>
                                                                        
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                            End Video Modal */}
                                                            <video controls width='100'>
                                                                <source src={imageFolder+chapter.video} type='video/webm' />
                                                                <source src={imageFolder+chapter.video} type='video/mp4'></source>

                                                            </video>
                    </td>
                    
                    <td><button onClick={()=>{removeChapter(chapter.id);setLoad(!load)}} className=" btn btn-outline-danger mx-1">Delete</button></td>
                    


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

export default Chapters