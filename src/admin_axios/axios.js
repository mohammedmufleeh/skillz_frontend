import axios from 'axios';
import { useContext } from 'react';
import BaseUrl from '../BaseUrl';




export const getAllusers= () =>{
    return new Promise((resolve,reject) =>{
        
        const AdminToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(AdminToken)

        axios.get(BaseUrl+'getusers/',{
            headers:{"Authorization" : `Bearer ${AdminToken}`}
        }).then((response)=>{
            resolve(response.data)
        }).catch((err)=>{
            reject(err)
        })
})
}

export const blockUser = (user_id)=>{
    
    const AdminToken = JSON.parse(localStorage.getItem('authToken')).access
    console.log(AdminToken)
    axios.patch(BaseUrl+'blockuser/'+user_id+'/',{
        headers:{"Authorization" : `Bearer ${AdminToken}`}
    }).then((response)=>{
        console.log(response.data);
        console.log("updateUserStatus Axios working");
    }).catch((err) => {
        console.log("updateUserStatus Not working");
        console.log(err);
})
}

export const getAllteachers= () =>{
    return new Promise((resolve,reject) =>{
        
        const AdminToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(AdminToken)
       

       

        axios.get(BaseUrl+'getteachers/',{
            headers:{"Authorization" : `Bearer ${AdminToken}`}
        }).then((response)=>{
            resolve(response.data)
        }).catch((err)=>{
            reject(err)
        })
})
}

export const verifyTeacher = (teacher_id)=>{
    const AdminToken = JSON.parse(localStorage.getItem('authToken')).access
    console.log(teacher_id)
    console.log('verifyyyyyy')
    axios.patch(BaseUrl+'verifyteacher/'+teacher_id+'/',{
        headers:{"Authorization" : `Bearer ${AdminToken}`}
    }).then((response)=>{
        console.log('********')
        console.log(response.data);
        console.log("updateUserStatus Axios working");
    }).catch((err) => {
        console.log("updateUserStatus Not working");
        console.log(err);
})
}

export const getAllAdminCategories = ()=>{

    return new Promise((resolve,reject)=>{
        const AdminToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(AdminToken)
        axios.get(BaseUrl+'admin/categorylist/',{
            headers:{"Authorization" : `Bearer ${AdminToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("getAllcategories Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getAllcategories Axios Not working");
            reject(err)
         })
        })
}

export const getAllAdminCarosel = ()=>{

    return new Promise((resolve,reject)=>{
        const AdminToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(AdminToken)
        axios.get(BaseUrl+'allcarosel/',{
            headers:{"Authorization" : `Bearer ${AdminToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("getAllcarosel Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getAllcategories Axios Not working");
            reject(err)
         })
        })
}

export const removeCarosel = (carosel_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.delete(BaseUrl+'deletecarosel/'+carosel_id+'/',{
            headers:{"Authorization" : `Bearer ${UserToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("delete Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("delete Axios Not working");
            reject(err)
         })
        })
}

export const removeCategory = (cat_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.delete(BaseUrl+'admin/deletecategory/'+cat_id+'/',{
            headers:{"Authorization" : `Bearer ${UserToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("delete Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("delete Axios Not working");
            reject(err)
         })
        })
}

export const getAllEntrollCourse = ()=>{

    return new Promise((resolve,reject)=>{
        const AdminToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(AdminToken)
        axios.get(BaseUrl+'getentrolled/',{
            headers:{"Authorization" : `Bearer ${AdminToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("getAllcategories Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getAllcategories Axios Not working");
            reject(err)
         })
        })
}

export const getAllCommiton = ()=>{

    return new Promise((resolve,reject)=>{
        const AdminToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(AdminToken)
        axios.get(BaseUrl+'admincommition/',{
            headers:{"Authorization" : `Bearer ${AdminToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("getCommition Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getCommition Axios Not working");
            reject(err)
         })
        })
}