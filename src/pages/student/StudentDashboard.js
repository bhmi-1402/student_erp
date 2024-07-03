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
const StudentDashboard = ()=>{
    
    useEffect(()=>{

    },[]);
    
    return <>
        <Strip></Strip>
        <div className='dashboard'>
                <Link className='dashboard-item' to='/student/attendance'>
                    <img
                        src={attendance_image}
                    ></img>
                    <p>Attendance</p>
                </Link>
                <Link className='dashboard-item' to='/student/marks'>
                    <img
                        src={marks_image}
                    ></img>
                    <p>Marks</p>
                </Link>
                <Link className='dashboard-item' to='/student/fees'>
                    <img
                        src={fees_image}
                    ></img>
                    <p>Fees</p>
                </Link>
                <div className='dashboard-item'>
                    <img
                        src={feedback}
                    ></img>
                    <p>Feedback</p>
                </div>
                <Link className='dashboard-item' to={"/student/register_complaint"}>
                    <img
                        src={form}
                    ></img>
                    <p>Grievence</p>
                </Link>
        </div>
    </>;
}
export default StudentDashboard;