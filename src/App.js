import { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Strip from "./components/common/Strip.js";
import NavBar from "./components/common/Navbar";
import ChooseUser from "./pages/ChooseUser";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
// import Present from './pages/Present.js';
import StudentAttendance from "./pages/student/StudentAttendence.js";
import StudentProfile from "./pages/student/StudentProfile";
import StudentSideBar from "./pages/student/StudentSideBar";
import StudentSubjects from "./pages/student/StudentSubjects";
import TeacherProfile from "./pages/teacher/TeacherProfile.js";
import TeacherSideBar from "./pages/teacher/TeacherSideBar.js";
import path from "./path.js";
import AdminForm from "./pages/admin/AdminForm.js";
import AdminAddClass from "./pages/admin/AdminAddClass.js";
import AdminTeacher from "./pages/admin/AdminTeacher.js";
import TeacherAttendance from "./pages/teacher/TeacherAttendance.js";
import Modal from "./components/common/Modal.js";
import StudentDashboard from "./pages/student/StudentDashboard.js";
import StudentMarks from "./pages/student/StudentMarks.js";
import AdminDashboard from "./pages/admin/AdminDashboard.js";
import TeacherDashboard from "./pages/teacher/TeacherDashboard.js";
import AdminAddNotice from "./pages/admin/AdminAddNotice.js";
import StudentAddComplaint from "./pages/student/StudentAddComplaint.js";
import TeacherAddMarks from "./pages/teacher/TeacherAddMarks.js";
import StudentFees from "./pages/student/StudentFees.js";
import NotificationPanel from "./components/Notification.js/Notification.js";
import AdminComplaints from "./pages/admin/AdminComplaints.js";
import Footer from "./components/common/Footer.js";
import About from "./components/common/About.js";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        {/* Common Routes */}
        <Route path="/" index element={<Home/>}></Route>
        <Route path="/choose_user" element={<ChooseUser />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/notification' element={<NotificationPanel></NotificationPanel>}></Route>
        {/* Dashboard Routes */}
        <Route path="/dashboard/admin" element={<AdminDashboard></AdminDashboard>} ></Route>
        <Route path="/dashboard/teacher" element={<TeacherDashboard></TeacherDashboard>} ></Route>
        <Route path="/dashboard/student" element={<StudentDashboard></StudentDashboard>} ></Route>
        {/* Student Routes */}
        <Route path="/student/attendance" element={<StudentAttendance />}></Route>
        <Route path="/student/fees" element={<StudentFees></StudentFees>}></Route>
        <Route path="/student/marks" element={<StudentMarks/>}></Route>
        <Route path="/student/register_complaint" element={<StudentAddComplaint/>}></Route>
        
        {/* Teacher Routes */}
        <Route path="/teacher/attendance" element={<TeacherAttendance></TeacherAttendance>}></Route>
        <Route path="/teacher/add_marks" element={<TeacherAddMarks></TeacherAddMarks>}></Route>
        {/* Admin Routes */}
        <Route path="/admin/add_student" element={<AdminForm></AdminForm>}></Route>
        <Route path="/admin/add_teacher" element={<AdminTeacher></AdminTeacher>}></Route>
        <Route path="/admin/add_class" element={<AdminAddClass></AdminAddClass>}></Route>
        <Route path='/admin/send_notification' element={<AdminAddNotice></AdminAddNotice>}></Route>
        <Route path='/admin/complaints' element={<AdminComplaints></AdminComplaints>}></Route>


        {/* Remaining For Evalutaion */}
        <Route path="/StudentSidebar" element={<StudentSideBar />}></Route>
        <Route path="/StudentSubjects" element={<StudentSubjects />}></Route>
        <Route path="/StudentProfile" element={<StudentProfile />}></Route>
        <Route path="/TeacherSideBar" element={<TeacherSideBar />}></Route>
        <Route path="/TeacherProfile" element={<TeacherProfile />}></Route>

      </Routes>
      <Footer></Footer>
      {/* <div>
        <a href={"/login"} className="mx-2">
          Login
        </a>
        <a href={"/logout"} className="mx-2">
          Logout
        </a>
        <a href={"/TeacherProfile"} className="mx-2">
          TeacherProfile
        </a>
        <a href={"/TeacherSideBar"} className="mx-2">
          TeacherSideBar
        </a>
        <a href={"/TeacherViewStudent"} className="mx-2">
          TeacherViewStudent
        </a>
        <a href={"/StudentAttendance"} className="mx-2">
          StudentAttendance
        </a>
        <a href={"/chooseUser"}>chooseUser</a>
      </div> */}
    </div>
  );
}

export default App;
