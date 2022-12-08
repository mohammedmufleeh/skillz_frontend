import React from 'react'
import {Link} from 'react-router-dom'
import Sidebar from './Sidebar'

function RecomendedCourses() {
  return (
    

<div className='container mt-4' style={{minHeight:'100vh'}} >
<div className='row'>
  <aside className='col-md-3'>
    <Sidebar/>

  </aside>
  <section className='col-md-9 my-3'>

  <table class="table">
  <thead>
  {/* <h5 className='table-header '>Recomended Courses</h5> */}
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Created By</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Python</td>
      <td>john</td>
      <td><button className=" btn btn-outline-danger ">Delete</button></td>
    </tr>
    
  </tbody>
</table>
    
  </section>

</div>
</div>
  )
}

export default RecomendedCourses