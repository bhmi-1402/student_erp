import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  LinearProgress,
  FormHelperText,
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
    PhoneNumber: "",
    Gender: "",
    isAdmin: false,
  });
  const [error, setError] = useState("");
  const [subjectAvailable, setSubjectAvailable] = useState(false);
  const [classSelected, setClassSelected] = useState([]);
  const [errors, setErrors] = useState({});
  const [lectureErrors, setLectureErrors] = useState({});

  const [lecture, setLecture] = useState({
    Branch: [],
    Semester: "",
    Subject: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!data.FullName) tempErrors.FullName = "Full Name is required";
    if (!data.Email) tempErrors.Email = "Email is required";
    if (!data.Password) tempErrors.Password = "Password is required";
    if (!data.PhoneNumber) tempErrors.PhoneNumber = "Phone Number is required";
    if (!data.Gender) tempErrors.Gender = "Gender is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validateLecture = () => {
    let tempLectureErrors = {};
    if (!lecture.Branch || lecture.Branch.length === 0) tempLectureErrors.Branch = "Branch is required";
    if (!lecture.Subject) tempLectureErrors.Subject = "Subject is required";
    setLectureErrors(tempLectureErrors);
    console.log(Object.keys(tempLectureErrors))
    return Object.keys(tempLectureErrors).length == 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      try {
        console.log(data);
        if (data.Lectures.length === 0) return;
        const res = await axios.post(path + "admin/addToTeachers", data);
        if (res.data.error) {
          alert("Error");
        } else {
          setData({
            FullName: "",
            Email: "",
            Password: "",
            Lectures: [],
            PhoneNumber: "",
            Gender: "Male",
            isAdmin: false,
          });
        }
      } catch (error) {
        alert("Some Error Occurred");
      }
    }
  };

  const getClasses = async (req, res) => {
    try {
      const response = await axios.get(path + "admin/class");
      console.log(response);
      setClassSelected(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getClasses();
  }, []);

  const addLectureHandler = () => {
    if (validateLecture()) {
      let lecturesArray = data.Lectures;
      lecturesArray.push(lecture);
      setData({ ...data, Lectures: lecturesArray });
      setLecture({
        Branch: [],
        Semester: 0,
        Subject: {},
      });
      setLectureErrors({});
    }else{

    }
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
          error={!!errors.FullName}
          helperText={errors.FullName}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          name="Email"
          variant="outlined"
          value={data.Email}
          onChange={onChangeHandler}
          error={!!errors.Email}
          helperText={errors.Email}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          name="Password"
          variant="outlined"
          value={data.Password}
          onChange={onChangeHandler}
          error={!!errors.Password}
          helperText={errors.Password}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          name="PhoneNumber"
          variant="outlined"
          value={data.PhoneNumber}
          onChange={onChangeHandler}
          error={!!errors.PhoneNumber}
          helperText={errors.PhoneNumber}
        />
        <FormControl error={!!errors.Gender}>
          <InputLabel>Gender</InputLabel>
          <Select
            label="Gender"
            value={data.Gender}
            onChange={(e) => setData({ ...data, Gender: e.target.value })}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
          <FormHelperText>{errors.Gender}</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>is Admin ?</InputLabel>
          <Select
            label="is Admin ?"
            value={data.isAdmin}
            onChange={(e) => setData({ ...data, isAdmin: e.target.value })}
          >
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </Select>
        </FormControl>
        <div></div>
        <div></div>
        <div>Lecture Details</div>
        <div></div>
        <hr></hr>
        <hr></hr>

        <FormControl error={!!lectureErrors.Branch}>
          <InputLabel>Class</InputLabel>
          <Select
            label="Branch"
            value={lecture.Branch}
            onChange={(e) => setLecture({ ...lecture, Branch: e.target.value })}
          >
            {classSelected.map((branch) => (
              <MenuItem key={branch.Name} value={branch}>
                SEM : {branch.Semester + " " + branch.Name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{lectureErrors.Branch}</FormHelperText>
        </FormControl>
        <FormControl error={!!lectureErrors.Subject}>
          <InputLabel>Select Subject</InputLabel>
          <Select
            label="Subject"
            value={lecture.Subject}
            onChange={(e) =>
              setLecture({ ...lecture, Subject: e.target.value })
            }
          >
            {lecture?.Branch?.Subjects?.map((sub) => (
              <MenuItem key={sub.Name} value={sub}>
                {sub.Name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{lectureErrors.Subject}</FormHelperText>
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
        {data.Lectures.map((lec, index) => {
          return (
            <p key={index}>
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
