import React from 'react'
import Head from '../home/Head'
import Sidebar from './Sidebar'

function ProfileSetting() {
  return (
    <div>
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
            <label for="staticEmail" className="col-sm-2 col-form-label">Full Name</label>
            <div className="col-sm-10 my-1">
            <input type="text" readonly className="form-control" id="staticEmail" value=""/>
            </div>
            </div>
            <div className="form-group row">
            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10 my-1">
            <input type="email" readonly className="form-control" id="staticEmail" value="email@example.com"/>
            </div>
            </div>
            <div className="form-group row">
            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
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

export default ProfileSetting