import { Student } from 'phosphor-react';
import '../Dashboard.css';
import { useEffect } from 'react';
import Strip from '../../components/common/Strip';
import attendance_image from './../../assets/Attendence.jpeg'
import marks_image from './../../assets/Add marks.jpeg'
import Complaints from './../../assets/Complaints.jpeg'
import feedback from './../../assets/feedback.jpeg'
import form from './../../assets/form.jpeg'
import { Link } from 'react-router-dom';
const TeacherDashboard = ()=>{
    
    useEffect(()=>{

    },[]);
    
    return <>
        <Strip></Strip>
        <div className='dashboard'>
                <Link className='dashboard-item' to='/teacher/attendance'>
                    <img
                        src={attendance_image}
                    ></img>
                    <p>Mark Attendance</p>
                </Link>
                <Link className='dashboard-item' to='/teacher/add_marks'>
                    <img
                        src={marks_image}
                    ></img>
                    <p>Add Marks</p>
                </Link>
                <Link className='dashboard-item' to={"/student/register_complaint"}>
                    <img
                        src={Complaints}
                    ></img>
                    <p>Grievence</p>
                </Link>
                
        </div>
    </>;
}
export default TeacherDashboard;