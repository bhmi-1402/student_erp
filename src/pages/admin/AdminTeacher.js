import React, { useState } from "react";
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
    name: "",
    email: "",
    password: "",
    lectures: [],
  });

  const [lecture, setLecture] = useState({
    branch: "",
    semester: "",
    subject: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      console.log(data);
      const res=await axios.post(path+'admin/addToTeachers',data)
      if(res.data.error){
          alert("Error");
      }
    } catch (error) {
      alert("Some Error Occured");
    }
  };

  const addLectureHandler = () => {
    let lecturesArray = data.lectures;
    lecturesArray.push(lecture);
    setData({ ...data, lectures: lecturesArray });
    setLecture({
      branch: "",
      semester: "",
      subject: "",
    });
  };

  return (
    <div>
      <div className="adminform-title">Add Teacher Data to Database</div>
      <div className="adminform">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          value={data.name}
          onChange={onChangeHandler}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          value={data.email}
          onChange={onChangeHandler}
        />
        <TextField
          id="outlined-basic"
          name="password"
          label="Password"
          variant="outlined"
          value={data.password}
          onChange={onChangeHandler}
        />
        <div></div>
        <div>Lecture Details Details</div>
        <div></div>
        <hr></hr>
        <hr></hr>

        <FormControl>
          <InputLabel>Class</InputLabel>
          <Select
            label="Branch"
            value={lecture.branch}
            onChange={(e) => setLecture({ ...lecture, branch: e.target.value })}
          >
            <MenuItem value={"cs"}>Computer Science</MenuItem>
            <MenuItem value={"it"}>Information Technology</MenuItem>
            <MenuItem value={"ece"}>Electronics</MenuItem>
            <MenuItem value={"ee"}>Electrical</MenuItem>
            <MenuItem value={"eee"}>Electrical & Electronics</MenuItem>
            <MenuItem value={"civil"}>Civil</MenuItem>
            <MenuItem value={"me"}>Mechanical</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel>Current Semester</InputLabel>
          <Select
            label="Semester"
            value={lecture.semester}
            onChange={(e) =>
              setLecture({ ...lecture, semester: e.target.value })
            }
          >
            <MenuItem value={"1"}>First</MenuItem>
            <MenuItem value={"2"}>Second</MenuItem>
            <MenuItem value={"3"}>Third</MenuItem>
            <MenuItem value={"4"}>Fourth</MenuItem>
            <MenuItem value={"5"}>Fifth</MenuItem>
            <MenuItem value={"6"}>Sixth</MenuItem>
            <MenuItem value={"7"}>Seventh</MenuItem>
            <MenuItem value={"8"}>Eight</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="subject"
          onChange={(e) =>
            setLecture({ ...lecture, subject: e.target.value.toLowerCase() })
          }
          value={lecture.subject}
          label="Subject"
        ></TextField>
        <div></div>
        <div>
          <Button onClick={addLectureHandler} variant="contained">
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
        {data.lectures.map((lec) => {
          return (
            <p>
              <span className="mx-2">{lec.branch?.toUpperCase()}</span>
              <span className="mx-2">{lec.semester}</span>
              <span className="mx-2">{lec.subject?.toUpperCase()}</span>
            </p>
          );
        })}
      </div>
      <div className="admin-form-submit-button">
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ width: "200px" }}
        >
          Add Teacher
        </Button>
      </div>
    </div>
  );
};

export default AdminTeacher;
