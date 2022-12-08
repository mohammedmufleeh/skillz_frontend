import {React,useContext} from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate} from 'react-router-dom'


const TeacherAuth = ({children,...rest})=>{
    let {teacher} = useContext(AuthContext)
    console.log("requireauth works");
    return(
        <>{teacher ? children:
        <Navigate to='/teacher/login'/>}</>
    )
}

export default TeacherAuth;