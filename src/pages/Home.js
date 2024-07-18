import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Container, Grid, Box, Button } from "@mui/material";
import styled from "styled-components";
import { Login } from "@mui/icons-material";
import Students from "../assets/school-software.png";
import { LightPurpleButton } from "../components/buttonStyles.js";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const user = useSelector(state=>state.user.data)
  return (
    <>
      <div className="home-container">
        <div className="home-left">
          <img src={Students}></img>
        </div>
        <div className="home-right">
          <h1>
            {" "}
            Welcome to
           
            ERP Management
           
            System
          </h1>
          <p>
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
          {
            !user ?  <Link to={'/choose_user'}>
            <button>Login<Login></Login></button>
            </Link> :  <Link to={'/dashboard'}>
          <button>Go To DashBoard</button>
          </Link>
          }
        </div>
      </div>
    </>
  );
};

export default LandingPage;
