import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  LinearProgress,
  Chip,
} from "@mui/material";
import path from "../../path";
import axios from "axios";
// import './AdminTeacher.css'

const AdminTeacher = () => {
  const [data, setData] = useState({
    FullName: "",
    Email: "",
    Password: "",
    Lectures: [],
    PhoneNumber : "",
    Gender : "",
    isAdmin:false
  });
  const [error,seterror] = useState("");
  const [subjectAvailable,setSubjectAvailable] = useState(false);
  const [classSelected,setClassSelected] = useState([]);

  const [lecture, setLecture] = useState({
    Branch:[],
    Semester:"",
    Subject:""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      console.log(data);
      if(data.Lectures.length == 0 ) return;
      const res=await axios.post(path+'admin/addToTeachers',data)
      if(res.data.error){
          alert("Error");
      }else{
         setData({
          FullName: "",
          Email: "",
          Password: "",
          Lectures: [],
          PhoneNumber : "",
          Gender : "Male",
          isAdmin:false
         })
      }
    } catch (error) {
      alert("Some Error Occured");
    }
  };

  const getClasses = async(req,res)=>{
    try{
      const response = await axios.get(path+'admin/class');
      console.log(response);
      setClassSelected(response.data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getClasses();
  },[]);

  const addLectureHandler = () => {
    let lecturesArray = data.Lectures;
    lecturesArray.push(lecture);
    setData({ ...data, Lectures: lecturesArray });
    setLecture({
      Branch:[],
      Semester:0,
      Subject:{}
    });
  };



  return (
    <div>
      <div className="adminform-title">Add Teacher Data to Database</div>
      <div className="adminform">
        <TextField
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          name="FullName"
          value={data.FullName}
          onChange={onChangeHandler}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          name="Email"
          variant="outlined"
          value={data.Email}
          onChange={onChangeHandler}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          name="Password"
          variant="outlined"
          value={data.Password}
          onChange={onChangeHandler}
        />
         <TextField
          id="outlined-basic"
          label="Phone"
          name="PhoneNumber"
          variant="outlined"
          value={data.PhoneNumber}
          onChange={onChangeHandler}
        />
        <FormControl>
          <InputLabel>Gender</InputLabel>
          <Select
            label="Gender"
            value={data.Gender}
            onChange={(e) =>
              setData({...data,Gender : e.target.value})
            }
          >
           <MenuItem value={'Male'}>Male</MenuItem>
           <MenuItem value={'female'}>Female</MenuItem>
           <MenuItem value={'Other'}>Other</MenuItem>
          </Select>
        </FormControl> 
        <FormControl>
          <InputLabel>is Admin ? </InputLabel>
          <Select
            label="is Admin ?"
            value={data.isAdmin}
            onChange={(e) =>
              setData({...data,isAdmin:e.target.value})
            }
          >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
          </Select>
        </FormControl>   
        <div></div>
        <div></div>
        <div>Lecture Details Details</div>
        <div></div>
        <hr></hr>
        <hr></hr>

        <FormControl>
          <InputLabel>Class</InputLabel>
          <Select
            label="Branch"
            value={lecture.Branch}
            onChange={(e) => setLecture({ ...lecture, Branch: e.target.value })}
          >
           {
            classSelected.map((branch)=>{
              return <MenuItem value={branch}>
                SEM : {branch.Semester + " " + branch.Name} 
              </MenuItem>
            })
           }
          </Select>
        </FormControl>
      <FormControl>
          <InputLabel>Select Subject</InputLabel>
          <Select
            label="Subject"
            value={lecture.Subject}
            onChange={(e) =>
              setLecture({ ...lecture, Subject: e.target.value })
            }
          >
            {
              lecture?.Branch?.Subjects?.map((sub)=><MenuItem value={sub}>{sub.Name}</MenuItem>)
            }
          </Select>
        </FormControl> 
        <div>
          <Button onClick={addLectureHandler} variant="outlined">
            Add Lecture
          </Button>
        </div>
        <div></div>
      </div>

      <div className="addLecture">
        <p className="bg-gray-200">
          <span className="mx-2">Branch</span>
          <span className="mx-2">Semester</span>
          <span className="mx-2">Subject</span>
        </p>
        {data.Lectures.map((lec) => {
          return (
            <p>
              <span className="mx-2">{lec.Branch?.Name?.toUpperCase()}</span>
              <span className="mx-2">{lec.Branch?.Semester}</span>
              <span className="mx-2">{lec.Subject?.Name?.toUpperCase()}</span>
            </p>
          );
        })}
      </div>

      <div>
        <p className="m-2 p-2 flex justify-center text-red-400">{error}</p>
      </div>
      <div className="admin-form-submit-button m-8">
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ width: "200px" }}
        >
          Add Teacher Data 
        </Button>
      </div>
    </div>
  );
};

export default AdminTeacher;
