import React from 'react'
import Head from '../home/Head'
import Sidebar from './Sidebar'

function ChangePassword() {
  return (
    <div style={{minHeight:'100vh'}}>
      <Head/>
    
    <div className='container mt-4'>
      <div className='row'>
        <aside className='col-md-3'>
          <Sidebar/>

        </aside>
        <section className='col-md-9 my-3'>
        <div className="">
        <div className="card-body">
       
           
            <div className="form-group row">
            <label for="inputPassword" className="col-sm-2 col-form-label">New Password</label>
            <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
            </div>
            </div>
            
            <button className='btn btn-primary my-1'>Update</button>
        </div>
        </div>
        </section>

      </div>
    </div>
    </div>



  )
}

export default ChangePassword