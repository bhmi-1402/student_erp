import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Container, Grid, Box, Button } from "@mui/material";
import styled from "styled-components";
import { Login } from "@mui/icons-material";
import Students from "../assets/school-software.png";
import { LightPurpleButton } from "../components/buttonStyles.js";

const Home = () => {
  return (
    <StyledContainer>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <img src={Students} alt="students" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <StyledTitle>
              Welcome to
              <br />
              ERP Management
              <br />
              System
            </StyledTitle>
            <StyledText>
              Streamline school management, class organization, and add students
              and faculty. Seamlessly track attendance, assess performance, and
              provide feedback. Access records, view marks, and communicate
              effortlessly.
            </StyledText>
            <StyledText>
              For Students : Check Attendance,Marks and Pay Fees with register
              complaint along with Suggestion
            </StyledText>
            <StyledText>
              For Teacher : Mark Attendance,Update Result,Report A Student, File
              Suggestion
            </StyledText>
            <StyledBox>
              <StyledLink to="/choose_user">
                <LightPurpleButton variant="outlined" fullWidth>
                  Login
                </LightPurpleButton>
              </StyledLink>
              {/* <StyledLink>
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink> */}
              {/* <StyledText>
                                Don't have an account?{' '}
                                <Link style={{color:"#550080"}}>
                                    Sign up
                                </Link> */}
              {/* </StyledText> */}
            </StyledBox>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

// export default Home;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  min-width: 150px;
`;

const LandingPage = () => {
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
          <Link to={'/choose_user'}>
          <button>Login<Login></Login></button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
