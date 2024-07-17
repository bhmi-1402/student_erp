import React, { useEffect } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import axios from "axios";
import path from './../../path';
import "./teacher.css";
import {
  Select,
  TextField,
  MenuItem,
  FormControl,
  Button,
  InputLabel,
  LinearProgress,
} from "@mui/material";
// import { Select } from "antd";
import { Input } from "antd";
import demoTeacher from './teacherDemo.json';
import Strip from "../../components/common/Strip";
import { Student } from "phosphor-react";

const TeacherAttendance = () => {
  const [students, setStudents] = useState([]);
  const [teacherUser, setTeacherUser] = useState(demoTeacher);
  const [branch, setBranch] = useState({});
  const [Lectures, setLectures] = useState([]);
  const [present, setPresent] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(1);

  useEffect(() => {
    let TempLectures = teacherUser.Lectures.filter(
      (lec) => lec.Branch.Semester == selectedSemester
    );
    if(TempLectures.length == 0){
      // setLectureDisabled(true);
      setLectures([
        {
          Branch: {
            Name: "NO DATA FOUND",
          },
        },
      ]);
    }
    setLectures(TempLectures);
  }, [selectedSemester]);

  const FetchStudent = async (lec)=>{
    try{
      setBranch(lec)
      console.log(lec);
      console.log(lec?.Branch._id)
      const response  = await axios.get(path+'teacher/fetchStudent?id='+lec?.Branch._id);
      if(response.data){
        setStudents(response.data);
      }
      console.log(response);
    }catch(err){
      console.log(err);
    }
  }

  const handlePresent = (id) => {
    const presentArray = [...present, id];
    setPresent(presentArray);
  };

  const handleAbsent = (id) => {
    let presentArray = present;
    const TempArray = presentArray.filter((studentID) => {
      return studentID != id;
    });
    setPresent(TempArray);
  };
  
  const handleSubmit = async () => {
      try{
        const response = await axios.post(path+'teacher/markAttendance',{
          PresentStudents : present,
          Semester : branch.Branch.Semester,
          SubjectId : branch.Subject._id,
          SubjectName : branch.Subject.Name,
          TeacherId : teacherUser._id,
          BranchName : branch.Branch.Name,
          BranchID : branch.Branch._id
        });
      }catch(err){
        console.log(err);
      }
  };

  const isPresent = (id) => {
    return present.includes(id);
  };

  return (
    <>
      <Strip></Strip>
      <div className="teacher-attendance-title">Mark Attendence : 
      <span className="my-2 text-red-400">
              * By Default all students will be marked absent 
            </span>
      </div>
      <div className="attendance-container">
        <div className="attendance-left-bar">
        <p>Select Semester</p>
          <FormControl>
            {/* <InputLabel>Semester</InputLabel> */}
            <Select
              // label="Semester"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
            >
              <MenuItem value={1}>SEMESTER I</MenuItem>
              <MenuItem value={2}>SEMESTER II</MenuItem>
              <MenuItem value={3}>SEMESTER III</MenuItem>
              <MenuItem value={4}>SEMESTER IV</MenuItem>
              <MenuItem value={5}>SEMESTER V</MenuItem>
              <MenuItem value={6}>SEMESTER VI</MenuItem>
              <MenuItem value={7}>SEMESTER VII</MenuItem>
              <MenuItem value={8}>SEMESTER VIII</MenuItem>

            </Select>
          </FormControl>
          <hr></hr>

          <p>Select Class</p>
          <FormControl>
            {/* <InputLabel>Branch</InputLabel> */}
            <Select
              // label="Branch"
              value={branch}
              placeholder="Select Branch"
              onChange={(e) =>{
                FetchStudent(e.target.value);
              }}
            >
              {Lectures?.map((lec) => (
                <MenuItem value={lec}>{lec.Branch.Name + " - " + lec.Subject.Alias+""}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <hr></hr>
          <p>Subject</p>
          <Input value={branch?.Subject?.Name}></Input>
          <hr></hr>
        </div>
        <div>
          {students.map((student) => (
            <div className="attendence-name">
              <p>{student.RollNumber}</p>
              <div>
                <p>{student.FullName}</p>
              </div>
              <div className="flex gap-2 attendance-group">
                {isPresent(student._id) ? (
                  <Button
                    variant="outlined"
                    sx={{ color: "red", borderColor: "red" }}
                    onClick={() => handleAbsent(student._id)}
                  >
                    {" "}
                    Absent{" "}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      borderColor: "red",
                      backgroundColor: "red",
                    }}
                  >
                    {" "}
                    Absent{" "}
                  </Button>
                )}

                {isPresent(student._id) ? (
                  <Button variant="contained" sx={{ backgroundColor: "green" }}>
                    {" "}
                    Present{" "}
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    sx={{ color: "green", borderColor: "green" }}
                    onClick={() => handlePresent(student._id)}
                  >
                    {" "}
                    Present{" "}
                  </Button>
                )}
              </div>
            </div>
          ))}
          <div className="flex justify-center py-2 my-2 flex-col items-center gap-10">
            <p>Present Student  <strong>{present?.length}</strong> out of  <strong>{students?.length}</strong></p>
            <Button variant="contained" onClick={handleSubmit}>
              Submit Attendence
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherAttendance;
