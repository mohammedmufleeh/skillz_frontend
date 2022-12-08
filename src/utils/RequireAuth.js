import {React,useContext} from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate} from 'react-router-dom'


const RequireAuth = ({children,...rest})=>{
    let {user} = useContext(AuthContext)
    console.log("requireauth works");
    return(
        <>{user ? children:
        <Navigate to='/user-login'/>}</>
    )
}

export default RequireAuth;