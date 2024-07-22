import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Login } from "@mui/icons-material";
import { useSelector } from "react-redux";
import Title from './../assets/TitleImage2.jpeg'
const LandingPage = () => {
  const user = useSelector(state=>state.user.data)
  return (
    <>
      <div className="home-container">
        <div className="home-left">
          <img src={Title}></img>
        </div>
        <div className="home-right">
          <h1>
            {" "}
            Welcome to
            Student
            <strong className="logo-text-second text-bold">
            PRO
            </strong>
           
          </h1>
          <p style={{textAlign:"center"}}>
            {" "}
            Streamline school management, class organization, and add students
            and faculty. Seamlessly track attendance, assess performance, and
            provide feedback. Access records, view marks, and communicate
            effortlessly.
          </p>
          <p>
           <strong> For Students </strong>: Check Attendance,Marks and Pay Fees with register
            complaint along with Suggestion
          </p>
          <p>
            <strong>For Teacher</strong> : Mark Attendance,Update Result,Report A Student, File
            Suggestion
          </p>
          <span></span>
          <div className="center">
          {
            !user ?  <Link to={'/choose_user'}>
            <button>Login<Login></Login></button>
            </Link> :  <Link to={'/dashboard'}>
            <button>Go To DashBoard</button>
          </Link>
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
