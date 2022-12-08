import React from 'react'



import Footer from './home/Footer';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './About';
import CourseDetail from './CourseDetail';
import Slogin from './student/Slogin';
import Sregister from './student/Sregister';
import TeacherDashboard from './teacher/TeacherDashboard';
import Sdashbord from './student/Sdashbord';
import MyCourses from './student/MyCourses';
import RecomendedCourses from './student/RecomendedCourses';
import FavoriteCourses from './student/FavoriteCourses';
import ProfileSetting from './student/ProfileSetting';
import ChangePassword from './student/ChangePassword';
import TeacherLogin from './teacher/TeacherLogin';
import TeacherRegister from './teacher/TeacherRegister';
import { AuthProvider } from '../context/AuthContext';
import AdminAuth from '../utils/AdminAuth';
import AdminDashboard from './admin/AdminDashboard';
import AdminUsers from './admin/AdminUsers';
import AdminTeachers from './admin/AdminTeachers';
import TeacherCourses from './teacher/TeacherCourses';
import RequireAuth from '../utils/RequireAuth';
import AddCourse from './teacher/AddCourse';
import Chapters from './teacher/Chapters';
import OtpVerification from './student/OtpVerification';
import AdminCategory from './admin/AdminCategory';
import AddChapter from './teacher/AddChapter';
import AddCategory from './admin/AddCategory';

import MyStudents from './teacher/MyStudents';
import WhishList from './WhishList';
import AddAssignment from './teacher/AddAssignment';
import Assignments from './teacher/Assigments';
import MyCourseDetail from './student/MyCourseDetail';
import UserAssignment from './student/UserAssignment';
import MyChapters from './student/MyChapters';
import CoursesPage from './CoursesPage';
import Payment from './payment/Payment';
import MyAssignment from './student/MyAssignment';
import MyCirtificate from './student/MyCirtificate';
import Transaction from './teacher/Transaction';
import PaymentSuccess from './payment/PaymentSuccess';
import Home from './home/Home';
import AddCarosel from './admin/AddCarosel';
import Carosel from './home/Carosel';
import AdminCarosel from './admin/AdminCarosel';
import AssignmentAnswer from './teacher/AssignmentAnswer';



function Main() {
  return (
    <div>
      
      <BrowserRouter>
      <AuthProvider>

      
      <Routes>

        {/* home */}
        <Route path='/' element={<RequireAuth><Home/></RequireAuth>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/details/:course_id' element={<CourseDetail/>}></Route>
       
        <Route path='/whishlist' element={<RequireAuth><WhishList/></RequireAuth>}></Route>
        <Route path='/mychapter/:course_id/' element={<RequireAuth><MyChapters/></RequireAuth>}></Route>
        <Route path='/myassingment/:course_id/' element={<RequireAuth><MyAssignment/></RequireAuth>}></Route>
        <Route path='/mycirtificate/:course_id/' element={<RequireAuth><MyCirtificate/></RequireAuth>}></Route>

        <Route path='/mylearnig' element={<RequireAuth><MyCourseDetail/></RequireAuth>}></Route>

        {/* <Route path='/courses' element={<RequireAuth><CoursesPage/></RequireAuth>}></Route> */}
        <Route path='/courses' element={<RequireAuth><CoursesPage/></RequireAuth>}></Route>
        <Route path='/payment' element={<RequireAuth><Payment/></RequireAuth>}></Route>
        <Route path='/payment/success' element={<RequireAuth><PaymentSuccess/></RequireAuth>}></Route>

        

        {/* user_routes */}
        <Route path='/user-login' element={<Slogin/>}></Route>
        <Route path='/user-register' element={<Sregister/>}></Route>
        <Route path='/user/dashboard' element={<RequireAuth><Sdashbord/></RequireAuth>}></Route>
        <Route path='/user/otp' element={<OtpVerification/>}></Route>
        <Route path='/user/my_courses' element={<RequireAuth><MyCourseDetail/></RequireAuth>}></Route>
        <Route path='/user/assignment' element={<RequireAuth><UserAssignment/></RequireAuth>}></Route>
        {/* <Route path='/user/cirtificate' element={<RequireAuth><MyCirtificate/></RequireAuth>}></Route> */}

        {/* <Route path='/my-courses' element={<MyCourses/>}></Route> */}
        <Route path='/my-courses' element={<RequireAuth><MyCourses/></RequireAuth>}></Route>
        <Route path='/favorite-courses' element={<RequireAuth><FavoriteCourses/></RequireAuth>}></Route>
        <Route path='/recomended-courses' element={<RequireAuth><RecomendedCourses/></RequireAuth>}></Route>
        <Route path='/profile-setting' element={<RequireAuth><ProfileSetting/></RequireAuth>}></Route>
        <Route path='/change-password' element={<RequireAuth><ChangePassword/></RequireAuth>}></Route>

        {/* teacher_routes */}
        <Route path='/teacher/login' element={<TeacherLogin/>}></Route>
        <Route path='/teacher/register' element={<TeacherRegister/>}></Route>
        <Route path='/teacher/dashboard' element={<TeacherDashboard/>}></Route>
        <Route path='/teacher/courses' element={<TeacherCourses/>}></Route>
        <Route path='/teacher/addcourse' element={<AddCourse/>}></Route>
        <Route path='/teacher/courses/chapters/:course_id' element={<Chapters/>}></Route>
        <Route path='/teacher/courses/chapters/:course_id/addchapter/:course_id' element={<AddChapter/>}></Route>
        <Route path='/teacher/mystudent' element={<MyStudents/>}></Route>
        <Route path='teacher/mystudent/add_assignment/:student_id/:course_id/' element={<AddAssignment/>}></Route>
        <Route path='teacher/mystudent/assignments/:student_id/:course_id/' element={<Assignments/>}></Route>
        <Route path='teacher/mystudent/assignments/answer/:student_id/:course_id/' element={<AssignmentAnswer/>}></Route>
        

        {/* admin */}

        <Route path="/admin/dashboard" element={<AdminAuth><AdminDashboard/></AdminAuth>}></Route>
        <Route path="/admin/users" element={<AdminAuth><AdminUsers/></AdminAuth>}></Route>
        <Route path="/admin/teachers" element={<AdminAuth><AdminTeachers/></AdminAuth>}></Route>
        <Route path="/admin/category" element={<AdminAuth><AdminCategory/></AdminAuth>}></Route>
        <Route path="/admin/category/addcategory/" element={<AdminAuth><AddCategory/></AdminAuth>}></Route>
        <Route path="/admin/carosel/addcarosel/" element={<AdminAuth><AddCarosel/></AdminAuth>}></Route>
        <Route path="/admin/carosel/" element={<AdminAuth><AdminCarosel/></AdminAuth>}></Route>



      </Routes>
      <Footer/>
      </AuthProvider>
      </BrowserRouter>
      
    </div>
  )
}

export default Main