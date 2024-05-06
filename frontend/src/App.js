import logo from './logo.svg';
import './App.css';
import { useSelector , useDispatch} from 'react-redux'; 
import { addUser } from './store/userSlice';
import { useEffect, useState } from 'react';

import NavBar from './components/common/Navbar';
import Strip from './components/HomePage/Strip';
import Present from './pages/Present.js';
import {Routes,Route} from 'react-router-dom'
import Front from './pages/Front.js'
import ChooseUser from './pages/ChooseUser'
import StudentSideBar from './pages/student/StudentSideBar'
import StudentSubjects from './pages/student/StudentSubjects'
import StudentProfile from './pages/student/StudentProfile';
import StudentComplain from './pages/student/StudentComplain.js';
import StudentAttendance from './pages/student/StudentAttendence.js';
import TeacherClassDetails from './pages/teacher/TeacherClassDetail.js';
import TeacherViewStudent from './pages/teacher/TeacherViewStudent.js';
import TeacherSideBar from './pages/teacher/TeacherSideBar.js'
import TeacherProfile from './pages/teacher/TeacherProfile.js';
import Logout  from './pages/Logout.js';
import Login  from './pages/Login.js';



function App() {
  
  return (
    <div className="App">
      <NavBar></NavBar>
      <Strip></Strip>
      {/* <Present></Present> */}
      <Routes>
        <Route path='/present' element={<Present/>}></Route>
        <Route path='/front' element ={<Front/>}></Route>
        <Route path='/chooseUser' element={<ChooseUser/>}></Route>
        <Route path='/StudentSidebar' element={<StudentSideBar/>}> </Route>
        <Route path='/StudentSubjects' element={<StudentSubjects/>}> </Route>
        <Route path='/Studentprofile' element={<StudentProfile/>}></Route>
        <Route path='/StudentComplain' element={<StudentComplain/>}></Route>
        <Route path='/StudentAttendance' element={<StudentAttendance/>}></Route>
        <Route path='TeacherClassDetail' element={<TeacherClassDetails/>}></Route>
        <Route path='TeacherViewStudent' element={<TeacherViewStudent/>}></Route>
        <Route path='TeacherSideBar' element={<TeacherSideBar/>}></Route>
        <Route path='TeacherProfile' element={<TeacherProfile/>}></Route>
        <Route path='/Logout' element={<Logout/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
