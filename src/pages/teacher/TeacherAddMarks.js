import React, { useEffect } from "react";
import { useState } from "react";
import "./teacher.css";
import { Button } from "@mui/material";
import { Input } from "antd";
import demoTeacher from "./teacherDemo.json";
import Strip from "../../components/common/Strip";
import {
  Select,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  LinearProgress,
} from "@mui/material";
import axios from "axios";
import path from './../../path'
import { Subject } from "@mui/icons-material";


const TeacherAddMarks = () => {
  
  const [students, setStudents] = useState([]);
  const [teacherUser, setTeacherUser] = useState(demoTeacher);
  const [branch, setBranch] = useState({});
  const [Lectures, setLectures] = useState([]);
  const [TotalMarks,setTotalMarks] = useState(100);
  const [isLectureDisables, setLectureDisabled] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(1);

  useEffect(() => {
    let TempLectures = teacherUser.Lectures.filter(
      (lec) => lec.Branch.Semester == selectedSemester
    );
    if(TempLectures.length == 0){
      setLectureDisabled(true);
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

  // useEffect(()=>{
  //   console.log(Lectures,branch);
  // },[branch,Lectures]);

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

  const changeMarks = (event,index)=>{
      let TempStudent = students;
      TempStudent[index].obtainedMarks = event.target.value;
      setStudents(TempStudent);
  }

  const handleSubmit = async () => {
    // console.log(present);
    try{
      const response = await axios.post(path+'teacher/addResult',{
      Students : students,
      TotalMarks,
      TeacherId : teacherUser._id,
      Subject : branch?.Subject,
      Semester: branch?.Branch.Semester
      });
    }catch(err){
      console.log(err);
    }
  };

  return (
    <>
      <Strip></Strip>
      <div className="teacher-attendance-title">
        {" "}
        Result :
        <span className="my-2 text-red-400">Default Score will be Zero</span>
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
                <MenuItem value={lec}>{lec.Branch.Name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <hr></hr>
          <p>Subject</p>
          <Input value={branch?.Subject?.Name} disabled></Input>
          <hr></hr>
          <p>Total Marks</p>
          <TextField value={TotalMarks} type="Number" onChange={e=>setTotalMarks(e.target.value)}></TextField>
         
        </div>
        <div>
          
          {students.map((student,index) => (
            <div className="attendence-name">
              <p>{student.RollNumber}</p>
              <div>
                <p>{student.FullName}</p>
              </div>
              <div className="flex gap-2 attendance-group">
                <Input placeholder="obtained Marks" onChange={(e,v)=>changeMarks(e,index)}></Input>
              </div>
            </div>
          ))}

          <div className="flex justify-center py-2 my-2 flex-col items-center gap-10">
            {/* <p>Present Student  <strong>{present?.length}</strong> out of  <strong>{students?.length}</strong></p> */}
            <Button variant="contained" onClick={handleSubmit}>
              Submit Marks
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherAddMarks;
