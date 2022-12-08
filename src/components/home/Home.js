import React, { useState,useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { imageFolder } from '../../BaseUrl';
import AuthContext from '../../context/AuthContext';
import { getAllLatestCourse, getAllRecomentedCourse } from '../../user_axios/user_axios';
import Carosel from './Carosel';
import Head from './Head';
import '../css/home.css'
function Home() {

  let {user} = useContext(AuthContext)
  const [latestCourses, setLatestCourses] = useState([]);
  const [recomtedCourses, setRecomented] = useState([]);


  useEffect(()=>{
    getAllLatestCourse().then((courses)=>{
      setLatestCourses(courses)
      console.log(latestCourses);
      courses.forEach((course)=>{
        console.log(course.title)
      })
    })
    getAllRecomentedCourse(user.user_id).then((courses)=>{
      setRecomented(courses)
      console.log(recomtedCourses);
      
    })




  },[])
  console.log(recomtedCourses);
  return (
    
    <div className="">
      <Head/>
      <div className="carosal_div">

      <Carosel/>
      </div>
      
      <div className="container">
        <h3 className="border-bottom pd-1 mt-5 h2">Latest Courses<Link to="/courses" className="float-end btn btn-dark" style={{fontSize:'15px'}} >See All</Link> </h3>
      <div className="row">
        { latestCourses &&
          latestCourses.map((course,index)=>{
            return (
              <div className=" col-12 col-md-6 col-lg-3 mt-4 p-3 g-2 border  " key={index}>
              <div className=" m-auto" style={{ width: "18rem" }}>
                <Link to={`/details/${course.id}`} style={{ margin:'auto'}}><img style={{ height: "200px",width: "100%",objectFit:'cover'}}src={imageFolder+course.feature_image}className="card-img-top" alt="..." />
                </Link>
                <div className="card-body" style={{textAlign:'left'}}>
                  <Link to={`/details/${course.id}`} style={{textDecoration:'none',fontSize:'25px',fontWeight:'bold',color:'black'}}  >{course.title}</Link>
                </div>
                <div className="card-footer">
                    {/* <div style={{textAlign:'left'}}>Rating : 4.5/5</div> */}
                    <div style={{textAlign:'left'}}>
                      creater: {course.teacher.full_name}</div>
                      {course.price === 0 ?
                      <div  style={{textAlign:'left'}}><p className='btn btn-warning'>Free</p></div>
                      :
                    <div style={{textAlign:'left'}} className='fw-bold'>₹{course.price}</div>
                  }
                  </div>
              </div>
            </div>

            

            )
          })
        }
      </div>
      <h3 className="border-bottom pd-1 mt-5 h2">Recomented Courses <Link to="/courses" className="float-end btn btn-dark" style={{fontSize:'15px'}} href="#">See All</Link></h3>
      <div className="row">
      { recomtedCourses &&
          recomtedCourses.map((course,index)=>{
            return (
        <div className=" col-12 col-md-6 col-lg-3 mt-4 p-3 g-2 border">
          <div className=" m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "100%",objectFit:'cover'}}src={imageFolder+course.feature_image} className="card-img-top" alt="..." />
            </a>
            <div className="card-body" style={{textAlign:'left'}}>
            <Link to={`/details/${course.id}`} style={{textDecoration:'none',fontSize:'25px',fontWeight:'bold',color:'black'}}  >{course.title}</Link>
              
            </div>
            <div className="card-footer">
                  <div style={{textAlign:'left'}}>Rating : 4.5/5</div>
                  
                  <div style={{textAlign:'left'}} className='fw-bold'>₹{course.price}</div>
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

export default Home