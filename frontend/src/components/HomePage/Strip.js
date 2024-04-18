import './Strip.css'
import profilepic from './../static/jssaten.jpeg'
import logo from './../static/eduportal.jpeg';
const Strip = ()=>{
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
                    <p>Naveen Chaudhary</p>
                    <span>21CSDS009</span>
                    <span>CS - DS</span>
            </div>
        </div>
    </div>
    </>;
}

export default Strip;