import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllAdminCarosel, getAllAdminCategories, removeCarosel, removeCategory } from '../../admin_axios/axios';
import Carosel from '../home/Carosel';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar'

function AdminCarosel() {

    const [carosel, setCarosel] = useState([]);
    const [load,setLoad] = useState(false)

    useEffect(()=>{
        

        getAllAdminCarosel().then((carosel)=>{
            setCarosel(carosel)
            
        })
        

    },[load])


  return (
    <div style={{minHeight:'100vh'}}>
        <AdminHeader/>

        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                <AdminSidebar/>

                </aside>
                <section className='col-md-9'>

                <table class="table">
                    <thead>
                    {/* <h5 className='table-header '>Recomended Courses</h5> */}
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">status</th>
                       
                        <th scope="col">Action</th>
                        <th scope="col"><Link to='addcarosel/' ><button className=" btn btn-outline-info ">Add Carosel</button></Link></th>
                        </tr>
                    </thead>
                    <tbody>
                    {carosel.map((carosel,index)=>{
                                        return(
                                            <tr key={index}>
                                            <th scope="row">{index}</th>
                                            <td>{carosel.title}</td>
                                            <td>{carosel.is_active ?
                                            <p>active</p>:
                                            <p>not active</p>}</td>
                                            
                                            <td><button className=" btn btn-outline-danger " onClick={()=>{removeCarosel(carosel.id);setLoad(!load)}}>Delete</button></td>
                                            </tr>)
                                            
                                        
                                    })}
                        
                    </tbody>
                </table>
                

                </section>

        </div>
    </div>

    </div>
  )
}

export default AdminCarosel