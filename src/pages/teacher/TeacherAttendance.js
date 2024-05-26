import React, { useEffect } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import "./teacher.css";
import { Button } from "@mui/material";
import { Select } from "antd";
import Strip from "../../components/common/Strip";

const data = [
  { name: "Abhay", _id: "2100911540002" },
  { name: "Deepanshu", _id: "2100911540014" },
  { name: "Harsh", _id: "210091154021" },
  { name: "Naveen", _id: "2100911540029" },
  { name: "Rahul", _id: "2100911540039" },
  { name: "Yash", _id: "2100911540059" },
  { name: "Bineet", _id: "21009115400BMC" },
  { name: "Dhannu", _id: "2100911_DMC" },
  { name: "Satyam", _id: "2100911_JODHA" },
];

const TeacherAttendance = () => {
  const [students, setStudents] = useState(data);
  const [present, setPresent] = useState([]);

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
  const handleSubmit = () => {
    console.log(present);
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
            <p>Select Class</p>
            <Select
            defaultValue={'CSDS'}
            options={[
              {value:"CSDS",label:"Computer Science : Data Science"},
              {value:"IT",label:"Information Technology"},
              {value:"CSE",label:"Computer Science Eng."},
              {value:"CSAI",label:"Computer Science : AI"},
              {value:"EE",label:"Electronics Eng."},
              {value:"CE",label:"Civil Eng."}
            ]}
            ></Select>
            <p>Select Semester</p>
            <Select
             defaultValue={'5'}
             options={[
               {value:"1",label:"Semester I"},
               {value:"2",label:"Semester II"},
               {value:"3",label:"Semester III"},
               {value:"4",label:"Semester IV"},
               {value:"5",label:"Semester V"},
               {value:"6",label:"Semester VI"}
             ]}
            ></Select>
        </div>
        <div>
          {students.map((student) => (
            <div className="attendence-name">
              <p>{student._id}</p>
              <div>
                <p>{student.name}</p>
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
