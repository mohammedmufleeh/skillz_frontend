import React, { useState } from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getAllAdminCarosel, getAllCommiton, getAllEntrollCourse } from '../../admin_axios/axios';
import { useEffect } from 'react';

function AdminDashboard() {

    const [course, setCourse] = useState([]);
    const [amount,setAmount] = useState('')

    useEffect(()=>{
        getAllEntrollCourse().then((course)=>{
            setCourse(course)
            
        })

        getAllCommiton().then((res)=>{
            setAmount(res)
            
        })
        

    },[])

    console.log(amount);
    
 const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'student', headerName: 'Student name', width: 130 },
    { field: 'course', headerName: 'Course name', width: 130 },
    { field: 'teacher', headerName: 'Teacher name', width: 130 },
    {
      field: 'order_amount',
      headerName: 'price',
      type: 'number',
      width: 130,
    },
    {
        field: 'admin_commition',
        headerName: 'Admin commition',
        type: 'number',
        width: 130,
      },
    
  ];
  
//   const rows = [
//     { id: 1, Student: 'Snow', Course: 'Jon',Teacher: 'Jon', price: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];
  
  return (
    <div style={{minHeight:'100vh'}}>
      <AdminHeader/>
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                <AdminSidebar/>

                </aside>
                <section className='col-md-9'>
                
                    <div class="row">

                       
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Admin Earnings</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{amount.admin_commision}</div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Total Earnings</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{amount.total_earned}
</div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                       
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                            </div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                </div>
                                                <div class="col">
                                                    <div class="progress progress-sm mr-2">
                                                        <div class="progress-bar bg-info" role="progressbar"
                                                            ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-warning shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                Pending Requests</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Content Row --> */}

<div class="row">

    {/* <!-- Area Chart --> */}
    <div class="col-xl-12 col-lg-7">
        <div class="card shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div
                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                
            </div>
            {/* <!-- Card Body --> */}
            <div class="card-body">
           


    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={course}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>


            </div>
        </div>
    </div>

    {/* <!-- Pie Chart --> */}
    
</div>

                </section>

        </div>
    </div>

    </div>
  )
}

export default AdminDashboard