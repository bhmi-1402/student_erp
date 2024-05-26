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
const AdminDashboard = ()=>{
    useEffect(()=>{
    },[]);
    return <>
        <Strip></Strip>
        <div className='dashboard'>
                <Link className='dashboard-item' to='/admin/add_student'>
                    <img
                        src={attendance_image}
                    ></img>
                    <p>Add Student</p>
                </Link>
                <Link className='dashboard-item' to='/admin/add_Teacher'>
                    <img
                        src={attendance_image}
                    ></img>
                    <p>Add Teacher</p>
                </Link>
                <Link className='dashboard-item' to='/admin/add_class'>
                    <img
                        src={attendance_image}
                    ></img>
                    <p>Add Class</p>
                </Link>
                <Link className='dashboard-item' to='/admin/send_notification'>
                    <img
                        src={attendance_image}
                    ></img>
                    <p>Send Notice</p>
                </Link>
        </div>
    </>;
}
export default AdminDashboard;