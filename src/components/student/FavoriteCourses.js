import React from 'react'
import {Link} from 'react-router-dom'
import Head from '../home/Head'
import Sidebar from './Sidebar'

function FavoriteCourses() {
  return (
    
<div style={{minHeight:'100vh'}}>
  <Head/>

<div className='container mt-4'>
<div className='row'>
  <aside className='col-md-3'>
    <Sidebar/>

  </aside>
  <section className='col-md-9 my-3'>
  {/* <h5 className='table-header '>Favorite Courses</h5> */}
  <table class="table">
  <thead>
  
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
</div>
  )
}

export default FavoriteCourses