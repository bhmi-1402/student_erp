import { Student } from 'phosphor-react';
import '../Dashboard.css';
import { useEffect } from 'react';
import Strip from '../../components/common/Strip';
import attendance_image from './../../assets/attandance.jpeg'
import marks_image from './../../assets/marks.jpeg'
import fees_image from './../../assets/fees.jpeg'
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
                        src={attendance_image}
                    ></img>
                    <p>Add Marks</p>
                </Link>
                
        </div>
    </>;
}
export default TeacherDashboard;