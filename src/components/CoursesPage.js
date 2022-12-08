
import Head from './home/Head'
import React, { useState,useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { imageFolder } from '../BaseUrl';
import AuthContext from '../context/AuthContext';

import { getAllLatestCourse} from '../user_axios/user_axios';
import './CoursePage.css'
import Pagination from './Pagination';


function CoursesPage() {
    

    
    let {user,search} = useContext(AuthContext)
    // const s=search
    const [course,setCourse] =useState([]);

    const [currentPage,setCurrentPage] =useState(1);
    const [postsPerPage,setPostPerPage] = useState(4)
    
  // const [latestCourses, setLatestCourses] = useState([]);
  const [filterCourse,setFilterCourse] = useState([]);
  console.log(filterCourse);
  console.log(course);


  useEffect(()=>{
    getAllLatestCourse().then((courses)=>{
      setCourse(courses)
      // setLatestCourses(courses)
     
      
      
      // console.log(latestCourses);
      // courses.forEach((course)=>{
      //   console.log(course.title)
      // })
    })
    let filter = course.filter((value)=>{
      return value.title.toLowerCase().includes(search.toLowerCase());
    })
    setFilterCourse(filter)
    console.log(filter,'sddddd');




  },[search])
  console.log(search);

  const lastPostIndex  = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex- postsPerPage
  const currentPosts = course.slice(firstPostIndex,lastPostIndex)


  return (
    <div style={{minHeight:'100vh'}}>
        <Head />
      <section class="new-product-area section-padding30">
            <div class="container my-5">
                {/* <!-- Section tittle --> */}
                <div class="row">
                    <div class="col-xl-12">
                        <div class="section-tittle mb-70">
                            <h2>All Courses</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                { filterCourse.length > 0 ?
          

filterCourse.map((course,index)=>{
  return (
    <div className=" col-12 col-md-6 col-lg-3 mt-4 p-3 g-2 border " key={index}>
    <div className=" m-auto" style={{ width: "18rem" }}>
      <Link to={`/details/${course.id}`} style={{ margin:'auto'}}><img style={{ height: "200px",width: "100%",objectFit:'cover'}}src={imageFolder+course.feature_image}className="card-img-top" alt="..." />
      </Link>
      <div className="card-body" style={{textAlign:'left'}}>
        <Link to={`/details/${course.id}`} style={{textDecoration:'none',fontSize:'25px',fontWeight:'bold',color:'black'}}  >{course.title}</Link>
      </div>
      <div className="card-footer">
      <div style={{textAlign:'left'}}>
                      creater: {course.teacher.full_name}</div>
      {course.price === 0 ?
                      <div  style={{textAlign:'left'}}><p className='btn btn-warning'>Free</p></div>
                      :
                    <div style={{textAlign:'left'}}>${course.price}</div>
                  }
        </div>
    </div>
  </div>
            

            )
          })
          :
          currentPosts.map((course,index)=>{
            return (
              <div className=" col-12 col-md-6 col-lg-3 mt-4  " key={index}>
              <div className=" m-auto" style={{ width: "18rem" }}>
                <Link to={`/details/${course.id}`} style={{ margin:'auto'}}><img style={{ height: "200px",width: "100%",objectFit:'cover'}}src={imageFolder+course.feature_image}className="card-img-top" alt="..." />
                </Link>
                <div className="card-body" style={{textAlign:'left'}}>
                  <Link to={`/details/${course.id}`} style={{textDecoration:'none',fontSize:'25px',fontWeight:'bold',color:'black'}}  >{course.title}</Link>
                </div>
                <div className="card-footer">
                <div style={{textAlign:'left'}}>
                      creater: {course.teacher.full_name}</div>
                     {course.price === 0 ?
                      <div  style={{textAlign:'left'}}><p className='btn btn-warning'>Free</p></div>
                      :
                    <div style={{textAlign:'left'}}>${course.price}</div>
                  }
                  </div>
              </div>
            </div>

            

            )
          })

        }
                
                   
                </div>
            </div>
        </section>
        <Pagination totalPosts={course.length} 
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage = {currentPage}

        />
    </div>
  )
}

export default CoursesPage