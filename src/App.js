import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/common/Navbar";
import ChooseUser from "./pages/ChooseUser";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import StudentAttendance from "./pages/student/StudentAttendence.js";
import AdminForm from "./pages/admin/AdminAddStudent.js";
import AdminAddClass from "./pages/admin/AdminAddClass.js";
import AdminTeacher from "./pages/admin/AdminAddTeacher.js";
import TeacherAttendance from "./pages/teacher/TeacherAttendance.js";
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
import Dashboard from "./pages/Dashboard.js";
import { useSelector } from "react-redux";
import NotFound from "./components/common/NotFound.js";

function App() {
  const user = useSelector((state) => state.user.data);
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        {/* Common Routes */}
        <Route path="/" index element={<Home />}></Route>
        <Route path="/choose_user" element={<ChooseUser />}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/notification"
          element={<NotificationPanel></NotificationPanel>}
        ></Route>
        {user ? (
          <>
            {user.RollNumber ? (
              <>
                <Route
                  path="/dashboard/student"
                  element={<StudentDashboard></StudentDashboard>}
                ></Route>
                <Route
                  path="/student/attendance"
                  element={<StudentAttendance />}
                ></Route>
                <Route
                  path="/student/fees"
                  element={<StudentFees></StudentFees>}
                ></Route>
                <Route path="/student/marks" element={<StudentMarks />}></Route>
                <Route
                  path="/student/register_complaint"
                  element={<StudentAddComplaint />}
                ></Route>
              </>
            ) : (
              <>
                {user.isAdmin ? (
                  <>
                    <Route
                      path="/dashboard/admin"
                      element={<AdminDashboard></AdminDashboard>}
                    ></Route>
                    <Route
                      path="/dashboard/teacher"
                      element={<TeacherDashboard></TeacherDashboard>}
                    ></Route>

                    <Route
                      path="/teacher/attendance"
                      element={<TeacherAttendance></TeacherAttendance>}
                    ></Route>
                    <Route
                      path="/teacher/add_marks"
                      element={<TeacherAddMarks></TeacherAddMarks>}
                    ></Route>
                    <Route
                      path="/admin/add_student"
                      element={<AdminForm></AdminForm>}
                    ></Route>
                    <Route
                      path="/admin/add_teacher"
                      element={<AdminTeacher></AdminTeacher>}
                    ></Route>
                    <Route
                      path="/admin/add_class"
                      element={<AdminAddClass></AdminAddClass>}
                    ></Route>
                    <Route
                      path="/admin/send_notification"
                      element={<AdminAddNotice></AdminAddNotice>}
                    ></Route>
                    <Route
                      path="/admin/complaints"
                      element={<AdminComplaints></AdminComplaints>}
                    ></Route>
                    <Route path="/teacher/register_complaint" element={<StudentAddComplaint />}>
                    </Route>
                  </>
                ) : (
                  <>
                    <Route
                      path="/dashboard/teacher"
                      element={<TeacherDashboard></TeacherDashboard>}
                    ></Route>
                    <Route path="/teacher/register_complaint" element={<StudentAddComplaint />}>
                    </Route>
                    <Route
                      path="/teacher/attendance"
                      element={<TeacherAttendance></TeacherAttendance>}
                    ></Route>
                    <Route
                      path="/teacher/add_marks"
                      element={<TeacherAddMarks></TeacherAddMarks>}
                    ></Route>
                  </>
                )}
              </>
            )}
          </>
        ) : (
          ""
        )}
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
