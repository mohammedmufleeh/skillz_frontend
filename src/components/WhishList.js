import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import BaseUrl, { imageFolder } from '../BaseUrl'
import AuthContext from '../context/AuthContext'
import { getFavoriteCourses } from '../user_axios/user_axios'
import Head from './home/Head'

function WhishList() {
    let {user} = useContext(AuthContext)
    const user_id=user.user_id

  
    const [courses,setCourses] = useState([]);
    const [load,setLoad] =useState(false)

    const removeFavorite = (course_id) => {


      try {
        axios.delete(BaseUrl + 'remove_favorite/' + user_id + '/' + course_id).then((res) => {
          if (res.status === 200 || res.status === 201) {
            Swal.fire({
              position: 'top-right',
              icon: 'success',
              title: 'This course has been removed from your wish list',
              showConfirmButton: false,
              timer: 2000,
              toast: true,
              timerProgressBar: true
  
  
            });
           
          }
        })
      } catch (error) {
        console.log(error);
  
      }
  
    }

    useEffect(()=>{
        getFavoriteCourses(user.user_id).then((course)=>{
          setCourses(course)
          
        })

      },[load])

  return (
    <div style={{minHeight:'100vh'}}>
        <Head/>
      <div className='container mt-4'>
<div className='row'>
  
  <section className='col-md-12 my-3'>

  
<h3 className='fst-italic'>My Wishlist</h3>
{ courses !==0 ?
<table class="table">
  <thead>
  {/* <h5 className='table-header '>My Courses</h5> */}
    <tr>
     
      <th scope="col">course</th>
      <th scope="col">image</th>
      <th scope="col">price</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
    
  { courses.map((fav,index)=>{
               return(
               <tr key={index}>
                
                <td>{fav.course.title}</td>
                
                
                <td><img src={imageFolder+fav.course.feature_image} width='80' className='rounded' /></td>
                <td>{fav.course.price}</td>
                <td><Link onClick={()=>{removeFavorite(fav.course.id);setLoad(!load)}}  ><button className=" btn btn-outline-warning ">Remove</button></Link></td>
                


               </tr>
               )
       })
       }
   
    
  </tbody>
</table>
:
<h2 className='my-5'>Your Wishlist is Empty</h2>
}
    
  </section>

</div>
</div>
    </div>
  )
}

export default WhishList