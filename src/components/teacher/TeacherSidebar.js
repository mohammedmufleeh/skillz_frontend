import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/AuthContext'


function TeacherSidebar() {

   const {logOutTeacher}  = useContext(AuthContext)
  return (
    <div>
     




         <div className="list-group list-group-flush">
            <Link to='/teacher/dashboard' className="list-group-item list-group-item-action">Dashboard</Link>
            <Link to="/teacher/courses" className="list-group-item list-group-item-action">My Courses</Link>
            <Link to='/teacher/addcourse' className="list-group-item list-group-item-action">Add Course</Link>
            <Link to='/teacher/mystudent' className="list-group-item list-group-item-action">My Students</Link>
            {/* <Link to='/teacher/transaction' className="list-group-item list-group-item-action">Transaction</Link> */}
            {/* <Link to='/admin/category' className="list-group-item list-group-item-action">Category</Link> */}
            <p onClick={logOutTeacher} className="list-group-item list-group-item-action text-danger btn">Log Out</p>
            
        </div>


    </div>
  )
}

export default TeacherSidebar