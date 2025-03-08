import React, { useEffect, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
  Avatar,
} from "@mui/material";
import styled from "styled-components";
import admin_profile from "./../assets/admin.jpeg";
import student_profile from "./../assets/student.jpeg";
import teacher_profile from "./../assets/teacher.jpeg";
// import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
const ChooseUser = () => {
  return (
    <StyledContainer>
      <Container className="column">
        <div className="dashbaord-choose-user-font">Choose Action</div>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <StyledPaper elevation={3}>
                <Link to="/login?user=admin">
                  <div className="flex justify-center items-center">
                    <img
                      className="choose_user_image"
                      src={admin_profile}
                    ></img>
                  </div>
                  <StyledTypography>
                    <strong>New Account</strong>
                  </StyledTypography>
                  Create a Fresh new Bank account
                </Link>
              </StyledPaper>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={3}>
              <Link to="/login?user=student">
                <div>
                  <div className="flex justify-center items-center">
                    <img
                      className="choose_user_image"
                      src={student_profile}
                    ></img>
                  </div>
                  <StyledTypography className="text-bold">
                    <strong>Student</strong>
                  </StyledTypography>
                  Login as a student to explore course materials and
                  assignments.
                </div>
              </Link>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={3}>
              <Link to="/login?user=teacher">
                <div>
                  <div className="flex justify-center items-center">
                    <img
                      className="choose_user_image"
                      src={teacher_profile}
                    ></img>
                  </div>
                  <StyledTypography>
                    <strong>Login Account</strong>
                  </StyledTypography>
                  Login to access old account
                </div>
              </Link>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
        Please Wait
      </Backdrop>
      {/* <Popup  setShowPopup={setShowPopup} showPopup={showPopup} /> */}
    </StyledContainer>
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
  background: white;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: #1f1f38;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;

  &:hover {
    background-color: #2c2c6c;
    color: white;
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 10px;
`;
