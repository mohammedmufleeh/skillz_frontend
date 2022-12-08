import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ForumIcon from "@mui/icons-material/Forum";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Header.css'
function Head() {
  const {user,teacher,logOutUser,logOutTeacher,setSearch} = useContext(AuthContext)
  const navigate =useNavigate()

  const onSubmit=()=>{
    navigate('/courses')
  }
  console.log(user)
  return (

<div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-header">
        <div className="container">
          <Link to="/" className="navbar-brand center">
            
          Skillz
          </Link>
          {user ?
          <>
          <form onSubmit={onSubmit} className="d-flex col-md-6 ms-2">
            <input
            onChange={(e)=>{setSearch(e.target.value)}}
              className="form-control me-2"
              type="search"

              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 ms-auto mb-lg-1 d-flex">
            
            <li>
            <Link to="/courses" className="nav-link">Courses</Link>
            </li>
            <li>
            <Link to="/mylearnig" className="nav-link">My Courses</Link>
            </li>
              <li className="nav-item ms-3 ">
                <Link to="/user/dashboard" className="nav-link">
                  <Tooltip title="Dashboard">
                    <AccountCircleIcon />
                  </Tooltip>
                </Link>
              </li>

              {/* <li className="nav-item ms-3 ">
                <Link to="/messenger" className="nav-link">
                  <Tooltip title="Messager">
                    <ForumIcon />
                  </Tooltip>
                </Link>
              </li> */}
              {
                user && 
                <li className="nav-item ms-3">
                <Link to="/whishlist" className="nav-link">
                  <Tooltip title="wishlist">
                    <FavoriteIcon/>
                  </Tooltip>
                  
                </Link>
              </li>

              }
              
              <li className="nav-item ms-3 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  more
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/user/dashboard" className="dropdown-item">Dashboard</Link>
                  </li>
                  <li>
                    <p onClick={logOutUser} className="dropdown-item">Logout</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          </>:
          <div className="navbar-nav ms-auto">
          <Link className="nav-item nav-link " to='/user-login'>Login</Link>
          <Link className="nav-item nav-link " to='/user-register'>Sign Up</Link>
          <Link className="nav-item nav-link " to='/teacher/login'>Move To Teacher<ArrowRightIcon/></Link>
          </div>

}
        </div>
      </nav>
    </div>

  )
}

export default Head