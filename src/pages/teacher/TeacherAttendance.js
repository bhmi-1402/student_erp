import React, { useEffect } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import { Button } from "@mui/material";

const data = [
  { name: "Abhay", _id: "1" },
  { name: "Deepanshu", _id: "2" },
  { name: "Harsh", _id: "3" },
  { name: "Naveen", _id: "4" },
  { name: "Rahul", _id: "5" },
  { name: "Yash", _id: "6" },
  { name: "Bineet", _id: "7" },
  { name: "Dhannu", _id: "8" },
  { name: "Satyam", _id: "9" },
];

const TeacherAttendance = () => {
  const [students, setStudents] = useState(data);
  const [present, setPresent] = useState([]);

  const handlePresent = (id)=>{
      const presentArray = [...present,id];
      setPresent(presentArray);
  }
  const handleAbsent = (id)=>{
    // 2
    let presentArray = present;
    // 1 2 3 4 5 


    const TempArray = presentArray.filter((studentID) => {
      return studentID != id 
      // 2 != 2
    })
    setPresent(TempArray);
  }

  const handleSubmit = ()=>{
        console.log(present);
  }
  const isPresent = (id)=>{
        return present.includes(id);   
  }
  
  return (
    <>
      <div>Mark Attendence</div>
      <div>
        {students.map((student) => (
          <div className="attendence-name">
            <p>{student._id}</p>
            <div>
              <p>{student.name}</p>
            </div>
            <div>
              
              {
                isPresent(student._id) ? <Button variant="contained" sx={{backgroundColor:"green"}} onClick={()=>handleAbsent(student._id)}> Present </Button> : <Button variant="outlined" sx={{color:"red",borderColor:"red"}} onClick={ ()=>handlePresent(student._id)} > Absent </Button>
              }

            </div>
          </div>
        ))}
        <div className="flex justify-center">
        <Button variant="contained" onClick={handleSubmit}>Submit Attendence</Button>
        </div>
      </div>
    </>
  );
};

export default TeacherAttendance;
