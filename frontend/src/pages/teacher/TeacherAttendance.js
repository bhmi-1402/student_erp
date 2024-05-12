import React, { useEffect } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

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

  const handleStudents = (event, newStudents) => {
    setPresent(newStudents);
  };

  console.log(students);

  return (
    <>
      <div>Mark Attendence</div>
      <div>
          {
            students.map(student=><div>
              
            </div>)
          }
      </div>
    </>
  );
};

export default TeacherAttendance;
