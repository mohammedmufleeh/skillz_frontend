// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useContext } from 'react'
// import { Link } from 'react-router-dom'

// import {Routes as Switch,Route } from 'react-router-dom'
// import BaseUrl from '../../BaseUrl'
// import AuthContext from '../../context/AuthContext'
// import Theader from './Theader'

// import TeacherSidebar from './TeacherSidebar'

// function TeacherDashboard() {
//   const {teacher} = useContext(AuthContext)
//   const [dashboard,setDashboard]=useState([]);
//   useEffect(()=>{
//     try{
//       const TeacherToken = JSON.parse(localStorage.getItem('teacherToken')).token
//       axios.get(BaseUrl+'teacher_dashboard/'+teacher.teacher_id+'/',{
//         headers:{"Authorization" : `Bearer ${TeacherToken}`}
//     }).then((res)=>{
//         console.log(res);
//         setDashboard(res.data)
        
        

//       });
//     }catch(error){
//       console.log(error)
//     }
//   },[])
//   console.log(dashboard);
//   return (
//     <div>
//       <Theader/>
//     <div className='container mt-4'>
//       <div className='row'>
//         <aside className='col-md-3'>
//           <TeacherSidebar/>

//         </aside>
//         <section className='col-md-9'>
//           <div className="row">
//             <div className="col-md-4">
//               <div className="card border-primary">
//                 <h5 className="card-header bg-success text-white">Total Courses</h5>
//                 <div className="card-body">
//                   <h3><Link to='/teacher/courses'>{dashboard.total_courses}</Link></h3>
//                 </div>

//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card border-primary">
//                 <h5 className="card-header bg-success text-white">Total Students</h5>
//                 <div className="card-body">
//                   <h3><Link to='/teacher/mystudent'>{dashboard.total_students}</Link></h3>
//                 </div>

//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card border-primary">
//                 <h5 className="card-header bg-success text-white">Total Amount</h5>
//                 <div className="card-body">
//                   <p>total amount</p>
                  

//                 </div>

//               </div>
//             </div>
            
//           </div>
          

          
//         </section>

//       </div>
//     </div>
//     <div>
      
//     </div>
//     </div>

//   )
// }

// export default TeacherDashboard


import React, { useContext, useEffect, useState } from 'react'


import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import TeacherSidebar from './TeacherSidebar';
import Theader from './Theader';
import AuthContext from '../../context/AuthContext';
import { getAllTeacherEntrollCourse, getTeacherCommition } from '../../teacher_axios/teacher_axios';
import axios from 'axios';
import BaseUrl from '../../BaseUrl';
import { Link, useAsyncError } from 'react-router-dom';

function TeacherDashboard() {
    
    const {teacher} =useContext(AuthContext)
    const [course, setCourse] = useState([]);
    const [dashboard,setDashboard]=useState([]);
    const [amount,setAmount] =useState('');

    useEffect(()=>{
        getAllTeacherEntrollCourse(teacher.teacher_id).then((course)=>{
            setCourse(course)
            
        })
        getTeacherCommition(teacher.teacher_id).then((res)=>{
            setAmount(res)
            
        })

        try{
                   const TeacherToken = JSON.parse(localStorage.getItem('teacherToken')).token
                   axios.get(BaseUrl+'teacher_dashboard/'+teacher.teacher_id+'/',{
                     headers:{"Authorization" : `Bearer ${TeacherToken}`}
                 }).then((res)=>{
                    console.log(res);
                   setDashboard(res.data)
                    
                    
            
                  });
                 }catch(error){
                 console.log(error)
                 }
        

    },[])
    
 const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'student', headerName: 'Student name', width: 130 },
    { field: 'course', headerName: 'Course name', width: 130 },
    
    {
      field: 'order_amount',
      headerName: 'price',
      type: 'number',
      width: 90,
    },
    {
        field: 'admin_commition',
        headerName: 'Admin commition',
        type: 'number',
        width: 130,
      },
    
  ];
  
  
  
  return (
    <div style={{minHeight:'100vh'}}>
      <Theader/>
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                <TeacherSidebar/>

                </aside>
                <section className='col-md-9'>
                
                    <div class="row">

                       
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Total Earnings </div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{amount.total_earned}</div>
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
                                                Admin Earnings </div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{amount.admin_commision}</div>
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
                                            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Total Courses
                                            </div>
                                            
                                            <div class="row no-gutters align-items-center">
                                                
                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800"><Link to='/teacher/courses'>{dashboard.total_courses}</Link></div>
                                                
                                                
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
                                                Total Students</div>
                                                
                                            <div class="h5 mb-0 font-weight-bold text-gray-800"><Link to='/teacher/mystudent'>{dashboard.total_students}</Link></div>
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

export default TeacherDashboard