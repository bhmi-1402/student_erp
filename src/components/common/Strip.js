import './Strip.css'
import profilepic from '../../assets/jssaten.jpeg'
import logo from '../../assets/eduportal.jpeg';
import { useSelector } from 'react-redux';
const Strip = ()=>{
    const user = useSelector(state=>state.user.data);
    return <>
    <div className="home-strip ">
        <div className='home-strip-left'>
        <div className='home-strip-left-image'>
                    <img className={"h-[100px]"} src={logo}></img>
            </div>
            <div className='home-strip-right-text'>
                 <p>EDU - PORTAL</p>
                 <span>A Student ERP Portal</span>
            </div>
        </div>
        <div className='home-strip-right'>
            <div className='home-strip-right-image'>
                    <img src={profilepic}></img>
            </div>
            <div className='home-strip-right-text'>
                    <p>{user.FullName}</p>
                    <span>{user.RollNumber ? user.RollNumber : user.Email}</span>
                    <span>{user.Branch?.Name}</span>
            </div>
        </div>
    </div>
    </>;
}

export default Strip;