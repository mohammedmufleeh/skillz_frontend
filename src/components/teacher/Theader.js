import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Theader() {
    const {user,teacher,logOutUser,logOutTeacher} = useContext(AuthContext)
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className='container'>
  <a className="navbar-brand " href="#">Skillz</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  { teacher ?
  <div className="navbar-nav ms-auto">
    <button className="btn btn-secondary" onClick={logOutTeacher}>LogOut</button>
  </div>
  :
    <div className="navbar-nav ms-auto">
      
      
      <Link className="nav-item nav-link" to='/teacher/login'>Login</Link>
     <Link className="nav-item nav-link" to='/teacher/register'>Sign Up</Link>
     <Link className="nav-item nav-link" to='/user-login'>Move To Student<ArrowRightIcon/></Link>
  
    </div>
     }
  </div>
  </div>
  
</nav>
<div className='my-1 
'>
    <h1 className='text-dark fst-italic h1'>Teacher Panel</h1>
  </div>
 </div>
    
  )
}

export default Theader