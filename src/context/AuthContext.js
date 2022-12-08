import {React,createContext,useState,useEffect} from 'react';
import BaseUrl from '../BaseUrl';
import jwt_decode from "jwt-decode";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const AuthContext = createContext()
export default AuthContext;
export const AuthProvider = ({children})=>{

    const navigate = useNavigate()
    
    const [teacherMobile,setTeacherMobile]=useState('')

    const [authToken, setAuthToken] = useState(()=>localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')):null);
    const [teacherToken, setTeacherToken] = useState(()=>localStorage.getItem('teacherToken') ? JSON.parse(localStorage.getItem('teacherToken')):null);

    const [user, setUser] = useState(()=>localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):null);
    const [error,setError] = useState('');

    const [teacherError,setTeacherError] = useState('')

    const [teacher, setTeacher] = useState(()=>localStorage.getItem('teacher') ? JSON.parse(localStorage.getItem('teacher')):null);

    const [loading, setLoading] = useState(true);

    const [courseId,setCourseId] =useState('');

    const [search,setSearch]= useState('');

    const [verify,setVerify] = useState('');
    
    // const getUserData = (id) => {
    //     axios.get(BaseUrl+'user_details/'+id).then(response =>{
    //         console.log("Got All user Details");
    //         console.log(response.data);
    //         localStorage.setItem('user_data',JSON.stringify(response.data));
            
    //     }).catch(error =>{
    //         console.log("Not working All user Details");
    //         console.log(error);
    //     })
        
    // }
    let loginUser = async (userDetails,response) =>{
        

        
        console.log("form submitted")
        console.log(userDetails);
        console.log(response);
        console.log(response.data.detail)
        if (response.status === 200){
            setAuthToken(response.data);
            var decoded =jwt_decode(response.data.access);
            console.log('ghjgghhgk')
            console.log(decoded)
            setUser(decoded)

            localStorage.setItem('user', JSON.stringify(decoded));

            localStorage.setItem('authToken', JSON.stringify(response.data));
            if(decoded.is_superuser){
                console.log(user)
                navigate('/admin/dashboard')
            }else{
                navigate('/')
            }
           

        }else{
            console.log(response.status);
            console.log('aslu');
            console.log("somthing is wrong")
            setError('invalid Email or Password')
        }
        


    }

    let verifyUser = async (otpDetails,response) =>{
        

        
        console.log("form submitted")
        console.log(otpDetails);
        console.log(response);
        console.log(response.data)
        if (response.status === 200){
            
            navigate('/user-login',{ data: true} )
            
            
           
        }else{
            console.log("somthing is wrong")
            setError('invalid Email or Password')
        }
        


    }


    let loginTeacher =  (teacherDetail,response) =>{
        

        
        console.log("form submitted")
        console.log(teacherDetail);
        console.log(response);
        console.log(response.data)
        setTeacherError(response.data.message)
        if (response.status === 200){
            console.log("****")
            setTeacherToken(response.data);
            
            var decoded =jwt_decode(response.data.token);
            
            console.log(decoded)
            setTeacher(decoded)

            localStorage.setItem('teacher', JSON.stringify(decoded));

            localStorage.setItem('teacherToken', JSON.stringify(response.data));
            if(decoded.is_active){
                navigate('/teacher/dashboard')
            }else{
                navigate('/teacher/login')
            }
           

        }else{
            console.log(response)
            console.log("somthing is wrong")
        }
        


    }


    let logOutUser =()=>{
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        console.log(user);
        navigate('/user-login')
    }

    let logOutTeacher =()=>{
        setTeacherToken(null);
        setTeacher(null);
        localStorage.removeItem('teacherToken');
        localStorage.removeItem('teacher');
        navigate('/teacher/login')
    }
  
    let contexData = {
        loginUser: loginUser,
        user:user,
        logOutUser:logOutUser,
        loginTeacher:loginTeacher,
        authToken:authToken,
        teacherToken:teacherToken,
        logOutTeacher:logOutTeacher,
        teacher:teacher,
        error:error,
        teacherError:teacherError,
        verifyUser:verifyUser,
        setTeacherMobile:setTeacherMobile,
        teacherMobile:teacherMobile,
        setCourseId:setCourseId,
        courseId:courseId,
        search:search,
        setSearch:setSearch,
        
        
        
    }
    return (
        <AuthContext.Provider value={contexData}>
            {children}    
        </AuthContext.Provider>
    )
}