import React from 'react'
import { Link } from 'react-router-dom'

import {Routes as Switch,Route } from 'react-router-dom'
import Head from '../home/Head'
import Sidebar from './Sidebar'

function Sdashbord() {
  return (
    <div style={{minHeight:'100vh'}}>
      <Head/>
    <div className='container mt-4'>
      <div className='row'>
        <aside className='col-md-3'>
          <Sidebar/>

        </aside>
        {/* <section className='col-md-9'>
          <div className="row">
            <div className="col-md-4">
              <div className="card border-primary">
                <h5 className="card-header bg-success text-white">Total Courses</h5>
                <div className="card-body">
                  <h3><Link to='/teacher/courses'>10</Link></h3>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-primary">
                <h5 className="card-header bg-success text-white">Total Students</h5>
                <div className="card-body">
                  <h3><Link to='/teacher/mystudent'>1</Link></h3>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-primary">
                <h5 className="card-header bg-success text-white">Total Chapters</h5>
                <div className="card-body">
                  <h3><Link to='/teacher/courses'>1</Link></h3>
                </div>

              </div>
            </div>
          </div>
          
        </section> */}

      </div>
    </div>
    </div>

  )
}

export default Sdashbord