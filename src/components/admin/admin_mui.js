
// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import AdminSidebar from './AdminSidebar';



// function AdminUsers() {

//     const columns = [
//         { field: 'id', headerName: 'ID', width: 70 },
//         { field: 'firstName', headerName: 'First name', width: 130 },
//         { field: 'lastName', headerName: 'Last name', width: 130 },
//         {
//           field: 'age',
//           headerName: 'Age',
//           type: 'number',
//           width: 90,
//         },
//         {
//           field: 'fullName',
//           headerName: 'Full name',
//           description: 'This column has a value getter and is not sortable.',
//           sortable: false,
//           width: 160,
//           valueGetter: (params) =>
//             `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//         },
//       ];
      
//       const rows = [
//         {users && users.map((user, i)=>{
//             return(
//                 { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 }
//             );
//         })}
       
       
//       ];

//   return (
//     <div>
        
//         <div className='container mt-4'>
//             <div className='row'>
//                 <aside className='col-md-3'>
//                 <AdminSidebar/>

//                 </aside>
//                 <section className='col-md-9'>
                    
//                     <div style={{ height: 400, width: '100%' }}>
//                 <DataGrid
//                     rows={rows}
//                     columns={columns}
//                     pageSize={10}
//                     rowsPerPageOptions={[5]}
//                     // checkboxSelection
//                 />
//                      </div>
                

//                 </section>

//         </div>
//     </div>

//     </div>
//   )
// }

// export default AdminUsers
