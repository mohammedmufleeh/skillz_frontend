import {React,useContext} from 'react';
import { Navigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext';


const AdminAuth =({children, ...rest})=> {
    let {user}=useContext(AuthContext)
    console.log("AdminAuth works");
    
    return (<>{user.is_superuser ? children : <Navigate to="/user-login"/>}</>);

}

export default AdminAuth;
