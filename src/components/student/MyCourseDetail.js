
import Head from '../home/Head'
import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import { getEntrolledCourse } from '../../user_axios/user_axios'
import { imageFolder } from '../../BaseUrl'


function MyCourseDetail() {

    const {user}=useContext(AuthContext)
  

    const [entrollCourse, setEntrollCourse] = useState([]);
      
    
    useEffect(()=>{
      getEntrolledCourse(user.user_id).then((course)=>{
        setEntrollCourse(course)
        
      })
  
  
  
  
    },[])
    console.log(entrollCourse);
    
    console.log(user.user_id);

  return (
    <div style={{minHeight:'100vh'}}>
        <Head/>
        
        <div className="container my-5">
            
        <h3 className="border-bottom pd-1 mt-5 h2">My Courses</h3>
      <div className="row">
        { entrollCourse &&
          entrollCourse.map((course,index)=>{
            return (
              <div className=" col-12 col-md-6 col-lg-3 mt-4 mx-1">
              <div className="card m-auto bg-light " style={{ width: "18rem" }}>
                <Link to={`/mychapter/${course.course.id}`} style={{ margin:'auto'}}><img style={{ height: "200px",width: "100%",objectFit:'cover'}}src={imageFolder+course.course.feature_image}className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <Link to={`/mychapter/${course.course.id}`} style={{textDecoration:'none',fontSize:'25px',fontWeight:'bold',color:'black'}}  className="card-title">{course.course.title}</Link>
                </div>
                
              </div>
            </div>

            )
          })
          
         
        }
        
      </div>
     
      

        </div>
    
    </div>
  )
}

export default MyCourseDetail