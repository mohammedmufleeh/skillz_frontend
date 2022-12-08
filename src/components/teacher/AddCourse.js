import React, { useContext, useEffect, useState } from 'react'
import TeacherSidebar from './TeacherSidebar'
import { getAllCategories } from '../../teacher_axios/teacher_axios'
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import BaseUrl from '../../BaseUrl';
import Swal from 'sweetalert2';
import Theader from './Theader';


function AddCourse() {
    const {teacher} = useContext(AuthContext)
    const [categories, setCategories] = useState([]);
    const [courseDetails, setCourseDetails] = useState({'teacher':`${teacher.teacher_id}`
    });


    useEffect(()=>{
        console.log(teacher)

        getAllCategories().then((categories)=>{
            setCategories(categories)
            categories.forEach((category)=>{
                console.log(category.title);
            })
        })
        

    },[])

    const handleChange = ((event)=>{
        setCourseDetails({
            ...courseDetails,[event.target.name] :event.target.value
        })
    })
    const handleFileChange = ((event)=>{
        setCourseDetails({
            ...courseDetails,[event.target.name] : event.target.files[0]
        })
    
    })

    const handleSubmit = ((event)=>{
        event.preventDefault();
        const TeacherToken=JSON.parse(localStorage.getItem('teacherToken')).token
        console.log(TeacherToken)
        console.log(courseDetails)
        console.log(teacher)

        const form_Data = new FormData();
          
          form_Data.append('feature_image',courseDetails.feature_image,);    
          form_Data.append('category',courseDetails.category);
          form_Data.append('teacher',teacher.teacher_id);
          form_Data.append('title',courseDetails.title);
          form_Data.append('discription',courseDetails.discription);
          
          form_Data.append('used_techs',courseDetails.used_techs);
        
          console.log(courseDetails)  
          console.log("========")

        axios.post(BaseUrl+'create_course/',form_Data,
        { headers: {"Authorization" : `Bearer ${TeacherToken}`,
        'Content-Type': 'multipart/form-data' 
        } }).then((response)=>{
            console.log(response.data)
            console.log("Course added successfully");
                        
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Course added successfully',
                showConfirmButton: false,
                timer: 2000
                })
                window.location.reload();

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
                                <label for='title' className="form-labe">Category</label>
                                <select name="category" onChange={handleChange} className='form-control'>
                                    <option value="">--Please choose an option--</option>
                                    {categories.map((category,index)=>{
                                        return(<option key={index} value={category.id}>{category.title}</option>)
                                    })}
                                </select>
                                   
                            </div>
                            <div className="mb-3">
                                <label for='title' className="form-labe">Title</label>
                                <input type="text"id='title' onChange={handleChange} name='title' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for='description' className="form-label">Description</label>
                                <textarea type="text" onChange={handleChange} name='discription' id='discription' className="form-control" ></textarea> 
                            </div>
                            <div className="mb-3">
                                <label for='video' className="form-label">Featured image</label>
                                <input type="file"id='video' onChange={handleFileChange} name="feature_image" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for='techs' className="form-label">Technologies</label>
                                <textarea placeholder='php,python,javascripts' onChange={handleChange} name="used_techs" className="form-control"></textarea>  
                            </div>
                            <button type='sumbit' onClick={handleSubmit} className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>
          
            </section>

         </div>
      
    </div>
    </div>
  )
}

export default AddCourse