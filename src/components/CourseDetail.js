import { Link, useNavigate, useParams } from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { getCourseDetails } from "../user_axios/user_axios";
import { useContext, useEffect, useState } from "react";
import BaseUrl, { imageFolder } from "../BaseUrl";
import axios from "axios";
import Head from "./home/Head";
import AuthContext from "../context/AuthContext";
import DialogContent from '@mui/material/DialogContent';
import Swal from "sweetalert2";
import { textAlign } from "@mui/system";
import '../components/css/home.css'

function CourseDetail() {
  const navigate = useNavigate()
  let { course_id } = useParams();
  let { user } = useContext(AuthContext)
  const user_id = user.user_id;

  const [courseDetail, setCourseDetail] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [realted, setRelated] = useState([]);
  const [enrollStatus, setEntrollStatus] = useState(false);
  const [entroll_count, setEntroll_count] = useState('');
  const [load, setLoad] = useState(false)

  const [courseRate, setCourseRate] = useState('');

  const [video, setVideo] = useState('');

  const [favoriteStatus, setFavoriteStatus] = useState('');

  const markAsFavorite = () => {
    const _formData = new FormData();
    _formData.append('course', course_id);
    _formData.append('student', user_id);
    _formData.append('status', true)

    try {
      const UserToken = JSON.parse(localStorage.getItem('authToken')).access
      axios.post(BaseUrl + 'add_favorite/', _formData, {
        headers: { "Authorization": `Bearer ${UserToken}` }
      }).then((res) => {
        if (res.status === 200 || res.status === 201) {
          Swal.fire({
            position: 'top-right',
            icon: 'success',
            title: 'This course has been added in your wish list',
            showConfirmButton: false,
            timer: 2000,
            toast: true,
            timerProgressBar: true

          });
          setFavoriteStatus('success')
        }
      })
    } catch (error) {
      console.log(error);

    }

  }

  const freeEntroll = () => {
    const _formData = new FormData();
    _formData.append('course', course_id);
    _formData.append('student', user_id);
    _formData.append('isPaid', true)
    _formData.append('order_amount', courseRate)

    try {
      const UserToken = JSON.parse(localStorage.getItem('authToken')).access
      axios.post(BaseUrl + 'free_entroll/', _formData, {
        headers: { "Authorization": `Bearer ${UserToken}` }
      }).then((res) => {
        if (res.status === 200 || res.status === 201) {
          Swal.fire({
            position: 'top-right',
            icon: 'success',
            title: 'This course has been Entrolled',
            showConfirmButton: false,
            timer: 5000,
            toast: true,
            timerProgressBar: true

          });
          // window.location.reload();
        }
      })
    } catch (error) {
      console.log(error);

    }

  }




  const removeFavorite = () => {


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
          setFavoriteStatus('')
        }
      })
    } catch (error) {
      console.log(error);

    }

  }



  useEffect(() => {
    getCourseDetails(course_id).then((course) => {
      console.log(course.data);
      setCourseDetail(course);




      console.log(teacher)
      console.log(chapters);

      course.forEach((course) => {
        setTeacher(course.teacher);
        setChapters(course.course_chapters);
        setRelated(JSON.parse(course.related_courses));
        setCourseRate(course.price)

      })
      console.log('hiii');
    })


    try {
      axios.get(BaseUrl + 'entroll_status/' + user_id + '/' + course_id).then((res) => {
        console.log(res);
        if (res.data.bool == true) {
          setEntrollStatus(true)
          setEntroll_count(res.data.count)
        }


      });
    } catch (error) {
      console.log(error)
    }


    console.log(video);


  }, [load])
  console.log(courseDetail);
  console.log(realted);
  console.log(chapters);
  console.log(course_id)
  console.log(user_id);
  console.log(enrollStatus);
  console.log(entroll_count);
  console.log(favoriteStatus);

  console.log(video);
  console.log(courseRate);


  return (

    <div style={{minHeight:'100vh'}}>
      <Head />
      <div className="container mt-5">
        {courseDetail.map((course, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-4 ">
                <div style={{ width: "20rem",textAlign:'left' }}>
                  <Link to="/details/1" style={{ margin: 'auto' }}><img style={{ height: "250px", width: "100%",objectFit:'cover' }} src={imageFolder + course.feature_image} className="card-img-top" alt="..." />
                  </Link>
                  <div className="card-body">
                    <Link style={{ textDecoration: "none",color:'black',fontSize:'25px',fontWeight:'bold',  }} to="/details/1" className="card-title">{course.title}</Link>
                    {favoriteStatus !== 'success' &&
                      <span className="float-end fs-6 mt-2"><button onClick={()=>{markAsFavorite();setLoad(!load)}} title="add in your wishlist" className="btn btn-outline-danger"><i className="bi bi-heart"></i></button></span>
                    }
                    {favoriteStatus === 'success' &&
                      <span className="float-end fs-6 mt-2"><button onClick={()=>{removeFavorite();setLoad(!load)}} title="remove from  your wishlist" className="btn btn-danger"><i className="bi bi-heart"></i></button></span>
                    }
                  </div>
                  <div className="card-footer">
                  
                    {/* <span>Rating : 4.5/5</span> */}
                    <div style={{fontSize:'30px',fontWeight:'bolder'}}> ₹{course.price}</div>
                    
                  </div>
                </div>

              </div>

              <div className="col-8 bg-light border border-dark p-1 ">
                <div>
                  {course.price === 0 ?
                    <h1>{course.title} <span className="float-end fs-5 btn btn-light" style={{ cursor: "default" }}>
                      Free</span> </h1> :
                    <h1>{course.title} <span className="float-end fs-5 btn btn-light" style={{ cursor: "default" }}>
                      ₹{course.price}</span> </h1>

                  }
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iusto odit accusamus doloribus eius atque blanditiis, vero incidunt alias tenetur error eligendi nulla voluptatibus aut quidem. Voluptas delectus aliquid assumenda omnis eum, error autem soluta magnam quibusdam atque excepturi laborum ab temporibus obcaecati qui quae! Nisi autem hic corrupti cumque itaque modi corporis nihil! Perspiciatis, quis? Corrupti adipisci, dolorum, minus magnam minima iste saepe tempora blanditiis asperiores, enim autem consectetur aspernatur dolorem. Aspernatur esse facere odio tenetur harum, alias quam neque, quidem doloremque incidunt, laudantium laborum adipisci. Odio temporibus pariatur nulla fugit? Veniam praesentium voluptatum odit libero rem, perspiciatis ipsa!</p>
                  <p style={{textAlign:'left'}}><b>Created by        : </b><Link to="/user_details/1" style={{ textDecoration: "None" }}>{course.teacher.full_name}</Link> 12/12/12</p>
                  <p style={{textAlign:'left'}}><b>Duration          : </b>3 Hours</p>
                  <p style={{textAlign:'left'}}><b>Enrolled Students : </b>{entroll_count} Students</p>
                  
                  {enrollStatus ?

                    <div style={{backgroundColor:'green',color:'white',padding:'5px',borderRadius:'10px'}} className="float-end">You Are Entrolled</div>
                    :
                    courseRate === 0 ?
                      <button className="btn btn-outline-primary btn-lg float-end" onClick={() => { freeEntroll(); setLoad(!load) }}>Free Entroll</button>
                      :
                      <button onClick={() => navigate('/payment', { state: { course_id: course.id, amount: course.price, name: course.title } })} className="btn btn-outline-primary btn-lg float-end">Buy Now</button>

                  }
                </div>
              </div>

            </div>
          )
        })}

        <div className=" mt-5 border-right-0" >
          <div className="card-header h3 bg-dark text-white fst-italic">
            Course content
          </div>
          <ul className="list-group  ">
            {chapters.map((chapter, index) => {
              return (

                <li className="list-group-item listClass" style={{fontSize:'20px',fontWeight:'bold',textAlign:'left'}} key={index} ><span className="me-2"> Chapter {index+1}:</span> 
                  {chapter.title}
                  <span className="float-end me-3" style={{fontSize:'13px',fontWeight:'normal'}}>
                    <span className="m-auto" >10 Minutes</span>

                    {index === 0 || enrollStatus ? (
                      <>
                        <button className="btn btn-sm float-end" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={() => { setVideo(imageFolder + chapter.video); }}><YouTubeIcon /></button>
                        <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{chapter.title}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <div className="ratio ratio-16x9">
                                  {/* <iframe src={imageFolder+chapter.video} title="" frameborder="0" allowfullscreen></iframe>  */}
                                  <video key={video} controls autoplay width='200'>
                                    <source src={video} type='video/webm' />
                                    <source src={video} type='video/mp4'></source>

                                  </video>

                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </>) : null}




                    {/* End Video Modal */}

                  </span>
                </li>
              )
            })}


          </ul>
        </div>

        <h3 className="border-bottom pd-1 mt-5">Related Courses </h3>
        <div className="row">
          {realted.map((rel, index) => {
            return (
              <div className=" col-12 col-md-6 col-lg-3 mt-4" key={index}>
                <div>
                  <Link to={`/details/${rel.pk}`} ><img style={{ height: "200px",width: "100%",objectFit:'cover'}} src={imageFolder + '/media/' + rel.fields.feature_image} className="card-img-top" alt="..." />
                  </Link>
                  <div className="card-body" style={{textAlign:'left'}}>
                    <Link to={`/details/${rel.pk}`} className="card-title" style={{textDecoration:'none',fontSize:'25px',fontWeight:'bold',color:'black'}}>{rel.fields.title}</Link>

                  </div>
                  <div className="card-footer">
                   
                    <div style={{textAlign:'left'}}>₹{rel.fields.price}</div>
                  </div>
                </div>
              </div>
            )
          })}






        </div>


      </div>;


    </div>


  );
}

export default CourseDetail