import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import './student.css'

function CourseSlidebar() {
    const {courseId} =useContext(AuthContext)
  return (
    <div classNameName='' style={{backgroundColor:'#6c757d'}}>
         <h1></h1>
        <nav className="navbar navbar-expand-lg  ">
           
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse container" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
      <Link to={`/mychapter/${courseId}/`} className="nav-link  fw-bold h3" aria-current="page" >Chapter</Link>
      <Link to={`/myassingment/${courseId}/`} className="nav-link  fw-bold h3" aria-current="page" >Assignments</Link>
      <Link to={`/mycirtificate/${courseId}/`} className="nav-link  fw-bold" aria-current="page" >Certificate</Link> 
        
       
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default CourseSlidebar