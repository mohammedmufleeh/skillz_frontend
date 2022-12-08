import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import BaseUrl, { imageFolder } from '../../BaseUrl';
import AuthContext from '../../context/AuthContext';
import { getUserAssigments, postCompleteAssigmentStatus } from '../../user_axios/user_axios';
import Head from '../home/Head';
import CourseSlidebar from './CourseSlidebar';
import Swal from 'sweetalert2'

function MyAssignment() {
    const {user,setCourseId} = useContext(AuthContext)
    let {course_id} = useParams()
    let user_id =user.user_id


    const [assigment, setAssignment] = useState([]);
    const [assigmentId, setAssignmentId] = useState('');
    const [answer,setAnswer]= useState({'assingment':`${assigmentId}`})
    const [load,setload] = useState(false)
    const [completeResponse,setCompleteResponse] = useState(false)

    const handleChange = ((event)=>{
        setAnswer({
            ...answer,[event.target.name] :event.target.value
        })
    })

    const handleFileChange = ((event)=>{
        setAnswer({
            ...answer,[event.target.name] : event.target.files[0]
        })
    })
    
   

    const handleSubmit = ((event)=>{
        event.preventDefault();
        const UserToken=JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        const form_Data = new FormData();
          form_Data.append('assignment',assigmentId);
          form_Data.append('detail',answer.detail);
          form_Data.append('file',answer.file); 

        axios.post(BaseUrl+'assignment/addanswer/',form_Data,
        { headers: {"Authorization" : `Bearer ${UserToken}`,
        'Content-Type': 'multipart/form-data' 
        } }).then((response)=>{
            console.log(response.data)
            console.log("answer added successfully");
            setload(!load)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Assigment added successfully',
                showConfirmButton: false,
                timer: 2000
                })
                
                        

        }).catch((error)=>{
            
            console.log(error.response.data)
        })
    })

    
  
    useEffect(()=>{
      getUserAssigments(course_id,user_id).then((res)=>{
        setAssignment(res)
        assigment.forEach((res)=>{
           
          
        })
      })

      const items = JSON.parse(localStorage.getItem('cource',course_id));
        if (items) {
        setCourseId(items);
        }
      
        postCompleteAssigmentStatus(user_id,course_id).then((res)=>{
          setCompleteResponse(res)
          
        })
  
  
  
  
    },[load])
    console.log(assigmentId);
  return (
    <div style={{minHeight:'100vh'}}>
        <Head/>
        <CourseSlidebar/>
        <section className='col-md-9 my-3 container'>
    
      
    
    <table className="table">
      <thead>
      {/* <h5 classNameName='table-header '>My Courses</h5> */}
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          
          <th scope="col">File</th>
          <th scope="col">Action</th>
          
        </tr>
      </thead>
      <tbody>
      {assigment.map((assigment,index)=>{
                   return(
                   <tr key={index}>
                    <th scope="row">{index}</th>
                    <th >{assigment.title}</th>
                    
                    <td><p>Open a PDF file <a href={imageFolder+assigment.file} target='_blank' rel='noopener noreferrer'>Open</a></p></td>
                    
                     <td>
                     {assigment.is_submitted===true ?
                     <p>Submitted</p>
                     :
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setAssignmentId(assigment.id);}}>
  Submit Your Assigment
</button>
}


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Submit Your Answer</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <input type="text"id='detail' placeholder='details'  name='detail' className="form-control" onChange={handleChange} />
      <input type="file"id='file' name="file"  className="form-control mt-1" onChange={handleFileChange}  />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  </div>
</div>

                     </td>
                    {/* <td>{entroll.course.title}</td> */}
                     
                    
    
    
                   </tr>
                   )
           })}
       
        
      </tbody>
    </table>
        
      </section>

    </div>
  )
}

export default MyAssignment