import axios from "axios";
import BaseUrl from "../BaseUrl";

export const getAllCategories = ()=>{

    return new Promise((resolve,reject)=>{
        const TeacherToken = JSON.parse(localStorage.getItem('teacherToken')).token
        console.log(TeacherToken)
        axios.get(BaseUrl+'course_category_list/',{
            headers:{"Authorization" : `Bearer ${TeacherToken}`}
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

export const getAllTeacherCourses = (teacher_id)=>{

    return new Promise((resolve,reject)=>{
        const TeacherToken = JSON.parse(localStorage.getItem('teacherToken')).token
        console.log(TeacherToken)
        axios.get(BaseUrl+'get_courses/'+teacher_id+'/',{
            headers:{"Authorization" : `Bearer ${TeacherToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("getAllcourses Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getAllcourses Axios Not working");
            reject(err)
         })
        })
}

export const getAllCourseChapters = (course_id)=>{

    return new Promise((resolve,reject)=>{
        const TeacherToken = JSON.parse(localStorage.getItem('teacherToken')).token
        console.log(TeacherToken)
        axios.get(BaseUrl+'get_chapters/'+course_id+'/',{
            headers:{"Authorization" : `Bearer ${TeacherToken}`}
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

export const removeChapter = (chapter_id)=>{

    return new Promise((resolve,reject)=>{
        const TeacherToken = JSON.parse(localStorage.getItem('teacherToken')).token
        console.log(TeacherToken)
        axios.delete(BaseUrl+'delete_chapter/'+chapter_id+'/',{
            headers:{"Authorization" : `Bearer ${TeacherToken}`}
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

export const getEntrolledStudent = (teacher_id)=>{

    return new Promise((resolve,reject)=>{
        const TeacherToken = JSON.parse(localStorage.getItem('teacherToken')).token
        console.log(TeacherToken)
        axios.get(BaseUrl+'entrolled_student/'+teacher_id+'/',{
            headers:{"Authorization" : `Bearer ${TeacherToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("Entrolled_student Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("Entrolled Axios Not working");
            reject(err)
         })
        })
}

export const getAssigments = (course_id,student_id)=>{

    return new Promise((resolve,reject)=>{
        const TeacherToken = JSON.parse(localStorage.getItem('teacherToken')).token
        console.log(TeacherToken)
        axios.get(BaseUrl+'assignment/'+course_id+'/'+student_id+'/',{
            headers:{"Authorization" : `Bearer ${TeacherToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("Entrolled_student Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("Entrolled Axios Not working");
            reject(err)
         })
        })
}
export const getAssigmentsAnswer = (course_id,student_id)=>{

    return new Promise((resolve,reject)=>{
        const TeacherToken = JSON.parse(localStorage.getItem('teacherToken')).token
        console.log(TeacherToken)
        axios.get(BaseUrl+'assignment/answer/'+course_id+'/'+student_id+'/',{
            headers:{"Authorization" : `Bearer ${TeacherToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("Entrolled_student Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("Entrolled Axios Not working");
            reject(err)
         })
        })
}

export const getAllTeacherEntrollCourse = (teacher_id)=>{

    return new Promise((resolve,reject)=>{
        const TeacherToken = JSON.parse(localStorage.getItem('teacherToken')).token
        console.log(TeacherToken)
        axios.get(BaseUrl+'teacher/getentrolled/'+teacher_id+'/',{
            headers:{"Authorization" : `Bearer ${TeacherToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("getAllc Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getAllc Axios Not working");
            reject(err)
         })
        })
}

export const getTeacherCommition = (teacher_id)=>{

    return new Promise((resolve,reject)=>{
        const TeacherToken = JSON.parse(localStorage.getItem('teacherToken')).token
        console.log(TeacherToken)
        axios.get(BaseUrl+'teachercommition/'+teacher_id+'/',{
            headers:{"Authorization" : `Bearer ${TeacherToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("getAllc Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getAllc Axios Not working");
            reject(err)
         })
        })
}
