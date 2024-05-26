import React, { useEffect } from "react";
import { useState } from "react";
import "./teacher.css";
import { Button } from "@mui/material";
import { Input, Select } from "antd";
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

const TeacherAddMarks = () => {
const [students,setStudents] = useState(data);
  const handleSubmit = () => {
    // console.log(present);
  };

  return (
    <>
      <Strip></Strip>
      <div className="teacher-attendance-title"> Result : 
      <span className="my-2 text-red-400">
                Default Score will be Zero 
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
            <hr></hr>
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
            <hr></hr>
             <p>Total Marks</p>
            <Input></Input>
            <hr></hr>
            <p>Subject</p>
            <Input></Input>
        </div>
        <div>
          {students.map((student) => (
            <div className="attendence-name">
              <p>{student._id}</p>
              <div>
                <p>{student.name}</p>
              </div>
              <div className="flex gap-2 attendance-group">
                    <Input placeholder="obtained Marks"></Input>
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
