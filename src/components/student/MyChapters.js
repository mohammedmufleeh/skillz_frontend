import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { getOneCourseChapters } from '../../user_axios/user_axios';
import Head from '../home/Head'
import { imageFolder } from '../../BaseUrl'
import '../../components/css/home.css'
import CourseSlidebar from './CourseSlidebar';

function MyChapters() {

    let {course_id} = useParams(); 
    
    let {user,setCourseId} = useContext(AuthContext)
    // setCourseId(course_id)
    localStorage.setItem('cource',course_id)
    
    const user_id= user.user_id;

    const [chapters,setChapter] =useState([]);
    const [video,setVideo] =useState('');
    const [active, setActive] = useState(null)
    console.log(video)
    

    useEffect(()=>{
        getOneCourseChapters(user_id,course_id).then((chapter)=>{
          setChapter(chapter)
          
        })

        const items = JSON.parse(localStorage.getItem('cource',course_id));
        if (items) {
        setCourseId(items);
        }
    
    
    
    
      },[video])
console.log(chapters);
console.log(video);
  return (
    <div style={{minHeight:'100vh'}} >
        <Head/>
        <CourseSlidebar data={user_id}/>
        <div className="container">
            
            <h3 className="border-bottom pd-1 mt-5 h2">My Chapters</h3>
            <div className="row">
                <div className=" col-12 col-md-6">
                <div class="embed-responsive embed-responsive-16by9 ratio ratio-4x3">
                    <video key={video} style={{objectFit:'cover'}}   controls  width='250'>
                        <source src={video} type='video/webm' />
                        <source src={video} type='video/mp4'></source>

                    </video>
                </div>
                </div>
                <div  className=" col-12 col-md-6">
                <div class="list-group my-6">
                { chapters &&
          chapters.map((chapter,index)=>{
            return (
                <a key={index}   className={`list-group-item ${active == chapter && 'active'}`} type='button' style={{textAlign:'left'}} onClick={()=>{setVideo(imageFolder+chapter.video);setActive(chapter)} }>{chapter.title} <span className='mx-5 float-end'>30 minute</span> </a>
               
                )
            })
          }
                </div>
                    
                </div>
            </div>

        </div>

        {/* <div className="container">
            
            <h3 className="border-bottom pd-1 mt-5 h2">My Chapters</h3>
            <div className="row">
                <div className=" col-12 col-md-6  mt-4">

                </div>
            </div>
        </div> */}

      
    </div>
  )
}

export default MyChapters