import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import BaseUrl from '../../BaseUrl';
import AuthContext from '../../context/AuthContext';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';


function AddCarosel() {

    const {user} = useContext(AuthContext)
    
    const [carosel, setCarosel] = useState({});


    useEffect(()=>{
       

    },[])

    const handleChange = ((event)=>{
        setCarosel({
            ...carosel,[event.target.name] :event.target.value
        })
    })
   
    const handleFileChange = ((event)=>{
        setCarosel({
            ...carosel,[event.target.name] : event.target.files[0]
        })
    
    })

    const handleSubmit = ((event)=>{
        event.preventDefault();
        const UserToken=JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        
       

        const form_Data = new FormData();
          
          form_Data.append('title',carosel.title);
          form_Data.append('image',carosel.image);   

        axios.post(BaseUrl+'addcarosel/',form_Data, { headers: {"Authorization" : `Bearer ${UserToken}`,
        'Content-Type': 'multipart/form-data' 
        } }
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
                                <label for='file' className="form-label">Carosel File</label>
                                <input type="file"id='image' name="image" onChange={handleFileChange} className="form-control" />
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

export default AddCarosel