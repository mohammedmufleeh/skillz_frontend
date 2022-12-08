import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function AdminHeader() {
    const {user,logOutUser,} = useContext(AuthContext)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className='container'>
  <a className="navbar-brand " href="#">Skillz</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  { user &&
  <div className="navbar-nav ms-auto">
    <button className="btn btn-secondary" onClick={logOutUser}>LogOut</button>
  </div>
  
     }
  </div>
  </div>
  
</nav>
<div className='my-1 bg-secondary
'>
    <h1 className='text-dark fst-italic h1'>Admin Panel</h1>
  </div>
 </div>
    
  )
}

export default AdminHeader