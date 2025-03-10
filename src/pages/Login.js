import { useEffect, useState } from "react";
import { Link, useNavigate , useSearchParams } from "react-router-dom";
import {
  Button,
  Grid,
  Box,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  IconButton,
  InputAdornment,
  CircularProgress,
  Backdrop,
  LinearProgress,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bgpic from "../assets/designlogin.jpg";
import { LightPurpleButton } from "../components/buttonStyles";
import styled from "styled-components";
import admin_profile from './../assets/admin.jpeg'
import student_profile from './../assets/student.jpeg'
import teacher_profile from './../assets/teacher.jpeg'
import axios from "axios";
import path from "./../path";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";

const defaultTheme = createTheme();

const LoginPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [SearchParams] = useSearchParams();
  const [load,setLoad] = useState(false);
  const [UserType, setUserType] = useState(SearchParams.get("user"));
  const [Email,setEmail] = useState("");
  const [Password,setPassword] = useState("");
  const user = useSelector(state => state.user.data);
  
  useEffect(()=>{
    if(user) navigate('/');
  },[]);

  if(UserType == ''){
    setUserType('Student')
  }
  
  const handleSubmit = async ()=>{
    setLoad(true);
      try{
        if(UserType == 'admin' || UserType == 'teacher'){
          const response = await axios.post(path+'teacher/login',{Email,Password});
          console.log(response)
          if(response.data.success){
            dispatch(addUser(response.data.user));
            navigate('/');
          }
        }else{
          const response = await axios.post(path+'student/login',{Email,Password});
          if(response.data.success){
            dispatch(addUser(response.data.user));
            navigate('/');
          }
          console.log(response)
        }
      }catch(err){
        console.log(err);
      }
      setLoad(false);
  }

  const guestLogin = async ()=>{
    setLoad(true);
      try{
        if(UserType == 'admin' || UserType == 'teacher'){
          const response = await axios.get(path+'teacher/login/guest');
          console.log(response)
          if(response.data.success){
            dispatch(addUser(response.data.user));
            navigate('/');
          }
        }else{
          const response = await axios.get(path+'student/login/guest');
          if(response.data.success){
            dispatch(addUser(response.data.user));
            navigate('/');
          }
          console.log(response)
        }
      }catch(err){
        console.log(err);
      }
      setLoad(false);
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      {
        load && <LinearProgress></LinearProgress>
      }
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">
              Login { UserType && UserType[0].toUpperCase() + UserType.slice(1) }
            </Typography>
            <Typography variant="h7">
              Welcome back! Please enter your details
            </Typography>
            <Box component="form" noValidate sx={{ mt: 2 }}>
             

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                value={Email}
                onChange={e=>setEmail(e.target.value)}
                label="Enter your email"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={Password}
                onChange={e=>setPassword(e.target.value)}
                label="Password"
                id="password"
                autoComplete="current-password"
              ></TextField>
              <Grid
                container
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
               
              </Grid>

              <LightPurpleButton
          
                fullWidth
                onClick={()=>{
                 handleSubmit();
                }}
                disabled={load}
                variant="contained"
                sx={{ mt: 3 }}
              >
                Login
              </LightPurpleButton>
              <Button
                fullWidth
                variant="outlined"
                onClick={guestLogin}
                sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
              >
                Login as Guest
              </Button>

            </Box>
          </Box>
        </Grid>
        
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
              backgroundImage: `url(${ UserType == 'admin' ? admin_profile : UserType == 'teacher' ? teacher_profile : student_profile })`,
              backgroundRepeat: "no-repeat",
            }}
            />
      </Grid>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="primary" />
        Please Wait
      </Backdrop>
      
    </ThemeProvider>
  );
};

export default LoginPage;

const StyledLink = styled(Link)`
  margin-top: 9px;
  text-decoration: none;
  color: #7f56da;
`;
