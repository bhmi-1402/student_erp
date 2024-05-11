import { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Strip from "./components/HomePage/Strip";
import NavBar from "./components/common/Navbar";
import ChooseUser from "./pages/ChooseUser";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Logout from "./pages/Logout.js";
// import Present from './pages/Present.js';
import StudentAttendance from "./pages/student/StudentAttendence.js";
import StudentProfile from "./pages/student/StudentProfile";
import StudentSideBar from "./pages/student/StudentSideBar";
import StudentSubjects from "./pages/student/StudentSubjects";
import TeacherProfile from "./pages/teacher/TeacherProfile.js";
import TeacherSideBar from "./pages/teacher/TeacherSideBar.js";
import path from "./path.js";
import AdminForm from "./pages/AdminForm.js";

function App() {
  return (
    <div className="App">

      <NavBar></NavBar>
      <Routes>
        {/* <Route path='/present' element={<Present/>}></Route> */}
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/chooseUser" element={<ChooseUser />}></Route>
        <Route path="/StudentSidebar" element={<StudentSideBar />}></Route>
        <Route path="/StudentSubjects" element={<StudentSubjects />}></Route>
        <Route path="/StudentProfile" element={<StudentProfile />}></Route>
        <Route path="/StudentAttendance" element={<StudentAttendance />}></Route>
        <Route path="/TeacherSideBar" element={<TeacherSideBar />}></Route>
        <Route path="/TeacherProfile" element={<TeacherProfile />}></Route>
        <Route path="/Logout" element={<Logout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/adminform" element={<AdminForm></AdminForm>}></Route>
      </Routes>

      <div>
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
      </div>
    </div>
  );
}

export default App;
