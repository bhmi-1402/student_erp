import React from 'react'
import {Routes,Route} from 'react-router-dom'
import StudentProfile from '../student/StudentProfile'
import StudentAttendence from '../student/StudentAttendence'
import StudentSideBar from '../student/StudentSideBar'
import StudentSubjects from '../student/StudentSubjects'
// import StudentSubjects from  from '../student/StudentSubjects'



const StudentDashboard = () => {
  return (
    <>
    <div>
        <Route path='/profile' element={<StudentProfile></StudentProfile>}></Route>
        <Route path='/Attendence' element={<StudentAttendence></StudentAttendence>}></Route>
        <Route path='/student-sidebar' element={<StudentSideBar></StudentSideBar>}></Route>
        <Route path='/student-subjects' element={<StudentSubjects></StudentSubjects>}></Route>

        {/* <Route path='/subject' element={<StudentSubjects></StudentSubjects>}></Route> */}
    </div>
    
    
    </>
    
  )
}

export default StudentDashboard
