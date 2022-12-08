import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import BaseUrl from '../../BaseUrl';
import AuthContext from '../../context/AuthContext';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';


function AddCategory() {

    const {user} = useContext(AuthContext)
    
    const [courseCategory, setCourseCategory] = useState({});


    useEffect(()=>{
       

    },[])

    const handleChange = ((event)=>{
        setCourseCategory({
            ...courseCategory,[event.target.name] :event.target.value
        })
    })
   

    const handleSubmit = ((event)=>{
        event.preventDefault();
        const UserToken=JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        console.log(courseCategory)
       

        const form_Data = new FormData();
          
          form_Data.append('title',courseCategory.title);
          form_Data.append('description',courseCategory.discription);
          
         
        
          console.log(courseCategory)  
          console.log("========")

        axios.post(BaseUrl+'admin/addcategory/',form_Data,{
            headers:{"Authorization" : `Bearer ${UserToken}`}
        }
        ).then((response)=>{
            console.log(response.data)
            console.log("Category added successfully");
                        
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Course added successfully',
                showConfirmButton: false,
                timer: 2000
                })
               

        }).catch((error)=>{
            
            console.log(error.response.data)
        })
    })


  return (
    <div style={{minHeight:'100vh'}}>
        <AdminHeader/>
    <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <AdminSidebar/>

            </aside>
            <section className='col-md-9'>
                <div >
                    {/* <h5 className="">Add Course</h5> */}
                    <div className="card-body">
                        <form action="">
                        
                            <div className="mb-3">
                                <label for='title' className="form-labe">Title</label>
                                <input type="text"id='title' onChange={handleChange} name='title' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for='description' className="form-label">Description</label>
                                <textarea type="text" onChange={handleChange} name='description' id='discription' className="form-control" ></textarea> 
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

export default AddCategory