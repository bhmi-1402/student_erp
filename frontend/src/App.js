import { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Strip from './components/HomePage/Strip';
import NavBar from './components/common/Navbar';
import ChooseUser from './pages/ChooseUser';
import Front from './pages/Front.js';
import Login from './pages/Login.js';
import Logout from './pages/Logout.js';
import Present from './pages/Present.js';
import StudentAttendance from './pages/student/StudentAttendence.js';
import StudentComplain from './pages/student/StudentComplain.js';
import StudentProfile from './pages/student/StudentProfile';
import StudentSideBar from './pages/student/StudentSideBar';
import StudentSubjects from './pages/student/StudentSubjects';
// import TeacherClassDetails from './pages/teacher/TeacherClassDetail.js';
// import TeacherProfile from './pages/teacher/TeacherProfile.js';
// import TeacherSideBar from './pages/teacher/TeacherSideBar.js';
// import TeacherViewStudent from './pages/teacher/TeacherViewStudent.js';
import path from './path.js';
import AdminForm from './pages/AdminForm.js';

function App() {

  return (
    <div className="App">
      {/* <Present></Present> */}
      <NavBar></NavBar>
      <Routes>
        <Route path='/present' element={<Present/>}></Route>
        <Route path='/' element ={<Front/>}></Route>
        <Route path='/chooseUser' element={<ChooseUser/>}></Route>
        <Route path='/StudentSidebar' element={<StudentSideBar/>}> </Route>
        <Route path='/StudentSubjects' element={<StudentSubjects/>}> </Route>
        <Route path='/Studentprofile' element={<StudentProfile/>}></Route>
        <Route path='/StudentComplain' element={<StudentComplain/>}></Route>
        <Route path='/StudentAttendance' element={<StudentAttendance/>}></Route>
        <Route path='/adminform' element={<AdminForm></AdminForm>}></Route>
        {/* <Route path='/TeacherClassDetail' element={<TeacherClassDetails/>}></Route>
        <Route path='/TeacherViewStudent' element={<TeacherViewStudent/>}></Route>
        <Route path='/TeacherSideBar' element={<TeacherSideBar/>}></Route>
        <Route path='/TeacherProfile' element={<TeacherProfile/>}></Route> */}
        <Route path='/Logout' element={<Logout/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>

      <div>
        <a href={'/login'} className='mx-2'>Login</a>
        <a href={'/logout'} className='mx-2'>Logout</a>
        {/* <a href={'/TeacherProfile'} className='mx-2'>TeacherProfile</a> */}
        {/* <a href={'/TeacherSideBar'} className='mx-2'>TeacherSideBar</a> */}
        {/* <a href={'/TeacherViewStudent'} className='mx-2'>TeacherViewStudent</a> */}
        {/* <a href={'/TeacherClassDetail'} className='mx-2'>TeacherClassDetail</a> */}
        {/* <a href={'/TeacherAttendance'} className='mx-2'>TeacherAttendance</a> */}
        <a href={'/StudentAttendance'} className='mx-2'>StudentAttendance</a>
        <a href={'/StudentAttendance'} className='mx-2'>StudentAttendance</a>
        <a href={'/StudentComplain'} className='mx-2'>StudentComplain</a>
        <a href={'/adminform'} className='mx-2'>StudentComplain</a>
        <a href={'/chooseUser'}>chooseUser</a>




      </div>
    </div>
  );
}

export default App;
