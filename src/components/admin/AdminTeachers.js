import userEvent from '@testing-library/user-event'
import React, { useEffect,useState } from 'react'
import { verifyTeacher,getAllteachers } from '../../admin_axios/axios'

import AdminSidebar from './AdminSidebar'


function AdminTeachers() {

    const[status,setStatus]=useState(true)
    const [teachers, setTeachers] = useState([])
    const [loaded, setLoaded] = useState(true);

    useEffect(()=>{
        console.log('aaaaaa')
        getAllteachers().then((data)=>{

            setTeachers(data)
            console.log(data)
            console.log(status)
            console.log(status)
            data.map((user)=>{
                console.log(teachers.email)
            })
        })
    },[status])
  return (
    <div>
        <thead/>
        
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                <AdminSidebar/>

                </aside>
                <section className='col-md-9'>
                <table class="table">
                    <thead>
                    
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th>Qualification</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {teachers && teachers.map((teacher, i) =>{
                        return(
                            <tr key={i}>
                            <th scope="row">{teacher.id}</th>
                            
                            <td>{teacher.full_name}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.qualification}</td>
                            <td>{teacher.is_active ? <p className="card btn btn-info disabled text-dark">Active</p>:<p className="card btn btn-warning disabled text-dark">InActive</p>}</td>
                            <td><p  className="text-decoration-none" >
                                                    {teacher.is_active ? 
                                                        <p onClick={()=>{verifyTeacher(teacher.id);setStatus(!status)}} className='card btn btn-warning text-dark text-decoration-none'>InActive</p>
                                                        :
                                                        <p onClick={()=>{verifyTeacher(teacher.id);setStatus(!status);}} className='card btn btn-info text-dark text-decoration-none'>Active</p>
                                                    }
                                                    
                                                </p></td>
                            </tr>
                        );
                    })}
                       
                        
                    </tbody>
                    </table>
                
                </section>

            </div>
        </div>
        
    </div>
  )
}

export default AdminTeachers
