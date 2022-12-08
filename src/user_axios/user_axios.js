import axios from "axios"
import BaseUrl from "../BaseUrl"

export const getAllLatestCourse= ()=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.get(BaseUrl+'get_allcourses/latest/').then((response)=>{
            console.log(response.data);
            console.log("getAllchapter Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getAllchapter Axios Not working");
            reject(err)
         })
        })
}

export const getAllRecomentedCourse= (user_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).acess
        console.log(UserToken)
        axios.get(BaseUrl+'recomented_courses/'+user_id+'/').then((response)=>{
            console.log(response.data);
            console.log("getAllchapter Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getAllchapter Axios Not working");
            reject(err)
         })
        })
}

export const getCourseDetails = (course_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.get(BaseUrl+'course_details/'+course_id+'/',{
            headers:{"Authorization" : `Bearer ${UserToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("getAllchapter Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getAllchapter Axios Not working");
            reject(err)
         })
        })
}

export const getEntrolledCourse = (user_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.get(BaseUrl+'get_entrolled/'+user_id+'/',{
            headers:{"Authorization" : `Bearer ${UserToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("Entrolled_course Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("Entrolled_course Axios Not working");
            reject(err)
         })
        })
}

export const removeEntrollCourse = (entroll_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.delete(BaseUrl+'delete_entroll/'+entroll_id+'/',{
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

export const getFavoriteCourses = (student_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.get(BaseUrl+'get_favorite/'+student_id+'/',{
            headers:{"Authorization" : `Bearer ${UserToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("getfavorite Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getFavorite Axios Not working");
            reject(err)
         })
        })
}

export const getUserAssigments = (course_id,student_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.get(BaseUrl+'user/assignment/'+course_id+'/'+student_id+'/',{
            headers:{"Authorization" : `Bearer ${UserToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("getAssigment Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getAssigment Axios Not working");
            reject(err)
         })
        })
}

export const genereteCirtificate = (student_id,course_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.get(BaseUrl+'pdf/'+student_id+'/'+course_id+'/',{
            headers:{"Authorization" : `Bearer ${UserToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("getCirtificate Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getAssigment Axios Not working");
            reject(err)
         })
        })
}

export const postCompleteAssigmentStatus = (stu_id,course_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.patch(BaseUrl+'assignment/complete/'+stu_id+'/'+course_id+'/',{
            headers:{"Authorization" : `Bearer ${UserToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("postaxios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("postaxios Axios Not working");
            reject(err)
         })
        })
}

export const completeStatus = (stu_id,course_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.get(BaseUrl+'user/completestatus/'+stu_id+'/'+course_id+'/',{
            headers:{"Authorization" : `Bearer ${UserToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("completestatus working");
            resolve(response.data)
        }).catch((err) => {
            console.log("postaxios Axios Not working");
            reject(err)
         })
        })
}




export const getOneCourseChapters = (student_id,course_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.get(BaseUrl+'user/get_chapters/'+student_id+'/'+course_id,{
            headers:{"Authorization" : `Bearer ${UserToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("chapter Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("chapter Axios Not working");
            reject(err)
         })
        })
}