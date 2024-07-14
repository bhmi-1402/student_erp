import "./admin.css";
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

const AdminAddClass = () => {
  const [data, setData] = useState({
    Name: "",
    Alias: "",
    Subjects: [],
    Semester: 1,
  });

  const [subjects, setSubjects] = useState([]);
  const [currentSubject, setCurrentSubject] = useState(false);
  const [subject, SetSubject] = useState({
    subjectName: "",
    alias: "",
  });

  const getSubject = async () => {
    try {
      const subjectsResponse = await axios.get(path + "admin/subject");
      setSubjects(subjectsResponse.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSubject();
  }, []);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      console.log(data);
      const res = await axios.post(path + "admin/addClass", data);
      setData({
        Name: "",
        Alias: "",
        Subjects: [],
        Semester: 1,
      });
      if (res.data.error) {
        alert("Error");
      }
    } catch (error) {
      alert("Some Error Occured");
    }
  };

  const handleSubject = async () => {
    try {
      const resp = await axios.post(path + "admin/addSubject", {
        ...subject,
      });
      SetSubject({
        subjectName: "",
        alias: "",
      });
      console.log(resp);
    } catch (err) {}
  };

  return (
    <div>
      <div className="adminform-title">Add Class Data to Database</div>
      <div className="adminform">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="Name"
          value={data.Name}
          onChange={onChangeHandler}
        />
        <TextField
          id="outlined-basic"
          label="Alias"
          name="Alias"
          variant="outlined"
          value={data.Alias}
          onChange={onChangeHandler}
        />

        <FormControl>
          <InputLabel>Semester</InputLabel>
          <Select
            label="Semester"
            value={data.Semester}
            onChange={(e) => setData({ ...data, Semester: e.target.value })}
          >
            <MenuItem value={1}>First</MenuItem>
            <MenuItem value={2}>Second</MenuItem>
            <MenuItem value={3}>Third</MenuItem>
            <MenuItem value={4}>Fourth</MenuItem>
            <MenuItem value={5}>Fifth</MenuItem>
            <MenuItem value={6}>Sixth</MenuItem>
            <MenuItem value={7}>Seventh</MenuItem>
            <MenuItem value={8}>Eight</MenuItem>
          </Select>
        </FormControl>

        <div></div>
        <div>Add Subject One by One</div>
        <div></div>
        <hr></hr>
        <hr></hr>

        <FormControl>
          <InputLabel>Subject</InputLabel>
          <Select
            label="Subjects"
            value={currentSubject.Name}
            onChange={(e) => setCurrentSubject(e.target.value)}
          >
            {subjects.map((sub) => {
              return <MenuItem value={sub}>{sub.Name}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <div></div>
        <div>
          <Button
            onClick={() => {
              if (currentSubject) {
                setData({
                  ...data,
                  Subjects: [...data.Subjects, currentSubject],
                });
                setCurrentSubject({});
              }
            }}
            variant="contained"
          >
            Add Subject
          </Button>
        </div>

        <div></div>
      </div>

      <div className="addLecture mb-6">
        <p className="bg-gray-200">
          <span className="mx-2">Subject</span>
          <span className="mx-2">Code</span>
          {/* <span className="mx-2">Subject</span> */}
        </p>
        {data.Subjects.map((lec) => {
          return (
            <p>
              <span className="mx-2">{lec.Name?.toUpperCase()}</span>
              <span className="mx-2">{lec.Alias}</span>
              {/* <span className="mx-2">{lec.subject?.toUpperCase()}</span> */}
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
          Add Class to Database
        </Button>
      </div>

      <div className="adminform-title mt-4">Add Subject Data to Database</div>

      <div className="adminform">
        <TextField
          name="subject"
          onChange={(e) =>
            SetSubject({ ...subject, subjectName: e.target.value })
          }
          value={subject.subjectName}
          label="Subject"
        ></TextField>
        <TextField
          name="subject"
          onChange={(e) => SetSubject({ ...subject, alias: e.target.value })}
          value={subject.alias}
          label="Alias"
        ></TextField>

        <Button
          variant="contained"
          onClick={handleSubject}
          sx={{ width: "200px" }}
        >
          Add Subjects
        </Button>
      </div>
    </div>
  );
};

export default AdminAddClass;
