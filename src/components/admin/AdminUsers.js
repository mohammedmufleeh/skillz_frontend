import userEvent from '@testing-library/user-event'
import React, { useEffect,useState } from 'react'

import { blockUser,getAllusers } from '../../admin_axios/axios';

import AdminSidebar from './AdminSidebar'


function AdminUsers() {

    const[status,setStatus]=useState(true)
    const [users, setUsers] = useState([])
    const [loaded, setLoaded] = useState(true);

    useEffect(()=>{
        console.log('aaaaaa')
        getAllusers().then((data)=>{
            setUsers(data)
            console.log('hallo')
            console.log(status)
            console.log(status)
            data.map((user)=>{
                console.log(user.email)
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
                        <th>Courses Enrolled</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users && users.map((user, i) =>{
                        return(
                            <tr key={i}>
                            <th scope="row">{user.id}</th>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td></td>
                            <td>{user.is_active ? <p className="card btn btn-info disabled text-dark">Active</p>:<p className="card btn btn-warning disabled text-dark">InActive</p>}</td>
                            <td><p  className="text-decoration-none" >
                                                    {user.is_active ? 
                                                        <p onClick={()=>{blockUser(user.id);setStatus(!status)}} className='card btn btn-warning text-dark text-decoration-none'>Block</p>
                                                        :
                                                        <p onClick={()=>{blockUser(user.id);setStatus(!status);}} className='card btn btn-info text-dark text-decoration-none'>UnBlock</p>
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

export default AdminUsers
