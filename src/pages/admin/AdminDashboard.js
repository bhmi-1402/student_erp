import { Student } from 'phosphor-react';
import '../Dashboard.css';
import { useEffect } from 'react';
import Strip from '../../components/common/Strip';
import Add_Student from './../../assets/Add Students.jpeg'
import teacher from './../../assets/Add Teacher.jpeg'
import notice from './../../assets/send notice.jpeg'
import Class from './../../assets/Add Class.jpeg'
import Complaints from './../../assets/Complaints.jpeg'
import { Link } from 'react-router-dom';
const AdminDashboard = ()=>{
    useEffect(()=>{
    },[]);
    return <>
        <Strip></Strip>
        <div className='dashboard'>
                <Link className='dashboard-item' to='/admin/add_student'>
                    <img
                        src={Add_Student}
                    ></img>
                    <p>Add Student</p>
                </Link>
                <Link className='dashboard-item' to='/admin/add_Teacher'>
                    <img
                        src={teacher}
                    ></img>
                    <p>Add Teacher</p>
                </Link>
                <Link className='dashboard-item' to='/admin/add_class'>
                    <img
                        src={Class}
                    ></img>
                    <p>Add Class</p>
                </Link>
                <Link className='dashboard-item' to='/admin/send_notification'>
                    <img
                        src={notice}
                    ></img>
                    <p>Send Notice</p>
                </Link>
                <Link className='dashboard-item' to='/admin/complaints'>
                    <img
                        src={Complaints}
                    ></img>
                    <p>Complaints</p>
                </Link>
        </div>
    </>;
}
export default AdminDashboard;